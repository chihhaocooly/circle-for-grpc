import { ParsedArgs } from 'minimist';

export const UnaryAddItem = async (client: any, argv: ParsedArgs) => {
    console.log('Client: UnaryAddItem start');
    client.UnaryAddItem({ name: argv.name || 'test name', price: argv.price || 0, message: argv.message || 'test message', }, (err: any, response: any) => console.log({ err, response: JSON.stringify(response) }));
}