const Client = require('mozu-node-sdk/client');
const constants = Client.constants;

module.exports = Client.sub({
    getSynonymDefinitionCollection: Client.method({
        method: constants.verbs.GET,
        url: [
            '{+tenantPod}api/commerce/catalog',
            '/admin/search/synonym-definitions/en-US'
        ].join('')
    }),
    updateSynonymDefinitionCollection: Client.method({
        method: constants.verbs.POST,
        url: [
            '{+tenantPod}api/commerce/catalog',
            '/admin/search/synonym-definitions/en-US'
        ].join('')
    })
});