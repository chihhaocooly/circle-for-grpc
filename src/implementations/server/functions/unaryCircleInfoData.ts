import { ServerWritableStream } from "grpc";
import { newCircleInfos, newCircleInfoSubject } from "../../../cache/circleInfo";
import { CircleInfo } from '../../../protos/action';

export const UnaryCircleInfoData = async (call: ServerWritableStream<CircleInfo>,callback:any) => {
    
    //TODO:該如何從call取得client端，傳送來的circleInfo資料呢

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

     //TODO:雖然傳送活去的資料為NULL，但要如何把資料拋回前端

}
