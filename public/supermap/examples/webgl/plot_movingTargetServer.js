let getRandomPt = function (pt) {
    if (undefined === pt) {
        // 0~180 -50~50
        pt = { x: Math.random() * 180, y: Math.random() * (50 + 50) - 50, z: 0 };
    } else if (pt.length === 1) {
        // -1~1
        pt = { x: pt[0].x + Math.random() * 2 - 1, y: pt[0].y + Math.random() * 2 - 1, z: 0 };
    }
    else {
        pt = getOnLinePt(pt);
    }

    return pt;
}

let getOnLinePt = function (pt) {
    let d = 2;
    let k = 0, b = 0, xd, yd;
    k = (pt[0].y - pt[1].y) / (pt[0].x - pt[1].x)
    b = pt[0].y - k * pt[0].x;
    let zoom = 0;
    zoom = d / Math.sqrt((pt[1].x - pt[0].x) * (pt[1].x - pt[0].x) + (pt[1].y - pt[0].y) * (pt[1].y - pt[0].y));

    if (pt[0].x - pt[1].x > 0) {
        xd = pt[1].x - zoom * (pt[0].x - pt[1].x);
        yd = k * xd + b;
    } else {
        xd = pt[1].x + zoom * (pt[1].x - pt[0].x);
        yd = k * xd + b;
    }

    if (xd < 0) {
        xd = pt[1].x + 1;
    } else if (xd > 180) {
        xd = pt[1].x - 1;
    }

    if (yd < -50) {
        yd = pt[1].y + 1;
    } else if (yd > 50) {
        yd = pt[1].y - 1;
    }
    return { x: xd, y: yd, z: 0 };
}

let arrPos = new Map();
let count = 0;
let movingTargetIntervalTime = 3000;
let timer = undefined;

self.onmessage = (event) => {
    let message = event.data;
    let recMessage = JSON.parse(message);

    //console.log(message);
    if (recMessage.type == "start") {
        count = recMessage.count;
        let msg = {
            type: "start"
        }
        msg.ss = "";
        for (let i = 0; i < count; i++) {
            let targetID = "target_" + i;
            let positions = arrPos.get(targetID);
            let position = undefined;
            if (positions == undefined || positions.length === 0) {
                position = getRandomPt();
                positions = [];
                positions.push(position);
            } else if (positions != undefined && positions.length === 1) {
                position = getRandomPt(positions);
                positions.push(position);
            } else if (positions != undefined && positions.length === 2) {
                position = getRandomPt(positions);
                positions[0] = positions[1];
                positions[1] = position;
            }

            arrPos.set(targetID, positions);

            let s = targetID + "," + position.x + "," + position.y + "," + 50000;
            if (i == count - 1) {
                msg.ss += s;
            } else {
                msg.ss += (s + ";");
            }
        }

        self.postMessage(msg);

    } else if (recMessage.type == "update") {
        count = recMessage.count;
        movingTargetIntervalTime = recMessage.time;

        let exe = () => {
            let msg = {
                type: "update"
            }
            msg.ss = "";
            for (let i = 0; i < count; i++) {
                let targetID = "target_" + i;
                let positions = arrPos.get(targetID);
                let position = undefined;
                if (positions == undefined || positions.length === 0) {
                    position = getRandomPt();
                    positions = [];
                    positions.push(position);
                } else if (positions != undefined && positions.length === 1) {
                    position = getRandomPt(positions);
                    positions.push(position);
                } else if (positions != undefined && positions.length === 2) {
                    position = getRandomPt(positions);
                    positions[0] = positions[1];
                    positions[1] = position;
                }

                arrPos.set(targetID, positions);

                let s = targetID + "," + position.x + "," + position.y + "," + 50000;
                if (i == count - 1) {
                    msg.ss += s;
                } else {
                    msg.ss += (s + ";");
                }
            }

            self.postMessage(msg);
        }
        timer = setInterval(exe, movingTargetIntervalTime);
        exe();
    }
    else if (recMessage.type == "stop") {
        clearInterval(timer);
    } else if (recMessage.type == "modifyCount") {
        count = recMessage.count;
    } else if (recMessage.type == "modifyTime") {
        movingTargetIntervalTime = recMessage.time;
    }
}