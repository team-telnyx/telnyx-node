// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from '../calls/actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Update conference participant supervisor_role
   *
   * @example
   * ```ts
   * const action = await client.conferences.actions.update(
   *   'id',
   *   {
   *     call_control_id:
   *       'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
   *     supervisor_role: 'whisper',
   *   },
   * );
   * ```
   */
  update(id: string, body: ActionUpdateParams, options?: RequestOptions): APIPromise<ActionUpdateResponse> {
    return this._client.post(path`/conferences/${id}/actions/update`, { body, ...options });
  }

  /**
   * Hold a list of participants in a conference call
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.hold(
   *   'id',
   * );
   * ```
   */
  hold(id: string, body: ActionHoldParams, options?: RequestOptions): APIPromise<ActionHoldResponse> {
    return this._client.post(path`/conferences/${id}/actions/hold`, { body, ...options });
  }

  /**
   * Join an existing call leg to a conference. Issue the Join Conference command
   * with the conference ID in the path and the `call_control_id` of the leg you wish
   * to join to the conference as an attribute. The conference can have up to a
   * certain amount of active participants, as set by the `max_participants`
   * parameter in conference creation request.
   *
   * **Expected Webhooks:**
   *
   * - `conference.participant.joined`
   * - `conference.participant.left`
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.join(
   *   'id',
   *   {
   *     call_control_id:
   *       'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
   *   },
   * );
   * ```
   */
  join(id: string, body: ActionJoinParams, options?: RequestOptions): APIPromise<ActionJoinResponse> {
    return this._client.post(path`/conferences/${id}/actions/join`, { body, ...options });
  }

  /**
   * Removes a call leg from a conference and moves it back to parked state.
   *
   * **Expected Webhooks:**
   *
   * - `conference.participant.left`
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.leave(
   *   'id',
   *   {
   *     call_control_id: 'c46e06d7-b78f-4b13-96b6-c576af9640ff',
   *   },
   * );
   * ```
   */
  leave(id: string, body: ActionLeaveParams, options?: RequestOptions): APIPromise<ActionLeaveResponse> {
    return this._client.post(path`/conferences/${id}/actions/leave`, { body, ...options });
  }

  /**
   * Mute a list of participants in a conference call
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.mute(
   *   'id',
   * );
   * ```
   */
  mute(id: string, body: ActionMuteParams, options?: RequestOptions): APIPromise<ActionMuteResponse> {
    return this._client.post(path`/conferences/${id}/actions/mute`, { body, ...options });
  }

  /**
   * Play audio to all or some participants on a conference call.
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.play(
   *   'id',
   * );
   * ```
   */
  play(id: string, body: ActionPlayParams, options?: RequestOptions): APIPromise<ActionPlayResponse> {
    return this._client.post(path`/conferences/${id}/actions/play`, { body, ...options });
  }

  /**
   * Pause conference recording.
   *
   * @example
   * ```ts
   * const response =
   *   await client.conferences.actions.recordPause('id');
   * ```
   */
  recordPause(
    id: string,
    body: ActionRecordPauseParams,
    options?: RequestOptions,
  ): APIPromise<ActionRecordPauseResponse> {
    return this._client.post(path`/conferences/${id}/actions/record_pause`, { body, ...options });
  }

  /**
   * Resume conference recording.
   *
   * @example
   * ```ts
   * const response =
   *   await client.conferences.actions.recordResume('id');
   * ```
   */
  recordResume(
    id: string,
    body: ActionRecordResumeParams,
    options?: RequestOptions,
  ): APIPromise<ActionRecordResumeResponse> {
    return this._client.post(path`/conferences/${id}/actions/record_resume`, { body, ...options });
  }

  /**
   * Start recording the conference. Recording will stop on conference end, or via
   * the Stop Recording command.
   *
   * **Expected Webhooks:**
   *
   * - `conference.recording.saved`
   *
   * @example
   * ```ts
   * const response =
   *   await client.conferences.actions.recordStart('id', {
   *     format: 'wav',
   *   });
   * ```
   */
  recordStart(
    id: string,
    body: ActionRecordStartParams,
    options?: RequestOptions,
  ): APIPromise<ActionRecordStartResponse> {
    return this._client.post(path`/conferences/${id}/actions/record_start`, { body, ...options });
  }

  /**
   * Stop recording the conference.
   *
   * **Expected Webhooks:**
   *
   * - `conference.recording.saved`
   *
   * @example
   * ```ts
   * const response =
   *   await client.conferences.actions.recordStop('id');
   * ```
   */
  recordStop(
    id: string,
    body: ActionRecordStopParams,
    options?: RequestOptions,
  ): APIPromise<ActionRecordStopResponse> {
    return this._client.post(path`/conferences/${id}/actions/record_stop`, { body, ...options });
  }

  /**
   * Convert text to speech and play it to all or some participants.
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.speak(
   *   'id',
   *   { payload: 'Say this to participants', voice: 'female' },
   * );
   * ```
   */
  speak(id: string, body: ActionSpeakParams, options?: RequestOptions): APIPromise<ActionSpeakResponse> {
    return this._client.post(path`/conferences/${id}/actions/speak`, { body, ...options });
  }

  /**
   * Stop audio being played to all or some participants on a conference call.
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.stop(
   *   'id',
   * );
   * ```
   */
  stop(id: string, body: ActionStopParams, options?: RequestOptions): APIPromise<ActionStopResponse> {
    return this._client.post(path`/conferences/${id}/actions/stop`, { body, ...options });
  }

  /**
   * Unhold a list of participants in a conference call
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.unhold(
   *   'id',
   *   {
   *     call_control_ids: [
   *       'v3:MdI91X4lWFEs7IgbBEOT9M4AigoY08M0WWZFISt1Yw2axZ_IiE4pqg',
   *     ],
   *   },
   * );
   * ```
   */
  unhold(id: string, body: ActionUnholdParams, options?: RequestOptions): APIPromise<ActionUnholdResponse> {
    return this._client.post(path`/conferences/${id}/actions/unhold`, { body, ...options });
  }

  /**
   * Unmute a list of participants in a conference call
   *
   * @example
   * ```ts
   * const response = await client.conferences.actions.unmute(
   *   'id',
   * );
   * ```
   */
  unmute(id: string, body: ActionUnmuteParams, options?: RequestOptions): APIPromise<ActionUnmuteResponse> {
    return this._client.post(path`/conferences/${id}/actions/unmute`, { body, ...options });
  }
}

