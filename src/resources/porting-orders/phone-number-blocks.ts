// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhoneNumberBlocks extends APIResource {
  /**
   * Creates a new phone number block.
   *
   * @example
   * ```ts
   * const phoneNumberBlock =
   *   await client.portingOrders.phoneNumberBlocks.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       activation_ranges: [
   *         {
   *           end_at: '+4930244999910',
   *           start_at: '+4930244999901',
   *         },
   *       ],
   *       phone_number_range: {
   *         end_at: '+4930244999910',
   *         start_at: '+4930244999901',
   *       },
   *     },
   *   );
   * ```
   */
  create(
    portingOrderID: string,
    body: PhoneNumberBlockCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberBlockCreateResponse> {
    return this._client.post(path`/porting_orders/${portingOrderID}/phone_number_blocks`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of all phone number blocks of a porting order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const portingPhoneNumberBlock of client.portingOrders.phoneNumberBlocks.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    portingOrderID: string,
    query: PhoneNumberBlockListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortingPhoneNumberBlocksDefaultFlatPagination, PortingPhoneNumberBlock> {
    return this._client.getAPIList(
      path`/porting_orders/${portingOrderID}/phone_number_blocks`,
      DefaultFlatPagination<PortingPhoneNumberBlock>,
      { query, ...options },
    );
  }

  /**
   * Deletes a phone number block.
   *
   * @example
   * ```ts
   * const phoneNumberBlock =
   *   await client.portingOrders.phoneNumberBlocks.delete(
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
    params: PhoneNumberBlockDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberBlockDeleteResponse> {
    const { porting_order_id } = params;
    return this._client.delete(path`/porting_orders/${porting_order_id}/phone_number_blocks/${id}`, options);
  }
}

export type PortingPhoneNumberBlocksDefaultFlatPagination = DefaultFlatPagination<PortingPhoneNumberBlock>;

export interface PortingPhoneNumberBlock {
  /**
   * Uniquely identifies this porting phone number block.
   */
  id?: string;

  /**
   * Specifies the activation ranges for this porting phone number block. The
   * activation range must be within the phone number range and should not overlap
   * with other activation ranges.
   */
  activation_ranges?: Array<PortingPhoneNumberBlock.ActivationRange>;

  /**
   * Specifies the country code for this porting phone number block. It is a
   * two-letter ISO 3166-1 alpha-2 country code.
   */
  country_code?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Specifies the phone number range for this porting phone number block.
   */
  phone_number_range?: PortingPhoneNumberBlock.PhoneNumberRange;

  /**
   * Specifies the phone number type for this porting phone number block.
   */
  phone_number_type?: 'landline' | 'local' | 'mobile' | 'national' | 'shared_cost' | 'toll_free';

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was last updated.
   */
  updated_at?: string;
}

export namespace PortingPhoneNumberBlock {
  export interface ActivationRange {
    /**
     * Specifies the end of the activation range. It must be no more than the end of
     * the phone number range.
     */
    end_at?: string;

    /**
     * Specifies the start of the activation range. Must be greater or equal the start
     * of the phone number range.
     */
    start_at?: string;
  }

  /**
   * Specifies the phone number range for this porting phone number block.
   */
  export interface PhoneNumberRange {
    /**
     * Specifies the end of the phone number range for this porting phone number block.
     */
    end_at?: string;

    /**
     * Specifies the start of the phone number range for this porting phone number
     * block.
     */
    start_at?: string;
  }
}

export interface PhoneNumberBlockCreateResponse {
  data?: PortingPhoneNumberBlock;
}

export interface PhoneNumberBlockDeleteResponse {
  data?: PortingPhoneNumberBlock;
}

export interface PhoneNumberBlockCreateParams {
  /**
   * Specifies the activation ranges for this porting phone number block. The
   * activation range must be within the block range and should not overlap with
   * other activation ranges.
   */
  activation_ranges: Array<PhoneNumberBlockCreateParams.ActivationRange>;

  phone_number_range: PhoneNumberBlockCreateParams.PhoneNumberRange;
}

export namespace PhoneNumberBlockCreateParams {
  export interface ActivationRange {
    /**
     * Specifies the end of the activation range. It must be no more than the end of
     * the extension range.
     */
    end_at: string;

    /**
     * Specifies the start of the activation range. Must be greater or equal the start
     * of the extension range.
     */
    start_at: string;
  }

  export interface PhoneNumberRange {
    /**
     * Specifies the end of the phone number range for this porting phone number block.
     */
    end_at: string;

    /**
     * Specifies the start of the phone number range for this porting phone number
     * block.
     */
    start_at: string;
  }
}

export interface PhoneNumberBlockListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_order_id], filter[support_key], filter[status],
   * filter[phone_number], filter[activation_status], filter[portability_status]
   */
  filter?: PhoneNumberBlockListParams.Filter;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: PhoneNumberBlockListParams.Sort;
}

export namespace PhoneNumberBlockListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[porting_order_id], filter[support_key], filter[status],
   * filter[phone_number], filter[activation_status], filter[portability_status]
   */
  export interface Filter {
    /**
     * Filter results by activation status
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
     * Filter results by a list of phone numbers
     */
    phone_number?: Array<string>;

    /**
     * Filter results by portability status
     */
    portability_status?: 'pending' | 'confirmed' | 'provisional';

    /**
     * Filter results by a list of porting order ids
     */
    porting_order_id?: Array<string>;

    /**
     * Filter porting orders by status(es). Originally: filter[status],
     * filter[status][in][]
     */
    status?:
      | 'draft'
      | 'in-process'
      | 'submitted'
      | 'exception'
      | 'foc-date-confirmed'
      | 'cancel-pending'
      | 'ported'
      | 'cancelled'
      | Array<
          | 'draft'
          | 'in-process'
          | 'submitted'
          | 'exception'
          | 'foc-date-confirmed'
          | 'cancel-pending'
          | 'ported'
          | 'cancelled'
        >;

    /**
     * Filter results by support key(s). Originally: filter[support_key][eq],
     * filter[support_key][in][]
     */
    support_key?: string | Array<string>;
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

export interface PhoneNumberBlockDeleteParams {
  /**
   * Identifies the Porting Order associated with the phone number block
   */
  porting_order_id: string;
}

export declare namespace PhoneNumberBlocks {
  export {
    type PortingPhoneNumberBlock as PortingPhoneNumberBlock,
    type PhoneNumberBlockCreateResponse as PhoneNumberBlockCreateResponse,
    type PhoneNumberBlockDeleteResponse as PhoneNumberBlockDeleteResponse,
    type PortingPhoneNumberBlocksDefaultFlatPagination as PortingPhoneNumberBlocksDefaultFlatPagination,
    type PhoneNumberBlockCreateParams as PhoneNumberBlockCreateParams,
    type PhoneNumberBlockListParams as PhoneNumberBlockListParams,
    type PhoneNumberBlockDeleteParams as PhoneNumberBlockDeleteParams,
  };
}
