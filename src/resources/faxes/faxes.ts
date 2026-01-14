// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionCancelResponse, ActionRefreshResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Faxes extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Send a fax. Files have size limits and page count limit validations. If a file
   * is bigger than 50MB or has more than 350 pages it will fail with
   * `file_size_limit_exceeded` and `page_count_limit_exceeded` respectively.
   *
   * **Expected Webhooks:**
   *
   * - `fax.queued`
   * - `fax.media.processed`
   * - `fax.sending.started`
   * - `fax.delivered`
   * - `fax.failed`
   *
   * @example
   * ```ts
   * const fax = await client.faxes.create({
   *   connection_id: '234423',
   *   from: '+13125790015',
   *   to: '+13127367276',
   * });
   * ```
   */
  create(body: FaxCreateParams, options?: RequestOptions): APIPromise<FaxCreateResponse> {
    return this._client.post('/faxes', maybeMultipartFormRequestOptions({ body, ...options }, this._client));
  }

  /**
   * View a fax
   *
   * @example
   * ```ts
   * const fax = await client.faxes.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FaxRetrieveResponse> {
    return this._client.get(path`/faxes/${id}`, options);
  }

  /**
   * View a list of faxes
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const fax of client.faxes.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: FaxListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FaxesDefaultFlatPagination, Fax> {
    return this._client.getAPIList('/faxes', DefaultFlatPagination<Fax>, { query, ...options });
  }

  /**
   * Delete a fax
   *
   * @example
   * ```ts
   * await client.faxes.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/faxes/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type FaxesDefaultFlatPagination = DefaultFlatPagination<Fax>;

export interface Fax {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * State received from a command.
   */
  client_state?: string;

  /**
   * The ID of the connection used to send the fax.
   */
  connection_id?: string;

  /**
   * ISO 8601 timestamp when resource was created
   */
  created_at?: string;

  /**
   * The direction of the fax.
   */
  direction?: 'inbound' | 'outbound';

  /**
   * The phone number, in E.164 format, the fax will be sent from.
   */
  from?: string;

  /**
   * The string used as the caller id name (SIP From Display Name) presented to the
   * destination (`to` number).
   */
  from_display_name?: string;

  /**
   * The media_name used for the fax's media. Must point to a file previously
   * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
   * and media_url/contents can't be submitted together.
   */
  media_name?: string;

  /**
   * The URL (or list of URLs) to the PDF used for the fax's media. media_url and
   * media_name/contents can't be submitted together.
   */
  media_url?: string;

  /**
   * If `store_preview` was set to `true`, this is a link to temporary location. Link
   * expires after 10 minutes.
   */
  preview_url?: string;

  /**
   * The quality of the fax. The `ultra` settings provides the highest quality
   * available, but also present longer fax processing times. `ultra_light` is best
   * suited for images, wihle `ultra_dark` is best suited for text.
   */
  quality?: 'normal' | 'high' | 'very_high' | 'ultra_light' | 'ultra_dark';

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'fax';

  /**
   * Status of the fax
   */
  status?:
    | 'queued'
    | 'media.processed'
    | 'originated'
    | 'sending'
    | 'delivered'
    | 'failed'
    | 'initiated'
    | 'receiving'
    | 'media.processing'
    | 'received';

  /**
   * Should fax media be stored on temporary URL. It does not support media_name.
   */
  store_media?: boolean;

  /**
   * If store_media was set to true, this is a link to temporary location. Link
   * expires after 10 minutes.
   */
  stored_media_url?: string;

  /**
   * The phone number, in E.164 format, the fax will be sent to or SIP URI
   */
  to?: string;

  /**
   * ISO 8601 timestamp when resource was updated
   */
  updated_at?: string;

  /**
   * Optional failover URL that will receive fax webhooks if webhook_url doesn't
   * return a 2XX response
   */
  webhook_failover_url?: string;

  /**
   * URL that will receive fax webhooks
   */
  webhook_url?: string;
}

export interface FaxCreateResponse {
  data?: Fax;
}

export interface FaxRetrieveResponse {
  data?: Fax;
}

export interface FaxCreateParams {
  /**
   * The connection ID to send the fax with.
   */
  connection_id: string;

  /**
   * The phone number, in E.164 format, the fax will be sent from.
   */
  from: string;

  /**
   * The phone number, in E.164 format, the fax will be sent to or SIP URI
   */
  to: string;