export interface ConferenceCommandResult {
  result: string;
}

export interface UpdateConference {
  /**
   * Unique identifier and token for controlling the call
   */
  call_control_id: string;

  /**
   * Sets the participant as a supervisor for the conference. A conference can have
   * multiple supervisors. "barge" means the supervisor enters the conference as a
   * normal participant. This is the same as "none". "monitor" means the supervisor
   * is muted but can hear all participants. "whisper" means that only the specified
   * "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
   */
  supervisor_role: 'barge' | 'monitor' | 'none' | 'whisper';

  /**
   * Use this field to avoid execution of duplicate commands. Telnyx will ignore
   * subsequent commands with the same `command_id` as one that has already been
   * executed.
   */
  command_id?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';

  /**
   * Array of unique call_control_ids the supervisor can whisper to. If none
   * provided, the supervisor will join the conference as a monitoring participant
   * only.
   */
  whisper_call_control_ids?: Array<string>;
}

export interface ActionUpdateResponse {
  data?: ConferenceCommandResult;
}

export interface ActionHoldResponse {
  data?: ConferenceCommandResult;
}

export interface ActionJoinResponse {
  data?: ConferenceCommandResult;
}

export interface ActionLeaveResponse {
  data?: ConferenceCommandResult;
}

export interface ActionMuteResponse {
  data?: ConferenceCommandResult;
}

export interface ActionPlayResponse {
  data?: ConferenceCommandResult;
}

export interface ActionRecordPauseResponse {
  data?: ConferenceCommandResult;
}

export interface ActionRecordResumeResponse {
  data?: ConferenceCommandResult;
}

export interface ActionRecordStartResponse {
  data?: ConferenceCommandResult;
}

export interface ActionRecordStopResponse {
  data?: ConferenceCommandResult;
}

export interface ActionSpeakResponse {
  data?: ConferenceCommandResult;
}

export interface ActionStopResponse {
  data?: ConferenceCommandResult;
}

export interface ActionUnholdResponse {
  data?: ConferenceCommandResult;
}

export interface ActionUnmuteResponse {
  data?: ConferenceCommandResult;
}

export interface ActionUpdateParams {
  /**
   * Unique identifier and token for controlling the call
   */
  call_control_id: string;

  /**
   * Sets the participant as a supervisor for the conference. A conference can have
   * multiple supervisors. "barge" means the supervisor enters the conference as a
   * normal participant. This is the same as "none". "monitor" means the supervisor
   * is muted but can hear all participants. "whisper" means that only the specified
   * "whisper_call_control_ids" can hear the supervisor. Defaults to "none".
   */
  supervisor_role: 'barge' | 'monitor' | 'none' | 'whisper';

  /**
   * Use this field to avoid execution of duplicate commands. Telnyx will ignore
   * subsequent commands with the same `command_id` as one that has already been
   * executed.
   */
  command_id?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';

  /**
   * Array of unique call_control_ids the supervisor can whisper to. If none
   * provided, the supervisor will join the conference as a monitoring participant
   * only.
   */
  whisper_call_control_ids?: Array<string>;
}

