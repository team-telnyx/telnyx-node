// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class DetailRecords extends APIResource {
  /**
   * Search for any detail record across the Telnyx Platform
   */
  list(
    query: DetailRecordListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DetailRecordListResponsesDefaultFlatPagination, DetailRecordListResponse> {
    return this._client.getAPIList('/detail_records', DefaultFlatPagination<DetailRecordListResponse>, {
      query,
      ...options,
    });
  }
}

export type DetailRecordListResponsesDefaultFlatPagination = DefaultFlatPagination<DetailRecordListResponse>;

/**
 * An object following one of the schemas published in
 * https://developers.telnyx.com/docs/api/v2/detail-records
 */
export type DetailRecordListResponse =
  | DetailRecordListResponse.MessageDetailRecord
  | DetailRecordListResponse.ConferenceDetailRecord
  | DetailRecordListResponse.ConferenceParticipantDetailRecord
  | DetailRecordListResponse.AmdDetailRecord
  | DetailRecordListResponse.VerifyDetailRecord
  | DetailRecordListResponse.SimCardUsageDetailRecord
  | DetailRecordListResponse.MediaStorageDetailRecord;

export namespace DetailRecordListResponse {
  export interface MessageDetailRecord {
    /**
     * Identifies the record schema
     */
    record_type: string;

    /**
     * Country-specific carrier used to send or receive the message
     */
    carrier?: string;

    /**
     * Fee charged by certain carriers in order to deliver certain message types.
     * Telnyx passes this fee on to the customer according to our pricing table
     */
    carrier_fee?: string;

    /**
     * The recipient of the message (to parameter in the Messaging API)
     */
    cld?: string;

    /**
     * The sender of the message (from parameter in the Messaging API). For
     * Alphanumeric ID messages, this is the sender ID value
     */
    cli?: string;

    /**
     * Message completion time
     */
    completed_at?: string;

    /**
     * Amount, in the user currency, for the Telnyx billing cost
     */
    cost?: string;

    /**
     * Two-letter representation of the country of the cld property using the ISO
     * 3166-1 alpha-2 format
     */
    country_code?: string;

    /**
     * Message creation time
     */
    created_at?: string;

    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;

    /**
     * Final webhook delivery status
     */
    delivery_status?: string;

    /**
     * Failover customer-provided URL which Telnyx posts delivery status webhooks to
     */
    delivery_status_failover_url?: string;

    /**
     * Primary customer-provided URL which Telnyx posts delivery status webhooks to
     */
    delivery_status_webhook_url?: string;

    /**
     * Logical direction of the message from the Telnyx customer's perspective. It's
     * inbound when the Telnyx customer receives the message, or outbound otherwise
     */
    direction?: 'inbound' | 'outbound';

    /**
     * Telnyx API error codes returned by the Telnyx gateway
     */
    errors?: Array<string>;

    /**
     * Indicates whether this is a Free-To-End-User (FTEU) short code message
     */
    fteu?: boolean;

    /**
     * Mobile country code. Only available for certain products, such as Global
     * Outbound-Only from Alphanumeric Sender ID
     */
    mcc?: string;

    /**
     * Describes the Messaging service used to send the message. Available services
     * are: Short Message Service (SMS), Multimedia Messaging Service (MMS), and Rich
     * Communication Services (RCS)
     */
    message_type?: 'SMS' | 'MMS' | 'RCS';

    /**
     * Mobile network code. Only available for certain products, such as Global
     * Outbound-Only from Alphanumeric Sender ID
     */
    mnc?: string;

    /**
     * Indicates whether both sender and recipient numbers are Telnyx-managed
     */
    on_net?: boolean;

    /**
     * Number of message parts. The message is broken down in multiple parts when its
     * length surpasses the limit of 160 characters
     */
    parts?: number;

    /**
     * Unique identifier of the Messaging Profile used to send or receive the message
     */
    profile_id?: string;

    /**
     * Name of the Messaging Profile used to send or receive the message
     */
    profile_name?: string;

    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    rate?: string;

    /**
     * Time when the message was sent
     */
    sent_at?: string;

    /**
     * Two-letter representation of the country of the cli property using the ISO
     * 3166-1 alpha-2 format
     */
    source_country_code?: string;

    /**
     * Final status of the message after the delivery attempt
     */
    status?:
      | 'gw_timeout'
      | 'delivered'
      | 'dlr_unconfirmed'
      | 'dlr_timeout'
      | 'received'
      | 'gw_reject'
      | 'failed';

    /**
     * Comma-separated tags assigned to the Telnyx number associated with the message
     */
    tags?: string;

    /**
     * Message updated time
     */
    updated_at?: string;

