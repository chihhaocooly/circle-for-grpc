import { CircleInfo, CircleInfoList, DeepPartial } from '../../../protos/action';
import { Subject } from "rxjs";
import { circleInfos } from "../../../cache/circleInfo";
import { CallContext } from "nice-grpc-common";
import { from } from 'ix/asynciterable';
import { map, withAbort } from "ix/asynciterable/operators";


const subject = new Subject<CircleInfo>();

export async function* bidiCircleInfoData (request: AsyncIterable<CircleInfo>,
    context: CallContext): AsyncIterable<DeepPartial<CircleInfoList>> {

    let connectId = Math.random();
    console.log("init connectId=>", connectId);
    
    (async () => {
        for await (const circleInfo of request) {
            if (circleInfo.isFinish){
                let index = circleInfos.findIndex(s => s.colorCode == circleInfo.colorCode);
                if (index !== -1) {
                    circleInfos.splice(index, 1);
                }
            }else{
               
            }
            subject.next(circleInfo);
        }
    })();

    yield* from(subject).pipe(withAbort(context.signal),map(s=> {
        return {circleInfos:circleInfos};
    }));
    
}