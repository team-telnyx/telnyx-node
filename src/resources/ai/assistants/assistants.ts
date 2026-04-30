// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as ChatAPI from '../chat';
import * as CanaryDeploysAPI from './canary-deploys';
import {
  CanaryDeploy,
  CanaryDeployCreateParams,
  CanaryDeployResponse,
  CanaryDeployUpdateParams,
  CanaryDeploys,
  VersionConfig,
} from './canary-deploys';
import * as ScheduledEventsAPI from './scheduled-events';
import {
  ConversationChannelType,
  EventStatus,
  ScheduledEventCreateParams,
  ScheduledEventDeleteParams,
  ScheduledEventListParams,
  ScheduledEventListResponse,
  ScheduledEventListResponsesDefaultFlatPagination,
  ScheduledEventResponse,
  ScheduledEventRetrieveParams,
  ScheduledEvents,
  ScheduledPhoneCallEventResponse,
  ScheduledSMSEventResponse,
} from './scheduled-events';
import * as TagsAPI from './tags';
import {
  TagAddParams,
  TagAddResponse,
  TagListResponse,
  TagRemoveParams,
  TagRemoveResponse,
  Tags,
} from './tags';
import * as ToolsAPI from './tools';
import {
  ToolAddParams,
  ToolAddResponse,
  ToolRemoveParams,
  ToolRemoveResponse,
  ToolTestParams,
  ToolTestResponse,
  Tools,
} from './tools';
import * as VersionsAPI from './versions';
import {
  UpdateAssistant,
  VersionDeleteParams,
  VersionPromoteParams,
  VersionRetrieveParams,
  VersionUpdateParams,
  Versions,
} from './versions';
import * as TestsAPI from './tests/tests';
import {
  AssistantTest,
  AssistantTestsDefaultFlatPagination,
  TelnyxConversationChannel,
  TestCreateParams,
  TestListParams,
  TestUpdateParams,
  Tests,
} from './tests/tests';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class Assistants extends APIResource {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  canaryDeploys: CanaryDeploysAPI.CanaryDeploys = new CanaryDeploysAPI.CanaryDeploys(this._client);
  scheduledEvents: ScheduledEventsAPI.ScheduledEvents = new ScheduledEventsAPI.ScheduledEvents(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  /**
   * Create a new AI Assistant.
   *
   * @example
   * ```ts
   * const inferenceEmbedding =
   *   await client.ai.assistants.create({
   *     instructions: 'instructions',
   *     name: 'name',
   *   });
   * ```
   */
  create(body: AssistantCreateParams, options?: RequestOptions): APIPromise<InferenceEmbedding> {
    return this._client.post('/ai/assistants', { body, ...options });
  }

  /**
   * Retrieve an AI Assistant configuration by `assistant_id`.
   *
   * @example
   * ```ts
   * const inferenceEmbedding =
   *   await client.ai.assistants.retrieve('assistant_id');
   * ```
   */
  retrieve(
    assistantID: string,
    query: AssistantRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InferenceEmbedding> {
    return this._client.get(path`/ai/assistants/${assistantID}`, { query, ...options });
  }

  /**
   * Update an AI Assistant's attributes.
   *
   * @example
   * ```ts
   * const inferenceEmbedding =
   *   await client.ai.assistants.update('assistant_id');
   * ```
   */
  update(
    assistantID: string,
    body: AssistantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InferenceEmbedding> {
    return this._client.post(path`/ai/assistants/${assistantID}`, { body, ...options });
  }

  /**
   * Retrieve a list of all AI Assistants configured by the user.
   *
   * @example
   * ```ts
   * const assistantsList = await client.ai.assistants.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<AssistantsList> {
    return this._client.get('/ai/assistants', options);
  }

  /**
   * Delete an AI Assistant by `assistant_id`.
   *
   * @example
   * ```ts
   * const assistant = await client.ai.assistants.delete(
   *   'assistant_id',
   * );
   * ```
   */
  delete(assistantID: string, options?: RequestOptions): APIPromise<AssistantDeleteResponse> {
    return this._client.delete(path`/ai/assistants/${assistantID}`, options);
  }

  /**
   * This endpoint allows a client to send a chat message to a specific AI Assistant.
   * The assistant processes the message and returns a relevant reply based on the
   * current conversation context. Refer to the Conversation API to
   * [create a conversation](https://developers.telnyx.com/api-reference/conversations/create-a-conversation),
   * [filter existing conversations](https://developers.telnyx.com/api-reference/conversations/list-conversations),
   * [fetch messages for a conversation](https://developers.telnyx.com/api-reference/conversations/get-conversation-messages),
   * and
   * [manually add messages to a conversation](https://developers.telnyx.com/api-reference/conversations/create-message).
   *
   * @example
   * ```ts
   * const response = await client.ai.assistants.chat(
   *   'assistant_id',
   *   {
   *     content: 'Tell me a joke about cats',
   *     conversation_id: '42b20469-1215-4a9a-8964-c36f66b406f4',
   *   },
   * );
   * ```
   */
  chat(
    assistantID: string,
    body: AssistantChatParams,
    options?: RequestOptions,
  ): APIPromise<AssistantChatResponse> {
    return this._client.post(path`/ai/assistants/${assistantID}/chat`, { body, ...options });
  }

  /**
   * Clone an existing assistant, excluding telephony and messaging settings.
   *
   * @example
   * ```ts
   * const inferenceEmbedding = await client.ai.assistants.clone(
   *   'assistant_id',
   * );
   * ```
   */
  clone(assistantID: string, options?: RequestOptions): APIPromise<InferenceEmbedding> {
    return this._client.post(path`/ai/assistants/${assistantID}/clone`, options);
  }

  /**
   * Get an assistant texml by `assistant_id`.
   *
   * @example
   * ```ts
   * const response = await client.ai.assistants.getTexml(
   *   'assistant_id',
   * );
   * ```
   */
  getTexml(assistantID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/ai/assistants/${assistantID}/texml`, options);
  }

  /**
   * Import assistants from external providers. Any assistant that has already been
   * imported will be overwritten with its latest version from the importing
   * provider.
   *
   * @example
   * ```ts
   * const assistantsList = await client.ai.assistants.imports({
   *   api_key_ref: 'api_key_ref',
   *   provider: 'elevenlabs',
   * });
   * ```
   */
  imports(body: AssistantImportsParams, options?: RequestOptions): APIPromise<AssistantsList> {
    return this._client.post('/ai/assistants/import', { body, ...options });
  }

  /**
   * Send an SMS message for an assistant. This endpoint:
   *
   * 1. Validates the assistant exists and has messaging profile configured
   * 2. If should_create_conversation is true, creates a new conversation with
   *    metadata
   * 3. Sends the SMS message (If `text` is set, this will be sent. Otherwise, if
   *    this is the first message in the conversation and the assistant has a
   *    `greeting` configured, this will be sent. Otherwise the assistant will
   *    generate the text to send.)
   * 4. Updates conversation metadata if provided
   * 5. Returns the conversation ID
   *
   * @example
   * ```ts
   * const response = await client.ai.assistants.sendSMS(
   *   'assistant_id',
   *   { from: 'from', to: 'to' },
   * );
   * ```
   */
  sendSMS(
    assistantID: string,
    body: AssistantSendSMSParams,
    options?: RequestOptions,
  ): APIPromise<AssistantSendSMSResponse> {
    return this._client.post(path`/ai/assistants/${assistantID}/chat/sms`, { body, ...options });
  }
}

/**
 * Assistant configuration including choice of LLM, custom instructions, and tools.
 */
export interface Assistant {
  /**
   * The system instructions that the voice assistant uses during the gather command
   */
  instructions?: string;

  /**
   * The model to be used by the voice assistant.
   */
  model?: string;

  /**
   * This is necessary only if the model selected is from OpenAI. You would pass the
   * `identifier` for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   * that refers to your OpenAI API Key. Warning: Free plans are unlikely to work
   * with this integration.
   */
  openai_api_key_ref?: string;

  /**
   * The tools that the voice assistant can use.
   */
  tools?: Array<
    | Shared.BookAppointmentTool
    | Shared.CheckAvailabilityTool
    | WebhookTool
    | HangupTool
    | TransferTool
    | Shared.CallControlRetrievalTool
  >;
}

/**
 * The handoff tool allows the assistant to hand off control of the conversation to
 * another AI assistant. By default, this will happen transparently to the end
 * user.
 */
export type AssistantTool =
  | InferenceEmbeddingWebhookToolParams
  | RetrievalTool
  | AssistantTool.Handoff
  | HangupTool
  | AssistantTool.Transfer
  | AssistantTool.Invite
  | AssistantTool.Refer
  | AssistantTool.SendDtmf
  | AssistantTool.SendMessage
  | AssistantTool.SkipTurn;

export namespace AssistantTool {
  /**
   * The handoff tool allows the assistant to hand off control of the conversation to
   * another AI assistant. By default, this will happen transparently to the end
   * user.
   */
  export interface Handoff {
    handoff: Handoff.Handoff;

    type: 'handoff';
  }

  export namespace Handoff {
    export interface Handoff {
      /**
       * List of possible assistants that can receive a handoff.
       */
      ai_assistants: Array<Handoff.AIAssistant>;

      /**
       * With the unified voice mode all assistants share the same voice, making the
       * handoff transparent to the user. With the distinct voice mode all assistants
       * retain their voice configuration, providing the experience of a conference call
       * with a team of assistants.
       */
      voice_mode?: 'unified' | 'distinct';
    }

    export namespace Handoff {
      export interface AIAssistant {
        /**
         * The ID of the assistant to hand off to.
         */
        id: string;

        /**
         * Helpful name for giving context on when to handoff to the assistant.
         */
        name: string;
      }
    }
  }

  export interface Transfer {
    transfer: Transfer.Transfer;

    type: 'transfer';
  }

  export namespace Transfer {
    export interface Transfer {
      /**
       * Number or SIP URI placing the call.
       */
      from: string;

      /**
       * The different possible targets of the transfer. The assistant will be able to
       * choose one of the targets to transfer the call to. This can also be a dynamic
       * variable string like `{{ targets }}` where `targets` is returned by the dynamic
       * variables webhook and resolves to an array of target objects at runtime.
       */
      targets: Array<Transfer.UnionMember0> | string;

      /**
       * Custom headers to be added to the SIP INVITE for the transfer command.
       */
      custom_headers?: Array<Transfer.CustomHeader>;

      /**
       * Configuration for voicemail detection (AMD - Answering Machine Detection) on the
       * transferred call. Allows the assistant to detect when a voicemail system answers
       * the transferred call and take appropriate action.
       */
      voicemail_detection?: Transfer.VoicemailDetection;

      /**
       * Optional delay in milliseconds before playing the warm message audio when the
       * transferred call is answered. When set, the audio_url is not included in the
       * dial command; instead, playback starts after the specified delay. When not set,
       * existing behavior (audio_url in dial) is preserved.
       */
      warm_message_delay_ms?: number | null;

      /**
       * Natural language instructions for your agent for how to provide context for the
       * transfer recipient.
       */
      warm_transfer_instructions?: string;
    }

    export namespace Transfer {
      export interface UnionMember0 {
        /**
         * The destination number or SIP URI of the call.
         */
        to: string;

        /**
         * The name of the target.
         */
        name?: string;
      }

      export interface CustomHeader {
        name?: string;

        /**
         * The value of the header. Note that we support mustache templating for the value.
         * For example you can use
         * `{{#integration_secret}}test-secret{{/integration_secret}}` to pass the value of
         * the integration secret.
         */
        value?: string;
      }

      /**
       * Configuration for voicemail detection (AMD - Answering Machine Detection) on the
       * transferred call. Allows the assistant to detect when a voicemail system answers
       * the transferred call and take appropriate action.
       */
      export interface VoicemailDetection {
        /**
         * Advanced AMD detection configuration parameters. All values are optional -
         * Telnyx will use defaults if not specified.
         */
        detection_config?: VoicemailDetection.DetectionConfig;

        /**
         * The AMD detection mode to use. 'premium' enables premium answering machine
         * detection. 'disabled' turns off AMD detection.
         */
        detection_mode?: 'disabled' | 'premium';

        /**
         * Action to take when voicemail is detected on the transferred call.
         */
        on_voicemail_detected?: VoicemailDetection.OnVoicemailDetected;
      }

      export namespace VoicemailDetection {
        /**
         * Advanced AMD detection configuration parameters. All values are optional -
         * Telnyx will use defaults if not specified.
         */
        export interface DetectionConfig {
          /**
           * Duration of silence after greeting detection before finalizing the result.
           */
          after_greeting_silence_millis?: number;

          /**
           * Maximum silence duration between words during greeting.
           */
          between_words_silence_millis?: number;

          /**
           * Expected duration of greeting speech.
           */
          greeting_duration_millis?: number;

          /**
           * Duration of silence after the greeting to wait before considering the greeting
           * complete.
           */
          greeting_silence_duration_millis?: number;

          /**
           * Maximum time to spend analyzing the greeting.
           */
          greeting_total_analysis_time_millis?: number;

          /**
           * Maximum silence duration at the start of the call before speech.
           */
          initial_silence_millis?: number;

          /**
           * Maximum number of words expected in a human greeting.
           */
          maximum_number_of_words?: number;

          /**
           * Maximum duration of a single word.
           */
          maximum_word_length_millis?: number;

          /**
           * Minimum duration for audio to be considered a word.
           */
          min_word_length_millis?: number;

          /**
           * Audio level threshold for silence detection.
           */
          silence_threshold?: number;

          /**
           * Total time allowed for AMD analysis.
           */
          total_analysis_time_millis?: number;
        }

        /**
         * Action to take when voicemail is detected on the transferred call.
         */
        export interface OnVoicemailDetected {
          /**
           * The action to take when voicemail is detected. 'stop_transfer' hangs up
           * immediately. 'leave_message_and_stop_transfer' leaves a message then hangs up.
           */
          action?: 'stop_transfer' | 'leave_message_and_stop_transfer';

          /**
           * Configuration for the voicemail message to leave. Only applicable when action is
           * 'leave_message_and_stop_transfer'.
           */
          voicemail_message?: OnVoicemailDetected.VoicemailMessage;
        }

        export namespace OnVoicemailDetected {
          /**
           * Configuration for the voicemail message to leave. Only applicable when action is
           * 'leave_message_and_stop_transfer'.
           */
          export interface VoicemailMessage {
            /**
             * The specific message to leave as voicemail (converted to speech). Only
             * applicable when type is 'message'.
             */
            message?: string;

            /**
             * The type of voicemail message. Use 'message' to leave a specific TTS message, or
             * 'warm_transfer_instructions' to play the warm transfer audio.
             */
            type?: 'message' | 'warm_transfer_instructions';
          }
        }
      }
    }
  }

  export interface Invite {
    invite: Invite.Invite;

    type: 'invite';
  }

  export namespace Invite {
    export interface Invite {
      /**
       * Number or SIP URI placing the call.
       */
      from: string;

      /**
       * Custom headers to be added to the SIP INVITE for the invite command.
       */
      custom_headers?: Array<Invite.CustomHeader>;

      /**
       * The different possible targets of the invite. The assistant will be able to
       * choose one of the targets to invite to the call. This can also be a dynamic
       * variable string like `{{ targets }}` where `targets` is returned by the dynamic
       * variables webhook and resolves to an array of target objects at runtime. If
       * omitted or null, the invite tool can still be configured and targets may be
       * supplied dynamically at runtime.
       */
      targets?: Array<Invite.UnionMember0> | string | null;

      /**
       * Configuration for voicemail detection (AMD - Answering Machine Detection) on the
       * invited call.
       */
      voicemail_detection?: Invite.VoicemailDetection;
    }

    export namespace Invite {
      export interface CustomHeader {
        name?: string;

        /**
         * The value of the header. Note that we support mustache templating for the value.
         * For example you can use
         * `{{#integration_secret}}test-secret{{/integration_secret}}` to pass the value of
         * the integration secret.
         */
        value?: string;
      }

      export interface UnionMember0 {
        /**
         * The destination number or SIP URI of the call.
         */
        to: string;

        /**
         * The name of the target.
         */
        name?: string;
      }

      /**
       * Configuration for voicemail detection (AMD - Answering Machine Detection) on the
       * invited call.
       */
      export interface VoicemailDetection {
        /**
         * The AMD detection mode to use. 'premium' enables premium answering machine
         * detection. 'disabled' turns off AMD detection.
         */
        detection_mode?: 'disabled' | 'premium';

        /**
         * Action to take when voicemail is detected on the invited call.
         */
        on_voicemail_detected?: VoicemailDetection.OnVoicemailDetected;
      }

      export namespace VoicemailDetection {
        /**
         * Action to take when voicemail is detected on the invited call.
         */
        export interface OnVoicemailDetected {
          /**
           * The action to take when voicemail is detected.
           */
          action?: 'stop_invite';
        }
      }
    }
  }

  export interface Refer {
    refer: Refer.Refer;

    type: 'refer';
  }

  export namespace Refer {
    export interface Refer {
      /**
       * The different possible targets of the SIP refer. The assistant will be able to
       * choose one of the targets to refer the call to.
       */
      targets: Array<Refer.Target>;

      /**
       * Custom headers to be added to the SIP REFER.
       */
      custom_headers?: Array<Refer.CustomHeader>;

      /**
       * SIP headers to be added to the SIP REFER. Currently only User-to-User and
       * Diversion headers are supported.
       */
      sip_headers?: Array<Refer.SipHeader>;
    }

    export namespace Refer {
      export interface Target {
        /**
         * The name of the target.
         */
        name: string;

        /**
         * The SIP URI to which the call will be referred.
         */
        sip_address: string;

        /**
         * SIP Authentication password used for SIP challenges.
         */
        sip_auth_password?: string;

        /**
         * SIP Authentication username used for SIP challenges.
         */
        sip_auth_username?: string;
      }

      export interface CustomHeader {
        name?: string;

        /**
         * The value of the header. Note that we support mustache templating for the value.
         * For example you can use
         * `{{#integration_secret}}test-secret{{/integration_secret}}` to pass the value of
         * the integration secret.
         */
        value?: string;
      }

      export interface SipHeader {
        name?: 'User-to-User' | 'Diversion';

        /**
         * The value of the header. Note that we support mustache templating for the value.
         * For example you can use
         * `{{#integration_secret}}test-secret{{/integration_secret}}` to pass the value of
         * the integration secret.
         */
        value?: string;
      }
    }
  }

  export interface SendDtmf {
    send_dtmf: { [key: string]: unknown };

    type: 'send_dtmf';
  }

  /**
   * The send_message tool allows the assistant to send SMS or MMS messages to the
   * end user. The 'to' and 'from' addresses are automatically determined from the
   * conversation context, and the message text is generated by the assistant unless
   * a message_template is provided for runtime variable substitution.
   */
  export interface SendMessage {
    send_message: SendMessage.SendMessage;

    type: 'send_message';
  }

  export namespace SendMessage {
    export interface SendMessage {
      /**
       * Optional message template with dynamic variable support using mustache syntax
       * (e.g., {{variable_name}}). When set, the assistant will use this template for
       * the SMS body instead of generating one. Dynamic variables like
       * {{telnyx_end_user_target}}, {{telnyx_agent_target}}, and custom webhook-provided
       * variables will be resolved at runtime.
       */
      message_template?: string | null;

      [k: string]: unknown;
    }
  }

  export interface SkipTurn {
    skip_turn: SkipTurn.SkipTurn;

    type: 'skip_turn';
  }

  export namespace SkipTurn {
    export interface SkipTurn {
      /**
       * The description of the function that will be passed to the assistant.
       */
      description?: string;
    }
  }
}

export interface AssistantsList {
  data: Array<InferenceEmbedding>;
}

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

/**
 * If `telephony` is enabled, the assistant will be able to make and receive calls.
 * If `messaging` is enabled, the assistant will be able to send and receive
 * messages.
 */
export type EnabledFeatures = 'telephony' | 'messaging';

export interface HangupTool {
  hangup: HangupToolParams;

  type: 'hangup';
}

export interface HangupToolParams {
  /**
   * The description of the function that will be passed to the assistant.
   */
  description?: string;
}

export interface ImportMetadata {
  /**
   * ID of the assistant in the provider's system.
   */
  import_id?: string;

  /**
   * Provider the assistant was imported from.
   */
  import_provider?: 'elevenlabs' | 'vapi' | 'retell';
}

export interface InferenceEmbedding {
  id: string;

  created_at: string;

  /**
   * System instructions for the assistant. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  instructions: string;

  /**
   * ID of the model to use when `external_llm` is not set. You can use the
   * [Get models API](https://developers.telnyx.com/api-reference/chat/get-available-models)
   * to see available models. If `external_llm` is provided, the assistant uses
   * `external_llm` instead of this field. If neither `model` nor `external_llm` is
   * provided, Telnyx applies the default model.
   */
  model: string;

  name: string;

  description?: string;

  /**
   * Map of dynamic variables and their values
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

  enabled_features?: Array<EnabledFeatures>;

  external_llm?: InferenceEmbedding.ExternalLlm;

  fallback_config?: InferenceEmbedding.FallbackConfig;

  /**
   * Text that the assistant will use to start the conversation. This may be
   * templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   * Use an empty string to have the assistant wait for the user to speak first. Use
   * the special value `<assistant-speaks-first-with-model-generated-message>` to
   * have the assistant generate the greeting based on the system instructions.
   */
  greeting?: string;

  import_metadata?: ImportMetadata;

  insight_settings?: InsightSettings;

  /**
   * Connected integrations attached to the assistant. The catalog of available
   * integrations is at `/ai/integrations`; the user's connected integrations are at
   * `/ai/integrations/connections`. Each item references a catalog integration by
   * `integration_id`.
   */
  integrations?: Array<InferenceEmbedding.Integration>;

  /**
   * Settings for interruptions and how the assistant decides the user has finished
   * speaking. These timings are most relevant when using non turn-taking
   * transcription models. For turn-taking models like `deepgram/flux`, end-of-turn
   * behavior is controlled by the transcription end-of-turn settings under
   * `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  interruption_settings?: InferenceEmbedding.InterruptionSettings;

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
  mcp_servers?: Array<InferenceEmbedding.McpServer>;

  messaging_settings?: MessagingSettings;

  observability_settings?: Observability;

  /**
   * Configuration for post-conversation processing. When enabled, the assistant
   * receives one additional LLM turn after the conversation ends, allowing it to
   * execute tool calls such as logging to a CRM or sending a summary. The assistant
   * can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  post_conversation_settings?: InferenceEmbedding.PostConversationSettings;

  privacy_settings?: PrivacySettings;

  /**
   * IDs of missions related to this assistant.
   */
  related_mission_ids?: Array<string>;

  /**
   * Tags associated with the assistant. Tags can also be managed with the assistant
   * tag endpoints.
   */
  tags?: Array<string>;

  telephony_settings?: TelephonySettings;

  /**
   * Deprecated for new integrations. Inline tool definitions available to the
   * assistant. Prefer `tool_ids` to attach shared tools created with the AI Tools
   * endpoints.
   */
  tools?: Array<AssistantTool>;

  transcription?: TranscriptionSettings;

  /**
   * Timestamp when this assistant version was created.
   */
  version_created_at?: string;

  /**
   * Identifier for the assistant version returned by version-aware assistant
   * endpoints.
   */
  version_id?: string;

  /**
   * Human-readable name for the assistant version.
   */
  version_name?: string;

  voice_settings?: VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: WidgetSettings;
}

export namespace InferenceEmbedding {
  export interface ExternalLlm {
    /**
     * Base URL for the external LLM endpoint.
     */
    base_url: string;

    /**
     * Model identifier to use with the external LLM endpoint.
     */
    model: string;

    /**
     * Authentication method used when connecting to the external LLM endpoint.
     */
    authentication_method?: 'token' | 'certificate';

    /**
     * Integration secret identifier for the client certificate used with certificate
     * authentication.
     */
    certificate_ref?: string;

    /**
     * When `true`, Telnyx forwards the assistant's dynamic variables to the external
     * LLM endpoint as a top-level `extra_metadata` object on the chat completion
     * request body. Defaults to `false`. Example payload sent to the external
     * endpoint:
     * `{"extra_metadata": {"customer_name": "Jane", "account_id": "acct_789", "telnyx_agent_target": "+13125550100", "telnyx_end_user_target": "+13125550123"}}`.
     * Distinct from OpenAI's native `metadata` field, which has its own size and type
     * limits.
     */
    forward_metadata?: boolean;

    /**
     * Integration secret identifier for the external LLM API key.
     */
    llm_api_key_ref?: string;

    /**
     * URL used to retrieve an access token when certificate authentication is enabled.
     */
    token_retrieval_url?: string;
  }

  export interface FallbackConfig {
    external_llm?: FallbackConfig.ExternalLlm;

    /**
     * Integration secret identifier for the fallback model API key.
     */
    llm_api_key_ref?: string;

    /**
     * Fallback Telnyx-hosted model to use when the primary LLM provider is
     * unavailable.
     */
    model?: string;
  }

  export namespace FallbackConfig {
    export interface ExternalLlm {
      /**
       * Base URL for the external LLM endpoint.
       */
      base_url: string;

      /**
       * Model identifier to use with the external LLM endpoint.
       */
      model: string;

      /**
       * Authentication method used when connecting to the external LLM endpoint.
       */
      authentication_method?: 'token' | 'certificate';

      /**
       * Integration secret identifier for the client certificate used with certificate
       * authentication.
       */
      certificate_ref?: string;

      /**
       * When `true`, Telnyx forwards the assistant's dynamic variables to the external
       * LLM endpoint as a top-level `extra_metadata` object on the chat completion
       * request body. Defaults to `false`. Example payload sent to the external
       * endpoint:
       * `{"extra_metadata": {"customer_name": "Jane", "account_id": "acct_789", "telnyx_agent_target": "+13125550100", "telnyx_end_user_target": "+13125550123"}}`.
       * Distinct from OpenAI's native `metadata` field, which has its own size and type
       * limits.
       */
      forward_metadata?: boolean;

      /**
       * Integration secret identifier for the external LLM API key.
       */
      llm_api_key_ref?: string;

      /**
       * URL used to retrieve an access token when certificate authentication is enabled.
       */
      token_retrieval_url?: string;
    }
  }

  /**
   * Reference to a connected integration attached to an assistant. Discover
   * available integrations with `/ai/integrations` and connected integrations with
   * `/ai/integrations/connections`.
   */
  export interface Integration {
    /**
     * Catalog integration ID to attach. This is the `id` from the integrations catalog
     * at `/ai/integrations` (the same value also appears as `integration_id` on
     * entries returned by `/ai/integrations/connections`). It is **not** the
     * connection-level `id` from `/ai/integrations/connections`.
     */
    integration_id: string;

    /**
     * Optional per-assistant allowlist of integration tool names. When omitted or
     * empty, all tools allowed by the connected integration are available to the
     * assistant.
     */
    allowed_list?: Array<string>;
  }

  /**
   * Settings for interruptions and how the assistant decides the user has finished
   * speaking. These timings are most relevant when using non turn-taking
   * transcription models. For turn-taking models like `deepgram/flux`, end-of-turn
   * behavior is controlled by the transcription end-of-turn settings under
   * `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  export interface InterruptionSettings {
    /**
     * Whether users can interrupt the assistant while it is speaking.
     */
    enable?: boolean;

    /**
     * Controls when the assistant starts speaking after the user stops. These
     * thresholds primarily apply to non turn-taking transcription models. For
     * turn-taking models like `deepgram/flux`, end-of-turn detection is driven by the
     * transcription end-of-turn settings under `transcription.settings` instead.
     */
    start_speaking_plan?: InterruptionSettings.StartSpeakingPlan;
  }

  export namespace InterruptionSettings {
    /**
     * Controls when the assistant starts speaking after the user stops. These
     * thresholds primarily apply to non turn-taking transcription models. For
     * turn-taking models like `deepgram/flux`, end-of-turn detection is driven by the
     * transcription end-of-turn settings under `transcription.settings` instead.
     */
    export interface StartSpeakingPlan {
      /**
       * Endpointing thresholds used to decide when the user has finished speaking.
       * Applies to non turn-taking transcription models. For `deepgram/flux`, use
       * `transcription.settings.eot_threshold` / `eot_timeout_ms` /
       * `eager_eot_threshold`.
       */
      transcription_endpointing_plan?: StartSpeakingPlan.TranscriptionEndpointingPlan;

      /**
       * Minimum seconds to wait before the assistant starts speaking.
       */
      wait_seconds?: number;
    }

    export namespace StartSpeakingPlan {
      /**
       * Endpointing thresholds used to decide when the user has finished speaking.
       * Applies to non turn-taking transcription models. For `deepgram/flux`, use
       * `transcription.settings.eot_threshold` / `eot_timeout_ms` /
       * `eager_eot_threshold`.
       */
      export interface TranscriptionEndpointingPlan {
        /**
         * Seconds to wait after the transcript ends without punctuation.
         */
        on_no_punctuation_seconds?: number;

        /**
         * Seconds to wait after the transcript ends with a number.
         */
        on_number_seconds?: number;

        /**
         * Seconds to wait after the transcript ends with punctuation.
         */
        on_punctuation_seconds?: number;
      }
    }
  }

  /**
   * Reference to an MCP server attached to an assistant. Create and manage MCP
   * servers with the `/ai/mcp_servers` endpoints, then attach them to assistants by
   * ID.
   */
  export interface McpServer {
    /**
     * ID of the MCP server to attach. This must be the `id` of an MCP server returned
     * by the `/ai/mcp_servers` endpoints.
     */
    id: string;

    /**
     * Optional per-assistant allowlist of MCP tool names. When omitted, the assistant
     * uses the MCP server's configured `allowed_tools`.
     */
    allowed_tools?: Array<string>;
  }

  /**
   * Configuration for post-conversation processing. When enabled, the assistant
   * receives one additional LLM turn after the conversation ends, allowing it to
   * execute tool calls such as logging to a CRM or sending a summary. The assistant
   * can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  export interface PostConversationSettings {
    /**
     * Whether post-conversation processing is enabled. When true, the assistant will
     * be invoked after the conversation ends to perform any final tool calls. Defaults
     * to false.
     */
    enabled?: boolean;
  }
}

export interface InferenceEmbeddingWebhookToolParams {
  type: 'webhook';

  webhook: InferenceEmbeddingWebhookToolParams.Webhook;
}

export namespace InferenceEmbeddingWebhookToolParams {
  export interface Webhook {
    /**
     * The description of the tool.
     */
    description: string;

    /**
     * The name of the tool.
     */
    name: string;

    /**
     * The URL of the external tool to be called. This URL is going to be used by the
     * assistant. The URL can be templated like: `https://example.com/api/v1/{id}`,
     * where `{id}` is a placeholder for a value that will be provided by the assistant
     * if `path_parameters` are provided with the `id` attribute.
     */
    url: string;

    /**
     * If async, the assistant will move forward without waiting for your server to
     * respond.
     */
    async?: boolean;

    /**
     * The body parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the body of the request. See
     * the [JSON Schema reference](https://json-schema.org/understanding-json-schema)
     * for documentation about the format
     */
    body_parameters?: Webhook.BodyParameters;

    /**
     * The headers to be sent to the external tool.
     */
    headers?: Array<Webhook.Header>;

    /**
     * The HTTP method to be used when calling the external tool.
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

    /**
     * The path parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the path of the request if the
     * URL contains a placeholder for a value. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    path_parameters?: Webhook.PathParameters;

    /**
     * The query parameters the webhook tool accepts, described as a JSON Schema
     * object. These parameters will be passed to the webhook as the query of the
     * request. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    query_parameters?: Webhook.QueryParameters;

    /**
     * A list of mappings that extract values from the webhook response and store them
     * as dynamic variables. Each mapping specifies a dynamic variable name and a
     * dot-notation path to the value in the response body.
     */
    store_fields_as_variables?: Array<Webhook.StoreFieldsAsVariable>;

    /**
     * The maximum number of milliseconds to wait for the webhook to respond. Only
     * applicable when async is false.
     */
    timeout_ms?: number;
  }

  export namespace Webhook {
    /**
     * The body parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the body of the request. See
     * the [JSON Schema reference](https://json-schema.org/understanding-json-schema)
     * for documentation about the format
     */
    export interface BodyParameters {
      /**
       * The properties of the body parameters.
       */
      properties?: { [key: string]: unknown };

      /**
       * The required properties of the body parameters.
       */
      required?: Array<string>;

      type?: 'object';
    }

    export interface Header {
      name?: string;

      /**
       * The value of the header. Note that we support mustache templating for the value.
       * For example you can use
       * `Bearer {{#integration_secret}}test-secret{{/integration_secret}}` to pass the
       * value of the integration secret as the bearer token.
       * [Telnyx signature headers](https://developers.telnyx.com/docs/voice/programmable-voice/voice-api-webhooks)
       * will be automatically added to the request.
       */
      value?: string;
    }

    /**
     * The path parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the path of the request if the
     * URL contains a placeholder for a value. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    export interface PathParameters {
      /**
       * The properties of the path parameters.
       */
      properties?: { [key: string]: unknown };

      /**
       * The required properties of the path parameters.
       */
      required?: Array<string>;

      type?: 'object';
    }

    /**
     * The query parameters the webhook tool accepts, described as a JSON Schema
     * object. These parameters will be passed to the webhook as the query of the
     * request. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    export interface QueryParameters {
      /**
       * The properties of the query parameters.
       */
      properties?: { [key: string]: unknown };

      /**
       * The required properties of the query parameters.
       */
      required?: Array<string>;

      type?: 'object';
    }

    export interface StoreFieldsAsVariable {
      /**
       * The name of the dynamic variable to store the extracted value in.
       */
      name: string;

      /**
       * A dot-notation path to the value in the webhook response body (e.g.
       * 'customer.name' or 'id').
       */
      value_path: string;
    }
  }
}

