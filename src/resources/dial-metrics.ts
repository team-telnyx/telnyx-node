// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { CloudfsCursorPagination, type CloudfsCursorPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

/**
 * Call information
 */
export class DialMetrics extends APIResource {
  /**
   * Returns dials-per-second (DPS) metrics for your account's outbound dials made
   * with the Call Control `Dial` command and TeXML, as time buckets with dial
   * counts, accepted and rejected dials, average and peak DPS, and the DPS limit in
   * force.
   *
   * The result has one record per region per bucket, ordered by `start_time` and
   * then `region`, newest first unless `sort=start_time`. Regions are never summed:
   * the DPS limit is enforced per region, so a cross-region total cannot be compared
   * with it.
   *
   * Only buckets that saw dials are returned. Treat a missing bucket as zero dials.
   *
   * Only complete 5-second windows are counted, and a window is counted about 15
   * seconds after it closes. The newest `granularity=second` record is therefore
   * your live DPS, about 20 seconds old. Request the last minute or two with
   * `sort=-start_time`; the first record of each `region` is that region's live rate
   * (`page[limit]=1` would hide every region but one). If no recent record exists,
   * the live rate is zero.
   *
   * Results are cursor paginated. Follow `meta.next`, or pass `meta.cursors.after`
   * as `page[after]`, until `meta.next` is absent. No total count is returned.
   *
   * This endpoint is in development and can change before general availability.
   */
  list(
    query: DialMetricListParams,
    options?: RequestOptions,
  ): PagePromise<DialMetricListResponsesCloudfsCursorPagination, DialMetricListResponse> {
    return this._client.getAPIList('/dial_metrics', CloudfsCursorPagination<DialMetricListResponse>, {
      query,
      ...options,
    });
  }
}

export type DialMetricListResponsesCloudfsCursorPagination = CloudfsCursorPagination<DialMetricListResponse>;

/**
 * Dial counts and rates for one region in one time bucket. One record per region
 * per bucket.
 */
export interface DialMetricListResponse {
  /**
   * `dials.total` divided by the bucket duration in seconds, rounded to 4 decimal
   * places. Counts every dial attempt, rejected ones included.
   */
  average_dps?: number;

  /**
   * Dial attempt counts in the bucket.
   */
  dials?: DialMetricListResponse.Dials;

  /**
   * DPS limit in force during the busiest 5-second window, so it compares directly
   * with `peak_dps`. `null` means unlimited. Enforcement near the limit is
   * approximate; `dials.rejected.dps_limit` is the authoritative signal that the
   * limit was reached.
   */
  dps_limit?: number | null;

  /**
   * End of the bucket (exclusive), UTC. Five seconds, one minute or one hour after
   * `start_time`, depending on `granularity`.
   */
  end_time?: string;

  /**
   * Dials per second, rounded to 4 decimal places, in the busiest 5-second window of
   * the bucket, summed across all call-processing nodes of the region. Counts every
   * dial attempt, rejected ones included, so `peak_dps` above `dps_limit` is
   * expected when dials were rejected. For `granularity=second` it equals
   * `average_dps`.
   */
  peak_dps?: number;

  record_type?: 'dial_metric';

  /**
   * Region where the dials were handled. Current values are `us`, `eu`, `australia`,
   * `middle_east`, `canada` and `india`. New values can be added, so clients must
   * tolerate values not listed here. Buckets of different regions are separate
   * records.
   */
  region?: string;

  /**
   * Start of the bucket (inclusive), UTC.
   */
  start_time?: string;
}

export namespace DialMetricListResponse {
  /**
   * Dial attempt counts in the bucket.
   */
  export interface Dials {
    /**
     * Dial attempts that were not rejected by a limit.
     */
    accepted?: number;

    /**
     * Dial attempts rejected by a limit.
     */
    rejected?: Dials.Rejected;

    /**
     * All dial attempts, rejected ones included: accepted plus every rejected count.
     */
    total?: number;
  }

  export namespace Dials {
    /**
     * Dial attempts rejected by a limit.
     */
    export interface Rejected {
      /**
       * Rejected by a daily limit.
       */
      daily_limit?: number;

      /**
       * Rejected by the dials-per-second limit.
       */
      dps_limit?: number;

      /**
       * Rejected by an hourly limit.
       */
      hourly_limit?: number;
    }
  }
}

export interface DialMetricListParams extends CloudfsCursorPaginationParams {
  /**
   * Exclusive end of the range, ISO 8601. Must be after `start_time`. Buckets that
   * start before this time are returned.
   */
  end_time: string;

  /**
   * Bucket size. `second` returns 5-second buckets (the finest resolution) and is
   * kept for the last 48 hours. `minute` and `hour` are kept for the last 30 days.
   */
  granularity: 'second' | 'minute' | 'hour';

  /**
   * Inclusive start of the range, ISO 8601 (for example `2026-09-29T12:00:00.000Z`).
   * Buckets that start at or after this time are returned. Must not be older than
   * the retention window of the chosen `granularity`.
   */
  start_time: string;

  /**
   * Sort order of the buckets by `start_time`. `-start_time` (default) returns the
   * newest first, `start_time` the oldest first. `region` follows the same direction
   * for buckets with the same `start_time`. To read the live rate, use
   * `granularity=second` and `sort=-start_time`, then take the first record of each
   * `region`.
   */
  sort?: '-start_time' | 'start_time';
}

export declare namespace DialMetrics {
  export {
    type DialMetricListResponse as DialMetricListResponse,
    type DialMetricListResponsesCloudfsCursorPagination as DialMetricListResponsesCloudfsCursorPagination,
    type DialMetricListParams as DialMetricListParams,
  };
}
