import { Subject, timer } from "rxjs";
import * as _ from 'lodash';
import * as moment from 'moment';
import { scan } from "rxjs/operators";
import { Item, Log, Member } from "../protos/action";

export const messageItem$: Subject<Item> = new Subject();
export const messageList$ = messageItem$.pipe(
    scan((current: Item[], newItem: Item) => [...current, newItem], [])
);

export const messageBidItem$: Subject<Item> = new Subject();
export const messageBidList$ = messageBidItem$.pipe(
    scan((current: Item[], newItem: Item) => [...current, newItem], [])
);

export const logItem$: Subject<Log> = new Subject();
export const logList$ = logItem$.pipe(
    scan((current: Log[], newLog: Log) => [...current, newLog], [])
);

export const memberItem$: Subject<Member> = new Subject();
export const memberList$ = memberItem$.pipe(
    scan((current: Member[], newMember: Member) => [...current, newMember], [])
);

const memberList = ['米奇', '米妮', '唐老鴨', '小飛象', '丁丁', '迪西', '拉拉', '小波', '努努', '阿飄'];
const memberCountMap: {
    [memberName: string]: number;
} = { ghost: 0 };
memberList.forEach(memberName => { memberCountMap[memberName] = 0; });

const recursiveAddMember = async () => {
    const name = _.sample(memberList) || '阿飄';
    const member: Member = {
        name,
        type: ++memberCountMap[name],
        timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    memberItem$.next(member);
    timer(_.random(1, 10) * 1000).subscribe(recursiveAddMember);
};

recursiveAddMember();