    /**
     * Identifier of the Telnyx account who owns the message
     */
    user_id?: string;

    /**
     * Unique identifier of the message
     */
    uuid?: string;
  }

  export interface ConferenceDetailRecord {
    record_type: string;

    /**
     * Conference id
     */
    id?: string;

    /**
     * Telnyx UUID that identifies the conference call leg
     */
    call_leg_id?: string;

    /**
     * Duration of the conference call in seconds
     */
    call_sec?: number;

    /**
     * Telnyx UUID that identifies with conference call session
     */
    call_session_id?: string;

    /**
     * Connection id
     */
    connection_id?: string;

    /**
     * Conference end time
     */
    ended_at?: string;

    /**
     * Conference expiry time
     */
    expires_at?: string;

    /**
     * Indicates whether Telnyx billing charges might be applicable
     */
    is_telnyx_billable?: boolean;

    /**
     * Conference name
     */
    name?: string;

    /**
     * Sum of the conference call duration for all participants in seconds
     */
    participant_call_sec?: number;

    /**
     * Number of participants that joined the conference call
     */
    participant_count?: number;

    /**
     * Region where the conference is hosted
     */
    region?: string;

    /**
     * Conference start time
     */
    started_at?: string;

    /**
     * User id
     */
    user_id?: string;
  }

  export interface ConferenceParticipantDetailRecord {
    record_type: string;

    /**
     * Participant id
     */
    id?: string;

    /**
     * Duration of the conference call for billing purposes
     */
    billed_sec?: number;

    /**
     * Telnyx UUID that identifies the conference call leg
     */
    call_leg_id?: string;

    /**
     * Duration of the conference call in seconds
     */
    call_sec?: number;

    /**
     * Telnyx UUID that identifies with conference call session
     */
    call_session_id?: string;

    /**
     * Conference id
     */
    conference_id?: string;

    /**
     * Currency amount for Telnyx billing cost
     */
    cost?: string;

    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;

    /**
     * Number called by the participant to join the conference
     */
    destination_number?: string;

    /**
     * Indicates whether Telnyx billing charges might be applicable
     */
    is_telnyx_billable?: boolean;

    /**
     * Participant join time
     */
    joined_at?: string;

    /**
     * Participant leave time
     */
    left_at?: string;

    /**
     * Participant origin number used in the conference call
     */
    originating_number?: string;

    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    rate?: string;

    /**
     * Billing unit used to calculate the Telnyx billing cost
     */
    rate_measured_in?: string;

    /**
     * User id
     */
    user_id?: string;
  }

  export interface AmdDetailRecord {
    record_type: string;

    /**
     * Feature invocation id
     */
    id?: string;

    /**
     * Billing Group id
     */
    billing_group_id?: string;

    /**
     * Name of the Billing Group specified in billing_group_id
     */
    billing_group_name?: string;

    /**
     * Telnyx UUID that identifies the related call leg
     */
    call_leg_id?: string;

    /**
     * Telnyx UUID that identifies the related call session
     */
    call_session_id?: string;

    /**
     * Connection id
     */
    connection_id?: string;

    /**
     * Connection name
     */
    connection_name?: string;

    /**
     * Currency amount for Telnyx billing cost
     */
    cost?: string;

    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;

    /**
     * Feature name
     */
    feature?: 'PREMIUM';

    /**
     * Feature invocation time
     */
    invoked_at?: string;

    /**
     * Indicates whether Telnyx billing charges might be applicable
     */
    is_telnyx_billable?: boolean;

    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    rate?: string;

    /**
     * Billing unit used to calculate the Telnyx billing cost
     */
    rate_measured_in?: string;

    /**
     * User-provided tags
     */
    tags?: string;
  }

  export interface VerifyDetailRecord {
    record_type: string;

    /**
     * Unique ID of the verification
     */
    id?: string;

    created_at?: string;

    /**
     * Telnyx account currency used to describe monetary values, including billing
     * costs
     */
    currency?: string;

    delivery_status?: string;

    /**
     * E.164 formatted phone number
     */
    destination_phone_number?: string;

    /**
     * Currency amount per billing unit used to calculate the Telnyx billing costs
     */
    rate?: string;

    /**
     * Billing unit used to calculate the Telnyx billing costs
     */
    rate_measured_in?: string;

    updated_at?: string;

    verification_status?: string;

    verify_channel_id?: string;

    /**
     * Depending on the type of verification, the `verify_channel_id` points to one of
     * the following channel ids;
     *
     * ---
     *
     * | verify_channel_type | verify_channel_id |
     * | ------------------- | ----------------- |
     * | sms, psd2           | messaging_id      |
     * | call, flashcall     | call_control_id   |
     *
     * ---
     */
    verify_channel_type?: 'sms' | 'psd2' | 'call' | 'flashcall';

