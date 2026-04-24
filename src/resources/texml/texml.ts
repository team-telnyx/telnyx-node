// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountsAPI from './accounts/accounts';
import { AccountRetrieveRecordingsJsonParams, AccountRetrieveRecordingsJsonResponse, AccountRetrieveTranscriptionsJsonParams, AccountRetrieveTranscriptionsJsonResponse, Accounts, TexmlGetCallRecordingResponseBody, TexmlRecordingSubresourcesUris } from './accounts/accounts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * TeXML REST Commands
 */
export class Texml extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);

  /**
   * Initiate an outbound AI call with warm-up support. Validates parameters, builds
   * an internal TeXML with an AI Assistant configuration, encodes instructions into
   * client state, and calls the dial API. The Twiml, Texml, and Url parameters are
   * not allowed and will result in a 422 error.
   *
   * @example
   * ```ts
   * const response = await client.texml.initiateAICall(
   *   'connection_id',
   *   {
   *     AIAssistantId: 'ai-assistant-id-123',
   *     From: '+13120001234',
   *     To: '+13121230000',
   *   },
   * );
   * ```
   */
  initiateAICall(connectionID: string, params: TexmlInitiateAICallParams, options?: RequestOptions): APIPromise<TexmlInitiateAICallResponse> {
    const { timeout_seconds, ...body } = params
    return this._client.post(path`/texml/ai_calls/${connectionID}`, { body: { Timeout: timeout_seconds, ...body }, ...options });
  }

  /**
   * Create a TeXML secret which can be later used as a Dynamic Parameter for TeXML
   * when using Mustache Templates in your TeXML. In your TeXML you will be able to
   * use your secret name, and this name will be replaced by the actual secret value
   * when processing the TeXML on Telnyx side. The secrets are not visible in any
   * logs.
   *
   * @example
   * ```ts
   * const response = await client.texml.secrets({
   *   name: 'My Secret Name',
   *   value: 'My Secret Value',
   * });
   * ```
   */
  secrets(body: TexmlSecretsParams, options?: RequestOptions): APIPromise<TexmlSecretsResponse> {
    return this._client.post('/texml/secrets', { body, ...options });
  }
}

export interface TexmlInitiateAICallResponse {
  call_sid?: string;

  from?: string;

  status?: string;

  to?: string;
}

export interface TexmlSecretsResponse {
  data?: TexmlSecretsResponse.Data;
}

export namespace TexmlSecretsResponse {
  export interface Data {
    name?: string;

    value?: 'REDACTED';
  }
}

export interface TexmlInitiateAICallParams {
  /**
   * The ID of the AI assistant to use for the call.
   */
  AIAssistantId: string;

  /**
   * The phone number of the party initiating the call. Phone numbers are formatted
   * with a `+` and country code.
   */
  From: string;

  /**
   * The phone number of the called party. Phone numbers are formatted with a `+` and
   * country code.
   */
  To: string;

  /**
   * Key-value map of dynamic variables to pass to the AI assistant.
   */
  AIAssistantDynamicVariables?: { [key: string]: string };

  /**
   * The version of the AI assistant to use.
   */
  AIAssistantVersion?: string;

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
   * HTTP request type used for `AsyncAmdStatusCallback`.
   */
  AsyncAmdStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * To be used as the caller id name (SIP From Display Name) presented to the
   * destination (`To` number). The string should have a maximum of 128 characters,
   * containing only letters, numbers, spaces, and `-_~!.+` special characters. If
   * omitted, the display name will be the same as the number in the `From` field.
   */
  CallerId?: string;

  /**
   * URL destination for Telnyx to send conversation callback events to.
   */
  ConversationCallback?: string;

  /**
   * HTTP request type used for `ConversationCallback`.
   */
  ConversationCallbackMethod?: 'GET' | 'POST';

  /**
   * An array of URL destinations for conversation callback events.
   */
  ConversationCallbacks?: Array<string>;

  /**
   * Custom HTTP headers to be sent with the call. Each header should be an object
   * with 'name' and 'value' properties.
   */
  CustomHeaders?: Array<TexmlInitiateAICallParams.CustomHeader>;

  /**
   * Allows you to choose between Premium and Standard detections.
   */
  DetectionMode?: 'Premium' | 'Regular';

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
   * A string of passport identifiers to associate with the call.
   */
  Passports?: string;

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
   * `RecordingStatusCallback`. Can be: `in-progress`, `completed` and `absent`.
   * Separate multiple values with a space. Defaults to `completed`.
   */
  RecordingStatusCallbackEvent?: string;

  /**
   * HTTP request type used for `RecordingStatusCallback`. Defaults to `POST`.
   */
  RecordingStatusCallbackMethod?: 'GET' | 'POST';

  /**
   * The number of seconds that Telnyx will wait for the recording to be stopped if
   * silence is detected. The timer only starts when the speech is detected. The
   * minimum value is 0. The default value is 0 (infinite).
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
   * defined when separated by a space. Valid values: initiated, ringing, answered,
   * completed.
   */
  StatusCallbackEvent?: string;

  /**
   * HTTP request type used for `StatusCallback`.
   */
  StatusCallbackMethod?: 'GET' | 'POST';

  /**
   * An array of URL destinations for Telnyx to send status callback events to for
   * the call.
   */
  StatusCallbacks?: Array<string>;

  /**
   * The maximum duration of the call in seconds. The minimum value is 30 and the
   * maximum value is 14400 (4 hours). Default is 14400 seconds.
   */
  TimeLimit?: number;

  /**
   * The number of seconds to wait for the called party to answer the call before the
   * call is canceled. The minimum value is 5 and the maximum value is 120. Default
   * is 30 seconds.
   */
  timeout_seconds?: number;

  /**
   * Whether to trim any leading and trailing silence from the recording. Defaults to
   * `trim-silence`.
   */
  Trim?: 'trim-silence' | 'do-not-trim';
}

export namespace TexmlInitiateAICallParams {
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

export interface TexmlSecretsParams {
  /**
   * Name used as a reference for the secret, if the name already exists within the
   * account its value will be replaced
   */
  name: string;

  /**
   * Secret value which will be used when rendering the TeXML template
   */
  value: string;
}

Texml.Accounts = Accounts;

export declare namespace Texml {
  export {
    type TexmlInitiateAICallResponse as TexmlInitiateAICallResponse,
    type TexmlSecretsResponse as TexmlSecretsResponse,
    type TexmlInitiateAICallParams as TexmlInitiateAICallParams,
    type TexmlSecretsParams as TexmlSecretsParams
  };

  export {
    Accounts as Accounts,
    type TexmlGetCallRecordingResponseBody as TexmlGetCallRecordingResponseBody,
    type TexmlRecordingSubresourcesUris as TexmlRecordingSubresourcesUris,
    type AccountRetrieveRecordingsJsonResponse as AccountRetrieveRecordingsJsonResponse,
    type AccountRetrieveTranscriptionsJsonResponse as AccountRetrieveTranscriptionsJsonResponse,
    type AccountRetrieveRecordingsJsonParams as AccountRetrieveRecordingsJsonParams,
    type AccountRetrieveTranscriptionsJsonParams as AccountRetrieveTranscriptionsJsonParams
  };
}
