// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class OutboundVoiceProfiles extends APIResource {
  /**
   * Create an outbound voice profile.
   *
   * @example
   * ```ts
   * const outboundVoiceProfile =
   *   await client.outboundVoiceProfiles.create({
   *     name: 'office',
   *   });
   * ```
   */
  create(
    body: OutboundVoiceProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<OutboundVoiceProfileCreateResponse> {
    return this._client.post('/outbound_voice_profiles', { body, ...options });
  }

  /**
   * Retrieves the details of an existing outbound voice profile.
   *
   * @example
   * ```ts
   * const outboundVoiceProfile =
   *   await client.outboundVoiceProfiles.retrieve(
   *     '1293384261075731499',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<OutboundVoiceProfileRetrieveResponse> {
    return this._client.get(path`/outbound_voice_profiles/${id}`, options);
  }

  /**
   * Updates an existing outbound voice profile.
   *
   * @example
   * ```ts
   * const outboundVoiceProfile =
   *   await client.outboundVoiceProfiles.update(
   *     '1293384261075731499',
   *     { name: 'office' },
   *   );
   * ```
   */
  update(
    id: string,
    body: OutboundVoiceProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<OutboundVoiceProfileUpdateResponse> {
    return this._client.patch(path`/outbound_voice_profiles/${id}`, { body, ...options });
  }

  /**
   * Get all outbound voice profiles belonging to the user that match the given
   * filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const outboundVoiceProfile of client.outboundVoiceProfiles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: OutboundVoiceProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<OutboundVoiceProfilesDefaultFlatPagination, OutboundVoiceProfile> {
    return this._client.getAPIList('/outbound_voice_profiles', DefaultFlatPagination<OutboundVoiceProfile>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes an existing outbound voice profile.
   *
   * @example
   * ```ts
   * const outboundVoiceProfile =
   *   await client.outboundVoiceProfiles.delete(
   *     '1293384261075731499',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<OutboundVoiceProfileDeleteResponse> {
    return this._client.delete(path`/outbound_voice_profiles/${id}`, options);
  }
}

export type OutboundVoiceProfilesDefaultFlatPagination = DefaultFlatPagination<OutboundVoiceProfile>;

export interface OutboundCallRecording {
  /**
   * When call_recording_type is 'by_caller_phone_number', only outbound calls using
   * one of these numbers will be recorded. Numbers must be specified in E164 format.
   */
  call_recording_caller_phone_numbers?: Array<string>;

  /**
   * When using 'dual' channels, the final audio file will be a stereo recording with
   * the first leg on channel A, and the rest on channel B.
   */
  call_recording_channels?: 'single' | 'dual';

  /**
   * The audio file format for calls being recorded.
   */
  call_recording_format?: 'wav' | 'mp3';

  /**
   * Specifies which calls are recorded.
   */
  call_recording_type?: 'all' | 'none' | 'by_caller_phone_number';
}

export interface OutboundVoiceProfile {
  /**
   * A user-supplied name to help with organization.
   */
  name: string;

  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The ID of the billing group associated with the outbound proflile. Defaults to
   * null (for no group assigned).
   */
  billing_group_id?: string | null;

  call_recording?: OutboundCallRecording;

  /**
   * (BETA) Specifies the time window and call limits for calls made using this
   * outbound voice profile. Note that all times are UTC in 24-hour clock time.
   */
  calling_window?: OutboundVoiceProfile.CallingWindow;

  /**
   * Must be no more than your global concurrent call limit. Null means no limit.
   */
  concurrent_call_limit?: number | null;

  /**
   * Amount of connections associated with this outbound voice profile.
   */
  connections_count?: number;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The maximum amount of usage charges, in USD, you want Telnyx to allow on this
   * outbound voice profile in a day before disallowing new calls.
   */
  daily_spend_limit?: string;

  /**
   * Specifies whether to enforce the daily_spend_limit on this outbound voice
   * profile.
   */
  daily_spend_limit_enabled?: boolean;

  /**
   * Specifies whether the outbound voice profile can be used. Disabled profiles will
   * result in outbound calls being blocked for the associated Connections.
   */
  enabled?: boolean;

  /**
   * Maximum rate (price per minute) for a Destination to be allowed when making
   * outbound calls.
   */
  max_destination_rate?: number;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Indicates the coverage of the termination regions.
   */
  service_plan?: ServicePlan;

  tags?: Array<string>;

  /**
   * Specifies the type of traffic allowed in this profile.
   */
  traffic_type?: TrafficType;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * Setting for how costs for outbound profile are calculated.
   */
  usage_payment_method?: UsagePaymentMethod;

  /**
   * The list of destinations you want to be able to call using this outbound voice
   * profile formatted in alpha2.
   */
  whitelisted_destinations?: Array<string>;
}

export namespace OutboundVoiceProfile {
  /**
   * (BETA) Specifies the time window and call limits for calls made using this
   * outbound voice profile. Note that all times are UTC in 24-hour clock time.
   */
  export interface CallingWindow {
    /**
     * (BETA) The maximum number of calls that can be initiated to a single called
     * party (CLD) within the calling window. A null value means no limit.
     */
    calls_per_cld?: number;

    /**
     * (BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are no
     * longer allowed to start.
     */
    end_time?: string;

    /**
     * (BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are
     * allowed to start.
     */
    start_time?: string;
  }
}

/**
 * Indicates the coverage of the termination regions.
 */
export type ServicePlan = 'global';

/**
 * Specifies the type of traffic allowed in this profile.
 */
export type TrafficType = 'conversational';

/**
 * Setting for how costs for outbound profile are calculated.
 */
export type UsagePaymentMethod = 'rate-deck';

export interface OutboundVoiceProfileCreateResponse {
  data?: OutboundVoiceProfile;
}

export interface OutboundVoiceProfileRetrieveResponse {
  data?: OutboundVoiceProfile;
}

export interface OutboundVoiceProfileUpdateResponse {
  data?: OutboundVoiceProfile;
}

export interface OutboundVoiceProfileDeleteResponse {
  data?: OutboundVoiceProfile;
}

export interface OutboundVoiceProfileCreateParams {
  /**
   * A user-supplied name to help with organization.
   */
  name: string;

  /**
   * The ID of the billing group associated with the outbound proflile. Defaults to
   * null (for no group assigned).
   */
  billing_group_id?: string | null;

  call_recording?: OutboundCallRecording;

  /**
   * (BETA) Specifies the time window and call limits for calls made using this
   * outbound voice profile. Note that all times are UTC in 24-hour clock time.
   */
  calling_window?: OutboundVoiceProfileCreateParams.CallingWindow;

  /**
   * Must be no more than your global concurrent call limit. Null means no limit.
   */
  concurrent_call_limit?: number | null;

  /**
   * The maximum amount of usage charges, in USD, you want Telnyx to allow on this
   * outbound voice profile in a day before disallowing new calls.
   */
  daily_spend_limit?: string;

  /**
   * Specifies whether to enforce the daily_spend_limit on this outbound voice
   * profile.
   */
  daily_spend_limit_enabled?: boolean;

  /**
   * Specifies whether the outbound voice profile can be used. Disabled profiles will
   * result in outbound calls being blocked for the associated Connections.
   */
  enabled?: boolean;

  /**
   * Maximum rate (price per minute) for a Destination to be allowed when making
   * outbound calls.
   */
  max_destination_rate?: number;

  /**
   * Indicates the coverage of the termination regions.
   */
  service_plan?: ServicePlan;

  tags?: Array<string>;

  /**
   * Specifies the type of traffic allowed in this profile.
   */
  traffic_type?: TrafficType;

  /**
   * Setting for how costs for outbound profile are calculated.
   */
  usage_payment_method?: UsagePaymentMethod;

  /**
   * The list of destinations you want to be able to call using this outbound voice
   * profile formatted in alpha2.
   */
  whitelisted_destinations?: Array<string>;
}

export namespace OutboundVoiceProfileCreateParams {
  /**
   * (BETA) Specifies the time window and call limits for calls made using this
   * outbound voice profile. Note that all times are UTC in 24-hour clock time.
   */
  export interface CallingWindow {
    /**
     * (BETA) The maximum number of calls that can be initiated to a single called
     * party (CLD) within the calling window. A null value means no limit.
     */
    calls_per_cld?: number;

    /**
     * (BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are no
     * longer allowed to start.
     */
    end_time?: string;

    /**
     * (BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are
     * allowed to start.
     */
    start_time?: string;
  }
}

export interface OutboundVoiceProfileUpdateParams {
  /**
   * A user-supplied name to help with organization.
   */
  name: string;

  /**
   * The ID of the billing group associated with the outbound proflile. Defaults to
   * null (for no group assigned).
   */
  billing_group_id?: string | null;

  call_recording?: OutboundCallRecording;

  /**
   * (BETA) Specifies the time window and call limits for calls made using this
   * outbound voice profile.
   */
  calling_window?: OutboundVoiceProfileUpdateParams.CallingWindow;

  /**
   * Must be no more than your global concurrent call limit. Null means no limit.
   */
  concurrent_call_limit?: number | null;

  /**
   * The maximum amount of usage charges, in USD, you want Telnyx to allow on this
   * outbound voice profile in a day before disallowing new calls.
   */
  daily_spend_limit?: string;

  /**
   * Specifies whether to enforce the daily_spend_limit on this outbound voice
   * profile.
   */
  daily_spend_limit_enabled?: boolean;

  /**
   * Specifies whether the outbound voice profile can be used. Disabled profiles will
   * result in outbound calls being blocked for the associated Connections.
   */
  enabled?: boolean;

  /**
   * Maximum rate (price per minute) for a Destination to be allowed when making
   * outbound calls.
   */
  max_destination_rate?: number;

  /**
   * Indicates the coverage of the termination regions.
   */
  service_plan?: ServicePlan;

  tags?: Array<string>;

  /**
   * Specifies the type of traffic allowed in this profile.
   */
  traffic_type?: TrafficType;

  /**
   * Setting for how costs for outbound profile are calculated.
   */
  usage_payment_method?: UsagePaymentMethod;

  /**
   * The list of destinations you want to be able to call using this outbound voice
   * profile formatted in alpha2.
   */
  whitelisted_destinations?: Array<string>;
}

export namespace OutboundVoiceProfileUpdateParams {
  /**
   * (BETA) Specifies the time window and call limits for calls made using this
   * outbound voice profile.
   */
  export interface CallingWindow {
    /**
     * (BETA) The maximum number of calls that can be initiated to a single called
     * party (CLD) within the calling window. A null value means no limit.
     */
    calls_per_cld?: number;

    /**
     * (BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are no
     * longer allowed to start.
     */
    end_time?: string;

    /**
     * (BETA) The UTC time of day (in HH:MM format, 24-hour clock) when calls are
     * allowed to start.
     */
    start_time?: string;
  }
}

export interface OutboundVoiceProfileListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[name][contains]
   */
  filter?: OutboundVoiceProfileListParams.Filter;

  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code>-</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>name</code>: sorts the result by the
   *     <code>name</code> field in ascending order.
   *   </li>
   *
   *   <li>
   *     <code>-name</code>: sorts the result by the
   *     <code>name</code> field in descending order.
   *   </li>
   * </ul> <br/>
   */
  sort?:
    | 'enabled'
    | '-enabled'
    | 'created_at'
    | '-created_at'
    | 'name'
    | '-name'
    | 'service_plan'
    | '-service_plan'
    | 'traffic_type'
    | '-traffic_type'
    | 'usage_payment_method'
    | '-usage_payment_method';
}

