// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultPaginationForMessagingTollfree,
  type DefaultPaginationForMessagingTollfreeParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Requests extends APIResource {
  /**
   * Submit a new tollfree verification request
   *
   * @example
   * ```ts
   * const verificationRequestEgress =
   *   await client.messagingTollfree.verification.requests.create({
   *     additionalInformation: 'additionalInformation',
   *     businessAddr1: '600 Congress Avenue',
   *     businessCity: 'Austin',
   *     businessContactEmail: 'email@example.com',
   *     businessContactFirstName: 'John',
   *     businessContactLastName: 'Doe',
   *     businessContactPhone: '+18005550100',
   *     businessName: 'Telnyx LLC',
   *     businessState: 'Texas',
   *     businessZip: '78701',
   *     corporateWebsite: 'http://example.com',
   *     isvReseller: 'isvReseller',
   *     messageVolume: '100,000',
   *     optInWorkflow:
   *       "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
   *     optInWorkflowImageURLs: [
   *       { url: 'https://telnyx.com/sign-up' },
   *       { url: 'https://telnyx.com/company/data-privacy' },
   *     ],
   *     phoneNumbers: [{ phoneNumber: '+18773554398' }, { phoneNumber: '+18773554399' }],
   *     productionMessageContent: 'Your Telnyx OTP is XXXX',
   *     useCase: '2FA',
   *     useCaseSummary:
   *       'This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal',
   *   });
   * ```
   */
  create(body: RequestCreateParams, options?: RequestOptions): APIPromise<VerificationRequestEgress> {
    return this._client.post('/messaging_tollfree/verification/requests', { body, ...options });
  }

  /**
   * Get a single verification request by its ID.
   *
   * @example
   * ```ts
   * const verificationRequestStatus =
   *   await client.messagingTollfree.verification.requests.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<VerificationRequestStatus> {
    return this._client.get(path`/messaging_tollfree/verification/requests/${id}`, options);
  }

  /**
   * Update an existing tollfree verification request. This is particularly useful
   * when there are pending customer actions to be taken.
   *
   * @example
   * ```ts
   * const verificationRequestEgress =
   *   await client.messagingTollfree.verification.requests.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       additionalInformation: 'additionalInformation',
   *       businessAddr1: '600 Congress Avenue',
   *       businessCity: 'Austin',
   *       businessContactEmail: 'email@example.com',
   *       businessContactFirstName: 'John',
   *       businessContactLastName: 'Doe',
   *       businessContactPhone: '+18005550100',
   *       businessName: 'Telnyx LLC',
   *       businessState: 'Texas',
   *       businessZip: '78701',
   *       corporateWebsite: 'http://example.com',
   *       isvReseller: 'isvReseller',
   *       messageVolume: '100,000',
   *       optInWorkflow:
   *         "User signs into the Telnyx portal, enters a number and is prompted to select whether they want to use 2FA verification for security purposes. If they've opted in a confirmation message is sent out to the handset",
   *       optInWorkflowImageURLs: [
   *         { url: 'https://telnyx.com/sign-up' },
   *         { url: 'https://telnyx.com/company/data-privacy' },
   *       ],
   *       phoneNumbers: [{ phoneNumber: '+18773554398' }, { phoneNumber: '+18773554399' }],
   *       productionMessageContent: 'Your Telnyx OTP is XXXX',
   *       useCase: '2FA',
   *       useCaseSummary:
   *         'This is a use case where Telnyx sends out 2FA codes to portal users to verify their identity in order to sign into the portal',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: RequestUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VerificationRequestEgress> {
    return this._client.patch(path`/messaging_tollfree/verification/requests/${id}`, { body, ...options });
  }

  /**
   * Get a list of previously-submitted tollfree verification requests
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const verificationRequestStatus of client.messagingTollfree.verification.requests.list(
   *   { page: 1, page_size: 1 },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    query: RequestListParams,
    options?: RequestOptions,
  ): PagePromise<
    VerificationRequestStatusesDefaultPaginationForMessagingTollfree,
    VerificationRequestStatus
  > {
    return this._client.getAPIList(
      '/messaging_tollfree/verification/requests',
      DefaultPaginationForMessagingTollfree<VerificationRequestStatus>,
      { query, ...options },
    );
  }

  /**
   * Delete a verification request
   *
   * A request may only be deleted when when the request is in the "rejected" state.
   *
   * - `HTTP 200`: request successfully deleted
   * - `HTTP 400`: request exists but can't be deleted (i.e. not rejected)
   * - `HTTP 404`: request unknown or already deleted
   *
   * @example
   * ```ts
   * await client.messagingTollfree.verification.requests.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/messaging_tollfree/verification/requests/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type VerificationRequestStatusesDefaultPaginationForMessagingTollfree =
  DefaultPaginationForMessagingTollfree<VerificationRequestStatus>;

/**
 * A phone number
 */
export interface TfPhoneNumber {
  phoneNumber: string;
}

/**
 * The body of a tollfree verification request
 */
export interface TfVerificationRequest {
  /**
   * Any additional information
   */
  additionalInformation: string;

  /**
   * Line 1 of the business address
   */
  businessAddr1: string;

  /**
   * The city of the business address; the first letter should be capitalized
   */
  businessCity: string;

  /**
   * The email address of the business contact
   */
  businessContactEmail: string;

  /**
   * First name of the business contact; there are no specific requirements on
   * formatting
   */
  businessContactFirstName: string;

  /**
   * Last name of the business contact; there are no specific requirements on
   * formatting
   */
  businessContactLastName: string;

  /**
   * The phone number of the business contact in E.164 format
   */
  businessContactPhone: string;

  /**
   * Name of the business; there are no specific formatting requirements
   */
  businessName: string;

  /**
   * The full name of the state (not the 2 letter code) of the business address; the
   * first letter should be capitalized
   */
  businessState: string;

  /**
   * The ZIP code of the business address
   */
  businessZip: string;

  /**
   * A URL, including the scheme, pointing to the corporate website
   */
  corporateWebsite: string;

  /**
   * ISV name
   */
  isvReseller: string;

  /**
   * Message Volume Enums
   */
  messageVolume: Volume;

  /**
   * Human-readable description of how end users will opt into receiving messages
   * from the given phone numbers
   */
  optInWorkflow: string;

  /**
   * Images showing the opt-in workflow
   */
  optInWorkflowImageURLs: Array<URL>;

  /**
   * The phone numbers to request the verification of
   */
  phoneNumbers: Array<TfPhoneNumber>;

  /**
   * An example of a message that will be sent from the given phone numbers
   */
  productionMessageContent: string;

  /**
   * Tollfree usecase categories
   */
  useCase: UseCaseCategories;

  /**
   * Human-readable summary of the desired use-case
   */
  useCaseSummary: string;

  /**
   * Indicates if messaging content requires age gating (e.g., 18+). Defaults to
   * false if not provided.
   */
  ageGatedContent?: boolean;

  /**
   * Line 2 of the business address
   */
  businessAddr2?: string;

  /**
   * ISO 3166-1 alpha-2 country code of the issuing business authority. Must be
   * exactly 2 letters. Automatically converted to uppercase. Required from
   * January 2026.
   */
  businessRegistrationCountry?: string | null;

  /**
   * Official business registration number (e.g., Employer Identification Number
   * (EIN) in the U.S.). Required from January 2026.
   */
  businessRegistrationNumber?: string | null;

  /**
   * Type of business registration being provided. Required from January 2026.
   */
  businessRegistrationType?: string | null;

  /**
   * Campaign Verify Authorization Token required for Political use case submissions
   * starting February 17, 2026. This token is validated by Zipwhip and must be
   * provided for all Political use case verifications after the deadline.
   */
  campaignVerifyAuthorizationToken?: string | null;

  /**
   * Doing Business As (DBA) name if different from legal name
   */
  doingBusinessAs?: string | null;

  /**
   * Business entity classification
   */
  entityType?: TollFreeVerificationEntityType | null;

  /**
   * The message returned when users text 'HELP'
   */
  helpMessageResponse?: string | null;

  /**
   * Message sent to users confirming their opt-in to receive messages
   */
  optInConfirmationResponse?: string | null;

  /**
   * Keywords used to collect and process consumer opt-ins
   */
  optInKeywords?: string | null;

  /**
   * URL pointing to the business's privacy policy. Plain string, no URL format
   * validation.
   */
  privacyPolicyURL?: string | null;

  /**
   * URL pointing to the business's terms and conditions. Plain string, no URL format
   * validation.
   */
  termsAndConditionURL?: string | null;

  /**
   * URL that should receive webhooks relating to this verification request
   */
  webhookUrl?: string;
}

/**
 * Tollfree verification status
 */
export type TfVerificationStatus =
  | 'Verified'
  | 'Rejected'
  | 'Waiting For Vendor'
  | 'Waiting For Customer'
  | 'Waiting For Telnyx'
  | 'In Progress';

/**
 * Business entity classification
 */
export type TollFreeVerificationEntityType =
  | 'SOLE_PROPRIETOR'
  | 'PRIVATE_PROFIT'
  | 'PUBLIC_PROFIT'
  | 'NON_PROFIT'
  | 'GOVERNMENT';

export interface URL {
  url: string;
}

/**
 * Tollfree usecase categories
 */
export type UseCaseCategories =
  | '2FA'
  | 'App Notifications'
  | 'Appointments'
  | 'Auctions'
  | 'Auto Repair Services'
  | 'Bank Transfers'
  | 'Billing'
  | 'Booking Confirmations'
  | 'Business Updates'
  | 'COVID-19 Alerts'
  | 'Career Training'
  | 'Chatbot'
  | 'Conversational / Alerts'
  | 'Courier Services & Deliveries'
  | 'Emergency Alerts'
  | 'Events & Planning'
  | 'Financial Services'
  | 'Fraud Alerts'
  | 'Fundraising'
  | 'General Marketing'
  | 'General School Updates'
  | 'HR / Staffing'
  | 'Healthcare Alerts'
  | 'Housing Community Updates'
  | 'Insurance Services'
  | 'Job Dispatch'
  | 'Legal Services'
  | 'Mixed'
  | 'Motivational Reminders'
  | 'Notary Notifications'
  | 'Order Notifications'
  | 'Political'
  | 'Public Works'
  | 'Real Estate Services'
  | 'Religious Services'
  | 'Repair and Diagnostics Alerts'
  | 'Rewards Program'
  | 'Surveys'
  | 'System Alerts'
  | 'Voting Reminders'
  | 'Waitlist Alerts'
  | 'Webinar Reminders'
  | 'Workshop Alerts';

/**
 * A verification request as it comes out of the database
 */
export interface VerificationRequestEgress {
  id: string;

  additionalInformation: string;

  businessAddr1: string;

  businessCity: string;

  businessContactEmail: string;

  businessContactFirstName: string;

  businessContactLastName: string;

  businessContactPhone: string;

  businessName: string;

  businessState: string;

  businessZip: string;

  corporateWebsite: string;

  isvReseller: string;

  /**
   * Message Volume Enums
   */
  messageVolume: Volume;

  optInWorkflow: string;

  optInWorkflowImageURLs: Array<URL>;

  phoneNumbers: Array<TfPhoneNumber>;

  productionMessageContent: string;

  /**
   * Tollfree usecase categories
   */
  useCase: UseCaseCategories;

  useCaseSummary: string;

  verificationRequestId: string;

  ageGatedContent?: boolean;

  businessAddr2?: string;

  businessRegistrationCountry?: string;

  businessRegistrationNumber?: string;

  businessRegistrationType?: string;

  /**
   * Campaign Verify Authorization Token required for Political use case submissions
   * starting February 17, 2026
   */
  campaignVerifyAuthorizationToken?: string | null;

  doingBusinessAs?: string;

  /**
   * Business entity classification
   */
  entityType?: TollFreeVerificationEntityType;

  helpMessageResponse?: string;

  optInConfirmationResponse?: string;

  optInKeywords?: string;

  privacyPolicyURL?: string;

  termsAndConditionURL?: string;

  /**
   * Tollfree verification status
   */
  verificationStatus?: TfVerificationStatus;

  webhookUrl?: string;
}

/**
 * A verification request and its status, suitable for returning to users
 */
export interface VerificationRequestStatus {
  id: string;

  additionalInformation: string;

  businessAddr1: string;

  businessCity: string;

  businessContactEmail: string;

  businessContactFirstName: string;

  businessContactLastName: string;

  businessContactPhone: string;

  businessName: string;

  businessState: string;

  businessZip: string;

  corporateWebsite: string;

  isvReseller: string;

  /**
   * Message Volume Enums
   */
  messageVolume: Volume;

  optInWorkflow: string;

  optInWorkflowImageURLs: Array<URL>;

  phoneNumbers: Array<TfPhoneNumber>;

  productionMessageContent: string;

  /**
   * Tollfree usecase categories
   */
  useCase: UseCaseCategories;

  useCaseSummary: string;

  /**
   * Tollfree verification status
   */
  verificationStatus: TfVerificationStatus;

  ageGatedContent?: boolean;

  businessAddr2?: string;

  businessRegistrationCountry?: string;

  businessRegistrationNumber?: string;

  businessRegistrationType?: string;

  /**
   * Campaign Verify Authorization Token required for Political use case submissions
   * starting February 17, 2026
   */
  campaignVerifyAuthorizationToken?: string | null;

  createdAt?: string;

  doingBusinessAs?: string;

  /**
   * Business entity classification
   */
  entityType?: TollFreeVerificationEntityType;

  helpMessageResponse?: string;

  optInConfirmationResponse?: string;

  optInKeywords?: string;

  privacyPolicyURL?: string;

  reason?: string;

  termsAndConditionURL?: string;

  updatedAt?: string;

  webhookUrl?: string;
}

/**
 * Message Volume Enums
 */
export type Volume =
  | '10'
  | '100'
  | '1,000'
  | '10,000'
  | '100,000'
  | '250,000'
  | '500,000'
  | '750,000'
  | '1,000,000'
  | '5,000,000'
  | '10,000,000+';

export interface RequestCreateParams {
  /**
   * Any additional information
   */
  additionalInformation: string;

  /**
   * Line 1 of the business address
   */
  businessAddr1: string;

  /**
   * The city of the business address; the first letter should be capitalized
   */
  businessCity: string;

  /**
   * The email address of the business contact
   */
  businessContactEmail: string;

  /**
   * First name of the business contact; there are no specific requirements on
   * formatting
   */
  businessContactFirstName: string;

  /**
   * Last name of the business contact; there are no specific requirements on
   * formatting
   */
  businessContactLastName: string;

  /**
   * The phone number of the business contact in E.164 format
   */
  businessContactPhone: string;

  /**
   * Name of the business; there are no specific formatting requirements
   */
  businessName: string;

  /**
   * The full name of the state (not the 2 letter code) of the business address; the
   * first letter should be capitalized
   */
  businessState: string;

  /**
   * The ZIP code of the business address
   */
  businessZip: string;

  /**
   * A URL, including the scheme, pointing to the corporate website
   */
  corporateWebsite: string;

  /**
   * ISV name
   */
  isvReseller: string;

  /**
   * Message Volume Enums
   */
  messageVolume: Volume;

  /**
   * Human-readable description of how end users will opt into receiving messages
   * from the given phone numbers
   */
  optInWorkflow: string;

  /**
   * Images showing the opt-in workflow
   */
  optInWorkflowImageURLs: Array<URL>;

  /**
   * The phone numbers to request the verification of
   */
  phoneNumbers: Array<TfPhoneNumber>;

  /**
   * An example of a message that will be sent from the given phone numbers
   */
  productionMessageContent: string;

  /**
   * Tollfree usecase categories
   */
  useCase: UseCaseCategories;

  /**
   * Human-readable summary of the desired use-case
   */
  useCaseSummary: string;

  /**
   * Indicates if messaging content requires age gating (e.g., 18+). Defaults to
   * false if not provided.
   */
  ageGatedContent?: boolean;

  /**
   * Line 2 of the business address
   */
  businessAddr2?: string;

  /**
   * ISO 3166-1 alpha-2 country code of the issuing business authority. Must be
   * exactly 2 letters. Automatically converted to uppercase. Required from
   * January 2026.
   */
  businessRegistrationCountry?: string | null;

  /**
   * Official business registration number (e.g., Employer Identification Number
   * (EIN) in the U.S.). Required from January 2026.
   */
  businessRegistrationNumber?: string | null;

  /**
   * Type of business registration being provided. Required from January 2026.
   */
  businessRegistrationType?: string | null;

  /**
   * Campaign Verify Authorization Token required for Political use case submissions
   * starting February 17, 2026. This token is validated by Zipwhip and must be
   * provided for all Political use case verifications after the deadline.
   */
  campaignVerifyAuthorizationToken?: string | null;

  /**
   * Doing Business As (DBA) name if different from legal name
   */
  doingBusinessAs?: string | null;

  /**
   * Business entity classification
   */
  entityType?: TollFreeVerificationEntityType | null;

  /**
   * The message returned when users text 'HELP'
   */
  helpMessageResponse?: string | null;

  /**
   * Message sent to users confirming their opt-in to receive messages
   */
  optInConfirmationResponse?: string | null;

  /**
   * Keywords used to collect and process consumer opt-ins
   */
  optInKeywords?: string | null;

  /**
   * URL pointing to the business's privacy policy. Plain string, no URL format
   * validation.
   */
  privacyPolicyURL?: string | null;

  /**
   * URL pointing to the business's terms and conditions. Plain string, no URL format
   * validation.
   */
  termsAndConditionURL?: string | null;

  /**
   * URL that should receive webhooks relating to this verification request
   */
  webhookUrl?: string;
}

export interface RequestUpdateParams {
  /**
   * Any additional information
   */
  additionalInformation: string;

  /**
   * Line 1 of the business address
   */
  businessAddr1: string;

  /**
   * The city of the business address; the first letter should be capitalized
   */
  businessCity: string;

  /**
   * The email address of the business contact
   */
  businessContactEmail: string;

  /**
   * First name of the business contact; there are no specific requirements on
   * formatting
   */
  businessContactFirstName: string;

  /**
   * Last name of the business contact; there are no specific requirements on
   * formatting
   */
  businessContactLastName: string;

  /**
   * The phone number of the business contact in E.164 format
   */
  businessContactPhone: string;

  /**
   * Name of the business; there are no specific formatting requirements
   */
  businessName: string;

  /**
   * The full name of the state (not the 2 letter code) of the business address; the
   * first letter should be capitalized
   */
  businessState: string;

  /**
   * The ZIP code of the business address
   */
  businessZip: string;

  /**
   * A URL, including the scheme, pointing to the corporate website
   */
  corporateWebsite: string;

  /**
   * ISV name
   */
  isvReseller: string;

  /**
   * Message Volume Enums
   */
  messageVolume: Volume;

  /**
   * Human-readable description of how end users will opt into receiving messages
   * from the given phone numbers
   */
  optInWorkflow: string;

  /**
   * Images showing the opt-in workflow
   */
  optInWorkflowImageURLs: Array<URL>;

  /**
   * The phone numbers to request the verification of
   */
  phoneNumbers: Array<TfPhoneNumber>;

  /**
   * An example of a message that will be sent from the given phone numbers
   */
  productionMessageContent: string;

  /**
   * Tollfree usecase categories
   */
  useCase: UseCaseCategories;

  /**
   * Human-readable summary of the desired use-case
   */
  useCaseSummary: string;

  /**
   * Indicates if messaging content requires age gating (e.g., 18+). Defaults to
   * false if not provided.
   */
  ageGatedContent?: boolean;

  /**
   * Line 2 of the business address
   */
  businessAddr2?: string;

  /**
   * ISO 3166-1 alpha-2 country code of the issuing business authority. Must be
   * exactly 2 letters. Automatically converted to uppercase. Required from
   * January 2026.
   */
  businessRegistrationCountry?: string | null;

  /**
   * Official business registration number (e.g., Employer Identification Number
   * (EIN) in the U.S.). Required from January 2026.
   */
  businessRegistrationNumber?: string | null;

  /**
   * Type of business registration being provided. Required from January 2026.
   */
  businessRegistrationType?: string | null;

  /**
   * Campaign Verify Authorization Token required for Political use case submissions
   * starting February 17, 2026. This token is validated by Zipwhip and must be
   * provided for all Political use case verifications after the deadline.
   */
  campaignVerifyAuthorizationToken?: string | null;

  /**
   * Doing Business As (DBA) name if different from legal name
   */
  doingBusinessAs?: string | null;

  /**
   * Business entity classification
   */
  entityType?: TollFreeVerificationEntityType | null;

  /**
   * The message returned when users text 'HELP'
   */
  helpMessageResponse?: string | null;

  /**
   * Message sent to users confirming their opt-in to receive messages
   */
  optInConfirmationResponse?: string | null;

  /**
   * Keywords used to collect and process consumer opt-ins
   */
  optInKeywords?: string | null;

  /**
   * URL pointing to the business's privacy policy. Plain string, no URL format
   * validation.
   */
  privacyPolicyURL?: string | null;

  /**
   * URL pointing to the business's terms and conditions. Plain string, no URL format
   * validation.
   */
  termsAndConditionURL?: string | null;

  /**
   * URL that should receive webhooks relating to this verification request
   */
  webhookUrl?: string;
}

export interface RequestListParams extends DefaultPaginationForMessagingTollfreeParams {
  date_end?: string;

  date_start?: string;

  phone_number?: string;

  /**
   * Tollfree verification status
   */
  status?: TfVerificationStatus;
}

export declare namespace Requests {
  export {
    type TfPhoneNumber as TfPhoneNumber,
    type TfVerificationRequest as TfVerificationRequest,
    type TfVerificationStatus as TfVerificationStatus,
    type TollFreeVerificationEntityType as TollFreeVerificationEntityType,
    type URL as URL,
    type UseCaseCategories as UseCaseCategories,
    type VerificationRequestEgress as VerificationRequestEgress,
    type VerificationRequestStatus as VerificationRequestStatus,
    type Volume as Volume,
    type VerificationRequestStatusesDefaultPaginationForMessagingTollfree as VerificationRequestStatusesDefaultPaginationForMessagingTollfree,
    type RequestCreateParams as RequestCreateParams,
    type RequestUpdateParams as RequestUpdateParams,
    type RequestListParams as RequestListParams,
  };
}
