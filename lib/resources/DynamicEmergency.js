'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  nestedResources: {
    Addresses: require('./DynamicEmergencyAddresses'),
    Endpoints: require('./DynamicEmergencyEndpoints'),
  }
});
