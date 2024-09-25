import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const DialogflowIntegration = TelnyxResource.extend({
  path: 'dialogflow_integration',
  includeBasic: ['delete'],

  DeleteDialogflowConnection: telnyxMethod({
    method: 'DELETE',
    path: '/dialogflow_connections/{connection_id}',
  }),
});
