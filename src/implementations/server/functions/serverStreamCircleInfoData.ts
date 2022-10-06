import { CircleInfo, CircleInfoList, DeepPartial } from '../../../protos/action';
import { newCircleInfos, newCircleInfoSubject } from "../../../cache/circleInfo";
import { CallContext } from "nice-grpc-common";
import { from } from "ix/asynciterable";
import { map, takeWhile, withAbort } from 'ix/asynciterable/operators';

export async function* serverStreamCircleInfoData(request: CircleInfo,
    context: CallContext): AsyncIterable<DeepPartial<CircleInfoList>> {

    let colorCode = '';

    const circleInfo: CircleInfo = request;
    colorCode = circleInfo.colorCode;
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

