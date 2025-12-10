// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';

export interface APIError {
  code: string;

  title: string;

  detail?: string;

  meta?: { [key: string]: unknown };

  source?: APIError.Source;
}

export namespace APIError {
  export interface Source {
    /**
     * Indicates which query parameter caused the error.
     */
    parameter?: string;

    /**
     * JSON pointer (RFC6901) to the offending entity.
     */
    pointer?: string;
  }
}

export interface ConnectionsPaginationMeta {
  page_number?: number;

  page_size?: number;

  total_pages?: number;

  total_results?: number;
}

export interface DocReqsRequirementType {
  /**
   * Identifies the associated document
   */
  id?: string;

  /**
   * Specifies objective criteria for acceptance
   */
  acceptance_criteria?: DocReqsRequirementType.AcceptanceCriteria;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Describes the requirement type
   */
  description?: string;

  /**
   * Provides one or more examples of acceptable documents
   */
  example?: string;

  /**
   * A short descriptive name for this requirement_type
   */
  name?: string;

  /**
   * Identifies the type of the resource
   */
  record_type?: string;

  /**
   * Defines the type of this requirement type
   */
  type?: 'document' | 'address' | 'textual';

  /**
   * ISO 8601 formatted date-time indicating when the resource was last updated.
   */
  updated_at?: string;
}

export namespace DocReqsRequirementType {
  /**
   * Specifies objective criteria for acceptance
   */
  export interface AcceptanceCriteria {
    /**
     * Specifies the allowed characters as a string
     */
    acceptable_characters?: string;

    /**
     * Specifies the list of strictly possible values for the requirement. Ignored when
     * empty
     */
    acceptable_values?: Array<string>;

    /**
     * Specifies geography-based acceptance criteria
     */
    locality_limit?: string;

    /**
     * Maximum length allowed for the value
     */
    max_length?: number;

    /**
     * Minimum length allowed for the value
     */
    min_length?: number;

    /**
     * Specifies time-based acceptance criteria
     */
    time_limit?: string;
  }
}

export interface HostedNumber {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The messaging hosted phone number (+E.164 format)
   */
  phone_number?: string;

  record_type?: string;

  status?:
    | 'deleted'
    | 'failed'
    | 'failed_activation'
    | 'failed_carrier_rejected'
    | 'failed_ineligible_carrier'
    | 'failed_number_already_hosted'
    | 'failed_number_not_found'
    | 'failed_ownership_verification'
    | 'failed_timeout'
    | 'pending'
    | 'provisioning'
    | 'successful';
}

/**
 * The set of features available for a specific messaging use case (SMS or MMS).
 * Features can vary depending on the characteristics the phone number, as well as
 * its current product configuration.
 */
export interface MessagingFeatureSet {
  /**
   * Send messages to and receive messages from numbers in the same country.
   */
  domestic_two_way: boolean;

  /**
   * Receive messages from numbers in other countries.
   */
  international_inbound: boolean;

  /**
   * Send messages to numbers in other countries.
   */
  international_outbound: boolean;
}

export interface MessagingHostedNumberOrder {
  /**
   * Resource unique identifier.
   */
  id?: string;

  /**
   * Automatically associate the number with this messaging profile ID when the order
   * is complete.
   */
  messaging_profile_id?: string | null;

  phone_numbers?: Array<HostedNumber>;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  status?:
    | 'carrier_rejected'
    | 'compliance_review_failed'
    | 'deleted'
    | 'failed'
    | 'incomplete_documentation'
    | 'incorrect_billing_information'
    | 'ineligible_carrier'
    | 'loa_file_invalid'
    | 'loa_file_successful'
    | 'pending'
    | 'provisioning'
    | 'successful';
}

export interface Metadata {
  /**
   * Current Page based on pagination settings (included when defaults are used.)
   */
  page_number?: number;

  /**
   * Number of results to return per page based on pagination settings (included when
   * defaults are used.)
   */
  page_size?: number;

  /**
   * Total number of pages based on pagination settings
   */
  total_pages?: number;

  /**
   * Total number of results
   */
  total_results?: number;
}

/**
 * High level health metrics about the number and it's messaging sending patterns.
 */
export interface NumberHealthMetrics {
  /**
   * The ratio of messages received to the number of messages sent.
   */
  inbound_outbound_ratio: number;

