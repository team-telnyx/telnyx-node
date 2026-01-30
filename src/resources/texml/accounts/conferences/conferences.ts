// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AccountsAPI from '../accounts';
import * as ParticipantsAPI from './participants';
import {
  ParticipantDeleteParams,
  ParticipantParticipantsParams,
  ParticipantParticipantsResponse,
  ParticipantRetrieveParams,
  ParticipantRetrieveParticipantsParams,
  ParticipantRetrieveParticipantsResponse,
  ParticipantRetrieveResponse,
  ParticipantUpdateParams,
  ParticipantUpdateResponse,
  Participants,
} from './participants';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Conferences extends APIResource {
  participants: ParticipantsAPI.Participants = new ParticipantsAPI.Participants(this._client);

  /**
   * Returns a conference resource.
   *
   * @example
   * ```ts
   * const conference =
   *   await client.texml.accounts.conferences.retrieve(
   *     'conference_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  retrieve(
    conferenceSid: string,
    params: ConferenceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ConferenceRetrieveResponse> {
    const { account_sid } = params;
    return this._client.get(path`/texml/Accounts/${account_sid}/Conferences/${conferenceSid}`, options);
  }

  /**
   * Updates a conference resource.
   *
   * @example
   * ```ts
   * const conference =
   *   await client.texml.accounts.conferences.update(
   *     'conference_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  update(
    conferenceSid: string,
    params: ConferenceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConferenceUpdateResponse> {
    const { account_sid, ...body } = params;
    return this._client.post(path`/texml/Accounts/${account_sid}/Conferences/${conferenceSid}`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Lists conference resources.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.conferences.retrieveConferences(
   *     'account_sid',
   *   );
   * ```
   */
  retrieveConferences(
    accountSid: string,
    query: ConferenceRetrieveConferencesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConferenceRetrieveConferencesResponse> {
    return this._client.get(path`/texml/Accounts/${accountSid}/Conferences`, { query, ...options });
  }

  /**
   * Lists conference recordings
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.conferences.retrieveRecordings(
   *     'conference_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  retrieveRecordings(
    conferenceSid: string,
    params: ConferenceRetrieveRecordingsParams,
    options?: RequestOptions,
  ): APIPromise<ConferenceRetrieveRecordingsResponse> {
    const { account_sid } = params;
    return this._client.get(
      path`/texml/Accounts/${account_sid}/Conferences/${conferenceSid}/Recordings`,
      options,
    );
  }

  /**
   * Returns recordings for a conference identified by conference_sid.
   *
   * @example
   * ```ts
   * const response =
   *   await client.texml.accounts.conferences.retrieveRecordingsJson(
   *     'conference_sid',
   *     { account_sid: 'account_sid' },
   *   );
   * ```
   */
  retrieveRecordingsJson(
    conferenceSid: string,
    params: ConferenceRetrieveRecordingsJsonParams,
    options?: RequestOptions,
  ): APIPromise<ConferenceRetrieveRecordingsJsonResponse> {
    const { account_sid } = params;
    return this._client.get(
      path`/texml/Accounts/${account_sid}/Conferences/${conferenceSid}/Recordings.json`,
      options,
    );
  }
}

export interface ConferenceRetrieveResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The version of the API that was used to make the request.
   */
  api_version?: string;

  /**
   * Caller ID, if present.
   */
  call_sid_ending_conference?: string;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * A string that you assigned to describe this conference room.
   */
  friendly_name?: string;

  /**
   * The reason why a conference ended. When a conference is in progress, will be
   * null.
   */
  reason_conference_ended?:
    | 'participant-with-end-conference-on-exit-left'
    | 'last-participant-left'
    | 'conference-ended-via-api'
    | 'time-exceeded';

  /**
   * A string representing the region where the conference is hosted.
   */
  region?: string;

  /**
   * The unique identifier of the conference.
   */
  sid?: string;

  /**
   * The status of this conference.
   */
  status?: 'init' | 'in-progress' | 'completed';

  /**
   * A list of related resources identified by their relative URIs.
   */
  subresource_uris?: { [key: string]: unknown };

  /**
   * The relative URI for this conference.
   */
  uri?: string;
}

export interface ConferenceUpdateResponse {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid?: string;

  /**
   * The version of the API that was used to make the request.
   */
  api_version?: string;

  /**
   * Caller ID, if present.
   */
  call_sid_ending_conference?: string;

  /**
   * The timestamp of when the resource was created.
   */
  date_created?: string;

  /**
   * The timestamp of when the resource was last updated.
   */
  date_updated?: string;

  /**
   * A string that you assigned to describe this conference room.
   */
  friendly_name?: string;

  /**
   * The reason why a conference ended. When a conference is in progress, will be
   * null.
   */
  reason_conference_ended?:
    | 'participant-with-end-conference-on-exit-left'
    | 'last-participant-left'
    | 'conference-ended-via-api'
    | 'time-exceeded';

  /**
   * A string representing the region where the conference is hosted.
   */
  region?: string;

  /**
   * The unique identifier of the conference.
   */
  sid?: string;

  /**
   * The status of this conference.
   */
  status?: 'init' | 'in-progress' | 'completed';

  /**
   * A list of related resources identified by their relative URIs.
   */
  subresource_uris?: { [key: string]: unknown };

  /**
   * The relative URI for this conference.
   */
  uri?: string;
}

export interface ConferenceRetrieveConferencesResponse {
  conferences?: Array<ConferenceRetrieveConferencesResponse.Conference>;

