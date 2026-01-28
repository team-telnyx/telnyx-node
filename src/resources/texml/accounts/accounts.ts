// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QueuesAPI from './queues';
import {
  QueueCreateParams,
  QueueCreateResponse,
  QueueDeleteParams,
  QueueListParams,
  QueueListResponse,
  QueueListResponsesDefaultPaginationForQueues,
  QueueRetrieveParams,
  QueueRetrieveResponse,
  QueueUpdateParams,
  QueueUpdateResponse,
  Queues,
} from './queues';
import * as CallsAPI from './calls/calls';
import {
  CallCallsParams,
  CallCallsResponse,
  CallRetrieveCallsParams,
  CallRetrieveCallsResponse,
  CallRetrieveParams,
  CallRetrieveResponse,
  CallSiprecJsonParams,
  CallSiprecJsonResponse,
  CallStreamsJsonParams,
  CallStreamsJsonResponse,
  CallUpdateParams,
  CallUpdateResponse,
  Calls,
  UpdateCall,
} from './calls/calls';
import * as ConferencesAPI from './conferences/conferences';
import {
  ConferenceRetrieveConferencesParams,
  ConferenceRetrieveConferencesResponse,
  ConferenceRetrieveParams,
  ConferenceRetrieveRecordingsJsonParams,
  ConferenceRetrieveRecordingsJsonResponse,
  ConferenceRetrieveRecordingsParams,
  ConferenceRetrieveRecordingsResponse,
  ConferenceRetrieveResponse,
  ConferenceUpdateParams,
  ConferenceUpdateResponse,
  Conferences,
} from './conferences/conferences';
import * as RecordingsAPI from './recordings/recordings';
import { Recordings } from './recordings/recordings';
import * as TranscriptionsAPI from './transcriptions/transcriptions';
import { Transcriptions } from './transcriptions/transcriptions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Accounts extends APIResource {
  calls: CallsAPI.Calls = new CallsAPI.Calls(this._client);
  conferences: ConferencesAPI.Conferences = new ConferencesAPI.Conferences(this._client);
  recordings: RecordingsAPI.Recordings = new RecordingsAPI.Recordings(this._client);
  transcriptions: TranscriptionsAPI.Transcriptions = new TranscriptionsAPI.Transcriptions(this._client);
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);

  /**
   * Returns multiple recording resources for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.retrieveRecordingsJson(
   *     'account_sid',
   *   );
   * ```
   */
  retrieveRecordingsJson(
    accountSid: string,
    query: AccountRetrieveRecordingsJsonParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveRecordingsJsonResponse> {
    return this._client.get(path`/texml/Accounts/${accountSid}/Recordings.json`, { query, ...options });
  }

  /**
   * Returns multiple recording transcription resources for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.retrieveTranscriptionsJson(
   *     'account_sid',
   *   );
   * ```
   */
  retrieveTranscriptionsJson(
    accountSid: string,
    query: AccountRetrieveTranscriptionsJsonParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveTranscriptionsJsonResponse> {
    return this._client.get(path`/texml/Accounts/${accountSid}/Transcriptions.json`, { query, ...options });
  }
}

export interface TexmlGetCallRecordingResponseBody {
  account_sid?: string;

  call_sid?: string;

  channels?: 1 | 2;

  conference_sid?: string | null;

  date_created?: string;

  date_updated?: string;

  /**
   * The duration of this recording, given in seconds.
   */
  duration?: string | null;

  error_code?: string | null;

  media_url?: string;

  /**
   * Identifier of a resource.
   */
  sid?: string;

  /**
   * Defines how the recording was created.
   */
  source?:
    | 'StartCallRecordingAPI'
    | 'StartConferenceRecordingAPI'
    | 'OutboundAPI'
    | 'DialVerb'
    | 'Conference'
    | 'RecordVerb'
    | 'Trunking';

  start_time?: string;

  status?: 'in-progress' | 'completed' | 'paused' | 'stopped';

  /**
   * Subresources details for a recording if available.
   */
  subresources_uris?: TexmlRecordingSubresourcesUris;

  /**
   * The relative URI for this recording resource.
   */
  uri?: string;
}

/**
 * Subresources details for a recording if available.
 */
export interface TexmlRecordingSubresourcesUris {
  transcriptions?: string | null;
}

export interface AccountRetrieveRecordingsJsonResponse {
  /**
   * The number of the last element on the page, zero-indexed.
   */
  end?: number;

  /**
   * Relative uri to the first page of the query results
   */
  first_page_uri?: string;

  /**
   * Relative uri to the next page of the query results
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
   * Relative uri to the previous page of the query results
   */
  previous_page_uri?: string;

  recordings?: Array<TexmlGetCallRecordingResponseBody>;

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export interface AccountRetrieveTranscriptionsJsonResponse {
  /**
   * The number of the last element on the page, zero-indexed
   */
  end?: number;

  /**
   * Relative uri to the first page of the query results
   */
  first_page_uri?: string;

  /**
   * Relative uri to the next page of the query results
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
   * Relative uri to the previous page of the query results
   */
  previous_page_uri?: string;

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  transcriptions?: Array<AccountRetrieveTranscriptionsJsonResponse.Transcription>;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export namespace AccountRetrieveTranscriptionsJsonResponse {
  export interface Transcription {
    account_sid?: string;

    /**
     * The version of the API that was used to make the request.
     */
    api_version?: string;

    call_sid?: string;

    date_created?: string;

    date_updated?: string;

    /**
     * The duration of this recording, given in seconds.
     */
    duration?: string | null;

    /**
     * Identifier of a resource.
     */
    recording_sid?: string;

    /**
     * Identifier of a resource.
     */
    sid?: string;

    /**
     * The status of the recording transcriptions. The transcription text will be
     * available only when the status is completed.
     */
    status?: 'in-progress' | 'completed';

    /**
     * The recording's transcribed text
     */
    transcription_text?: string;

    /**
     * The relative URI for the recording transcription resource.
     */
    uri?: string;
  }
}

export interface AccountRetrieveRecordingsJsonParams {
  /**
   * Filters recording by the creation date. Expected format is ISO8601 date or
   * date-time, ie. {YYYY}-{MM}-{DD} or {YYYY}-{MM}-{DD}T{hh}:{mm}:{ss}Z. Also
   * accepts inequality operators, e.g. DateCreated>=2023-05-22.
   */
  DateCreated?: string;

  /**
   * The number of the page to be displayed, zero-indexed, should be used in
   * conjuction with PageToken.
   */
  Page?: number;

  /**
   * The number of records to be displayed on a page
   */
  PageSize?: number;
}

export interface AccountRetrieveTranscriptionsJsonParams {
  /**
   * The number of records to be displayed on a page
   */
  PageSize?: number;

  /**
   * Used to request the next page of results.
   */
  PageToken?: string;
}

Accounts.Calls = Calls;
Accounts.Conferences = Conferences;
Accounts.Recordings = Recordings;
Accounts.Transcriptions = Transcriptions;
Accounts.Queues = Queues;

export declare namespace Accounts {
  export {
    type TexmlGetCallRecordingResponseBody as TexmlGetCallRecordingResponseBody,
    type TexmlRecordingSubresourcesUris as TexmlRecordingSubresourcesUris,
    type AccountRetrieveRecordingsJsonResponse as AccountRetrieveRecordingsJsonResponse,
    type AccountRetrieveTranscriptionsJsonResponse as AccountRetrieveTranscriptionsJsonResponse,
    type AccountRetrieveRecordingsJsonParams as AccountRetrieveRecordingsJsonParams,
    type AccountRetrieveTranscriptionsJsonParams as AccountRetrieveTranscriptionsJsonParams,
  };

  export {
    Calls as Calls,
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
    Conferences as Conferences,
    type ConferenceRetrieveResponse as ConferenceRetrieveResponse,
    type ConferenceUpdateResponse as ConferenceUpdateResponse,
    type ConferenceRetrieveConferencesResponse as ConferenceRetrieveConferencesResponse,
    type ConferenceRetrieveRecordingsResponse as ConferenceRetrieveRecordingsResponse,
    type ConferenceRetrieveRecordingsJsonResponse as ConferenceRetrieveRecordingsJsonResponse,
    type ConferenceRetrieveParams as ConferenceRetrieveParams,
    type ConferenceUpdateParams as ConferenceUpdateParams,
    type ConferenceRetrieveConferencesParams as ConferenceRetrieveConferencesParams,
    type ConferenceRetrieveRecordingsParams as ConferenceRetrieveRecordingsParams,
    type ConferenceRetrieveRecordingsJsonParams as ConferenceRetrieveRecordingsJsonParams,
  };

  export { Recordings as Recordings };

  export { Transcriptions as Transcriptions };

  export {
    Queues as Queues,
    type QueueCreateResponse as QueueCreateResponse,
    type QueueRetrieveResponse as QueueRetrieveResponse,
    type QueueUpdateResponse as QueueUpdateResponse,
    type QueueListResponse as QueueListResponse,
    type QueueListResponsesDefaultPaginationForQueues as QueueListResponsesDefaultPaginationForQueues,
    type QueueCreateParams as QueueCreateParams,
    type QueueRetrieveParams as QueueRetrieveParams,
    type QueueUpdateParams as QueueUpdateParams,
    type QueueListParams as QueueListParams,
    type QueueDeleteParams as QueueDeleteParams,
  };
}
