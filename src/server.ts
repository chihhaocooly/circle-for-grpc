import * as path from 'path';
import * as grpc from 'grpc';
// import * as fs from 'fs';
import * as protoLoader from '@grpc/proto-loader';
import * as toDoServiceImplementations from './implementations/server/todoService';
import { environment } from './environments/environment';
import { addReflection } from 'grpc-server-reflection';
process.env.TZ = 'Asia/Taipei';

async function main() {

    const server = new grpc.Server();
    addReflection(server, 'src/protos/descriptor_set.bin');
    
    const PROTO_PATH = path.join(__dirname, './protos/action.proto');
    const packageDefinition = protoLoader.loadSync(
        PROTO_PATH,
        {
            keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
        });
    const actionProto: any = grpc.loadPackageDefinition(packageDefinition).AiiiGRPC;

    server.addService(actionProto.ToDoService.service, toDoServiceImplementations);

    // const root_cert = fs.readFileSync(path.join(__dirname, './cert/cert.pem'));
    // const root_key = fs.readFileSync(path.join(__dirname, './cert/key.pem'));
    // const ssl_creds = grpc.ServerCredentials.createSsl(root_cert, [{ private_key: root_key, cert_chain: root_cert }]);
    // console.log('ssl_creds =>', ssl_creds);
    server.bind(`0.0.0.0:${environment.serverPort}`, grpc.ServerCredentials.createInsecure());
    server.start();
}

main();