  /**
   * The number of the last element on the page, zero-indexed.
   */
  end?: number;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences.json?Page=0&PageSize=1
   */
  first_page_uri?: string;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ
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

export namespace ConferenceRetrieveConferencesResponse {
  export interface Conference {
    /**
     * The id of the account the resource belongs to.
     */
    account_sid?: string;

    /**
     * The version of the API that was used to make the request.
     */
    api_version?: string;

    /**
     * Caller ID, if present.
     */
    call_sid_ending_conference?: string;

    /**
     * The timestamp of when the resource was created.
     */
    date_created?: string;

    /**
     * The timestamp of when the resource was last updated.
     */
    date_updated?: string;

    /**
     * A string that you assigned to describe this conference room.
     */
    friendly_name?: string;

    /**
     * The reason why a conference ended. When a conference is in progress, will be
     * null.
     */
    reason_conference_ended?:
      | 'participant-with-end-conference-on-exit-left'
      | 'last-participant-left'
      | 'conference-ended-via-api'
      | 'time-exceeded';

    /**
     * A string representing the region where the conference is hosted.
     */
    region?: string;

    /**
     * The unique identifier of the conference.
     */
    sid?: string;

    /**
     * The status of this conference.
     */
    status?: 'init' | 'in-progress' | 'completed';

    /**
     * A list of related resources identified by their relative URIs.
     */
    subresource_uris?: { [key: string]: unknown };

    /**
     * The relative URI for this conference.
     */
    uri?: string;
  }
}

export interface ConferenceRetrieveRecordingsResponse {
  /**
   * The number of the last element on the page, zero-indexed.
   */
  end?: number;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Recordings.json?page=0&pagesize=20
   */
  first_page_uri?: string;

  /**
   * /v2/texml/Accounts/61bf923e-5e4d-4595-a110-56190ea18a1b/Conferences/6dc6cc1a-1ba1-4351-86b8-4c22c95cd98f/Recordings.json?Page=1&PageSize=1&PageToken=MTY4AjgyNDkwNzIxMQ
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
   * List of participant resources.
   */
  participants?: Array<unknown>;

  recordings?: Array<ConferenceRetrieveRecordingsResponse.Recording>;

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export namespace ConferenceRetrieveRecordingsResponse {
  export interface Recording {
    /**
     * The id of the account the resource belongs to.
     */
    account_sid?: string;

    /**
     * The identifier of the related participant's call.
     */
    call_sid?: string;

    /**
     * The number of channels in the recording.
     */
    channels?: number;

    /**
     * The identifier of the related conference.
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
     * Duratin of the recording in seconds.
     */
    duration?: number;

    /**
     * The recording error, if any.
     */
    error_code?: string;

    /**
     * The URL to use to download the recording.
     */
    media_url?: string;

    /**
     * The unique identifier of the recording.
     */
    sid?: string;

    /**
     * How the recording was started.
     */
    source?:
      | 'DialVerb'
      | 'Conference'
      | 'OutboundAPI'
      | 'Trunking'
      | 'RecordVerb'
      | 'StartCallRecordingAPI'
      | 'StartConferenceRecordingAPI';

    /**
     * The timestamp of when the recording was started.
     */
    start_time?: string;

    /**
     * The status of the recording.
     */
    status?: 'processing' | 'absent' | 'completed' | 'deleted';

    /**
     * A list of related resources identified by their relative URIs.
     */
    subresource_uris?: { [key: string]: unknown };

    /**
     * The relative URI for this recording.
     */
    uri?: string;
  }
}

export interface ConferenceRetrieveRecordingsJsonResponse {
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

  recordings?: Array<AccountsAPI.TexmlGetCallRecordingResponseBody>;

  /**
   * The number of the first element on the page, zero-indexed.
   */
  start?: number;

  /**
   * The URI of the current page.
   */
  uri?: string;
}

export interface ConferenceRetrieveParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export interface ConferenceUpdateParams {
  /**
   * Path param: The id of the account the resource belongs to.
   */
  account_sid: string;

  /**
   * Body param: The HTTP method used to call the `AnnounceUrl`. Defaults to `POST`.
   */
  AnnounceMethod?: 'GET' | 'POST';

  /**
   * Body param: The URL we should call to announce something into the conference.
   * The URL may return an MP3 file, a WAV file, or a TwiML document that contains
   * `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
   */
  AnnounceUrl?: string;

  /**
   * Body param: The new status of the resource. Specifying `completed` will end the
   * conference and hang up all participants.
   */
  Status?: string;
}

export interface ConferenceRetrieveConferencesParams {
  /**
   * Filters conferences by the creation date. Expected format is YYYY-MM-DD. Also
   * accepts inequality operators, e.g. DateCreated>=2023-05-22.
   */
  DateCreated?: string;

  /**
   * Filters conferences by the time they were last updated. Expected format is
   * YYYY-MM-DD. Also accepts inequality operators, e.g. DateUpdated>=2023-05-22.
   */
  DateUpdated?: string;

  /**
   * Filters conferences by their friendly name.
   */
  FriendlyName?: string;

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
   * Filters conferences by status.
   */
  Status?: 'init' | 'in-progress' | 'completed';
}

export interface ConferenceRetrieveRecordingsParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

export interface ConferenceRetrieveRecordingsJsonParams {
  /**
   * The id of the account the resource belongs to.
   */
  account_sid: string;
}

Conferences.Participants = Participants;

export declare namespace Conferences {
  export {
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

  export {
    Participants as Participants,
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
