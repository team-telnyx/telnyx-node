// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantsAPI from './assistants';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
   * If the dynamic_variables_webhook_url is set for the assistant, we will send a
   * request at the start of the conversation. See our
   * [guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * for more information.
   */
  dynamic_variables_webhook_url?: string;

  enabled_features?: Array<AssistantsAPI.EnabledFeatures>;

  /**
   * Text that the assistant will use to start the conversation. This may be
   * templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  greeting?: string;

  insight_settings?: AssistantsAPI.InsightSettings;

  /**
   * System instructions for the assistant. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  instructions?: string;

  /**
   * This is only needed when using third-party inference providers. The `identifier`
   * for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   * that refers to your LLM provider's API key. Warning: Free plans are unlikely to
   * work with this integration.
   */
  llm_api_key_ref?: string;

  messaging_settings?: AssistantsAPI.MessagingSettings;

  /**
   * ID of the model to use. You can use the
   * [Get models API](https://developers.telnyx.com/api/inference/inference-embedding/get-models-public-models-get)
   * to see all of your available models,
   */
  model?: string;

  name?: string;

  privacy_settings?: AssistantsAPI.PrivacySettings;

  telephony_settings?: AssistantsAPI.TelephonySettings;

  /**
   * The tools that the assistant can use. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  tools?: Array<AssistantsAPI.AssistantTool>;

  transcription?: AssistantsAPI.TranscriptionSettings;

  voice_settings?: AssistantsAPI.VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: UpdateAssistant.WidgetSettings;
}

export namespace UpdateAssistant {
  /**
   * Configuration settings for the assistant's web widget.
   */
  export interface WidgetSettings {
    /**
     * Text displayed while the agent is processing.
     */
    agent_thinking_text?: string;

    audio_visualizer_config?: WidgetSettings.AudioVisualizerConfig;

    /**
     * The default state of the widget.
     */
    default_state?: 'expanded' | 'collapsed';

    /**
     * URL for users to give feedback.
     */
    give_feedback_url?: string | null;

    /**
     * URL to a custom logo icon for the widget.
     */
    logo_icon_url?: string | null;

    /**
     * The positioning style for the widget.
     */
    position?: 'fixed' | 'static';

    /**
     * URL for users to report issues.
     */
    report_issue_url?: string | null;

    /**
     * Text prompting users to speak to interrupt.
     */
    speak_to_interrupt_text?: string;

    /**
     * Custom text displayed on the start call button.
     */
    start_call_text?: string;

    /**
     * The visual theme for the widget.
     */
    theme?: 'light' | 'dark';

    /**
     * URL to view conversation history.
     */
    view_history_url?: string | null;
  }

  export namespace WidgetSettings {
    export interface AudioVisualizerConfig {
      /**
       * The color theme for the audio visualizer.
       */
      color?: 'verdant' | 'twilight' | 'bloom' | 'mystic' | 'flare' | 'glacier';

      /**
       * The preset style for the audio visualizer.
       */
      preset?: string;
    }
  }
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
   * Body param: If the dynamic_variables_webhook_url is set for the assistant, we
   * will send a request at the start of the conversation. See our
   * [guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * for more information.
   */
  dynamic_variables_webhook_url?: string;

  /**
   * Body param
   */
  enabled_features?: Array<AssistantsAPI.EnabledFeatures>;

  /**
   * Body param: Text that the assistant will use to start the conversation. This may
   * be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
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
   * Body param: This is only needed when using third-party inference providers. The
   * `identifier` for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   * that refers to your LLM provider's API key. Warning: Free plans are unlikely to
   * work with this integration.
   */
  llm_api_key_ref?: string;

  /**
   * Body param
   */
  messaging_settings?: AssistantsAPI.MessagingSettings;

  /**
   * Body param: ID of the model to use. You can use the
   * [Get models API](https://developers.telnyx.com/api/inference/inference-embedding/get-models-public-models-get)
   * to see all of your available models,
   */
  model?: string;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  privacy_settings?: AssistantsAPI.PrivacySettings;

  /**
   * Body param
   */
  telephony_settings?: AssistantsAPI.TelephonySettings;

  /**
   * Body param: The tools that the assistant can use. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  tools?: Array<AssistantsAPI.AssistantTool>;

  /**
   * Body param
   */
  transcription?: AssistantsAPI.TranscriptionSettings;

  /**
   * Body param
   */
  voice_settings?: AssistantsAPI.VoiceSettings;

  /**
   * Body param: Configuration settings for the assistant's web widget.
   */
  widget_settings?: VersionUpdateParams.WidgetSettings;
}

export namespace VersionUpdateParams {
  /**
   * Configuration settings for the assistant's web widget.
   */
  export interface WidgetSettings {
    /**
     * Text displayed while the agent is processing.
     */
    agent_thinking_text?: string;

    audio_visualizer_config?: WidgetSettings.AudioVisualizerConfig;

    /**
     * The default state of the widget.
     */
    default_state?: 'expanded' | 'collapsed';

    /**
     * URL for users to give feedback.
     */
    give_feedback_url?: string | null;

    /**
     * URL to a custom logo icon for the widget.
     */
    logo_icon_url?: string | null;

    /**
     * The positioning style for the widget.
     */
    position?: 'fixed' | 'static';

    /**
     * URL for users to report issues.
     */
    report_issue_url?: string | null;

    /**
     * Text prompting users to speak to interrupt.
     */
    speak_to_interrupt_text?: string;

    /**
     * Custom text displayed on the start call button.
     */
    start_call_text?: string;

    /**
     * The visual theme for the widget.
     */
    theme?: 'light' | 'dark';

    /**
     * URL to view conversation history.
     */
    view_history_url?: string | null;
  }

  export namespace WidgetSettings {
    export interface AudioVisualizerConfig {
      /**
       * The color theme for the audio visualizer.
       */
      color?: 'verdant' | 'twilight' | 'bloom' | 'mystic' | 'flare' | 'glacier';

      /**
       * The preset style for the audio visualizer.
       */
      preset?: string;
    }
  }
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
