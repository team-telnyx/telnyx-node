// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CsvDownloads extends APIResource {
  /**
   * Create a CSV download
   *
   * @example
   * ```ts
   * const csvDownload =
   *   await client.phoneNumbers.csvDownloads.create();
   * ```
   */
  create(
    params: CsvDownloadCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CsvDownloadCreateResponse> {
    const { csv_format, filter } = params ?? {};
    return this._client.post('/phone_numbers/csv_downloads', { query: { csv_format, filter }, ...options });
  }

  /**
   * Retrieve a CSV download
   *
   * @example
   * ```ts
   * const csvDownload =
   *   await client.phoneNumbers.csvDownloads.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CsvDownloadRetrieveResponse> {
    return this._client.get(path`/phone_numbers/csv_downloads/${id}`, options);
  }

  /**
   * List CSV downloads
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const csvDownload of client.phoneNumbers.csvDownloads.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CsvDownloadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CsvDownloadsDefaultFlatPagination, CsvDownload> {
    return this._client.getAPIList('/phone_numbers/csv_downloads', DefaultFlatPagination<CsvDownload>, {
      query,
      ...options,
    });
  }
}

export type CsvDownloadsDefaultFlatPagination = DefaultFlatPagination<CsvDownload>;

export interface CsvDownload {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Indicates the completion level of the CSV report. Only complete CSV download
   * requests will be able to be retrieved.
   */
  status?: 'pending' | 'complete' | 'failed' | 'expired';

  /**
   * The URL at which the CSV file can be retrieved.
   */
  url?: string;
}

export interface CsvDownloadCreateResponse {
  data?: Array<CsvDownload>;
}

export interface CsvDownloadRetrieveResponse {
  data?: Array<CsvDownload>;
}

export interface CsvDownloadCreateParams {
  /**
   * Which format to use when generating the CSV file. The default for backwards
   * compatibility is 'V1'
   */
  csv_format?: 'V1' | 'V2';

  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[has_bundle], filter[tag], filter[connection_id], filter[phone_number],
   * filter[status], filter[voice.connection_name],
   * filter[voice.usage_payment_method], filter[billing_group_id],
   * filter[emergency_address_id], filter[customer_reference]
   */
  filter?: CsvDownloadCreateParams.Filter;
}

export namespace CsvDownloadCreateParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[has_bundle], filter[tag], filter[connection_id], filter[phone_number],
   * filter[status], filter[voice.connection_name],
   * filter[voice.usage_payment_method], filter[billing_group_id],
   * filter[emergency_address_id], filter[customer_reference]
   */
  export interface Filter {
    /**
     * Filter by the billing_group_id associated with phone numbers. To filter to only
     * phone numbers that have no billing group associated them, set the value of this
     * filter to the string 'null'.
     */
    billing_group_id?: string;

    /**
     * Filter by connection_id.
     */
    connection_id?: string;

    /**
     * Filter numbers via the customer_reference set.
     */
    customer_reference?: string;

    /**
     * Filter by the emergency_address_id associated with phone numbers. To filter only
     * phone numbers that have no emergency address associated with them, set the value
     * of this filter to the string 'null'.
     */
    emergency_address_id?: string;

    /**
     * Filter by phone number that have bundles.
     */
    has_bundle?: string;

    /**
     * Filter by phone number. Requires at least three digits. Non-numerical characters
     * will result in no values being returned.
     */
    phone_number?: string;

    /**
     * Filter by phone number status.
     */
    status?:
      | 'purchase-pending'
      | 'purchase-failed'
      | 'port-pending'
      | 'active'
      | 'deleted'
      | 'port-failed'
      | 'emergency-only'
      | 'ported-out'
      | 'port-out-pending';

    /**
     * Filter by phone number tags.
     */
    tag?: string;

    /**
     * Filter by voice connection name pattern matching.
     */
    'voice.connection_name'?: Filter.VoiceConnectionName;

    /**
     * Filter by usage_payment_method.
     */
    'voice.usage_payment_method'?: 'pay-per-minute' | 'channel';
  }

  export namespace Filter {
    /**
     * Filter by voice connection name pattern matching.
     */
    export interface VoiceConnectionName {
      /**
       * Filter contains connection name. Requires at least three characters.
       */
      contains?: string;

      /**
       * Filter ends with connection name. Requires at least three characters.
       */
      ends_with?: string;

      /**
       * Filter by connection name.
       */
      eq?: string;

      /**
       * Filter starts with connection name. Requires at least three characters.
       */
      starts_with?: string;
    }
  }
}

export interface CsvDownloadListParams extends DefaultFlatPaginationParams {}

export declare namespace CsvDownloads {
  export {
    type CsvDownload as CsvDownload,
    type CsvDownloadCreateResponse as CsvDownloadCreateResponse,
    type CsvDownloadRetrieveResponse as CsvDownloadRetrieveResponse,
    type CsvDownloadsDefaultFlatPagination as CsvDownloadsDefaultFlatPagination,
    type CsvDownloadCreateParams as CsvDownloadCreateParams,
    type CsvDownloadListParams as CsvDownloadListParams,
  };
}
