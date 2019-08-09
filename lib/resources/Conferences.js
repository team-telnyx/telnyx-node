'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

var CONFERENCES = [
  'join',
  'mute',
  'unmute',
  'hold',
  'unhold',
];

function getSpec(conferenceId) {
  return function(methodName) {
    return {
      method: 'POST',
      path: `/{conferenceId}/actions/${methodName}`,
      urlParams: ['conferenceId'],
      paramsValues: [conferenceId],
      paramsNames: ['id'],
      methodType: 'create',
    }
  }
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
        utils.createNestedMethods(telnyxMethod, CONFERENCES, getSpec(response.data.id))
      );
    },
  }),

  instanceMethods: utils.createNestedMethods(telnyxMethod, CONFERENCES, getSpec())
});
