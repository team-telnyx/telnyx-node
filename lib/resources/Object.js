'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
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
