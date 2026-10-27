// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Group dedicated IPs into pools for sending.
 */
export class IPs extends APIResource {
  /**
   * Add a dedicated IP to the pool with an optional routing weight. An IP can belong
   * to one pool; to move an IP that is already in a pool, use
   * `PATCH /email/dedicated_ips/{id}` with `pool_id`.
   *
   * @example
   * ```ts
   * const ip = await client.email.ipPools.ips.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     dedicated_ip_id: '6a7f9a30-1234-4b5c-8d9e-0f1a2b3c4d5e',
   *     weight: 100,
   *   },
   * );
   * ```
   */
  create(id: string, body: IPCreateParams, options?: RequestOptions): APIPromise<IPCreateResponse> {
    return this._client.post(path`/email/ip_pools/${id}/ips`, { body, ...options });
  }

  /**
   * Remove the dedicated IP from the pool. The IP is kept but carries no mail until
   * added to a pool again. Removing the last IP requires `force=true` and
   * `drain=true`.
   *
   * @example
   * ```ts
   * await client.email.ipPools.ips.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  delete(ipID: string, params: IPDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { id, drain, force } = params;
    return this._client.delete(path`/email/ip_pools/${id}/ips/${ipID}`, {
      query: { drain, force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface IPCreateResponse {
  data: IPCreateResponse.Data;
}

export namespace IPCreateResponse {
  export interface Data {
    created_at?: string;

    dedicated_ip_id?: string;

    pool_id?: string;

    weight?: number;
  }
}

export interface IPCreateParams {
  /**
   * The dedicated IP to add. It must belong to the account, must not be released,
   * and must not already be in a pool.
   */
  dedicated_ip_id: string;

  /**
   * Relative routing weight for this IP in the pool. Positive integer; defaults
   * to 100.
   */
  weight?: number;
}

export interface IPDeleteParams {
  /**
   * Path param: The IP pool identifier (UUID).
   */
  id: string;

  /**
   * Query param: Set together with `force=true` to remove the last IP in the pool.
   * Acknowledges that mail routed to the emptied pool is held until the pool has a
   * sendable IP again.
   */
  drain?: boolean;

  /**
   * Query param: Set together with `drain=true` to remove the last IP in the pool.
   * Either flag alone has no effect.
   */
  force?: boolean;
}

export declare namespace IPs {
  export {
    type IPCreateResponse as IPCreateResponse,
    type IPCreateParams as IPCreateParams,
    type IPDeleteParams as IPDeleteParams,
  };
}
