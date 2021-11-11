'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  nestedResources: {
    Contacts: require('./WhatsAppContacts'),
    Media: require('./WhatsAppMedia'),
    Messages: require('./WhatsAppMessages'),
    Users: require('./WhatsAppUsers'),
  }
});
