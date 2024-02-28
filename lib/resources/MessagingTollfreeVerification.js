'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'messaging/tollfree_verification',
  includeBasic: ['list','retrieve','delete'],

  ListVerificationRequests: telnyxMethod({
    method: 'GET',
    path: '/messaging/tollfree_verification_requests',
  }),
  DeleteVerificationRequest: telnyxMethod({
    method: 'DELETE',
    path: '/messaging/tollfree_verification_requests_{id}',
    urlParams: ['id'],
  }),

});
