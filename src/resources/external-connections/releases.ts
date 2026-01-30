// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Releases extends APIResource {
  /**
   * Return the details of a Release request and its phone numbers.
   *
   * @example
   * ```ts
   * const release =
   *   await client.externalConnections.releases.retrieve(
   *     '7b6a6449-b055-45a6-81f6-f6f0dffa4cc6',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    releaseID: string,
    params: ReleaseRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/external_connections/${id}/releases/${releaseID}`, options);
  }

  /**
   * Returns a list of your Releases for the given external connection. These are
   * automatically created when you change the `connection_id` of a phone number that
   * is currently on Microsoft Teams.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const releaseListResponse of client.externalConnections.releases.list(
   *   'id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: ReleaseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ReleaseListResponsesDefaultFlatPagination, ReleaseListResponse> {
    return this._client.getAPIList(
      path`/external_connections/${id}/releases`,
      DefaultFlatPagination<ReleaseListResponse>,
      { query, ...options },
    );
  }
}

export type ReleaseListResponsesDefaultFlatPagination = DefaultFlatPagination<ReleaseListResponse>;

export interface ReleaseRetrieveResponse {
  data?: ReleaseRetrieveResponse.Data;
}

export namespace ReleaseRetrieveResponse {
  export interface Data {
    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * A message set if there is an error with the upload process.
     */
    error_message?: string;

    /**
     * Represents the status of the release on Microsoft Teams.
     */
    status?: 'pending_upload' | 'pending' | 'in_progress' | 'complete' | 'failed' | 'expired' | 'unknown';

    telephone_numbers?: Array<Data.TelephoneNumber>;

    tenant_id?: string;

    /**
     * Uniquely identifies the resource.
     */
    ticket_id?: string;
  }

  export namespace Data {
    export interface TelephoneNumber {
      /**
       * Phone number ID from the Telnyx API.
       */
      number_id?: string;

      /**
       * Phone number in E164 format.
       */
      phone_number?: string;
    }
  }
}

export interface ReleaseListResponse {
  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A message set if there is an error with the upload process.
   */
  error_message?: string;

  /**
   * Represents the status of the release on Microsoft Teams.
   */
  status?: 'pending_upload' | 'pending' | 'in_progress' | 'complete' | 'failed' | 'expired' | 'unknown';

  telephone_numbers?: Array<ReleaseListResponse.TelephoneNumber>;

  tenant_id?: string;

  /**
   * Uniquely identifies the resource.
   */
  ticket_id?: string;
}

export namespace ReleaseListResponse {
  export interface TelephoneNumber {
    /**
     * Phone number ID from the Telnyx API.
     */
    number_id?: string;

    /**
     * Phone number in E164 format.
     */
    phone_number?: string;
  }
}

export interface ReleaseRetrieveParams {
  /**
   * Identifies the resource.
   */
  id: string;
}

export interface ReleaseListParams extends DefaultFlatPaginationParams {
  /**
   * Filter parameter for releases (deepObject style). Supports filtering by status,
   * civic_address_id, location_id, and phone_number with eq/contains operations.
   */
  filter?: ReleaseListParams.Filter;
}

export namespace ReleaseListParams {
  /**
   * Filter parameter for releases (deepObject style). Supports filtering by status,
   * civic_address_id, location_id, and phone_number with eq/contains operations.
   */
  export interface Filter {
    civic_address_id?: Filter.CivicAddressID;

    location_id?: Filter.LocationID;

    /**
     * Phone number filter operations. Use 'eq' for exact matches or 'contains' for
     * partial matches.
     */
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

    /**
     * Phone number filter operations. Use 'eq' for exact matches or 'contains' for
     * partial matches.
     */
    export interface PhoneNumber {
      /**
       * The partial phone number to filter by. Requires 3-15 digits.
       */
      contains?: string;

      /**
       * The phone number to filter by
       */
      eq?: string;
    }

    export interface Status {
      /**
       * The status of the release to filter by
       */
      eq?: Array<
        'pending_upload' | 'pending' | 'in_progress' | 'complete' | 'failed' | 'expired' | 'unknown'
      >;
    }
  }
}

export declare namespace Releases {
  export {
    type ReleaseRetrieveResponse as ReleaseRetrieveResponse,
    type ReleaseListResponse as ReleaseListResponse,
    type ReleaseListResponsesDefaultFlatPagination as ReleaseListResponsesDefaultFlatPagination,
    type ReleaseRetrieveParams as ReleaseRetrieveParams,
    type ReleaseListParams as ReleaseListParams,
  };
}
