'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function nestedMethods(messagingProfileId) {
  var methods = {};

  [
    'phone_numbers',
    'sender_ids',
    'short_codes',
  ].forEach(function(name) {
    methods[name] = telnyxMethod({
      method: 'GET',
      path: `/{messagingProfileId}/${name}`,
      urlParams: ['messagingProfileId'],
      urlParamsValues: [messagingProfileId],
      methodType: 'create',
    })
  });

  return methods;
}

module.exports = require('../TelnyxResource').extend({
  path: 'messaging_profiles',
  includeBasic: ['list', 'retrieve', 'del', 'update'],

  create: telnyxMethod({
    method: 'POST',

    transformResponseData: function(response, telnyx) {
      return utils.addResourceToResponseData(
        response,
        telnyx,
        'messagingProfiles',
        nestedMethods(response.data.id)
      );
    },
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
    path: '/{messagingProfileId}/sender_ids',
    urlParams: ['messagingProfileId'],
    methodType: 'list',
  }),

  senderIds: telnyxMethod({
    method: 'GET',
    path: '/{messagingProfileId}/sender_ids',
    urlParams: ['messagingProfileId'],
  }),
});

