import TelnyxResource from '../TelnyxResource';
const telnyxMethod = TelnyxResource.method;

export const AiAssistants = TelnyxResource.extend({
  path: 'ai/assistants',
  includeBasic: ['list', 'create'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{assistant_id}',
    urlParams: ['assistant_id'],
  }),

  update: telnyxMethod({
    method: 'POST',
    path: '/{assistant_id}',
    urlParams: ['assistant_id'],
  }),

  del: telnyxMethod({
    method: 'DELETE',
    path: '/{assistant_id}',
    urlParams: ['assistant_id'],
  }),
});
