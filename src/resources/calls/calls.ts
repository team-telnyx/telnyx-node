// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import {
  AIAssistantJoinParticipant,
  ActionAddAIAssistantMessagesParams,
  ActionAddAIAssistantMessagesResponse,
  ActionAnswerParams,
  ActionAnswerResponse,
  ActionBridgeParams,
  ActionBridgeResponse,
  ActionEnqueueParams,
  ActionEnqueueResponse,
  ActionGatherParams,
  ActionGatherResponse,
  ActionGatherUsingAIParams,
  ActionGatherUsingAIResponse,
  ActionGatherUsingAudioParams,
  ActionGatherUsingAudioResponse,
  ActionGatherUsingSpeakParams,
  ActionGatherUsingSpeakResponse,
  ActionHangupParams,
  ActionHangupResponse,
  ActionJoinAIAssistantParams,
  ActionJoinAIAssistantResponse,
  ActionLeaveQueueParams,
  ActionLeaveQueueResponse,
  ActionPauseRecordingParams,
  ActionPauseRecordingResponse,
  ActionReferParams,
  ActionReferResponse,
  ActionRejectParams,
  ActionRejectResponse,
  ActionResumeRecordingParams,
  ActionResumeRecordingResponse,
  ActionSendDtmfParams,
  ActionSendDtmfResponse,
  ActionSendSipInfoParams,
  ActionSendSipInfoResponse,
  ActionSpeakParams,
  ActionSpeakResponse,
  ActionStartAIAssistantParams,
  ActionStartAIAssistantResponse,
  ActionStartConversationRelayParams,
  ActionStartConversationRelayResponse,
  ActionStartForkingParams,
  ActionStartForkingResponse,
  ActionStartNoiseSuppressionParams,
  ActionStartNoiseSuppressionResponse,
  ActionStartPlaybackParams,
  ActionStartPlaybackResponse,
  ActionStartRecordingParams,
  ActionStartRecordingResponse,
  ActionStartSiprecParams,
  ActionStartSiprecResponse,
  ActionStartStreamingParams,
  ActionStartStreamingResponse,
  ActionStartTranscriptionParams,
  ActionStartTranscriptionResponse,
  ActionStopAIAssistantParams,
  ActionStopAIAssistantResponse,
  ActionStopConversationRelayParams,
  ActionStopConversationRelayResponse,
  ActionStopForkingParams,
  ActionStopForkingResponse,
  ActionStopGatherParams,
  ActionStopGatherResponse,
  ActionStopNoiseSuppressionParams,
  ActionStopNoiseSuppressionResponse,
  ActionStopPlaybackParams,
  ActionStopPlaybackResponse,
  ActionStopRecordingParams,
  ActionStopRecordingResponse,
  ActionStopSiprecParams,
  ActionStopSiprecResponse,
  ActionStopStreamingParams,
  ActionStopStreamingResponse,
  ActionStopTranscriptionParams,
  ActionStopTranscriptionResponse,
  ActionSwitchSupervisorRoleParams,
  ActionSwitchSupervisorRoleResponse,
  ActionTransferParams,
  ActionTransferResponse,
  ActionUpdateClientStateParams,
  ActionUpdateClientStateResponse,
  Actions,
  AssistantMessage,
  AwsVoiceSettings,
  CallControlCommandResult,
  CallControlCommandResultWithConversationID,
  ConversationRelayInterruptible,
  DeepgramNova2Config,
  DeepgramNova3Config,
  DeveloperMessage,
  ElevenLabsVoiceSettings,
  GoogleTranscriptionLanguage,
  InterruptionSettings,
  Loopcount,
  StopRecordingRequest,
  SystemMessage,
  TelnyxTranscriptionLanguage,
  TelnyxVoiceSettings,
  ToolMessage,
  TranscriptionConfig,
  TranscriptionEngineAConfig,
  TranscriptionEngineAssemblyaiConfig,
  TranscriptionEngineAzureConfig,
  TranscriptionEngineBConfig,
  TranscriptionEngineDeepgramConfig,
  TranscriptionEngineGoogleConfig,
  TranscriptionEngineParakeetConfig,
  TranscriptionEngineSonioxConfig,
  TranscriptionEngineSpeechmaticsConfig,
  TranscriptionEngineTelnyxConfig,
  TranscriptionEngineXaiConfig,
  TranscriptionStartRequest,
  UserMessage,
} from './actions';
import * as AssistantsAPI from '../ai/assistants/assistants';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Calls extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Dial a number or SIP URI from a given connection. A successful response will
   * include a `call_leg_id` which can be used to correlate the command with
   * subsequent webhooks.
   *
   * **Expected Webhooks:**
   *
   * - `call.initiated`
   * - `call.answered` or `call.hangup`
   * - `call.hold` and `call.unhold` if the call is held/unheld
   * - `call.machine.detection.ended` if `answering_machine_detection` was requested
   * - `call.machine.greeting.ended` if `answering_machine_detection` was requested
   *   to detect the end of machine greeting
   * - `call.machine.premium.detection.ended` if
   *   `answering_machine_detection=premium` was requested
   * - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium`
   *   was requested and a beep was detected
   * - `call.deepfake_detection.result` if `deepfake_detection` was enabled
   * - `call.deepfake_detection.error` if `deepfake_detection` was enabled and an
   *   error occurred
   * - `streaming.started`, `streaming.stopped` or `streaming.failed` if `stream_url`
   *   was set
   *
   * When the `record` parameter is set to `record-from-answer`, the response will
   * include a `recording_id` field.
   *
   * @example
   * ```ts
   * const response = await client.calls.dial({
   *   connection_id: '7267xxxxxxxxxxxxxx',
   *   from: '+18005550101',
   *   to: '+18005550100 or sip:username@sip.telnyx.com;secure=srtp',
   * });
   * ```
   */
  dial(body: CallDialParams, options?: RequestOptions): APIPromise<CallDialResponse> {
    return this._client.post('/calls', { body, ...options });
  }

  /**
   * Returns the status of a call (data is available 10 minutes after call ended).
   *
   * @example
   * ```ts
   * const response = await client.calls.retrieveStatus(
   *   'call_control_id',
   * );
   * ```
   */
  retrieveStatus(callControlID: string, options?: RequestOptions): APIPromise<CallRetrieveStatusResponse> {
    return this._client.get(path`/calls/${callControlID}`, options);
  }
}

/**
 * AI Assistant configuration. All fields except `id` are optional — the
 * assistant's stored configuration will be used as fallback for any omitted
 * fields.
 */
export interface CallAssistantRequest {
  /**
   * The identifier of the AI assistant to use.
   */
  id: string;

  /**
   * Map of dynamic variables and their default values. Dynamic variables can be
   * referenced in instructions, greeting, and tool definitions using the
   * `{{variable_name}}` syntax. Call-control-agent automatically merges in
   * `telnyx_call_*` variables (telnyx_call_to, telnyx_call_from,
   * telnyx_conversation_channel, telnyx_agent_target, telnyx_end_user_target,
   * telnyx_call_caller_id_name) and custom header variables.
   */
  dynamic_variables?: { [key: string]: string | number | boolean };

  /**
   * External LLM configuration for bringing your own LLM endpoint.
   */
  external_llm?: CallAssistantRequest.ExternalLlm;

  /**
   * Fallback LLM configuration used when the primary LLM provider is unavailable.
   */
  fallback_config?: CallAssistantRequest.FallbackConfig;

  /**
   * Initial greeting text spoken when the assistant starts. Can be plain text for
   * any voice or SSML for `AWS.Polly.<voice_id>` voices. There is a 3,000 character
   * limit.
   */
  greeting?: string;

  /**
   * System instructions for the voice assistant. Can be templated with
   * [dynamic variables](https://developers.telnyx.com/docs/inference/ai-assistants/dynamic-variables).
   * This will overwrite the instructions set in the assistant configuration.
   */
  instructions?: string;

  /**
   * Integration secret identifier for the LLM provider API key. Use this field to
   * reference an
   * [integration secret](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   * containing your LLM provider API key. Supports any LLM provider (OpenAI,
   * Anthropic, etc.).
   */
  llm_api_key_ref?: string;

  /**
   * MCP (Model Context Protocol) server configurations for extending the assistant's
   * capabilities with external tools and data sources.
   */
  mcp_servers?: Array<{ [key: string]: unknown }>;

  /**
   * LLM model override for this call. If omitted, the assistant's configured model
   * is used.
   */
  model?: string;

  /**
   * Assistant name override for this call.
   */
  name?: string;

  /**
   * Observability configuration for the assistant session, including Langfuse
   * integration for tracing and monitoring.
   */
  observability_settings?: { [key: string]: unknown };

  /**
   * @deprecated This field is deprecated and will be removed soon
   */
  openai_api_key_ref?: string;

  /**
   * Inline tool definitions available to the assistant (webhook, retrieval,
   * transfer, hangup, etc.). Overrides the assistant's stored tools if provided.
   */
  tools?: Array<
    | Shared.BookAppointmentTool
    | Shared.CheckAvailabilityTool
    | AssistantsAPI.WebhookTool
    | AssistantsAPI.HangupTool
    | AssistantsAPI.TransferTool
    | Shared.CallControlRetrievalTool
  >;
}

export namespace CallAssistantRequest {
  /**
   * External LLM configuration for bringing your own LLM endpoint.
   */
  export interface ExternalLlm {
    /**
     * Authentication method used when connecting to the external LLM endpoint.
     */
    authentication_method?: 'token' | 'certificate';

    /**
     * Base URL for the external LLM endpoint.
     */
    base_url?: string;

    /**
     * Integration secret identifier for the client certificate used with certificate
     * authentication.
     */
    certificate_ref?: string;

    /**
     * When enabled, Telnyx forwards the assistant's dynamic variables to the external
     * LLM endpoint. Defaults to false. The chat completion request includes a
     * top-level `extra_metadata` object when dynamic variables are available. For
     * example:
     * `{"extra_metadata":{"customer_name":"Jane","account_id":"acct_789","telnyx_agent_target":"+13125550100","telnyx_end_user_target":"+13125550123"}}`.
     */
    forward_metadata?: boolean;

    /**
     * Integration secret identifier for the external LLM API key.
     */
    llm_api_key_ref?: string;

    /**
     * Model identifier to use with the external LLM endpoint.
     */
    model?: string;

    /**
     * URL used to retrieve an access token when certificate authentication is enabled.
     */
    token_retrieval_url?: string;

    [k: string]: unknown;
  }

  /**
   * Fallback LLM configuration used when the primary LLM provider is unavailable.
   */
  export interface FallbackConfig {
    /**
     * External LLM fallback configuration.
     */
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

    [k: string]: unknown;
  }

  export namespace FallbackConfig {
    /**
     * External LLM fallback configuration.
     */
    export interface ExternalLlm {
      /**
       * Authentication method used when connecting to the external LLM endpoint.
       */
      authentication_method?: 'token' | 'certificate';

      /**
       * Base URL for the external LLM endpoint.
       */
      base_url?: string;

      /**
       * Integration secret identifier for the client certificate used with certificate
       * authentication.
       */
      certificate_ref?: string;

      /**
       * When enabled, Telnyx forwards the assistant's dynamic variables to the external
       * LLM endpoint. Defaults to false. The chat completion request includes a
       * top-level `extra_metadata` object when dynamic variables are available. For
       * example:
       * `{"extra_metadata":{"customer_name":"Jane","account_id":"acct_789","telnyx_agent_target":"+13125550100","telnyx_end_user_target":"+13125550123"}}`.
       */
      forward_metadata?: boolean;

      /**
       * Integration secret identifier for the external LLM API key.
       */
      llm_api_key_ref?: string;

      /**
       * Model identifier to use with the external LLM endpoint.
       */
      model?: string;

      /**
       * URL used to retrieve an access token when certificate authentication is enabled.
       */
      token_retrieval_url?: string;
    }
  }
}

/**
 * Starts a Conversation Relay session automatically when the answered/dialed call
 * is answered. This embedded shape is supported on `answer` and `dial`. It uses
 * public field names (`url`, `dtmf_detection`, `greeting`, `voice`, `language`,
 * etc.) and maps them to the underlying Conversation Relay action. `client_state`,
 * `tts_language`, and `transcription_language` inside this object are ignored; use
 * the parent command's `client_state` and `command_id` fields instead.
 */
export interface ConversationRelayEmbeddedConfig {
  /**
   * WebSocket URL for your Conversation Relay server. Must start with `ws://` or
   * `wss://`.
   */
  url: string;

  /**
   * Custom key-value parameters forwarded to the relay session as assistant dynamic
   * variables.
   */
  custom_parameters?: { [key: string]: unknown };

  /**
   * Enable DTMF detection for the relay session.
   */
  dtmf_detection?: boolean;

  /**
   * Text played when the relay session starts.
   */
  greeting?: string;

  /**
   * Controls when caller input can interrupt assistant speech. `any` allows speech
   * or DTMF interruptions; `none` disables interruptions; `speech` allows speech
   * only; `dtmf` allows DTMF only.
   */
  interruptible?: ActionsAPI.ConversationRelayInterruptible;

  /**
   * Controls when caller input can interrupt assistant speech. `any` allows speech
   * or DTMF interruptions; `none` disables interruptions; `speech` allows speech
   * only; `dtmf` allows DTMF only.
   */
  interruptible_greeting?: ActionsAPI.ConversationRelayInterruptible;

  /**
   * Settings for handling caller interruptions during Conversation Relay speech.
   */
  interruption_settings?: ConversationRelayInterruptionSettings;

  /**
   * Default language for both text-to-speech and speech recognition.
   */
  language?: string;

  /**
   * Per-language TTS and transcription settings.
   */
  languages?: Array<ConversationRelayLanguage>;

  /**
   * Structured voice provider. Must be supplied together with `structured_provider`.
   */
  provider?: string;

  /**
   * Provider-specific structured voice settings. Must be supplied together with
   * `provider`; Telnyx sends the value as the nested provider configuration for
   * Conversation Relay.
   */
  structured_provider?: { [key: string]: unknown };

  /**
   * Engine to use for speech recognition. Legacy values `A` - `Google`, `B` -
   * `Telnyx` are supported for backward compatibility. For Conversation Relay, use
   * this field with `transcription_engine_config`; the `transcription` object is not
   * supported.
   */
  transcription_engine?:
    | 'Google'
    | 'Telnyx'
    | 'Deepgram'
    | 'Azure'
    | 'xAI'
    | 'AssemblyAI'
    | 'Speechmatics'
    | 'Soniox'
    | 'A'
    | 'B';

  /**
   * Engine-specific transcription settings for Conversation Relay. This accepts the
   * same provider-specific options used by the Call Transcription Start command,
   * such as `transcription_model`, without requiring the engine discriminator to be
   * repeated inside this object.
   */
  transcription_engine_config?: { [key: string]: unknown };

  /**
   * Text-to-speech provider. If omitted, Telnyx derives it from `voice` or
   * `provider`.
   */
  tts_provider?: string;

  /**
   * The voice to be used by the voice assistant. Currently we support ElevenLabs,
   * Telnyx and AWS voices.
   *
   * **Supported Providers:**
   *
   * - **AWS:** Use `AWS.Polly.<VoiceId>` (e.g., `AWS.Polly.Joanna`). For neural
   *   voices, which provide more realistic, human-like speech, append `-Neural` to
   *   the `VoiceId` (e.g., `AWS.Polly.Joanna-Neural`). Check the
   *   [available voices](https://docs.aws.amazon.com/polly/latest/dg/available-voices.html)
   *   for compatibility.
   * - **Azure:** Use `Azure.<VoiceId>. (e.g. Azure.en-CA-ClaraNeural,
   *   Azure.en-CA-LiamNeural, Azure.en-US-BrianMultilingualNeural,
   *   Azure.en-US-Ava:DragonHDLatestNeural. For a complete list of voices, go to
   *   [Azure Voice Gallery](https://speech.microsoft.com/portal/voicegallery).)
   * - **ElevenLabs:** Use `ElevenLabs.<ModelId>.<VoiceId>` (e.g.,
   *   `ElevenLabs.BaseModel.John`). The `ModelId` part is optional. To use
   *   ElevenLabs, you must provide your ElevenLabs API key as an integration secret
   *   under `"voice_settings": {"api_key_ref": "<secret_id>"}`. See
   *   [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   *   for details. Check
   *   [available voices](https://elevenlabs.io/docs/api-reference/get-voices).
   * - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`
   * - **Inworld:** Use `Inworld.<ModelId>.<VoiceId>` (e.g., `Inworld.Mini.Loretta`,
   *   `Inworld.Max.Oliver`, `Inworld.TTS2.Loretta`). Supported models: `Mini`,
   *   `Max`, `TTS2`.
   * - **Fish Audio:** Use `FishAudio.<ModelId>.<VoiceId>` (e.g.,
   *   `FishAudio.s2.1-pro.<reference_id>`). Supported models: `s2.1-pro`, `s2-pro`,
   *   `s1`. `VoiceId` is a Fish Voice-Library reference ID.
   * - **xAI:** Use `xAI.<VoiceId>` (e.g., `xAI.eve`). Available voices: `eve`,
   *   `ara`, `rex`, `sal`, `leo`.
   */
  voice?: string;

  /**
   * The settings associated with the voice selected
   */
  voice_settings?:
    | ActionsAPI.ElevenLabsVoiceSettings
    | ActionsAPI.TelnyxVoiceSettings
    | ActionsAPI.AwsVoiceSettings
    | Shared.MinimaxVoiceSettings
    | Shared.AzureVoiceSettings
    | Shared.RimeVoiceSettings
    | Shared.ResembleVoiceSettings
    | Shared.InworldVoiceSettings
    | Shared.XaiVoiceSettings;
}

