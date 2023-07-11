'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'whatsapp_media',
    {}
  );
}

module.exports = TelnyxResource.extend({
  path: '/whatsapp_media',
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  del: telnyxMethod({
    method: 'DELETE',
    path: '/{whatsapp_user_id}/{media_id}',
    urlParams: ['whatsapp_user_id', 'media_id'],
    transformResponseData: transformResponseData,
  }),
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{whatsapp_user_id}/{media_id}',
    urlParams: ['whatsapp_user_id', 'media_id'],
    transformResponseData: transformResponseData,
  }),
});
