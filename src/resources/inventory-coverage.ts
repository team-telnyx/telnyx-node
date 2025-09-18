// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class InventoryCoverage extends APIResource {
  /**
   * Creates an inventory coverage request. If locality, npa or
   * national_destination_code is used in groupBy, and no region or locality filters
   * are used, the whole paginated set is returned.
   */
  list(
    query: InventoryCoverageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InventoryCoverageListResponse> {
    return this._client.get('/inventory_coverage', { query, ...options });
  }
}

export interface InventoryCoverageListResponse {
  data?: Array<InventoryCoverageListResponse.Data>;

  meta?: InventoryCoverageListResponse.Meta;
}

export namespace InventoryCoverageListResponse {
  export interface Data {
    administrative_area?: string;

    /**
     * Indicates if the phone number requires advance requirements.
     */
    advance_requirements?: boolean;

    count?: number;

    coverage_type?: 'number' | 'block';

    group?: string;

    group_type?: string;

    number_range?: number;

    number_type?: 'did' | 'toll-free';

    phone_number_type?: 'local' | 'toll_free' | 'national' | 'landline' | 'shared_cost' | 'mobile';

    record_type?: string;
  }

  export interface Meta {
    total_results?: number;
  }
}

export interface InventoryCoverageListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[npa],
   * filter[nxx], filter[administrative_area], filter[phone_number_type],
   * filter[country_code], filter[count], filter[features], filter[groupBy]
   */
  filter?: InventoryCoverageListParams.Filter;
}

export namespace InventoryCoverageListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[npa],
   * filter[nxx], filter[administrative_area], filter[phone_number_type],
   * filter[country_code], filter[count], filter[features], filter[groupBy]
   */
  export interface Filter {
    /**
     * Filter by administrative area
     */
    administrative_area?: string;

    /**
     * Include count in the result
     */
    count?: boolean;

    /**
     * Filter by country. Defaults to US
     */
    country_code?:
      | 'AT'
      | 'AU'
      | 'BE'
      | 'BG'
      | 'CA'
      | 'CH'
      | 'CN'
      | 'CY'
      | 'CZ'
      | 'DE'
      | 'DK'
      | 'EE'
      | 'ES'
      | 'FI'
      | 'FR'
      | 'GB'
      | 'GR'
      | 'HU'
      | 'HR'
      | 'IE'
      | 'IT'
      | 'LT'
      | 'LU'
      | 'LV'
      | 'NL'
      | 'NZ'
      | 'MX'
      | 'NO'
      | 'PL'
      | 'PT'
      | 'RO'
      | 'SE'
      | 'SG'
      | 'SI'
      | 'SK'
      | 'US';

    /**
     * Filter if the phone number should be used for voice, fax, mms, sms, emergency.
     * Returns features in the response when used.
     */
    features?: Array<'sms' | 'mms' | 'voice' | 'fax' | 'emergency'>;

    /**
     * Filter to group results
     */
    groupBy?: 'locality' | 'npa' | 'national_destination_code';

    /**
     * Filter by npa
     */
    npa?: number;

    /**
     * Filter by nxx
     */
    nxx?: number;

    /**
     * Filter by phone number type
     */
    phone_number_type?: 'local' | 'toll_free' | 'national' | 'mobile' | 'landline' | 'shared_cost';
  }
}

export declare namespace InventoryCoverage {
  export {
    type InventoryCoverageListResponse as InventoryCoverageListResponse,
    type InventoryCoverageListParams as InventoryCoverageListParams,
  };
}
