import { CallContext } from "nice-grpc-common";
import { newCircleInfos, newCircleInfoSubject } from "../../../cache/circleInfo";
import { CircleInfo, DeepPartial } from '../../../protos/action';
import { Empty } from "../../../protos/google/protobuf/empty";

export const unaryCircleInfoData = async (request: CircleInfo, context: CallContext): Promise<DeepPartial<Empty>>=> {
    
    const circleInfo :CircleInfo=request;
    console.log("circleInfo=>", circleInfo)

    let originalCircleInfo = newCircleInfos.find(c => c.colorCode === circleInfo.colorCode);
    if (circleInfo.isFinish) {
        let index = newCircleInfos.findIndex(s => s.colorCode === circleInfo.colorCode);
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

    console.log({ circleInfos: newCircleInfos });
    newCircleInfoSubject.next(circleInfo);
    
    return Empty;
}