export interface InsightSettings {
  /**
   * Reference to an Insight Group. Insights in this group will be run automatically
   * for all the assistant's conversations.
   */
  insight_group_id?: string;
}

export interface MessagingSettings {
  /**
   * If more than this many minutes have passed since the last message, the assistant
   * will start a new conversation instead of continuing the existing one.
   */
  conversation_inactivity_minutes?: number;

  /**
   * Default Messaging Profile used for messaging exchanges with your assistant. This
   * will be created automatically on assistant creation.
   */
  default_messaging_profile_id?: string;

  /**
   * The URL where webhooks related to delivery statused for assistant messages will
   * be sent.
   */
  delivery_status_webhook_url?: string;
}

export interface Observability {
  host?: string;

  public_key_ref?: string;

  secret_key_ref?: string;

  status?: 'enabled' | 'disabled';
}

export interface ObservabilityReq {
  host?: string;

  public_key_ref?: string;

  secret_key_ref?: string;

  status?: 'enabled' | 'disabled';
}

export interface PrivacySettings {
  /**
   * If true, conversation history and insights will be stored. If false, they will
   * not be stored. This in‑tool toggle governs solely the retention of conversation
   * history and insights via the AI assistant. It has no effect on any separate
   * recording, transcription, or storage configuration that you have set at the
   * account, number, or application level. All such external settings remain in
   * force regardless of your selection here.
   */
  data_retention?: boolean;
}

