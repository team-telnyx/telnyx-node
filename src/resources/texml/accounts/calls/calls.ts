// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RecordingsAPI from './recordings';
import { RecordingRecordingSidJsonParams, RecordingRecordingSidJsonResponse, Recordings } from './recordings';
import * as RecordingsJsonAPI from './recordings-json';
import {
  RecordingsJson,
  RecordingsJsonRecordingsJsonParams,
  RecordingsJsonRecordingsJsonResponse,
  RecordingsJsonRetrieveRecordingsJsonParams,
  RecordingsJsonRetrieveRecordingsJsonResponse,
} from './recordings-json';
import * as SiprecAPI from './siprec';
import { Siprec, SiprecSiprecSidJsonParams, SiprecSiprecSidJsonResponse } from './siprec';
import * as StreamsAPI from './streams';
import { StreamStreamingSidJsonParams, StreamStreamingSidJsonResponse, Streams } from './streams';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Calls extends APIResource {
  recordingsJson: RecordingsJsonAPI.RecordingsJson = new RecordingsJsonAPI.RecordingsJson(this._client);
  recordings: RecordingsAPI.Recordings = new RecordingsAPI.Recordings(this._client);
  siprec: SiprecAPI.Siprec = new SiprecAPI.Siprec(this._client);
  streams: StreamsAPI.Streams = new StreamsAPI.Streams(this._client);

  /**
   * Returns an individual call identified by its CallSid. This endpoint is
   * eventually consistent.
   *
   * @example
   * ```ts
   * const call = await client.texml.accounts.calls.retrieve(
   *   'call_sid',
   *   { account_sid: 'account_sid' },
   * );
   * ```
   */
  retrieve(
    callSid: string,
    params: CallRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<CallRetrieveResponse> {
    const { account_sid } = params;
    return this._client.get(path`/texml/Accounts/${account_sid}/Calls/${callSid}`, options);
  }

  /**
   * Update TeXML call. Please note that the keys present in the payload MUST BE
   * formatted in CamelCase as specified in the example.
   *
   * @example
   * ```ts
   * const call = await client.texml.accounts.calls.update(
   *   'call_sid',
   *   { account_sid: 'account_sid' },
   * );
   * ```
   */
  update(
    callSid: string,
    params: CallUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CallUpdateResponse> {
    const { account_sid, ...body } = params;
    return this._client.post(path`/texml/Accounts/${account_sid}/Calls/${callSid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request
   * URL configured for the connection in the Mission Control Portal.
   *
   * @example
   * ```ts
   * const response = await client.texml.accounts.calls.calls(
   *   'account_sid',
   *   {
   *     ApplicationSid: 'example-app-sid',
   *     From: '+13120001234',
   *     To: '+13121230000',
   *   },
   * );
   * ```
   */
  calls(accountSid: string, body: CallCallsParams, options?: RequestOptions): APIPromise<CallCallsResponse> {
    return this._client.post(path`/texml/Accounts/${accountSid}/Calls`, { body, ...options });
  }

  /**
   * Returns multiple call resouces for an account. This endpoint is eventually
   * consistent.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.retrieveCalls(
   *     'account_sid',
   *   );
   * ```
   */
  retrieveCalls(
    accountSid: string,
    query: CallRetrieveCallsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CallRetrieveCallsResponse> {
    return this._client.get(path`/texml/Accounts/${accountSid}/Calls`, { query, ...options });
  }

  /**
   * Starts siprec session with specified parameters for call idientified by
   * call_sid.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.siprecJson('call_sid', {
   *     account_sid: 'account_sid',
   *   });
   * ```
   */
  siprecJson(
    callSid: string,
    params: CallSiprecJsonParams,
    options?: RequestOptions,
  ): APIPromise<CallSiprecJsonResponse> {
    const { account_sid, ...body } = params;
    return this._client.post(path`/texml/Accounts/${account_sid}/Calls/${callSid}/Siprec.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Starts streaming media from a call to a specific WebSocket address.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.calls.streamsJson(
   *     'call_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  streamsJson(
    callSid: string,
    params: CallStreamsJsonParams,
    options?: RequestOptions,
  ): APIPromise<CallStreamsJsonResponse> {
    const { account_sid, ...body } = params;
    return this._client.post(path`/texml/Accounts/${account_sid}/Calls/${callSid}/Streams.json`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }
}

export interface UpdateCall {
  /**
   * HTTP request type used for `FallbackUrl`.
   */
  FallbackMethod?: 'GET' | 'POST';

  /**
   * A failover URL for which Telnyx will retrieve the TeXML call instructions if the
   * Url is not responding.
   */
  FallbackUrl?: string;

  /**
   * HTTP request type used for `Url`.
   */
  Method?: 'GET' | 'POST';

  /**
   * The value to set the call status to. Setting the status to completed ends the
   * call.
   */
  Status?: string;

  /**
   * URL destination for Telnyx to send status callback events to for the call.
   */
  StatusCallback?: string;

  /**
   * HTTP request type used for `StatusCallback`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * TeXML to replace the current one with.
   */
  Texml?: string;

  /**
   * The URL where TeXML will make a request to retrieve a new set of TeXML
   * instructions to continue the call flow.
   */
  Url?: string;
}

export interface CallRetrieveResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The value of the answering machine detection result, if this feature was enabled
   * for the call.
   */
  answered_by?: 'human' | 'machine' | 'not_sure';

  /**
   * Caller ID, if present.
   */
  caller_name?: string;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * The direction of this call.
   */
  direction?: 'inbound' | 'outbound';

  /**
   * The duration of this call, given in seconds.
   */
  duration?: string;

  /**
   * The end time of this call.
   */
  end_time?: string;

  /**
   * The phone number or SIP address that made this call.
   */
  from?: string;

  /**
   * The from number formatted for display.
   */
  from_formatted?: string;

  /**
   * The price of this call, the currency is specified in the price_unit field. Only
   * populated when the call cost feature is enabled for the account.
   */
  price?: string;

  /**
   * The unit in which the price is given.
   */
  price_unit?: string;

  /**
   * The identifier of this call.
   */
  sid?: string;

  /**
   * The start time of this call.
   */
  start_time?: string;

  /**
   * The status of this call.
   */
  status?: 'ringing' | 'in-progress' | 'canceled' | 'completed' | 'failed' | 'busy' | 'no-answer';

  /**
   * The phone number or SIP address that received this call.
   */
  to?: string;

  /**
   * The to number formatted for display.
   */
  to_formatted?: string;

  /**
   * The relative URI for this call.
   */
  uri?: string;
}

export interface CallUpdateResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The value of the answering machine detection result, if this feature was enabled
   * for the call.
   */
  answered_by?: 'human' | 'machine' | 'not_sure';

  /**
   * Caller ID, if present.
   */
  caller_name?: string;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * The direction of this call.
   */
  direction?: 'inbound' | 'outbound';

  /**
   * The duration of this call, given in seconds.
   */
  duration?: string;

  /**
   * The end time of this call.
   */
  end_time?: string;

  /**
   * The phone number or SIP address that made this call.
   */
  from?: string;

  /**
   * The from number formatted for display.
   */
  from_formatted?: string;

  /**
   * The price of this call, the currency is specified in the price_unit field. Only
   * populated when the call cost feature is enabled for the account.
   */
  price?: string;

  /**
   * The unit in which the price is given.
   */
  price_unit?: string;

  /**
   * The identifier of this call.
   */
  sid?: string;

  /**
   * The start time of this call.
   */
  start_time?: string;

  /**
   * The status of this call.
   */
  status?: 'ringing' | 'in-progress' | 'canceled' | 'completed' | 'failed' | 'busy' | 'no-answer';

  /**
   * The phone number or SIP address that received this call.
   */
  to?: string;

  /**
   * The to number formatted for display.
   */
  to_formatted?: string;

  /**
   * The relative URI for this call.
   */
  uri?: string;
}

export interface CallCallsResponse {
  from?: string;

  status?: string;

  to?: string;
}

export interface CallRetrieveCallsResponse {
  calls?: Array<CallRetrieveCallsResponse.Call>;

  /**
   * The number of the last element on the page, zero-indexed.
   */
  end?: number;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Calls.json?Page=0&PageSize=1
   */
  first_page_uri?: string;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Calls.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ
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

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export namespace CallRetrieveCallsResponse {
  export interface Call {
    /**
     * The id of the account the resource belongs to.
     */
    account_sid?: string;

    /**
     * The value of the answering machine detection result, if this feature was enabled
     * for the call.
     */
    answered_by?: 'human' | 'machine' | 'not_sure';

    /**
     * Caller ID, if present.
     */
    caller_name?: string;

    /**
     * The timestamp of when the resource was created.
     */
    date_created?: string;

    /**
     * The timestamp of when the resource was last updated.
     */
    date_updated?: string;

    /**
     * The direction of this call.
     */
    direction?: 'inbound' | 'outbound';

    /**
     * The duration of this call, given in seconds.
     */
    duration?: string;

    /**
     * The end time of this call.
     */
    end_time?: string;

    /**
     * The phone number or SIP address that made this call.
     */
    from?: string;

    /**
     * The from number formatted for display.
     */
    from_formatted?: string;

    /**
     * The price of this call, the currency is specified in the price_unit field. Only
     * populated when the call cost feature is enabled for the account.
     */
    price?: string;

    /**
     * The unit in which the price is given.
     */
    price_unit?: string;

    /**
     * The identifier of this call.
     */
    sid?: string;

    /**
     * The start time of this call.
     */
    start_time?: string;

    /**
     * The status of this call.
     */
    status?: 'ringing' | 'in-progress' | 'canceled' | 'completed' | 'failed' | 'busy' | 'no-answer';

    /**
     * The phone number or SIP address that received this call.
     */
    to?: string;

    /**
     * The to number formatted for display.
     */
    to_formatted?: string;

    /**
     * The relative URI for this call.
     */
    uri?: string;
  }
}

export interface CallSiprecJsonResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The id of the call the resource belongs to.
   */
  call_sid?: string;

  /**
   * The date and time the siprec session was created.
   */
  date_created?: string;

  /**
   * The date and time the siprec session was last updated.
   */
  date_updated?: string;

  /**
   * The error code of the siprec session.
   */
  error_code?: string;

  /**
   * The SID of the siprec session.
   */
  sid?: string;

  /**
   * The date and time the siprec session was started.
   */
  start_time?: string;

  /**
   * The status of the siprec session.
   */
  status?: 'in-progress' | 'stopped';

  /**
   * The track used for the siprec session.
   */
  track?: 'both_tracks' | 'inbound_track' | 'outbound_track';

  /**
   * The URI of the siprec session.
   */
  uri?: string;
}

export interface CallStreamsJsonResponse {
  account_sid?: string;

  call_sid?: string;

  date_updated?: string;

  /**
   * The user specified name of Stream.
   */
  name?: string;

  /**
   * Identifier of a resource.
   */
  sid?: string;

  /**
   * The status of the streaming.
   */
  status?: 'in-progress';

  /**
   * The relative URI for this streaming resource.
   */
  uri?: string;
}

export interface CallRetrieveParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export interface CallUpdateParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Body param: HTTP request type used for `FallbackUrl`.
   */
  FallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: A failover URL for which Telnyx will retrieve the TeXML call
   * instructions if the Url is not responding.
   */
  FallbackUrl?: string;

  /**
   * Body param: HTTP request type used for `Url`.
   */
  Method?: 'GET' | 'POST';

  /**
   * Body param: The value to set the call status to. Setting the status to completed
   * ends the call.
   */
  Status?: string;

  /**
   * Body param: URL destination for Telnyx to send status callback events to for the
   * call.
   */
  StatusCallback?: string;

  /**
   * Body param: HTTP request type used for `StatusCallback`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: TeXML to replace the current one with.
   */
  Texml?: string;

  /**
   * Body param: The URL where TeXML will make a request to retrieve a new set of
   * TeXML instructions to continue the call flow.
   */
  Url?: string;
}

export interface CallCallsParams {
  /**
   * The ID of the TeXML Application.
   */
  ApplicationSid: string;

  /**
   * The phone number of the party that initiated the call. Phone numbers are
   * formatted with a `+` and country code.
   */
  From: string;

  /**
   * The phone number of the called party. Phone numbers are formatted with a `+` and
   * country code.
   */
  To: string;

  /**
   * Select whether to perform answering machine detection in the background. By
   * default execution is blocked until Answering Machine Detection is completed.
   */
  AsyncAmd?: boolean;

  /**
   * URL destination for Telnyx to send AMD callback events to for the call.
   */
  AsyncAmdStatusCallback?: string;

  /**
   * HTTP request type used for `AsyncAmdStatusCallback`. The default value is
   * inherited from TeXML Application setting.
   */
  AsyncAmdStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * To be used as the caller id name (SIP From Display Name) presented to the
   * destination (`To` number). The string should have a maximum of 128 characters,
   * containing only letters, numbers, spaces, and `-_~!.+` special characters. If
   * ommited, the display name will be the same as the number in the `From` field.
   */
  CallerId?: string;

  /**
   * Whether to cancel ongoing playback on `greeting ended` detection. Defaults to
   * `true`.
   */
  CancelPlaybackOnDetectMessageEnd?: boolean;

  /**
   * Whether to cancel ongoing playback on `machine` detection. Defaults to `true`.
   */
  CancelPlaybackOnMachineDetection?: boolean;

  /**
   * Custom HTTP headers to be sent with the call. Each header should be an object
   * with 'name' and 'value' properties.
   */
  CustomHeaders?: Array<CallCallsParams.CustomHeader>;

  /**
   * Allows you to chose between Premium and Standard detections.
   */
  DetectionMode?: 'Premium' | 'Regular';

  /**
   * A failover URL for which Telnyx will retrieve the TeXML call instructions if the
   * `Url` is not responding.
   */
  FallbackUrl?: string;

  /**
   * Enables Answering Machine Detection.
   */
  MachineDetection?: 'Enable' | 'Disable' | 'DetectMessageEnd';

  /**
   * If initial silence duration is greater than this value, consider it a machine.
   * Ignored when `premium` detection is used.
   */
  MachineDetectionSilenceTimeout?: number;

  /**
   * Silence duration threshold after a greeting message or voice for it be
   * considered human. Ignored when `premium` detection is used.
   */
  MachineDetectionSpeechEndThreshold?: number;

  /**
   * Maximum threshold of a human greeting. If greeting longer than this value,
   * considered machine. Ignored when `premium` detection is used.
   */
  MachineDetectionSpeechThreshold?: number;

  /**
   * Maximum timeout threshold in milliseconds for overall detection.
   */
  MachineDetectionTimeout?: number;

  /**
   * The list of comma-separated codecs to be offered on a call.
   */
  PreferredCodecs?: string;

  /**
   * Whether to record the entire participant's call leg. Defaults to `false`.
   */
  Record?: boolean;

  /**
   * The number of channels in the final recording. Defaults to `mono`.
   */
  RecordingChannels?: 'mono' | 'dual';

  /**
   * The URL the recording callbacks will be sent to.
   */
  RecordingStatusCallback?: string;

  /**
   * The changes to the recording's state that should generate a call to
   * `RecoridngStatusCallback`. Can be: `in-progress`, `completed` and `absent`.
   * Separate multiple values with a space. Defaults to `completed`.
   */
  RecordingStatusCallbackEvent?: string;

  /**
   * HTTP request type used for `RecordingStatusCallback`. Defaults to `POST`.
   */
  RecordingStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * The number of seconds that Telnyx will wait for the recording to be stopped if
   * silence is detected. The timer only starts when the speech is detected. Please
   * note that the transcription is used to detect silence and the related charge
   * will be applied. The minimum value is 0. The default value is 0 (infinite)
   */
  RecordingTimeout?: number;

  /**
   * The audio track to record for the call. The default is `both`.
   */
  RecordingTrack?: 'inbound' | 'outbound' | 'both';

  /**
   * Whether to send RecordingUrl in webhooks.
   */
  SendRecordingUrl?: boolean;

  /**
   * The password to use for SIP authentication.
   */
  SipAuthPassword?: string;

  /**
   * The username to use for SIP authentication.
   */
  SipAuthUsername?: string;

  /**
   * Defines the SIP region to be used for the call.
   */
  SipRegion?: 'US' | 'Europe' | 'Canada' | 'Australia' | 'Middle East';

  /**
   * URL destination for Telnyx to send status callback events to for the call.
   */
  StatusCallback?: string;

  /**
   * The call events for which Telnyx should send a webhook. Multiple events can be
   * defined when separated by a space.
   */
  StatusCallbackEvent?: 'initiated' | 'ringing' | 'answered' | 'completed';

  /**
   * HTTP request type used for `StatusCallback`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * The call control ID of the existing call to supervise. When provided, the
   * created leg will be added to the specified call in supervising mode. Status
   * callbacks and action callbacks will NOT be sent for the supervising leg.
   */
  SuperviseCallSid?: string;

  /**
   * The supervising role for the new leg. Determines the audio behavior: barge (hear
   * both sides), whisper (only hear supervisor), monitor (hear both sides but
   * supervisor muted). Default: barge
   */
  SupervisingRole?: 'barge' | 'whisper' | 'monitor';

  /**
   * Whether to trim any leading and trailing silence from the recording. Defaults to
   * `trim-silence`.
   */
  Trim?: 'trim-silence' | 'do-not-trim';

  /**
   * The URL from which Telnyx will retrieve the TeXML call instructions.
   */
  Url?: string;

  /**
   * HTTP request type used for `Url`. The default value is inherited from TeXML
   * Application setting.
   */
  UrlMethod?: 'GET' | 'POST';
}

export namespace CallCallsParams {
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

export interface CallRetrieveCallsParams {
  /**
   * Filters calls by their end date. Expected format is YYYY-MM-DD
   */
  EndTime?: string;

  /**
   * Filters calls by their end date (after). Expected format is YYYY-MM-DD
   */
  EndTime_gt?: string;

  /**
   * Filters calls by their end date (before). Expected format is YYYY-MM-DD
   */
  EndTime_lt?: string;

  /**
   * Filters calls by the from number.
   */
  From?: string;

  /**
   * The number of the page to be displayed, zero-indexed, should be used in
   * conjuction with PageToken.
   */
  Page?: number;

  /**
   * The number of records to be displayed on a page
   */
  PageSize?: number;

  /**
   * Used to request the next page of results.
   */
  PageToken?: string;

  /**
   * Filters calls by their start date. Expected format is YYYY-MM-DD.
   */
  StartTime?: string;

  /**
   * Filters calls by their start date (after). Expected format is YYYY-MM-DD
   */
  StartTime_gt?: string;

  /**
   * Filters calls by their start date (before). Expected format is YYYY-MM-DD
   */
  StartTime_lt?: string;

  /**
   * Filters calls by status.
   */
  Status?: 'canceled' | 'completed' | 'failed' | 'busy' | 'no-answer';

  /**
   * Filters calls by the to number.
   */
  To?: string;
}

export interface CallSiprecJsonParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Body param: The name of the connector to use for the SIPREC session.
   */
  ConnectorName?: string;

  /**
   * Body param: When set, custom parameters will be added as metadata
   * (recording.session.ExtensionParameters). Otherwise, they’ll be added to sip
   * headers.
   */
  IncludeMetadataCustomHeaders?: true | false;

  /**
   * Body param: Name of the SIPREC session. May be used to stop the SIPREC session
   * from TeXML instruction.
   */
  Name?: string;

  /**
   * Body param: Controls whether to encrypt media sent to your SRS using SRTP and
   * TLS. When set you need to configure SRS port in your connector to 5061.
   */
  Secure?: true | false;

  /**
   * Body param: Sets `Session-Expires` header to the INVITE. A reinvite is sent
   * every half the value set. Usefull for session keep alive. Minimum value is 90,
   * set to 0 to disable.
   */
  SessionTimeoutSecs?: number;

  /**
   * Body param: Specifies SIP transport protocol.
   */
  SipTransport?: 'udp' | 'tcp' | 'tls';

  /**
   * Body param: URL destination for Telnyx to send status callback events to for the
   * siprec session.
   */
  StatusCallback?: string;

  /**
   * Body param: HTTP request type used for `StatusCallback`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: The track to be used for siprec session. Can be `both_tracks`,
   * `inbound_track` or `outbound_track`. Defaults to `both_tracks`.
   */
  Track?: 'both_tracks' | 'inbound_track' | 'outbound_track';
}

export interface CallStreamsJsonParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Body param: Indicates codec for bidirectional streaming RTP payloads. Used only
   * with stream_bidirectional_mode=rtp. Case sensitive.
   */
  BidirectionalCodec?: 'PCMU' | 'PCMA' | 'G722';

  /**
   * Body param: Configures method of bidirectional streaming (mp3, rtp).
   */
  BidirectionalMode?: 'mp3' | 'rtp';

  /**
   * Body param: The user specified name of Stream.
   */
  Name?: string;

  /**
   * Body param: Url where status callbacks will be sent.
   */
  StatusCallback?: string;

  /**
   * Body param: HTTP method used to send status callbacks.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * Body param: Tracks to be included in the stream
   */
  Track?: 'inbound_track' | 'outbound_track' | 'both_tracks';

  /**
   * Body param: The destination WebSocket address where the stream is going to be
   * delivered.
   */
  Url?: string;
}

Calls.RecordingsJson = RecordingsJson;
Calls.Recordings = Recordings;
Calls.Siprec = Siprec;
Calls.Streams = Streams;

export declare namespace Calls {
  export {
    type UpdateCall as UpdateCall,
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallUpdateResponse as CallUpdateResponse,
    type CallCallsResponse as CallCallsResponse,
    type CallRetrieveCallsResponse as CallRetrieveCallsResponse,
    type CallSiprecJsonResponse as CallSiprecJsonResponse,
    type CallStreamsJsonResponse as CallStreamsJsonResponse,
    type CallRetrieveParams as CallRetrieveParams,
    type CallUpdateParams as CallUpdateParams,
    type CallCallsParams as CallCallsParams,
    type CallRetrieveCallsParams as CallRetrieveCallsParams,
    type CallSiprecJsonParams as CallSiprecJsonParams,
    type CallStreamsJsonParams as CallStreamsJsonParams,
  };

  export {
    RecordingsJson as RecordingsJson,
    type RecordingsJsonRecordingsJsonResponse as RecordingsJsonRecordingsJsonResponse,
    type RecordingsJsonRetrieveRecordingsJsonResponse as RecordingsJsonRetrieveRecordingsJsonResponse,
    type RecordingsJsonRecordingsJsonParams as RecordingsJsonRecordingsJsonParams,
    type RecordingsJsonRetrieveRecordingsJsonParams as RecordingsJsonRetrieveRecordingsJsonParams,
  };

  export {
    Recordings as Recordings,
    type RecordingRecordingSidJsonResponse as RecordingRecordingSidJsonResponse,
    type RecordingRecordingSidJsonParams as RecordingRecordingSidJsonParams,
  };

  export {
    Siprec as Siprec,
    type SiprecSiprecSidJsonResponse as SiprecSiprecSidJsonResponse,
    type SiprecSiprecSidJsonParams as SiprecSiprecSidJsonParams,
  };

  export {
    Streams as Streams,
    type StreamStreamingSidJsonResponse as StreamStreamingSidJsonResponse,
    type StreamStreamingSidJsonParams as StreamStreamingSidJsonParams,
  };
}
