// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionChangeBundleStatusParams,
  ActionChangeBundleStatusResponse,
  ActionEnableEmergencyParams,
  ActionEnableEmergencyResponse,
  ActionVerifyOwnershipParams,
  ActionVerifyOwnershipResponse,
  Actions,
  PhoneNumberWithVoiceSettings,
} from './actions';
import * as CsvDownloadsAPI from './csv-downloads';
import {
  CsvDownload,
  CsvDownloadCreateParams,
  CsvDownloadCreateResponse,
  CsvDownloadListParams,
  CsvDownloadRetrieveResponse,
  CsvDownloads,
  CsvDownloadsDefaultFlatPagination,
} from './csv-downloads';
import * as JobsAPI from './jobs';
import {
  JobDeleteBatchParams,
  JobDeleteBatchResponse,
  JobListParams,
  JobRetrieveResponse,
  JobUpdateBatchParams,
  JobUpdateBatchResponse,
  JobUpdateEmergencySettingsBatchParams,
  JobUpdateEmergencySettingsBatchResponse,
  Jobs,
  PhoneNumbersJob,
  PhoneNumbersJobsDefaultFlatPagination,
} from './jobs';
import * as MessagingAPI from './messaging';
import {
  Messaging,
  MessagingListParams,
  MessagingRetrieveResponse,
  MessagingUpdateParams,
  MessagingUpdateResponse,
} from './messaging';
import * as VoiceAPI from './voice';
import {
  CallForwarding,
  CallRecording,
  CnamListing,
  MediaFeatures,
  UpdateVoiceSettings,
  Voice,
  VoiceListParams,
  VoiceRetrieveResponse,
  VoiceUpdateParams,
  VoiceUpdateResponse,
} from './voice';
import * as VoicemailAPI from './voicemail';
import {
  Voicemail,
  VoicemailCreateParams,
  VoicemailCreateResponse,
  VoicemailPrefResponse,
  VoicemailRequest,
  VoicemailRetrieveResponse,
  VoicemailUpdateParams,
  VoicemailUpdateResponse,
} from './voicemail';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhoneNumbers extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  csvDownloads: CsvDownloadsAPI.CsvDownloads = new CsvDownloadsAPI.CsvDownloads(this._client);
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
  messaging: MessagingAPI.Messaging = new MessagingAPI.Messaging(this._client);
  voice: VoiceAPI.Voice = new VoiceAPI.Voice(this._client);
  voicemail: VoicemailAPI.Voicemail = new VoicemailAPI.Voicemail(this._client);

  /**
   * Retrieve a phone number
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.retrieve(
   *   '1293384261075731499',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PhoneNumberRetrieveResponse> {
    return this._client.get(path`/phone_numbers/${id}`, options);
  }

  /**
   * Update a phone number
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.update(
   *   '1293384261075731499',
   * );
   * ```
   */
  update(
    phoneNumberID: string,
    body: PhoneNumberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberUpdateResponse> {
    return this._client.patch(path`/phone_numbers/${phoneNumberID}`, { body, ...options });
  }

  /**
   * List phone numbers
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberDetailed of client.phoneNumbers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumberDetailedsDefaultFlatPagination, PhoneNumberDetailed> {
    return this._client.getAPIList('/phone_numbers', DefaultFlatPagination<PhoneNumberDetailed>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a phone number
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.delete(
   *   '1293384261075731499',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<PhoneNumberDeleteResponse> {
    return this._client.delete(path`/phone_numbers/${id}`, options);
  }

  /**
   * List phone numbers, This endpoint is a lighter version of the /phone_numbers
   * endpoint having higher performance and rate limit.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberSlimListResponse of client.phoneNumbers.slimList()) {
   *   // ...
   * }
   * ```
   */
  slimList(
    query: PhoneNumberSlimListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumberSlimListResponsesDefaultFlatPagination, PhoneNumberSlimListResponse> {
    return this._client.getAPIList(
      '/phone_numbers/slim',
      DefaultFlatPagination<PhoneNumberSlimListResponse>,
      { query, ...options },
    );
  }
}

export type PhoneNumberDetailedsDefaultFlatPagination = DefaultFlatPagination<PhoneNumberDetailed>;

export type PhoneNumberSlimListResponsesDefaultFlatPagination =
  DefaultFlatPagination<PhoneNumberSlimListResponse>;

export interface PhoneNumberDetailed {
  /**
   * Identifies the resource.
   */
  id: string;

  /**
   * The ISO 3166-1 alpha-2 country code of the phone number.
   */
  country_iso_alpha2: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at: string;

  /**
   * Indicates whether deletion lock is enabled for this number. When enabled, this
   * prevents the phone number from being deleted via the API or Telnyx portal.
   */
  deletion_lock_enabled: boolean;

  /**
   * If someone attempts to port your phone number away from Telnyx and your phone
   * number has an external PIN set, Telnyx will attempt to verify that you provided
   * the correct external PIN to the winning carrier. Note that not all carriers
   * cooperate with this security mechanism.
   */
  external_pin: string | null;

  /**
   * The +E.164-formatted phone number associated with this record.
   */
  phone_number: string;

  /**
   * The phone number's type. Note: For numbers purchased prior to July 2023 or when
   * fetching a number's details immediately after a purchase completes, the legacy
   * values `tollfree`, `shortcode` or `longcode` may be returned instead.
   */
  phone_number_type:
    | 'local'
    | 'toll_free'
    | 'mobile'
    | 'national'
    | 'shared_cost'
    | 'landline'
    | 'tollfree'
    | 'shortcode'
    | 'longcode';

  /**
   * ISO 8601 formatted date indicating when the resource was purchased.
   */
  purchased_at: string;

  /**
   * Identifies the type of the resource.
   */
  record_type: string;

  /**
   * The phone number's current status.
   */
  status:
    | 'purchase-pending'
    | 'purchase-failed'
    | 'port-pending'
    | 'port-failed'
    | 'active'
    | 'deleted'
    | 'emergency-only'
    | 'ported-out'
    | 'port-out-pending'
    | 'requirement-info-pending'
    | 'requirement-info-under-review'
    | 'requirement-info-exception'
    | 'provision-pending';

  /**
   * A list of user-assigned tags to help manage the phone number.
   */
  tags: Array<string>;

  /**
   * Identifies the billing group associated with the phone number.
   */
  billing_group_id?: string | null;

  /**
   * Indicates if call forwarding will be enabled for this number if forwards_to and
   * forwarding_type are filled in. Defaults to true for backwards compatibility with
   * APIV1 use of numbers endpoints.
   */
  call_forwarding_enabled?: boolean;

  /**
   * Indicates whether call recording is enabled for this number.
   */
  call_recording_enabled?: boolean;

  /**
   * Indicates whether caller ID is enabled for this number.
   */
  caller_id_name_enabled?: boolean;

  /**
   * Indicates whether a CNAM listing is enabled for this number.
   */
  cnam_listing_enabled?: boolean;

  /**
   * Identifies the connection associated with the phone number.
   */
  connection_id?: string | null;

  /**
   * The user-assigned name of the connection to be associated with this phone
   * number.
   */
  connection_name?: string | null;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string | null;

  /**
   * Identifies the emergency address associated with the phone number.
   */
  emergency_address_id?: string | null;

  /**
   * Indicates whether emergency services are enabled for this number.
   */
  emergency_enabled?: boolean;

  /**
   * Indicates the status of the provisioning of emergency services for the phone
   * number. This field contains information about activity that may be ongoing for a
   * number where it either is being provisioned or deprovisioned but is not yet
   * enabled/disabled.
   */
  emergency_status?: 'active' | 'deprovisioning' | 'disabled' | 'provisioning' | 'provisioning-failed';

  /**
   * The inbound_call_screening setting is a phone number configuration option
   * variable that allows users to configure their settings to block or flag
   * fraudulent calls. It can be set to disabled, reject_calls, or flag_calls. This
   * feature has an additional per-number monthly cost associated with it.
   */
  inbound_call_screening?: 'disabled' | 'reject_calls' | 'flag_calls';

  /**
   * Identifies the messaging profile associated with the phone number.
   */
  messaging_profile_id?: string | null;

  /**
   * The name of the messaging profile associated with the phone number.
   */
  messaging_profile_name?: string | null;

  /**
   * Indicates if the phone number was purchased or ported in. For some numbers this
   * information may not be available.
   */
  source_type?: 'number_order' | 'port_request' | null;

  /**
   * Indicates whether T38 Fax Gateway for inbound calls to this number.
   */
  t38_fax_gateway_enabled?: boolean;
}

export interface PhoneNumberRetrieveResponse {
  data?: PhoneNumberDetailed;
}

export interface PhoneNumberUpdateResponse {
  data?: PhoneNumberDetailed;
}

export interface PhoneNumberDeleteResponse {
  data?: PhoneNumberDeleteResponse.Data;
}

export namespace PhoneNumberDeleteResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * Identifies the billing group associated with the phone number.
     */
    billing_group_id?: string;

    /**
     * Indicates if call forwarding will be enabled for this number if forwards_to and
     * forwarding_type are filled in. Defaults to true for backwards compatibility with
     * APIV1 use of numbers endpoints.
     */
    call_forwarding_enabled?: boolean;

    /**
     * Indicates whether call recording is enabled for this number.
     */
    call_recording_enabled?: boolean;

    /**
     * Indicates whether caller ID is enabled for this number.
     */
    caller_id_name_enabled?: boolean;

    /**
     * Indicates whether a CNAM listing is enabled for this number.
     */
    cnam_listing_enabled?: boolean;

    /**
     * Identifies the connection associated with the phone number.
     */
    connection_id?: string;

    /**
     * The user-assigned name of the connection to be associated with this phone
     * number.
     */
    connection_name?: string;

    /**
     * ISO 8601 formatted date indicating when the time it took to activate after the
     * purchase.
     */
    created_at?: string;

    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;

    /**
     * Indicates whether deletion lock is enabled for this number. When enabled, this
     * prevents the phone number from being deleted via the API or Telnyx portal.
     */
    deletion_lock_enabled?: boolean;

    /**
     * Identifies the emergency address associated with the phone number.
     */
    emergency_address_id?: string;

    /**
     * Indicates whether emergency services are enabled for this number.
     */
    emergency_enabled?: boolean;

    /**
     * If someone attempts to port your phone number away from Telnyx and your phone
     * number has an external PIN set, Telnyx will attempt to verify that you provided
     * the correct external PIN to the winning carrier. Note that not all carriers
     * cooperate with this security mechanism.
     */
    external_pin?: string;

    /**
     * Identifies the messaging profile associated with the phone number.
     */
    messaging_profile_id?: string;

    /**
     * The name of the messaging profile associated with the phone number.
     */
    messaging_profile_name?: string;

    /**
     * The +E.164-formatted phone number associated with this record.
     */
    phone_number?: string;

    /**
     * The phone number's type.
     */
    phone_number_type?: 'local' | 'toll_free' | 'mobile' | 'national' | 'shared_cost' | 'landline';

    /**
     * ISO 8601 formatted date indicating the time the request was made to purchase the
     * number.
     */
    purchased_at?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * The phone number's current status.
     */
    status?:
      | 'purchase-pending'
      | 'purchase-failed'
      | 'port-pending'
      | 'port-failed'
      | 'active'
      | 'deleted'
      | 'emergency-only'
      | 'ported-out'
      | 'port-out-pending';

    /**
     * Indicates whether T38 Fax Gateway for inbound calls to this number.
     */
    t38_fax_gateway_enabled?: boolean;

    /**
     * A list of user-assigned tags to help manage the phone number.
     */
    tags?: Array<string>;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface PhoneNumberSlimListResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Identifies the billing group associated with the phone number.
   */
  billing_group_id?: string;

  /**
   * Indicates if call forwarding will be enabled for this number if forwards_to and
   * forwarding_type are filled in. Defaults to true for backwards compatibility with
   * APIV1 use of numbers endpoints.
   */
  call_forwarding_enabled?: boolean;

  /**
   * Indicates whether call recording is enabled for this number.
   */
  call_recording_enabled?: boolean;

  /**
   * Indicates whether caller ID is enabled for this number.
   */
  caller_id_name_enabled?: boolean;

  /**
   * Indicates whether a CNAM listing is enabled for this number.
   */
  cnam_listing_enabled?: boolean;

  /**
   * Identifies the connection associated with the phone number.
   */
  connection_id?: string;

  /**
   * The ISO 3166-1 alpha-2 country code of the phone number.
   */
  country_iso_alpha2?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * Identifies the emergency address associated with the phone number.
   */
  emergency_address_id?: string;

  /**
   * Indicates whether emergency services are enabled for this number.
   */
  emergency_enabled?: boolean;

  /**
   * Indicates the status of the provisioning of emergency services for the phone
   * number. This field contains information about activity that may be ongoing for a
   * number where it either is being provisioned or deprovisioned but is not yet
   * enabled/disabled.
   */
  emergency_status?: 'active' | 'deprovisioning' | 'disabled' | 'provisioning' | 'provisioning-failed';

  /**
   * If someone attempts to port your phone number away from Telnyx and your phone
   * number has an external PIN set, Telnyx will attempt to verify that you provided
   * the correct external PIN to the winning carrier. Note that not all carriers
   * cooperate with this security mechanism.
   */
  external_pin?: string;

  /**
   * The inbound_call_screening setting is a phone number configuration option
   * variable that allows users to configure their settings to block or flag
   * fraudulent calls. It can be set to disabled, reject_calls, or flag_calls. This
   * feature has an additional per-number monthly cost associated with it.
   */
  inbound_call_screening?: 'disabled' | 'reject_calls' | 'flag_calls';

  /**
   * The +E.164-formatted phone number associated with this record.
   */
  phone_number?: string;

  /**
   * The phone number's type. Note: For numbers purchased prior to July 2023 or when
   * fetching a number's details immediately after a purchase completes, the legacy
   * values `tollfree`, `shortcode` or `longcode` may be returned instead.
   */
  phone_number_type?:
    | 'local'
    | 'toll_free'
    | 'mobile'
    | 'national'
    | 'shared_cost'
    | 'landline'
    | 'tollfree'
    | 'shortcode'
    | 'longcode';

  /**
   * ISO 8601 formatted date indicating when the resource was purchased.
   */
  purchased_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The phone number's current status.
   */
  status?:
    | 'purchase-pending'
    | 'purchase-failed'
    | 'port-pending'
    | 'port-failed'
    | 'active'
    | 'deleted'
    | 'emergency-only'
    | 'ported-out'
    | 'port-out-pending'
    | 'requirement-info-pending'
    | 'requirement-info-under-review'
    | 'requirement-info-exception'
    | 'provision-pending';

  /**
   * Indicates whether T38 Fax Gateway for inbound calls to this number.
   */
  t38_fax_gateway_enabled?: boolean;
}

