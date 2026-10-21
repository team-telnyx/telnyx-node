// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as JobsAPI from '../phone-number-blocks/jobs';
import * as PhoneNumbersAPI from './phone-numbers';
import * as VoiceAPI from './voice';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Background jobs performed over a batch of phone numbers
 */
export class Jobs extends APIResource {
  /**
   * Returns background jobs that operate on phone numbers. Filter by job type,
   * target phone numbers, job status, or creation-time customer reference, and sort
   * by creation time. Multiple phone-number or status values use OR semantics within
   * that filter; different filter categories use AND semantics. Results include
   * pagination metadata.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const numbersPhoneNumbersJob of client.phoneNumbers.jobs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: JobListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NumbersPhoneNumbersJobsDefaultFlatPagination, NumbersPhoneNumbersJob> {
    return this._client.getAPIList('/phone_numbers/jobs', DefaultFlatPagination<NumbersPhoneNumbersJob>, {
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
   * Returns the status and details of the phone-number background job identified by
   * `id`.
   *
   * @example
   * ```ts
   * const job = await client.phoneNumbers.jobs.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<JobRetrieveResponse> {
    return this._client.get(path`/phone_numbers/jobs/${id}`, options);
  }
}

export type NumbersPhoneNumbersJobsDefaultFlatPagination = DefaultFlatPagination<NumbersPhoneNumbersJob>;

export interface NumbersPhoneNumbersJob {
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

  failed_operations?: Array<NumbersPhoneNumbersJob.FailedOperation>;

  /**
   * Effective parameters saved when the job was created, not a snapshot of the
   * original HTTP request or current phone-number settings. Update jobs include the
   * saved update fields; emergency-settings jobs include the saved emergency fields;
   * delete jobs include only targets. Absent fields are omitted, and saved false,
   * null and empty values are preserved. Tags may be normalized to arrays;
   * filter-created jobs contain resolved target identifiers rather than the original
   * filters. Historical jobs with no saved arguments return an empty object.
   */
  parameters?: NumbersPhoneNumbersJob.Parameters;

  pending_operations?: Array<NumbersPhoneNumbersJob.PendingOperation>;

  phone_numbers?: Array<Shared.PhoneNumbersJobPhoneNumber>;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Indicates the completion status of the background update.
   */
  status?: 'pending' | 'in_progress' | 'completed' | 'failed' | 'expired';

  successful_operations?: Array<NumbersPhoneNumbersJob.SuccessfulOperation>;

