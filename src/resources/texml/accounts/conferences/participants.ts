// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Participants extends APIResource {
  /**
   * Gets conference participant resource
   *
   * @example
   * ```ts
   * const participant =
   *   await client.texml.accounts.conferences.participants.retrieve(
   *     'call_sid_or_participant_label',
   *     {
   *       account_sid: 'account_sid',
   *       conference_sid: 'conference_sid',
   *     },
   *   );
   * ```
   */
  retrieve(
    callSidOrParticipantLabel: string,
    params: ParticipantRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantRetrieveResponse> {
    const { account_sid, conference_sid } = params;
    return this._client.get(
      path`/texml/Accounts/${account_sid}/Conferences/${conference_sid}/Participants/${callSidOrParticipantLabel}`,
      options,
    );
  }

  /**
   * Updates a conference participant
   *
   * @example
   * ```ts
   * const participant =
   *   await client.texml.accounts.conferences.participants.update(
   *     'call_sid_or_participant_label',
   *     {
   *       account_sid: 'account_sid',
   *       conference_sid: 'conference_sid',
   *     },
   *   );
   * ```
   */
  update(
    callSidOrParticipantLabel: string,
    params: ParticipantUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantUpdateResponse> {
    const { account_sid, conference_sid, ...body } = params;
    return this._client.post(
      path`/texml/Accounts/${account_sid}/Conferences/${conference_sid}/Participants/${callSidOrParticipantLabel}`,
      {
        body,
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
      },
    );
  }

  /**
   * Deletes a conference participant
   *
   * @example
   * ```ts
   * await client.texml.accounts.conferences.participants.delete(
   *   'call_sid_or_participant_label',
   *   {
   *     account_sid: 'account_sid',
   *     conference_sid: 'conference_sid',
   *   },
   * );
   * ```
   */
  delete(
    callSidOrParticipantLabel: string,
    params: ParticipantDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { account_sid, conference_sid } = params;
    return this._client.delete(
      path`/texml/Accounts/${account_sid}/Conferences/${conference_sid}/Participants/${callSidOrParticipantLabel}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }

  /**
   * Dials a new conference participant
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.conferences.participants.participants(
   *     'conference_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  participants(
    conferenceSid: string,
    params: ParticipantParticipantsParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantParticipantsResponse> {
    const { account_sid, timeout_seconds, ...body } = params;
    return this._client.post(path`/texml/Accounts/${account_sid}/Conferences/${conferenceSid}/Participants`, {
      body: { Timeout: timeout_seconds, ...body },
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Lists conference participants
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.conferences.participants.retrieveParticipants(
   *     'conference_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  retrieveParticipants(
    conferenceSid: string,
    params: ParticipantRetrieveParticipantsParams,
    options?: RequestOptions,
  ): APIPromise<ParticipantRetrieveParticipantsResponse> {
    const { account_sid } = params;
    return this._client.get(
      path`/texml/Accounts/${account_sid}/Conferences/${conferenceSid}/Participants`,
      options,
    );
  }
}

export interface ParticipantRetrieveResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The version of the API that was used to make the request.
   */
  api_version?: string;

  /**
   * The identifier of this participant's call.
   */
  call_sid?: string;

  /**
   * The identifier of this participant's call.
   */
  call_sid_legacy?: string;

  /**
   * Whether the participant is coaching another call.
   */
  coaching?: boolean;

  /**
   * The identifier of the coached participant's call.
   */
  coaching_call_sid?: string;

  /**
   * The identifier of the coached participant's call.
   */
  coaching_call_sid_legacy?: string;

  /**
   * The unique identifier for the conference.
   */
  conference_sid?: string;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * Whether the conference ends when the participant leaves.
   */
  end_conference_on_exit?: boolean;

  /**
   * Whether the participant is on hold.
   */
  hold?: boolean;

  /**
   * Whether the participant is muted.
   */
  muted?: boolean;

  /**
   * The status of the participant's call in the conference.
   */
  status?: 'connecting' | 'connected' | 'completed';

  /**
   * The relative URI for this participant.
   */
  uri?: string;
}

export interface ParticipantUpdateResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The version of the API that was used to make the request.
   */
  api_version?: string;

  /**
   * The identifier of this participant's call.
   */
  call_sid?: string;

  /**
   * The identifier of this participant's call.
   */
  call_sid_legacy?: string;

  /**
   * Whether the participant is coaching another call.
   */
  coaching?: boolean;

  /**
   * The identifier of the coached participant's call.
   */
  coaching_call_sid?: string;

  /**
   * The identifier of the coached participant's call.
   */
  coaching_call_sid_legacy?: string;

  /**
   * The unique identifier for the conference.
   */
  conference_sid?: string;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * Whether the conference ends when the participant leaves.
   */
  end_conference_on_exit?: boolean;

  /**
   * Whether the participant is on hold.
   */
  hold?: boolean;

  /**
   * Whether the participant is muted.
   */
  muted?: boolean;

  /**
   * The status of the participant's call in the conference.
   */
  status?: 'connecting' | 'connected' | 'completed';

  /**
   * The relative URI for this participant.
   */
  uri?: string;
}

export interface ParticipantParticipantsResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The identifier of this participant's call.
   */
  call_sid?: string;

  /**
   * Whether the participant is coaching another call.
   */
  coaching?: boolean;

  /**
   * The identifier of the coached participant's call.
   */
  coaching_call_sid?: string;

  /**
   * The unique identifier for the conference.
   */
  conference_sid?: string;

  /**
   * Whether the conference ends when the participant leaves.
   */
  end_conference_on_exit?: boolean;

  /**
   * Whether the participant is on hold.
   */
  hold?: boolean;

  /**
   * Whether the participant is muted.
   */
  muted?: boolean;

  /**
   * The status of the participant's call in the conference.
   */
  status?: 'connecting' | 'connected' | 'completed';

  /**
   * The relative URI for this participant.
   */
  uri?: string;
}

export interface ParticipantRetrieveParticipantsResponse {
  /**
   * The number of the last element on the page, zero-indexed.
   */
  end?: number;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Participants.json?page=0&pagesize=20
   */
  first_page_uri?: string;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Participants.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ
   */
  next_page_uri?: string;

  /**
   * Current page number, zero-indexed.
   */
  page?: number;

  /**
   * The number of items on the page
   */
  page_size?: number;

  participants?: Array<ParticipantRetrieveParticipantsResponse.Participant>;

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export namespace ParticipantRetrieveParticipantsResponse {
  export interface Participant {
    /**
     * The id of the account the resource belongs to.
     */
    account_sid?: string;

    /**
     * The version of the API that was used to make the request.
     */
    api_version?: string;

    /**
     * The identifier of this participant's call.
     */
    call_sid?: string;

    /**
     * The identifier of this participant's call.
     */
    call_sid_legacy?: string;

    /**
     * Whether the participant is coaching another call.
     */
    coaching?: boolean;

    /**
     * The identifier of the coached participant's call.
     */
    coaching_call_sid?: string;

    /**
     * The identifier of the coached participant's call.
     */
    coaching_call_sid_legacy?: string;

    /**
     * The unique identifier for the conference.
     */
    conference_sid?: string;

    /**
     * The timestamp of when the resource was created.
     */
    date_created?: string;

    /**
     * The timestamp of when the resource was last updated.
     */
    date_updated?: string;

    /**
     * Whether the conference ends when the participant leaves.
     */
    end_conference_on_exit?: boolean;

    /**
     * Whether the participant is on hold.
     */
    hold?: boolean;

    /**
     * Whether the participant is muted.
     */
    muted?: boolean;

    /**
     * The status of the participant's call in the conference.
     */
    status?: 'connecting' | 'connected' | 'completed';

    /**
     * The relative URI for this participant.
     */
    uri?: string;
  }
}

export interface ParticipantRetrieveParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * The ConferenceSid that uniquely identifies a conference.
   */
  conference_sid: string;
}

export interface ParticipantUpdateParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Path param: The ConferenceSid that uniquely identifies a conference.
   */
  conference_sid: string;

  /**
   * Body param: The HTTP method used to call the `AnnounceUrl`. Defaults to `POST`.
   */
  AnnounceMethod?: 'GET' | 'POST';

  /**
   * Body param: The URL to call to announce something to the participant. The URL
   * may return an MP3 fileo a WAV file, or a TwiML document that contains `<Play>`,
   * `<Say>`, `<Pause>`, or `<Redirect>` verbs.
   */
  AnnounceUrl?: string;

  /**
   * Body param: Whether to play a notification beep to the conference when the
   * participant exits.
   */
  BeepOnExit?: boolean;

  /**
   * Body param: The SID of the participant who is being coached. The participant
   * being coached is the only participant who can hear the participant who is
   * coaching.
   */
  CallSidToCoach?: string;

  /**
   * Body param: Whether the participant is coaching another call. When `true`,
   * `CallSidToCoach` has to be given.
   */
  Coaching?: boolean;

  /**
   * Body param: Whether to end the conference when the participant leaves.
   */
  EndConferenceOnExit?: boolean;

  /**
   * Body param: Whether the participant should be on hold.
   */
  Hold?: boolean;

  /**
   * Body param: The HTTP method to use when calling the `HoldUrl`.
   */
  HoldMethod?: 'GET' | 'POST';

  /**
   * Body param: The URL to be called using the `HoldMethod` for music that plays
   * when the participant is on hold. The URL may return an MP3 file, a WAV file, or
   * a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>`
   * verbs.
   */
  HoldUrl?: string;

  /**
   * Body param: Whether the participant should be muted.
   */
  Muted?: boolean;

  /**
   * Body param: The URL to call for an audio file to play while the participant is
   * waiting for the conference to start.
   */
  WaitUrl?: string;
}

export interface ParticipantDeleteParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * The ConferenceSid that uniquely identifies a conference.
   */
  conference_sid: string;
}

export interface ParticipantParticipantsParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Body param: The URL the result of answering machine detection will be sent to.
   */
  AmdStatusCallback?: string;

  /**
   * Body param: HTTP request type used for `AmdStatusCallback`. Defaults to `POST`.
   */
  AmdStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: Whether to play a notification beep to the conference when the
   * participant enters and exits.
   */
  Beep?: 'true' | 'false' | 'onEnter' | 'onExit';

  /**
   * Body param: To be used as the caller id name (SIP From Display Name) presented
   * to the destination (`To` number). The string should have a maximum of 128
   * characters, containing only letters, numbers, spaces, and `-_~!.+` special
   * characters. If ommited, the display name will be the same as the number in the
   * `From` field.
   */
  CallerId?: string;

  /**
   * Body param: The SID of the participant who is being coached. The participant
   * being coached is the only participant who can hear the participant who is
   * coaching.
   */
  CallSidToCoach?: string;

  /**
   * Body param: Whether to cancel ongoing playback on `greeting ended` detection.
   * Defaults to `true`.
   */
  CancelPlaybackOnDetectMessageEnd?: boolean;

  /**
   * Body param: Whether to cancel ongoing playback on `machine` detection. Defaults
   * to `true`.
   */
  CancelPlaybackOnMachineDetection?: boolean;

  /**
   * Body param: Whether the participant is coaching another call. When `true`,
   * `CallSidToCoach` has to be given.
   */
  Coaching?: boolean;

  /**
   * Body param: Whether to record the conference the participant is joining.
   * Defualts to `do-not-record`. The boolean values `true` and `false` are
   * synonymous with `record-from-start` and `do-not-record` respectively.
   */
  ConferenceRecord?: 'true' | 'false' | 'record-from-start' | 'do-not-record';

  /**
   * Body param: The URL the conference recording callbacks will be sent to.
   */
  ConferenceRecordingStatusCallback?: string;

  /**
   * Body param: The changes to the conference recording's state that should generate
   * a call to `RecoridngStatusCallback`. Can be: `in-progress`, `completed` and
   * `absent`. Separate multiple values with a space. Defaults to `completed`.
   * `failed` and `absent` are synonymous.
   */
  ConferenceRecordingStatusCallbackEvent?: string;

  /**
   * Body param: HTTP request type used for `ConferenceRecordingStatusCallback`.
   * Defaults to `POST`.
   */
  ConferenceRecordingStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: The number of seconds that Telnyx will wait for the recording to be
   * stopped if silence is detected. The timer only starts when the speech is
   * detected. Please note that the transcription is used to detect silence and the
   * related charge will be applied. The minimum value is 0. The default value is 0
   * (infinite)
   */
  ConferenceRecordingTimeout?: number;

  /**
   * Body param: The URL the conference callbacks will be sent to.
   */
  ConferenceStatusCallback?: string;

  /**
   * Body param: The changes to the conference's state that should generate a call to
   * `ConferenceStatusCallback`. Can be: `start`, `end`, `join` and `leave`. Separate
   * multiple values with a space. By default no callbacks are sent.
   */
  ConferenceStatusCallbackEvent?: string;

  /**
   * Body param: HTTP request type used for `ConferenceStatusCallback`. Defaults to
   * `POST`.
   */
  ConferenceStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: Whether to trim any leading and trailing silence from the conference
   * recording. Defaults to `trim-silence`.
   */
  ConferenceTrim?: 'trim-silence' | 'do-not-trim';

  /**
   * Body param: Custom HTTP headers to be sent with the call. Each header should be
   * an object with 'name' and 'value' properties.
   */
  CustomHeaders?: Array<ParticipantParticipantsParams.CustomHeader>;

  /**
   * Body param: Whether participant shall be bridged to conference before the
   * participant answers (from early media if available). Defaults to `false`.
   */
  EarlyMedia?: boolean;

  /**
   * Body param: Whether to end the conference when the participant leaves. Defaults
   * to `false`.
   */
  EndConferenceOnExit?: boolean;

  /**
   * Body param: The phone number of the party that initiated the call. Phone numbers
   * are formatted with a `+` and country code.
   */
  From?: string;

  /**
   * Body param: Whether to detect if a human or an answering machine picked up the
   * call. Use `Enable` if you would like to ne notified as soon as the called party
   * is identified. Use `DetectMessageEnd`, if you would like to leave a message on
   * an answering machine.
   */
  MachineDetection?: 'Enable' | 'DetectMessageEnd';

  /**
   * Body param: If initial silence duration is greater than this value, consider it
   * a machine. Ignored when `premium` detection is used.
   */
  MachineDetectionSilenceTimeout?: number;

  /**
   * Body param: Silence duration threshold after a greeting message or voice for it
   * be considered human. Ignored when `premium` detection is used.
   */
  MachineDetectionSpeechEndThreshold?: number;

  /**
   * Body param: Maximum threshold of a human greeting. If greeting longer than this
   * value, considered machine. Ignored when `premium` detection is used.
   */
  MachineDetectionSpeechThreshold?: number;

  /**
   * Body param: How long answering machine detection should go on for before sending
   * an `Unknown` result. Given in milliseconds.
   */
  MachineDetectionTimeout?: number;

  /**
   * Body param: The maximum number of participants in the conference. Can be a
   * positive integer from 2 to 800. The default value is 250.
   */
  MaxParticipants?: number;

  /**
   * Body param: Whether the participant should be muted.
   */
  Muted?: boolean;

  /**
   * Body param: The list of comma-separated codecs to be offered on a call.
   */
  PreferredCodecs?: string;

  /**
   * Body param: Whether to record the entire participant's call leg. Defaults to
   * `false`.
   */
  Record?: boolean;

  /**
   * Body param: The number of channels in the final recording. Defaults to `mono`.
   */
  RecordingChannels?: 'mono' | 'dual';

  /**
   * Body param: The URL the recording callbacks will be sent to.
   */
  RecordingStatusCallback?: string;

  /**
   * Body param: The changes to the recording's state that should generate a call to
   * `RecoridngStatusCallback`. Can be: `in-progress`, `completed` and `absent`.
   * Separate multiple values with a space. Defaults to `completed`.
   */
  RecordingStatusCallbackEvent?: string;

  /**
   * Body param: HTTP request type used for `RecordingStatusCallback`. Defaults to
   * `POST`.
   */
  RecordingStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: The audio track to record for the call. The default is `both`.
   */
  RecordingTrack?: 'inbound' | 'outbound' | 'both';

  /**
   * Body param: The password to use for SIP authentication.
   */
  SipAuthPassword?: string;

  /**
   * Body param: The username to use for SIP authentication.
   */
  SipAuthUsername?: string;

  /**
   * Body param: Whether to start the conference when the participant enters.
   * Defaults to `true`.
   */
  StartConferenceOnEnter?: boolean;

  /**
   * Body param: URL destination for Telnyx to send status callback events to for the
   * call.
   */
  StatusCallback?: string;

  /**
   * Body param: The changes to the call's state that should generate a call to
   * `StatusCallback`. Can be: `initiated`, `ringing`, `answered`, and `completed`.
   * Separate multiple values with a space. The default value is `completed`.
   */
  StatusCallbackEvent?: string;

  /**
   * Body param: HTTP request type used for `StatusCallback`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: The maximum duration of the call in seconds.
   */
  TimeLimit?: number;

  /**
   * Body param: The number of seconds that we should allow the phone to ring before
   * assuming there is no answer. Can be an integer between 5 and 120, inclusive. The
   * default value is 30.
   */
  timeout_seconds?: number;

  /**
   * Body param: The phone number of the called party. Phone numbers are formatted
   * with a `+` and country code.
   */
  To?: string;

  /**
   * Body param: Whether to trim any leading and trailing silence from the recording.
   * Defaults to `trim-silence`.
   */
  Trim?: 'trim-silence' | 'do-not-trim';

  /**
   * Body param: The URL to call for an audio file to play while the participant is
   * waiting for the conference to start.
   */
  WaitUrl?: string;
}

export namespace ParticipantParticipantsParams {
  export interface CustomHeader {
    /**
     * The name of the custom header
     */
    name: string;

    /**
     * The value of the custom header
     */
    value: string;
  }
}

export interface ParticipantRetrieveParticipantsParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export declare namespace Participants {
  export {
    type ParticipantRetrieveResponse as ParticipantRetrieveResponse,
    type ParticipantUpdateResponse as ParticipantUpdateResponse,
    type ParticipantParticipantsResponse as ParticipantParticipantsResponse,
    type ParticipantRetrieveParticipantsResponse as ParticipantRetrieveParticipantsResponse,
    type ParticipantRetrieveParams as ParticipantRetrieveParams,
    type ParticipantUpdateParams as ParticipantUpdateParams,
    type ParticipantDeleteParams as ParticipantDeleteParams,
    type ParticipantParticipantsParams as ParticipantParticipantsParams,
    type ParticipantRetrieveParticipantsParams as ParticipantRetrieveParticipantsParams,
  };
}
