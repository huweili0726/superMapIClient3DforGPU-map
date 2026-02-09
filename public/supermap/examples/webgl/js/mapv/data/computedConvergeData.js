// const mapv = require("../mapvAPI/mapv.js");

export default function strongBoundaryData(cityList,targetCityName,time,size) {
    let durationTimeScale = Number(time) || 1.0; // 最短路径走完全程所需要的时间,在此项目中为单位时间
    let batchSize = Number(size) || 10; // 每个批次多少个元素
    let returnData = []; // 将要返回的数据

    // 初始数据：边、点节点
    let node_data = {};
    let edge_data = [];

    // 构造数据边界点数据
    let targetIndex = cityList.findIndex(item => item.name == targetCityName);
    for (let i = 0; i < cityList.length; i++) {
        let city = cityList[i];
        node_data[i] = {
            x: city.position.lng,
            y: city.position.lat
        };
        edge_data.push({
            // 'source': ~~(i * Math.random()), // 就是这个导致线不全的原因
            'source': i,
            'target': targetIndex == -1 ? '0' : targetIndex // 默认第一个city为交汇点
        });
    }

    // 计算强编辑结果results
    let fbundling = mapv.utilForceEdgeBundling()
        .nodes(node_data)
        .edges(edge_data);
    let results = fbundling();

    /** 数据排序 */
    function computedTwoPointDistance(list) { // 计算数组中首尾两个点的距离
        let startPoint = list[0];
        let endPoint = list[list.length - 1];
        let cartesian3_start = SuperMap3D.Cartesian3.fromDegrees(startPoint.x, startPoint.y)
        let cartesian3_end = SuperMap3D.Cartesian3.fromDegrees(endPoint.x, endPoint.y)

        let distance = SuperMap3D.Cartesian3.distance(cartesian3_start, cartesian3_end);
        return distance;
    }
    orderListByDistance(results);
    // 对数组基于首尾距离进行排序，首尾距离既是路线长度，以便在对timeData的分批次中基于距离来计算duration
    function orderListByDistance(results) {
        results.sort((list_pre, list_later) => {
            let pre_distance = computedTwoPointDistance(list_pre);
            let later_distance = computedTwoPointDistance(list_later);
            return later_distance - pre_distance
        })
    }
    console.log("强边界线结果-排序后:", results);


    /** 处理特效线 */
    function handleLineItem(results) {
        // 计算线数据集
        let lineData = [];
        for (let i = 0; i < results.length; i++) {
            let line = results[i];
            let coordinates = [];
            for (let j = 0; j < line.length; j++) {
                coordinates.push([line[j].x, line[j].y]);
            }

            // 线数据集
            lineData.push({
                geometry: {
                    type: 'LineString',
                    coordinates: coordinates
                }
            });
        }

        // 添加特效线数据集及其样式
        let lineItem = computedLineDataSetItem(lineData);
        return lineItem;

        // 基于线数据计算特效线数据集和样式
        function computedLineDataSetItem(data) {
            let dataSet_Line = new mapv.DataSet(data);
            let options_Line = {
                strokeStyle: 'rgba(55, 50, 250, 0.3)',
                globalCompositeOperation: 'lighter',
                shadowColor: 'rgba(55, 50, 250, 0.5)',
                shadowBlur: 10,
                methods: {
                    click: function (item) { }
                },
                lineWidth: 2.0,
                draw: 'simple'
            };

            return [dataSet_Line, options_Line];
        }
    }
    let lineOption = handleLineItem(results)
    returnData.push(lineOption);



    /** 处理动态路线 */
    function hanldeRouteItemList(results) {
        let routeItemList = [];
        let minDistance = computedTwoPointDistance(results[results.length - 1]); // 将排序后最后那条线为最短路线

        // 数据量太多，还需要对数据进行分批处理
        let middleDurationList = []; // 分批后每个批次的持续时间数组
        let batchResult = batchResultList(results)
        console.log("强边界线结果-分批后:", batchResult);
        console.log("数据距离分批持续时间:", middleDurationList);

        // 对排序后的数据进行分批处理，已每个批次的中间元素当作平均长度，从而计算该批次的持续时间
        function batchResultList(originList) {
            let splitList = toSplit(originList, batchSize);
            splitList.forEach(lists => {
                let middleItem = lists[Math.floor(lists.length / 2)]; // 中间元素当作平均长度
                let curDistance = computedTwoPointDistance(middleItem);
                let durationTime = Number((curDistance / minDistance) * durationTimeScale).toFixed(2);
                middleDurationList.push(durationTime);
            })
            return splitList;

            function toSplit(arrlist, size) {
                let index = 0;
                let setArr = [];
                while (index < arrlist.length) {
                    setArr.push(arrlist.slice(index, index += size))
                }
                return setArr;
            }
        }

        // 三重循环计算动态路径点数据集
        for (let x = 0; x < batchResult.length; x++) {
            let batchItem = batchResult[x]; // 当前批次
            let curdurationTime = middleDurationList[x]; // 当前批次持续时间
            let timeData = [];
            for (let i = 0; i < batchItem.length; i++) {
                let line = batchItem[i];
                for (let j = 0; j < line.length; j++) {
                    timeData.push({
                        geometry: {
                            type: 'Point',
                            coordinates: [line[j].x, line[j].y]
                        },
                        count: 1,
                        time: j
                    });
                }
            }

            // 添加动态路径点数据集及其样式
            let timeItem = computedTimeDataSetItem(timeData, curdurationTime);
            routeItemList.push(timeItem);
        }
        return routeItemList;

        // 基于动态点时间数据计算其数据集和样式
        function computedTimeDataSetItem(data, durationTime) {
            let dataSet_Time = new mapv.DataSet(data);
            let options_Time = {
                fillStyle: 'rgba(255, 255, 255, 1)',
                globalCompositeOperation: 'lighter',
                size: 3,
                animation: {
                    type: 'time',
                    stepsRange: {
                        start: 0,
                        end: 100
                    },
                    trails: 3,
                    duration: durationTime || 1
                },
                draw: 'simple'
                // draw: 'intensity'
            }
            return [dataSet_Time, options_Time];
        }
    }
    let routeOptionList = hanldeRouteItemList(results)
    returnData.push(...routeOptionList);

    console.log("mapv返回配置项:", returnData);
    return returnData;
}