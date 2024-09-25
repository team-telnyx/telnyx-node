import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const SslCertificates = TelnyxResource.extend({
  path: 'ssl_certificates',
  includeBasic: ['delete', 'list', 'retrieve'],

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