export interface PhoneNumberUpdateParams {
  /**
   * Identifies the billing group associated with the phone number.
   */
  billing_group_id?: string;

  /**
   * Identifies the connection associated with the phone number.
   */
  connection_id?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  /**
   * If someone attempts to port your phone number away from Telnyx and your phone
   * number has an external PIN set, we will attempt to verify that you provided the
   * correct external PIN to the winning carrier. Note that not all carriers
   * cooperate with this security mechanism.
   */
  external_pin?: string;

  /**
   * Indicates whether HD voice is enabled for this number.
   */
  hd_voice_enabled?: boolean;

  /**
   * A list of user-assigned tags to help organize phone numbers.
   */
  tags?: Array<string>;
}

export interface PhoneNumberListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[tag],
   * filter[phone_number], filter[status], filter[country_iso_alpha2],
   * filter[connection_id], filter[voice.connection_name],
   * filter[voice.usage_payment_method], filter[billing_group_id],
   * filter[emergency_address_id], filter[customer_reference], filter[number_type],
   * filter[source]
   */
  filter?: PhoneNumberListParams.Filter;

  /**
   * Although it is an infrequent occurrence, due to the highly distributed nature of
   * the Telnyx platform, it is possible that there will be an issue when loading in
   * Messaging Profile information. As such, when this parameter is set to `true` and
   * an error in fetching this information occurs, messaging profile related fields
   * will be omitted in the response and an error message will be included instead of
   * returning a 503 error.
   */
  handle_messaging_profile_error?: 'true' | 'false';

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * created_at in descending order.
   */
  sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method';
}

