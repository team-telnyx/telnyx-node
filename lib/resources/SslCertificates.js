'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'ssl_certificates',
  includeBasic: ['delete','list','retrieve'],

  RemoveStorageSSLCertificate: telnyxMethod({
    method: 'DELETE',
    path: '/storage/ssl_certificates/{ssl/certificate/id}',
    urlParams: ['ssl_certificate_id'],
  }),
  GetStorageSSLCertificates: telnyxMethod({
    method: 'GET',
    path: '/storage/ssl_certificates',
  }),

});
