'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

var ACTIONS = [
  'phone_numbers',
  'alphanumeric_sender_ids',
  'short_codes',
  'metrics',
];

function getSpec(messagingProfileId) {
  return function (methodName) {
    return {
      method: 'GET',
      path: `/{messagingProfileId}/${methodName}`,
      urlParams: ['messagingProfileId'],
      paramsValues: [messagingProfileId],
      paramsNames: ['id'],
      methodType: 'list',
    };
  };
}

function transformResponseData(response, telnyx) {
  const methods = utils.createNestedMethods(
    telnyxMethod,
    ACTIONS,
    getSpec(response.data.id)
  );

  methods.del = telnyxMethod({
    method: 'DELETE',
    path: '/{messagingProfileId}',
    urlParams: ['messagingProfileId'],
    paramsValues: [response.data.id],
    paramsNames: ['id'],
  });

  return utils.addResourceToResponseData(
    response,
    telnyx,
    'messagingProfiles',
    methods
  );
}

module.exports = require('../TelnyxResource').extend({
  path: 'messaging_profiles',
  includeBasic: ['list', 'del', 'update'],

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

  listPhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/phone_numbers',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  phoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/phone_numbers',
    urlParams: ['messagingProfileId'],
  }),

  listShortCodes: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/short_codes',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  shortCodes: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/short_codes',
    urlParams: ['messagingProfileId'],
  }),

  listSenderIds: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/alphanumeric_sender_ids',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  senderIds: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/alphanumeric_sender_ids',
    urlParams: ['messagingProfileId'],
  }),

  retrieveMetrics: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/metrics',
    urlParams: ['messagingProfileId'],
    methodType: 'retrieve',
  }),
});
