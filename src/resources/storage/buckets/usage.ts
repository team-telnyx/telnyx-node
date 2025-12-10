// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Usage extends APIResource {
  /**
   * Returns the detail on API usage on a bucket of a particular time period, group
   * by method category.
   *
   * @example
   * ```ts
   * const response =
   *   await client.storage.buckets.usage.getAPIUsage('', {
   *     filter: {
   *       end_time: '2019-12-27T18:11:19.117Z',
   *       start_time: '2019-12-27T18:11:19.117Z',
   *     },
   *   });
   * ```
   */
  getAPIUsage(
    bucketName: string,
    query: UsageGetAPIUsageParams,
    options?: RequestOptions,
  ): APIPromise<UsageGetAPIUsageResponse> {
    return this._client.get(path`/storage/buckets/${bucketName}/usage/api`, { query, ...options });
  }

  /**
   * Returns the amount of storage space and number of files a bucket takes up.
   *
   * @example
   * ```ts
   * const response =
   *   await client.storage.buckets.usage.getBucketUsage('');
   * ```
   */
  getBucketUsage(bucketName: string, options?: RequestOptions): APIPromise<UsageGetBucketUsageResponse> {
    return this._client.get(path`/storage/buckets/${bucketName}/usage/storage`, options);
  }
}

export interface PaginationMetaSimple {
  page_number: number;

  total_pages: number;

  page_size?: number;

  total_results?: number;
}

export interface UsageGetAPIUsageResponse {
  data?: Array<UsageGetAPIUsageResponse.Data>;
}

export namespace UsageGetAPIUsageResponse {
  export interface Data {
    categories?: Array<Data.Category>;

    /**
     * The time the usage was recorded
     */
    timestamp?: string;

    total?: Data.Total;
  }

  export namespace Data {
    export interface Category {
      /**
       * The number of bytes received
       */
      bytes_received?: number;

      /**
       * The number of bytes sent
       */
      bytes_sent?: number;

      /**
       * The category of the bucket operation
       */
      category?:
        | 'list_bucket'
        | 'list_buckets'
        | 'get-bucket_location'
        | 'create_bucket'
        | 'stat_bucket'
        | 'get_bucket_versioning'
        | 'set_bucket_versioning'
        | 'get_obj'
        | 'put_obj'
        | 'delete_obj';

      /**
       * The number of operations
       */
      ops?: number;

      /**
       * The number of successful operations
       */
      successful_ops?: number;
    }

    export interface Total {
      /**
       * The number of bytes received
       */
      bytes_received?: number;

      /**
       * The number of bytes sent
       */
      bytes_sent?: number;

      /**
       * The number of operations
       */
      ops?: number;

      /**
       * The number of successful operations
       */
      successful_ops?: number;
    }
  }
}

export interface UsageGetBucketUsageResponse {
  data?: Array<UsageGetBucketUsageResponse.Data>;

  meta?: PaginationMetaSimple;
}

export namespace UsageGetBucketUsageResponse {
  export interface Data {
    /**
     * The number of objects in the bucket
     */
    num_objects?: number;

    /**
     * The size of the bucket in bytes
     */
    size?: number;

    /**
     * The size of the bucket in kilobytes
     */
    size_kb?: number;

    /**
     * The time the snapshot was taken
     */
    timestamp?: string;
  }
}

export interface UsageGetAPIUsageParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[start_time], filter[end_time]
   */
  filter: UsageGetAPIUsageParams.Filter;
}

export namespace UsageGetAPIUsageParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[start_time], filter[end_time]
   */
  export interface Filter {
    /**
     * The end time of the period to filter the usage (ISO microsecond format)
     */
    end_time: string;

    /**
     * The start time of the period to filter the usage (ISO microsecond format)
     */
    start_time: string;
  }
}

export declare namespace Usage {
  export {
    type PaginationMetaSimple as PaginationMetaSimple,
    type UsageGetAPIUsageResponse as UsageGetAPIUsageResponse,
    type UsageGetBucketUsageResponse as UsageGetBucketUsageResponse,
    type UsageGetAPIUsageParams as UsageGetAPIUsageParams,
  };
}
