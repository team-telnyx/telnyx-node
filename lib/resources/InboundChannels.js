'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'inbound_channels',
  includeBasic: ['list','retrieve'],

  ListInboundChannels: telnyxMethod({
    method: 'GET',
    path: '/phone_numbers/inbound_channels',
  }),

});
