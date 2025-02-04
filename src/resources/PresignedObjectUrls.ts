import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const PresignedObjectUrls = TelnyxResource.extend({
  path: 'presigned_object_urls',
  includeBasic: ['create'],

  GetPresignedObjectUrl: telnyxMethod({
    method: 'POST',
    path: '/storage_buckets/{bucketName}/{objectName}/presigned_url',
    urlParams: ['bucketName', 'objectName'],
  }),
});
