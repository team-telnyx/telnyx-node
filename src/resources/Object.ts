import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const Object = TelnyxResource.extend({
  path: 'object',
  includeBasic: ['delete'],

  DeleteObject: telnyxMethod({
    method: 'DELETE',
    path: '/{bucketName}/{objectName}',
    urlParams: ['bucketName', 'objectName'],
  }),
  DeleteBucket: telnyxMethod({
    method: 'DELETE',
    path: '/{bucketName}',
    urlParams: ['bucketName'],
  }),
});
