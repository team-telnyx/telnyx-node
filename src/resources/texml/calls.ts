// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Calls extends APIResource {
  /**
   * Update TeXML call. Please note that the keys present in the payload MUST BE
   * formatted in CamelCase as specified in the example.
   *
   * @example
   * ```ts
   * const call = await client.texml.calls.update('call_sid');
   * ```
   */
  update(callSid: string, body: CallUpdateParams, options?: RequestOptions): APIPromise<CallUpdateResponse> {
    return this._client.post(path`/texml/calls/${callSid}/update`, { body, ...options });
  }

  /**
   * Initiate an outbound TeXML call. Telnyx will request TeXML from the XML Request
   * URL configured for the connection in the Mission Control Portal.
   *
   * @example
   * ```ts
   * const response = await client.texml.calls.initiate(
   *   'application_id',
   *   { From: '+13120001234', To: '+13121230000' },
   * );
   * ```
   */
  initiate(
    applicationID: string,
    body: CallInitiateParams,
    options?: RequestOptions,
  ): APIPromise<CallInitiateResponse> {
    return this._client.post(path`/texml/calls/${applicationID}`, { body, ...options });
  }
}

export interface CallUpdateResponse {
  data?: CallUpdateResponse.Data;
}

export namespace CallUpdateResponse {
  export interface Data {
    sid?: string;

    status?: string;
  }
}

export interface CallInitiateResponse {
  data?: CallInitiateResponse.Data;
}

export namespace CallInitiateResponse {
  export interface Data {
    from?: string;

    status?: string;

    to?: string;
  }
}

export interface CallUpdateParams {
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

export interface CallInitiateParams {
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
   * The password to use for SIP authentication.
   */
  SipAuthPassword?: string;

  /**
   * The username to use for SIP authentication.
   */
  SipAuthUsername?: string;

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

export declare namespace Calls {
  export {
    type CallUpdateResponse as CallUpdateResponse,
    type CallInitiateResponse as CallInitiateResponse,
    type CallUpdateParams as CallUpdateParams,
    type CallInitiateParams as CallInitiateParams,
  };
}
