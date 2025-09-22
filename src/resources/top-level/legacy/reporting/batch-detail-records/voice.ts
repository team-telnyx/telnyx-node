// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Voice extends APIResource {
  /**
   * Creates a new CDR report request with the specified filters
   *
   * @example
   * ```ts
   * const voice =
   *   await client.client.legacy.reporting.batchDetailRecords.voice.create(
   *     {
   *       end_time: '2024-02-12T23:59:59Z',
   *       start_time: '2024-02-01T00:00:00Z',
   *     },
   *   );
   * ```
   */
  create(body: VoiceCreateParams, options?: RequestOptions): APIPromise<VoiceCreateResponse> {
    return this._client.post('/legacy/reporting/batch_detail_records/voice', { body, ...options });
  }

  /**
   * Retrieves a specific CDR report request by ID
   *
   * @example
   * ```ts
   * const voice =
   *   await client.client.legacy.reporting.batchDetailRecords.voice.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VoiceRetrieveResponse> {
    return this._client.get(path`/legacy/reporting/batch_detail_records/voice/${id}`, options);
  }

  /**
   * Retrieves all CDR report requests for the authenticated user
   *
   * @example
   * ```ts
   * const voices =
   *   await client.client.legacy.reporting.batchDetailRecords.voice.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<VoiceListResponse> {
    return this._client.get('/legacy/reporting/batch_detail_records/voice', options);
  }

  /**
   * Deletes a specific CDR report request by ID
   *
   * @example
   * ```ts
   * const voice =
   *   await client.client.legacy.reporting.batchDetailRecords.voice.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<VoiceDeleteResponse> {
    return this._client.delete(path`/legacy/reporting/batch_detail_records/voice/${id}`, options);
  }

  /**
   * Retrieves all available fields that can be used in CDR reports
   *
   * @example
   * ```ts
   * const response =
   *   await client.client.legacy.reporting.batchDetailRecords.voice.retrieveFields();
   * ```
   */
  retrieveFields(options?: RequestOptions): APIPromise<VoiceRetrieveFieldsResponse> {
    return this._client.get('/legacy/reporting/batch_detail_records/voice/fields', options);
  }
}

export interface CdrPostDetailReportResponse {
  /**
   * Response object for CDR detailed report
   */
  data?: CdrPostDetailReportResponse.Data;
}

export namespace CdrPostDetailReportResponse {
  /**
   * Response object for CDR detailed report
   */
  export interface Data {
    /**
     * Unique identifier for the report
     */
    id?: string;

    /**
     * List of call types (Inbound = 1, Outbound = 2)
     */
    call_types?: Array<number>;

    /**
     * List of connections
     */
    connections?: Array<number>;

    /**
     * Creation date of the report
     */
    created_at?: string;

    /**
     * End time in ISO format
     */
    end_time?: string;

    /**
     * List of filters
     */
    filters?: Array<Data.Filter>;

    /**
     * List of managed accounts
     */
    managed_accounts?: Array<string>;

    record_type?: string;

    /**
     * List of record types (Complete = 1, Incomplete = 2, Errors = 3)
     */
    record_types?: Array<number>;

    /**
     * Name of the report
     */
    report_name?: string;

    /**
     * URL to download the report
     */
    report_url?: string;

    /**
     * Number of retries
     */
    retry?: number;

    /**
     * Source of the report. Valid values: calls (default), call-control, fax-api,
     * webrtc
     */
    source?: string;

    /**
     * Start time in ISO format
     */
    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    /**
     * Timezone for the report
     */
    timezone?: string;

    /**
     * Last update date of the report
     */
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

export interface CdrGetDetailReportByIdResponse {
  /**
   * Response object for CDR detailed report
   */
  data?: CdrGetDetailReportByIdResponse.Data;
}

export namespace CdrGetDetailReportByIdResponse {
  /**
   * Response object for CDR detailed report
   */
  export interface Data {
    /**
     * Unique identifier for the report
     */
    id?: string;

    /**
     * List of call types (Inbound = 1, Outbound = 2)
     */
    call_types?: Array<number>;

    /**
     * List of connections
     */
    connections?: Array<number>;

    /**
     * Creation date of the report
     */
    created_at?: string;

    /**
     * End time in ISO format
     */
    end_time?: string;

    /**
     * List of filters
     */
    filters?: Array<Data.Filter>;

    /**
     * List of managed accounts
     */
    managed_accounts?: Array<string>;

    record_type?: string;

    /**
     * List of record types (Complete = 1, Incomplete = 2, Errors = 3)
     */
    record_types?: Array<number>;

    /**
     * Name of the report
     */
    report_name?: string;

    /**
     * URL to download the report
     */
    report_url?: string;

    /**
     * Number of retries
     */
    retry?: number;

    /**
     * Source of the report. Valid values: calls (default), call-control, fax-api,
     * webrtc
     */
    source?: string;

    /**
     * Start time in ISO format
     */
    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    /**
     * Timezone for the report
     */
    timezone?: string;