/**
 * Settings for handling caller interruptions during Conversation Relay speech.
 */
export interface ConversationRelayInterruptionSettings {
  /**
   * Legacy boolean form. `true` is equivalent to `interruptible=any`; `false` is
   * equivalent to `interruptible=none`.
   */
  enable?: boolean;

  /**
   * Controls when caller input can interrupt assistant speech. `any` allows speech
   * or DTMF interruptions; `none` disables interruptions; `speech` allows speech
   * only; `dtmf` allows DTMF only.
   */
  interruptible?: ActionsAPI.ConversationRelayInterruptible;

  /**
   * Controls when caller input can interrupt assistant speech. `any` allows speech
   * or DTMF interruptions; `none` disables interruptions; `speech` allows speech
   * only; `dtmf` allows DTMF only.
   */
  interruptible_greeting?: ActionsAPI.ConversationRelayInterruptible;

  /**
   * Controls when caller input can interrupt assistant speech. `any` allows speech
   * or DTMF interruptions; `none` disables interruptions; `speech` allows speech
   * only; `dtmf` allows DTMF only.
   */
  welcome_greeting_interruptible?: ActionsAPI.ConversationRelayInterruptible;
}

/**
 * Language-specific TTS and transcription settings for Conversation Relay.
 */
export interface ConversationRelayLanguage {
  /**
   * BCP 47 language tag for this language configuration.
   */
  language: string;

