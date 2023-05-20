import { Client,Account } from 'appwrite';

const client = new Client();
const account = new Account(client);
const projectId = process.env.REACT_APP_PROJECT_ID;
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(projectId);

// Go to OAuth provider login page
account.createOAuth2Session('google');
// account.createOAuth2Session('github');
