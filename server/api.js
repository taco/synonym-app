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

function update(body) {
    const payload = {
        tenantId: process.env.TENANT,
        siteId: process.env.SITE,
        localCode: 'en-US',
        synonymDefinitions: body
    };
    return client.updateSynonymDefinitionCollection(payload);
}

module.exports = {
    get: get,
    update: update
};