export namespace PhoneNumberListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[tag],
   * filter[phone_number], filter[status], filter[country_iso_alpha2],
   * filter[connection_id], filter[voice.connection_name],
   * filter[voice.usage_payment_method], filter[billing_group_id],
   * filter[emergency_address_id], filter[customer_reference], filter[number_type],
   * filter[source]
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
     * Filter by phone number country ISO alpha-2 code. Can be a single value or an
     * array of values.
     */
    country_iso_alpha2?: string | Array<string>;

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
     * Filter phone numbers by phone number type.
     */
    number_type?: Filter.NumberType;

    /**
     * Filter by phone number. Requires at least three digits. Non-numerical characters
     * will result in no values being returned.
     */
    phone_number?: string;

    /**
     * Filter phone numbers by their source. Use 'ported' for numbers ported from other
     * carriers, or 'purchased' for numbers bought directly from Telnyx.
     */
    source?: 'ported' | 'purchased';

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

    /**
     * When set to 'true', filters for phone numbers that do not have any tags applied.
     * All other values are ignored.
     */
    without_tags?: 'true' | 'false';
  }

  export namespace Filter {
    /**
     * Filter phone numbers by phone number type.
     */
    export interface NumberType {
      /**
       * Filter phone numbers by phone number type.
       */
      eq?: 'local' | 'national' | 'toll_free' | 'mobile' | 'shared_cost';
    }

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

export interface PhoneNumberSlimListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[tag],
   * filter[phone_number], filter[status], filter[country_iso_alpha2],
   * filter[connection_id], filter[voice.connection_name],
   * filter[voice.usage_payment_method], filter[billing_group_id],
   * filter[emergency_address_id], filter[customer_reference], filter[number_type],
   * filter[source]
   */
  filter?: PhoneNumberSlimListParams.Filter;

  /**
   * Include the connection associated with the phone number.
   */
  include_connection?: boolean;

  /**
   * Include the tags associated with the phone number.
   */
  include_tags?: boolean;

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * created_at in descending order.
   */
  sort?: 'purchased_at' | 'phone_number' | 'connection_name' | 'usage_payment_method';
}

