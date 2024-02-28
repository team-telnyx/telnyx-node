'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'phone_number_search',
  includeBasic: ['list','retrieve'],

  ListAvailablePhoneNumbers: telnyxMethod({
    method: 'GET',
    path: '/available_phone_numbers',
  }),
  ListAvailablePhoneNumberBlocks: telnyxMethod({
    method: 'GET',
    path: '/available_phone_number_blocks',
  }),

});
