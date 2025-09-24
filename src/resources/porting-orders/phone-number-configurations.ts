// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class PhoneNumberConfigurations extends APIResource {
  /**
   * Creates a list of phone number configurations.
   *
   * @example
   * ```ts
   * const phoneNumberConfiguration =
   *   await client.portingOrders.phoneNumberConfigurations.create();
   * ```
   */
  create(
    body: PhoneNumberConfigurationCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberConfigurationCreateResponse> {
    return this._client.post('/porting_orders/phone_number_configurations', { body, ...options });
  }

  /**
   * Returns a list of phone number configurations paginated.
   *
   * @example
   * ```ts
   * const phoneNumberConfigurations =
   *   await client.portingOrders.phoneNumberConfigurations.list();
   * ```
   */
  list(
    query: PhoneNumberConfigurationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberConfigurationListResponse> {
    return this._client.get('/porting_orders/phone_number_configurations', { query, ...options });
  }
}

export interface PhoneNumberConfigurationCreateResponse {
  data?: Array<PhoneNumberConfigurationCreateResponse.Data>;
}

export namespace PhoneNumberConfigurationCreateResponse {
  export interface Data {
    /**
     * Uniquely identifies this phone number configuration
     */
    id?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the associated porting phone number
     */
    porting_phone_number_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;

    /**
     * Identifies the associated user bundle
     */
    user_bundle_id?: string;
  }
}

export interface PhoneNumberConfigurationListResponse {
  data?: Array<PhoneNumberConfigurationListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace PhoneNumberConfigurationListResponse {
  export interface Data {
    /**
     * Uniquely identifies this phone number configuration
     */
    id?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the associated porting phone number
     */
    porting_phone_number_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;

    /**
     * Identifies the associated user bundle
     */
    user_bundle_id?: string;
  }
}

export interface PhoneNumberConfigurationCreateParams {
  phone_number_configurations?: Array<PhoneNumberConfigurationCreateParams.PhoneNumberConfiguration>;
}

export namespace PhoneNumberConfigurationCreateParams {
  export interface PhoneNumberConfiguration {
    /**
     * Identifies the porting phone number to be configured.
     */
    porting_phone_number_id: string;

    /**
     * Identifies the user bundle to be associated with the porting phone number.
     */
    user_bundle_id: string;
  }
}

export interface PhoneNumberConfigurationListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_order.status][in][], filter[porting_phone_number][in][],
   * filter[user_bundle_id][in][]
   */
  filter?: PhoneNumberConfigurationListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: PhoneNumberConfigurationListParams.Page;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: PhoneNumberConfigurationListParams.Sort;
}

export namespace PhoneNumberConfigurationListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_order.status][in][], filter[porting_phone_number][in][],
   * filter[user_bundle_id][in][]
   */
  export interface Filter {
    porting_order?: Filter.PortingOrder;

    /**
     * Filter results by a list of porting phone number IDs
     */
    porting_phone_number?: Array<string>;

    /**
     * Filter results by a list of user bundle IDs
     */
    user_bundle_id?: Array<string>;
  }

  export namespace Filter {
    export interface PortingOrder {
      /**
       * Filter results by specific porting order statuses
       */
      status?: Array<
        | 'activation-in-progress'
        | 'cancel-pending'
        | 'cancelled'
        | 'draft'
        | 'exception'
        | 'foc-date-confirmed'
        | 'in-process'
        | 'ported'
        | 'submitted'
      >;
    }
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

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  export interface Sort {
    /**
     * Specifies the sort order for results. If not given, results are sorted by
     * created_at in descending order.
     */
    value?: 'created_at' | '-created_at';
  }
}

export declare namespace PhoneNumberConfigurations {
  export {
    type PhoneNumberConfigurationCreateResponse as PhoneNumberConfigurationCreateResponse,
    type PhoneNumberConfigurationListResponse as PhoneNumberConfigurationListResponse,
    type PhoneNumberConfigurationCreateParams as PhoneNumberConfigurationCreateParams,
    type PhoneNumberConfigurationListParams as PhoneNumberConfigurationListParams,
  };
}
