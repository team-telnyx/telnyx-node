// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Messaging extends APIResource {
  /**
   * Creates a new MDR detailed report request with the specified filters
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.client.legacy.reporting.batchDetailRecords.messaging.create(
   *     {
   *       end_time: '2024-02-12T23:59:59Z',
   *       start_time: '2024-02-01T00:00:00Z',
   *     },
   *   );
   * ```
   */
  create(body: MessagingCreateParams, options?: RequestOptions): APIPromise<MessagingCreateResponse> {
    return this._client.post('/legacy/reporting/batch_detail_records/messaging', { body, ...options });
  }

  /**
   * Retrieves a specific MDR detailed report request by ID
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.client.legacy.reporting.batchDetailRecords.messaging.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingRetrieveResponse> {
    return this._client.get(path`/legacy/reporting/batch_detail_records/messaging/${id}`, options);
  }

  /**
   * Retrieves all MDR detailed report requests for the authenticated user
   *
   * @example
   * ```ts
   * const messagings =
   *   await client.client.legacy.reporting.batchDetailRecords.messaging.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<MessagingListResponse> {
    return this._client.get('/legacy/reporting/batch_detail_records/messaging', options);
  }

  /**
   * Deletes a specific MDR detailed report request by ID
   *
   * @example
   * ```ts
   * const messaging =
   *   await client.client.legacy.reporting.batchDetailRecords.messaging.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessagingDeleteResponse> {
    return this._client.delete(path`/legacy/reporting/batch_detail_records/messaging/${id}`, options);
  }
}

export interface MdrPostDetailReportResponse {
  data?: MdrPostDetailReportResponse.Data;
}

export namespace MdrPostDetailReportResponse {
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    connections?: Array<number>;

    created_at?: string;

    directions?: Array<'INBOUND' | 'OUTBOUND'>;

    end_date?: string;

    filters?: Array<Data.Filter>;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    record_types?: Array<'INCOMPLETE' | 'COMPLETED' | 'ERRORS'>;

    report_name?: string;

    report_url?: string;

    start_date?: string;

    status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED';

    updated_at?: string;
  }

  export namespace Data {
    /**
     * Query filter criteria. Note: The first filter object must specify filter_type as
     * 'and'. You cannot follow an 'or' with another 'and'.
     */
    export interface Filter {
      /**
       * Billing group UUID to filter by
       */
      billing_group?: string;

      /**
       * Called line identification (destination number)
       */
      cld?: string;

      /**
       * Filter type for CLD matching
       */
      cld_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Calling line identification (caller ID)
       */
      cli?: string;

      /**
       * Filter type for CLI matching
       */
      cli_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Logical operator for combining filters
       */
      filter_type?: 'and' | 'or';

      /**
       * Tag name to filter by
       */
      tags_list?: string;
    }
  }
}

export interface MdrGetDetailReportByIdResponse {
  data?: MdrGetDetailReportByIdResponse.Data;
}

export namespace MdrGetDetailReportByIdResponse {
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    connections?: Array<number>;

    created_at?: string;

    directions?: Array<'INBOUND' | 'OUTBOUND'>;

    end_date?: string;

    filters?: Array<Data.Filter>;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    record_types?: Array<'INCOMPLETE' | 'COMPLETED' | 'ERRORS'>;

    report_name?: string;

    report_url?: string;

    start_date?: string;

    status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED';

    updated_at?: string;
  }

  export namespace Data {
    /**
     * Query filter criteria. Note: The first filter object must specify filter_type as
     * 'and'. You cannot follow an 'or' with another 'and'.
     */
    export interface Filter {
      /**
       * Billing group UUID to filter by
       */
      billing_group?: string;

      /**
       * Called line identification (destination number)
       */
      cld?: string;

      /**
       * Filter type for CLD matching
       */
      cld_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Calling line identification (caller ID)
       */
      cli?: string;

      /**
       * Filter type for CLI matching
       */
      cli_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Logical operator for combining filters
       */
      filter_type?: 'and' | 'or';

      /**
       * Tag name to filter by
       */
      tags_list?: string;
    }
  }
}

export interface MdrGetDetailReportResponse {
  data?: Array<MdrGetDetailReportResponse.Data>;

  meta?: MdrGetDetailReportResponse.Meta;
}

export namespace MdrGetDetailReportResponse {
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    connections?: Array<number>;

    created_at?: string;

    directions?: Array<'INBOUND' | 'OUTBOUND'>;

    end_date?: string;

    filters?: Array<Data.Filter>;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    record_types?: Array<'INCOMPLETE' | 'COMPLETED' | 'ERRORS'>;

    report_name?: string;

    report_url?: string;

    start_date?: string;