export interface RetrievalTool {
  retrieval: ChatAPI.BucketIDs;

  type: 'retrieval';
}

export interface TelephonySettings {
  /**
   * Default Texml App used for voice calls with your assistant. This will be created
   * automatically on assistant creation.
   */
  default_texml_app_id?: string;

  /**
   * The noise suppression engine to use. Use 'disabled' to turn off noise
   * suppression.
   */
  noise_suppression?: 'krisp' | 'deepfilternet' | 'disabled';

  /**
   * Configuration for noise suppression. Only applicable when noise_suppression is
   * 'deepfilternet'.
   */
  noise_suppression_config?: TelephonySettings.NoiseSuppressionConfig;

  /**
   * Configuration for call recording format and channel settings.
   */
  recording_settings?: TelephonySettings.RecordingSettings;

  /**
   * When enabled, allows users to interact with your AI assistant directly from your
   * website without requiring authentication. This is required for FE widgets that
   * work with assistants that have telephony enabled.
   */
  supports_unauthenticated_web_calls?: boolean;

  /**
   * Maximum duration in seconds for the AI assistant to participate on the call.
   * When this limit is reached the assistant will be stopped. This limit does not
   * apply to portions of a call without an active assistant (for instance, a call
   * transferred to a human representative).
   */
  time_limit_secs?: number;

