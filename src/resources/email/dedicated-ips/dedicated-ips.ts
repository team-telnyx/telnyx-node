// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Purchase and manage dedicated sending IP addresses for your Telnyx email traffic.
 */
export class DedicatedIPs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * List the dedicated sending IPs owned by the account, newest first. Narrow the
   * list with `filter[status]`, `filter[pool_id]`, and `filter[region]`; supplied
   * filters combine, so an IP must match every one. An empty value, or a nested or
   * array value such as `filter[status][]=active`, applies no filter, and other
   * `filter[...]` keys are ignored. A value that no IP can match (an unknown status,
   * a `pool_id` that is not a UUID, or a value containing a NUL byte) returns an
   * empty list, not an error.
   *
   * @example
   * ```ts
   * const dedicatedIPs = await client.email.dedicatedIPs.list();
   * ```
   */
  list(
    query: DedicatedIPListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DedicatedIPListResponse> {
    return this._client.get('/email/dedicated_ips', { query, ...options });
  }

  /**
   * Purchase a dedicated sending IP. Requires a verified, enterprise, or legacy
   * account, and an `Idempotency-Key` header: a request without the header returns
   * `400` (code `10015`) and allocates nothing. Telnyx allocates the next available
   * IP from stock. The optional `region` and `ip_version` fields each restrict which
   * stock IP is allocated; they never change the allocated IP's metadata. An omitted
   * field applies no restriction for that field, and omitting the body applies
   * neither restriction. An unsupported selector value returns `422`; a supported
   * value that matches no available IP returns `429` and records the request on the
   * waitlist. Billing: $14/month/IP, charged as a monthly recurring charge (MRC)
   * from purchase. The IP is returned in `provisioning` status with a Telnyx-managed
   * PTR hostname and carries no mail until you call `start_warmup` and add it to a
   * pool that routes mail.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.create({
   *     'Idempotency-Key':
   *       '8e03978e-40d5-43e8-bc93-6894a57f9326',
   *     ip_version: 'ipv4',
   *     region: 'ewr-nj1',
   *   });
   * ```
   */
  create(params: DedicatedIPCreateParams, options?: RequestOptions): APIPromise<DedicatedIPShowResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/email/dedicated_ips', {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Release the dedicated IP to Telnyx. The IP stops carrying mail immediately,
   * leaves its pool, and moves to `released`. Telnyx sets `quarantine_until` to 30
   * days after release. Release requests that the MRC stop asynchronously. Check
   * `billing`: `stopping` means the stop is pending, `stopped` means it completed,
   * and `stop_failed` means the charge remains. If the charge was never created or
   * its creation has not completed, `billing` keeps showing the creation status
   * (`not_started`, `pending`, `in_progress`, or `failed`). Any status except
   * `released` can be released. Releasing the last IP in a pool requires
   * `force=true` and `drain=true`.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       query_reason: 'No longer needed',
   *       body_reason: 'No longer needed',
   *     },
   *   );
   * ```
   */
  delete(
    id: string,
    params: DedicatedIPDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DedicatedIPShowResponse> {
    const { query_drain, query_force, query_reason, ...body } = params ?? {};
    return this._client.delete(path`/email/dedicated_ips/${id}`, {
      query: { drain: query_drain, force: query_force, reason: query_reason },
      body,
      ...options,
    });
  }

  /**
   * Retrieve a single dedicated IP by its identifier, including warm-up state,
   * billing state, and the DNS/PTR provisioning checklist.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DedicatedIPShowResponse> {
    return this._client.get(path`/email/dedicated_ips/${id}`, options);
  }

  /**
   * Move the IP to another pool, or pause/resume its warm-up ramp. One change
   * applies per request. `pool_id` takes precedence over warm-up changes. Otherwise,
   * use `warmup_paused` or `warmup.paused`; a Boolean `warmup_paused` takes
   * precedence. Moving the last IP out of a pool requires `force: true` and
   * `drain: true`. The PTR hostname is managed by Telnyx: a request that includes
   * `ptr_hostname` returns `422` unless `pool_id` or a warm-up field is present, in
   * which case `ptr_hostname` is ignored.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       pool_id: '9b1c4d70-abcd-4e5f-8a9b-0c1d2e3f4a5b',
   *       weight: 100,
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: DedicatedIPUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DedicatedIPShowResponse> {
    return this._client.patch(path`/email/dedicated_ips/${id}`, { body, ...options });
  }
}

/**
 * A dedicated sending IP address owned by the account.
 */
export interface DedicatedIP {
  id?: string;

  /**
   * Monthly recurring charge (MRC) state for the IP's current allocation.
   */
  billing?: DedicatedIP.Billing;

  created_at?: string;

  /**
   * When the PTR hostname was forward-confirmed (PTR → hostname → A record → this
   * IP). The IP carries mail only while this is set.
   */
  dns_confirmed_at?: string | null;

  /**
   * The allocated IPv4/IPv6 address.
   */
  ip_address?: string;

  ip_version?: 'ipv4' | 'ipv6';

  pool_id?: string | null;

  /**
   * Read-only status of the Telnyx-managed PTR record. No customer action is
   * required to complete it.
   */
  provisioning?: DedicatedIP.Provisioning;

  /**
   * Same value as `provisioning.dns_status`.
   */
  provisioning_status?: 'not_applicable' | 'pending_ptr' | 'pending_dns' | 'dns_confirmed' | 'dns_lost';

  /**
   * Telnyx-managed reverse DNS (PTR) hostname of the IP, in the form
   * `mta-<a-b-c-d>.msgtelnyx.com`. Also used as the EHLO hostname when sending from
   * the IP. Managed by Telnyx and cannot be changed through the API.
   */
  ptr_hostname?: string | null;

  /**
   * Set on release to 30 days after `released_at`. The address is not returned to
   * stock before this time.
   */
  quarantine_until?: string | null;

  record_type?: 'dedicated_ip';

  /**
   * Region label of the allocated IP (for example, `ewr-nj1`).
   */
  region?: string;

  /**
   * When the IP was released. Null until release.
   */
  released_at?: string | null;

  /**
   * Lifecycle status. `provisioning`: purchased and billed, carries no mail until
   * `start_warmup`. `warming_up`: warm-up ramp in progress. `active`: ramp complete.
   * `suspended`: suspended by Telnyx; carries no mail and is still billed.
   * `released`: returned to Telnyx; carries no mail.
   */
  status?: 'provisioning' | 'warming_up' | 'active' | 'suspended' | 'released';

  /**
   * Reason Telnyx recorded when suspending the IP. Null unless `status` is
   * `suspended`.
   */
  suspension_reason?: string | null;

  updated_at?: string;

  /**
   * Warmup ramp state for a dedicated IP.
   */
  warmup?: DedicatedIP.Warmup;
}

export namespace DedicatedIP {
  /**
   * Monthly recurring charge (MRC) state for the IP's current allocation.
   */
  export interface Billing {
    /**
     * True when `status` is `active`, `stopping`, or `stop_failed`. An IP carries mail
     * only after its charge has been created.
     */
    charged?: boolean;

    /**
     * `not_started`: no charge recorded for the current allocation. `pending`: the
     * charge is queued. `in_progress`: the charge is being created. `active`: the MRC
     * is active. `stopping`: release requested; the MRC stop is being processed.
     * `stopped`: the MRC has stopped. `stop_failed`: the MRC stop failed and the
     * charge remains. `failed`: the charge could not be created.
     */
    status?:
      | 'not_started'
      | 'pending'
      | 'in_progress'
      | 'active'
      | 'stopping'
      | 'stopped'
      | 'stop_failed'
      | 'failed';
  }

  /**
   * Read-only status of the Telnyx-managed PTR record. No customer action is
   * required to complete it.
   */
  export interface Provisioning {
    /**
     * Informational progress flags for the Telnyx-managed PTR. They do not gate
     * `start_warmup`; use `dns_status` to check whether the IP can carry mail.
     */
    checklist?: Provisioning.Checklist;

    /**
     * `dns_confirmed`: the PTR is forward-confirmed and `dns_confirmed_at` is set.
     * `pending_ptr`: the PTR record is not yet in place. `pending_dns`: the PTR record
     * is waiting for forward confirmation. `dns_lost`: a previously confirmed PTR no
     * longer confirms, or the PTR request was abandoned before it ever confirmed
     * (`ptr_request_state` is `abandoned`); the IP carries no mail until DNS is
     * confirmed. `not_applicable`: the IP is released or has no PTR record on file.
     */
    dns_status?: 'not_applicable' | 'pending_ptr' | 'pending_dns' | 'dns_confirmed' | 'dns_lost';

    /**
     * Reference to the Telnyx PTR change request, when one exists. Informational.
     */
    ptr_request_pr_url?: string | null;

    /**
     * State of the Telnyx PTR change: `pending`, `pr_open`, `merged`, `confirmed`,
     * `failed`, or `abandoned`. Informational.
     */
    ptr_request_state?: 'pending' | 'pr_open' | 'merged' | 'confirmed' | 'failed' | 'abandoned' | null;
  }

  export namespace Provisioning {
    /**
     * Informational progress flags for the Telnyx-managed PTR. They do not gate
     * `start_warmup`; use `dns_status` to check whether the IP can carry mail.
     */
    export interface Checklist {
      forward_confirmed?: boolean;

      ptr_authored?: boolean;

      ptr_merged?: boolean;

      ptr_requested?: boolean;
    }
  }

  /**
   * Warmup ramp state for a dedicated IP.
   */
  export interface Warmup {
    /**
     * Daily cap of the current ramp stage. Null until the scheduler arms the first
     * stage, and cleared when the ramp completes, automatically or through
     * `complete_warmup`. On an `active` IP this value is informational and can keep an
     * earlier stage cap after a suspension is lifted; it does not limit sending.
     */
    daily_cap?: number | null;

    /**
     * True while the ramp is paused.
     */
    paused?: boolean;

    /**
     * When the ramp was paused. Null when not paused.
     */
    paused_at?: string | null;

    /**
     * Ramp progress (0-100): the share of the 28 send-day schedule completed. Only UTC
     * days on which the IP sent mail count. Set to 100 when the ramp completes,
     * automatically or through `complete_warmup`. On an `active` IP this value is
     * informational and can keep an earlier value after a suspension is lifted.
     */
    progress?: number;

    /**
     * When `start_warmup` was called. Null before warm-up starts and after release.
     */
    started_at?: string | null;

    /**
     * Today's warmup allowance report card (current UTC day). Null outside the warmup
     * window (before start_warmup, after release/suspension). `active` IPs report the
     * ramp-complete allowance, except as described for `cap`.
     */
    today?: Warmup.Today | null;
  }

  export namespace Warmup {
    /**
     * Today's warmup allowance report card (current UTC day). Null outside the warmup
     * window (before start_warmup, after release/suspension). `active` IPs report the
     * ramp-complete allowance, except as described for `cap`.
     */
    export interface Today {
      /**
       * The day's allowance cap. Null when the ramp has not opened yet (day 0: the
       * scheduler has not armed a stage cap) — distinct from a spent day, which reports
       * the cap with remaining 0. `active` IPs report `100000000`, the ramp-complete
       * cap; `complete_warmup` applies it to the current day immediately. A day's
       * allowance created before the IP became `active` can keep its stored `cap` and
       * `remaining` until the next first-attempt send refreshes them.
       */
      cap?: number | null;

      /**
       * The UTC day this snapshot describes (warmup caps reset at UTC midnight).
       */
      day?: string;

      /**
       * First-attempt sends released from warmup hold so far today. Delivery retries
       * never lease allowance and are not counted.
       */
      granted?: number;

      /**
       * Headroom left today. A queued send held by the daily cap is explained by
       * remaining == 0; null mirrors cap (ramp not open yet). On an `active` IP whose
       * `cap` is below `100000000`, remaining == 0 is a stored allowance and does not
       * block the next eligible first-attempt send.
       */
      remaining?: number | null;
    }
  }
}

export interface DedicatedIPShowResponse {
  /**
   * A dedicated sending IP address owned by the account.
   */
  data: DedicatedIP;
}

export interface DedicatedIPListResponse {
  data: Array<DedicatedIP>;
}

export interface DedicatedIPListParams {
  /**
   * Return only IPs in this pool (exact match on `pool_id`). A value that is not a
   * UUID returns an empty list. An empty value applies no filter.
   */
  'filter[pool_id]'?: string;

  /**
   * Return only IPs in this region (exact, case-sensitive match on `region`). An
   * empty value applies no filter.
   */
  'filter[region]'?: string;

  /**
   * Return only IPs in this lifecycle status (exact match). Any other value returns
   * an empty list. An empty value applies no filter.
   */
  'filter[status]'?: 'provisioning' | 'warming_up' | 'active' | 'suspended' | 'released';
}

export interface DedicatedIPCreateParams {
  /**
   * Header param: Required. Opaque, unquoted key for safely retrying the same
   * purchase. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each purchase and reuse it only when retrying that
   * purchase with the same request. A missing header, or an invalid one —including
   * duplicate, empty, malformed, or overlong values—returns 400 with error
   * code 10015. A request already in progress with the same key returns 409; reusing
   * the key with a different request returns 422. Only successful responses are
   * replayed, for up to 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key': string;

  /**
   * Body param: Allocate an IP of this address family. Supported value: `ipv4`. Any
   * other value, including `ipv6` or `null`, returns `422`.
   */
  ip_version?: 'ipv4';

  /**
   * Body param: Allocate an IP in this region. Supported value: `ewr-nj1`. Any other
   * value, including an empty string or `null`, returns `422`.
   */
  region?: 'ewr-nj1';
}

export interface DedicatedIPDeleteParams {
  /**
   * Query param: Set together with `force=true` to release the last IP in a pool.
   * Acknowledges that mail routed to the emptied pool is held until the pool has a
   * sendable IP again. Also accepted in the JSON body.
   */
  query_drain?: boolean;

  /**
   * Query param: Set together with `drain=true` to release the last IP in a pool.
   * Either flag alone has no effect. Also accepted in the JSON body.
   */
  query_force?: boolean;

  /**
   * Query param: Free-text reason recorded with the release. Also accepted in the
   * JSON body.
   */
  query_reason?: string;

  /**
   * Body param: Set together with `force: true` to release the last IP in a pool.
   * Acknowledges that mail routed to the emptied pool is held until the pool has a
   * sendable IP again.
   */
  body_drain?: boolean;

  /**
   * Body param: Set together with `drain: true` to release the last IP in a pool.
   * Either flag alone has no effect.
   */
  body_force?: boolean;

  /**
   * Body param: Free-text reason recorded with the release.
   */
  body_reason?: string;
}

export interface DedicatedIPUpdateParams {
  /**
   * Set together with `force: true` to move the last IP out of its current pool.
   * Acknowledges that mail routed to the emptied pool is held. Used only with
   * `pool_id`.
   */
  drain?: boolean;

  /**
   * Set together with `drain: true` to move the last IP out of its current pool.
   * Used only with `pool_id`.
   */
  force?: boolean;

  /**
   * Move the IP to this pool, replacing its current membership. Use the IP's current
   * pool to change only its weight. To take an IP out of a pool, use
   * `DELETE /email/ip_pools/{id}/ips/{ip_id}`.
   */
  pool_id?: string;

  /**
   * Alias for `warmup_paused`.
   */
  warmup?: DedicatedIPUpdateParams.Warmup;

  /**
   * Pause (`true`) or resume (`false`) the warm-up ramp; equivalent to the
   * `pause_warmup` and `resume_warmup` actions. A Boolean value takes precedence
   * over `warmup.paused`. When a pause field is present and `pool_id` is absent,
   * supplying neither pause field as a Boolean invokes resume.
   */
  warmup_paused?: boolean;

  /**
   * Routing weight in the target pool. Used only with `pool_id`.
   */
  weight?: number;
}

export namespace DedicatedIPUpdateParams {
  /**
   * Alias for `warmup_paused`.
   */
  export interface Warmup {
    /**
     * Pause (`true`) or resume (`false`) the warm-up ramp. Used only when
     * `warmup_paused` is not a Boolean.
     */
    paused?: boolean;
  }
}

DedicatedIPs.Actions = Actions;

export declare namespace DedicatedIPs {
  export {
    type DedicatedIP as DedicatedIP,
    type DedicatedIPShowResponse as DedicatedIPShowResponse,
    type DedicatedIPListResponse as DedicatedIPListResponse,
    type DedicatedIPListParams as DedicatedIPListParams,
    type DedicatedIPCreateParams as DedicatedIPCreateParams,
    type DedicatedIPDeleteParams as DedicatedIPDeleteParams,
    type DedicatedIPUpdateParams as DedicatedIPUpdateParams,
  };

  export { Actions as Actions };
}
