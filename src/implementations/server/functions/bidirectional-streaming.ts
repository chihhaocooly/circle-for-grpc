import { ServerWritableStream } from "grpc";
import { Item } from '../../../protos/action';
import { takeUntil } from "rxjs/operators";
import { messageBidItem$, messageBidList$ } from '../../../cache/list';
import { Subject } from "rxjs";

let list: Item[] = [];

messageBidList$.subscribe((items) => list = items);

export const BidirectionalStreamingAsyncList = async (call: ServerWritableStream<Item>) => {

    const sessionId = new Date().getTime().toString();

    // for (const item of list) {
    //     call.write(item);
    // }

    const destroy$ = new Subject();

    console.log('BidirectionalStreamingAsyncList list =>', sessionId, list);

    call.on('data', (data: Item) => {
        console.log('BidirectionalStreamingAsyncList on data =>', sessionId, data)
        messageBidItem$.next(data);
    });

    messageBidItem$.pipe(
        takeUntil(destroy$),
    ).subscribe(item => {
        const b = call.write(item, (error) => error ? console.log({ error }) : null);
        console.log('BidirectionalStreamingAsyncList b =>', sessionId, b);
    });



    call.on('end', () => { // 連線關閉時 取消訂閱
        console.log('BidirectionalStreamingAsyncList on end!!', sessionId);
        destroy$.next();
        destroy$.complete();
    });


    call.on('close', () => console.log('close'));
    call.on('drain', () => console.log('drain'));
    call.on('error', (err) => console.log('error', err));
    call.on('finish', () => console.log('finish'));
    call.on('pipe', (src) => console.log('pipe', src));
    call.on('unpipe', (src) => console.log('unpipe', src));

}