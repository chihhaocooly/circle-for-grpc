import { ServerWritableStream } from 'grpc';
import * as _ from 'lodash';
import { memberItem$ } from '../../../cache/list';
import { Member } from '../../../protos/action';

export const UnaryAddMemberRecord = (call: ServerWritableStream<Member>, callback: any) => {
    console.log('UnaryAddMemberRecord call.request => ', call.request);

    const data: Member = _.merge({
        category: '',
        action: '',
        label: '',
        value: '',
    }, call.request);

    memberItem$.next(data);

    callback(null);
}