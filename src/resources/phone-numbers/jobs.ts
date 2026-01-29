// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as JobsAPI from '../phone-number-blocks/jobs';
import * as VoiceAPI from './voice';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Jobs extends APIResource {
  /**
   * Retrieve a phone numbers job
   *
   * @example
   * ```ts
   * const job = await client.phoneNumbers.jobs.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<JobRetrieveResponse> {
    return this._client.get(path`/phone_numbers/jobs/${id}`, options);
  }

  /**
   * Lists the phone numbers jobs
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumbersJob of client.phoneNumbers.jobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumbersJobsDefaultFlatPagination, PhoneNumbersJob> {
    return this._client.getAPIList('/phone_numbers/jobs', DefaultFlatPagination<PhoneNumbersJob>, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new background job to delete a batch of numbers. At most one thousand
   * numbers can be updated per API call.
   *
   * @example
   * ```ts
   * const response = await client.phoneNumbers.jobs.deleteBatch(
   *   {
   *     phone_numbers: [
   *       '+19705555098',
   *       '+19715555098',
   *       '32873127836',
   *     ],
   *   },
   * );
   * ```
   */
  deleteBatch(body: JobDeleteBatchParams, options?: RequestOptions): APIPromise<JobDeleteBatchResponse> {
    return this._client.post('/phone_numbers/jobs/delete_phone_numbers', { body, ...options });
  }

  /**
   * Creates a new background job to update a batch of numbers. At most one thousand
   * numbers can be updated per API call. At least one of the updateable fields must
   * be submitted. IMPORTANT: You must either specify filters (using the filter
   * parameters) or specific phone numbers (using the phone_numbers parameter in the
   * request body). If you specify filters, ALL phone numbers that match the given
   * filters (up to 1000 at a time) will be updated. If you want to update only
   * specific numbers, you must use the phone_numbers parameter in the request body.
   * When using the phone_numbers parameter, ensure you follow the correct format as
   * shown in the example (either phone number IDs or phone numbers in E164 format).
   *
   * @example
   * ```ts
   * const response = await client.phoneNumbers.jobs.updateBatch(
   *   {
   *     phone_numbers: ['1583466971586889004', '+13127367254'],
   *   },
   * );
   * ```
   */
  updateBatch(params: JobUpdateBatchParams, options?: RequestOptions): APIPromise<JobUpdateBatchResponse> {
    const { filter, ...body } = params;
    return this._client.post('/phone_numbers/jobs/update_phone_numbers', {
      query: { filter },
      body,
      ...options,
    });
  }

  /**
   * Creates a background job to update the emergency settings of a collection of
   * phone numbers. At most one thousand numbers can be updated per API call.
   *
   * @example
   * ```ts
   * const response =
   *   await client.phoneNumbers.jobs.updateEmergencySettingsBatch(
   *     {
   *       emergency_enabled: true,
   *       phone_numbers: [
   *         '+19705555098',
   *         '+19715555098',
   *         '32873127836',
   *       ],
   *     },
   *   );
   * ```
   */
  updateEmergencySettingsBatch(
    body: JobUpdateEmergencySettingsBatchParams,
    options?: RequestOptions,
  ): APIPromise<JobUpdateEmergencySettingsBatchResponse> {
    return this._client.post('/phone_numbers/jobs/update_emergency_settings', { body, ...options });
  }
}

export type PhoneNumbersJobsDefaultFlatPagination = DefaultFlatPagination<PhoneNumbersJob>;

export interface PhoneNumbersJob {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * ISO 8601 formatted date indicating when the estimated time of completion of the
   * background job.
   */
  etc?: string;

  failed_operations?: Array<PhoneNumbersJob.FailedOperation>;

  pending_operations?: Array<PhoneNumbersJob.PendingOperation>;

  phone_numbers?: Array<PhoneNumbersJob.PhoneNumber>;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Indicates the completion status of the background update.
   */
  status?: 'pending' | 'in_progress' | 'completed' | 'failed' | 'expired';

  successful_operations?: Array<PhoneNumbersJob.SuccessfulOperation>;

