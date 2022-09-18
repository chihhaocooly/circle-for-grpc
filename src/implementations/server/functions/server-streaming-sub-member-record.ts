import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { ServerWritableStream } from "grpc";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { memberItem$, memberList$ } from "../../../cache/list";
import { Member } from "../../../protos/action";

let list: Member[] = [];

memberList$.subscribe((items) => list = items);

export const ServerStreamingSubMemberRecord = async (call: ServerWritableStream<Empty>) => {

    const destroy$ = new Subject();

    console.log('ServerStreamingSubMemberRecord =>', call.request);

    for (const item of list) {
        call.write(item);
    }

    memberItem$.pipe(
        takeUntil(destroy$),
    ).subscribe(item => {
        call.write(item);
    });


    call.on('close', () => { // 連線關閉時 取消訂閱
        console.log('close!!');
        destroy$.next();
        destroy$.complete();
    });

}