  /**
   * Conversation Relay speech model. Prefer
   * `transcription_engine_config.transcription_model` when configuring
   * speech-to-text.
   */
  speech_model?: string;

  /**
   * Engine to use for speech recognition. Legacy values `A` - `Google`, `B` -
   * `Telnyx` are supported for backward compatibility. When provided in a
   * Conversation Relay language entry, Telnyx derives `transcription_provider` and
   * `speech_model` for that language.
   */
  transcription_engine?:
    | 'Google'
    | 'Telnyx'
    | 'Deepgram'
    | 'Azure'
    | 'xAI'
    | 'AssemblyAI'
    | 'Speechmatics'
    | 'Soniox'
    | 'A'
    | 'B';

  /**
   * Engine-specific transcription settings for Conversation Relay. This accepts the
   * same provider-specific options used by the Call Transcription Start command,
   * such as `transcription_model`, without requiring the engine discriminator to be
   * repeated inside this object.
   */
  transcription_engine_config?: { [key: string]: unknown };

  /**
   * Conversation Relay transcription provider name. Prefer `transcription_engine`
   * when configuring speech-to-text.
   */
  transcription_provider?: string;

  /**
   * Text-to-speech provider for this language. If omitted and `voice` is provided,
   * Telnyx derives the provider from the voice identifier.
   */
  tts_provider?: string;

