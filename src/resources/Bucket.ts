import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Bucket = TelnyxResource.extend({
  path: 'bucket',
  includeBasic: ['delete'],

  DeleteBucket: telnyxMethod({
    method: 'DELETE',
    path: '/{bucketName}',
    urlParams: ['bucketName'],
  }),
});
