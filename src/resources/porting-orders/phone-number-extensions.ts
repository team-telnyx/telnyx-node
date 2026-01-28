// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhoneNumberExtensions extends APIResource {
  /**
   * Creates a new phone number extension.
   *
   * @example
   * ```ts
   * const phoneNumberExtension =
   *   await client.portingOrders.phoneNumberExtensions.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       activation_ranges: [{ end_at: 10, start_at: 1 }],
   *       extension_range: { end_at: 10, start_at: 1 },
   *       porting_phone_number_id:
   *         'f24151b6-3389-41d3-8747-7dd8c681e5e2',
   *     },
   *   );
   * ```
   */
  create(
    portingOrderID: string,
    body: PhoneNumberExtensionCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberExtensionCreateResponse> {
    return this._client.post(path`/porting_orders/${portingOrderID}/phone_number_extensions`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of all phone number extensions of a porting order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const portingPhoneNumberExtension of client.portingOrders.phoneNumberExtensions.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    portingOrderID: string,
    query: PhoneNumberExtensionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortingPhoneNumberExtensionsDefaultFlatPagination, PortingPhoneNumberExtension> {
    return this._client.getAPIList(
      path`/porting_orders/${portingOrderID}/phone_number_extensions`,
      DefaultFlatPagination<PortingPhoneNumberExtension>,
      { query, ...options },
    );
  }

  /**
   * Deletes a phone number extension.
   *
   * @example
   * ```ts
   * const phoneNumberExtension =
   *   await client.portingOrders.phoneNumberExtensions.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       porting_order_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  delete(
    id: string,
    params: PhoneNumberExtensionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberExtensionDeleteResponse> {
    const { porting_order_id } = params;
    return this._client.delete(
      path`/porting_orders/${porting_order_id}/phone_number_extensions/${id}`,
      options,
    );
  }
}

export type PortingPhoneNumberExtensionsDefaultFlatPagination =
  DefaultFlatPagination<PortingPhoneNumberExtension>;

export interface PortingPhoneNumberExtension {
  /**
   * Uniquely identifies this porting phone number extension.
   */
  id?: string;

  /**
   * Specifies the activation ranges for this porting phone number extension. The
   * activation range must be within the extension range and should not overlap with
   * other activation ranges.
   */
  activation_ranges?: Array<PortingPhoneNumberExtension.ActivationRange>;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Specifies the extension range for this porting phone number extension.
   */
  extension_range?: PortingPhoneNumberExtension.ExtensionRange;

  /**
   * Identifies the porting phone number associated with this porting phone number
   * extension.
   */
  porting_phone_number_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was last updated.
   */
  updated_at?: string;
}

export namespace PortingPhoneNumberExtension {
  export interface ActivationRange {
    /**
     * Specifies the end of the activation range. It must be no more than the end of
     * the extension range.
     */
    end_at?: number;

    /**
     * Specifies the start of the activation range. Must be greater or equal the start
     * of the extension range.
     */
    start_at?: number;
  }

  /**
   * Specifies the extension range for this porting phone number extension.
   */
  export interface ExtensionRange {
    /**
     * Specifies the end of the extension range for this porting phone number
     * extension.
     */
    end_at?: number;

    /**
     * Specifies the start of the extension range for this porting phone number
     * extension.
     */
    start_at?: number;
  }
}

export interface PhoneNumberExtensionCreateResponse {
  data?: PortingPhoneNumberExtension;
}

export interface PhoneNumberExtensionDeleteResponse {
  data?: PortingPhoneNumberExtension;
}

export interface PhoneNumberExtensionCreateParams {
  /**
   * Specifies the activation ranges for this porting phone number extension. The
   * activation range must be within the extension range and should not overlap with
   * other activation ranges.
   */
  activation_ranges: Array<PhoneNumberExtensionCreateParams.ActivationRange>;

  extension_range: PhoneNumberExtensionCreateParams.ExtensionRange;

  /**
   * Identifies the porting phone number associated with this porting phone number
   * extension.
   */
  porting_phone_number_id: string;
}

export namespace PhoneNumberExtensionCreateParams {
  export interface ActivationRange {
    /**
     * Specifies the end of the activation range. It must be no more than the end of
     * the extension range.
     */
    end_at: number;

    /**
     * Specifies the start of the activation range. Must be greater or equal the start
     * of the extension range.
     */
    start_at: number;
  }

  export interface ExtensionRange {
    /**
     * Specifies the end of the extension range for this porting phone number
     * extension.
     */
    end_at: number;

    /**
     * Specifies the start of the extension range for this porting phone number
     * extension.
     */
    start_at: number;
  }
}

export interface PhoneNumberExtensionListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_phone_number_id]
   */
  filter?: PhoneNumberExtensionListParams.Filter;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: PhoneNumberExtensionListParams.Sort;
}

export namespace PhoneNumberExtensionListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_phone_number_id]
   */
  export interface Filter {
    /**
     * Filter results by porting phone number id
     */
    porting_phone_number_id?: string;
  }

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  export interface Sort {
    /**
     * Specifies the sort order for results. If not given, results are sorted by
     * created_at in descending order
     */
    value?: '-created_at' | 'created_at';
  }
}

export interface PhoneNumberExtensionDeleteParams {
  /**
   * Identifies the Porting Order associated with the phone number extension
   */
  porting_order_id: string;
}

export declare namespace PhoneNumberExtensions {
  export {
    type PortingPhoneNumberExtension as PortingPhoneNumberExtension,
    type PhoneNumberExtensionCreateResponse as PhoneNumberExtensionCreateResponse,
    type PhoneNumberExtensionDeleteResponse as PhoneNumberExtensionDeleteResponse,
    type PortingPhoneNumberExtensionsDefaultFlatPagination as PortingPhoneNumberExtensionsDefaultFlatPagination,
    type PhoneNumberExtensionCreateParams as PhoneNumberExtensionCreateParams,
    type PhoneNumberExtensionListParams as PhoneNumberExtensionListParams,
    type PhoneNumberExtensionDeleteParams as PhoneNumberExtensionDeleteParams,
  };
}