export namespace PhoneNumberSlimListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[tag],
   * filter[phone_number], filter[status], filter[country_iso_alpha2],
   * filter[connection_id], filter[voice.connection_name],
   * filter[voice.usage_payment_method], filter[billing_group_id],
   * filter[emergency_address_id], filter[customer_reference], filter[number_type],
   * filter[source]
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
     * Filter by phone number country ISO alpha-2 code. Can be a single value or an
     * array of values.
     */
    country_iso_alpha2?: string | Array<string>;

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
     * Filter phone numbers by phone number type.
     */
    number_type?: Filter.NumberType;

    /**
     * Filter by phone number. Requires at least three digits. Non-numerical characters
     * will result in no values being returned.
     */
    phone_number?: string;

    /**
     * Filter phone numbers by their source. Use 'ported' for numbers ported from other
     * carriers, or 'purchased' for numbers bought directly from Telnyx.
     */
    source?: 'ported' | 'purchased';

    /**
     * Filter by phone number status.
     */
    status?:
      | 'purchase-pending'
      | 'purchase-failed'
      | 'port_pending'
      | 'active'
      | 'deleted'
      | 'port-failed'
      | 'emergency-only'
      | 'ported-out'
      | 'port-out-pending';

    /**
     * Filter by phone number tags. (This requires the include_tags param)
     */
    tag?: string;

    /**
     * Filter by voice connection name pattern matching (requires include_connection
     * param).
     */
    'voice.connection_name'?: Filter.VoiceConnectionName;

    /**
     * Filter by usage_payment_method.
     */
    'voice.usage_payment_method'?: 'pay-per-minute' | 'channel';
  }

  export namespace Filter {
    /**
     * Filter phone numbers by phone number type.
     */
    export interface NumberType {
      /**
       * Filter phone numbers by phone number type.
       */
      eq?: 'local' | 'national' | 'toll_free' | 'mobile' | 'shared_cost';
    }

    /**
     * Filter by voice connection name pattern matching (requires include_connection
     * param).
     */
    export interface VoiceConnectionName {
      /**
       * Filter contains connection name. Requires at least three characters and the
       * include_connection param.
       */
      contains?: string;

      /**
       * Filter ends with connection name. Requires at least three characters and the
       * include_connection param.
       */
      ends_with?: string;

      /**
       * Filter by connection name.
       */
      eq?: string;

      /**
       * Filter starts with connection name. Requires at least three characters and the
       * include_connection param.
       */
      starts_with?: string;
    }
  }
}

