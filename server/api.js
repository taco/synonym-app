const Client = require('./client');

const client = Client({
    context: {
        appKey: process.env.APP_KEY,
        baseUrl: process.env.BASE_URL,
        sharedSecret: process.env.SHARED_SECRET,
        tenant: process.env.TENANT,
        site: process.env.SITE
    }
});

function get() {
    return client.getSynonymDefinitionCollection({});
}

module.exports = {
    get: get
};