// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import {
  ActionGenerateJoinClientTokenParams,
  ActionGenerateJoinClientTokenResponse,
  ActionRefreshClientTokenParams,
  ActionRefreshClientTokenResponse,
  Actions,
} from './actions';
import * as SessionsAPI from './sessions/sessions';
import {
  SessionList0Params,
  SessionList1Params,
  SessionRetrieveParams,
  SessionRetrieveParticipantsParams,
  SessionRetrieveResponse,
  Sessions,
} from './sessions/sessions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rooms extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);

  /**
   * Synchronously create a Room.
   *
   * @example
   * ```ts
   * const room = await client.rooms.create();
   * ```
   */
  create(body: RoomCreateParams, options?: RequestOptions): APIPromise<RoomCreateResponse> {
    return this._client.post('/rooms', { body, ...options });
  }

  /**
   * View a room.
   *
   * @example
   * ```ts
   * const room = await client.rooms.retrieve(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  retrieve(
    roomID: string,
    query: RoomRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RoomRetrieveResponse> {
    return this._client.get(path`/rooms/${roomID}`, { query, ...options });
  }

  /**
   * Synchronously update a Room.
   *
   * @example
   * ```ts
   * const room = await client.rooms.update(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  update(roomID: string, body: RoomUpdateParams, options?: RequestOptions): APIPromise<RoomUpdateResponse> {
    return this._client.patch(path`/rooms/${roomID}`, { body, ...options });
  }

  /**
   * View a list of rooms.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const room of client.rooms.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RoomListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RoomsDefaultFlatPagination, Room> {
    return this._client.getAPIList('/rooms', DefaultFlatPagination<Room>, { query, ...options });
  }

  /**
   * Synchronously delete a Room. Participants from that room will be kicked out,
   * they won't be able to join that room anymore, and you won't be charged anymore
   * for that room.
   *
   * @example
   * ```ts
   * await client.rooms.delete(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  delete(roomID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/rooms/${roomID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type RoomsDefaultFlatPagination = DefaultFlatPagination<Room>;

export type RoomSessionsDefaultFlatPagination = DefaultFlatPagination<RoomSession>;

export interface Room {
  /**
   * A unique identifier for the room.
   */
  id?: string;

  /**
   * The identifier of the active room session if any.
   */
  active_session_id?: string;

  /**
   * ISO 8601 timestamp when the room was created.
   */
  created_at?: string;

  /**
   * Enable or disable recording for that room.
   */
  enable_recording?: boolean;

  /**
   * Maximum participants allowed in the room.
   */
  max_participants?: number;

  record_type?: string;

  sessions?: Array<RoomSession>;

  /**
   * The unique (within the Telnyx account scope) name of the room.
   */
  unique_name?: string;

  /**
   * ISO 8601 timestamp when the room was updated.
   */
  updated_at?: string;

  /**
   * The failover URL where webhooks related to this room will be sent if sending to
   * the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string;

  /**
   * The URL where webhooks related to this room will be sent. Must include a scheme,
   * such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number;
}

export interface RoomSession {
  /**
   * A unique identifier for the room session.
   */
  id?: string;

  /**
   * Shows if the room session is active or not.
   */
  active?: boolean;

  /**
   * ISO 8601 timestamp when the room session was created.
   */
  created_at?: string;

  /**
   * ISO 8601 timestamp when the room session has ended.
   */
  ended_at?: string;

  participants?: Array<Shared.RoomParticipant>;

  record_type?: string;

  /**
   * Identify the room hosting that room session.
   */
  room_id?: string;

  /**
   * ISO 8601 timestamp when the room session was updated.
   */
  updated_at?: string;
}

export interface RoomCreateResponse {
  data?: Room;
}

export interface RoomRetrieveResponse {
  data?: Room;
}

export interface RoomUpdateResponse {
  data?: Room;
}

export interface RoomCreateParams {
  /**
   * Enable or disable recording for that room.
   */
  enable_recording?: boolean;

  /**
   * The maximum amount of participants allowed in a room. If new participants try to
   * join after that limit is reached, their request will be rejected.
   */
  max_participants?: number;

  /**
   * The unique (within the Telnyx account scope) name of the room.
   */
  unique_name?: string;

  /**
   * The failover URL where webhooks related to this room will be sent if sending to
   * the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string;

  /**
   * The URL where webhooks related to this room will be sent. Must include a scheme,
   * such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number;
}

export interface RoomRetrieveParams {
  /**
   * To decide if room sessions should be included in the response.
   */
  include_sessions?: boolean;
}

export interface RoomUpdateParams {
  /**
   * Enable or disable recording for that room.
   */
  enable_recording?: boolean;

  /**
   * The maximum amount of participants allowed in a room. If new participants try to
   * join after that limit is reached, their request will be rejected.
   */
  max_participants?: number;

  /**
   * The unique (within the Telnyx account scope) name of the room.
   */
  unique_name?: string;

  /**
   * The failover URL where webhooks related to this room will be sent if sending to
   * the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string;

  /**
   * The URL where webhooks related to this room will be sent. Must include a scheme,
   * such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number;
}

export interface RoomListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte], filter[unique_name]
   */
  filter?: RoomListParams.Filter;

  /**
   * To decide if room sessions should be included in the response.
   */
  include_sessions?: boolean;
}

export namespace RoomListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[date_updated_at][eq],
   * filter[date_updated_at][gte], filter[date_updated_at][lte], filter[unique_name]
   */
  export interface Filter {
    date_created_at?: Filter.DateCreatedAt;

    date_updated_at?: Filter.DateUpdatedAt;

    /**
     * Unique_name for filtering rooms.
     */
    unique_name?: string;
  }

  export namespace Filter {
    export interface DateCreatedAt {
      /**
       * ISO 8601 date for filtering rooms created on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering rooms created on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering rooms created on or before that date.
       */
      lte?: string;
    }

    export interface DateUpdatedAt {
      /**
       * ISO 8601 date for filtering rooms updated on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering rooms updated on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering rooms updated on or before that date.
       */
      lte?: string;
    }
  }
}

Rooms.Actions = Actions;
Rooms.Sessions = Sessions;

export declare namespace Rooms {
  export {
    type Room as Room,
    type RoomSession as RoomSession,
    type RoomCreateResponse as RoomCreateResponse,
    type RoomRetrieveResponse as RoomRetrieveResponse,
    type RoomUpdateResponse as RoomUpdateResponse,
    type RoomsDefaultFlatPagination as RoomsDefaultFlatPagination,
    type RoomCreateParams as RoomCreateParams,
    type RoomRetrieveParams as RoomRetrieveParams,
    type RoomUpdateParams as RoomUpdateParams,
    type RoomListParams as RoomListParams,
  };

  export {
    Actions as Actions,
    type ActionGenerateJoinClientTokenResponse as ActionGenerateJoinClientTokenResponse,
    type ActionRefreshClientTokenResponse as ActionRefreshClientTokenResponse,
    type ActionGenerateJoinClientTokenParams as ActionGenerateJoinClientTokenParams,
    type ActionRefreshClientTokenParams as ActionRefreshClientTokenParams,
  };

  export {
    Sessions as Sessions,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionRetrieveParams as SessionRetrieveParams,
    type SessionList0Params as SessionList0Params,
    type SessionList1Params as SessionList1Params,
    type SessionRetrieveParticipantsParams as SessionRetrieveParticipantsParams,
  };
}
