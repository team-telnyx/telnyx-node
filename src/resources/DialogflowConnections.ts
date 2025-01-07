import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const DialogflowConnections = TelnyxResource.extend({
  path: 'dialogflow_connections',

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{connection_id}',
    urlParams: ['connection_id'],
    methodType: 'retrieve',
  }),

  create: telnyxMethod({
    method: 'POST',
    path: '/{connection_id}',
    urlParams: ['connection_id'],
  }),

  update: telnyxMethod({
    method: 'PUT',
    path: '/{connection_id}',
    urlParams: ['connection_id'],
  }),

  del: telnyxMethod({
    method: 'DELETE',
    path: '/{connection_id}',
    urlParams: ['connection_id'],
  }),
});
