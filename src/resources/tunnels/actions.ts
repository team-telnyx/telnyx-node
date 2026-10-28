// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TunnelsAPI from './tunnels';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Tunnels connect a Network to hosts behind a tunnel process within the user's network.
 */
export class Actions extends APIResource {
  /**
   * Issues a new `tunnel_token` and invalidates the previous one. Tunnel processes
   * already connected stay connected until they reconnect, and are then refused
   * until they use the new token.
   *
   * @example
   * ```ts
   * const response = await client.tunnels.actions.rotateToken(
   *   '62d438d2-8a51-4c5e-9d0c-1f6b2a7e4c39',
   * );
   * ```
   */
  rotateToken(id: string, options?: RequestOptions): APIPromise<ActionRotateTokenResponse> {
    return this._client.post(path`/tunnels/${id}/actions/rotate_token`, options);
  }
}

export interface ActionRotateTokenResponse {
  data?: TunnelsAPI.TunnelWithToken;
}

export declare namespace Actions {
  export { type ActionRotateTokenResponse as ActionRotateTokenResponse };
}
