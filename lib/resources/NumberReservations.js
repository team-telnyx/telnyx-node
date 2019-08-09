'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

module.exports = require('../TelnyxResource').extend({
  path: 'number_reservations',
  includeBasic: ['list', 'retrieve'],

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: function(response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'numberReservations',
        {
          extend: telnyxMethod({
            method: 'POST',
            path: '/{numberReservationId}/actions/extend',
            urlParams: ['numberReservationId'],
            paramsValues: [response.data.id],
            paramsNames: ['id'],
            methodType: 'create',
          }),
        }
      );
    },
  })
});