  /**
   * The number of messages analyzed for the health metrics.
   */
  message_count: number;

  /**
   * The ratio of messages blocked for spam to the number of messages attempted.
   */
  spam_ratio: number;

  /**
   * The ratio of messages sucessfully delivered to the number of messages attempted.
   */
  success_ratio: number;
}

export interface PhoneNumberWithMessagingSettings {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ISO 3166-1 alpha-2 country code.
   */
  country_code?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The messaging products that this number can be registered to use
   */
  eligible_messaging_products?: Array<string>;

  features?: PhoneNumberWithMessagingSettings.Features;

  /**
   * High level health metrics about the number and it's messaging sending patterns.
   */
  health?: NumberHealthMetrics;

  /**
   * The messaging product that the number is registered to use
   */
  messaging_product?: string;

  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id?: string | null;

  /**
   * +E.164 formatted phone number.
   */
  phone_number?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'messaging_phone_number' | 'messaging_settings';

  /**
   * The messaging traffic or use case for which the number is currently configured.
   */
  traffic_type?: string;

  /**
   * The type of the phone number
   */
  type?: 'long-code' | 'toll-free' | 'short-code' | 'longcode' | 'tollfree' | 'shortcode';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace PhoneNumberWithMessagingSettings {
  export interface Features {
    /**
     * The set of features available for a specific messaging use case (SMS or MMS).
     * Features can vary depending on the characteristics the phone number, as well as
     * its current product configuration.
     */
    mms?: Shared.MessagingFeatureSet | null;

    /**
     * The set of features available for a specific messaging use case (SMS or MMS).
     * Features can vary depending on the characteristics the phone number, as well as
     * its current product configuration.
     */
    sms?: Shared.MessagingFeatureSet | null;
  }
}

/**
 * Porting order status
 */
export interface PortingOrderStatus {
  /**
   * A list of 0 or more details about this porting order's status
   */
  details?: Array<PortingOrdersExceptionType>;

  /**
   * The current status of the porting order
   */
  value?:
    | 'draft'
    | 'in-process'
    | 'submitted'
    | 'exception'
    | 'foc-date-confirmed'
    | 'ported'
    | 'cancelled'
    | 'cancel-pending';
}

export interface PortingOrdersExceptionType {
  /**
   * Identifier of an exception type
   */
  code?:
    | 'ACCOUNT_NUMBER_MISMATCH'
    | 'AUTH_PERSON_MISMATCH'
    | 'BTN_ATN_MISMATCH'
    | 'ENTITY_NAME_MISMATCH'
    | 'FOC_EXPIRED'
    | 'FOC_REJECTED'
    | 'LOCATION_MISMATCH'
    | 'LSR_PENDING'
    | 'MAIN_BTN_PORTING'
    | 'OSP_IRRESPONSIVE'
    | 'OTHER'
    | 'PASSCODE_PIN_INVALID'
    | 'PHONE_NUMBER_HAS_SPECIAL_FEATURE'
    | 'PHONE_NUMBER_MISMATCH'
    | 'PHONE_NUMBER_NOT_PORTABLE'
    | 'PORT_TYPE_INCORRECT'
    | 'PORTING_ORDER_SPLIT_REQUIRED'
    | 'POSTAL_CODE_MISMATCH'
    | 'RATE_CENTER_NOT_PORTABLE'
    | 'SV_CONFLICT'
    | 'SV_UNKNOWN_FAILURE';

  /**
   * Description of an exception type
   */
  description?: string;
}

export interface RoomParticipant {
  /**
   * A unique identifier for the room participant.
   */
  id?: string;

  /**
   * Context provided to the given participant through the client SDK
   */
  context?: string;

  /**
   * ISO 8601 timestamp when the participant joined the session.
   */
  joined_at?: string;

  /**
   * ISO 8601 timestamp when the participant left the session.
   */
  left_at?: string;

  record_type?: string;

  /**
   * Identify the room session that participant is part of.
   */
  session_id?: string;

  /**
   * ISO 8601 timestamp when the participant was updated.
   */
  updated_at?: string;
}

export interface ShortCode {
  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id: string | null;

  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ISO 3166-1 alpha-2 country code.
   */
  country_code?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'short_code';

  /**
   * Short digit sequence used to address messages.
   */
  short_code?: string;

