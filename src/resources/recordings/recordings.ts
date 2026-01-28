// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionDeleteParams, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recordings extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Retrieves the details of an existing call recording.
   *
   * @example
   * ```ts
   * const recording = await client.recordings.retrieve(
   *   'recording_id',
   * );
   * ```
   */
  retrieve(recordingID: string, options?: RequestOptions): APIPromise<RecordingRetrieveResponse> {
    return this._client.get(path`/recordings/${recordingID}`, options);
  }

  /**
   * Returns a list of your call recordings.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const recordingResponseData of client.recordings.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RecordingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RecordingResponseDataDefaultFlatPagination, RecordingResponseData> {
    return this._client.getAPIList('/recordings', DefaultFlatPagination<RecordingResponseData>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a call recording.
   *
   * @example
   * ```ts
   * const recording = await client.recordings.delete(
   *   'recording_id',
   * );
   * ```
   */
  delete(recordingID: string, options?: RequestOptions): APIPromise<RecordingDeleteResponse> {
    return this._client.delete(path`/recordings/${recordingID}`, options);
  }
}

export type RecordingResponseDataDefaultFlatPagination = DefaultFlatPagination<RecordingResponseData>;

export interface RecordingResponseData {
  /**
   * Uniquely identifies the recording.
   */
  id?: string;

  /**
   * Unique identifier and token for controlling the call.
   */
  call_control_id?: string;

  /**
   * ID unique to the call leg (used to correlate webhook events).
   */
  call_leg_id?: string;

  /**
   * ID that is unique to the call session and can be used to correlate webhook
   * events. Call session is a group of related call legs that logically belong to
   * the same phone call, e.g. an inbound and outbound leg of a transferred call.
   */
  call_session_id?: string;

  /**
   * When `dual`, the final audio file has the first leg on channel A, and the rest
   * on channel B.
   */
  channels?: 'single' | 'dual';

  /**
   * Uniquely identifies the conference.
   */
  conference_id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Links to download the recording files.
   */
  download_urls?: RecordingResponseData.DownloadURLs;

  /**
   * The duration of the recording in milliseconds.
   */
  duration_millis?: number;

  record_type?: 'recording';

  /**
   * ISO 8601 formatted date of when the recording ended.
   */
  recording_ended_at?: string;

  /**
   * ISO 8601 formatted date of when the recording started.
   */
  recording_started_at?: string;

  /**
   * The kind of event that led to this recording being created.
   */
  source?: 'conference' | 'call';

  /**
   * The status of the recording. Only `completed` recordings are currently
   * supported.
   */
  status?: 'completed';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace RecordingResponseData {
  /**
   * Links to download the recording files.
   */
  export interface DownloadURLs {
    /**
     * Link to download the recording in mp3 format.
     */
    mp3?: string;

    /**
     * Link to download the recording in wav format.
     */
    wav?: string;
  }
}

export interface RecordingRetrieveResponse {
  data?: RecordingResponseData;
}

export interface RecordingDeleteResponse {
  data?: RecordingResponseData;
}

export interface RecordingListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[conference_id], filter[created_at][gte], filter[created_at][lte],
   * filter[call_leg_id], filter[call_session_id], filter[from], filter[to],
   * filter[connection_id], filter[sip_call_id]
   */
  filter?: RecordingListParams.Filter;
}

export namespace RecordingListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[conference_id], filter[created_at][gte], filter[created_at][lte],
   * filter[call_leg_id], filter[call_session_id], filter[from], filter[to],
   * filter[connection_id], filter[sip_call_id]
   */
  export interface Filter {
    /**
     * If present, recordings will be filtered to those with a matching call_leg_id.
     */
    call_leg_id?: string;

    /**
     * If present, recordings will be filtered to those with a matching
     * call_session_id.
     */
    call_session_id?: string;

    /**
     * Returns only recordings associated with a given conference.
     */
    conference_id?: string;

    /**
     * If present, recordings will be filtered to those with a matching `connection_id`
     * attribute (case-sensitive).
     */
    connection_id?: string;

    created_at?: Filter.CreatedAt;

    /**
     * If present, recordings will be filtered to those with a matching `from`
     * attribute (case-sensitive).
     */
    from?: string;

    /**
     * If present, recordings will be filtered to those with a matching `sip_call_id`
     * attribute. Matching is case-sensitive
     */
    sip_call_id?: string;

    /**
     * If present, recordings will be filtered to those with a matching `to` attribute
     * (case-sensitive).
     */
    to?: string;
  }

  export namespace Filter {
    export interface CreatedAt {
      /**
       * Returns only recordings created later than or at given ISO 8601 datetime.
       */
      gte?: string;

      /**
       * Returns only recordings created earlier than or at given ISO 8601 datetime.
       */
      lte?: string;
    }
  }
}

Recordings.Actions = Actions;

export declare namespace Recordings {
  export {
    type RecordingResponseData as RecordingResponseData,
    type RecordingRetrieveResponse as RecordingRetrieveResponse,
    type RecordingDeleteResponse as RecordingDeleteResponse,
    type RecordingResponseDataDefaultFlatPagination as RecordingResponseDataDefaultFlatPagination,
    type RecordingListParams as RecordingListParams,
  };

  export { Actions as Actions, type ActionDeleteParams as ActionDeleteParams };
}
