// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DedicatedIPsAPI from '../dedicated-ips/dedicated-ips';
import * as IPsAPI from './ips';
import { IPCreateParams, IPCreateResponse, IPDeleteParams, IPs } from './ips';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Group dedicated IPs into pools for sending.
 */
export class IPPools extends APIResource {
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);

  /**
   * List the account's dedicated-IP pools. Member IPs are not included (`ips` is
   * empty); retrieve a pool to see its members.
   *
   * @example
   * ```ts
   * const ipPools = await client.email.ipPools.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<IPPoolListResponse> {
    return this._client.get('/email/ip_pools', options);
  }

  /**
   * Create an account-scoped pool of dedicated IPs. Set `is_default` or `domain_id`
   * for the pool to carry mail; a pool with neither carries none.
   *
   * @example
   * ```ts
   * const ipPoolShowResponse =
   *   await client.email.ipPools.create({
   *     name: 'primary-pool',
   *     is_default: true,
   *   });
   * ```
   */
  create(body: IPPoolCreateParams, options?: RequestOptions): APIPromise<IPPoolShowResponse> {
    return this._client.post('/email/ip_pools', { body, ...options });
  }

  /**
   * Delete the pool. Member IPs are kept but leave the pool, so they carry no mail
   * until added to another pool. Deleting a pool changes routing for subsequently
   * resolved messages. It does not reroute messages already assigned to the deleted
   * pool. Deleting a pool that still has IPs requires `force=true` and `drain=true`.
   *
   * @example
   * ```ts
   * await client.email.ipPools.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(
    id: string,
    params: IPPoolDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { drain, force } = params ?? {};
    return this._client.delete(path`/email/ip_pools/${id}`, {
      query: { drain, force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single IP pool by its identifier, including its dedicated-IP members
   * with billing state.
   *
   * @example
   * ```ts
   * const ipPoolShowResponse =
   *   await client.email.ipPools.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<IPPoolShowResponse> {
    return this._client.get(path`/email/ip_pools/${id}`, options);
  }

  /**
   * Rename the pool, set or clear the default flag, or change its domain scope.
   * Routing follows the new settings for subsequent mail.
   *
   * @example
   * ```ts
   * const ipPoolShowResponse =
   *   await client.email.ipPools.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { name: 'renamed-pool' },
   *   );
   * ```
   */
  update(id: string, body: IPPoolUpdateParams, options?: RequestOptions): APIPromise<IPPoolShowResponse> {
    return this._client.patch(path`/email/ip_pools/${id}`, { body, ...options });
  }
}

/**
 * An account-scoped pool of dedicated IPs. Mail uses a pool only when the pool is
 * scoped to the sending domain (`domain_id`) or is the account default
 * (`is_default`).
 */
export interface IPPool {
  id?: string;

  created_at?: string;

  /**
   * Email domain this pool is scoped to. The pool carries that domain's mail. Null
   * when the pool is not domain-scoped.
   */
  domain_id?: string | null;

  /**
   * Member IPs with their routing weights. Populated by Retrieve an IP pool; list,
   * create, and update responses return an empty array.
   */
  ips?: Array<IPPool.IP>;

  /**
   * Whether this is the account's default pool. The default pool carries mail for
   * sending domains that have no domain-scoped pool. At most one per account.
   */
  is_default?: boolean;

  /**
   * Pool name, unique within the account.
   */
  name?: string;

  record_type?: 'ip_pool';

  updated_at?: string;
}

export namespace IPPool {
  /**
   * A dedicated IP as a member of a pool, with its routing weight in this pool.
   * Weight is a positive integer (default 100).
   */
  export interface IP extends DedicatedIPsAPI.DedicatedIP {
    /**
     * Relative routing weight of this IP within the pool.
     */
    weight?: number;
  }
}

export interface IPPoolShowResponse {
  /**
   * An account-scoped pool of dedicated IPs. Mail uses a pool only when the pool is
   * scoped to the sending domain (`domain_id`) or is the account default
   * (`is_default`).
   */
  data: IPPool;
}

export interface IPPoolListResponse {
  data: Array<IPPool>;
}

export interface IPPoolCreateParams {
  /**
   * Pool name: 1-64 characters of lowercase letters, digits, `.`, `_`, and `-`,
   * starting and ending with a letter or digit. Must be unique within the account
   * and must not start with `dip_`.
   */
  name: string;

  /**
   * Scope the pool to one of the account's email domains; the pool then carries that
   * domain's mail. Scope at most one pool to each domain.
   */
  domain_id?: string;

  /**
   * Make this the account's default pool, which carries mail for sending domains
   * without a domain-scoped pool. An account can have one default pool. Defaults to
   * `false`.
   */
  is_default?: boolean;
}

export interface IPPoolDeleteParams {
  /**
   * Set together with `force=true` to delete a pool that still has IPs. Acknowledges
   * deletion while the pool still has members; this flag does not reroute already
   * queued messages.
   */
  drain?: boolean;

  /**
   * Set together with `drain=true` to delete a pool that still has IPs. Either flag
   * alone has no effect.
   */
  force?: boolean;
}

export interface IPPoolUpdateParams {
  /**
   * Scope the pool to one of the account's email domains, or `null` to remove the
   * scope.
   */
  domain_id?: string | null;

  /**
   * Set or clear the account default flag. An account can have one default pool.
   */
  is_default?: boolean;

  /**
   * Pool name: 1-64 characters of lowercase letters, digits, `.`, `_`, and `-`,
   * starting and ending with a letter or digit. Must be unique within the account
   * and must not start with `dip_`.
   */
  name?: string;
}

IPPools.IPs = IPs;

export declare namespace IPPools {
  export {
    type IPPool as IPPool,
    type IPPoolShowResponse as IPPoolShowResponse,
    type IPPoolListResponse as IPPoolListResponse,
    type IPPoolCreateParams as IPPoolCreateParams,
    type IPPoolDeleteParams as IPPoolDeleteParams,
    type IPPoolUpdateParams as IPPoolUpdateParams,
  };

  export {
    IPs as IPs,
    type IPCreateResponse as IPCreateResponse,
    type IPCreateParams as IPCreateParams,
    type IPDeleteParams as IPDeleteParams,
  };
}