export namespace OutboundVoiceProfileListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[name][contains]
   */
  export interface Filter {
    /**
     * Name filtering operations
     */
    name?: Filter.Name;
  }

  export namespace Filter {
    /**
     * Name filtering operations
     */
    export interface Name {
      /**
       * Optional filter on outbound voice profile name.
       */
      contains?: string;
    }
  }
}

export declare namespace OutboundVoiceProfiles {
  export {
    type OutboundCallRecording as OutboundCallRecording,
    type OutboundVoiceProfile as OutboundVoiceProfile,
    type ServicePlan as ServicePlan,
    type TrafficType as TrafficType,
    type UsagePaymentMethod as UsagePaymentMethod,
    type OutboundVoiceProfileCreateResponse as OutboundVoiceProfileCreateResponse,
    type OutboundVoiceProfileRetrieveResponse as OutboundVoiceProfileRetrieveResponse,
    type OutboundVoiceProfileUpdateResponse as OutboundVoiceProfileUpdateResponse,
    type OutboundVoiceProfileDeleteResponse as OutboundVoiceProfileDeleteResponse,
    type OutboundVoiceProfilesDefaultFlatPagination as OutboundVoiceProfilesDefaultFlatPagination,
    type OutboundVoiceProfileCreateParams as OutboundVoiceProfileCreateParams,
    type OutboundVoiceProfileUpdateParams as OutboundVoiceProfileUpdateParams,
    type OutboundVoiceProfileListParams as OutboundVoiceProfileListParams,
  };
}
