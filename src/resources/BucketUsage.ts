import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const BucketUsage = TelnyxResource.extend({
  path: 'bucket_usage',
  includeBasic: ['list', 'retrieve'],

  GetBucketSnapshot: telnyxMethod({
    method: 'GET',
    path: '/storage/buckets/{bucketName}/snapshot',
    urlParams: ['bucketName'],
  }),
  GetBucketUsage: telnyxMethod({
    method: 'GET',
    path: '/storage/buckets/{bucketName}/usage',
    urlParams: ['bucketName'],
  }),
});