  /**
   * Voice identifier for this language.
   */
  voice?: string;

  /**
   * The settings associated with the voice selected
   */
  voice_settings?:
    | ActionsAPI.ElevenLabsVoiceSettings
    | ActionsAPI.TelnyxVoiceSettings
    | ActionsAPI.AwsVoiceSettings
    | Shared.MinimaxVoiceSettings
    | Shared.AzureVoiceSettings
    | Shared.RimeVoiceSettings
    | Shared.ResembleVoiceSettings
    | Shared.InworldVoiceSettings
    | Shared.XaiVoiceSettings;
}

export interface CustomSipHeader {
  /**
   * The name of the header to add.
   */
  name: string;

  /**
   * The value of the header.
   */
  value: string;
}

export interface DialogflowConfig {
  /**
   * Enable sentiment analysis from Dialogflow.
   */
  analyze_sentiment?: boolean;

  /**
   * Enable partial automated agent reply from Dialogflow.
   */
  partial_automated_agent_reply?: boolean;
}

export interface SipHeader {
  /**
   * The name of the header to add.
   */
  name: 'User-to-User';

  /**
   * The value of the header.
   */
  value: string;
}

/**
 * Use this field to modify sound effects, for example adjust the pitch.
 */
export interface SoundModifications {
  /**
   * Adjust the pitch in octaves, values should be between -1 and 1, default 0
   */
  octaves?: number;

  /**
   * Set the pitch directly, value should be > 0, default 1 (lower = lower tone)
   */
  pitch?: number;

  /**
   * Adjust the pitch in semitones, values should be between -14 and 14, default 0
   */
  semitone?: number;

  /**
   * The track to which the sound modifications will be applied. Accepted values are
   * `inbound` or `outbound`
   */
  track?: string;
}

/**
 * Indicates codec for bidirectional streaming RTP payloads. Used only with
 * stream_bidirectional_mode=rtp. Case sensitive.
 */
export type StreamBidirectionalCodec = 'PCMU' | 'PCMA' | 'G722' | 'OPUS' | 'AMR-WB' | 'L16';

/**
 * Configures method of bidirectional streaming (mp3, rtp).
 */
export type StreamBidirectionalMode = 'mp3' | 'rtp';

/**
 * Audio sampling rate.
 */
export type StreamBidirectionalSamplingRate = 8000 | 16000 | 22050 | 24000 | 48000;

/**
 * Specifies which call legs should receive the bidirectional stream audio.
 */
export type StreamBidirectionalTargetLegs = 'both' | 'self' | 'opposite';

/**
 * Specifies the codec to be used for the streamed audio. When set to 'default' or
 * when transcoding is not possible, the codec from the call will be used.
 */
export type StreamCodec = 'PCMU' | 'PCMA' | 'G722' | 'OPUS' | 'AMR-WB' | 'L16' | 'default';

export interface CallDialResponse {
  data?: CallDialResponse.Data;
}

export namespace CallDialResponse {
  export interface Data {
    /**
     * Unique identifier and token for controlling the call.
     */
    call_control_id: string;

    /**
     * ID that is unique to the call and can be used to correlate webhook events
     */
    call_leg_id: string;

    /**
     * ID that is unique to the call session and can be used to correlate webhook
     * events. Call session is a group of related call legs that logically belong to
     * the same phone call, e.g. an inbound and outbound leg of a transferred call
     */
    call_session_id: string;

    /**
     * Indicates whether the call is alive or not. For Dial command it will always be
     * `false` (dialing is asynchronous).
     */
    is_alive: boolean;

    record_type: 'call';

    /**
     * Indicates the duration of the call in seconds
     */
    call_duration?: number;

    /**
     * State received from a command.
     */
    client_state?: string;

    /**
     * ISO 8601 formatted date indicating when the call ended. Only present when the
     * call is not alive
     */
    end_time?: string;

    /**
     * The ID of the recording. Only present when the record parameter is set to
     * record-from-answer.
     */
    recording_id?: string;

    /**
     * ISO 8601 formatted date indicating when the call started
     */
    start_time?: string;
  }
}

export interface CallRetrieveStatusResponse {
  data?: CallRetrieveStatusResponse.Data;
}

export namespace CallRetrieveStatusResponse {
  export interface Data {
    /**
     * Unique identifier and token for controlling the call.
     */
    call_control_id: string;

    /**
     * ID that is unique to the call and can be used to correlate webhook events
     */
    call_leg_id: string;

    /**
     * ID that is unique to the call session and can be used to correlate webhook
     * events. Call session is a group of related call legs that logically belong to
     * the same phone call, e.g. an inbound and outbound leg of a transferred call
     */
    call_session_id: string;

    /**
     * Indicates whether the call is alive or not. For Dial command it will always be
     * `false` (dialing is asynchronous).
     */
    is_alive: boolean;

    record_type: 'call';

    /**
     * Indicates the duration of the call in seconds
     */
    call_duration?: number;

    /**
     * State received from a command.
     */
    client_state?: string;

    /**
     * ISO 8601 formatted date indicating when the call ended. Only present when the
     * call is not alive
     */
    end_time?: string;

    /**
     * ISO 8601 formatted date indicating when the call started
     */
    start_time?: string;
  }
}

export interface CallDialParams {
  /**
   * The ID of the Call Control App (formerly ID of the connection) to be used when
   * dialing the destination.
   */
  connection_id: string;

  /**
   * The `from` number to be used as the caller id presented to the destination (`to`
   * number). The number should be in +E164 format.
   */
  from: string;

  /**
   * The DID or SIP URI to dial out to. Multiple DID or SIP URIs can be provided
   * using an array of strings. For SIP URI destinations, append `;secure=true` or
   * `;secure=srtp` to enable SRTP media encryption for that endpoint, or
   * `;secure=dtls` to enable DTLS media encryption for that endpoint. If
   * `media_encryption` is set to `SRTP` or `DTLS`, it takes precedence over any
   * per-endpoint `secure` URI parameter. For a single string destination, you may
   * append a comma followed by DTMF digits (e.g. `+18004247767,200`) to play those
   * digits as DTMF once the called party answers — equivalent to setting
   * `send_digits_on_answer` separately. If both are present, the explicit
   * `send_digits_on_answer` parameter takes precedence. This shorthand is not
   * supported when `to` is an array.
   */
  to: string | Array<string>;

