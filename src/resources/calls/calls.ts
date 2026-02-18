// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
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
  AwsVoiceSettings,
  CallControlCommandResult,
  ElevenLabsVoiceSettings,
  GoogleTranscriptionLanguage,
  InterruptionSettings,
  Loopcount,
  StopRecordingRequest,
  TelnyxTranscriptionLanguage,
  TelnyxVoiceSettings,
  TranscriptionConfig,
  TranscriptionEngineAConfig,
  TranscriptionEngineAzureConfig,
  TranscriptionEngineBConfig,
  TranscriptionEngineDeepgramConfig,
  TranscriptionEngineGoogleConfig,
  TranscriptionEngineTelnyxConfig,
  TranscriptionStartRequest,
} from './actions';
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
   * - `call.machine.detection.ended` if `answering_machine_detection` was requested
   * - `call.machine.greeting.ended` if `answering_machine_detection` was requested
   *   to detect the end of machine greeting
   * - `call.machine.premium.detection.ended` if
   *   `answering_machine_detection=premium` was requested
   * - `call.machine.premium.greeting.ended` if `answering_machine_detection=premium`
   *   was requested and a beep was detected
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
   *   to: '+18005550100 or sip:username@sip.telnyx.com',
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
   * using an array of strings
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
   * performance.
   */
  answering_machine_detection_config?: CallDialParams.AnsweringMachineDetectionConfig;

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
   * Custom headers to be added to the SIP INVITE.
   */
  custom_headers?: Array<CustomSipHeader>;

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
   * Defines whether media should be encrypted on the call.
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
   * Use this field to override the URL for which Telnyx will send subsequent
   * webhooks to for this call.
   */
  webhook_url?: string;

  /**
   * HTTP request type used for `webhook_url`.
   */
  webhook_url_method?: 'POST' | 'GET';
}

