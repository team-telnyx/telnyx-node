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
  'speak',
  'play',
  'stop',
  'record_start',
  'record_stop',
  'update',
  'leave',
  'dial_participant',
  'resume',
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
  includeBasic: ['list', 'retrieve'],

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

  participants: telnyxMethod({
    method: 'GET',

    path: '/{conferenceId}/participants',
    urlParams: ['conferenceId'],
  }),

  instanceMethods: utils.createNestedMethods(telnyxMethod, CONFERENCES, getSpec())
});
