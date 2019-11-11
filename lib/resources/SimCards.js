'use strict';


var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'sim_cards',
  includeBasic: ['list', 'update'],

  retrieve: telnyxMethod({
    method: 'GET',

    transformResponseData: function(response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'simCards',
        {
          activate: telnyxMethod({
            method: 'POST',
            path: '/{id}/actions/activate',
            urlParams: ['id'],
            paramsValues: [response.data.id],
            paramsNames: ['id'],
            methodType: 'create',
          }),

          deactivate: telnyxMethod({
            method: 'POST',
            path: '/{id}/actions/deactivate',
            urlParams: ['id'],
            paramsValues: [response.data.id],
            paramsNames: ['id'],
            methodType: 'create',
          }),
        }
      );
    },
  })
});