export namespace CallDialParams {
  /**
   * Optional configuration parameters to modify 'answering_machine_detection'
   * performance.
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
}

Calls.Actions = Actions;

export declare namespace Calls {
  export {
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
    type AwsVoiceSettings as AwsVoiceSettings,
    type CallControlCommandResult as CallControlCommandResult,
    type ElevenLabsVoiceSettings as ElevenLabsVoiceSettings,
    type GoogleTranscriptionLanguage as GoogleTranscriptionLanguage,
    type InterruptionSettings as InterruptionSettings,
    type Loopcount as Loopcount,
    type StopRecordingRequest as StopRecordingRequest,
    type TelnyxTranscriptionLanguage as TelnyxTranscriptionLanguage,
    type TelnyxVoiceSettings as TelnyxVoiceSettings,
    type TranscriptionConfig as TranscriptionConfig,
    type TranscriptionEngineAConfig as TranscriptionEngineAConfig,
    type TranscriptionEngineAzureConfig as TranscriptionEngineAzureConfig,
    type TranscriptionEngineBConfig as TranscriptionEngineBConfig,
    type TranscriptionEngineDeepgramConfig as TranscriptionEngineDeepgramConfig,
    type TranscriptionEngineGoogleConfig as TranscriptionEngineGoogleConfig,
    type TranscriptionEngineTelnyxConfig as TranscriptionEngineTelnyxConfig,
    type TranscriptionStartRequest as TranscriptionStartRequest,
    type ActionAddAIAssistantMessagesResponse as ActionAddAIAssistantMessagesResponse,
    type ActionAnswerResponse as ActionAnswerResponse,
    type ActionBridgeResponse as ActionBridgeResponse,
    type ActionEnqueueResponse as ActionEnqueueResponse,
    type ActionGatherResponse as ActionGatherResponse,
    type ActionGatherUsingAIResponse as ActionGatherUsingAIResponse,
    type ActionGatherUsingAudioResponse as ActionGatherUsingAudioResponse,
    type ActionGatherUsingSpeakResponse as ActionGatherUsingSpeakResponse,
    type ActionHangupResponse as ActionHangupResponse,
    type ActionLeaveQueueResponse as ActionLeaveQueueResponse,
    type ActionPauseRecordingResponse as ActionPauseRecordingResponse,
    type ActionReferResponse as ActionReferResponse,
    type ActionRejectResponse as ActionRejectResponse,
    type ActionResumeRecordingResponse as ActionResumeRecordingResponse,
    type ActionSendDtmfResponse as ActionSendDtmfResponse,
    type ActionSendSipInfoResponse as ActionSendSipInfoResponse,
    type ActionSpeakResponse as ActionSpeakResponse,
    type ActionStartAIAssistantResponse as ActionStartAIAssistantResponse,
    type ActionStartForkingResponse as ActionStartForkingResponse,
    type ActionStartNoiseSuppressionResponse as ActionStartNoiseSuppressionResponse,
    type ActionStartPlaybackResponse as ActionStartPlaybackResponse,
    type ActionStartRecordingResponse as ActionStartRecordingResponse,
    type ActionStartSiprecResponse as ActionStartSiprecResponse,
    type ActionStartStreamingResponse as ActionStartStreamingResponse,
    type ActionStartTranscriptionResponse as ActionStartTranscriptionResponse,
    type ActionStopAIAssistantResponse as ActionStopAIAssistantResponse,
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
    type ActionAddAIAssistantMessagesParams as ActionAddAIAssistantMessagesParams,
    type ActionAnswerParams as ActionAnswerParams,
    type ActionBridgeParams as ActionBridgeParams,
    type ActionEnqueueParams as ActionEnqueueParams,
    type ActionGatherParams as ActionGatherParams,
    type ActionGatherUsingAIParams as ActionGatherUsingAIParams,
    type ActionGatherUsingAudioParams as ActionGatherUsingAudioParams,
    type ActionGatherUsingSpeakParams as ActionGatherUsingSpeakParams,
    type ActionHangupParams as ActionHangupParams,
    type ActionLeaveQueueParams as ActionLeaveQueueParams,
    type ActionPauseRecordingParams as ActionPauseRecordingParams,
    type ActionReferParams as ActionReferParams,
    type ActionRejectParams as ActionRejectParams,
    type ActionResumeRecordingParams as ActionResumeRecordingParams,
    type ActionSendDtmfParams as ActionSendDtmfParams,
    type ActionSendSipInfoParams as ActionSendSipInfoParams,
    type ActionSpeakParams as ActionSpeakParams,
    type ActionStartAIAssistantParams as ActionStartAIAssistantParams,
    type ActionStartForkingParams as ActionStartForkingParams,
    type ActionStartNoiseSuppressionParams as ActionStartNoiseSuppressionParams,
    type ActionStartPlaybackParams as ActionStartPlaybackParams,
    type ActionStartRecordingParams as ActionStartRecordingParams,
    type ActionStartSiprecParams as ActionStartSiprecParams,
    type ActionStartStreamingParams as ActionStartStreamingParams,
    type ActionStartTranscriptionParams as ActionStartTranscriptionParams,
    type ActionStopAIAssistantParams as ActionStopAIAssistantParams,
    type ActionStopForkingParams as ActionStopForkingParams,
    type ActionStopGatherParams as ActionStopGatherParams,
    type ActionStopNoiseSuppressionParams as ActionStopNoiseSuppressionParams,
    type ActionStopPlaybackParams as ActionStopPlaybackParams,
    type ActionStopRecordingParams as ActionStopRecordingParams,
    type ActionStopSiprecParams as ActionStopSiprecParams,
    type ActionStopStreamingParams as ActionStopStreamingParams,
    type ActionStopTranscriptionParams as ActionStopTranscriptionParams,
    type ActionSwitchSupervisorRoleParams as ActionSwitchSupervisorRoleParams,
    type ActionTransferParams as ActionTransferParams,
    type ActionUpdateClientStateParams as ActionUpdateClientStateParams,
  };
}
