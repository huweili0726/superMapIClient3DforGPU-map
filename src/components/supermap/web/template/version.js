/**
 * 外层hrefUrl用于 产品下图片和标题的链接跳转
 *    路径是相对于introduction文件下的；当只需要在一个产品下展示或每个端链接一样时, 只对象支持格式书写
 * 
 * detail里的hrefUrl用于 了解详细信息的链接跳转
 *    各端的路径是相对于introduction文件下的；home是相对于index.html的
 */
var versionUpdateConfig = [
    {
        title: "11i(2024)",
        content: [
            {
                /*category 会在对应的页面出现相应的内容*/
                category: ["maplibregl"],
                imgUrl: "./img/whatsNewMaplibre.png",
                subTitle: "提供全新地图库：iClient for MapLibreGL",
                hrefUrl: {
                    maplibregl: "../apis/maplibregl.html",
                    home:  "./apis/maplibregl.html"
                },
                details: [
                    {
                        desc: "作为MapboxGL v1版本的开源分支，可将现有的MapboxGL方案平滑迁移"
                    },
                    {
                        desc: "提供iServer地图、数据、分析等服务访问API和可视化相关API",
                        hrefUrl: {
                          maplibregl: "../apis/maplibregl.html",
                          home: "./apis/maplibregl.html"
                        },
                        hrefText: "了解详细信息"
                    }
                ]
            },
            {
                category: ["leaflet", "openlayers", "mapboxgl", "maplibregl"],
                imgUrl: "./img/whatsNewKnowledge.png",
                subTitle: "支持地理知识图谱Web可视化",
                hrefUrl: {
                    leaflet: "../../examples/leaflet/editor.html#knowledgeGraphMap",
                    openlayers: "../../examples/openlayers/editor.html#knowledgeGraphMap",
                    mapboxgl: "../../examples/mapboxgl/editor.html#knowledgeGraphMap",
                    maplibregl: "../../examples/maplibregl/editor.html#knowledgeGraphMap",
                    home: "../../examples/leaflet/editor.html#knowledgeGraphMap"
                },
                details: [
                    {
                        desc: "提供地理知识图谱和实体关系访问的API，一句代码快速出图"
                    },
                    {
                        desc: "提供样式编辑和交互事件相关API",
                        hrefUrl: {
                          leaflet: "../../examples/leaflet/editor.html#knowledgeGraphMap",
                          openlayers: "../../examples/openlayers/editor.html#knowledgeGraphMap",
                          mapboxgl: "../../examples/mapboxgl/editor.html#knowledgeGraphMap",
                          maplibregl: "../../examples/maplibregl/editor.html#knowledgeGraphMap",
                          home: "../examples/mapboxgl/editor.html#knowledgeGraphMap"
                        },
                        hrefText: "了解详细信息"
                    }
                ]
            },
            {
                category: ["mapboxgl"],
                imgUrl: "./img/whatsNewCoor.png",
                subTitle: "iClient for MapboxGL支持地理、投影全坐标系",
                hrefUrl: {
                    mapboxgl: "../../examples/mapboxgl/examples.html#multiCoordSys",
                    home: "../examples/mapboxgl/examples.html#multiCoordSys"
                },
                details: [
                    {
                        desc: "支持访问SuperMap iServer地图服务和OGC WMTS/WMS服务"
                    },
                    {
                        desc: "支持地理坐标系、投影坐标系"
                    },
                    {
                        desc: "支持栅格瓦片、矢量瓦片",
                        hrefUrl: {
                          mapboxgl: "../../examples/mapboxgl/examples.html#multiCoordSys",
                          home: "../examples/mapboxgl/examples.html#multiCoordSys"
                        },
                        hrefText: "了解详细信息"
                    }
                ]
            },
            {
                category: ["mapboxgl"],
                imgUrl: "./img/whatsNewSymbol.png",
                subTitle: "iClient for MapboxGL提供前后端一致的Web符号化制图能力",
                hrefUrl: {
                    mapboxgl: "../../examples/mapboxgl/examples.html#viz-WebSymbol",
                    home: "../examples/mapboxgl/examples.html#viz-WebSymbol"
                },
                details: [
                    {
                        desc: "提供Web符号库列表，方便用户检索，同时提供在线制图示例",
                        hrefUrl: {
                          mapboxgl: "../../examples/mapboxgl/examples.html#viz-WebSymbol",
                          home: "../examples/mapboxgl/examples.html#viz-WebSymbol"
                        },
                        hrefText: "了解详细信息"
                    },
                    {
                        desc: "改造地图库API支持直接传入Web符号库ID进行快速制图"
                    },
                    {
                        desc: "支持mapbox样式规范表达式，可以对符号进行数据驱动制图"
                    }
                ]
            },
            {
                category: ["leaflet", "openlayers", "mapboxgl", "maplibregl"],
                imgUrl: "./img/whatsNewFGB.gif",
                subTitle: "GIS数据上云访问支持，新增支持云原生矢量交换格式",
                hrefUrl: {
                  leaflet: "../../examples/leaflet/examples.html#viz-FlatGeobuf",
                  openlayers: "../../examples/openlayers/examples.html#viz-FlatGeobuf",
                  mapboxgl: "../../examples/mapboxgl/examples.html#viz-FlatGeobuf",
                  maplibregl: "../../examples/maplibregl/examples.html#viz-FlatGeobuf",
                  home: "../../examples/leaflet/examples.html#viz-FlatGeobuf",
                },
                details: [
                    {
                        desc: "支持直接访问云存储和SuperMap iServer服务返回的FlatGeoBuf格式文件，并支持流式传输和渲染"
                    },
                    {
                        desc: "支持全量渲染或按需渲染两种模式",
                        hrefUrl: {
                          leaflet: "../../examples/leaflet/examples.html#viz-FlatGeobuf",
                          openlayers: "../../examples/openlayers/examples.html#viz-FlatGeobuf",
                          mapboxgl: "../../examples/mapboxgl/examples.html#viz-FlatGeobuf",
                          maplibregl: "../../examples/maplibregl/examples.html#viz-FlatGeobuf",
                          home: "../examples/mapboxgl/examples.html#viz-FlatGeobuf"
                        },
                        hrefText: "了解详细信息"
                    }
                ]
            }
        ]
    },

    /*从第二个开始，在历史版本中会有跳转，请加上 “historyVersion”*/
    {
        title: "11i(2022) SP1",
        historyVersion: "https://iclient.supermap.io/11.0.1/web/download/download.html#stable",
        content: [
            {
                category: ["leaflet", "openlayers", "mapboxgl", "component"],
                // 后面有链接会自动添加“,”
                desc: "修复若干缺陷",
                hrefUrl: "https://github.com/SuperMap/iClient-JavaScript/releases/tag/11.0.1",
                hrefText: "查看详情"
            }
        ]
    },
    {
        title: "11i(2022)",
        historyVersion: "https://iclient.supermap.io/11.0.0/web/download/download.html#stable",
        content: [
            {
                category: ["leaflet", "openlayers", "mapboxgl", "maplibregl"],
                imgUrl: "./img/whatsNew1100_3.png",
                subTitle: "实现全库按需引入和构建,全面优化所有API的命名空间",
                hrefUrl: {
                  leaflet: "../../web/introduction/leafletDevelop.html#Modules",
                  openlayers: "../../web/introduction/openlayersDevelop.html#Modules",
                  mapboxgl: "../../web/introduction/mapboxglDevelop.html#Modules",
                  maplibregl: "../../web/introduction/maplibreglDevelop.html#Modules",
                  home: "../../web/introduction/leafletDevelop.html#Modules"
                },
                details: [
                    {
                        desc: "实现全库按需引入和构建，大幅降低构建应用的包大小，最高至90%左右，提升应用加载性能",
                        hrefUrl: {
                          leaflet: "../../web/introduction/leafletDevelop.html#Modules",
                          openlayers: "../../web/introduction/openlayersDevelop.html#Modules",
                          mapboxgl: "../../web/introduction/mapboxglDevelop.html#Modules",
                          maplibregl: "../../web/introduction/maplibreglDevelop.html#Modules",
                          home: "../web/introduction/mapboxglDevelop.html#Modules"
                        },
                        hrefText: "了解详细信息"
                    },
                    {
                        desc: "全面优化所有API的命名空间，更加符合开源库的使用习惯，并且对每个接口增加了使用示例说明"
                    }
                ]
            },
            {
                category: ["component"],
                imgUrl: "./img/whatsNew1100_1.png",
                subTitle: "新增视频增强组件",
                hrefUrl: {
                    component: "../../examples/component/editor.html#components_video_plus_vue",
                    home: "../examples/component/editor.html#components_video_plus_vue",
                },
                details: [
                    {
                        desc: "新增视频增强组件，支持在视频上叠加点位数据，支持点选交互查询，漫游、缩放等交互操作",
                        hrefUrl: {
                          component: "../../examples/component/editor.html#components_video_plus_vue",
                          home: "../examples/component/editor.html#components_video_plus_vue"
                        },
                        hrefText: "了解详细信息"
                    }
                ]
            },
            {
                category: ["leaflet"],
                imgUrl: "./img/whatsNew1100_2.jpg",
                subTitle: "新增动态标绘图管理功能",
                details: [
                    {
                        desc: "新增动态标绘图管理功能，支持导入、导出标绘图"
                    },
                    {
                        desc: "新增子图层管理功能"
                    }
                ]
            }
        ]
    }
]
