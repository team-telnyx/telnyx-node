'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'simCards',
    {
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
        path: '/{sim_card_id}/actions/activate',
        urlParams: ['sim_card_id'],
        paramsValues: [response.data.id],
        paramsNames: ['id'],
      }),

      deactivate: telnyxMethod({
        method: 'POST',
        path: '/{sim_card_id}/actions/deactivate',
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
    }
  );
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