  /**
   * Enables Answering Machine Detection. Telnyx offers Premium and Standard
   * detections. With Premium detection, when a call is answered, Telnyx runs
   * real-time detection and sends a `call.machine.premium.detection.ended` webhook
   * with one of the following results: `human_residence`, `human_business`,
   * `machine`, `silence` or `fax_detected`. If we detect a beep, we also send a
   * `call.machine.premium.greeting.ended` webhook with the result of
   * `beep_detected`. If we detect a beep before
   * `call.machine.premium.detection.ended` we only send
   * `call.machine.premium.greeting.ended`, and if we detect a beep after
   * `call.machine.premium.detection.ended`, we send both webhooks. With Standard
   * detection, when a call is answered, Telnyx runs real-time detection to determine
   * if it was picked up by a human or a machine and sends an
   * `call.machine.detection.ended` webhook with the analysis result. If
   * `greeting_end` or `detect_words` is used and a `machine` is detected, you will
   * receive another `call.machine.greeting.ended` webhook when the answering machine
   * greeting ends with a beep or silence. If `detect_beep` is used, you will only
   * receive `call.machine.greeting.ended` if a beep is detected.
   */
  answering_machine_detection?:
    | 'premium'
    | 'detect'
    | 'detect_beep'
    | 'detect_words'
    | 'greeting_end'
    | 'disabled';

  /**
   * Optional configuration parameters to modify 'answering_machine_detection'
   * performance. Only `total_analysis_time_millis` and `greeting_duration_millis`
   * parameters are applicable when `premium` is selected as
   * answering_machine_detection.
   */
  answering_machine_detection_config?: CallDialParams.AnsweringMachineDetectionConfig;

  /**
   * AI Assistant configuration. All fields except `id` are optional — the
   * assistant's stored configuration will be used as fallback for any omitted
   * fields.
   */
  assistant?: CallAssistantRequest;

  /**
   * The URL of a file to be played back to the callee when the call is answered. The
   * URL can point to either a WAV or MP3 file. media_name and audio_url cannot be
   * used together in one request.
   */
  audio_url?: string;

  /**
   * Use this field to set the Billing Group ID for the call. Must be a valid and
   * existing Billing Group ID.
   */
  billing_group_id?: string;

  /**
   * Indicates the intent to bridge this call with the call specified in link_to.
   * When bridge_intent is true, link_to becomes required and the from number will be
   * overwritten by the from number from the linked call.
   */
  bridge_intent?: boolean;

  /**
   * Whether to automatically bridge answered call to the call specified in link_to.
   * When bridge_on_answer is true, link_to becomes required.
   */
  bridge_on_answer?: boolean;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore others Dial
   * commands with the same `command_id`.
   */
  command_id?: string;

  /**
   * Optional configuration parameters to dial new participant into a conference.
   */
  conference_config?: CallDialParams.ConferenceConfig;

  /**
   * Starts a Conversation Relay session automatically when the answered/dialed call
   * is answered. This embedded shape is supported on `answer` and `dial`. It uses
   * public field names (`url`, `dtmf_detection`, `greeting`, `voice`, `language`,
   * etc.) and maps them to the underlying Conversation Relay action. `client_state`,
   * `tts_language`, and `transcription_language` inside this object are ignored; use
   * the parent command's `client_state` and `command_id` fields instead.
   */
  conversation_relay_config?: ConversationRelayEmbeddedConfig;

  /**
   * Custom headers to be added to the SIP INVITE.
   */
  custom_headers?: Array<CustomSipHeader>;

  /**
   * Enables deepfake detection on the call. When enabled, audio from the remote
   * party is streamed to a detection service that analyzes whether the voice is
   * AI-generated. Results are delivered via the `call.deepfake_detection.result`
   * webhook.
   */
  deepfake_detection?: CallDialParams.DeepfakeDetection;

  dialogflow_config?: DialogflowConfig;

  /**
   * Enables Dialogflow for the current call. The default value is false.
   */
  enable_dialogflow?: boolean;

  /**
   * The `from_display_name` string to be used as the caller id name (SIP From
   * Display Name) presented to the destination (`to` number). The string should have
   * a maximum of 128 characters, containing only letters, numbers, spaces, and
   * -\_~!.+ special characters. If ommited, the display name will be the same as the
   * number in the `from` field.
   */
  from_display_name?: string;

  /**
   * Use another call's control id for sharing the same call session id
   */
  link_to?: string;

  /**
   * Defines whether media should be encrypted on the call. For SIP URI destinations,
   * media encryption can also be requested per endpoint with the `secure` URI
   * parameter: `;secure=true` or `;secure=srtp` enables SRTP, and `;secure=dtls`
   * enables DTLS. This parameter, when set to `SRTP` or `DTLS`, takes precedence
   * over the per-endpoint `secure` value.
   */
  media_encryption?: 'disabled' | 'SRTP' | 'DTLS';

  /**
   * The media_name of a file to be played back to the callee when the call is
   * answered. The media_name must point to a file previously uploaded to
   * api.telnyx.com/v2/media by the same user/organization. The file must either be a
   * WAV or MP3 file.
   */
  media_name?: string;

  /**
   * If supplied with the value `self`, the current leg will be parked after
   * unbridge. If not set, the default behavior is to hang up the leg. When
   * park_after_unbridge is set, link_to becomes required.
   */
  park_after_unbridge?: string;

  /**
   * The list of comma-separated codecs in a preferred order for the forked media to
   * be received.
   */
  preferred_codecs?: string;

  /**
   * Prevents bridging and hangs up the call if the target is already bridged.
   * Disabled by default.
   */
  prevent_double_bridge?: boolean;

  /**
   * Indicates the privacy level to be used for the call. When set to `id`, caller ID
   * information (name and number) will be hidden from the called party. When set to
   * `none` or omitted, caller ID will be shown normally.
   */
  privacy?: 'id' | 'none';

  /**
   * Start recording automatically after an event. Disabled by default.
   */
  record?: 'record-from-answer';

  /**
   * Defines which channel should be recorded ('single' or 'dual') when `record` is
   * specified.
   */
  record_channels?: 'single' | 'dual';

  /**
   * The custom recording file name to be used instead of the default `call_leg_id`.
   * Telnyx will still add a Unix timestamp suffix.
   */
  record_custom_file_name?: string;

  /**
   * Defines the format of the recording ('wav' or 'mp3') when `record` is specified.
   */
  record_format?: 'wav' | 'mp3';

  /**
   * Defines the maximum length for the recording in seconds when `record` is
   * specified. The minimum value is 0. The maximum value is 43200. The default value
   * is 0 (infinite).
   */
  record_max_length?: number;

  /**
   * The number of seconds that Telnyx will wait for the recording to be stopped if
   * silence is detected when `record` is specified. The timer only starts when the
   * speech is detected. Please note that call transcription is used to detect
   * silence and the related charge will be applied. The minimum value is 0. The
   * default value is 0 (infinite).
   */
  record_timeout_secs?: number;

  /**
   * The audio track to be recorded. Can be either `both`, `inbound` or `outbound`.
   * If only single track is specified (`inbound`, `outbound`), `channels`
   * configuration is ignored and it will be recorded as mono (single channel).
   */
  record_track?: 'both' | 'inbound' | 'outbound';