  /**
   * Duration in seconds of end user silence before the assistant checks in on the
   * user. When this limit is reached the assistant will prompt the user to respond.
   * This is distinct from user_idle_timeout_secs which stops the assistant entirely.
   */
  user_idle_reply_secs?: number;

  /**
   * Maximum duration in seconds of end user silence on the call. When this limit is
   * reached the assistant will be stopped. This limit does not apply to portions of
   * a call without an active assistant (for instance, a call transferred to a human
   * representative).
   */
  user_idle_timeout_secs?: number;

  /**
   * Configuration for voicemail detection (AMD - Answering Machine Detection) on
   * outgoing calls. These settings only apply if AMD is enabled on the Dial command.
   * See
   * [TeXML Dial documentation](https://developers.telnyx.com/api-reference/texml-rest-commands/initiate-an-outbound-call)
   * for enabling AMD. Recommended settings: MachineDetection=Enable, AsyncAmd=true,
   * DetectionMode=Premium.
   */
  voicemail_detection?: TelephonySettings.VoicemailDetection;
}

export namespace TelephonySettings {
  /**
   * Configuration for noise suppression. Only applicable when noise_suppression is
   * 'deepfilternet'.
   */
  export interface NoiseSuppressionConfig {
    /**
     * Attenuation limit for noise suppression. Range: 0-100.
     */
    attenuation_limit?: number;

