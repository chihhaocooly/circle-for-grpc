import { ServerWritableStream } from "grpc";
import { CircleInfo } from '../../../protos/action';
import { newCircleInfos, newCircleInfoSubject } from "../../../cache/circleInfo";

const callMap = new Map<string,any>();
export const ServerStreamCircleInfoData = async (call: ServerWritableStream<CircleInfo>) => {

    const circleInfo :CircleInfo= call.request;
    callMap.set(circleInfo.colorCode,call);

    newCircleInfoSubject.subscribe(x => {

        console.log(x.colorCode);

        //TODO:要如何把每次重新的newCircleInfoSubject中，把資料傳送回client呢


        if (circleInfo.isFinish) {
            let call = callMap.get(circleInfo.colorCode);
            //TODO:玩家結束遊戲哪，伺服器該做些什麼呢?
           
        }
    });
}
