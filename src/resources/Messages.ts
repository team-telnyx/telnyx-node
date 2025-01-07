import TelnyxResource from '../TelnyxResource.js';

const telnyxMethod = TelnyxResource.method;

export const Messages = TelnyxResource.extend({
  path: 'messages',
  includeBasic: ['create', 'retrieve'],

  send: telnyxMethod({
    method: 'POST',
  }),

  sendGroupMms: telnyxMethod({
    method: 'POST',
    path: '/group_mms',
  }),

  sendLongCode: telnyxMethod({
    method: 'POST',
    path: '/long_code',
  }),

  sendNumberPool: telnyxMethod({
    method: 'POST',
    path: '/number_pool',
  }),

  sendShortCode: telnyxMethod({
    method: 'POST',
    path: '/short_code',
  }),
});
