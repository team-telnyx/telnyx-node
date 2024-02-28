'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'bulk_phone_number_campaigns',
  includeBasic: ['list','retrieve','create'],

  GetPhoneNumberStatus: telnyxMethod({
    method: 'GET',
    path: '/phoneNumberAssignmentByProfile/{taskId}/phoneNumbers',
    urlParams: ['taskId'],
  }),
  GetAssignmentTaskStatus: telnyxMethod({
    method: 'GET',
    path: '/phoneNumberAssignmentByProfile/{taskId}',
    urlParams: ['taskId'],
  }),
  PostAssignMessagingProfileToCampaign: telnyxMethod({
    method: 'POST',
    path: '/phoneNumberAssignmentByProfile',
  }),

});
