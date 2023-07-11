'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

function transformResponseData(response, telnyx) {
  return utils.addResourceToResponseData(
    response,
    telnyx,
    'whatsAppBusinessAccount'
  );
}

module.exports = TelnyxResource.extend({
  path: 'whatsapp_business_accounts',

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',

    transformResponseData: transformResponseData,
  }),
  retrieveWhatsAppBusinessAccount: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],

    transformResponseData: transformResponseData,
  }),

  retrieveWhatsAppBusinessAccountPhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/{id}/phone_numbers',
    urlParams: ['id'],
  }),
});
