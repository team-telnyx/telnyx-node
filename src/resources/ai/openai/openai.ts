// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as EmbeddingsAPI from './embeddings';
import {
  EmbeddingCreateEmbeddingsParams,
  EmbeddingCreateEmbeddingsResponse,
  EmbeddingListEmbeddingModelsResponse,
  Embeddings,
} from './embeddings';

export class OpenAI extends APIResource {
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);
}

OpenAI.Embeddings = Embeddings;

export declare namespace OpenAI {
  export {
    Embeddings as Embeddings,
    type EmbeddingCreateEmbeddingsResponse as EmbeddingCreateEmbeddingsResponse,
    type EmbeddingListEmbeddingModelsResponse as EmbeddingListEmbeddingModelsResponse,
    type EmbeddingCreateEmbeddingsParams as EmbeddingCreateEmbeddingsParams,
  };
}
