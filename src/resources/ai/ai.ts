// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioAPI from './audio';
import { Audio, AudioTranscribeParams, AudioTranscribeResponse } from './audio';
import * as ChatAPI from './chat';
import { BucketIDs, Chat, ChatCreateCompletionParams, ChatCreateCompletionResponse } from './chat';
import * as ClustersAPI from './clusters';
import {
  ClusterComputeParams,
  ClusterComputeResponse,
  ClusterFetchGraphParams,
  ClusterFetchGraphResponse,
  ClusterListParams,
  ClusterListResponse,
  ClusterRetrieveParams,
  ClusterRetrieveResponse,
  Clusters,
  RecursiveCluster,
} from './clusters';
import * as AssistantsAPI from './assistants/assistants';
import {
  Assistant,
  AssistantChatParams,
  AssistantChatResponse,
  AssistantCloneResponse,
  AssistantCreateParams,
  AssistantCreateResponse,
  AssistantDeleteResponse,
  AssistantGetTexmlResponse,
  AssistantImportParams,
  AssistantRetrieveParams,
  AssistantRetrieveResponse,
  AssistantTool,
  AssistantUpdateParams,
  AssistantUpdateResponse,
  Assistants,
  AssistantsList,
  EnabledFeatures,
  HangupTool,
  HangupToolParams,
  ImportMetadata,
  InferenceEmbeddingBucketIDs,
  InferenceEmbeddingTransferToolParams,
  InferenceEmbeddingWebhookToolParams,
  InsightSettings,
  MessagingSettings,
  PrivacySettings,
  RetrievalTool,
  TelephonySettings,
  TranscriptionSettings,
  TransferTool,
  VoiceSettings,
  WebhookTool,
} from './assistants/assistants';
import * as ConversationsAPI from './conversations/conversations';
import {
  Conversation,
  ConversationCreateParams,
  ConversationListParams,
  ConversationListResponse,
  ConversationRetrieveConversationsInsightsResponse,
  ConversationRetrieveResponse,
  ConversationUpdateParams,
  ConversationUpdateResponse,
  Conversations,
} from './conversations/conversations';
import * as EmbeddingsAPI from './embeddings/embeddings';
import {
  BackgroundTaskStatus,
  EmbeddingCreateParams,
  EmbeddingListParams,
  EmbeddingListResponse,
  EmbeddingResponse,
  EmbeddingRetrieveResponse,
  EmbeddingSimilaritySearchParams,
  EmbeddingSimilaritySearchResponse,
  EmbeddingURLParams,
  Embeddings,
} from './embeddings/embeddings';
import * as FineTuningAPI from './fine-tuning/fine-tuning';
import { FineTuning } from './fine-tuning/fine-tuning';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class AI extends APIResource {
  assistants: AssistantsAPI.Assistants = new AssistantsAPI.Assistants(this._client);
  audio: AudioAPI.Audio = new AudioAPI.Audio(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  clusters: ClustersAPI.Clusters = new ClustersAPI.Clusters(this._client);
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);
  fineTuning: FineTuningAPI.FineTuning = new FineTuningAPI.FineTuning(this._client);

  /**
   * This endpoint returns a list of Open Source and OpenAI models that are available
   * for use. <br /><br /> **Note**: Model `id`'s will be in the form
   * `{source}/{model_name}`. For example `openai/gpt-4` or
   * `mistralai/Mistral-7B-Instruct-v0.1` consistent with HuggingFace naming
   * conventions.
   *
   * @example
   * ```ts
   * const response = await client.ai.retrieveModels();
   * ```
   */
  retrieveModels(options?: RequestOptions): APIPromise<AIRetrieveModelsResponse> {
    return this._client.get('/ai/models', options);
  }

  /**
   * Generate a summary of a file's contents.
   *
   * Supports the following text formats:
   *
   * - PDF, HTML, txt, json, csv
   *
   * Supports the following media formats (billed for both the transcription and
   * summary):
   *
   * - flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or webm
   * - Up to 100 MB
   *
   * @example
   * ```ts
   * const response = await client.ai.summarize({
   *   bucket: 'bucket',
   *   filename: 'filename',
   * });
   * ```
   */
  summarize(body: AISummarizeParams, options?: RequestOptions): APIPromise<AISummarizeResponse> {
    return this._client.post('/ai/summarize', { body, ...options });
  }
}

export interface AIRetrieveModelsResponse {
  data: Array<AIRetrieveModelsResponse.Data>;

  object?: string;
}

export namespace AIRetrieveModelsResponse {
  export interface Data {
    id: string;

    created: number;

    owned_by: string;

    object?: string;
  }
}

export interface AISummarizeResponse {
  data: AISummarizeResponse.Data;
}

