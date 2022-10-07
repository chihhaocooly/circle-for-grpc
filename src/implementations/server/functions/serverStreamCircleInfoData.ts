import { CircleInfo, CircleInfoList, DeepPartial } from '../../../protos/action';
import { newCircleInfos, newCircleInfoSubject } from "../../../cache/circleInfo";
import { CallContext } from "nice-grpc-common";
import { from } from "ix/asynciterable";
import { map, takeWhile, withAbort } from 'ix/asynciterable/operators';

export async function* serverStreamCircleInfoData(request: CircleInfo,
    context: CallContext): AsyncIterable<DeepPartial<CircleInfoList>> {

    const circleInfo: CircleInfo = request;

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
    
    newCircleInfoSubject.next(circleInfo);
    yield* from(newCircleInfoSubject).pipe(withAbort(context.signal), takeWhile(s => {
        if (s.isFinish &&  s.colorCode == circleInfo.colorCode) {
            let index = newCircleInfos.findIndex(s => s.colorCode == circleInfo.colorCode);
            if (index !== -1) {
                newCircleInfos.splice(index, 1);
            }
        }
        return true;
    }), map(s => {
        return { circleInfos: newCircleInfos };
    }));
}

