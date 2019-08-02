'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function nestedMethods(conferenceId) {
  var conferences = {};

  [
    'join',
    'mute',
    'unmute',
    'hold',
    'unhold',
  ].forEach(function(name) {
    conferences[name] = telnyxMethod({
      method: 'POST',
      path: `/{conferenceId}/actions/${name}`,
      urlParams: ['conferenceId'],
      urlParamsValues: [conferenceId],
      methodType: 'create',
    })
  });

  return conferences;
}

module.exports = require('../TelnyxResource').extend({
  path: 'conferences',
  includeBasic: ['list'],

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: function(response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'conferences',
        nestedMethods(response.data.id)
      );
    },
  }),
});
