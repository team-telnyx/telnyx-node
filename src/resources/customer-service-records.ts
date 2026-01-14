// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CustomerServiceRecords extends APIResource {
  /**
   * Create a new customer service record for the provided phone number.
   *
   * @example
   * ```ts
   * const customerServiceRecord =
   *   await client.customerServiceRecords.create({
   *     phone_number: '+13035553000',
   *   });
   * ```
   */
  create(
    body: CustomerServiceRecordCreateParams,
    options?: RequestOptions,
  ): APIPromise<CustomerServiceRecordCreateResponse> {
    return this._client.post('/customer_service_records', { body, ...options });
  }

  /**
   * Get a specific customer service record.
   *
   * @example
   * ```ts
   * const customerServiceRecord =
   *   await client.customerServiceRecords.retrieve(
   *     'customer_service_record_id',
   *   );
   * ```
   */
  retrieve(
    customerServiceRecordID: string,
    options?: RequestOptions,
  ): APIPromise<CustomerServiceRecordRetrieveResponse> {
    return this._client.get(path`/customer_service_records/${customerServiceRecordID}`, options);
  }

  /**
   * List customer service records.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customerServiceRecord of client.customerServiceRecords.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CustomerServiceRecordListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CustomerServiceRecordsDefaultFlatPagination, CustomerServiceRecord> {
    return this._client.getAPIList(
      '/customer_service_records',
      DefaultFlatPagination<CustomerServiceRecord>,
      { query, ...options },
    );
  }

  /**
   * Verify the coverage for a list of phone numbers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.customerServiceRecords.verifyPhoneNumberCoverage(
   *     { phone_numbers: ['+13035553000'] },
   *   );
   * ```
   */
  verifyPhoneNumberCoverage(
    body: CustomerServiceRecordVerifyPhoneNumberCoverageParams,
    options?: RequestOptions,
  ): APIPromise<CustomerServiceRecordVerifyPhoneNumberCoverageResponse> {
    return this._client.post('/customer_service_records/phone_number_coverages', { body, ...options });
  }
}

export type CustomerServiceRecordsDefaultFlatPagination = DefaultFlatPagination<CustomerServiceRecord>;

export interface CustomerServiceRecord {
  /**
   * Uniquely identifies this customer service record
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The error message in case status is `failed`. This field would be null in case
   * of `pending` or `completed` status.
   */
  error_message?: string | null;

  /**
   * The phone number of the customer service record.
   */
  phone_number?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The result of the CSR request. This field would be null in case of `pending` or
   * `failed` status.
   */
  result?: CustomerServiceRecord.Result | null;

  /**
   * The status of the customer service record
   */
  status?: 'pending' | 'completed' | 'failed';

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  updated_at?: string;
}

export namespace CustomerServiceRecord {
  /**
   * The result of the CSR request. This field would be null in case of `pending` or
   * `failed` status.
   */
  export interface Result {
    /**
     * The address of the customer service record
     */
    address?: Result.Address;

    /**
     * The admin of the customer service record.
     */
    admin?: Result.Admin;

    /**
     * The associated phone numbers of the customer service record.
     */
    associated_phone_numbers?: Array<string>;

    /**
     * The name of the carrier that the customer service record is for.
     */
    carrier_name?: string;
  }

  export namespace Result {
    /**
     * The address of the customer service record
     */
    export interface Address {
      /**
       * The state of the address
       */
      administrative_area?: string;

      /**
       * The full address
       */
      full_address?: string;

      /**
       * The city of the address
       */
      locality?: string;

      /**
       * The zip code of the address
       */
      postal_code?: string;

      /**
       * The street address
       */
      street_address?: string;
    }

    /**
     * The admin of the customer service record.
     */
    export interface Admin {
      /**
       * The account number of the customer service record.
       */
      account_number?: string;

      /**
       * The authorized person name of the customer service record.
       */
      authorized_person_name?: string;

      /**
       * The billing phone number of the customer service record.
       */
      billing_phone_number?: string;

      /**
       * The name of the customer service record.
       */
      name?: string;
    }
  }
}

export interface CustomerServiceRecordCreateResponse {
  data?: CustomerServiceRecord;
}

export interface CustomerServiceRecordRetrieveResponse {
  data?: CustomerServiceRecord;
}

export interface CustomerServiceRecordVerifyPhoneNumberCoverageResponse {
  data?: Array<CustomerServiceRecordVerifyPhoneNumberCoverageResponse.Data>;
}

