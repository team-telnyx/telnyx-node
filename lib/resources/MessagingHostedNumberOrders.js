'use strict';

var TelnyxResource = require('../TelnyxResource');
var utils = require('../utils');
var telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'messaging_hosted_number_orders',
  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',
    transformResponseData: transformResponseData,
  }),
  create: telnyxMethod({
    method: 'POST',
    transformResponseData: transformResponseData,
  }),
  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
    transformResponseData: transformResponseData,
  }),
});