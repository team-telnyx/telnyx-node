// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NetworkRoutesAPI from '../network-routes';
import * as ActionsAPI from './actions';
import { ActionRotateTokenResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Tunnels connect a Network to hosts behind a tunnel process within the user's network.
 */
export class Tunnels extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Lists the tunnels on the account with their status and connected tunnel
   * processes. Responses never include `tunnel_token`.
   *
   * @example
   * ```ts
   * const tunnels = await client.tunnels.list();
   * ```
   */
  list(
    query: TunnelListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TunnelListResponse> {
    return this._client.get('/tunnels', { query, ...options });
  }

  /**
   * Creates a tunnel and returns its `tunnel_token`. The token is the only
   * credential the tunnel process needs, and this response and
   * `POST /tunnels/{id}/actions/rotate_token` are the only ones that return it. A
   * new tunnel is `inactive` until a tunnel process connects with the token.
   *
   * @example
   * ```ts
   * const tunnel = await client.tunnels.create({
   *   name: 'chicago-dc',
   * });
   * ```
   */
  create(body: TunnelCreateParams, options?: RequestOptions): APIPromise<TunnelCreateResponse> {
    return this._client.post('/tunnels', { body, ...options });
  }

  /**
   * Deletes a tunnel. A tunnel that a route names as its next hop cannot be deleted;
   * delete those routes first. Connected tunnel processes are disconnected and
   * cannot reconnect with the tunnel's token.
   *
   * @example
   * ```ts
   * await client.tunnels.delete(
   *   '62d438d2-8a51-4c5e-9d0c-1f6b2a7e4c39',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/tunnels/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a tunnel with its status and the tunnel processes connected to it. The
   * response never includes `tunnel_token`.
   *
   * @example
   * ```ts
   * const tunnel = await client.tunnels.retrieve(
   *   '62d438d2-8a51-4c5e-9d0c-1f6b2a7e4c39',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TunnelRetrieveResponse> {
    return this._client.get(path`/tunnels/${id}`, options);
  }
}

export interface Tunnel {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The number of tunnel processes connected with the tunnel's token.
   */
  connection_count?: number;

  /**
   * The tunnel processes connected with the tunnel's token.
   */
  connections?: Array<Tunnel.Connection>;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A user specified name for the tunnel.
   */
  name?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * `inactive` when no tunnel process is connected, and `healthy` when one or more
   * are. `degraded` (Preview, not reported yet) when a process is connected but
   * fails to reach its destinations.
   */
  status?: 'inactive' | 'healthy' | 'degraded';
}

export namespace Tunnel {
  /**
   * A tunnel process connected to the tunnel.
   */
  export interface Connection {
    /**
     * When the process connected.
     */
    connected_at?: string;

    /**
     * The name the host reports for itself. Preview: empty until the CLI reports it.
     */
    hostname?: string;

    /**
     * The Telnyx region the process is connected to. Preview: empty until the CLI
     * reports it.
     */
    region_code?: string;

    /**
     * The `telnyx-edge` CLI version of the process. Preview: empty until the CLI
     * reports it.
     */
    version?: string;
  }
}

export interface TunnelWithToken extends Tunnel {
  /**
   * The credential that a tunnel process presents with
   * `telnyx-edge tunnel run --token`. Returned only by create and rotate_token.
   * Telnyx stores only a hash of it.
   */
  tunnel_token?: string;
}

export interface TunnelCreateResponse {
  data?: TunnelWithToken;
}

export interface TunnelRetrieveResponse {
  data?: Tunnel;
}

export interface TunnelListResponse {
  data?: Array<Tunnel>;

  meta?: NetworkRoutesAPI.NetappsCursorPaginationMeta;
}

export interface TunnelListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name],
   * filter[status]
   */
  filter?: TunnelListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[after],
   * page[limit]
   */
  page?: TunnelListParams.Page;

  /**
   * Sorts the results by a field, ascending, or descending with a leading `-`. The
   * default is `-created_at`.
   */
  sort?:
    | 'name'
    | '-name'
    | 'status'
    | '-status'
    | 'created_at'
    | '-created_at'
    | 'updated_at'
    | '-updated_at';
}

export namespace TunnelListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name],
   * filter[status]
   */
  export interface Filter {
    /**
     * The name of the tunnel.
     */
    name?: string;

    /**
     * The status of the tunnel.
     */
    status?: 'inactive' | 'healthy' | 'degraded';
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[after],
   * page[limit]
   */
  export interface Page {
    /**
     * The cursor from `meta.cursors.after` of the previous page.
     */
    after?: string;

    /**
     * The number of results per page.
     */
    limit?: number;
  }
}

export interface TunnelCreateParams {
  /**
   * A user specified name for the tunnel.
   */
  name: string;
}

Tunnels.Actions = Actions;

export declare namespace Tunnels {
  export {
    type Tunnel as Tunnel,
    type TunnelWithToken as TunnelWithToken,
    type TunnelCreateResponse as TunnelCreateResponse,
    type TunnelRetrieveResponse as TunnelRetrieveResponse,
    type TunnelListResponse as TunnelListResponse,
    type TunnelListParams as TunnelListParams,
    type TunnelCreateParams as TunnelCreateParams,
  };

  export { Actions as Actions, type ActionRotateTokenResponse as ActionRotateTokenResponse };
}