  /**
   * When set to `trim-silence`, silence will be removed from the beginning and end
   * of the recording.
   */
  record_trim?: 'trim-silence';

  /**
   * Whether to keep trying the remaining routing paths (e.g. alternate
   * providers/gateways) for the same destination after `timeout_secs` is reached for
   * the current attempt. When set to `false`, reaching `timeout_secs` aborts the
   * entire dial attempt and the `call.hangup` webhook reports a `hangup_cause` of
   * `no_answer` instead of `timeout`.
   */
  retry_on_timeout?: boolean;

  /**
   * DTMF digits to send automatically after the called party answers. Useful for
   * reaching an extension behind an IVR (e.g. `"200"` to dial extension 200 once the
   * called party picks up). Allowed characters: `0-9`, `A-D`, `w` (0.5s pause), `W`
   * (1s pause), `*`, `#`. Maximum 64 characters. When omitted, no automatic DTMF is
   * sent. May also be supplied inline by appending `,<digits>` to `to` (e.g.
   * `to=+18004247767,200`); if both forms are present, this explicit field takes
   * precedence.
   */
  send_digits_on_answer?: string;

  /**
   * Generate silence RTP packets when no transmission available.
   */
  send_silence_when_idle?: boolean;

  /**
   * SIP Authentication password used for SIP challenges.
   */
  sip_auth_password?: string;

  /**
   * SIP Authentication username used for SIP challenges.
   */
  sip_auth_username?: string;

  /**
   * SIP headers to be added to the SIP INVITE request. Currently only User-to-User
   * header is supported.
   */
  sip_headers?: Array<SipHeader>;

  /**
   * Defines the SIP region to be used for the call.
   */
  sip_region?: 'US' | 'Europe' | 'Canada' | 'Australia' | 'Middle East';

  /**
   * Defines SIP transport protocol to be used on the call.
   */
  sip_transport_protocol?: 'UDP' | 'TCP' | 'TLS';

  /**
   * Use this field to modify sound effects, for example adjust the pitch.
   */
  sound_modifications?: SoundModifications;

  /**
   * An authentication token to be sent as part of the WebSocket connection when
   * using streaming. Maximum length is 4000 characters.
   */
  stream_auth_token?: string;

  /**
   * Indicates codec for bidirectional streaming RTP payloads. Used only with
   * stream_bidirectional_mode=rtp. Case sensitive.
   */
  stream_bidirectional_codec?: StreamBidirectionalCodec;

  /**
   * Configures method of bidirectional streaming (mp3, rtp).
   */
  stream_bidirectional_mode?: StreamBidirectionalMode;

  /**
   * Audio sampling rate.
   */
  stream_bidirectional_sampling_rate?: StreamBidirectionalSamplingRate;

  /**
   * Specifies which call legs should receive the bidirectional stream audio.
   */
  stream_bidirectional_target_legs?: StreamBidirectionalTargetLegs;

  /**
   * Specifies the codec to be used for the streamed audio. When set to 'default' or
   * when transcoding is not possible, the codec from the call will be used.
   */
  stream_codec?: StreamCodec;

  /**
   * Establish websocket connection before dialing the destination. This is useful
   * for cases where the websocket connection takes a long time to establish.
   */
  stream_establish_before_call_originate?: boolean;

  /**
   * Specifies which track should be streamed.
   */
  stream_track?: 'inbound_track' | 'outbound_track' | 'both_tracks';

  /**
   * The destination WebSocket address where the stream is going to be delivered.
   */
  stream_url?: string;

  /**
   * The call leg which will be supervised by the new call.
   */
  supervise_call_control_id?: string;

  /**
   * The role of the supervisor call. 'barge' means that supervisor call hears and is
   * being heard by both ends of the call (caller & callee). 'whisper' means that
   * only supervised_call_control_id hears supervisor but supervisor can hear
   * everything. 'monitor' means that nobody can hear supervisor call, but supervisor
   * can hear everything on the call.
   */
  supervisor_role?: 'barge' | 'whisper' | 'monitor';

  /**
   * Sets the maximum duration of a Call Control Leg in seconds. If the time limit is
   * reached, the call will hangup and a `call.hangup` webhook with a `hangup_cause`
   * of `time_limit` will be sent. For example, by setting a time limit of 120
   * seconds, a Call Leg will be automatically terminated two minutes after being
   * answered. The default time limit is 14400 seconds or 4 hours and this is also
   * the maximum allowed call length.
   */
  time_limit_secs?: number;

  /**
   * The number of seconds that Telnyx will wait for the call to be answered by the
   * destination to which it is being called. If the timeout is reached before an
   * answer is received, the call will hangup and a `call.hangup` webhook with a
   * `hangup_cause` of `timeout` will be sent. Minimum value is 5 seconds. Maximum
   * value is 600 seconds.
   */
  timeout_secs?: number;

  /**
   * Enable transcription upon call answer. The default value is false.
   */
  transcription?: boolean;

  transcription_config?: ActionsAPI.TranscriptionStartRequest;

  /**
   * A map of event types to retry policies. Each retry policy contains an array of
   * `retries_ms` specifying the delays between retry attempts in milliseconds.
   * Maximum 5 retries, total delay cannot exceed 60 seconds.
   */
  webhook_retries_policies?: { [key: string]: CallDialParams.WebhookRetriesPolicies };

  /**
   * Use this field to override the URL for which Telnyx will send subsequent
   * webhooks to for this call.
   */
  webhook_url?: string;

  /**
   * HTTP request type used for `webhook_url`.
   */
  webhook_url_method?: 'POST' | 'GET';

  /**
   * A map of event types to webhook URLs. When an event of the specified type
   * occurs, the webhook URL associated with that event type will be called instead
   * of the default webhook URL. Events not mapped here will use the default webhook
   * URL.
   */
  webhook_urls?: { [key: string]: string };

  /**
   * HTTP request method to invoke `webhook_urls`.
   */
  webhook_urls_method?: 'POST' | 'GET';
}

export namespace CallDialParams {
  /**
   * Optional configuration parameters to modify 'answering_machine_detection'
   * performance. Only `total_analysis_time_millis` and `greeting_duration_millis`
   * parameters are applicable when `premium` is selected as
   * answering_machine_detection.
   */
  export interface AnsweringMachineDetectionConfig {
    /**
     * Silence duration threshold after a greeting message or voice for it be
     * considered human.
     */
    after_greeting_silence_millis?: number;

    /**
     * Maximum threshold for silence between words.
     */
    between_words_silence_millis?: number;

    /**
     * Maximum threshold of a human greeting. If greeting longer than this value,
     * considered machine.
     */
    greeting_duration_millis?: number;

    /**
     * If machine already detected, maximum threshold for silence between words. If
     * exceeded, the greeting is considered ended.
     */
    greeting_silence_duration_millis?: number;

    /**
     * If machine already detected, maximum timeout threshold to determine the end of
     * the machine greeting.
     */
    greeting_total_analysis_time_millis?: number;

