'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'presigned_object_urls',
  includeBasic: ['create'],

  GetPresignedObjectUrl: telnyxMethod({
    method: 'POST',
    path: '/storage_buckets/{bucketName}/{objectName}/presigned_url',
    urlParams: ['bucketName', 'objectName'],
  }),

});
