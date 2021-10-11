'use strict';

var TelnyxResource = require('../TelnyxResource');

module.exports = TelnyxResource.extend({
  nestedResources: {
    Channels: require('./NotificationChannels'),
    EventConditions: require('./NotificationEventConditions'),
    Events: require('./NotificationEvents'),
    Profiles: require('./NotificationProfiles'),
    Settings: require('./NotificationSettings')
  }
});
