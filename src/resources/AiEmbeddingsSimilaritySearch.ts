import TelnyxResource from '../TelnyxResource';

export const AiEmbeddingsSimilaritySearch = TelnyxResource.extend({
  path: 'ai/embeddings/similarity-search',
  includeBasic: ['create'],
});
