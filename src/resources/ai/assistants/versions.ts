// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantsAPI from './assistants';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class Versions extends APIResource {
  /**
   * Retrieves a specific version of an assistant by assistant_id and version_id
   *
   * @example
   * ```ts
   * const inferenceEmbedding =
   *   await client.ai.assistants.versions.retrieve(
   *     'version_id',
   *     { assistant_id: 'assistant_id' },
   *   );
   * ```
   */
  retrieve(
    versionID: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AssistantsAPI.InferenceEmbedding> {
    const { assistant_id, ...query } = params;
    return this._client.get(path`/ai/assistants/${assistant_id}/versions/${versionID}`, {
      query,
      ...options,
    });
  }

  /**
   * Updates the configuration of a specific assistant version. Can not update main
   * version
   *
   * @example
   * ```ts
   * const inferenceEmbedding =
   *   await client.ai.assistants.versions.update('version_id', {
   *     assistant_id: 'assistant_id',
   *   });
   * ```
   */
  update(
    versionID: string,
    params: VersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AssistantsAPI.InferenceEmbedding> {
    const { assistant_id, ...body } = params;
    return this._client.post(path`/ai/assistants/${assistant_id}/versions/${versionID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieves all versions of a specific assistant with complete configuration and
   * metadata
   *
   * @example
   * ```ts
   * const assistantsList =
   *   await client.ai.assistants.versions.list('assistant_id');
   * ```
   */
  list(assistantID: string, options?: RequestOptions): APIPromise<AssistantsAPI.AssistantsList> {
    return this._client.get(path`/ai/assistants/${assistantID}/versions`, options);
  }

  /**
   * Permanently removes a specific version of an assistant. Can not delete main
   * version
   *
   * @example
   * ```ts
   * await client.ai.assistants.versions.delete('version_id', {
   *   assistant_id: 'assistant_id',
   * });
   * ```
   */
  delete(versionID: string, params: VersionDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { assistant_id } = params;
    return this._client.delete(path`/ai/assistants/${assistant_id}/versions/${versionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Promotes a specific version to be the main/current version of the assistant.
   * This will delete any existing canary deploy configuration and send all live
   * production traffic to this version.
   *
   * @example
   * ```ts
   * const inferenceEmbedding =
   *   await client.ai.assistants.versions.promote(
   *     'version_id',
   *     { assistant_id: 'assistant_id' },
   *   );
   * ```
   */
  promote(
    versionID: string,
    params: VersionPromoteParams,
    options?: RequestOptions,
  ): APIPromise<AssistantsAPI.InferenceEmbedding> {
    const { assistant_id } = params;
    return this._client.post(path`/ai/assistants/${assistant_id}/versions/${versionID}/promote`, options);
  }
}

export interface UpdateAssistant {
  description?: string;

  /**
   * Map of dynamic variables and their default values
   */
  dynamic_variables?: { [key: string]: unknown };

  /**
   * Timeout in milliseconds for the dynamic variables webhook. Must be between 1 and
   * 10000 ms. If the webhook does not respond within this timeout, the call proceeds
   * with default values. See the
   * [dynamic variables guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   */
  dynamic_variables_webhook_timeout_ms?: number;

  /**
   * If `dynamic_variables_webhook_url` is set, Telnyx sends a POST request to this
   * URL at the start of the conversation to resolve dynamic variables. **Gotcha:**
   * the webhook response must wrap variables under a top-level `dynamic_variables`
   * object, e.g. `{"dynamic_variables": {"customer_name": "Jane"}}`. Returning a
   * flat object will be ignored and variables will fall back to their defaults. See
   * the
   * [dynamic variables guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * for the full request/response format and timeout behavior.
   */
  dynamic_variables_webhook_url?: string;

  enabled_features?: Array<AssistantsAPI.EnabledFeatures>;

  external_llm?: AssistantsAPI.ExternalLlmReq;

  fallback_config?: AssistantsAPI.FallbackConfigReq;

  /**
   * Text that the assistant will use to start the conversation. This may be
   * templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   * Use an empty string to have the assistant wait for the user to speak first. Use
   * the special value `<assistant-speaks-first-with-model-generated-message>` to
   * have the assistant generate the greeting based on the system instructions.
   */
  greeting?: string;

  insight_settings?: AssistantsAPI.InsightSettings;

  /**
   * System instructions for the assistant. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  instructions?: string;

  /**
   * Connected integrations attached to the assistant. The catalog of available
   * integrations is at `/ai/integrations`; the user's connected integrations are at
   * `/ai/integrations/connections`. Each item references a catalog integration by
   * `integration_id`.
   */
  integrations?: Array<AssistantsAPI.AssistantIntegration>;

  /**
   * Settings for interruptions and how the assistant decides the user has finished
   * speaking. These timings are most relevant when using non turn-taking
   * transcription models. For turn-taking models like `deepgram/flux`, end-of-turn
   * behavior is controlled by the transcription end-of-turn settings under
   * `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  interruption_settings?: AssistantsAPI.InferenceEmbeddingInterruptionSettings;

  /**
   * This is only needed when using third-party inference providers selected by
   * `model`. The `identifier` for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * that refers to your LLM provider's API key. For bring-your-own endpoint
   * authentication, use `external_llm.llm_api_key_ref` instead. Warning: Free plans
   * are unlikely to work with this integration.
   */
  llm_api_key_ref?: string;

  /**
   * MCP servers attached to the assistant. Create MCP servers with
   * `/ai/mcp_servers`, then reference them by `id` here.
   */
  mcp_servers?: Array<AssistantsAPI.AssistantMcpServer>;

  messaging_settings?: AssistantsAPI.MessagingSettings;

  /**
   * ID of the model to use when `external_llm` is not set. You can use the
   * [Get models API](https://developers.telnyx.com/api-reference/openai-chat/get-available-models-openai-compatible)
   * to see available models. If `external_llm` is provided, the assistant uses
   * `external_llm` instead of this field. If neither `model` nor `external_llm` is
   * provided, Telnyx applies the default model.
   */
  model?: string;

  name?: string;

  observability_settings?: AssistantsAPI.ObservabilityReq;

  /**
   * Configuration for post-conversation processing. When enabled, the assistant
   * receives one additional LLM turn after the conversation ends, allowing it to
   * execute tool calls such as logging to a CRM or sending a summary. The assistant
   * can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  post_conversation_settings?: AssistantsAPI.PostConversationSettingsReq;

  privacy_settings?: AssistantsAPI.PrivacySettings;

  /**
   * Tags associated with the assistant. Tags can also be managed with the assistant
   * tag endpoints.
   */
  tags?: Array<string>;

  telephony_settings?: AssistantsAPI.TelephonySettings;

  /**
   * IDs of shared tools to attach to the assistant. New integrations should prefer
   * `tool_ids` over inline `tools`.
   */
  tool_ids?: Array<string>;

  /**
   * Deprecated for new integrations. Inline tool definitions available to the
   * assistant. Prefer `tool_ids` to attach shared tools created with the AI Tools
   * endpoints.
   */
  tools?: Array<AssistantsAPI.AssistantTool>;

  transcription?: AssistantsAPI.TranscriptionSettings;

  /**
   * Human-readable name for the assistant version.
   */
  version_name?: string;

  voice_settings?: AssistantsAPI.VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: AssistantsAPI.WidgetSettings;
}

export interface VersionRetrieveParams {
  /**
   * Path param
   */
  assistant_id: string;

  /**
   * Query param
   */
  include_mcp_servers?: boolean;
}

export interface VersionUpdateParams {
  /**
   * Path param
   */
  assistant_id: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param: Map of dynamic variables and their default values
   */
  dynamic_variables?: { [key: string]: unknown };

  /**
   * Body param: Timeout in milliseconds for the dynamic variables webhook. Must be
   * between 1 and 10000 ms. If the webhook does not respond within this timeout, the
   * call proceeds with default values. See the
   * [dynamic variables guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   */
  dynamic_variables_webhook_timeout_ms?: number;

  /**
   * Body param: If `dynamic_variables_webhook_url` is set, Telnyx sends a POST
   * request to this URL at the start of the conversation to resolve dynamic
   * variables. **Gotcha:** the webhook response must wrap variables under a
   * top-level `dynamic_variables` object, e.g.
   * `{"dynamic_variables": {"customer_name": "Jane"}}`. Returning a flat object will
   * be ignored and variables will fall back to their defaults. See the
   * [dynamic variables guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * for the full request/response format and timeout behavior.
   */
  dynamic_variables_webhook_url?: string;

  /**
   * Body param
   */
  enabled_features?: Array<AssistantsAPI.EnabledFeatures>;

  /**
   * Body param
   */
  external_llm?: AssistantsAPI.ExternalLlmReq;

  /**
   * Body param
   */
  fallback_config?: AssistantsAPI.FallbackConfigReq;

  /**
   * Body param: Text that the assistant will use to start the conversation. This may
   * be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   * Use an empty string to have the assistant wait for the user to speak first. Use
   * the special value `<assistant-speaks-first-with-model-generated-message>` to
   * have the assistant generate the greeting based on the system instructions.
   */
  greeting?: string;

  /**
   * Body param
   */
  insight_settings?: AssistantsAPI.InsightSettings;

  /**
   * Body param: System instructions for the assistant. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  instructions?: string;

  /**
   * Body param: Connected integrations attached to the assistant. The catalog of
   * available integrations is at `/ai/integrations`; the user's connected
   * integrations are at `/ai/integrations/connections`. Each item references a
   * catalog integration by `integration_id`.
   */
  integrations?: Array<AssistantsAPI.AssistantIntegration>;

  /**
   * Body param: Settings for interruptions and how the assistant decides the user
   * has finished speaking. These timings are most relevant when using non
   * turn-taking transcription models. For turn-taking models like `deepgram/flux`,
   * end-of-turn behavior is controlled by the transcription end-of-turn settings
   * under `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  interruption_settings?: AssistantsAPI.InferenceEmbeddingInterruptionSettings;

  /**
   * Body param: This is only needed when using third-party inference providers
   * selected by `model`. The `identifier` for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * that refers to your LLM provider's API key. For bring-your-own endpoint
   * authentication, use `external_llm.llm_api_key_ref` instead. Warning: Free plans
   * are unlikely to work with this integration.
   */
  llm_api_key_ref?: string;

  /**
   * Body param: MCP servers attached to the assistant. Create MCP servers with
   * `/ai/mcp_servers`, then reference them by `id` here.
   */
  mcp_servers?: Array<AssistantsAPI.AssistantMcpServer>;

  /**
   * Body param
   */
  messaging_settings?: AssistantsAPI.MessagingSettings;

  /**
   * Body param: ID of the model to use when `external_llm` is not set. You can use
   * the
   * [Get models API](https://developers.telnyx.com/api-reference/openai-chat/get-available-models-openai-compatible)
   * to see available models. If `external_llm` is provided, the assistant uses
   * `external_llm` instead of this field. If neither `model` nor `external_llm` is
   * provided, Telnyx applies the default model.
   */
  model?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  observability_settings?: AssistantsAPI.ObservabilityReq;

  /**
   * Body param: Configuration for post-conversation processing. When enabled, the
   * assistant receives one additional LLM turn after the conversation ends, allowing
   * it to execute tool calls such as logging to a CRM or sending a summary. The
   * assistant can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  post_conversation_settings?: AssistantsAPI.PostConversationSettingsReq;

  /**
   * Body param
   */
  privacy_settings?: AssistantsAPI.PrivacySettings;

  /**
   * Body param: Tags associated with the assistant. Tags can also be managed with
   * the assistant tag endpoints.
   */
  tags?: Array<string>;

  /**
   * Body param
   */
  telephony_settings?: AssistantsAPI.TelephonySettings;

  /**
   * Body param: IDs of shared tools to attach to the assistant. New integrations
   * should prefer `tool_ids` over inline `tools`.
   */
  tool_ids?: Array<string>;

  /**
   * Body param: Deprecated for new integrations. Inline tool definitions available
   * to the assistant. Prefer `tool_ids` to attach shared tools created with the AI
   * Tools endpoints.
   */
  tools?: Array<AssistantsAPI.AssistantTool>;

  /**
   * Body param
   */
  transcription?: AssistantsAPI.TranscriptionSettings;

  /**
   * Body param: Human-readable name for the assistant version.
   */
  version_name?: string;

  /**
   * Body param
   */
  voice_settings?: AssistantsAPI.VoiceSettings;

  /**
   * Body param: Configuration settings for the assistant's web widget.
   */
  widget_settings?: AssistantsAPI.WidgetSettings;
}

export interface VersionDeleteParams {
  assistant_id: string;
}

export interface VersionPromoteParams {
  assistant_id: string;
}

export declare namespace Versions {
  export {
    type UpdateAssistant as UpdateAssistant,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionPromoteParams as VersionPromoteParams,
  };
}
