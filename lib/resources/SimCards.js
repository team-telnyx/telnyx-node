'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(response, telnyx, 'simCards', {
    del: telnyxMethod({
      method: 'DELETE',
      path: '/{sim_card_id}',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    save: telnyxMethod({
      method: 'PATCH',
      path: '/{sim_card_id}',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    activate: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/enable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    deactivate: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/disable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    enable: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/enable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    disable: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/disable',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    setStandby: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/actions/set_standby',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    retrieveNetworkPreferences: telnyxMethod({
      method: 'GET',
      path: '/{sim_card_id}/network_preferences',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    setNetworkPreferences: telnyxMethod({
      method: 'PUT',
      path: '/{sim_card_id}/network_preferences',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    deleteNetworkPreferences: telnyxMethod({
      method: 'DELETE',
      path: '/{sim_card_id}/network_preferences',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    retrievePublicIP: telnyxMethod({
      method: 'GET',
      path: '/{sim_card_id}/public_ip',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    setPublicIP: telnyxMethod({
      method: 'POST',
      path: '/{sim_card_id}/public_ip',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),

    deletePublicIP: telnyxMethod({
      method: 'DELETE',
      path: '/{sim_card_id}/public_ip',
      urlParams: ['sim_card_id'],
      paramsValues: [response.data.id],
      paramsNames: ['id'],
    }),
  });
}

module.exports = TelnyxResource.extend({
  path: 'sim_cards',
  includeBasic: ['update'],

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',

    transformResponseData: transformResponseData,
  }),

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: transformResponseData,
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),
});
