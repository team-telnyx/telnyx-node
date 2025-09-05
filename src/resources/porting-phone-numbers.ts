// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PortingPhoneNumbers extends APIResource {
  /**
   * Returns a list of your porting phone numbers.
   */
  list(
    query: PortingPhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortingPhoneNumberListResponse> {
    return this._client.get('/porting_phone_numbers', { query, ...options });
  }
}

export interface PortingPhoneNumberListResponse {
  data?: Array<PortingPhoneNumberListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace PortingPhoneNumberListResponse {
  export interface Data {
    /**
     * Activation status
     */
    activation_status?:
      | 'New'
      | 'Pending'
      | 'Conflict'
      | 'Cancel Pending'
      | 'Failed'
      | 'Concurred'
      | 'Activate RDY'
      | 'Disconnect Pending'
      | 'Concurrence Sent'
      | 'Old'
      | 'Sending'
      | 'Active'
      | 'Cancelled';

    /**
     * E164 formatted phone number
     */
    phone_number?: string;

    /**
     * The type of the phone number
     */
    phone_number_type?: 'landline' | 'local' | 'mobile' | 'national' | 'shared_cost' | 'toll_free';

    /**
     * Specifies whether Telnyx is able to confirm portability this number in the
     * United States & Canada. International phone numbers are provisional by default.
     */
    portability_status?: 'pending' | 'confirmed' | 'provisional';

    /**
     * Identifies the associated port request
     */
    porting_order_id?: string;

    /**
     * The current status of the porting order
     */
    porting_order_status?:
      | 'draft'
      | 'in-process'
      | 'submitted'
      | 'exception'
      | 'foc-date-confirmed'
      | 'cancel-pending'
      | 'ported'
      | 'cancelled';

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The current status of the requirements in a INTL porting order
     */
    requirements_status?:
      | 'requirement-info-pending'
      | 'requirement-info-under-review'
      | 'requirement-info-exception'
      | 'approved';

    /**
     * A key to reference this porting order when contacting Telnyx customer support
     */
    support_key?: string;
  }
}

export interface PortingPhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_order_status]
   */
  filter?: PortingPhoneNumberListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: PortingPhoneNumberListParams.Page;
}

export namespace PortingPhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_order_status]
   */
  export interface Filter {
    /**
     * Filter results by porting order status
     */
    porting_order_status?:
      | 'draft'
      | 'in-process'
      | 'submitted'
      | 'exception'
      | 'foc-date-confirmed'
      | 'cancel-pending'
      | 'ported'
      | 'cancelled';
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace PortingPhoneNumbers {
  export {
    type PortingPhoneNumberListResponse as PortingPhoneNumberListResponse,
    type PortingPhoneNumberListParams as PortingPhoneNumberListParams,
  };
}