    /**
     * If initial silence duration is greater than this value, consider it a machine.
     */
    initial_silence_millis?: number;

    /**
     * If number of detected words is greater than this value, consder it a machine.
     */
    maximum_number_of_words?: number;

    /**
     * If a single word lasts longer than this threshold, consider it a machine.
     */
    maximum_word_length_millis?: number;

    /**
     * Minimum noise threshold for any analysis.
     */
    silence_threshold?: number;

    /**
     * Maximum timeout threshold for overall detection.
     */
    total_analysis_time_millis?: number;
  }

  /**
   * Optional configuration parameters to dial new participant into a conference.
   */
  export interface ConferenceConfig {
    /**
     * Conference ID to be joined
     */
    id?: string;

    /**
     * Whether a beep sound should be played when the participant joins and/or leaves
     * the conference. Can be used to override the conference-level setting.
     */
    beep_enabled?: 'always' | 'never' | 'on_enter' | 'on_exit';

    /**
     * Conference name to be joined
     */
    conference_name?: string;

    /**
     * Controls the moment when dialled call is joined into conference. If set to
     * `true` user will be joined as soon as media is available (ringback). If `false`
     * user will be joined when call is answered. Defaults to `true`
     */
    early_media?: boolean;

    /**
     * Whether the conference should end and all remaining participants be hung up
     * after the participant leaves the conference. Defaults to "false".
     */
    end_conference_on_exit?: boolean;

    /**
     * Whether the participant should be put on hold immediately after joining the
     * conference. Defaults to "false".
     */
    hold?: boolean;

    /**
     * The URL of a file to be played to the participant when they are put on hold
     * after joining the conference. hold_media_name and hold_audio_url cannot be used
     * together in one request. Takes effect only when "start_conference_on_create" is
     * set to "false". This property takes effect only if "hold" is set to "true".
     */
    hold_audio_url?: string;

    /**
     * The media_name of a file to be played to the participant when they are put on
     * hold after joining the conference. The media_name must point to a file
     * previously uploaded to api.telnyx.com/v2/media by the same user/organization.
     * The file must either be a WAV or MP3 file. Takes effect only when
     * "start_conference_on_create" is set to "false". This property takes effect only
     * if "hold" is set to "true".
     */
    hold_media_name?: string;

    /**
     * Whether the participant should be muted immediately after joining the
     * conference. Defaults to "false".
     */
    mute?: boolean;

    /**
     * Whether the conference should end after the participant leaves the conference.
     * NOTE this doesn't hang up the other participants. Defaults to "false".
     */
    soft_end_conference_on_exit?: boolean;

    /**
     * Whether the conference should be started on creation. If the conference isn't
     * started all participants that join are automatically put on hold. Defaults to
     * "true".
     */
    start_conference_on_create?: boolean;

    /**
     * Whether the conference should be started after the participant joins the
     * conference. Defaults to "false".
     */
    start_conference_on_enter?: boolean;

    /**
     * Sets the joining participant as a supervisor for the conference. A conference
     * can have multiple supervisors. "barge" means the supervisor enters the
     * conference as a normal participant. This is the same as "none". "monitor" means
     * the supervisor is muted but can hear all participants. "whisper" means that only
     * the specified "whisper_call_control_ids" can hear the supervisor. Defaults to
     * "none".
     */
    supervisor_role?: 'barge' | 'monitor' | 'none' | 'whisper';

    /**
     * Array of unique call_control_ids the joining supervisor can whisper to. If none
     * provided, the supervisor will join the conference as a monitoring participant
     * only.
     */
    whisper_call_control_ids?: Array<string>;
  }

  /**
   * Enables deepfake detection on the call. When enabled, audio from the remote
   * party is streamed to a detection service that analyzes whether the voice is
   * AI-generated. Results are delivered via the `call.deepfake_detection.result`
   * webhook.
   */
  export interface DeepfakeDetection {
    /**
     * Whether deepfake detection is enabled.
     */
    enabled: boolean;

    /**
     * Maximum time in seconds to wait for RTP audio before timing out. If no audio is
     * received within this window, detection stops with an error.
     */
    rtp_timeout?: number;

    /**
     * Maximum time in seconds to wait for a detection result before timing out.
     */
    timeout?: number;
  }

  export interface WebhookRetriesPolicies {
    /**
     * Array of delays in milliseconds between retry attempts. Total sum cannot exceed
     * 60000ms.
     */
    retries_ms?: Array<number>;
  }
}

Calls.Actions = Actions;

export declare namespace Calls {
  export {
    type CallAssistantRequest as CallAssistantRequest,
    type ConversationRelayEmbeddedConfig as ConversationRelayEmbeddedConfig,
    type ConversationRelayInterruptionSettings as ConversationRelayInterruptionSettings,
    type ConversationRelayLanguage as ConversationRelayLanguage,
    type CustomSipHeader as CustomSipHeader,
    type DialogflowConfig as DialogflowConfig,
    type SipHeader as SipHeader,
    type SoundModifications as SoundModifications,
    type StreamBidirectionalCodec as StreamBidirectionalCodec,
    type StreamBidirectionalMode as StreamBidirectionalMode,
    type StreamBidirectionalSamplingRate as StreamBidirectionalSamplingRate,
    type StreamBidirectionalTargetLegs as StreamBidirectionalTargetLegs,
    type StreamCodec as StreamCodec,
    type CallDialResponse as CallDialResponse,
    type CallRetrieveStatusResponse as CallRetrieveStatusResponse,
    type CallDialParams as CallDialParams,
  };

