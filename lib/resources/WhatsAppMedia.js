'use strict';

const telnyxMethod = require('../TelnyxMethod');
const {multipartRequestDataProcessor} = require('../multipart');

module.exports = require('../TelnyxResource').extend({
  path: 'whatsapp_media',

  upload: telnyxMethod({
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Apply-Custom-DataProcessor-To-Request': true
    },
  }),

  download: telnyxMethod({
    method: 'GET',
    headers: {
      'Accept': 'text/plain'
    },
    path: '/{whatsapp_user_id}/{media_id}',
    urlParams: ['whatsapp_user_id', 'media_id']    
  }),

  del: telnyxMethod({
    method: 'DELETE',
    path: '/{whatsapp_user_id}/{media_id}',
    urlParams: ['whatsapp_user_id', 'media_id']
  }),

  requestDataProcessor: multipartRequestDataProcessor,
});