  /**
   * Identifies the type of the background job.
   */
  type?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace PhoneNumbersJob {
  export interface FailedOperation {
    /**
     * The phone number's ID
     */
    id?: string;

    errors?: Array<JobsAPI.JobError>;

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }

  /**
   * The phone numbers pending confirmation on update results. Entries in this list
   * are transient, and will be moved to either successful_operations or
   * failed_operations once the processing is done.
   */
  export interface PendingOperation {
    /**
     * The phone number's ID
     */
    id?: string;

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }

  /**
   * The unique phone numbers given as arguments in the job creation.
   */
  export interface PhoneNumber {
    /**
     * The phone number's ID
     */
    id?: string;

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }

  /**
   * The phone numbers successfully updated.
   */
  export interface SuccessfulOperation {
    /**
     * The phone number's ID
     */
    id?: string;

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }
}

export interface JobRetrieveResponse {
  data?: PhoneNumbersJob;
}

export interface JobDeleteBatchResponse {
  data?: PhoneNumbersJob;
}

export interface JobUpdateBatchResponse {
  data?: PhoneNumbersJob;
}

export interface JobUpdateEmergencySettingsBatchResponse {
  data?: PhoneNumbersJob;
}

export interface JobListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type]
   */
  filter?: JobListParams.Filter;

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * created_at in descending order.
   */
  sort?: 'created_at';
}

export namespace JobListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type]
   */
  export interface Filter {
    /**
     * Identifies the type of the background job.
     */
    type?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers';
  }
}

export interface JobDeleteBatchParams {
  phone_numbers: Array<string>;
}

export interface JobUpdateBatchParams {
  /**
   * Body param: Array of phone number ids and/or phone numbers in E164 format to
   * update. This parameter is required if no filter parameters are provided. If you
   * want to update specific numbers rather than all numbers matching a filter, you
   * must use this parameter. Each item must be either a valid phone number ID or a
   * phone number in E164 format (e.g., '+13127367254').
   */
  phone_numbers: Array<string>;

  /**
   * Query param: Consolidated filter parameter (deepObject style). Originally:
   * filter[has_bundle], filter[tag], filter[connection_id], filter[phone_number],
   * filter[status], filter[voice.connection_name],
   * filter[voice.usage_payment_method], filter[billing_group_id],
   * filter[emergency_address_id], filter[customer_reference]
   */
  filter?: JobUpdateBatchParams.Filter;

  /**
   * Body param: Identifies the billing group associated with the phone number.
   */
  billing_group_id?: string;

  /**
   * Body param: Identifies the connection associated with the phone number.
   */
  connection_id?: string;

  /**
   * Body param: A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * Body param: Indicates whether to enable or disable the deletion lock on each
   * phone number. When enabled, this prevents the phone number from being deleted
   * via the API or Telnyx portal.
   */
  deletion_lock_enabled?: boolean;

  /**
   * Body param: If someone attempts to port your phone number away from Telnyx and
   * your phone number has an external PIN set, we will attempt to verify that you
   * provided the correct external PIN to the winning carrier. Note that not all
   * carriers cooperate with this security mechanism.
   */
  external_pin?: string;

  /**
   * Body param: Indicates whether to enable or disable HD Voice on each phone
   * number. HD Voice is a paid feature and may not be available for all phone
   * numbers, more details about it can be found in the Telnyx support documentation.
   */
  hd_voice_enabled?: boolean;

  /**
   * Body param: A list of user-assigned tags to help organize phone numbers.
   */
  tags?: Array<string>;

  /**
   * Body param
   */
  voice?: VoiceAPI.UpdateVoiceSettings;
}

export namespace JobUpdateBatchParams {
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

export interface JobUpdateEmergencySettingsBatchParams {
  /**
   * Indicates whether to enable or disable emergency services on the numbers.
   */
  emergency_enabled: boolean;

  phone_numbers: Array<string>;

  /**
   * Identifies the address to be used with emergency services. Required if
   * emergency_enabled is true, must be null or omitted if emergency_enabled is
   * false.
   */
  emergency_address_id?: string | null;
}

export declare namespace Jobs {
  export {
    type PhoneNumbersJob as PhoneNumbersJob,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobDeleteBatchResponse as JobDeleteBatchResponse,
    type JobUpdateBatchResponse as JobUpdateBatchResponse,
    type JobUpdateEmergencySettingsBatchResponse as JobUpdateEmergencySettingsBatchResponse,
    type PhoneNumbersJobsDefaultFlatPagination as PhoneNumbersJobsDefaultFlatPagination,
    type JobListParams as JobListParams,
    type JobDeleteBatchParams as JobDeleteBatchParams,
    type JobUpdateBatchParams as JobUpdateBatchParams,
    type JobUpdateEmergencySettingsBatchParams as JobUpdateEmergencySettingsBatchParams,
  };
}
