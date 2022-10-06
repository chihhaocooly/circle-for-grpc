process.env.UV_THREADPOOL_SIZE = '8';
import { createServer } from 'nice-grpc';
import { environment } from './environments/environment';
import * as fs from 'fs';
import * as path from 'path';
import { ServerReflection, ServerReflectionService } from 'nice-grpc-server-reflection';

import {
    ToDoServiceServiceImplementation,
    ToDoServiceDefinition,
} from './protos/action';
import { bidiCircleInfoData } from './implementations/server/functions/bidiCircleInfoData';
import { serverStreamCircleInfoData } from './implementations/server/functions/serverStreamCircleInfoData';
import { unaryCircleInfoData } from './implementations/server/functions/unaryCircleInfoData';


const toDoServiceImpl: ToDoServiceServiceImplementation = {
    bidiCircleInfoData,
    serverStreamCircleInfoData,
    unaryCircleInfoData
};

const server = createServer();
server.add(ToDoServiceDefinition, toDoServiceImpl);

/** 
 * if you want to use server reflection, you can use this code
*/
server.add(
    ServerReflectionService,
    ServerReflection(
        fs.readFileSync(path.join('src', 'protos', 'protoset.bin')),
        [ToDoServiceDefinition.fullName],
    ),
);

server.listen(`${environment.serverHost}:${environment.serverPort}`);
