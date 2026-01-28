// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { RoomParticipantsDefaultFlatPagination } from './shared';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoomParticipants extends APIResource {
  /**
   * View a room participant.
   */
  retrieve(roomParticipantID: string, options?: RequestOptions): APIPromise<RoomParticipantRetrieveResponse> {
    return this._client.get(path`/room_participants/${roomParticipantID}`, options);
  }

  /**
   * View a list of room participants.
   */
  list(
    query: RoomParticipantListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RoomParticipantsDefaultFlatPagination, Shared.RoomParticipant> {
    return this._client.getAPIList('/room_participants', DefaultFlatPagination<Shared.RoomParticipant>, {
      query,
      ...options,
    });
  }
}

export interface RoomParticipantRetrieveResponse {
  data?: Shared.RoomParticipant;
}

export interface RoomParticipantListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_joined_at][eq], filter[date_joined_at][gte],
   * filter[date_joined_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_left_at][eq], filter[date_left_at][gte], filter[date_left_at][lte],
   * filter[context], filter[session_id]
   */
  filter?: RoomParticipantListParams.Filter;
}

export namespace RoomParticipantListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_joined_at][eq], filter[date_joined_at][gte],
   * filter[date_joined_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_left_at][eq], filter[date_left_at][gte], filter[date_left_at][lte],
   * filter[context], filter[session_id]
   */
  export interface Filter {
    /**
     * Filter room participants based on the context.
     */
    context?: string;

    date_joined_at?: Filter.DateJoinedAt;

    date_left_at?: Filter.DateLeftAt;

    date_updated_at?: Filter.DateUpdatedAt;

    /**
     * Session_id for filtering room participants.
     */
    session_id?: string;
  }

  export namespace Filter {
    export interface DateJoinedAt {
      /**
       * ISO 8601 date for filtering room participants that joined on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room participants that joined on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room participants that joined on or before that
       * date.
       */
      lte?: string;
    }

    export interface DateLeftAt {
      /**
       * ISO 8601 date for filtering room participants that left on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room participants that left on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room participants that left on or before that date.
       */
      lte?: string;
    }

    export interface DateUpdatedAt {
      /**
       * ISO 8601 date for filtering room participants updated on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room participants updated on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room participants updated on or before that date.
       */
      lte?: string;
    }
  }
}

export declare namespace RoomParticipants {
  export {
    type RoomParticipantRetrieveResponse as RoomParticipantRetrieveResponse,
    type RoomParticipantListParams as RoomParticipantListParams,
  };
}

export { type RoomParticipantsDefaultFlatPagination };
