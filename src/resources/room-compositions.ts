// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RoomCompositions extends APIResource {
  /**
   * Asynchronously create a room composition.
   *
   * @example
   * ```ts
   * const roomComposition =
   *   await client.roomCompositions.create();
   * ```
   */
  create(
    body: RoomCompositionCreateParams,
    options?: RequestOptions,
  ): APIPromise<RoomCompositionCreateResponse> {
    return this._client.post('/room_compositions', { body, ...options });
  }

  /**
   * View a room composition.
   *
   * @example
   * ```ts
   * const roomComposition =
   *   await client.roomCompositions.retrieve(
   *     '5219b3af-87c6-4c08-9b58-5a533d893e21',
   *   );
   * ```
   */
  retrieve(roomCompositionID: string, options?: RequestOptions): APIPromise<RoomCompositionRetrieveResponse> {
    return this._client.get(path`/room_compositions/${roomCompositionID}`, options);
  }

  /**
   * View a list of room compositions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const roomComposition of client.roomCompositions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RoomCompositionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RoomCompositionsDefaultFlatPagination, RoomComposition> {
    return this._client.getAPIList('/room_compositions', DefaultFlatPagination<RoomComposition>, {
      query,
      ...options,
    });
  }

  /**
   * Synchronously delete a room composition.
   *
   * @example
   * ```ts
   * await client.roomCompositions.delete(
   *   '5219b3af-87c6-4c08-9b58-5a533d893e21',
   * );
   * ```
   */
  delete(roomCompositionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/room_compositions/${roomCompositionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type RoomCompositionsDefaultFlatPagination = DefaultFlatPagination<RoomComposition>;

export interface RoomComposition {
  /**
   * A unique identifier for the room composition.
   */
  id?: string;

  /**
   * ISO 8601 timestamp when the room composition has completed.
   */
  completed_at?: string;

  /**
   * ISO 8601 timestamp when the room composition was created.
   */
  created_at?: string;

  /**
   * Url to download the composition.
   */
  download_url?: string;

  /**
   * Shows the room composition duration in seconds.
   */
  duration_secs?: number;

  /**
   * ISO 8601 timestamp when the room composition has ended.
   */
  ended_at?: string;

  /**
   * Shows format of the room composition.
   */
  format?: 'mp4';

  record_type?: string;

  /**
   * Identify the room associated with the room composition.
   */
  room_id?: string;

  /**
   * Identify the room session associated with the room composition.
   */
  session_id?: string;

  /**
   * Shows the room composition size in MB.
   */
  size_mb?: number;

  /**
   * ISO 8601 timestamp when the room composition has stated.
   */
  started_at?: string;

  /**
   * Shows the room composition status.
   */
  status?: 'completed' | 'enqueued' | 'processing';

  /**
   * ISO 8601 timestamp when the room composition was updated.
   */
  updated_at?: string;

  /**
   * Identify the user associated with the room composition.
   */
  user_id?: string;

  /**
   * Describes the video layout of the room composition in terms of regions. Limited
   * to 2 regions.
   */
  video_layout?: { [key: string]: VideoRegion };

  /**
   * The failover URL where webhooks related to this room composition will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string;

  /**
   * The URL where webhooks related to this room composition will be sent. Must
   * include a scheme, such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number;
}

export interface VideoRegion {
  /**
   * Height of the video region
   */
  height?: number;

  /**
   * Maximum number of columns of the region's placement grid. By default, the region
   * has as many columns as needed to layout all the specified video sources.
   */
  max_columns?: number;

  /**
   * Maximum number of rows of the region's placement grid. By default, the region
   * has as many rows as needed to layout all the specified video sources.
   */
  max_rows?: number;

  /**
   * Array of video recording ids to be composed in the region. Can be "\*" to
   * specify all video recordings in the session
   */
  video_sources?: Array<string>;

  /**
   * Width of the video region
   */
  width?: number;

  /**
   * X axis value (in pixels) of the region's upper left corner relative to the upper
   * left corner of the whole room composition viewport.
   */
  x_pos?: number;

  /**
   * Y axis value (in pixels) of the region's upper left corner relative to the upper
   * left corner of the whole room composition viewport.
   */
  y_pos?: number;

  /**
   * Regions with higher z_pos values are stacked on top of regions with lower z_pos
   * values
   */
  z_pos?: number;
}

export interface RoomCompositionCreateResponse {
  data?: RoomComposition;
}

export interface RoomCompositionRetrieveResponse {
  data?: RoomComposition;
}

export interface RoomCompositionCreateParams {
  /**
   * The desired format of the room composition.
   */
  format?: string;

  /**
   * The desired resolution (width/height in pixels) of the resulting video of the
   * room composition. Both width and height are required to be between 16 and 1280;
   * and width _ height should not exceed 1280 _ 720
   */
  resolution?: string;

  /**
   * id of the room session associated with the room composition.
   */
  session_id?: string;

  /**
   * Describes the video layout of the room composition in terms of regions.
   */
  video_layout?: { [key: string]: VideoRegion };

  /**
   * The failover URL where webhooks related to this room composition will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string;

  /**
   * The URL where webhooks related to this room composition will be sent. Must
   * include a scheme, such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number;
}

export interface RoomCompositionListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[session_id], filter[status]
   */
  filter?: RoomCompositionListParams.Filter;
}

export namespace RoomCompositionListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[date_created_at][eq], filter[date_created_at][gte],
   * filter[date_created_at][lte], filter[session_id], filter[status]
   */
  export interface Filter {
    date_created_at?: Filter.DateCreatedAt;

    /**
     * The session_id for filtering room compositions.
     */
    session_id?: string;

    /**
     * The status for filtering room compositions.
     */
    status?: 'completed' | 'processing' | 'enqueued';
  }

  export namespace Filter {
    export interface DateCreatedAt {
      /**
       * ISO 8601 date for filtering room compositions created on that date.
       */
      eq?: string;

      /**
       * ISO 8601 date for filtering room compositions created on or after that date.
       */
      gte?: string;

      /**
       * ISO 8601 date for filtering room compositions created on or before that date.
       */
      lte?: string;
    }
  }
}

export declare namespace RoomCompositions {
  export {
    type RoomComposition as RoomComposition,
    type VideoRegion as VideoRegion,
    type RoomCompositionCreateResponse as RoomCompositionCreateResponse,
    type RoomCompositionRetrieveResponse as RoomCompositionRetrieveResponse,
    type RoomCompositionsDefaultFlatPagination as RoomCompositionsDefaultFlatPagination,
    type RoomCompositionCreateParams as RoomCompositionCreateParams,
    type RoomCompositionListParams as RoomCompositionListParams,
  };
}
