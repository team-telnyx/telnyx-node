// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { RoomParticipantsDefaultFlatPagination } from '../../shared';
import * as RoomsAPI from '../rooms';
import { RoomSessionsDefaultFlatPagination } from '../rooms';
import * as ActionsAPI from './actions';
import {
  ActionEndResponse,
  ActionKickParams,
  ActionKickResponse,
  ActionMuteParams,
  ActionMuteResponse,
  ActionUnmuteParams,
  ActionUnmuteResponse,
  Actions,
  ActionsParticipantsRequest,
} from './actions';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Sessions extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * View a room session.
   *
   * @example
   * ```ts
   * const session = await client.rooms.sessions.retrieve(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  retrieve(
    roomSessionID: string,
    query: SessionRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SessionRetrieveResponse> {
    return this._client.get(path`/room_sessions/${roomSessionID}`, { query, ...options });
  }

  /**
   * View a list of room sessions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const roomSession of client.rooms.sessions.list0()) {
   *   // ...
   * }
   * ```
   */
  list0(
    query: SessionList0Params | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RoomSessionsDefaultFlatPagination, RoomsAPI.RoomSession> {
    return this._client.getAPIList('/room_sessions', DefaultFlatPagination<RoomsAPI.RoomSession>, {
      query,
      ...options,
    });
  }

  /**
   * View a list of room sessions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const roomSession of client.rooms.sessions.list1(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * )) {
   *   // ...
   * }
   * ```
   */
  list1(
    roomID: string,
    query: SessionList1Params | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RoomSessionsDefaultFlatPagination, RoomsAPI.RoomSession> {
    return this._client.getAPIList(
      path`/rooms/${roomID}/sessions`,
      DefaultFlatPagination<RoomsAPI.RoomSession>,
      { query, ...options },
    );
  }

  /**
   * View a list of room participants.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const roomParticipant of client.rooms.sessions.retrieveParticipants(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * )) {
   *   // ...
   * }
   * ```
   */
  retrieveParticipants(
    roomSessionID: string,
    query: SessionRetrieveParticipantsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RoomParticipantsDefaultFlatPagination, Shared.RoomParticipant> {
    return this._client.getAPIList(
      path`/room_sessions/${roomSessionID}/participants`,
      DefaultFlatPagination<Shared.RoomParticipant>,
      { query, ...options },
    );
  }
}

export interface SessionRetrieveResponse {
  data?: RoomsAPI.RoomSession;
}

export interface SessionRetrieveParams {
  /**
   * To decide if room participants should be included in the response.
   */
  include_participants?: boolean;
}

export interface SessionList0Params extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[room_id], filter[active]
   */
  filter?: SessionList0Params.Filter;

  /**
   * To decide if room participants should be included in the response.
   */
  include_participants?: boolean;
}

export namespace SessionList0Params {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[room_id], filter[active]
   */
  export interface Filter {
    /**
     * Filter active or inactive room sessions.
     */
    active?: boolean;

    date_created_at?: Filter.DateCreatedAt;

    date_ended_at?: Filter.DateEndedAt;

    date_updated_at?: Filter.DateUpdatedAt;

    /**
     * Room_id for filtering room sessions.
     */
    room_id?: string;
  }

  export namespace Filter {
    export interface DateCreatedAt {
      /**
       * ISO 8601 date for filtering room sessions created on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room sessions created on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room sessions created on or before that date.
       */
      lte?: string;
    }

    export interface DateEndedAt {
      /**
       * ISO 8601 date for filtering room sessions ended on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room sessions ended on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room sessions ended on or before that date.
       */
      lte?: string;
    }

    export interface DateUpdatedAt {
      /**
       * ISO 8601 date for filtering room sessions updated on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room sessions updated on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room sessions updated on or before that date.
       */
      lte?: string;
    }
  }
}

export interface SessionList1Params extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[active]
   */
  filter?: SessionList1Params.Filter;

  /**
   * To decide if room participants should be included in the response.
   */
  include_participants?: boolean;
}

export namespace SessionList1Params {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_ended_at][eq], filter[date_ended_at][gte],
   * filter[date_ended_at][lte], filter[active]
   */
  export interface Filter {
    /**
     * Filter active or inactive room sessions.
     */
    active?: boolean;

    date_created_at?: Filter.DateCreatedAt;

    date_ended_at?: Filter.DateEndedAt;

    date_updated_at?: Filter.DateUpdatedAt;
  }

  export namespace Filter {
    export interface DateCreatedAt {
      /**
       * ISO 8601 date for filtering room sessions created on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room sessions created on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room sessions created on or before that date.
       */
      lte?: string;
    }

    export interface DateEndedAt {
      /**
       * ISO 8601 date for filtering room sessions ended on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room sessions ended on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room sessions ended on or before that date.
       */
      lte?: string;
    }

    export interface DateUpdatedAt {
      /**
       * ISO 8601 date for filtering room sessions updated on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room sessions updated on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room sessions updated on or before that date.
       */
      lte?: string;
    }
  }
}

export interface SessionRetrieveParticipantsParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_joined_at][eq], filter[date_joined_at][gte],
   * filter[date_joined_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_left_at][eq], filter[date_left_at][gte], filter[date_left_at][lte],
   * filter[context]
   */
  filter?: SessionRetrieveParticipantsParams.Filter;
}

export namespace SessionRetrieveParticipantsParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_joined_at][eq], filter[date_joined_at][gte],
   * filter[date_joined_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte],
   * filter[date_left_at][eq], filter[date_left_at][gte], filter[date_left_at][lte],
   * filter[context]
   */
  export interface Filter {
    /**
     * Filter room participants based on the context.
     */
    context?: string;

    date_joined_at?: Filter.DateJoinedAt;

    date_left_at?: Filter.DateLeftAt;

    date_updated_at?: Filter.DateUpdatedAt;
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

Sessions.Actions = Actions;

export declare namespace Sessions {
  export {
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionList0Params as SessionList0Params,
    type SessionList1Params as SessionList1Params,
    type SessionRetrieveParticipantsParams as SessionRetrieveParticipantsParams,
  };

  export {
    Actions as Actions,
    type ActionsParticipantsRequest as ActionsParticipantsRequest,
    type ActionEndResponse as ActionEndResponse,
    type ActionKickResponse as ActionKickResponse,
    type ActionMuteResponse as ActionMuteResponse,
    type ActionUnmuteResponse as ActionUnmuteResponse,
    type ActionKickParams as ActionKickParams,
    type ActionMuteParams as ActionMuteParams,
    type ActionUnmuteParams as ActionUnmuteParams,
  };
}

export { type RoomSessionsDefaultFlatPagination, type RoomParticipantsDefaultFlatPagination };