    status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED';

    updated_at?: string;
  }

  export namespace Data {
    /**
     * Query filter criteria. Note: The first filter object must specify filter_type as
     * 'and'. You cannot follow an 'or' with another 'and'.
     */
    export interface Filter {
      /**
       * Billing group UUID to filter by
       */
      billing_group?: string;

      /**
       * Called line identification (destination number)
       */
      cld?: string;

      /**
       * Filter type for CLD matching
       */
      cld_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Calling line identification (caller ID)
       */
      cli?: string;

      /**
       * Filter type for CLI matching
       */
      cli_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Logical operator for combining filters
       */
      filter_type?: 'and' | 'or';

      /**
       * Tag name to filter by
       */
      tags_list?: string;
    }
  }

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface MdrDeleteDetailReportResponse {
  data?: MdrDeleteDetailReportResponse.Data;
}

export namespace MdrDeleteDetailReportResponse {
  export interface Data {
    /**
     * Identifies the resource
     */
    id?: string;

    connections?: Array<number>;

    created_at?: string;

    directions?: Array<'INBOUND' | 'OUTBOUND'>;

    end_date?: string;

    filters?: Array<Data.Filter>;

    /**
     * List of messaging profile IDs
     */
    profiles?: Array<string>;

    record_type?: string;

    record_types?: Array<'INCOMPLETE' | 'COMPLETED' | 'ERRORS'>;

    report_name?: string;

    report_url?: string;

    start_date?: string;

    status?: 'PENDING' | 'COMPLETE' | 'FAILED' | 'EXPIRED';

    updated_at?: string;
  }

  export namespace Data {
    /**
     * Query filter criteria. Note: The first filter object must specify filter_type as
     * 'and'. You cannot follow an 'or' with another 'and'.
     */
    export interface Filter {
      /**
       * Billing group UUID to filter by
       */
      billing_group?: string;

      /**
       * Called line identification (destination number)
       */
      cld?: string;

      /**
       * Filter type for CLD matching
       */
      cld_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Calling line identification (caller ID)
       */
      cli?: string;

      /**
       * Filter type for CLI matching
       */
      cli_filter?: 'contains' | 'starts_with' | 'ends_with';

      /**
       * Logical operator for combining filters
       */
      filter_type?: 'and' | 'or';

      /**
       * Tag name to filter by
       */
      tags_list?: string;
    }
  }
}

export interface MessagingCreateParams {
  /**
   * End time in ISO format. Note: If end time includes the last 4 hours, some MDRs
   * might not appear in this report, due to wait time for downstream message
   * delivery confirmation
   */
  end_time: string;

  /**
   * Start time in ISO format
   */
  start_time: string;

  /**
   * List of connections to filter by
   */
  connections?: Array<number>;

  /**
   * List of directions to filter by (Inbound = 1, Outbound = 2)
   */
  directions?: Array<number>;

  /**
   * List of filters to apply
   */
  filters?: Array<MessagingCreateParams.Filter>;

  /**
   * Whether to include message body in the report
   */
  include_message_body?: boolean;

  /**
   * List of managed accounts to include
   */
  managed_accounts?: Array<string>;

  /**
   * List of messaging profile IDs to filter by
   */
  profiles?: Array<string>;

  /**
   * List of record types to filter by (Complete = 1, Incomplete = 2, Errors = 3)
   */
  record_types?: Array<number>;

  /**
   * Name of the report
   */
  report_name?: string;

  /**
   * Whether to select all managed accounts
   */
  select_all_managed_accounts?: boolean;

  /**
   * Timezone for the report
   */
  timezone?: string;
}

export namespace MessagingCreateParams {
  /**
   * Query filter criteria. Note: The first filter object must specify filter_type as
   * 'and'. You cannot follow an 'or' with another 'and'.
   */
  export interface Filter {
    /**
     * Billing group UUID to filter by
     */
    billing_group?: string;

    /**
     * Called line identification (destination number)
     */
    cld?: string;

    /**
     * Filter type for CLD matching
     */
    cld_filter?: 'contains' | 'starts_with' | 'ends_with';

    /**
     * Calling line identification (caller ID)
     */
    cli?: string;

    /**
     * Filter type for CLI matching
     */
    cli_filter?: 'contains' | 'starts_with' | 'ends_with';

    /**
     * Logical operator for combining filters
     */
    filter_type?: 'and' | 'or';

    /**
     * Tag name to filter by
     */
    tags_list?: string;
  }
}

export declare namespace Messaging {
  export {
    type MessagingCreateResponse as MessagingCreateResponse,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingDeleteResponse as MessagingDeleteResponse,
    type MessagingCreateParams as MessagingCreateParams,
  };
}