PhoneNumbers.Actions = Actions;
PhoneNumbers.CsvDownloads = CsvDownloads;
PhoneNumbers.Jobs = Jobs;
PhoneNumbers.Messaging = Messaging;
PhoneNumbers.Voice = Voice;
PhoneNumbers.Voicemail = Voicemail;

export declare namespace PhoneNumbers {
  export {
    type PhoneNumberDetailed as PhoneNumberDetailed,
    type PhoneNumberRetrieveResponse as PhoneNumberRetrieveResponse,
    type PhoneNumberUpdateResponse as PhoneNumberUpdateResponse,
    type PhoneNumberDeleteResponse as PhoneNumberDeleteResponse,
    type PhoneNumberSlimListResponse as PhoneNumberSlimListResponse,
    type PhoneNumberDetailedsDefaultFlatPagination as PhoneNumberDetailedsDefaultFlatPagination,
    type PhoneNumberSlimListResponsesDefaultFlatPagination as PhoneNumberSlimListResponsesDefaultFlatPagination,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberSlimListParams as PhoneNumberSlimListParams,
  };

  export {
    Actions as Actions,
    type PhoneNumberWithVoiceSettings as PhoneNumberWithVoiceSettings,
    type ActionChangeBundleStatusResponse as ActionChangeBundleStatusResponse,
    type ActionEnableEmergencyResponse as ActionEnableEmergencyResponse,
    type ActionVerifyOwnershipResponse as ActionVerifyOwnershipResponse,
    type ActionChangeBundleStatusParams as ActionChangeBundleStatusParams,
    type ActionEnableEmergencyParams as ActionEnableEmergencyParams,
    type ActionVerifyOwnershipParams as ActionVerifyOwnershipParams,
  };

