import { ServerWritableStream } from "grpc";
import { CircleInfo } from '../../../protos/action';
import { Subject } from "rxjs";

const circleInfos: CircleInfo[] = [];
const subject = new Subject<CircleInfo>();
const callMap = new Map<string,any>();
export const BidiCircleInfoData = async (call: ServerWritableStream<CircleInfo>) => {
    
    //接收client來的資料
    call.on('data', (circleInfo: CircleInfo) => {
        console.log('BidiCircleInfoData =>', circleInfo)

        //確認記憶中是否已經有儲存此circle
        let originalCircleInfo = circleInfos.find(c => c.colorCode == circleInfo.colorCode);

        //如果是終止遊戲
        if (circleInfo.isFinish) {
            //如果有存在於記憶體中
            let index = circleInfos.findIndex(s => s.colorCode == circleInfo.colorCode);
            if (index !== -1) {
                let call = callMap.get(circleInfo.colorCode);
                //把此連線取出來中斷
                call.end();
                //從記憶體中移除
                circleInfos.splice(index, 1);
            }
        } else {
            //如果不存在於記憶體中
            if (!originalCircleInfo) {
                //將serverStream的連線透過色碼儲存起來
                callMap.set(circleInfo.colorCode,call);
                //訂閱subject
                main();
                //將circleInfo儲存於記憶體中
                circleInfos.push(circleInfo);
            } else {
                //更新x座標
                originalCircleInfo.x = circleInfo.x;
                originalCircleInfo.y = circleInfo.y
                //中斷連線，注意此編的call與最初一開始的call是不一樣的，因為bid這邊在client進行write()的時候，每次都是不一樣的連線
                call.end();
            }
        }
        subject.next(circleInfo);
    });


    async function main() {
        subject.subscribe(x => {
            console.log(x.colorCode);
            call.write({ circleInfos: circleInfos });
        });
    }
}