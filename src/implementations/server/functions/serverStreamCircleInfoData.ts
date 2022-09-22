import { ServerWritableStream } from "grpc";
import { CircleInfo } from '../../../protos/action';
import { newCircleInfos, newCircleInfoSubject } from "../../../cache/circleInfo";

const callMap = new Map<string,any>();
export const ServerStreamCircleInfoData = async (call: ServerWritableStream<CircleInfo>) => {
    let colorCode = '';

    const circleInfo :CircleInfo= call.request;
    callMap.set(circleInfo.colorCode,call);

    newCircleInfoSubject.subscribe(x => {
        console.log(colorCode);

        call.write({ circleInfos: newCircleInfos });

        if (circleInfo.isFinish) {
            let call = callMap.get(circleInfo.colorCode);
            call.end();
        }
    });
}