    verify_profile_id?: string;

    /**
     * Currency amount for Verify Usage Fee
     */
    verify_usage_fee?: string;
  }

  export interface SimCardUsageDetailRecord {
    record_type: string;

    /**
     * Unique identifier for this SIM Card Usage
     */
    id?: string;

    /**
     * Event close time
     */
    closed_at?: string;

    /**
     * Event creation time
     */
    created_at?: string;

    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;

    /**
     * Data cost
     */
    data_cost?: number;

    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    data_rate?: string;

    /**
     * Unit of wireless link consumption
     */
    data_unit?: string;

    /**
     * Number of megabytes downloaded
     */
    downlink_data?: number;

    /**
     * International Mobile Subscriber Identity
     */
    imsi?: string;

    /**
     * Ip address that generated the event
     */
    ip_address?: string;

    /**
     * Mobile country code
     */
    mcc?: string;

    /**
     * Mobile network code
     */
    mnc?: string;

    /**
     * Telephone number associated to SIM card
     */
    phone_number?: string;

    /**
     * Unique identifier for SIM card
     */
    sim_card_id?: string;

    /**
     * User-provided tags
     */
    sim_card_tags?: string;

    /**
     * Unique identifier for SIM group
     */
    sim_group_id?: string;

    /**
     * Sim group name for sim card
     */
    sim_group_name?: string;

    /**
     * Number of megabytes uploaded
     */
    uplink_data?: number;
  }

  export interface MediaStorageDetailRecord {
    record_type: string;

    /**
     * Unique identifier for the Media Storage Event
     */
    id?: string;

    /**
     * Type of action performed against the Media Storage API
     */
    action_type?: string;

    /**
     * Asset id
     */
    asset_id?: string;

    /**
     * Currency amount for Telnyx billing cost
     */
    cost?: string;

    /**
     * Event creation time
     */
    created_at?: string;

    /**
     * Telnyx account currency used to describe monetary values, including billing cost
     */
    currency?: string;

    /**
     * Link channel id
     */
    link_channel_id?: string;

    /**
     * Link channel type
     */
    link_channel_type?: string;

    /**
     * Organization owner id
     */
    org_id?: string;

    /**
     * Currency amount per billing unit used to calculate the Telnyx billing cost
     */
    rate?: string;

    /**
     * Billing unit used to calculate the Telnyx billing cost
     */
    rate_measured_in?: string;

    /**
     * Request status
     */
    status?: string;

    /**
     * User id
     */
    user_id?: string;

    /**
     * Webhook id
     */
    webhook_id?: string;
  }
}

export interface DetailRecordListParams extends DefaultFlatPaginationParams {
  /**
   * Filter records on a given record attribute and value. <br/>Example:
   * filter[status]=delivered. <br/>Required: filter[record_type] must be specified.
   */
  filter?: DetailRecordListParams.Filter;

  /**
   * Specifies the sort order for results. <br/>Example: sort=-created_at
   */
  sort?: Array<string>;
}

export namespace DetailRecordListParams {
  /**
   * Filter records on a given record attribute and value. <br/>Example:
   * filter[status]=delivered. <br/>Required: filter[record_type] must be specified.
   */
  export interface Filter {
    /**
     * Filter by the given record type.
     */
    record_type:
      | 'ai-voice-assistant'
      | 'amd'
      | 'call-control'
      | 'conference'
      | 'conference-participant'
      | 'embedding'
      | 'fax'
      | 'inference'
      | 'inference-speech-to-text'
      | 'media_storage'
      | 'media-streaming'
      | 'messaging'
      | 'noise-suppression'
      | 'recording'
      | 'sip-trunking'
      | 'siprec-client'
      | 'stt'
      | 'tts'
      | 'verify'
      | 'webrtc'
      | 'wireless';

    /**
     * Filter by the given user-friendly date range. You can specify one of the
     * following enum values, or a dynamic one using this format: last_N_days.
     */
    date_range?:
      | 'yesterday'
      | 'today'
      | 'tomorrow'
      | 'last_week'
      | 'this_week'
      | 'next_week'
      | 'last_month'
      | 'this_month'
      | 'next_month';

    [k: string]: unknown;
  }
}

export declare namespace DetailRecords {
  export {
    type DetailRecordListResponse as DetailRecordListResponse,
    type DetailRecordListResponsesDefaultFlatPagination as DetailRecordListResponsesDefaultFlatPagination,
    type DetailRecordListParams as DetailRecordListParams,
  };
}