  export {
    CsvDownloads as CsvDownloads,
    type CsvDownload as CsvDownload,
    type CsvDownloadCreateResponse as CsvDownloadCreateResponse,
    type CsvDownloadRetrieveResponse as CsvDownloadRetrieveResponse,
    type CsvDownloadsDefaultFlatPagination as CsvDownloadsDefaultFlatPagination,
    type CsvDownloadCreateParams as CsvDownloadCreateParams,
    type CsvDownloadListParams as CsvDownloadListParams,
  };

  export {
    Jobs as Jobs,
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

  export {
    Messaging as Messaging,
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingUpdateResponse as MessagingUpdateResponse,
    type MessagingUpdateParams as MessagingUpdateParams,
    type MessagingListParams as MessagingListParams,
  };

  export {
    Voice as Voice,
    type CallForwarding as CallForwarding,
    type CallRecording as CallRecording,
    type CnamListing as CnamListing,
    type MediaFeatures as MediaFeatures,
    type UpdateVoiceSettings as UpdateVoiceSettings,
    type VoiceRetrieveResponse as VoiceRetrieveResponse,
    type VoiceUpdateResponse as VoiceUpdateResponse,
    type VoiceUpdateParams as VoiceUpdateParams,
    type VoiceListParams as VoiceListParams,
  };

  export {
    Voicemail as Voicemail,
    type VoicemailPrefResponse as VoicemailPrefResponse,
    type VoicemailRequest as VoicemailRequest,
    type VoicemailCreateResponse as VoicemailCreateResponse,
    type VoicemailRetrieveResponse as VoicemailRetrieveResponse,
    type VoicemailUpdateResponse as VoicemailUpdateResponse,
    type VoicemailCreateParams as VoicemailCreateParams,
    type VoicemailUpdateParams as VoicemailUpdateParams,
  };
}
