import TelnyxResource from '../TelnyxResource';

const telnyxMethod = TelnyxResource.method;

export const Texml = TelnyxResource.extend({
  path: 'texml',

  createSecret: telnyxMethod({
    method: 'POST',
    path: '/secrets',
    methodType: 'create',
  }),

  createCall: telnyxMethod({
    method: 'POST',
    path: '/calls/{application_id}',
    urlParams: ['application_id'],
    paramsNames: ['application_id'],
    methodType: 'create',
  }),

  updateCall: telnyxMethod({
    method: 'POST',
    path: '/calls/{call_sid}/update',
    urlParams: ['call_sid'],
    paramsNames: ['call_sid'],
  }),
});
