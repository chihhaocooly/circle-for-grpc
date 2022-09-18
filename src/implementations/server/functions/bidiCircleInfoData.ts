import { ServerWritableStream } from "grpc";
import { CircleInfo } from '../../../protos/action';
import { Subject } from "rxjs";

const circleInfos: CircleInfo[] = [];
const subject = new Subject<CircleInfo>();
const callMap = new Map<string,any>();
export const BidiCircleInfoData = async (call: ServerWritableStream<CircleInfo>) => {
    let colorCode = '';
    let connectId = Math.random();
    console.log("init connectId=>", connectId)
    
    call.on('data', (circleInfo: CircleInfo) => {
        console.log("data connectId=>", connectId)
        console.log('BidiCircleInfoData =>', circleInfo)

        let originalCircleInfo = circleInfos.find(c => c.colorCode == circleInfo.colorCode);
        if (circleInfo.isFinish) {
            let index = circleInfos.findIndex(s => s.colorCode == circleInfo.colorCode);
            if (index !== -1) {
                let call = callMap.get(circleInfo.colorCode);
                call.end();
                circleInfos.splice(index, 1);
            }
        } else {
            if (!originalCircleInfo) {
                colorCode = circleInfo.colorCode;
                callMap.set(circleInfo.colorCode,call);
                main();
                circleInfos.push(circleInfo);
            } else {
                originalCircleInfo.x = circleInfo.x;
                originalCircleInfo.y = circleInfo.y
                call.end();
            }
        }
        subject.next(circleInfo);
    });


    async function main() {
        subject.subscribe(x => {
            console.log("write connectId=>", connectId)
            console.log(colorCode);
            call.write({ circleInfos: circleInfos });
        });
    }
}