  /**
   * Identifies the type of the background job.
   */
  type?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace NumbersPhoneNumbersJob {
  export interface FailedOperation {
    /**
     * The phone number's ID
     */
    id?: string;

    errors?: Array<PhoneNumbersAPI.NumbersError73c9788e53>;

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }

  /**
   * Effective parameters saved when the job was created, not a snapshot of the
   * original HTTP request or current phone-number settings. Update jobs include the
   * saved update fields; emergency-settings jobs include the saved emergency fields;
   * delete jobs include only targets. Absent fields are omitted, and saved false,
   * null and empty values are preserved. Tags may be normalized to arrays;
   * filter-created jobs contain resolved target identifiers rather than the original
   * filters. Historical jobs with no saved arguments return an empty object.
   */
  export interface Parameters {
    /**
     * Saved add_tags for an update_phone_numbers job. Values reflect creation-time
     * normalization.
     */
    add_tags?: Array<string> | null;

    /**
     * Saved billing_group_id supplied for an update_phone_numbers job.
     */
    billing_group_id?: string | null;

    /**
     * Saved connection_id supplied for an update_phone_numbers job.
     */
    connection_id?: string | null;

    /**
     * Saved customer_reference supplied for an update_phone_numbers job.
     */
    customer_reference?: string | null;

    /**
     * Saved deletion_lock_enabled supplied for an update_phone_numbers job.
     */
    deletion_lock_enabled?: boolean | null;

    /**
     * Saved emergency address identifier for an update_emergency_settings job. An
     * explicitly supplied null is preserved.
     */
    emergency_address_id?: string | null;

    /**
     * Saved emergency-services setting for an update_emergency_settings job.
     */
    emergency_enabled?: boolean | null;

    /**
     * Saved external_pin supplied for an update_phone_numbers job.
     */
    external_pin?: string | null;

    /**
     * Saved hd_voice_enabled supplied for an update_phone_numbers job.
     */
    hd_voice_enabled?: boolean | null;

    /**
     * Saved target phone numbers in E.164 format and/or identifiers. Jobs created
     * using filters contain the resolved identifiers, not the original filter
     * expression. Stored identifier types are preserved.
     */
    phone_numbers?: Array<string | number>;

    /**
     * Saved remove_tags for an update_phone_numbers job. Values reflect creation-time
     * normalization.
     */
    remove_tags?: Array<string> | null;

    /**
     * Saved tags for an update_phone_numbers job. Values reflect creation-time
     * normalization.
     */
    tags?: Array<string> | null;

    /**
     * Saved voice settings for an update_phone_numbers job, using the public field
     * names and nesting. Only settings present at creation are returned.
     */
    voice?: Parameters.Voice;
  }

  export namespace Parameters {
    /**
     * Saved voice settings for an update_phone_numbers job, using the public field
     * names and nesting. Only settings present at creation are returned.
     */
    export interface Voice {
      call_forwarding?: Voice.CallForwarding;

      call_recording?: Voice.CallRecording;

      /**
       * Saved caller_id_name_enabled setting.
       */
      caller_id_name_enabled?: boolean | null;

      cnam_listing?: Voice.CnamListing;

      /**
       * Saved inbound_call_screening setting.
       */
      inbound_call_screening?: string | null;

      media_features?: Voice.MediaFeatures;

      /**
       * Saved tech_prefix_enabled setting.
       */
      tech_prefix_enabled?: boolean | null;

      /**
       * Saved usage_payment_method setting.
       */
      usage_payment_method?: string | null;
    }

    export namespace Voice {
      export interface CallForwarding {
        /**
         * Saved call_forwarding_enabled setting.
         */
        call_forwarding_enabled?: boolean | null;

        /**
         * Saved forwarding_type setting.
         */
        forwarding_type?: string | null;

        /**
         * Saved forwards_to setting.
         */
        forwards_to?: string | null;
      }

      export interface CallRecording {
        /**
         * Saved inbound_call_recording_channels setting.
         */
        inbound_call_recording_channels?: string | null;

        /**
         * Saved inbound_call_recording_enabled setting.
         */
        inbound_call_recording_enabled?: boolean | null;

        /**
         * Saved inbound_call_recording_format setting.
         */
        inbound_call_recording_format?: string | null;

        /**
         * Saved record_continue_on_hold setting.
         */
        record_continue_on_hold?: boolean | null;
      }

      export interface CnamListing {
        /**
         * Saved cnam_listing_details setting.
         */
        cnam_listing_details?: string | null;

        /**
         * Saved cnam_listing_enabled setting.
         */
        cnam_listing_enabled?: boolean | null;
      }

      export interface MediaFeatures {
        /**
         * Saved accept_any_rtp_packets_enabled setting.
         */
        accept_any_rtp_packets_enabled?: boolean | null;

        /**
         * Saved rtp_auto_adjust_enabled setting.
         */
        rtp_auto_adjust_enabled?: boolean | null;

        /**
         * Saved t38_fax_gateway_enabled setting.
         */
        t38_fax_gateway_enabled?: boolean | null;
      }
    }
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

  phone_numbers?: Array<Shared.PhoneNumbersJobPhoneNumber>;

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
  data?: NumbersPhoneNumbersJob;
}

export interface JobDeleteBatchResponse {
  data?: NumbersPhoneNumbersJob;
}

export interface JobUpdateBatchResponse {
  data?: NumbersPhoneNumbersJob;
}

export interface JobUpdateEmergencySettingsBatchResponse {
  data?: NumbersPhoneNumbersJob;
}

export interface JobListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[phone_number], filter[phone_number][], filter[status][],
   * filter[customer_reference]
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
   * Consolidated filter parameter (deepObject style). Originally: filter[type],
   * filter[phone_number], filter[phone_number][], filter[status][],
   * filter[customer_reference]
   */
  export interface Filter {
    /**
     * Exact, case-sensitive match for the customer reference supplied when the job was
     * created. Only jobs created within the last 90 days are returned, including for
     * accounts otherwise exempt from job retention limits. Searches the stored job
     * reference, not the current reference on a phone number. Multiple jobs may share
     * a reference. Combines with the other filters and account ownership. Supply a
     * single non-blank string of up to 250 characters, without null characters, using
     * `filter[customer_reference]=yourcustomerrefhere`. Whitespace is preserved; blank
     * strings, arrays, and objects return HTTP 422. An invalid filter value returns
     * HTTP 422. The literal string `null` is matched as text.
     */
    customer_reference?: string;

    /**
     * Returns jobs that targeted any of the supplied account-owned phone numbers.
     * Values beginning with `+` must contain 1 to 20 digits after the plus sign. The
     * 10-value limit is enforced before duplicate values are removed. Unmatched or
     * non-account-owned identifiers return an empty result. Phone-number filtering
     * must be enabled for the account.
     */
    phone_number?: string | Array<string>;

    /**
     * Returns jobs with any of the supplied statuses. Use repeated `filter[status][]`
     * parameters; scalar and comma-separated status values are not accepted.
     */
    status?: Array<'pending' | 'in_progress' | 'completed' | 'failed' | 'expired'>;

    /**
     * Identifies the type of the background job.
     */
    type?: 'update_emergency_settings' | 'delete_phone_numbers' | 'update_phone_numbers';
  }
}

export interface JobDeleteBatchParams {
  phone_numbers: Array<string>;
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
   * Body param: Sets the customer reference on the selected phone numbers and
   * retains the supplied value on the job. Recover the job without its ID using GET
   * /phone_numbers/jobs with filter[customer_reference] within 90 days of job
   * creation. This body field updates the numbers; the separate
   * filter[customer_reference] query parameter selects numbers by their current
   * reference.
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

export declare namespace Jobs {
  export {
    type NumbersPhoneNumbersJob as NumbersPhoneNumbersJob,
    type PhoneNumbersJob as PhoneNumbersJob,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobDeleteBatchResponse as JobDeleteBatchResponse,
    type JobUpdateBatchResponse as JobUpdateBatchResponse,
    type JobUpdateEmergencySettingsBatchResponse as JobUpdateEmergencySettingsBatchResponse,
    type NumbersPhoneNumbersJobsDefaultFlatPagination as NumbersPhoneNumbersJobsDefaultFlatPagination,
    type JobListParams as JobListParams,
    type JobDeleteBatchParams as JobDeleteBatchParams,
    type JobUpdateEmergencySettingsBatchParams as JobUpdateEmergencySettingsBatchParams,
    type JobUpdateBatchParams as JobUpdateBatchParams,
  };
}