  export {
    Actions as Actions,
    type AIAssistantJoinParticipant as AIAssistantJoinParticipant,
    type AssistantMessage as AssistantMessage,
    type AwsVoiceSettings as AwsVoiceSettings,
    type CallControlCommandResult as CallControlCommandResult,
    type CallControlCommandResultWithConversationID as CallControlCommandResultWithConversationID,
    type ConversationRelayInterruptible as ConversationRelayInterruptible,
    type DeepgramNova2Config as DeepgramNova2Config,
    type DeepgramNova3Config as DeepgramNova3Config,
    type DeveloperMessage as DeveloperMessage,
    type ElevenLabsVoiceSettings as ElevenLabsVoiceSettings,
    type GoogleTranscriptionLanguage as GoogleTranscriptionLanguage,
    type InterruptionSettings as InterruptionSettings,
    type Loopcount as Loopcount,
    type StopRecordingRequest as StopRecordingRequest,
    type SystemMessage as SystemMessage,
    type TelnyxTranscriptionLanguage as TelnyxTranscriptionLanguage,
    type TelnyxVoiceSettings as TelnyxVoiceSettings,
    type ToolMessage as ToolMessage,
    type TranscriptionConfig as TranscriptionConfig,
    type TranscriptionEngineAConfig as TranscriptionEngineAConfig,
    type TranscriptionEngineAssemblyaiConfig as TranscriptionEngineAssemblyaiConfig,
    type TranscriptionEngineAzureConfig as TranscriptionEngineAzureConfig,
    type TranscriptionEngineBConfig as TranscriptionEngineBConfig,
    type TranscriptionEngineDeepgramConfig as TranscriptionEngineDeepgramConfig,
    type TranscriptionEngineGoogleConfig as TranscriptionEngineGoogleConfig,
    type TranscriptionEngineParakeetConfig as TranscriptionEngineParakeetConfig,
    type TranscriptionEngineSonioxConfig as TranscriptionEngineSonioxConfig,
    type TranscriptionEngineSpeechmaticsConfig as TranscriptionEngineSpeechmaticsConfig,
    type TranscriptionEngineTelnyxConfig as TranscriptionEngineTelnyxConfig,
    type TranscriptionEngineXaiConfig as TranscriptionEngineXaiConfig,
    type TranscriptionStartRequest as TranscriptionStartRequest,
    type UserMessage as UserMessage,
    type ActionAddAIAssistantMessagesResponse as ActionAddAIAssistantMessagesResponse,
    type ActionAnswerResponse as ActionAnswerResponse,
    type ActionBridgeResponse as ActionBridgeResponse,
    type ActionEnqueueResponse as ActionEnqueueResponse,
    type ActionGatherResponse as ActionGatherResponse,
    type ActionGatherUsingAIResponse as ActionGatherUsingAIResponse,
    type ActionGatherUsingAudioResponse as ActionGatherUsingAudioResponse,
    type ActionGatherUsingSpeakResponse as ActionGatherUsingSpeakResponse,
    type ActionHangupResponse as ActionHangupResponse,
    type ActionJoinAIAssistantResponse as ActionJoinAIAssistantResponse,
    type ActionLeaveQueueResponse as ActionLeaveQueueResponse,
    type ActionPauseRecordingResponse as ActionPauseRecordingResponse,
    type ActionReferResponse as ActionReferResponse,
    type ActionRejectResponse as ActionRejectResponse,
    type ActionResumeRecordingResponse as ActionResumeRecordingResponse,
    type ActionSendDtmfResponse as ActionSendDtmfResponse,
    type ActionSendSipInfoResponse as ActionSendSipInfoResponse,
    type ActionSpeakResponse as ActionSpeakResponse,
    type ActionStartAIAssistantResponse as ActionStartAIAssistantResponse,
    type ActionStartConversationRelayResponse as ActionStartConversationRelayResponse,
    type ActionStartForkingResponse as ActionStartForkingResponse,
    type ActionStartNoiseSuppressionResponse as ActionStartNoiseSuppressionResponse,
    type ActionStartPlaybackResponse as ActionStartPlaybackResponse,
    type ActionStartRecordingResponse as ActionStartRecordingResponse,
    type ActionStartSiprecResponse as ActionStartSiprecResponse,
    type ActionStartStreamingResponse as ActionStartStreamingResponse,
    type ActionStartTranscriptionResponse as ActionStartTranscriptionResponse,
    type ActionStopAIAssistantResponse as ActionStopAIAssistantResponse,
    type ActionStopConversationRelayResponse as ActionStopConversationRelayResponse,
    type ActionStopForkingResponse as ActionStopForkingResponse,
    type ActionStopGatherResponse as ActionStopGatherResponse,
    type ActionStopNoiseSuppressionResponse as ActionStopNoiseSuppressionResponse,
    type ActionStopPlaybackResponse as ActionStopPlaybackResponse,
    type ActionStopRecordingResponse as ActionStopRecordingResponse,
    type ActionStopSiprecResponse as ActionStopSiprecResponse,
    type ActionStopStreamingResponse as ActionStopStreamingResponse,
    type ActionStopTranscriptionResponse as ActionStopTranscriptionResponse,
    type ActionSwitchSupervisorRoleResponse as ActionSwitchSupervisorRoleResponse,
    type ActionTransferResponse as ActionTransferResponse,
    type ActionUpdateClientStateResponse as ActionUpdateClientStateResponse,
    type ActionStartAIAssistantParams as ActionStartAIAssistantParams,
    type ActionStopAIAssistantParams as ActionStopAIAssistantParams,
    type ActionAnswerParams as ActionAnswerParams,
    type ActionBridgeParams as ActionBridgeParams,
    type ActionUpdateClientStateParams as ActionUpdateClientStateParams,
    type ActionEnqueueParams as ActionEnqueueParams,
    type ActionStartForkingParams as ActionStartForkingParams,
    type ActionStopForkingParams as ActionStopForkingParams,
    type ActionGatherParams as ActionGatherParams,
    type ActionStopGatherParams as ActionStopGatherParams,
    type ActionGatherUsingAIParams as ActionGatherUsingAIParams,
    type ActionGatherUsingAudioParams as ActionGatherUsingAudioParams,
    type ActionGatherUsingSpeakParams as ActionGatherUsingSpeakParams,
    type ActionHangupParams as ActionHangupParams,
    type ActionLeaveQueueParams as ActionLeaveQueueParams,
    type ActionStartPlaybackParams as ActionStartPlaybackParams,
    type ActionStopPlaybackParams as ActionStopPlaybackParams,
    type ActionPauseRecordingParams as ActionPauseRecordingParams,
    type ActionResumeRecordingParams as ActionResumeRecordingParams,
    type ActionStartRecordingParams as ActionStartRecordingParams,
    type ActionStopRecordingParams as ActionStopRecordingParams,
    type ActionReferParams as ActionReferParams,
    type ActionRejectParams as ActionRejectParams,
    type ActionSendDtmfParams as ActionSendDtmfParams,
    type ActionSendSipInfoParams as ActionSendSipInfoParams,
    type ActionStartSiprecParams as ActionStartSiprecParams,
    type ActionStopSiprecParams as ActionStopSiprecParams,
    type ActionSpeakParams as ActionSpeakParams,
    type ActionStartStreamingParams as ActionStartStreamingParams,
    type ActionStopStreamingParams as ActionStopStreamingParams,
    type ActionStartNoiseSuppressionParams as ActionStartNoiseSuppressionParams,
    type ActionStopNoiseSuppressionParams as ActionStopNoiseSuppressionParams,
    type ActionSwitchSupervisorRoleParams as ActionSwitchSupervisorRoleParams,
    type ActionStartTranscriptionParams as ActionStartTranscriptionParams,
    type ActionStopTranscriptionParams as ActionStopTranscriptionParams,
    type ActionTransferParams as ActionTransferParams,
    type ActionAddAIAssistantMessagesParams as ActionAddAIAssistantMessagesParams,
    type ActionJoinAIAssistantParams as ActionJoinAIAssistantParams,
    type ActionStartConversationRelayParams as ActionStartConversationRelayParams,
    type ActionStopConversationRelayParams as ActionStopConversationRelayParams,
  };
}
