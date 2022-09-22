import { ServerWritableStream } from "grpc";
import { newCircleInfos, newCircleInfoSubject } from "../../../cache/circleInfo";
import { CircleInfo } from '../../../protos/action';

export const UnaryCircleInfoData = async (call: ServerWritableStream<CircleInfo>,callback:any) => {
    
    const circleInfo :CircleInfo= call.request;
    console.log("circleInfo=>", circleInfo.colorCode)

    let originalCircleInfo = newCircleInfos.find(c => c.colorCode == circleInfo.colorCode);

    if (circleInfo.isFinish) {
        let index = newCircleInfos.findIndex(s => s.colorCode == circleInfo.colorCode);
        if (index !== -1) {
            newCircleInfos.splice(index, 1);
        }
    } else {
        if (!originalCircleInfo) {
            newCircleInfos.push(circleInfo);
        } else {
            originalCircleInfo.x = circleInfo.x;
            originalCircleInfo.y = circleInfo.y
        }
    }
    newCircleInfoSubject.next(circleInfo);
    callback(null);
}