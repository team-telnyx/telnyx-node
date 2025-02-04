import TelnyxResource from '../TelnyxResource.js';

export const AiEmbeddingsSimilaritySearch = TelnyxResource.extend({
  path: 'ai/embeddings/similarity-search',
  includeBasic: ['create'],
});
