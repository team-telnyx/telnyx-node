import TelnyxResource from '../TelnyxResource.js';
const telnyxMethod = TelnyxResource.method;

export const AiEmbeddingsBuckets = TelnyxResource.extend({
  path: 'ai/embeddings/buckets',
  includeBasic: ['list'],

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{bucket_name}',
    urlParams: ['bucket_name'],
  }),

  del: telnyxMethod({
    method: 'DELETE',
    path: '/{bucket_name}',
    urlParams: ['bucket_name'],
  }),
});
