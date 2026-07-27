// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class MessagingProfileMetrics extends APIResource {
  /**
   * List high-level metrics for all messaging profiles belonging to the
   * authenticated user.
   */
  list(
    query: MessagingProfileMetricListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingProfileMetricListResponse> {
    return this._client.get('/messaging_profile_metrics', { query, ...options });
  }
}

/**
 * The time frame for metrics aggregation.
 */
export type MessagingMetricsTimeFrame = '1h' | '3h' | '24h' | '3d' | '7d' | '30d';

export interface MessagingProfileMetricListResponse {
  data?: Array<{ [key: string]: unknown }>;

  meta?: Shared.MessagingPaginationMeta;
}

export interface MessagingProfileMetricListParams {
  /**
   * The time frame for metrics.
   */
  time_frame?: MessagingMetricsTimeFrame;
}

export declare namespace MessagingProfileMetrics {
  export {
    type MessagingMetricsTimeFrame as MessagingMetricsTimeFrame,
    type MessagingProfileMetricListResponse as MessagingProfileMetricListResponse,
    type MessagingProfileMetricListParams as MessagingProfileMetricListParams,
  };
}
