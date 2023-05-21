import { Client,Account } from 'appwrite';

const client = new Client();
export const account = new Account(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6468abd51d60f680ce1b');

