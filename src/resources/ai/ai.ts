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
  ClusterListParams,
  ClusterListResponse,
  ClusterListResponsesDefaultFlatPagination,
  ClusterRetrieveParams,
  ClusterRetrieveResponse,
  Clusters,
  RecursiveCluster,
} from './clusters';
import * as McpServersAPI from './mcp-servers';
import {
  McpServerCreateParams,
  McpServerCreateResponse,
  McpServerListParams,
  McpServerListResponse,
  McpServerListResponsesDefaultFlatPaginationTopLevelArray,
  McpServerRetrieveResponse,
  McpServerUpdateParams,
  McpServerUpdateResponse,
  McpServers,
} from './mcp-servers';
import * as ToolsAPI from './tools';
import {
  ToolCreateParams,
  ToolCreateResponse,
  ToolDeleteResponse,
  ToolListParams,
  ToolListResponse,
  ToolListResponsesDefaultFlatPagination,
  ToolRetrieveResponse,
  ToolUpdateParams,
  ToolUpdateResponse,
  Tools,
} from './tools';
import * as AssistantsAPI from './assistants/assistants';
import {
  Assistant,
  AssistantChatParams,
  AssistantChatResponse,
  AssistantCreateParams,
  AssistantDeleteResponse,
  AssistantGetTexmlResponse,
  AssistantImportsParams,
  AssistantRetrieveParams,
  AssistantSendSMSParams,
  AssistantSendSMSResponse,
  AssistantTool,
  AssistantUpdateParams,
  Assistants,
  AssistantsList,
  AudioVisualizerConfig,
  EnabledFeatures,
  ExternalLlm,
  ExternalLlmReq,
  FallbackConfig,
  FallbackConfigReq,
  HangupTool,
  HangupToolParams,
  ImportMetadata,
  InferenceEmbedding,
  InferenceEmbeddingWebhookToolParams,
  InsightSettings,
  MessagingSettings,
  Observability,
  ObservabilityReq,
  PostConversationSettings,
  PostConversationSettingsReq,
  PrivacySettings,
  RetrievalTool,
  TelephonySettings,
  TranscriptionSettings,
  TranscriptionSettingsConfig,
  TransferTool,
  VoiceSettings,
  WebhookTool,
  WidgetSettings,
} from './assistants/assistants';
import * as ConversationsAPI from './conversations/conversations';
import {
  Conversation,
  ConversationAddMessageParams,
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
import * as IntegrationsAPI from './integrations/integrations';
import {
  IntegrationListResponse,
  IntegrationRetrieveResponse,
  Integrations,
} from './integrations/integrations';
import * as MissionsAPI from './missions/missions';
import {
  MissionCloneMissionResponse,
  MissionCreateParams,
  MissionCreateResponse,
  MissionData,
  MissionDataDefaultFlatPagination,
  MissionListEventsParams,
  MissionListParams,
  MissionRetrieveResponse,
  MissionUpdateMissionParams,
  MissionUpdateMissionResponse,
  Missions,
} from './missions/missions';
import * as OpenAIAPI from './openai/openai';
import {
  OpenAI,
  OpenAICreateResponseParams,
  OpenAICreateResponseResponse,
  OpenAIListModelsResponse,
} from './openai/openai';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Generate text with LLMs
 */
export class AI extends APIResource {
  assistants: AssistantsAPI.Assistants = new AssistantsAPI.Assistants(this._client);
  audio: AudioAPI.Audio = new AudioAPI.Audio(this._client);
  chat: ChatAPI.Chat = new ChatAPI.Chat(this._client);
  clusters: ClustersAPI.Clusters = new ClustersAPI.Clusters(this._client);
  conversations: ConversationsAPI.Conversations = new ConversationsAPI.Conversations(this._client);
  embeddings: EmbeddingsAPI.Embeddings = new EmbeddingsAPI.Embeddings(this._client);
  fineTuning: FineTuningAPI.FineTuning = new FineTuningAPI.FineTuning(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  mcpServers: McpServersAPI.McpServers = new McpServersAPI.McpServers(this._client);
  missions: MissionsAPI.Missions = new MissionsAPI.Missions(this._client);
  openai: OpenAIAPI.OpenAI = new OpenAIAPI.OpenAI(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * **Deprecated**: Use `POST /v2/ai/openai/responses` instead. This endpoint is
   * compatible with the
   * [OpenAI Responses API](https://developers.openai.com/api/reference/responses/overview)
   * and may be used with the OpenAI JS or Python SDK. Response id parameter is not
   * supported at the moment. Use the `conversation` parameter with a Telnyx
   * Conversation ID to leverage persistent conversations.
   *
   * @deprecated
   */
  createResponse(
    params: AICreateResponseParams,
    options?: RequestOptions,
  ): APIPromise<AICreateResponseResponse> {
    const { body } = params;
    return this._client.post('/ai/responses', { body: body, ...options });
  }

  /**
   * **Deprecated**: Use `GET /v2/ai/openai/models` instead.
   *
   * Returns the same `ModelsResponse` payload as the OpenAI-compatible endpoint —
   * open-source LLMs hosted on Telnyx (e.g. `moonshotai/Kimi-K2.6`,
   * `zai-org/GLM-5.1-FP8`, `MiniMaxAI/MiniMax-M2.7`), embedding models, and
   * fine-tuned models — kept around for backwards compatibility. New integrations
   * should use `/v2/ai/openai/models`.
   *
   * Model ids follow the `{organization}/{model_name}` convention from Hugging Face.
   *
   * @deprecated
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

export type AICreateResponseResponse = { [key: string]: unknown };

export interface AIRetrieveModelsResponse {
  data: Array<AIRetrieveModelsResponse.Data>;

  object?: string;
}

export namespace AIRetrieveModelsResponse {
  /**
   * Metadata for a model available on Telnyx Inference. Returned by
   * `GET /v2/ai/openai/models` (and the deprecated `GET /v2/ai/models`). Open-source
   * models live under their Hugging Face organization (e.g. `moonshotai/Kimi-K2.6`,
   * `zai-org/GLM-5.1-FP8`, `MiniMaxAI/MiniMax-M2.7`); fine-tuned models are owned by
   * the Telnyx organization that trained them.
   */
  export interface Data {
    /**
     * Model identifier. For open-source models, follows the
     * `{organization}/{model_name}` convention from Hugging Face (e.g.
     * `moonshotai/Kimi-K2.6`).
     */
    id: string;

    /**
     * Maximum total tokens (prompt + completion) supported by the model in a single
     * request.
     */
    context_length: number;

    /**
     * Timestamp at which the model was registered on Telnyx Inference (ISO 8601).
     */
    created: string;

    /**
     * ISO language codes the model supports (e.g. `en`, `es`).
     */
    languages: Array<string>;

    /**
     * License the model is distributed under, e.g. `Apache 2.0`, `MIT`,
     * `Llama 3 Community License`.
     */
    license: string;

    /**
     * Organization that originally published the model, matching the prefix of `id`
     * for open-source models.
     */
    organization: string;

    /**
     * Owner of the model. `Telnyx` for Telnyx-hosted open-source models, the upstream
     * provider name for proxied models, or the Telnyx organization id for fine-tuned
     * models.
     */
    owned_by: string;

    /**
     * Total parameter count of the model.
     */
    parameters: number;

    /**
     * Billing tier the model belongs to. Used together with `pricing` to determine
     * cost per 1M tokens.
     */
    tier: 'small' | 'medium' | 'large' | 'unlisted';

    /**
     * Base model the fine-tuned model was trained from. Only set for fine-tuned
     * models.
     */
    base_model?: string | null;

    /**
     * Short, human-readable summary of what the model is best suited for.
     */
    description?: string | null;

    /**
     * Whether the model can be used as a base for a fine-tuning job via
     * `POST /v2/ai/fine_tuning/jobs`.
     */
    is_fine_tunable?: boolean;

    /**
     * Whether the model accepts image inputs in chat completions (multimodal vision
     * support).
     */
    is_vision_supported?: boolean;

    /**
     * Maximum number of completion (output) tokens the model will generate per
     * request. `null` if unconstrained beyond `context_length`.
     */
    max_completion_tokens?: number | null;

    /**
     * Object type. Always `model`.
     */
    object?: string;

    /**
     * Human-readable parameter count, e.g. `1.0T`, `753.9B`, `8B`.
     */
    parameters_str?: string | null;

    /**
     * Mapping of token kind to price, as strings to preserve precision. Typical keys
     * are `prompt`, `cached_prompt`, and `completion`. When pricing is available the
     * block also includes `currency` (ISO 4217 code matching the account's configured
     * billing currency) and `unit` (the denomination the prices are quoted in,
     * currently always `1M_tokens` for token-priced models).
     */
    pricing?: { [key: string]: string };

    /**
     * Whether Telnyx currently recommends this model as the LLM powering a Telnyx AI
     * Assistant.
     */
    recommended_for_assistants?: boolean;

    /**
     * Public region names where the model is currently deployed (e.g. `us-central-1`,
     * `eu-central-1`).
     */
    regions?: Array<string>;

    /**
     * Primary task the model is intended for, e.g. `text-generation`,
     * `audio-text-to-text`, `feature-extraction` (embeddings).
     */
    task?: string;
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

export interface AICreateResponseParams {
  body: { [key: string]: unknown };
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
AI.Integrations = Integrations;
AI.McpServers = McpServers;
AI.Missions = Missions;
AI.OpenAI = OpenAI;
AI.Tools = Tools;

export declare namespace AI {
  export {
    type AICreateResponseResponse as AICreateResponseResponse,
    type AIRetrieveModelsResponse as AIRetrieveModelsResponse,
    type AISummarizeResponse as AISummarizeResponse,
    type AICreateResponseParams as AICreateResponseParams,
    type AISummarizeParams as AISummarizeParams,
  };

  export {
    Assistants as Assistants,
    type Assistant as Assistant,
    type AssistantTool as AssistantTool,
    type AssistantsList as AssistantsList,
    type AudioVisualizerConfig as AudioVisualizerConfig,
    type EnabledFeatures as EnabledFeatures,
    type ExternalLlm as ExternalLlm,
    type ExternalLlmReq as ExternalLlmReq,
    type FallbackConfig as FallbackConfig,
    type FallbackConfigReq as FallbackConfigReq,
    type HangupTool as HangupTool,
    type HangupToolParams as HangupToolParams,
    type ImportMetadata as ImportMetadata,
    type InferenceEmbedding as InferenceEmbedding,
    type InferenceEmbeddingWebhookToolParams as InferenceEmbeddingWebhookToolParams,
    type InsightSettings as InsightSettings,
    type MessagingSettings as MessagingSettings,
    type Observability as Observability,
    type ObservabilityReq as ObservabilityReq,
    type PostConversationSettings as PostConversationSettings,
    type PostConversationSettingsReq as PostConversationSettingsReq,
    type PrivacySettings as PrivacySettings,
    type RetrievalTool as RetrievalTool,
    type TelephonySettings as TelephonySettings,
    type TranscriptionSettings as TranscriptionSettings,
    type TranscriptionSettingsConfig as TranscriptionSettingsConfig,
    type TransferTool as TransferTool,
    type VoiceSettings as VoiceSettings,
    type WebhookTool as WebhookTool,
    type WidgetSettings as WidgetSettings,
    type AssistantDeleteResponse as AssistantDeleteResponse,
    type AssistantChatResponse as AssistantChatResponse,
    type AssistantGetTexmlResponse as AssistantGetTexmlResponse,
    type AssistantSendSMSResponse as AssistantSendSMSResponse,
    type AssistantCreateParams as AssistantCreateParams,
    type AssistantRetrieveParams as AssistantRetrieveParams,
    type AssistantUpdateParams as AssistantUpdateParams,
    type AssistantChatParams as AssistantChatParams,
    type AssistantImportsParams as AssistantImportsParams,
    type AssistantSendSMSParams as AssistantSendSMSParams,
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
    type ClusterListResponsesDefaultFlatPagination as ClusterListResponsesDefaultFlatPagination,
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
    type ConversationAddMessageParams as ConversationAddMessageParams,
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

  export {
    Integrations as Integrations,
    type IntegrationRetrieveResponse as IntegrationRetrieveResponse,
    type IntegrationListResponse as IntegrationListResponse,
  };

  export {
    McpServers as McpServers,
    type McpServerCreateResponse as McpServerCreateResponse,
    type McpServerRetrieveResponse as McpServerRetrieveResponse,
    type McpServerUpdateResponse as McpServerUpdateResponse,
    type McpServerListResponse as McpServerListResponse,
    type McpServerListResponsesDefaultFlatPaginationTopLevelArray as McpServerListResponsesDefaultFlatPaginationTopLevelArray,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerUpdateParams as McpServerUpdateParams,
    type McpServerListParams as McpServerListParams,
  };

  export {
    Missions as Missions,
    type MissionData as MissionData,
    type MissionCreateResponse as MissionCreateResponse,
    type MissionRetrieveResponse as MissionRetrieveResponse,
    type MissionCloneMissionResponse as MissionCloneMissionResponse,
    type MissionUpdateMissionResponse as MissionUpdateMissionResponse,
    type MissionDataDefaultFlatPagination as MissionDataDefaultFlatPagination,
    type MissionCreateParams as MissionCreateParams,
    type MissionListParams as MissionListParams,
    type MissionListEventsParams as MissionListEventsParams,
    type MissionUpdateMissionParams as MissionUpdateMissionParams,
  };

  export {
    OpenAI as OpenAI,
    type OpenAICreateResponseResponse as OpenAICreateResponseResponse,
    type OpenAIListModelsResponse as OpenAIListModelsResponse,
    type OpenAICreateResponseParams as OpenAICreateResponseParams,
  };

  export {
    Tools as Tools,
    type ToolCreateResponse as ToolCreateResponse,
    type ToolRetrieveResponse as ToolRetrieveResponse,
    type ToolUpdateResponse as ToolUpdateResponse,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolListResponsesDefaultFlatPagination as ToolListResponsesDefaultFlatPagination,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
  };
}
