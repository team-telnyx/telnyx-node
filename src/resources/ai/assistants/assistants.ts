// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
import * as ToolsAPI from './tools';
import { ToolTestParams, ToolTestResponse, Tools } from './tools';
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

export class Assistants extends APIResource {
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  canaryDeploys: CanaryDeploysAPI.CanaryDeploys = new CanaryDeploysAPI.CanaryDeploys(this._client);
  scheduledEvents: ScheduledEventsAPI.ScheduledEvents = new ScheduledEventsAPI.ScheduledEvents(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Create a new AI Assistant.
   *
   * @example
   * ```ts
   * const inferenceEmbedding =
   *   await client.ai.assistants.create({
   *     instructions: 'instructions',
   *     model: 'model',
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
    | Assistant.BookAppointmentTool
    | Assistant.CheckAvailabilityTool
    | WebhookTool
    | HangupTool
    | TransferTool
    | Assistant.CallControlRetrievalTool
  >;
}

export namespace Assistant {
  export interface BookAppointmentTool {
    book_appointment: BookAppointmentTool.BookAppointment;

    type: 'book_appointment';
  }

  export namespace BookAppointmentTool {
    export interface BookAppointment {
      /**
       * Reference to an integration secret that contains your Cal.com API key. You would
       * pass the `identifier` for an integration secret
       * [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
       * that refers to your Cal.com API key.
       */
      api_key_ref: string;

      /**
       * Event Type ID for which slots are being fetched.
       * [cal.com](https://cal.com/docs/api-reference/v2/bookings/create-a-booking#body-event-type-id)
       */
      event_type_id: number;

      /**
       * The name of the attendee
       * [cal.com](https://cal.com/docs/api-reference/v2/bookings/create-a-booking#body-attendee-name).
       * If not provided, the assistant will ask for the attendee's name.
       */
      attendee_name?: string;

      /**
       * The timezone of the attendee
       * [cal.com](https://cal.com/docs/api-reference/v2/bookings/create-a-booking#body-attendee-timezone).
       * If not provided, the assistant will ask for the attendee's timezone.
       */
      attendee_timezone?: string;
    }
  }

  export interface CheckAvailabilityTool {
    check_availability: CheckAvailabilityTool.CheckAvailability;

    type: 'check_availability';
  }

  export namespace CheckAvailabilityTool {
    export interface CheckAvailability {
      /**
       * Reference to an integration secret that contains your Cal.com API key. You would
       * pass the `identifier` for an integration secret
       * [/v2/integration_secrets](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
       * that refers to your Cal.com API key.
       */
      api_key_ref: string;

      /**
       * Event Type ID for which slots are being fetched.
       * [cal.com](https://cal.com/docs/api-reference/v2/slots/get-available-slots#parameter-event-type-id)
       */
      event_type_id: number;
    }
  }

  export interface CallControlRetrievalTool {
    retrieval: CallControlRetrievalTool.Retrieval;

    type: 'retrieval';
  }

  export namespace CallControlRetrievalTool {
    export interface Retrieval {
      bucket_ids: Array<string>;

      /**
       * The maximum number of results to retrieve as context for the language model.
       */
      max_num_results?: number;
    }
  }
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
  | AssistantTool.Refer
  | AssistantTool.SendDtmf
  | AssistantTool.SendMessage;

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
       * choose one of the targets to transfer the call to.
       */
      targets: Array<Transfer.Target>;

      /**
       * Custom headers to be added to the SIP INVITE for the transfer command.
       */
      custom_headers?: Array<Transfer.CustomHeader>;

      /**
       * Natural language instructions for your agent for how to provide context for the
       * transfer recipient.
       */
      warm_transfer_instructions?: string;
    }

    export namespace Transfer {
      export interface Target {
        /**
         * The name of the target.
         */
        name?: string;

        /**
         * The destination number or SIP URI of the call.
         */
        to?: string;
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
   * conversation context, and the message text is generated by the assistant.
   */
  export interface SendMessage {
    send_message: { [key: string]: unknown };

    type: 'send_message';
  }
}

export interface AssistantsList {
  data: Array<InferenceEmbedding>;
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
   * ID of the model to use. You can use the
   * [Get models API](https://developers.telnyx.com/api-reference/chat/get-available-models)
   * to see all of your available models,
   */
  model: string;

  name: string;

  description?: string;

  /**
   * Map of dynamic variables and their values
   */
  dynamic_variables?: { [key: string]: unknown };

  /**
   * If the dynamic_variables_webhook_url is set for the assistant, we will send a
   * request at the start of the conversation. See our
   * [guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * for more information.
   */
  dynamic_variables_webhook_url?: string;

  enabled_features?: Array<EnabledFeatures>;

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
   * This is only needed when using third-party inference providers. The `identifier`
   * for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * that refers to your LLM provider's API key. Warning: Free plans are unlikely to
   * work with this integration.
   */
  llm_api_key_ref?: string;

  messaging_settings?: MessagingSettings;

  privacy_settings?: PrivacySettings;

  telephony_settings?: TelephonySettings;

  /**
   * The tools that the assistant can use. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  tools?: Array<AssistantTool>;

  transcription?: TranscriptionSettings;

  voice_settings?: VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: WidgetSettings;
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
   * The language of the audio to be transcribed. If not set, of if set to `auto`,
   * the model will automatically detect the language.
   */
  language?: string;

  /**
   * The speech to text model to be used by the voice assistant. All the deepgram
   * models are run on-premise.
   *
   * - `deepgram/flux` is optimized for turn-taking but is English-only.
   * - `deepgram/nova-3` is multi-lingual with automatic language detection but
   *   slightly higher latency.
   */
  model?:
    | 'deepgram/flux'
    | 'deepgram/nova-3'
    | 'deepgram/nova-2'
    | 'azure/fast'
    | 'distil-whisper/distil-large-v2'
    | 'openai/whisper-large-v3-turbo';

  /**
   * Region on third party cloud providers (currently Azure) if using one of their
   * models
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
   * Available only for deepgram/flux. Confidence required to trigger an end of turn.
   * Higher values = more reliable turn detection but slightly increased latency.
   */
  eot_threshold?: number;

  /**
   * Available only for deepgram/flux. Maximum milliseconds of silence before forcing
   * an end of turn, regardless of confidence.
   */
  eot_timeout_ms?: number;

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
     * choose one of the targets to transfer the call to.
     */
    targets: Array<Transfer.Target>;
  }

  export namespace Transfer {
    export interface Target {
      /**
       * The name of the target.
       */
      name?: string;

      /**
       * The destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface VoiceSettings {
  /**
   * The voice to be used by the voice assistant. Check the full list of
   * [available voices](https://developers.telnyx.com/api/call-control/list-text-to-speech-voices)
   * via our voices API. To use ElevenLabs, you must reference your ElevenLabs API
   * key as an integration secret under the `api_key_ref` field. See
   * [integration secrets documentation](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * for details. For Telnyx voices, use `Telnyx.<model_id>.<voice_id>` (e.g.
   * Telnyx.KokoroTTS.af_heart)
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
      properties?: unknown;

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
      properties?: unknown;

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
      properties?: unknown;

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

  /**
   * ID of the model to use. You can use the
   * [Get models API](https://developers.telnyx.com/api-reference/chat/get-available-models)
   * to see all of your available models,
   */
  model: string;

  name: string;

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

  enabled_features?: Array<EnabledFeatures>;

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
   * This is only needed when using third-party inference providers. The `identifier`
   * for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * that refers to your LLM provider's API key. Warning: Free plans are unlikely to
   * work with this integration.
   */
  llm_api_key_ref?: string;

  messaging_settings?: MessagingSettings;

  privacy_settings?: PrivacySettings;

  telephony_settings?: TelephonySettings;

  /**
   * The tools that the assistant can use. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  tools?: Array<AssistantTool>;

  transcription?: TranscriptionSettings;

  voice_settings?: VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: WidgetSettings;
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
   * If the dynamic_variables_webhook_url is set for the assistant, we will send a
   * request at the start of the conversation. See our
   * [guide](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   * for more information.
   */
  dynamic_variables_webhook_url?: string;

  enabled_features?: Array<EnabledFeatures>;

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
   * This is only needed when using third-party inference providers. The `identifier`
   * for an integration secret
   * [/v2/integration_secrets](https://developers.telnyx.com/api-reference/integration-secrets/create-a-secret)
   * that refers to your LLM provider's API key. Warning: Free plans are unlikely to
   * work with this integration.
   */
  llm_api_key_ref?: string;

  messaging_settings?: MessagingSettings;

  /**
   * ID of the model to use. You can use the
   * [Get models API](https://developers.telnyx.com/api-reference/chat/get-available-models)
   * to see all of your available models,
   */
  model?: string;

  name?: string;

  privacy_settings?: PrivacySettings;

  /**
   * Indicates whether the assistant should be promoted to the main version. Defaults
   * to true.
   */
  promote_to_main?: boolean;

  telephony_settings?: TelephonySettings;

  /**
   * The tools that the assistant can use. These may be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables)
   */
  tools?: Array<AssistantTool>;

  transcription?: TranscriptionSettings;

  voice_settings?: VoiceSettings;

  /**
   * Configuration settings for the assistant's web widget.
   */
  widget_settings?: WidgetSettings;
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

export declare namespace Assistants {
  export {
    type Assistant as Assistant,
    type AssistantTool as AssistantTool,
    type AssistantsList as AssistantsList,
    type EnabledFeatures as EnabledFeatures,
    type HangupTool as HangupTool,
    type HangupToolParams as HangupToolParams,
    type ImportMetadata as ImportMetadata,
    type InferenceEmbedding as InferenceEmbedding,
    type InferenceEmbeddingWebhookToolParams as InferenceEmbeddingWebhookToolParams,
    type InsightSettings as InsightSettings,
    type MessagingSettings as MessagingSettings,
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

  export { Tools as Tools, type ToolTestResponse as ToolTestResponse, type ToolTestParams as ToolTestParams };

  export {
    Versions as Versions,
    type UpdateAssistant as UpdateAssistant,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionDeleteParams as VersionDeleteParams,
    type VersionPromoteParams as VersionPromoteParams,
  };
}
