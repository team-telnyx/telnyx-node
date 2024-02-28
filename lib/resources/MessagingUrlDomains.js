'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'messaging/url_domains',
  includeBasic: ['list','retrieve'],

  ListMessagingUrlDomains: telnyxMethod({
    method: 'GET',
    path: '/messaging/url_domains',
  }),

});
