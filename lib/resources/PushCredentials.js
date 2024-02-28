'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'push_credentials',
  includeBasic: ['list','retrieve','delete'],

  ListPushCredentials: telnyxMethod({
    method: 'GET',
    path: '/mobile_push_credentials',
  }),
  DeletePushCredentialById: telnyxMethod({
    method: 'DELETE',
    path: '/mobile_push_credentials/{push/credential/id}',
    urlParams: ['push_credential_id'],
  }),

});
