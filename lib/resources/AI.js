'use strict';

const TelnyxResource = require('../TelnyxResource');
const telnyxMethod = TelnyxResource.method;

module.exports = TelnyxResource.extend({
  path: 'public_endpoints',
  includeBasic: ['list','retrieve','create','delete'],

  GetEmbeddingTask: telnyxMethod({
    method: 'GET',
    path: '/ai/embeddings/{task/id}',
    urlParams: ['task_id'],
  }),
  PostEmbedding: telnyxMethod({
    method: 'POST',
    path: '/ai/embeddings',
  }),
  embedding_bucket_files_public_embedding_buckets__bucket_name__delete: telnyxMethod({
    method: 'DELETE',
    path: '/ai/embeddings_buckets/{bucket_name}',
    urlParams: ['bucket_name'],
  }),
  PostInferenceStream: telnyxMethod({
    method: 'POST',
    path: '/ai/generate/stream',
  }),
  PostInference: telnyxMethod({
    method: 'POST',
    path: '/ai/generate',
  }),
  PostSummary: telnyxMethod({
    method: 'POST',
    path: '/ai/summarize',
  }),
  PostEmbeddingSimilaritySearch: telnyxMethod({
    method: 'POST',
    path: '/ai/embeddings/similarity-search',
  }),
  GetEmbeddingBuckets: telnyxMethod({
    method: 'GET',
    path: '/ai/embeddings_buckets',
  }),

});