export namespace CustomerServiceRecordVerifyPhoneNumberCoverageResponse {
  export interface Data {
    /**
     * Additional data required to perform CSR for the phone number. Only returned if
     * `has_csr_coverage` is true.
     */
    additional_data_required?: Array<
      | 'name'
      | 'authorized_person_name'
      | 'account_number'
      | 'customer_code'
      | 'pin'
      | 'address_line_1'
      | 'city'
      | 'state'
      | 'zip_code'
      | 'billing_phone_number'
    >;

    /**
     * Indicates whether the phone number is covered or not.
     */
    has_csr_coverage?: boolean;

    /**
     * The phone number that is being verified.
     */
    phone_number?: string;

    /**
     * The reason why the phone number is not covered. Only returned if
     * `has_csr_coverage` is false.
     */
    reason?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface CustomerServiceRecordCreateParams {
  /**
   * A valid US phone number in E164 format.
   */
  phone_number: string;

  additional_data?: CustomerServiceRecordCreateParams.AdditionalData;

  /**
   * Callback URL to receive webhook notifications.
   */
  webhook_url?: string;
}

export namespace CustomerServiceRecordCreateParams {
  export interface AdditionalData {
    /**
     * The account number of the customer service record.
     */
    account_number?: string;

    /**
     * The first line of the address of the customer service record.
     */
    address_line_1?: string;

    /**
     * The name of the authorized person.
     */
    authorized_person_name?: string;

    /**
     * The billing phone number of the customer service record.
     */
    billing_phone_number?: string;

    /**
     * The city of the customer service record.
     */
    city?: string;

    /**
     * The customer code of the customer service record.
     */
    customer_code?: string;

    /**
     * The name of the administrator of CSR.
     */
    name?: string;

    /**
     * The PIN of the customer service record.
     */
    pin?: string;

    /**
     * The state of the customer service record.
     */
    state?: string;

    /**
     * The zip code of the customer service record.
     */
    zip_code?: string;
  }
}

export interface CustomerServiceRecordListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number][eq], filter[phone_number][in][], filter[status][eq],
   * filter[status][in][], filter[created_at][lt], filter[created_at][gt]
   */
  filter?: CustomerServiceRecordListParams.Filter;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: CustomerServiceRecordListParams.Sort;
}

export namespace CustomerServiceRecordListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[phone_number][eq], filter[phone_number][in][], filter[status][eq],
   * filter[status][in][], filter[created_at][lt], filter[created_at][gt]
   */
  export interface Filter {
    created_at?: Filter.CreatedAt;

    phone_number?: Filter.PhoneNumber;

    status?: Filter.Status;
  }

  export namespace Filter {
    export interface CreatedAt {
      /**
       * Filters records to those created after a specific date.
       */
      gt?: string;

      /**
       * Filters records to those created before a specific date.
       */
      lt?: string;
    }

    export interface PhoneNumber {
      /**
       * Filters records to those with a specified number.
       */
      eq?: string;

      /**
       * Filters records to those with at least one number in the list.
       */
      in?: Array<string>;
    }

    export interface Status {
      /**
       * Filters records to those with a specific status.
       */
      eq?: 'pending' | 'completed' | 'failed';

      /**
       * Filters records to those with a least one status in the list.
       */
      in?: Array<'pending' | 'completed' | 'failed'>;
    }
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

export interface CustomerServiceRecordVerifyPhoneNumberCoverageParams {
  /**
   * The phone numbers list to be verified.
   */
  phone_numbers: Array<string>;
}

export declare namespace CustomerServiceRecords {
  export {
    type CustomerServiceRecord as CustomerServiceRecord,
    type CustomerServiceRecordCreateResponse as CustomerServiceRecordCreateResponse,
    type CustomerServiceRecordRetrieveResponse as CustomerServiceRecordRetrieveResponse,
    type CustomerServiceRecordVerifyPhoneNumberCoverageResponse as CustomerServiceRecordVerifyPhoneNumberCoverageResponse,
    type CustomerServiceRecordsDefaultFlatPagination as CustomerServiceRecordsDefaultFlatPagination,
    type CustomerServiceRecordCreateParams as CustomerServiceRecordCreateParams,
    type CustomerServiceRecordListParams as CustomerServiceRecordListParams,
    type CustomerServiceRecordVerifyPhoneNumberCoverageParams as CustomerServiceRecordVerifyPhoneNumberCoverageParams,
  };
}
