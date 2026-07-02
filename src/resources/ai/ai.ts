// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AudioAPI from './audio';
import { Audio, AudioTranscribeParams, AudioTranscribeResponse } from './audio';
import * as ChatAPI from './chat';
import {
  BucketIDs,
  Chat,
  ChatCompletionRequest,
  ChatCreateCompletionParams,
  ChatCreateCompletionResponse,
} from './chat';
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
  McpServer,
  McpServerCreateParams,
  McpServerListParams,
  McpServerUpdateParams,
  McpServers,
  McpServersDefaultFlatPaginationTopLevelArray,
} from './mcp-servers';
import * as ToolsAPI from './tools';
import {
  SharedToolResponse,
  SharedToolResponsesDefaultFlatPagination,
  ToolCreateParams,
  ToolDeleteResponse,
  ToolListParams,
  ToolUpdateParams,
  Tools,
} from './tools';
import * as AssistantsAPI from './assistants/assistants';
import {
  ArithmeticExpression,
  Assistant,
  AssistantChatParams,
  AssistantChatResponse,
  AssistantCreateParams,
  AssistantDeleteResponse,
  AssistantGetTexmlResponse,
  AssistantImportsParams,
  AssistantIntegration,
  AssistantMcpServer,
  AssistantRetrieveParams,
  AssistantSendSMSParams,
  AssistantSendSMSResponse,
  AssistantTool,
  AssistantUpdateParams,
  Assistants,
  AssistantsList,
  AudioVisualizerConfig,
  AuthenticationMethod,
  BooleanOpExpression,
  ComparisonExpression,
  ConversationFlowReq,
  EnabledFeatures,
  Expression,
  ExternalLlm,
  ExternalLlmReq,
  FallbackConfig,
  FallbackConfigReq,
  FlowEdge,
  HangupTool,
  HangupToolParams,
  ImportMetadata,
  InferenceEmbedding,
  InferenceEmbeddingInterruptionSettings,
  InferenceEmbeddingWebhookToolParams,
  InsightSettings,
  MessagingSettings,
  NodePosition,
  Observability,
  ObservabilityReq,
  ObservabilityStatus,
  PostConversationSettings,
  PostConversationSettingsReq,
  PrivacySettings,
  PromptSyncStatus,
  RetrievalTool,
  StartSpeakingPlan,
  TelephonySettings,
  TranscriptionEndpointingPlan,
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
import { Integration, IntegrationListResponse, Integrations } from './integrations/integrations';
import * as MissionsAPI from './missions/missions';
import {
  EventsListResponse,
  ExecutionMode,
  MissionCloneMissionResponse,
  MissionCreateParams,
  MissionData,
  MissionDataDefaultFlatPagination,
  MissionListEventsParams,
  MissionListParams,
  MissionResponse,
  MissionUpdateMissionParams,
  Missions,
} from './missions/missions';
import * as OpenAIAPI from './openai/openai';
import { OpenAI, OpenAICreateResponseParams, OpenAICreateResponseResponse } from './openai/openai';
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
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  mcpServers: McpServersAPI.McpServers = new McpServersAPI.McpServers(this._client);
  missions: MissionsAPI.Missions = new MissionsAPI.Missions(this._client);
  openai: OpenAIAPI.OpenAI = new OpenAIAPI.OpenAI(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

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
  retrieveModels(options?: RequestOptions): APIPromise<ModelsResponse> {
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
  createResponseDeprecated(
    params: AICreateResponseDeprecatedParams,
    options?: RequestOptions,
  ): APIPromise<AICreateResponseDeprecatedResponse> {
    const { response_request } = params;
    return this._client.post('/ai/responses', { body: response_request, ...options });
  }

  /**
   * Performs semantic vector search across conversation history records.
   *
   * **How it works:**
   *
   * 1. The query text is embedded into a 1024-dimensional vector using the
   *    multilingual-e5-large model.
   * 2. The vector is compared against indexed record chunks using semantic
   *    similarity search.
   * 3. When no region is specified, all regions are queried in parallel (fan-out)
   *    and results are merged by score.
   * 4. Results are ranked by similarity score (descending) and paginated via
   *    `page[number]` / `page[size]`.
   *
   * **Authentication:** Requires a Telnyx API key via `Authorization: Bearer <key>`.
   * Results are automatically scoped to the caller's organization —
   * `organization_id` is injected from the auth token and cannot be overridden.
   *
   * **Chunking:** Records are split into chunks of up to 480 tokens with 64-token
   * overlap at ingestion time. Each search result represents a single chunk, with
   * `chunk_index` and `chunk_total` indicating its position within the original
   * record.
   *
   * **Filtering:** Use `filter[field][operator]=value` query parameters to narrow
   * results before vector search.
   *
   * Top-level filterable fields: `user_id`, `region`, `record_id`,
   * `record_created_at`, `ingested_at`, `retention`
   *
   * Note: `retention` is filter-only — it can be used to narrow results but is not
   * returned in the response body.
   *
   * Metadata fields: any field not in the list above is resolved to
   * `data.metadata.<field>` (e.g., `filter[language]=en` →
   * `data.metadata.language`).
   *
   * Supported filter operators:
   *
   * - `eq` — exact match (default when no operator specified)
   * - `in` — match any of comma-separated values
   * - `gte`, `gt`, `lte`, `lt` — range comparisons (useful for date filtering)
   * - `contains` — wildcard substring match
   *
   * **Examples:**
   *
   * ```
   * GET /v2/ai/conversation_histories?q=billing+issue&page[size]=10
   * GET /v2/ai/conversation_histories?q=setup+guide&region=USA&min_score=0.5
   * GET /v2/ai/conversation_histories?q=refund&filter[record_created_at][gte]=2026-01-01T00:00:00Z
   * GET /v2/ai/conversation_histories?q=outage&filter[region][in]=USA,DEU
   * GET /v2/ai/conversation_histories?q=hold+time&filter[language]=en
   * ```
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.retrieveConversationHistories({
   *     q: 'customer called about billing issue',
   *   });
   * ```
   */
  retrieveConversationHistories(
    query: AIRetrieveConversationHistoriesParams,
    options?: RequestOptions,
  ): APIPromise<AIRetrieveConversationHistoriesResponse> {
    return this._client.get('/ai/conversation_histories', { query, ...options });
  }
}

/**
 * Metadata for a model available on Telnyx Inference. Returned by
 * `GET /v2/ai/openai/models` (and the deprecated `GET /v2/ai/models`). Open-source
 * models live under their Hugging Face organization (e.g. `moonshotai/Kimi-K2.6`,
 * `zai-org/GLM-5.1-FP8`, `MiniMaxAI/MiniMax-M2.7`); fine-tuned models are owned by
 * the Telnyx organization that trained them.
 */
export interface ModelMetadata {
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

export interface ModelsResponse {
  data: Array<ModelMetadata>;

  object?: string;
}

export type AICreateResponseDeprecatedResponse = { [key: string]: unknown };

/**
 * Search response following the standard Telnyx V2 API format.
 */
export interface AIRetrieveConversationHistoriesResponse {
  /**
   * Ranked list of matching text chunks, sorted by cosine similarity score
   * descending.
   */
  data: Array<AIRetrieveConversationHistoriesResponse.Data>;

  /**
   * Pagination metadata following the standard Telnyx V2 API format.
   */
  meta: AIRetrieveConversationHistoriesResponse.Meta;
}

export namespace AIRetrieveConversationHistoriesResponse {
  /**
   * A single search result representing one chunk of a conversation history record.
   * Records are split into chunks of up to 480 tokens with 64-token overlap at
   * ingestion time.
   */
  export interface Data {
    /**
     * Unique chunk identifier.
     */
    id: string;

    /**
     * Zero-based index of this chunk within the parent record.
     */
    chunk_index: number;

    /**
     * Total number of chunks the parent record was split into.
     */
    chunk_total: number;

    /**
     * When the record was chunked, embedded, and indexed (ISO 8601).
     */
    ingested_at: string;

    /**
     * Identifier of the organization that owns this record.
     */
    organization_id: string;

    /**
     * When the original record was created (ISO 8601).
     */
    record_created_at: string;

    /**
     * Identifier of the parent record. Multiple chunks from the same record share this
     * ID.
     */
    record_id: string;

    /**
     * The region where this record is stored.
     */
    region: 'USA' | 'DEU' | 'AUS' | 'UAE';

    /**
     * Cosine similarity score between the query vector and this chunk's vector. Higher
     * values indicate greater semantic relevance.
     */
    score: number;

    /**
     * The text content of this chunk (up to 480 tokens).
     */
    text: string;

    /**
     * Identifier of the user who owns this record.
     */
    user_id: string;

    /**
     * Arbitrary metadata attached to the record at ingestion time. Filterable via
     * filter[field]=value query parameters.
     */
    metadata?: { [key: string]: unknown };
  }

  /**
   * Pagination metadata following the standard Telnyx V2 API format.
   */
  export interface Meta {
    /**
     * Current page number (1-based), matching the requested page[number].
     */
    page_number: number;

    /**
     * Number of results per page, matching the requested page[size].
     */
    page_size: number;

    /**
     * Total number of pages.
     */
    total_pages: number;

    /**
     * Total number of matching results across all queried regions.
     */
    total_results: number;
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

export interface AICreateResponseDeprecatedParams {
  response_request: { [key: string]: unknown };
}

export interface AIRetrieveConversationHistoriesParams {
  /**
   * Natural language search query. The text is embedded into a 1024-dimensional
   * vector and compared against indexed record chunks using semantic similarity.
   */
  q: string;

  /**
   * Only include records ingested (chunked, embedded, and indexed) on or after this
   * ISO 8601 timestamp.
   */
  'filter[ingested_at][gte]'?: string;

  /**
   * Only include records ingested (chunked, embedded, and indexed) on or before this
   * ISO 8601 timestamp.
   */
  'filter[ingested_at][lte]'?: string;

  /**
   * Only include records whose original creation time is on or after this ISO 8601
   * timestamp.
   */
  'filter[record_created_at][gte]'?: string;

  /**
   * Only include records whose original creation time is on or before this ISO 8601
   * timestamp.
   */
  'filter[record_created_at][lte]'?: string;

  /**
   * Filter to chunks belonging to a specific parent record (exact match).
   */
  'filter[record_id]'?: string;

  /**
   * Filter by the region stored on the record. Comma-separated to match multiple
   * regions (USA, DEU, AUS, UAE). Distinct from the `region` parameter, which
   * selects which cluster(s) are queried.
   */
  'filter[region][in]'?: string;

  /**
   * Filter by retention policy (exact match). Filter-only: not returned in the
   * response body.
   */
  'filter[retention]'?: string;

  /**
   * Filter to records owned by a specific user (exact match).
   */
  'filter[user_id]'?: string;

  /**
   * Minimum cosine similarity score threshold (0.0 to 1.0). Results below this
   * threshold are excluded.
   */
  min_score?: number;

  /**
   * Page number to return (1-based). Defaults to 1.
   */
  'page[number]'?: number;

  /**
   * Number of results per page. Defaults to 20, maximum 100.
   */
  'page[size]'?: number;

  /**
   * Restrict search to a specific region. When omitted, all regions are queried in
   * parallel (fan-out) and results are merged by similarity score.
   */
  region?: 'USA' | 'DEU' | 'AUS' | 'UAE';
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
    type ModelMetadata as ModelMetadata,
    type ModelsResponse as ModelsResponse,
    type AICreateResponseDeprecatedResponse as AICreateResponseDeprecatedResponse,
    type AIRetrieveConversationHistoriesResponse as AIRetrieveConversationHistoriesResponse,
    type AISummarizeResponse as AISummarizeResponse,
    type AISummarizeParams as AISummarizeParams,
    type AICreateResponseDeprecatedParams as AICreateResponseDeprecatedParams,
    type AIRetrieveConversationHistoriesParams as AIRetrieveConversationHistoriesParams,
  };

  export {
    Assistants as Assistants,
    type ArithmeticExpression as ArithmeticExpression,
    type Assistant as Assistant,
    type AssistantIntegration as AssistantIntegration,
    type AssistantMcpServer as AssistantMcpServer,
    type AssistantTool as AssistantTool,
    type AssistantsList as AssistantsList,
    type AudioVisualizerConfig as AudioVisualizerConfig,
    type AuthenticationMethod as AuthenticationMethod,
    type BooleanOpExpression as BooleanOpExpression,
    type ComparisonExpression as ComparisonExpression,
    type ConversationFlowReq as ConversationFlowReq,
    type EnabledFeatures as EnabledFeatures,
    type Expression as Expression,
    type ExternalLlm as ExternalLlm,
    type ExternalLlmReq as ExternalLlmReq,
    type FallbackConfig as FallbackConfig,
    type FallbackConfigReq as FallbackConfigReq,
    type FlowEdge as FlowEdge,
    type HangupTool as HangupTool,
    type HangupToolParams as HangupToolParams,
    type ImportMetadata as ImportMetadata,
    type InferenceEmbedding as InferenceEmbedding,
    type InferenceEmbeddingInterruptionSettings as InferenceEmbeddingInterruptionSettings,
    type InferenceEmbeddingWebhookToolParams as InferenceEmbeddingWebhookToolParams,
    type InsightSettings as InsightSettings,
    type MessagingSettings as MessagingSettings,
    type NodePosition as NodePosition,
    type Observability as Observability,
    type ObservabilityReq as ObservabilityReq,
    type ObservabilityStatus as ObservabilityStatus,
    type PostConversationSettings as PostConversationSettings,
    type PostConversationSettingsReq as PostConversationSettingsReq,
    type PrivacySettings as PrivacySettings,
    type PromptSyncStatus as PromptSyncStatus,
    type RetrievalTool as RetrievalTool,
    type StartSpeakingPlan as StartSpeakingPlan,
    type TelephonySettings as TelephonySettings,
    type TranscriptionEndpointingPlan as TranscriptionEndpointingPlan,
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
    type AssistantImportsParams as AssistantImportsParams,
    type AssistantRetrieveParams as AssistantRetrieveParams,
    type AssistantUpdateParams as AssistantUpdateParams,
    type AssistantChatParams as AssistantChatParams,
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
    type ChatCompletionRequest as ChatCompletionRequest,
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
    type ClusterListParams as ClusterListParams,
    type ClusterComputeParams as ClusterComputeParams,
    type ClusterRetrieveParams as ClusterRetrieveParams,
    type ClusterFetchGraphParams as ClusterFetchGraphParams,
  };

  export {
    Conversations as Conversations,
    type Conversation as Conversation,
    type ConversationRetrieveResponse as ConversationRetrieveResponse,
    type ConversationUpdateResponse as ConversationUpdateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationRetrieveConversationsInsightsResponse as ConversationRetrieveConversationsInsightsResponse,
    type ConversationListParams as ConversationListParams,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationAddMessageParams as ConversationAddMessageParams,
  };

  export {
    Embeddings as Embeddings,
    type BackgroundTaskStatus as BackgroundTaskStatus,
    type EmbeddingResponse as EmbeddingResponse,
    type EmbeddingRetrieveResponse as EmbeddingRetrieveResponse,
    type EmbeddingListResponse as EmbeddingListResponse,
    type EmbeddingSimilaritySearchResponse as EmbeddingSimilaritySearchResponse,
    type EmbeddingListParams as EmbeddingListParams,
    type EmbeddingCreateParams as EmbeddingCreateParams,
    type EmbeddingSimilaritySearchParams as EmbeddingSimilaritySearchParams,
    type EmbeddingURLParams as EmbeddingURLParams,
  };

  export { FineTuning as FineTuning };

  export {
    Integrations as Integrations,
    type Integration as Integration,
    type IntegrationListResponse as IntegrationListResponse,
  };

  export {
    McpServers as McpServers,
    type McpServer as McpServer,
    type McpServersDefaultFlatPaginationTopLevelArray as McpServersDefaultFlatPaginationTopLevelArray,
    type McpServerListParams as McpServerListParams,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerUpdateParams as McpServerUpdateParams,
  };

  export {
    Missions as Missions,
    type EventsListResponse as EventsListResponse,
    type ExecutionMode as ExecutionMode,
    type MissionData as MissionData,
    type MissionResponse as MissionResponse,
    type MissionCloneMissionResponse as MissionCloneMissionResponse,
    type MissionDataDefaultFlatPagination as MissionDataDefaultFlatPagination,
    type MissionListParams as MissionListParams,
    type MissionCreateParams as MissionCreateParams,
    type MissionListEventsParams as MissionListEventsParams,
    type MissionUpdateMissionParams as MissionUpdateMissionParams,
  };

  export {
    OpenAI as OpenAI,
    type OpenAICreateResponseResponse as OpenAICreateResponseResponse,
    type OpenAICreateResponseParams as OpenAICreateResponseParams,
  };

  export {
    Tools as Tools,
    type SharedToolResponse as SharedToolResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type SharedToolResponsesDefaultFlatPagination as SharedToolResponsesDefaultFlatPagination,
    type ToolListParams as ToolListParams,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
  };
}
