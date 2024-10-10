import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const StorageBuckets = TelnyxResource.extend({
  path: 'storage/buckets',

  usage: telnyxMethod({
    method: 'GET',
    path: '/{bucketName}/usage/storage',
    urlParams: ['bucketName'],
  }),

  apiUsage: telnyxMethod({
    method: 'GET',
    path: '/{bucketName}/usage/api',
    urlParams: ['bucketName'],
  }),

  sslCertificate: telnyxMethod({
    method: 'GET',
    path: '/{bucketName}/ssl_certificate',
    urlParams: ['bucketName'],
  }),

  addSslCertificate: telnyxMethod({
    method: 'PUT',
    path: '/{bucketName}/ssl_certificate',
    urlParams: ['bucketName'],
  }),

  delSslCertificate: telnyxMethod({
    method: 'DELETE',
    path: '/{bucketName}/ssl_certificate',
    urlParams: ['bucketName'],
  }),
});
