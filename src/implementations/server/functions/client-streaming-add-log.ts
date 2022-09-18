import { ServerWritableStream } from "grpc";
import { v4 as uuid } from 'uuid';
import { logItem$ } from "../../../cache/list";
import { Log } from "../../../protos/action";

export const ClientStreamingAddLog = async (call: ServerWritableStream<Log>, callback: any) => {

    const sessionId = uuid();

    call.on('data', (data: Log) => {
        console.log(`ClientStreamingAddLog sessionId:${sessionId} =>`, data);
        logItem$.next(data);
    });

    call.on('end', () => {
        console.log(`ClientStreamingAddLog sessionId:${sessionId} => 連線結束`);
        callback(null, {});
    });

    call.on('close', () => console.log('close'));
    call.on('drain', () => console.log('drain'));
    call.on('error', (err) => console.log('error', err));
    call.on('finish', () => console.log('finish'));
    call.on('pipe', (src) => console.log('pipe', src));
    call.on('unpipe', (src) => console.log('unpipe', src));

}



