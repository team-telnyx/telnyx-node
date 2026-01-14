// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Uploads extends APIResource {
  /**
   * Creates a new Upload request to Microsoft teams with the included phone numbers.
   * Only one of civic_address_id or location_id must be provided, not both. The
   * maximum allowed phone numbers for the numbers_ids array is 1000.
   *
   * @example
   * ```ts
   * const upload =
   *   await client.externalConnections.uploads.create('id', {
   *     number_ids: [
   *       '3920457616934164700',
   *       '3920457616934164701',
   *       '3920457616934164702',
   *       '3920457616934164703',
   *     ],
   *   });
   * ```
   */
  create(id: string, body: UploadCreateParams, options?: RequestOptions): APIPromise<UploadCreateResponse> {
    return this._client.post(path`/external_connections/${id}/uploads`, { body, ...options });
  }

  /**
   * Return the details of an Upload request and its phone numbers.
   *
   * @example
   * ```ts
   * const upload =
   *   await client.externalConnections.uploads.retrieve(
   *     '7b6a6449-b055-45a6-81f6-f6f0dffa4cc6',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    ticketID: string,
    params: UploadRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UploadRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/external_connections/${id}/uploads/${ticketID}`, options);
  }

  /**
   * Returns a list of your Upload requests for the given external connection.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const upload of client.externalConnections.uploads.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: UploadListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UploadsDefaultFlatPagination, Upload> {
    return this._client.getAPIList(path`/external_connections/${id}/uploads`, DefaultFlatPagination<Upload>, {
      query,
      ...options,
    });
  }

  /**
   * Returns the count of all pending upload requests for the given external
   * connection.
   *
   * @example
   * ```ts
   * const response =
   *   await client.externalConnections.uploads.pendingCount(
   *     'id',
   *   );
   * ```
   */
  pendingCount(id: string, options?: RequestOptions): APIPromise<UploadPendingCountResponse> {
    return this._client.get(path`/external_connections/${id}/uploads/status`, options);
  }

  /**
   * Forces a recheck of the status of all pending Upload requests for the given
   * external connection in the background.
   *
   * @example
   * ```ts
   * const response =
   *   await client.externalConnections.uploads.refreshStatus(
   *     'id',
   *   );
   * ```
   */
  refreshStatus(id: string, options?: RequestOptions): APIPromise<UploadRefreshStatusResponse> {
    return this._client.post(path`/external_connections/${id}/uploads/refresh`, options);
  }

  /**
   * If there were any errors during the upload process, this endpoint will retry the
   * upload request. In some cases this will reattempt the existing upload request,
   * in other cases it may create a new upload request. Please check the ticket_id in
   * the response to determine if a new upload request was created.
   *
   * @example
   * ```ts
   * const response =
   *   await client.externalConnections.uploads.retry(
   *     '7b6a6449-b055-45a6-81f6-f6f0dffa4cc6',
   *     { id: 'id' },
   *   );
   * ```
   */
  retry(
    ticketID: string,
    params: UploadRetryParams,
    options?: RequestOptions,
  ): APIPromise<UploadRetryResponse> {
    const { id } = params;
    return this._client.post(path`/external_connections/${id}/uploads/${ticketID}/retry`, options);
  }
}

export type UploadsDefaultFlatPagination = DefaultFlatPagination<Upload>;

export interface TnUploadEntry {
  /**
   * Identifies the civic address assigned to the phone number entry.
   */
  civic_address_id?: string;

  /**
   * A code returned by Microsoft Teams if there is an error with the phone number
   * entry upload.
   */
  error_code?:
    | 'internal_error'
    | 'unable_to_retrieve_default_location'
    | 'unknown_country_code'
    | 'unable_to_retrieve_location'
    | 'unable_to_retrieve_partner_info'
    | 'unable_to_match_geography_entry';

  /**
   * A message returned by Microsoft Teams if there is an error with the upload
   * process.
   */
  error_message?: string;

  /**
   * Represents the status of the phone number entry upload on Telnyx.
   */
  internal_status?:
    | 'pending_assignment'
    | 'in_progress'
    | 'all_internal_jobs_completed'
    | 'release_requested'
    | 'release_completed'
    | 'error';

  /**
   * Identifies the location assigned to the phone number entry.
   */
  location_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  number_id?: string;

  /**
   * Phone number in E164 format.
   */
  phone_number?: string;

