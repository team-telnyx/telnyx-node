'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'bucket',
  includeBasic: ['delete'],

  DeleteBucket: telnyxMethod({
    method: 'DELETE',
    path: '/{bucketName}',
    urlParams: ['bucketName'],
  }),

});