  tags?: Array<string>;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface SimCardStatus {
  /**
   * It describes why the SIM card is in the current status.
   */
  reason?: string;

  /**
   * The current status of the SIM card. It will be one of the following: <br/>
   *
   * <ul>
   *  <li><code>registering</code> - the card is being registered</li>
   *  <li><code>enabling</code> - the card is being enabled</li>
   *  <li><code>enabled</code> - the card is enabled and ready for use</li>
   *  <li><code>disabling</code> - the card is being disabled</li>
   *  <li><code>disabled</code> - the card has been disabled and cannot be used</li>
   *  <li><code>data_limit_exceeded</code> - the card has exceeded its data consumption limit</li>
   *  <li><code>setting_standby</code> - the process to set the card in stand by is in progress</li>
   *  <li><code>standby</code> - the card is in stand by</li>
   * </ul>
   * Transitioning between the enabled and disabled states may take a period of time.
   */
  value?:
    | 'registering'
    | 'enabling'
    | 'enabled'
    | 'disabling'
    | 'disabled'
    | 'data_limit_exceeded'
    | 'setting_standby'
    | 'standby';
}

export interface SimpleSimCard {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Indicate whether the SIM card has any pending (in-progress) actions.
   */
  actions_in_progress?: boolean;

  /**
   * List of IMEIs authorized to use a given SIM card.
   */
  authorized_imeis?: Array<string> | null;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The SIM card consumption so far in the current billing cycle.
   */
  current_billing_period_consumed_data?: SimpleSimCard.CurrentBillingPeriodConsumedData;

  /**
   * The SIM card individual data limit configuration.
   */
  data_limit?: SimpleSimCard.DataLimit;

  /**
   * The Embedded Identity Document (eID) for eSIM cards.
   */
  eid?: string | null;

  /**
   * The installation status of the eSIM. Only applicable for eSIM cards.
   */
  esim_installation_status?: 'released' | 'disabled' | null;

  /**
   * The ICCID is the identifier of the specific SIM card/chip. Each SIM is
   * internationally identified by its integrated circuit card identifier (ICCID).
   * ICCIDs are stored in the SIM card's memory and are also engraved or printed on
   * the SIM card body during a process called personalization.
   */
  iccid?: string;

  /**
   * SIM cards are identified on their individual network operators by a unique
   * International Mobile Subscriber Identity (IMSI). <br/> Mobile network operators
   * connect mobile phone calls and communicate with their market SIM cards using
   * their IMSIs. The IMSI is stored in the Subscriber Identity Module (SIM) inside
   * the device and is sent by the device to the appropriate network. It is used to
   * acquire the details of the device in the Home Location Register (HLR) or the
   * Visitor Location Register (VLR).
   */
  imsi?: string;

  /**
   * Mobile Station International Subscriber Directory Number (MSISDN) is a number
   * used to identify a mobile phone number internationally. <br/> MSISDN is defined
   * by the E.164 numbering plan. It includes a country code and a National
   * Destination Code which identifies the subscriber's operator.
   */
  msisdn?: string;

  record_type?: string;

  /**
   * List of resources with actions in progress.
   */
  resources_with_in_progress_actions?: Array<unknown>;

  /**
   * The group SIMCardGroup identification. This attribute can be <code>null</code>
   * when it's present in an associated resource.
   */
  sim_card_group_id?: string;

  status?: SimCardStatus;

  /**
   * Searchable tags associated with the SIM card
   */
  tags?: Array<string>;

  /**
   * The type of SIM card
   */
  type?: 'physical' | 'esim';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The version of the SIM card.
   */
  version?: string;
}

export namespace SimpleSimCard {
  /**
   * The SIM card consumption so far in the current billing cycle.
   */
  export interface CurrentBillingPeriodConsumedData {
    amount?: string;

    unit?: string;
  }

  /**
   * The SIM card individual data limit configuration.
   */
  export interface DataLimit {
    amount?: string;

    unit?: 'MB' | 'GB';
  }
}

export interface SubNumberOrderRegulatoryRequirementWithValue {
  field_type?: 'textual' | 'datetime' | 'address' | 'document';

  /**
   * The value of the requirement, this could be an id to a resource or a string
   * value.
   */
  field_value?: string;

  record_type?: string;

  /**
   * Unique id for a requirement.
   */
  requirement_id?: string;
}
