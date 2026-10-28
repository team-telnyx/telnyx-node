// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DedicatedIPsAPI from './dedicated-ips';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Purchase and manage dedicated sending IP addresses for your Telnyx email traffic.
 */
export class Actions extends APIResource {
  /**
   * Manually complete the warm-up ramp (`warming_up` to `active`), bypassing the
   * schedule. Use only for an IP already warmed elsewhere. Completion sets
   * `warmup.progress` to `100`, clears `warmup.daily_cap`, and applies the
   * ramp-complete allowance to the current UTC day: `warmup.today.cap` becomes
   * `100000000`, `warmup.today.granted` keeps the sends already released today, and
   * `warmup.today.remaining` becomes `cap` minus `granted`. Once completion applies
   * this allowance, an exhausted stage allowance does not block the next eligible
   * first-attempt send. The response reports these values. On an `active` IP,
   * `warmup.progress` and `warmup.daily_cap` are informational: they can keep
   * earlier values after a suspension is lifted and do not limit sending.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.actions.completeWarmup(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  completeWarmup(id: string, options?: RequestOptions): APIPromise<DedicatedIPsAPI.DedicatedIPShowResponse> {
    return this._client.post(path`/email/dedicated_ips/${id}/actions/complete_warmup`, options);
  }

  /**
   * Pause the warm-up ramp at its current stage. While paused, the IP releases no
   * first-attempt sends from hold and the ramp does not advance. Only a `warming_up`
   * IP can be paused; pausing an already paused IP refreshes `paused_at`.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.actions.pauseWarmup(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  pauseWarmup(id: string, options?: RequestOptions): APIPromise<DedicatedIPsAPI.DedicatedIPShowResponse> {
    return this._client.post(path`/email/dedicated_ips/${id}/actions/pause_warmup`, options);
  }

  /**
   * Resume a paused warm-up ramp from its held stage. Only a `warming_up` IP can be
   * resumed; resuming a ramp that is not paused returns the IP unchanged.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.actions.resumeWarmup(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  resumeWarmup(id: string, options?: RequestOptions): APIPromise<DedicatedIPsAPI.DedicatedIPShowResponse> {
    return this._client.post(path`/email/dedicated_ips/${id}/actions/resume_warmup`, options);
  }

  /**
   * Start the warm-up ramp (`provisioning` to `warming_up`). The ramp never starts
   * automatically. Only a `provisioning` IP can be started; a `suspended` IP returns
   * `409`. Starting does not check DNS: the IP carries mail only while
   * `dns_confirmed_at` is set and the IP is in a pool that routes mail.
   *
   * @example
   * ```ts
   * const dedicatedIPShowResponse =
   *   await client.email.dedicatedIPs.actions.startWarmup(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  startWarmup(id: string, options?: RequestOptions): APIPromise<DedicatedIPsAPI.DedicatedIPShowResponse> {
    return this._client.post(path`/email/dedicated_ips/${id}/actions/start_warmup`, options);
  }
}