  /**
   * The black threshold percentage for monochrome faxes. Only applicable if
   * `monochrome` is set to `true`.
   */
  black_threshold?: number;

  /**
   * Use this field to add state to every subsequent webhook. It must be a valid
   * Base-64 encoded string.
   */
  client_state?: string;

  /**
   * The `from_display_name` string to be used as the caller id name (SIP From
   * Display Name) presented to the destination (`to` number). The string should have
   * a maximum of 128 characters, containing only letters, numbers, spaces, and
   * -\_~!.+ special characters. If ommited, the display name will be the same as the
   * number in the `from` field.
   */
  from_display_name?: string;

  /**
   * The media_name used for the fax's media. Must point to a file previously
   * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
   * and media_url/contents can't be submitted together.
   */
  media_name?: string;

  /**
   * The URL (or list of URLs) to the PDF used for the fax's media. media_url and
   * media_name/contents can't be submitted together.
   */
  media_url?: string;

  /**
   * The flag to enable monochrome, true black and white fax results.
   */
  monochrome?: boolean;

  /**
   * The format for the preview file in case the `store_preview` is `true`.
   */
  preview_format?: 'pdf' | 'tiff';

  /**
   * The quality of the fax. The `ultra` settings provides the highest quality
   * available, but also present longer fax processing times. `ultra_light` is best
   * suited for images, wihle `ultra_dark` is best suited for text.
   */
  quality?: 'normal' | 'high' | 'very_high' | 'ultra_light' | 'ultra_dark';

  /**
   * Should fax media be stored on temporary URL. It does not support media_name,
   * they can't be submitted together.
   */
  store_media?: boolean;

  /**
   * Should fax preview be stored on temporary URL.
   */
  store_preview?: boolean;

  /**
   * The flag to disable the T.38 protocol.
   */
  t38_enabled?: boolean;

  /**
   * Use this field to override the URL to which Telnyx will send subsequent webhooks
   * for this fax.
   */
  webhook_url?: string;
}

export interface FaxListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[created_at][gte], filter[created_at][gt], filter[created_at][lte],
   * filter[created_at][lt], filter[direction][eq], filter[from][eq], filter[to][eq]
   */
  filter?: FaxListParams.Filter;
}

export namespace FaxListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[created_at][gte], filter[created_at][gt], filter[created_at][lte],
   * filter[created_at][lt], filter[direction][eq], filter[from][eq], filter[to][eq]
   */
  export interface Filter {
    /**
     * Date range filtering operations for fax creation timestamp
     */
    created_at?: Filter.CreatedAt;

    /**
     * Direction filtering operations
     */
    direction?: Filter.Direction;

    /**
     * From number filtering operations
     */
    from?: Filter.From;

    /**
     * To number filtering operations
     */
    to?: Filter.To;
  }

  export namespace Filter {
    /**
     * Date range filtering operations for fax creation timestamp
     */
    export interface CreatedAt {
      /**
       * ISO 8601 date time for filtering faxes created after that date
       */
      gt?: string;

      /**
       * ISO 8601 date time for filtering faxes created after or on that date
       */
      gte?: string;

      /**
       * ISO 8601 formatted date time for filtering faxes created before that date
       */
      lt?: string;

      /**
       * ISO 8601 formatted date time for filtering faxes created on or before that date
       */
      lte?: string;
    }

    /**
     * Direction filtering operations
     */
    export interface Direction {
      /**
       * The direction, inbound or outbound, for filtering faxes sent from this account
       */
      eq?: string;
    }

    /**
     * From number filtering operations
     */
    export interface From {
      /**
       * The phone number, in E.164 format for filtering faxes sent from this number
       */
      eq?: string;
    }

    /**
     * To number filtering operations
     */
    export interface To {
      /**
       * The phone number, in E.164 format for filtering faxes sent to this number
       */
      eq?: string;
    }
  }
}

Faxes.Actions = Actions;

export declare namespace Faxes {
  export {
    type Fax as Fax,
    type FaxCreateResponse as FaxCreateResponse,
    type FaxRetrieveResponse as FaxRetrieveResponse,
    type FaxesDefaultFlatPagination as FaxesDefaultFlatPagination,
    type FaxCreateParams as FaxCreateParams,
    type FaxListParams as FaxListParams,
  };

  export {
    Actions as Actions,
    type ActionCancelResponse as ActionCancelResponse,
    type ActionRefreshResponse as ActionRefreshResponse,
  };
}