    /**
     * Last update date of the report
     */
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

export interface CdrGetDetailReportResponse {
  data?: Array<CdrGetDetailReportResponse.Data>;

  meta?: CdrGetDetailReportResponse.Meta;
}

export namespace CdrGetDetailReportResponse {
  /**
   * Response object for CDR detailed report
   */
  export interface Data {
    /**
     * Unique identifier for the report
     */
    id?: string;

    /**
     * List of call types (Inbound = 1, Outbound = 2)
     */
    call_types?: Array<number>;

    /**
     * List of connections
     */
    connections?: Array<number>;

    /**
     * Creation date of the report
     */
    created_at?: string;

    /**
     * End time in ISO format
     */
    end_time?: string;

    /**
     * List of filters
     */
    filters?: Array<Data.Filter>;

    /**
     * List of managed accounts
     */
    managed_accounts?: Array<string>;

    record_type?: string;

    /**
     * List of record types (Complete = 1, Incomplete = 2, Errors = 3)
     */
    record_types?: Array<number>;

    /**
     * Name of the report
     */
    report_name?: string;

    /**
     * URL to download the report
     */
    report_url?: string;

    /**
     * Number of retries
     */
    retry?: number;

    /**
     * Source of the report. Valid values: calls (default), call-control, fax-api,
     * webrtc
     */
    source?: string;

    /**
     * Start time in ISO format
     */
    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    /**
     * Timezone for the report
     */
    timezone?: string;

    /**
     * Last update date of the report
     */
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

export interface CdrDeleteDetailReportResponse {
  /**
   * Response object for CDR detailed report
   */
  data?: CdrDeleteDetailReportResponse.Data;
}

export namespace CdrDeleteDetailReportResponse {
  /**
   * Response object for CDR detailed report
   */
  export interface Data {
    /**
     * Unique identifier for the report
     */
    id?: string;

    /**
     * List of call types (Inbound = 1, Outbound = 2)
     */
    call_types?: Array<number>;

    /**
     * List of connections
     */
    connections?: Array<number>;

    /**
     * Creation date of the report
     */
    created_at?: string;

    /**
     * End time in ISO format
     */
    end_time?: string;

    /**
     * List of filters
     */
    filters?: Array<Data.Filter>;

    /**
     * List of managed accounts
     */
    managed_accounts?: Array<string>;

    record_type?: string;

    /**
     * List of record types (Complete = 1, Incomplete = 2, Errors = 3)
     */
    record_types?: Array<number>;

    /**
     * Name of the report
     */
    report_name?: string;

    /**
     * URL to download the report
     */
    report_url?: string;

    /**
     * Number of retries
     */
    retry?: number;

    /**
     * Source of the report. Valid values: calls (default), call-control, fax-api,
     * webrtc
     */
    source?: string;

    /**
     * Start time in ISO format
     */
    start_time?: string;

    /**
     * Status of the report (Pending = 1, Complete = 2, Failed = 3, Expired = 4)
     */
    status?: number;

    /**
     * Timezone for the report
     */
    timezone?: string;

    /**
     * Last update date of the report
     */
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

/**
 * Available CDR report fields grouped by category
 */
export interface CdrAvailableFieldsResponse {
  /**
   * Cost and billing related information
   */
  Billing?: Array<string>;

  /**
   * Fields related to call interaction and basic call information
   */
  'Interaction Data'?: Array<string>;

  /**
   * Geographic and routing information for phone numbers
   */
  'Number Information'?: Array<string>;

  /**
   * Technical telephony and call control information
   */
  'Telephony Data'?: Array<string>;
}

export interface VoiceCreateParams {
  /**
   * End time in ISO format
   */
  end_time: string;

  /**
   * Start time in ISO format
   */
  start_time: string;

  /**
   * List of call types to filter by (Inbound = 1, Outbound = 2)
   */
  call_types?: Array<number>;

  /**
   * List of connections to filter by
   */
  connections?: Array<number>;

  /**
   * Set of fields to include in the report
   */
  fields?: Array<string>;

  /**
   * List of filters to apply
   */
  filters?: Array<VoiceCreateParams.Filter>;

  /**
   * Whether to include all metadata
   */
  include_all_metadata?: boolean;

  /**
   * List of managed accounts to include
   */
  managed_accounts?: Array<string>;

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
   * Source of the report. Valid values: calls (default), call-control, fax-api,
   * webrtc
   */
  source?: string;

  /**
   * Timezone for the report
   */
  timezone?: string;
}

export namespace VoiceCreateParams {
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

export declare namespace Voice {
  export {
    type VoiceCreateResponse as VoiceCreateResponse,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceListResponse as VoiceListResponse,
    type VoiceDeleteResponse as VoiceDeleteResponse,
    type VoiceRetrieveFieldsResponse as VoiceRetrieveFieldsResponse,
    type VoiceCreateParams as VoiceCreateParams,
  };
}