  /**
   * Represents the status of the phone number entry upload on Microsoft Teams.
   */
  status?: 'pending_upload' | 'pending' | 'in_progress' | 'success' | 'error';
}

export interface Upload {
  available_usages?: Array<'calling_user_assignment' | 'first_party_app_assignment'>;

  /**
   * A code returned by Microsoft Teams if there is an error with the upload process.
   */
  error_code?: string;

  /**
   * A message set if there is an error with the upload process.
   */
  error_message?: string;

  location_id?: string;

  /**
   * Represents the status of the upload on Microsoft Teams.
   */
  status?: 'pending_upload' | 'pending' | 'in_progress' | 'partial_success' | 'success' | 'error';

  tenant_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  ticket_id?: string;

  tn_upload_entries?: Array<TnUploadEntry>;
}

export interface UploadCreateResponse {
  /**
   * Describes wether or not the operation was successful
   */
  success?: boolean;

  /**
   * Ticket id of the upload request
   */
  ticket_id?: string;
}

export interface UploadRetrieveResponse {
  data?: Upload;
}

export interface UploadPendingCountResponse {
  data?: UploadPendingCountResponse.Data;
}

export namespace UploadPendingCountResponse {
  export interface Data {
    /**
     * The count of phone numbers that are pending assignment to the external
     * connection.
     */
    pending_numbers_count?: number;

    /**
     * The count of number uploads that have not yet been uploaded to Microsoft.
     */
    pending_orders_count?: number;
  }
}

export interface UploadRefreshStatusResponse {
  /**
   * Describes wether or not the operation was successful
   */
  success?: boolean;
}

export interface UploadRetryResponse {
  data?: Upload;
}

export interface UploadCreateParams {
  number_ids: Array<string>;

  additional_usages?: Array<'calling_user_assignment' | 'first_party_app_assignment'>;

  /**
   * Identifies the civic address to assign all phone numbers to.
   */
  civic_address_id?: string;

  /**
   * Identifies the location to assign all phone numbers to.
   */
  location_id?: string;

  /**
   * The use case of the upload request. NOTE: `calling_user_assignment` is not
   * supported for toll free numbers.
   */
  usage?: 'calling_user_assignment' | 'first_party_app_assignment';
}

export interface UploadRetrieveParams {
  /**
   * Identifies the resource.
   */
  id: string;
}

export interface UploadListParams extends DefaultFlatPaginationParams {
  /**
   * Filter parameter for uploads (deepObject style). Supports filtering by status,
   * civic_address_id, location_id, and phone_number with eq/contains operations.
   */
  filter?: UploadListParams.Filter;
}

export namespace UploadListParams {
  /**
   * Filter parameter for uploads (deepObject style). Supports filtering by status,
   * civic_address_id, location_id, and phone_number with eq/contains operations.
   */
  export interface Filter {
    civic_address_id?: Filter.CivicAddressID;

    location_id?: Filter.LocationID;

    phone_number?: Filter.PhoneNumber;

    status?: Filter.Status;
  }

  export namespace Filter {
    export interface CivicAddressID {
      /**
       * The civic address ID to filter by
       */
      eq?: string;
    }

    export interface LocationID {
      /**
       * The location ID to filter by
       */
      eq?: string;
    }

    export interface PhoneNumber {
      /**
       * The phone number to filter by (partial match)
       */
      contains?: string;

      /**
       * The phone number to filter by (exact match)
       */
      eq?: string;
    }

    export interface Status {
      /**
       * The status of the upload to filter by
       */
      eq?: Array<'pending_upload' | 'pending' | 'in_progress' | 'success' | 'error'>;
    }
  }
}

export interface UploadRetryParams {
  /**
   * Identifies the resource.
   */
  id: string;
}

export declare namespace Uploads {
  export {
    type TnUploadEntry as TnUploadEntry,
    type Upload as Upload,
    type UploadCreateResponse as UploadCreateResponse,
    type UploadRetrieveResponse as UploadRetrieveResponse,
    type UploadPendingCountResponse as UploadPendingCountResponse,
    type UploadRefreshStatusResponse as UploadRefreshStatusResponse,
    type UploadRetryResponse as UploadRetryResponse,
    type UploadsDefaultFlatPagination as UploadsDefaultFlatPagination,
    type UploadCreateParams as UploadCreateParams,
    type UploadRetrieveParams as UploadRetrieveParams,
    type UploadListParams as UploadListParams,
    type UploadRetryParams as UploadRetryParams,
  };
}