export interface ActionHoldParams {
  /**
   * The URL of a file to be played to the participants when they are put on hold.
   * media_name and audio_url cannot be used together in one request.
   */
  audio_url?: string;

  /**
   * List of unique identifiers and tokens for controlling the call. When empty all
   * participants will be placed on hold.
   */
  call_control_ids?: Array<string>;

  /**
   * The media_name of a file to be played to the participants when they are put on
   * hold. The media_name must point to a file previously uploaded to
   * api.telnyx.com/v2/media by the same user/organization. The file must either be a
   * WAV or MP3 file.
   */
  media_name?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionJoinParams {
  /**
   * Unique identifier and token for controlling the call
   */
  call_control_id: string;

  /**
   * Whether a beep sound should be played when the participant joins and/or leaves
   * the conference. Can be used to override the conference-level setting.
   */
  beep_enabled?: 'always' | 'never' | 'on_enter' | 'on_exit';

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string. Please note that the client_state will be updated for
   * the participient call leg and the change will not affect conferencing webhooks
   * unless the participient is the owner of the conference.
   */
  client_state?: string;

  /**
   * Use this field to avoid execution of duplicate commands. Telnyx will ignore
   * subsequent commands with the same `command_id` as one that has already been
   * executed.
   */
  command_id?: string;

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
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';

  /**
   * Whether the conference should end after the participant leaves the conference.
   * NOTE this doesn't hang up the other participants. Defaults to "false".
   */
  soft_end_conference_on_exit?: boolean;

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

export interface ActionLeaveParams {
  /**
   * Unique identifier and token for controlling the call
   */
  call_control_id: string;

  /**
   * Whether a beep sound should be played when the participant leaves the
   * conference. Can be used to override the conference-level setting.
   */
  beep_enabled?: 'always' | 'never' | 'on_enter' | 'on_exit';

  /**
   * Use this field to avoid execution of duplicate commands. Telnyx will ignore
   * subsequent commands with the same `command_id` as one that has already been
   * executed.
   */
  command_id?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionMuteParams {
  /**
   * Array of unique identifiers and tokens for controlling the call. When empty all
   * participants will be muted.
   */
  call_control_ids?: Array<string>;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionPlayParams {
  /**
   * The URL of a file to be played back in the conference. media_name and audio_url
   * cannot be used together in one request.
   */
  audio_url?: string;

  /**
   * List of call control ids identifying participants the audio file should be
   * played to. If not given, the audio file will be played to the entire conference.
   */
  call_control_ids?: Array<string>;

  /**
   * The number of times the audio file should be played. If supplied, the value must
   * be an integer between 1 and 100, or the special string `infinity` for an endless
   * loop.
   */
  loop?: ActionsAPI.Loopcount;

  /**
   * The media_name of a file to be played back in the conference. The media_name
   * must point to a file previously uploaded to api.telnyx.com/v2/media by the same
   * user/organization. The file must either be a WAV or MP3 file.
   */
  media_name?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionRecordPauseParams {
  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Use this field to pause specific recording.
   */
  recording_id?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionRecordResumeParams {
  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Use this field to resume specific recording.
   */
  recording_id?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionRecordStartParams {
  /**
   * The audio file format used when storing the conference recording. Can be either
   * `mp3` or `wav`.
   */
  format: 'wav' | 'mp3';

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `conference_id`.
   */
  command_id?: string;

  /**
   * The custom recording file name to be used instead of the default `call_leg_id`.
   * Telnyx will still add a Unix timestamp suffix.
   */
  custom_file_name?: string;

  /**
   * If enabled, a beep sound will be played at the start of a recording.
   */
  play_beep?: boolean;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';

  /**
   * When set to `trim-silence`, silence will be removed from the beginning and end
   * of the recording.
   */
  trim?: 'trim-silence';
}

export interface ActionRecordStopParams {
  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * Use this field to avoid duplicate commands. Telnyx will ignore any command with
   * the same `command_id` for the same `call_control_id`.
   */
  command_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  recording_id?: string;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionSpeakParams {
  /**
   * The text or SSML to be converted into speech. There is a 3,000 character limit.
   */
  payload: string;

  /**
   * Specifies the voice used in speech synthesis.
   *
   * - Define voices using the format `<Provider>.<Model>.<VoiceId>`. Specifying only
   *   the provider will give default values for voice_id and model_id.
   *
   *   **Supported Providers:**
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
   *   `ElevenLabs.eleven_multilingual_v2.21m00Tcm4TlvDq8ikWAM`). The `ModelId` part
   *   is optional. To use ElevenLabs, you must provide your ElevenLabs API key as an
   *   integration identifier secret in
   *   `"voice_settings": {"api_key_ref": "<secret_identifier>"}`. See
   *   [integration secrets documentation](https://developers.telnyx.com/api/secrets-manager/integration-secrets/create-integration-secret)
   *   for details. Check
   *   [available voices](https://elevenlabs.io/docs/api-reference/get-voices).
   * - **Telnyx:** Use `Telnyx.<model_id>.<voice_id>`
   *
   * For service_level basic, you may define the gender of the speaker (male or
   * female).
   */
  voice: string;

  /**
   * Call Control IDs of participants who will hear the spoken text. When empty all
   * participants will hear the spoken text.
   */
  call_control_ids?: Array<string>;

  /**
   * Use this field to avoid execution of duplicate commands. Telnyx will ignore
   * subsequent commands with the same `command_id` as one that has already been
   * executed.
   */
  command_id?: string;

  /**
   * The language you want spoken. This parameter is ignored when a `Polly.*` voice
   * is specified.
   */
  language?:
    | 'arb'
    | 'cmn-CN'
    | 'cy-GB'
    | 'da-DK'
    | 'de-DE'
    | 'en-AU'
    | 'en-GB'
    | 'en-GB-WLS'
    | 'en-IN'
    | 'en-US'
    | 'es-ES'
    | 'es-MX'
    | 'es-US'
    | 'fr-CA'
    | 'fr-FR'
    | 'hi-IN'
    | 'is-IS'
    | 'it-IT'
    | 'ja-JP'
    | 'ko-KR'
    | 'nb-NO'
    | 'nl-NL'
    | 'pl-PL'
    | 'pt-BR'
    | 'pt-PT'
    | 'ro-RO'
    | 'ru-RU'
    | 'sv-SE'
    | 'tr-TR';

  /**
   * The type of the provided payload. The payload can either be plain text, or
   * Speech Synthesis Markup Language (SSML).
   */
  payload_type?: 'text' | 'ssml';

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';

  /**
   * The settings associated with the voice selected
   */
  voice_settings?:
    | ActionsAPI.ElevenLabsVoiceSettings
    | ActionsAPI.TelnyxVoiceSettings
    | ActionsAPI.AwsVoiceSettings;
}

export interface ActionStopParams {
  /**
   * List of call control ids identifying participants the audio file should stop be
   * played to. If not given, the audio will be stoped to the entire conference.
   */
  call_control_ids?: Array<string>;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionUnholdParams {
  /**
   * List of unique identifiers and tokens for controlling the call. Enter each call
   * control ID to be unheld.
   */
  call_control_ids: Array<string>;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export interface ActionUnmuteParams {
  /**
   * List of unique identifiers and tokens for controlling the call. Enter each call
   * control ID to be unmuted. When empty all participants will be unmuted.
   */
  call_control_ids?: Array<string>;

  /**
   * Region where the conference data is located. Defaults to the region defined in
   * user's data locality settings (Europe or US).
   */
  region?: 'Australia' | 'Europe' | 'Middle East' | 'US';
}

export declare namespace Actions {
  export {
    type ConferenceCommandResult as ConferenceCommandResult,
    type UpdateConference as UpdateConference,
    type ActionUpdateResponse as ActionUpdateResponse,
    type ActionHoldResponse as ActionHoldResponse,
    type ActionJoinResponse as ActionJoinResponse,
    type ActionLeaveResponse as ActionLeaveResponse,
    type ActionMuteResponse as ActionMuteResponse,
    type ActionPlayResponse as ActionPlayResponse,
    type ActionRecordPauseResponse as ActionRecordPauseResponse,
    type ActionRecordResumeResponse as ActionRecordResumeResponse,
    type ActionRecordStartResponse as ActionRecordStartResponse,
    type ActionRecordStopResponse as ActionRecordStopResponse,
    type ActionSpeakResponse as ActionSpeakResponse,
    type ActionStopResponse as ActionStopResponse,
    type ActionUnholdResponse as ActionUnholdResponse,
    type ActionUnmuteResponse as ActionUnmuteResponse,
    type ActionUpdateParams as ActionUpdateParams,
    type ActionHoldParams as ActionHoldParams,
    type ActionJoinParams as ActionJoinParams,
    type ActionLeaveParams as ActionLeaveParams,
    type ActionMuteParams as ActionMuteParams,
    type ActionPlayParams as ActionPlayParams,
    type ActionRecordPauseParams as ActionRecordPauseParams,
    type ActionRecordResumeParams as ActionRecordResumeParams,
    type ActionRecordStartParams as ActionRecordStartParams,
    type ActionRecordStopParams as ActionRecordStopParams,
    type ActionSpeakParams as ActionSpeakParams,
    type ActionStopParams as ActionStopParams,
    type ActionUnholdParams as ActionUnholdParams,
    type ActionUnmuteParams as ActionUnmuteParams,
  };
}
