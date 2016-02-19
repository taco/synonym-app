import Client from './client';
import config from '../../mozu.config.json';


console.log('client', config);

const client = Client({context: config});

export const get = () => {
    client.getSynonymDefinitionCollection({})
        .then(result => {
            console.log('result', result);
        })
        .catch(error => {
            console.log('error', error);
        });
};