    /**
     * Mode for noise suppression configuration.
     */
    mode?: 'advanced';
  }

  /**
   * Configuration for call recording format and channel settings.
   */
  export interface RecordingSettings {
    /**
     * The number of channels for the recording. 'single' for mono, 'dual' for stereo.
     */
    channels?: 'single' | 'dual';

    /**
     * Whether call recording is enabled. When set to false, calls will not be recorded
     * regardless of other recording configuration.
     */
    enabled?: boolean;

    /**
     * The format of the recording file.
     */
    format?: 'wav' | 'mp3';
  }

  /**
   * Configuration for voicemail detection (AMD - Answering Machine Detection) on
   * outgoing calls. These settings only apply if AMD is enabled on the Dial command.
   * See
   * [TeXML Dial documentation](https://developers.telnyx.com/api-reference/texml-rest-commands/initiate-an-outbound-call)
   * for enabling AMD. Recommended settings: MachineDetection=Enable, AsyncAmd=true,
   * DetectionMode=Premium.
   */
  export interface VoicemailDetection {
    /**
     * Action to take when voicemail is detected.
     */
    on_voicemail_detected?: VoicemailDetection.OnVoicemailDetected;
  }

  export namespace VoicemailDetection {
    /**
     * Action to take when voicemail is detected.
     */
    export interface OnVoicemailDetected {
      /**
       * The action to take when voicemail is detected.
       */
      action?: 'stop_assistant' | 'leave_message_and_stop_assistant' | 'continue_assistant';

      /**
       * Configuration for the voicemail message to leave. Only applicable when action is
       * 'leave_message_and_stop_assistant'.
       */
      voicemail_message?: OnVoicemailDetected.VoicemailMessage;
    }

    export namespace OnVoicemailDetected {
      /**
       * Configuration for the voicemail message to leave. Only applicable when action is
       * 'leave_message_and_stop_assistant'.
       */
      export interface VoicemailMessage {
        /**
         * The specific message to leave as voicemail. Only applicable when type is
         * 'message'.
         */
        message?: string;

        /**
         * The prompt to use for generating the voicemail message. Only applicable when
         * type is 'prompt'.
         */
        prompt?: string;

        /**
         * The type of voicemail message. Use 'prompt' to have the assistant generate a
         * message based on a prompt, or 'message' to leave a specific message.
         */
        type?: 'prompt' | 'message';
      }
    }
  }
}

export interface TranscriptionSettings {
  /**
   * Integration secret identifier for the transcription provider API key. Currently
   * used for Azure transcription regions that require a customer-provided API key.
   */
  api_key_ref?: string;

  /**
   * The language of the audio to be transcribed. If not set, or if set to `auto`,
   * supported models will automatically detect the language. For `deepgram/flux`,
   * supported values are: `auto` (Telnyx language detection controls the language
   * hint), `multi` (no language hint), and language-specific hints `en`, `es`, `fr`,
   * `de`, `hi`, `ru`, `pt`, `ja`, `it`, and `nl`.
   */
  language?: string;

  /**
   * The speech to text model to be used by the voice assistant. All Deepgram models
   * are run on-premise.
   *
   * - `deepgram/flux` is optimized for turn-taking with multilingual language hints.
   * - `deepgram/nova-3` is multilingual with automatic language detection.
   * - `deepgram/nova-2` is Deepgram's previous-generation multilingual model.
   * - `azure/fast` is a multilingual Azure transcription model.
   * - `assemblyai/universal-streaming` is a multilingual streaming model with
   *   configurable turn detection.
   * - `xai/grok-stt` is a multilingual Grok STT model.
   */
  model?:
    | 'deepgram/flux'
    | 'deepgram/nova-3'
    | 'deepgram/nova-2'
    | 'azure/fast'
    | 'assemblyai/universal-streaming'
    | 'xai/grok-stt'
    | 'distil-whisper/distil-large-v2'
    | 'openai/whisper-large-v3-turbo';

  /**
   * Region on third party cloud providers (currently Azure) if using one of their
   * models. Some regions require `api_key_ref`.
   */
  region?: string;

  settings?: TranscriptionSettingsConfig;
}

export interface TranscriptionSettingsConfig {
  /**
   * Available only for deepgram/flux. Confidence threshold for eager end of turn
   * detection. Must be lower than or equal to eot_threshold. Setting this equal to
   * eot_threshold effectively disables eager end of turn.
   */
  eager_eot_threshold?: number;

  /**
   * Available only for assemblyai/universal-streaming. Confidence level required to
   * trigger an end of turn. Higher values require more certainty before ending a
   * turn.
   */
  end_of_turn_confidence_threshold?: number;

  /**
   * Available only for deepgram/flux. Confidence required to trigger an end of turn.
   * Higher values = more reliable turn detection but slightly increased latency.
   */
  eot_threshold?: number;

  /**
   * Available only for deepgram/flux. Maximum milliseconds of silence before forcing
   * an end of turn, regardless of confidence.
   */
  eot_timeout_ms?: number;

  /**
   * Available only for deepgram/nova-3 and deepgram/flux. A comma-separated list of
   * key terms to boost for recognition during transcription. Helps improve accuracy
   * for domain-specific terminology, proper nouns, or uncommon words. This field may
   * be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * using mustache syntax (e.g. `Telnyx,{{customer_name}},VoIP`). Variables are
   * resolved at call time before the value is sent to the speech-to-text engine.
   */
  keyterm?: string;

  /**
   * Available only for assemblyai/universal-streaming. Maximum duration of silence
   * in milliseconds before forcing an end of turn.
   */
  max_turn_silence?: number;

  /**
   * Available only for assemblyai/universal-streaming. Minimum duration of silence
   * in milliseconds before a turn can end. Must be less than or equal to
   * max_turn_silence.
   */
  min_turn_silence?: number;

  numerals?: boolean;

  smart_format?: boolean;
}

export interface TransferTool {
  transfer: TransferTool.Transfer;

  type: 'transfer';
}

export namespace TransferTool {
  export interface Transfer {
    /**
     * Number or SIP URI placing the call.
     */
    from: string;

    /**
     * The different possible targets of the transfer. The assistant will be able to
     * choose one of the targets to transfer the call to. This can also be a dynamic
     * variable string like `{{ targets }}` where `targets` is returned by the dynamic
     * variables webhook and resolves to an array of target objects at runtime.
     */
    targets: Array<Transfer.UnionMember0> | string;
  }

  export namespace Transfer {
    export interface UnionMember0 {
      /**
       * The destination number or SIP URI of the call.
       */
      to: string;

      /**
       * The name of the target.
       */
      name?: string;
    }
  }
}

export interface VoiceSettings {
  /**
   * The voice to be used by the voice assistant. Check the full list of
   * [available voices](https://developers.telnyx.com/docs/tts-stt/tts-available-voices)
   * via our voices API. To use ElevenLabs, you must reference your ElevenLabs API
   * key as an integration secret under the `api_key_ref` field. See
   * [integration secrets documentation](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * for details. For Telnyx voices, use `Telnyx.<model_id>.<voice_id>` (e.g.
   * Telnyx.KokoroTTS.af_heart). The voice portion of the identifier supports
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * using mustache syntax (e.g. `Telnyx.Ultra.{{voice_id}}`). The variable is
   * resolved at call time from your dynamic variables webhook, allowing you to
   * select the voice dynamically per call.
   */
  voice: string;

  /**
   * The `identifier` for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * that refers to your ElevenLabs API key. Warning: Free plans are unlikely to work
   * with this integration.
   */
  api_key_ref?: string;

  /**
   * Optional background audio to play on the call. Use a predefined media bed, or
   * supply a looped MP3 URL. If a media URL is chosen in the portal, customers can
   * preview it before saving.
   */
  background_audio?: VoiceSettings.PredefinedMedia | VoiceSettings.MediaURL | VoiceSettings.MediaName;

  /**
   * Enables emotionally expressive speech using SSML emotion tags. When enabled, the
   * assistant uses audio tags like angry, excited, content, and sad to add emotional
   * nuance. Only supported for Telnyx Ultra voices.
   */
  expressive_mode?: boolean;

  /**
   * Enhances recognition for specific languages and dialects during MiniMax TTS
   * synthesis. Default is null (no boost). Set to 'auto' for automatic language
   * detection. Only applicable when using MiniMax voices.
   */
  language_boost?:
    | 'auto'
    | 'Chinese'
    | 'Chinese,Yue'
    | 'English'
    | 'Arabic'
    | 'Russian'
    | 'Spanish'
    | 'French'
    | 'Portuguese'
    | 'German'
    | 'Turkish'
    | 'Dutch'
    | 'Ukrainian'
    | 'Vietnamese'
    | 'Indonesian'
    | 'Japanese'
    | 'Italian'
    | 'Korean'
    | 'Thai'
    | 'Polish'
    | 'Romanian'
    | 'Greek'
    | 'Czech'
    | 'Finnish'
    | 'Hindi'
    | 'Bulgarian'
    | 'Danish'
    | 'Hebrew'
    | 'Malay'
    | 'Persian'
    | 'Slovak'
    | 'Swedish'
    | 'Croatian'
    | 'Filipino'
    | 'Hungarian'
    | 'Norwegian'
    | 'Slovenian'
    | 'Catalan'
    | 'Nynorsk'
    | 'Tamil'
    | 'Afrikaans'
    | null;

  /**
   * Determines how closely the AI should adhere to the original voice when
   * attempting to replicate it. Only applicable when using ElevenLabs.
   */
  similarity_boost?: number;

