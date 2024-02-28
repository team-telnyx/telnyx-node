'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'credentials',
  includeBasic: ['create','list','retrieve','delete'],

  PerformCredentialAction: telnyxMethod({
    method: 'POST',
    path: '/telephony_credentials/{id}/actions/{action}',
    urlParams: ['id', 'action'],
  }),
  FindTelephonyCredentials: telnyxMethod({
    method: 'GET',
    path: '/telephony_credentials',
  }),
  ListTags: telnyxMethod({
    method: 'GET',
    path: '/telephony/credentials/tags',
  }),
  DeleteTelephonyCredential: telnyxMethod({
    method: 'DELETE',
    path: '/telephony_credentials/{id}',
    urlParams: ['id'],
  }),

});
