import { ToDoServiceClient } from './protos/ActionServiceClientPb';
import { Filter, Item } from './protos/action_pb';


const main = async () => {

    const clientWeb = new ToDoServiceClient('http://' + window.location.hostname + ':8080');
    const item = new Item();
    item.setName('web grpc');
    item.setPrice(412);
    console.log('clientWeb.unaryAddItem Start');
    const result01 = await clientWeb.unaryAddItem(item, null);
    console.log('clientWeb.unaryAddItem End', result01);

    console.log('clientWeb.serverStreamingSubList Start');
    const filter = new Filter();
    clientWeb.serverStreamingSubList(filter).on('data', (resultItem) => {
        console.log('clientWeb.serverStreamingSubList on data => ', resultItem);
        const divElm = window.document.createElement('div');
        divElm.innerHTML = `<p>${JSON.stringify(resultItem)}</p>`;
        window.document.getElementsByTagName('body')[0].appendChild(divElm);
    });

    clientWeb.serverStreamingSubList(filter).on('end', () => {
        console.log('clientWeb.serverStreamingSubList on end');
    });

    clientWeb.serverStreamingSubList(filter).on('error', (error) => {
        console.log('clientWeb.serverStreamingSubList on error', error);
    });

}

main();