  /**
   * Adjusts speech velocity. 1.0 is default speed; values less than 1.0 slow speech;
   * values greater than 1.0 accelerate it. Only applicable when using ElevenLabs.
   */
  speed?: number;

  /**
   * Determines the style exaggeration of the voice. Amplifies speaker style but
   * consumes additional resources when set above 0. Only applicable when using
   * ElevenLabs.
   */
  style?: number;

  /**
   * Determines how stable the voice is and the randomness between each generation.
   * Lower values create a broader emotional range; higher values produce more
   * consistent, monotonous output. Only applicable when using ElevenLabs.
   */
  temperature?: number;

  /**
   * Amplifies similarity to the original speaker voice. Increases computational load
   * and latency slightly. Only applicable when using ElevenLabs.
   */
  use_speaker_boost?: boolean;

  /**
   * The speed of the voice in the range [0.25, 2.0]. 1.0 is deafult speed. Larger
   * numbers make the voice faster, smaller numbers make it slower. This is only
   * applicable for Telnyx Natural voices.
   */
  voice_speed?: number;
}

export namespace VoiceSettings {
  export interface PredefinedMedia {
    /**
     * Select from predefined media options.
     */
    type: 'predefined_media';

    /**
     * The predefined media to use. `silence` disables background audio.
     */
    value: 'silence' | 'office';
  }

  export interface MediaURL {
    /**
     * Provide a direct URL to an MP3 file. The audio will loop during the call.
     */
    type: 'media_url';

    /**
     * HTTPS URL to an MP3 file.
     */
    value: string;
  }

  export interface MediaName {
    /**
     * Reference a previously uploaded media by its name from Telnyx Media Storage.
     */
    type: 'media_name';

    /**
     * The `name` of a media asset created via
     * [Media Storage API](https://developers.telnyx.com/api/media-storage/create-media-storage).
     * The audio will loop during the call.
     */
    value: string;
  }
}

export interface WebhookTool {
  type: 'webhook';

  webhook: WebhookTool.Webhook;
}

export namespace WebhookTool {
  export interface Webhook {
    /**
     * The description of the tool.
     */
    description: string;

    /**
     * The name of the tool.
     */
    name: string;

    /**
     * The URL of the external tool to be called. This URL is going to be used by the
     * assistant. The URL can be templated like: `https://example.com/api/v1/{id}`,
     * where `{id}` is a placeholder for a value that will be provided by the assistant
     * if `path_parameters` are provided with the `id` attribute.
     */
    url: string;

    /**
     * The body parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the body of the request. See
     * the [JSON Schema reference](https://json-schema.org/understanding-json-schema)
     * for documentation about the format
     */
    body_parameters?: Webhook.BodyParameters;

    /**
     * The headers to be sent to the external tool.
     */
    headers?: Array<Webhook.Header>;

    /**
     * The HTTP method to be used when calling the external tool.
     */
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

    /**
     * The path parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the path of the request if the
     * URL contains a placeholder for a value. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    path_parameters?: Webhook.PathParameters;

    /**
     * The query parameters the webhook tool accepts, described as a JSON Schema
     * object. These parameters will be passed to the webhook as the query of the
     * request. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    query_parameters?: Webhook.QueryParameters;
  }

  export namespace Webhook {
    /**
     * The body parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the body of the request. See
     * the [JSON Schema reference](https://json-schema.org/understanding-json-schema)
     * for documentation about the format
     */
    export interface BodyParameters {
      /**
       * The properties of the body parameters.
       */
      properties?: { [key: string]: unknown };

      /**
       * The required properties of the body parameters.
       */
      required?: Array<string>;

      type?: 'object';
    }

    export interface Header {
      name?: string;

      /**
       * The value of the header. Note that we support mustache templating for the value.
       * For example you can use
       * `Bearer {{#integration_secret}}test-secret{{/integration_secret}}` to pass the
       * value of the integration secret as the bearer token.
       */
      value?: string;
    }

    /**
     * The path parameters the webhook tool accepts, described as a JSON Schema object.
     * These parameters will be passed to the webhook as the path of the request if the
     * URL contains a placeholder for a value. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    export interface PathParameters {
      /**
       * The properties of the path parameters.
       */
      properties?: { [key: string]: unknown };

      /**
       * The required properties of the path parameters.
       */
      required?: Array<string>;

      type?: 'object';
    }

    /**
     * The query parameters the webhook tool accepts, described as a JSON Schema
     * object. These parameters will be passed to the webhook as the query of the
     * request. See the
     * [JSON Schema reference](https://json-schema.org/understanding-json-schema) for
     * documentation about the format
     */
    export interface QueryParameters {
      /**
       * The properties of the query parameters.
       */
      properties?: { [key: string]: unknown };

      /**
       * The required properties of the query parameters.
       */
      required?: Array<string>;

      type?: 'object';
    }
  }
}

/**
 * Configuration settings for the assistant's web widget.
 */
export interface WidgetSettings {
  /**
   * Text displayed while the agent is processing.
   */
  agent_thinking_text?: string;

  audio_visualizer_config?: AudioVisualizerConfig;

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

/**
 * Aligns with the OpenAI API:
 * https://platform.openai.com/docs/api-reference/assistants/deleteAssistant
 */
export interface AssistantDeleteResponse {
  id: string;

  deleted: boolean;

  object: string;
}

export interface AssistantChatResponse {
  /**
   * The assistant's generated response based on the input message and context.
   */
  content: string;
}

export type AssistantGetTexmlResponse = string;

export interface AssistantSendSMSResponse {
  conversation_id?: string;
}

export interface AssistantCreateParams {
  /**
   * System instructions for the assistant. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  instructions: string;

  name: string;

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

  enabled_features?: Array<EnabledFeatures>;

  external_llm?: AssistantCreateParams.ExternalLlm;

  fallback_config?: AssistantCreateParams.FallbackConfig;

  /**
   * Text that the assistant will use to start the conversation. This may be
   * templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   * Use an empty string to have the assistant wait for the user to speak first. Use
   * the special value `<assistant-speaks-first-with-model-generated-message>` to
   * have the assistant generate the greeting based on the system instructions.
   */
  greeting?: string;

  insight_settings?: InsightSettings;

  /**
   * Connected integrations attached to the assistant. The catalog of available
   * integrations is at `/ai/integrations`; the user's connected integrations are at
   * `/ai/integrations/connections`. Each item references a catalog integration by
   * `integration_id`.
   */
  integrations?: Array<AssistantCreateParams.Integration>;

  /**
   * Settings for interruptions and how the assistant decides the user has finished
   * speaking. These timings are most relevant when using non turn-taking
   * transcription models. For turn-taking models like `deepgram/flux`, end-of-turn
   * behavior is controlled by the transcription end-of-turn settings under
   * `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  interruption_settings?: AssistantCreateParams.InterruptionSettings;

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
  mcp_servers?: Array<AssistantCreateParams.McpServer>;

  messaging_settings?: MessagingSettings;

  /**
   * ID of the model to use when `external_llm` is not set. You can use the
   * [Get models API](https://developers.telnyx.com/api-reference/chat/get-available-models)
   * to see available models. If `external_llm` is provided, the assistant uses
   * `external_llm` instead of this field. If neither `model` nor `external_llm` is
   * provided, Telnyx applies the default model.
   */
  model?: string;

  observability_settings?: ObservabilityReq;

  /**
   * Configuration for post-conversation processing. When enabled, the assistant
   * receives one additional LLM turn after the conversation ends, allowing it to
   * execute tool calls such as logging to a CRM or sending a summary. The assistant
   * can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  post_conversation_settings?: AssistantCreateParams.PostConversationSettings;

  privacy_settings?: PrivacySettings;

  /**
   * Tags associated with the assistant. Tags can also be managed with the assistant
   * tag endpoints.
   */
  tags?: Array<string>;

  telephony_settings?: TelephonySettings;

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
  tools?: Array<AssistantTool>;

  transcription?: TranscriptionSettings;

  voice_settings?: VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: WidgetSettings;
}

export namespace AssistantCreateParams {
  export interface ExternalLlm {
    /**
     * Base URL for the external LLM endpoint.
     */
    base_url: string;

    /**
     * Model identifier to use with the external LLM endpoint.
     */
    model: string;

    /**
     * Authentication method used when connecting to the external LLM endpoint.
     */
    authentication_method?: 'token' | 'certificate';

    /**
     * Integration secret identifier for the client certificate used with certificate
     * authentication.
     */
    certificate_ref?: string;

    /**
     * When `true`, Telnyx forwards the assistant's dynamic variables to the external
     * LLM endpoint as a top-level `extra_metadata` object on the chat completion
     * request body. Defaults to `false`. Example payload sent to the external
     * endpoint:
     * `{"extra_metadata": {"customer_name": "Jane", "account_id": "acct_789", "telnyx_agent_target": "+13125550100", "telnyx_end_user_target": "+13125550123"}}`.
     * Distinct from OpenAI's native `metadata` field, which has its own size and type
     * limits.
     */
    forward_metadata?: boolean;

    /**
     * Integration secret identifier for the external LLM API key.
     */
    llm_api_key_ref?: string;

    /**
     * URL used to retrieve an access token when certificate authentication is enabled.
     */
    token_retrieval_url?: string;
  }

  export interface FallbackConfig {
    external_llm?: FallbackConfig.ExternalLlm;

    /**
     * Integration secret identifier for the fallback model API key.
     */
    llm_api_key_ref?: string;

    /**
     * Fallback Telnyx-hosted model to use when the primary LLM provider is
     * unavailable.
     */
    model?: string;
  }

  export namespace FallbackConfig {
    export interface ExternalLlm {
      /**
       * Base URL for the external LLM endpoint.
       */
      base_url: string;

