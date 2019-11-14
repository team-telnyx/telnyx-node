'use strict';


var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'sim_cards',
  includeBasic: ['list', 'update'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: function(response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'simCards',
        {
          activate: telnyxMethod({
            method: 'POST',
            path: '/{sim_card_id}/actions/activate',
            paramsNames: ['id'],
            urlParams: ['sim_card_id'],
          }),

          deactivate: telnyxMethod({
            method: 'POST',
            path: '/{sim_card_id}/actions/deactivate',
            paramsNames: ['id'],
            urlParams: ['sim_card_id'],
          }),
        }
      );
    },
  })
});
