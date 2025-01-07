import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const AiEmbeddings = TelnyxResource.extend({
  path: 'ai/embeddings',
  includeBasic: ['list', 'create'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{task_id}',
    urlParams: ['task_id'],
  }),
});