      /**
       * Model identifier to use with the external LLM endpoint.
       */
      model: string;

      /**
       * Authentication method used when connecting to the external LLM endpoint.
       */
      authentication_method?: 'token' | 'certificate';

      /**
       * Integration secret identifier for the client certificate used with certificate
       * authentication.
       */
      certificate_ref?: string;

      /**
       * When `true`, Telnyx forwards the assistant's dynamic variables to the external
       * LLM endpoint as a top-level `extra_metadata` object on the chat completion
       * request body. Defaults to `false`. Example payload sent to the external
       * endpoint:
       * `{"extra_metadata": {"customer_name": "Jane", "account_id": "acct_789", "telnyx_agent_target": "+13125550100", "telnyx_end_user_target": "+13125550123"}}`.
       * Distinct from OpenAI's native `metadata` field, which has its own size and type
       * limits.
       */
      forward_metadata?: boolean;

      /**
       * Integration secret identifier for the external LLM API key.
       */
      llm_api_key_ref?: string;

      /**
       * URL used to retrieve an access token when certificate authentication is enabled.
       */
      token_retrieval_url?: string;
    }
  }

  /**
   * Reference to a connected integration attached to an assistant. Discover
   * available integrations with `/ai/integrations` and connected integrations with
   * `/ai/integrations/connections`.
   */
  export interface Integration {
    /**
     * Catalog integration ID to attach. This is the `id` from the integrations catalog
     * at `/ai/integrations` (the same value also appears as `integration_id` on
     * entries returned by `/ai/integrations/connections`). It is **not** the
     * connection-level `id` from `/ai/integrations/connections`.
     */
    integration_id: string;

    /**
     * Optional per-assistant allowlist of integration tool names. When omitted or
     * empty, all tools allowed by the connected integration are available to the
     * assistant.
     */
    allowed_list?: Array<string>;
  }

  /**
   * Settings for interruptions and how the assistant decides the user has finished
   * speaking. These timings are most relevant when using non turn-taking
   * transcription models. For turn-taking models like `deepgram/flux`, end-of-turn
   * behavior is controlled by the transcription end-of-turn settings under
   * `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  export interface InterruptionSettings {
    /**
     * Whether users can interrupt the assistant while it is speaking.
     */
    enable?: boolean;

    /**
     * Controls when the assistant starts speaking after the user stops. These
     * thresholds primarily apply to non turn-taking transcription models. For
     * turn-taking models like `deepgram/flux`, end-of-turn detection is driven by the
     * transcription end-of-turn settings under `transcription.settings` instead.
     */
    start_speaking_plan?: InterruptionSettings.StartSpeakingPlan;
  }

  export namespace InterruptionSettings {
    /**
     * Controls when the assistant starts speaking after the user stops. These
     * thresholds primarily apply to non turn-taking transcription models. For
     * turn-taking models like `deepgram/flux`, end-of-turn detection is driven by the
     * transcription end-of-turn settings under `transcription.settings` instead.
     */
    export interface StartSpeakingPlan {
      /**
       * Endpointing thresholds used to decide when the user has finished speaking.
       * Applies to non turn-taking transcription models. For `deepgram/flux`, use
       * `transcription.settings.eot_threshold` / `eot_timeout_ms` /
       * `eager_eot_threshold`.
       */
      transcription_endpointing_plan?: StartSpeakingPlan.TranscriptionEndpointingPlan;

      /**
       * Minimum seconds to wait before the assistant starts speaking.
       */
      wait_seconds?: number;
    }

    export namespace StartSpeakingPlan {
      /**
       * Endpointing thresholds used to decide when the user has finished speaking.
       * Applies to non turn-taking transcription models. For `deepgram/flux`, use
       * `transcription.settings.eot_threshold` / `eot_timeout_ms` /
       * `eager_eot_threshold`.
       */
      export interface TranscriptionEndpointingPlan {
        /**
         * Seconds to wait after the transcript ends without punctuation.
         */
        on_no_punctuation_seconds?: number;

        /**
         * Seconds to wait after the transcript ends with a number.
         */
        on_number_seconds?: number;

        /**
         * Seconds to wait after the transcript ends with punctuation.
         */
        on_punctuation_seconds?: number;
      }
    }
  }

  /**
   * Reference to an MCP server attached to an assistant. Create and manage MCP
   * servers with the `/ai/mcp_servers` endpoints, then attach them to assistants by
   * ID.
   */
  export interface McpServer {
    /**
     * ID of the MCP server to attach. This must be the `id` of an MCP server returned
     * by the `/ai/mcp_servers` endpoints.
     */
    id: string;

    /**
     * Optional per-assistant allowlist of MCP tool names. When omitted, the assistant
     * uses the MCP server's configured `allowed_tools`.
     */
    allowed_tools?: Array<string>;
  }

  /**
   * Configuration for post-conversation processing. When enabled, the assistant
   * receives one additional LLM turn after the conversation ends, allowing it to
   * execute tool calls such as logging to a CRM or sending a summary. The assistant
   * can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  export interface PostConversationSettings {
    /**
     * Whether post-conversation processing is enabled. When true, the assistant will
     * be invoked after the conversation ends to perform any final tool calls. Defaults
     * to false.
     */
    enabled?: boolean;
  }
}

export interface AssistantRetrieveParams {
  call_control_id?: string;

  fetch_dynamic_variables_from_webhook?: boolean;

  from?: string;

  to?: string;
}

export interface AssistantUpdateParams {
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

  enabled_features?: Array<EnabledFeatures>;

  external_llm?: AssistantUpdateParams.ExternalLlm;

  fallback_config?: AssistantUpdateParams.FallbackConfig;

  /**
   * Text that the assistant will use to start the conversation. This may be
   * templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   * Use an empty string to have the assistant wait for the user to speak first. Use
   * the special value `<assistant-speaks-first-with-model-generated-message>` to
   * have the assistant generate the greeting based on the system instructions.
   */
  greeting?: string;

  insight_settings?: InsightSettings;

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
  integrations?: Array<AssistantUpdateParams.Integration>;

  /**
   * Settings for interruptions and how the assistant decides the user has finished
   * speaking. These timings are most relevant when using non turn-taking
   * transcription models. For turn-taking models like `deepgram/flux`, end-of-turn
   * behavior is controlled by the transcription end-of-turn settings under
   * `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  interruption_settings?: AssistantUpdateParams.InterruptionSettings;

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
  mcp_servers?: Array<AssistantUpdateParams.McpServer>;

  messaging_settings?: MessagingSettings;

  /**
   * ID of the model to use when `external_llm` is not set. You can use the
   * [Get models API](https://developers.telnyx.com/api-reference/chat/get-available-models)
   * to see available models. If `external_llm` is provided, the assistant uses
   * `external_llm` instead of this field. If neither `model` nor `external_llm` is
   * provided, Telnyx applies the default model.
   */
  model?: string;

  name?: string;

  observability_settings?: ObservabilityReq;

  /**
   * Configuration for post-conversation processing. When enabled, the assistant
   * receives one additional LLM turn after the conversation ends, allowing it to
   * execute tool calls such as logging to a CRM or sending a summary. The assistant
   * can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  post_conversation_settings?: AssistantUpdateParams.PostConversationSettings;

  privacy_settings?: PrivacySettings;

  /**
   * Indicates whether the assistant should be promoted to the main version. Defaults
   * to true.
   */
  promote_to_main?: boolean;

  /**
   * Tags associated with the assistant. Tags can also be managed with the assistant
   * tag endpoints.
   */
  tags?: Array<string>;

  telephony_settings?: TelephonySettings;

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
  tools?: Array<AssistantTool>;

  transcription?: TranscriptionSettings;

  /**
   * Human-readable name for the assistant version.
   */
  version_name?: string;

  voice_settings?: VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: WidgetSettings;
}

export namespace AssistantUpdateParams {
  export interface ExternalLlm {
    /**
     * Base URL for the external LLM endpoint.
     */
    base_url: string;

    /**
     * Model identifier to use with the external LLM endpoint.
     */
    model: string;

    /**
     * Authentication method used when connecting to the external LLM endpoint.
     */
    authentication_method?: 'token' | 'certificate';

    /**
     * Integration secret identifier for the client certificate used with certificate
     * authentication.
     */
    certificate_ref?: string;

    /**
     * When `true`, Telnyx forwards the assistant's dynamic variables to the external
     * LLM endpoint as a top-level `extra_metadata` object on the chat completion
     * request body. Defaults to `false`. Example payload sent to the external
     * endpoint:
     * `{"extra_metadata": {"customer_name": "Jane", "account_id": "acct_789", "telnyx_agent_target": "+13125550100", "telnyx_end_user_target": "+13125550123"}}`.
     * Distinct from OpenAI's native `metadata` field, which has its own size and type
     * limits.
     */
    forward_metadata?: boolean;

    /**
     * Integration secret identifier for the external LLM API key.
     */
    llm_api_key_ref?: string;

    /**
     * URL used to retrieve an access token when certificate authentication is enabled.
     */
    token_retrieval_url?: string;
  }

  export interface FallbackConfig {
    external_llm?: FallbackConfig.ExternalLlm;

    /**
     * Integration secret identifier for the fallback model API key.
     */
    llm_api_key_ref?: string;

    /**
     * Fallback Telnyx-hosted model to use when the primary LLM provider is
     * unavailable.
     */
    model?: string;
  }

  export namespace FallbackConfig {
    export interface ExternalLlm {
      /**
       * Base URL for the external LLM endpoint.
       */
      base_url: string;

      /**
       * Model identifier to use with the external LLM endpoint.
       */
      model: string;

