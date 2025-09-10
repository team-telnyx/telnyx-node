// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoomRecordings extends APIResource {
  /**
   * View a room recording.
   */
  retrieve(roomRecordingID: string, options?: RequestOptions): APIPromise<RoomRecordingRetrieveResponse> {
    return this._client.get(path`/room_recordings/${roomRecordingID}`, options);
  }

  /**
   * View a list of room recordings.
   */
  list(
    query: RoomRecordingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoomRecordingListResponse> {
    return this._client.get('/room_recordings', { query, ...options });
  }

  /**
   * Synchronously delete a Room Recording.
   */
  delete(roomRecordingID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/room_recordings/${roomRecordingID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Delete several room recordings in a bulk.
   */
  deleteBulk(
    params: RoomRecordingDeleteBulkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoomRecordingDeleteBulkResponse> {
    const { filter, page } = params ?? {};
    return this._client.delete('/room_recordings', { query: { filter, page }, ...options });
  }
}

export interface RoomRecordingRetrieveResponse {
  data?: RoomRecordingRetrieveResponse.Data;
}

export namespace RoomRecordingRetrieveResponse {
  export interface Data {
    /**
     * A unique identifier for the room recording.
     */
    id?: string;

    /**
     * Shows the codec used for the room recording.
     */
    codec?: string;

    /**
     * ISO 8601 timestamp when the room recording has completed.
     */
    completed_at?: string;

    /**
     * ISO 8601 timestamp when the room recording was created.
     */
    created_at?: string;

    /**
     * Url to download the recording.
     */
    download_url?: string;

    /**
     * Shows the room recording duration in seconds.
     */
    duration_secs?: number;

    /**
     * ISO 8601 timestamp when the room recording has ended.
     */
    ended_at?: string;

    /**
     * Identify the room participant associated with the room recording.
     */
    participant_id?: string;

    record_type?: string;

    /**
     * Identify the room associated with the room recording.
     */
    room_id?: string;

    /**
     * Identify the room session associated with the room recording.
     */
    session_id?: string;

    /**
     * Shows the room recording size in MB.
     */
    size_mb?: number;

    /**
     * ISO 8601 timestamp when the room recording has stated.
     */
    started_at?: string;

    /**
     * Shows the room recording status.
     */
    status?: 'completed' | 'processing';

    /**
     * Shows the room recording type.
     */
    type?: 'audio' | 'video';

    /**
     * ISO 8601 timestamp when the room recording was updated.
     */
    updated_at?: string;
  }
}

export interface RoomRecordingListResponse {
  data?: Array<RoomRecordingListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace RoomRecordingListResponse {
  export interface Data {
    /**
     * A unique identifier for the room recording.
     */
    id?: string;

    /**
     * Shows the codec used for the room recording.
     */
    codec?: string;

    /**
     * ISO 8601 timestamp when the room recording has completed.
     */
    completed_at?: string;

    /**
     * ISO 8601 timestamp when the room recording was created.
     */
    created_at?: string;

    /**
     * Url to download the recording.
     */
    download_url?: string;

    /**
     * Shows the room recording duration in seconds.
     */
    duration_secs?: number;

    /**
     * ISO 8601 timestamp when the room recording has ended.
     */
    ended_at?: string;

    /**
     * Identify the room participant associated with the room recording.
     */
    participant_id?: string;

    record_type?: string;

    /**
     * Identify the room associated with the room recording.
     */
    room_id?: string;

    /**
     * Identify the room session associated with the room recording.
     */
    session_id?: string;

    /**
     * Shows the room recording size in MB.
     */
    size_mb?: number;

    /**
     * ISO 8601 timestamp when the room recording has stated.
     */
    started_at?: string;

    /**
     * Shows the room recording status.
     */
    status?: 'completed' | 'processing';

    /**
     * Shows the room recording type.
     */
    type?: 'audio' | 'video';

    /**
     * ISO 8601 timestamp when the room recording was updated.
     */
    updated_at?: string;
  }
}

export interface RoomRecordingDeleteBulkResponse {
  data?: RoomRecordingDeleteBulkResponse.Data;
}

export namespace RoomRecordingDeleteBulkResponse {
  export interface Data {
    /**
     * Amount of room recordings affected
     */
    room_recordings?: number;
  }
}

export interface RoomRecordingListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[date_started_at][eq],
   * filter[date_started_at][gte], filter[date_started_at][lte], filter[room_id],
   * filter[participant_id], filter[session_id], filter[status], filter[type],
   * filter[duration_secs]
   */
  filter?: RoomRecordingListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: RoomRecordingListParams.Page;
}

export namespace RoomRecordingListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[date_started_at][eq],
   * filter[date_started_at][gte], filter[date_started_at][lte], filter[room_id],
   * filter[participant_id], filter[session_id], filter[status], filter[type],
   * filter[duration_secs]
   */
  export interface Filter {
    date_ended_at?: Filter.DateEndedAt;

    date_started_at?: Filter.DateStartedAt;

    /**
     * duration_secs greater or equal for filtering room recordings.
     */
    duration_secs?: number;

    /**
     * participant_id for filtering room recordings.
     */
    participant_id?: string;

    /**
     * room_id for filtering room recordings.
     */
    room_id?: string;

    /**
     * session_id for filtering room recordings.
     */
    session_id?: string;

    /**
     * status for filtering room recordings.
     */
    status?: string;

    /**
     * type for filtering room recordings.
     */
    type?: string;
  }

  export namespace Filter {
    export interface DateEndedAt {
      /**
       * ISO 8601 date for filtering room recordings ended on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room recordings ended on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room recordings ended on or before that date.
       */
      lte?: string;
    }

    export interface DateStartedAt {
      /**
       * ISO 8601 date for filtering room recordings started on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room recordings started on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room recordings started on or before that date.
       */
      lte?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load.
     */
    number?: number;

    /**
     * The size of the page.
     */
    size?: number;
  }
}

export interface RoomRecordingDeleteBulkParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[date_started_at][eq],
   * filter[date_started_at][gte], filter[date_started_at][lte], filter[room_id],
   * filter[participant_id], filter[session_id], filter[status], filter[type],
   * filter[duration_secs]
   */
  filter?: RoomRecordingDeleteBulkParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: RoomRecordingDeleteBulkParams.Page;
}

export namespace RoomRecordingDeleteBulkParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[date_started_at][eq],
   * filter[date_started_at][gte], filter[date_started_at][lte], filter[room_id],
   * filter[participant_id], filter[session_id], filter[status], filter[type],
   * filter[duration_secs]
   */
  export interface Filter {
    date_ended_at?: Filter.DateEndedAt;

    date_started_at?: Filter.DateStartedAt;

    /**
     * duration_secs greater or equal for filtering room recordings.
     */
    duration_secs?: number;

    /**
     * participant_id for filtering room recordings.
     */
    participant_id?: string;

    /**
     * room_id for filtering room recordings.
     */
    room_id?: string;

    /**
     * session_id for filtering room recordings.
     */
    session_id?: string;

    /**
     * status for filtering room recordings.
     */
    status?: string;

    /**
     * type for filtering room recordings.
     */
    type?: string;
  }

  export namespace Filter {
    export interface DateEndedAt {
      /**
       * ISO 8601 date for filtering room recordings ended on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room recordings ended on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room recordings ended on or before that date.
       */
      lte?: string;
    }

    export interface DateStartedAt {
      /**
       * ISO 8601 date for filtering room recordings started on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room recordings started on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room recordings started on or before that date.
       */
      lte?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load.
     */
    number?: number;

    /**
     * The size of the page.
     */
    size?: number;
  }
}

export declare namespace RoomRecordings {
  export {
    type RoomRecordingRetrieveResponse as RoomRecordingRetrieveResponse,
    type RoomRecordingListResponse as RoomRecordingListResponse,
    type RoomRecordingDeleteBulkResponse as RoomRecordingDeleteBulkResponse,
    type RoomRecordingListParams as RoomRecordingListParams,
    type RoomRecordingDeleteBulkParams as RoomRecordingDeleteBulkParams,
  };
}
