import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const MessagingTollfreeVerification = TelnyxResource.extend({
  path: 'messaging/tollfree_verification',
  includeBasic: ['list', 'retrieve', 'delete'],

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