      /**
       * Authentication method used when connecting to the external LLM endpoint.
       */
      authentication_method?: 'token' | 'certificate';

      /**
       * Integration secret identifier for the client certificate used with certificate
       * authentication.
       */
      certificate_ref?: string;

      /**
       * When `true`, Telnyx forwards the assistant's dynamic variables to the external
       * LLM endpoint as a top-level `extra_metadata` object on the chat completion
       * request body. Defaults to `false`. Example payload sent to the external
       * endpoint:
       * `{"extra_metadata": {"customer_name": "Jane", "account_id": "acct_789", "telnyx_agent_target": "+13125550100", "telnyx_end_user_target": "+13125550123"}}`.
       * Distinct from OpenAI's native `metadata` field, which has its own size and type
       * limits.
       */
      forward_metadata?: boolean;

      /**
       * Integration secret identifier for the external LLM API key.
       */
      llm_api_key_ref?: string;

      /**
       * URL used to retrieve an access token when certificate authentication is enabled.
       */
      token_retrieval_url?: string;
    }
  }

  /**
   * Reference to a connected integration attached to an assistant. Discover
   * available integrations with `/ai/integrations` and connected integrations with
   * `/ai/integrations/connections`.
   */
  export interface Integration {
    /**
     * Catalog integration ID to attach. This is the `id` from the integrations catalog
     * at `/ai/integrations` (the same value also appears as `integration_id` on
     * entries returned by `/ai/integrations/connections`). It is **not** the
     * connection-level `id` from `/ai/integrations/connections`.
     */
    integration_id: string;

    /**
     * Optional per-assistant allowlist of integration tool names. When omitted or
     * empty, all tools allowed by the connected integration are available to the
     * assistant.
     */
    allowed_list?: Array<string>;
  }

  /**
   * Settings for interruptions and how the assistant decides the user has finished
   * speaking. These timings are most relevant when using non turn-taking
   * transcription models. For turn-taking models like `deepgram/flux`, end-of-turn
   * behavior is controlled by the transcription end-of-turn settings under
   * `transcription.settings` (`eot_threshold`, `eot_timeout_ms`,
   * `eager_eot_threshold`).
   */
  export interface InterruptionSettings {
    /**
     * Whether users can interrupt the assistant while it is speaking.
     */
    enable?: boolean;

    /**
     * Controls when the assistant starts speaking after the user stops. These
     * thresholds primarily apply to non turn-taking transcription models. For
     * turn-taking models like `deepgram/flux`, end-of-turn detection is driven by the
     * transcription end-of-turn settings under `transcription.settings` instead.
     */
    start_speaking_plan?: InterruptionSettings.StartSpeakingPlan;
  }

  export namespace InterruptionSettings {
    /**
     * Controls when the assistant starts speaking after the user stops. These
     * thresholds primarily apply to non turn-taking transcription models. For
     * turn-taking models like `deepgram/flux`, end-of-turn detection is driven by the
     * transcription end-of-turn settings under `transcription.settings` instead.
     */
    export interface StartSpeakingPlan {
      /**
       * Endpointing thresholds used to decide when the user has finished speaking.
       * Applies to non turn-taking transcription models. For `deepgram/flux`, use
       * `transcription.settings.eot_threshold` / `eot_timeout_ms` /
       * `eager_eot_threshold`.
       */
      transcription_endpointing_plan?: StartSpeakingPlan.TranscriptionEndpointingPlan;

      /**
       * Minimum seconds to wait before the assistant starts speaking.
       */
      wait_seconds?: number;
    }

    export namespace StartSpeakingPlan {
      /**
       * Endpointing thresholds used to decide when the user has finished speaking.
       * Applies to non turn-taking transcription models. For `deepgram/flux`, use
       * `transcription.settings.eot_threshold` / `eot_timeout_ms` /
       * `eager_eot_threshold`.
       */
      export interface TranscriptionEndpointingPlan {
        /**
         * Seconds to wait after the transcript ends without punctuation.
         */
        on_no_punctuation_seconds?: number;

        /**
         * Seconds to wait after the transcript ends with a number.
         */
        on_number_seconds?: number;

        /**
         * Seconds to wait after the transcript ends with punctuation.
         */
        on_punctuation_seconds?: number;
      }
    }
  }

  /**
   * Reference to an MCP server attached to an assistant. Create and manage MCP
   * servers with the `/ai/mcp_servers` endpoints, then attach them to assistants by
   * ID.
   */
  export interface McpServer {
    /**
     * ID of the MCP server to attach. This must be the `id` of an MCP server returned
     * by the `/ai/mcp_servers` endpoints.
     */
    id: string;

    /**
     * Optional per-assistant allowlist of MCP tool names. When omitted, the assistant
     * uses the MCP server's configured `allowed_tools`.
     */
    allowed_tools?: Array<string>;
  }

  /**
   * Configuration for post-conversation processing. When enabled, the assistant
   * receives one additional LLM turn after the conversation ends, allowing it to
   * execute tool calls such as logging to a CRM or sending a summary. The assistant
   * can execute multiple parallel or sequential tools during this phase.
   * Telephony-control tools (e.g. hangup, transfer) are unavailable
   * post-conversation. Beta feature.
   */
  export interface PostConversationSettings {
    /**
     * Whether post-conversation processing is enabled. When true, the assistant will
     * be invoked after the conversation ends to perform any final tool calls. Defaults
     * to false.
     */
    enabled?: boolean;
  }
}

export interface AssistantChatParams {
  /**
   * The message content sent by the client to the assistant
   */
  content: string;

  /**
   * A unique identifier for the conversation thread, used to maintain context
   */
  conversation_id: string;

  /**
   * The optional display name of the user sending the message
   */
  name?: string;
}

export interface AssistantImportsParams {
  /**
   * Integration secret pointer that refers to the API key for the external provider.
   * This should be an identifier for an integration secret created via
   * /v2/integration_secrets.
   */
  api_key_ref: string;

  /**
   * The external provider to import assistants from.
   */
  provider: 'elevenlabs' | 'vapi' | 'retell';

  /**
   * Optional list of assistant IDs to import from the external provider. If not
   * provided, all assistants will be imported.
   */
  import_ids?: Array<string>;
}

export interface AssistantSendSMSParams {
  from: string;

  to: string;

  conversation_metadata?: { [key: string]: string | number | boolean };

  should_create_conversation?: boolean;

  text?: string;
}

Assistants.Tests = Tests;
Assistants.CanaryDeploys = CanaryDeploys;
Assistants.ScheduledEvents = ScheduledEvents;
Assistants.Tools = Tools;
Assistants.Versions = Versions;
Assistants.Tags = Tags;

export declare namespace Assistants {
  export {
    type Assistant as Assistant,
    type AssistantTool as AssistantTool,
    type AssistantsList as AssistantsList,
    type AudioVisualizerConfig as AudioVisualizerConfig,
    type EnabledFeatures as EnabledFeatures,
    type HangupTool as HangupTool,
    type HangupToolParams as HangupToolParams,
    type ImportMetadata as ImportMetadata,
    type InferenceEmbedding as InferenceEmbedding,
    type InferenceEmbeddingWebhookToolParams as InferenceEmbeddingWebhookToolParams,
    type InsightSettings as InsightSettings,
    type MessagingSettings as MessagingSettings,
    type Observability as Observability,
    type ObservabilityReq as ObservabilityReq,
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
    Tests as Tests,
    type AssistantTest as AssistantTest,
    type TelnyxConversationChannel as TelnyxConversationChannel,
    type AssistantTestsDefaultFlatPagination as AssistantTestsDefaultFlatPagination,
    type TestCreateParams as TestCreateParams,
    type TestUpdateParams as TestUpdateParams,
    type TestListParams as TestListParams,
  };

  export {
    CanaryDeploys as CanaryDeploys,
    type CanaryDeploy as CanaryDeploy,
    type CanaryDeployResponse as CanaryDeployResponse,
    type VersionConfig as VersionConfig,
    type CanaryDeployCreateParams as CanaryDeployCreateParams,
    type CanaryDeployUpdateParams as CanaryDeployUpdateParams,
  };

  export {
    ScheduledEvents as ScheduledEvents,
    type ConversationChannelType as ConversationChannelType,
    type EventStatus as EventStatus,
    type ScheduledEventResponse as ScheduledEventResponse,
    type ScheduledPhoneCallEventResponse as ScheduledPhoneCallEventResponse,
    type ScheduledSMSEventResponse as ScheduledSMSEventResponse,
    type ScheduledEventListResponse as ScheduledEventListResponse,
    type ScheduledEventListResponsesDefaultFlatPagination as ScheduledEventListResponsesDefaultFlatPagination,
    type ScheduledEventCreateParams as ScheduledEventCreateParams,
    type ScheduledEventRetrieveParams as ScheduledEventRetrieveParams,
    type ScheduledEventListParams as ScheduledEventListParams,
    type ScheduledEventDeleteParams as ScheduledEventDeleteParams,
  };

  export {
    Tools as Tools,
    type ToolAddResponse as ToolAddResponse,
    type ToolRemoveResponse as ToolRemoveResponse,
    type ToolTestResponse as ToolTestResponse,
    type ToolAddParams as ToolAddParams,
    type ToolRemoveParams as ToolRemoveParams,
    type ToolTestParams as ToolTestParams,
  };

  export {
    Versions as Versions,
    type UpdateAssistant as UpdateAssistant,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionPromoteParams as VersionPromoteParams,
  };

  export {
    Tags as Tags,
    type TagListResponse as TagListResponse,
    type TagAddResponse as TagAddResponse,
    type TagRemoveResponse as TagRemoveResponse,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
