'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'bucket_usage',
  includeBasic: ['list','retrieve'],

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
