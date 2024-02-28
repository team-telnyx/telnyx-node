'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'bulk_credentials',
  includeBasic: ['create','delete'],

  BulkCredentialAction: telnyxMethod({
    method: 'POST',
    path: '/actions/{action}/telephony_credentials',
    urlParams: ['action'],
  }),
  DeleteTelephonyCredentials: telnyxMethod({
    method: 'DELETE',
    path: '/actions/bulk/telephony_credentials',
  }),

});