export namespace AISummarizeResponse {
  export interface Data {
    summary: string;
  }
}

export interface AISummarizeParams {
  /**
   * The name of the bucket that contains the file to be summarized.
   */
  bucket: string;

  /**
   * The name of the file to be summarized.
   */
  filename: string;

  /**
   * A system prompt to guide the summary generation.
   */
  system_prompt?: string;
}

AI.Assistants = Assistants;
AI.Audio = Audio;
AI.Chat = Chat;
AI.Clusters = Clusters;
AI.Conversations = Conversations;
AI.Embeddings = Embeddings;
AI.FineTuning = FineTuning;

export declare namespace AI {
  export {
    type AIRetrieveModelsResponse as AIRetrieveModelsResponse,
    type AISummarizeResponse as AISummarizeResponse,
    type AISummarizeParams as AISummarizeParams,
  };

  export {
    Assistants as Assistants,
    type Assistant as Assistant,
    type AssistantTool as AssistantTool,
    type AssistantsList as AssistantsList,
    type EnabledFeatures as EnabledFeatures,
    type HangupTool as HangupTool,
    type HangupToolParams as HangupToolParams,
    type ImportMetadata as ImportMetadata,
    type InferenceEmbeddingBucketIDs as InferenceEmbeddingBucketIDs,
    type InferenceEmbeddingTransferToolParams as InferenceEmbeddingTransferToolParams,
    type InferenceEmbeddingWebhookToolParams as InferenceEmbeddingWebhookToolParams,
    type InsightSettings as InsightSettings,
    type MessagingSettings as MessagingSettings,
    type PrivacySettings as PrivacySettings,
    type RetrievalTool as RetrievalTool,
    type TelephonySettings as TelephonySettings,
    type TranscriptionSettings as TranscriptionSettings,
    type TransferTool as TransferTool,
    type VoiceSettings as VoiceSettings,
    type WebhookTool as WebhookTool,
    type AssistantCreateResponse as AssistantCreateResponse,
    type AssistantRetrieveResponse as AssistantRetrieveResponse,
    type AssistantUpdateResponse as AssistantUpdateResponse,
    type AssistantDeleteResponse as AssistantDeleteResponse,
    type AssistantChatResponse as AssistantChatResponse,
    type AssistantCloneResponse as AssistantCloneResponse,
    type AssistantGetTexmlResponse as AssistantGetTexmlResponse,
    type AssistantCreateParams as AssistantCreateParams,
    type AssistantRetrieveParams as AssistantRetrieveParams,
    type AssistantUpdateParams as AssistantUpdateParams,
    type AssistantChatParams as AssistantChatParams,
    type AssistantImportParams as AssistantImportParams,
  };

  export {
    Audio as Audio,
    type AudioTranscribeResponse as AudioTranscribeResponse,
    type AudioTranscribeParams as AudioTranscribeParams,
  };

  export {
    Chat as Chat,
    type BucketIDs as BucketIDs,
    type ChatCreateCompletionResponse as ChatCreateCompletionResponse,
    type ChatCreateCompletionParams as ChatCreateCompletionParams,
  };

  export {
    Clusters as Clusters,
    type RecursiveCluster as RecursiveCluster,
    type ClusterRetrieveResponse as ClusterRetrieveResponse,
    type ClusterListResponse as ClusterListResponse,
    type ClusterComputeResponse as ClusterComputeResponse,
    type ClusterFetchGraphResponse as ClusterFetchGraphResponse,
    type ClusterRetrieveParams as ClusterRetrieveParams,
    type ClusterListParams as ClusterListParams,
    type ClusterComputeParams as ClusterComputeParams,
    type ClusterFetchGraphParams as ClusterFetchGraphParams,
  };

  export {
    Conversations as Conversations,
    type Conversation as Conversation,
    type ConversationRetrieveResponse as ConversationRetrieveResponse,
    type ConversationUpdateResponse as ConversationUpdateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationRetrieveConversationsInsightsResponse as ConversationRetrieveConversationsInsightsResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
  };

  export {
    Embeddings as Embeddings,
    type BackgroundTaskStatus as BackgroundTaskStatus,
    type EmbeddingResponse as EmbeddingResponse,
    type EmbeddingRetrieveResponse as EmbeddingRetrieveResponse,
    type EmbeddingListResponse as EmbeddingListResponse,
    type EmbeddingSimilaritySearchResponse as EmbeddingSimilaritySearchResponse,
    type EmbeddingCreateParams as EmbeddingCreateParams,
    type EmbeddingListParams as EmbeddingListParams,
    type EmbeddingSimilaritySearchParams as EmbeddingSimilaritySearchParams,
    type EmbeddingURLParams as EmbeddingURLParams,
  };

  export { FineTuning as FineTuning };
}
