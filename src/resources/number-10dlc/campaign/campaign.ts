// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CampaignAPI from '../../campaign/campaign';
import * as OsrAPI from './osr';
import { Osr, OsrGetAttributesResponse } from './osr';
import * as UsecaseAPI from './usecase';
import { Usecase, UsecaseGetCostParams, UsecaseGetCostResponse } from './usecase';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Campaign extends APIResource {
  usecase: UsecaseAPI.Usecase = new UsecaseAPI.Usecase(this._client);
  osr: OsrAPI.Osr = new OsrAPI.Osr(this._client);

  /**
   * Retrieve campaign details by `campaignId`.
   *
   * @example
   * ```ts
   * const telnyxCampaignCsp =
   *   await client.number10dlc.campaign.retrieve('campaignId');
   * ```
   */
  retrieve(campaignID: string, options?: RequestOptions): APIPromise<CampaignAPI.TelnyxCampaignCsp> {
    return this._client.get(path`/10dlc/campaign/${campaignID}`, options);
  }

  /**
   * Update a campaign's properties by `campaignId`. **Please note:** only sample
   * messages are editable.
   *
   * @example
   * ```ts
   * const telnyxCampaignCsp =
   *   await client.number10dlc.campaign.update('campaignId');
   * ```
   */
  update(
    campaignID: string,
    body: CampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampaignAPI.TelnyxCampaignCsp> {
    return this._client.put(path`/10dlc/campaign/${campaignID}`, { body, ...options });
  }

  /**
   * Retrieve a list of campaigns associated with a supplied `brandId`.
   *
   * @example
   * ```ts
   * const campaigns = await client.number10dlc.campaign.list({
   *   brandId: 'brandId',
   * });
   * ```
   */
  list(query: CampaignListParams, options?: RequestOptions): APIPromise<CampaignListResponse> {
    return this._client.get('/10dlc/campaign', { query, ...options });
  }

  /**
   * Terminate a campaign. Note that once deactivated, a campaign cannot be restored.
   *
   * @example
   * ```ts
   * const campaign = await client.number10dlc.campaign.delete(
   *   'campaignId',
   * );
   * ```
   */
  delete(campaignID: string, options?: RequestOptions): APIPromise<CampaignDeleteResponse> {
    return this._client.delete(path`/10dlc/campaign/${campaignID}`, options);
  }

  /**
   * Manually accept a campaign shared with Telnyx
   *
   * @example
   * ```ts
   * const response =
   *   await client.number10dlc.campaign.acceptSharing(
   *     'C26F1KLZN',
   *   );
   * ```
   */
  acceptSharing(campaignID: string, options?: RequestOptions): APIPromise<CampaignAcceptSharingResponse> {
    return this._client.post(path`/10dlc/campaign/acceptSharing/${campaignID}`, options);
  }

  /**
   * Get the campaign metadata for each MNO it was submitted to.
   *
   * @example
   * ```ts
   * const response =
   *   await client.number10dlc.campaign.getMnoMetadata(
   *     'campaignId',
   *   );
   * ```
   */
  getMnoMetadata(campaignID: string, options?: RequestOptions): APIPromise<CampaignGetMnoMetadataResponse> {
    return this._client.get(path`/10dlc/campaign/${campaignID}/mnoMetadata`, options);
  }

  /**
   * Retrieve campaign's operation status at MNO level.
   *
   * @example
   * ```ts
   * const response =
   *   await client.number10dlc.campaign.getOperationStatus(
   *     'campaignId',
   *   );
   * ```
   */
  getOperationStatus(
    campaignID: string,
    options?: RequestOptions,
  ): APIPromise<CampaignGetOperationStatusResponse> {
    return this._client.get(path`/10dlc/campaign/${campaignID}/operationStatus`, options);
  }

  /**
   * Get Sharing Status
   *
   * @example
   * ```ts
   * const response =
   *   await client.number10dlc.campaign.getSharingStatus(
   *     'campaignId',
   *   );
   * ```
   */
  getSharingStatus(
    campaignID: string,
    options?: RequestOptions,
  ): APIPromise<CampaignGetSharingStatusResponse> {
    return this._client.get(path`/10dlc/campaign/${campaignID}/sharing`, options);
  }

  /**
   * Submits an appeal for rejected native campaigns in TELNYX_FAILED or MNO_REJECTED
   * status. The appeal is recorded for manual compliance team review and the
   * campaign status is reset to TCR_ACCEPTED. Note: Appeal forwarding is handled
   * manually to allow proper review before incurring upstream charges.
   *
   * @example
   * ```ts
   * const response =
   *   await client.number10dlc.campaign.submitAppeal(
   *     '5eb13888-32b7-4cab-95e6-d834dde21d64',
   *     {
   *       appeal_reason:
   *         'The website has been updated to include the required privacy policy and terms of service.',
   *     },
   *   );
   * ```
   */
  submitAppeal(
    campaignID: string,
    body: CampaignSubmitAppealParams,
    options?: RequestOptions,
  ): APIPromise<CampaignSubmitAppealResponse> {
    return this._client.post(path`/10dlc/campaign/${campaignID}/appeal`, { body, ...options });
  }
}

export interface CampaignListResponse {
  page?: number;

  records?: Array<CampaignListResponse.Record>;

  totalRecords?: number;
}

export namespace CampaignListResponse {
  export interface Record {
    /**
     * Age gated content in campaign.
     */
    ageGated?: boolean;

    /**
     * Number of phone numbers associated with the campaign
     */
    assignedPhoneNumbersCount?: number;

    /**
     * Campaign subscription auto-renewal status.
     */
    autoRenewal?: boolean;

    /**
     * Campaign recent billed date.
     */
    billedDate?: string;

    /**
     * Display or marketing name of the brand.
     */
    brandDisplayName?: string;

    /**
     * Unique identifier assigned to the brand.
     */
    brandId?: string;

    /**
     * Unique identifier for a campaign.
     */
    campaignId?: string;

    /**
     * Campaign status
     */
    campaignStatus?:
      | 'TCR_PENDING'
      | 'TCR_SUSPENDED'
      | 'TCR_EXPIRED'
      | 'TCR_ACCEPTED'
      | 'TCR_FAILED'
      | 'TELNYX_ACCEPTED'
      | 'TELNYX_FAILED'
      | 'MNO_PENDING'
      | 'MNO_ACCEPTED'
      | 'MNO_REJECTED'
      | 'MNO_PROVISIONED'
      | 'MNO_PROVISIONING_FAILED';

    /**
     * Unix timestamp when campaign was created.
     */
    createDate?: string;

    /**
     * Alphanumeric identifier of the CSP associated with this campaign.
     */
    cspId?: string;

    /**
     * Summary description of this campaign.
     */
    description?: string;

    directLending?: boolean;

    /**
     * Does message generated by the campaign include URL link in SMS?
     */
    embeddedLink?: boolean;

    /**
     * Sample of an embedded link that will be sent to subscribers.
     */
    embeddedLinkSample?: string;

    /**
     * Does message generated by the campaign include phone number in SMS?
     */
    embeddedPhone?: boolean;

    /**
     * Failure reasons if campaign submission failed
     */
    failureReasons?: string;

    /**
     * Subscriber help keywords. Multiple keywords are comma separated without space.
     */
    helpKeywords?: string;

    /**
     * Help message of the campaign.
     */
    helpMessage?: string;

    /**
     * Indicates whether the campaign has a T-Mobile number pool ID associated with it.
     */
    isTMobileNumberPoolingEnabled?: boolean;

    /**
     * Indicates whether the campaign is registered with T-Mobile.
     */
    isTMobileRegistered?: boolean;

    /**
     * Indicates whether the campaign is suspended with T-Mobile.
     */
    isTMobileSuspended?: boolean;

    /**
     * Message flow description.
     */
    messageFlow?: string;

    /**
     * Campaign created from mock brand. Mocked campaign cannot be shared with an
     * upstream CNP.
     */
    mock?: boolean;

    /**
     * When the campaign would be due for its next renew/bill date.
     */
    nextRenewalOrExpirationDate?: string;

    /**
     * Does campaign utilize pool of phone numbers?
     */
    numberPool?: boolean;

    /**
     * Subscriber opt-in keywords. Multiple keywords are comma separated without space.
     */
    optinKeywords?: string;

    /**
     * Subscriber opt-in message.
     */
    optinMessage?: string;

    /**
     * Subscriber opt-out keywords. Multiple keywords are comma separated without
     * space.
     */
    optoutKeywords?: string;

    /**
     * Subscriber opt-out message.
     */
    optoutMessage?: string;

    /**
     * Link to the campaign's privacy policy.
     */
    privacyPolicyLink?: string;

    /**
     * Caller supplied campaign reference ID. If supplied, the value must be unique
     * across all submitted campaigns. Can be used to prevent duplicate campaign
     * registrations.
     */
    referenceId?: string;

    /**
     * Alphanumeric identifier of the reseller that you want to associate with this
     * campaign.
     */
    resellerId?: string;

    /**
     * Message sample. Some campaign tiers require 1 or more message samples.
     */
    sample1?: string;

    /**
     * Message sample. Some campaign tiers require 2 or more message samples.
     */
    sample2?: string;

    /**
     * Message sample. Some campaign tiers require 3 or more message samples.
     */
    sample3?: string;

    /**
     * Message sample. Some campaign tiers require 4 or more message samples.
     */
    sample4?: string;

    /**
     * Message sample. Some campaign tiers require 5 or more message samples.
     */
    sample5?: string;

    /**
     * Current campaign status. Possible values: ACTIVE, EXPIRED. A newly created
     * campaign defaults to ACTIVE status.
     */
    status?: string;

    /**
     * Campaign submission status
     */
    submissionStatus?: 'CREATED' | 'FAILED' | 'PENDING';

    /**
     * Does campaign responds to help keyword(s)?
     */
    subscriberHelp?: boolean;

    /**
     * Does campaign require subscriber to opt-in before SMS is sent to subscriber?
     */
    subscriberOptin?: boolean;

    /**
     * Does campaign support subscriber opt-out keyword(s)?
     */
    subscriberOptout?: boolean;

    /**
     * Campaign sub-usecases. Must be of defined valid sub-usecase types. Use
     * `/registry/enum/usecase` operation to retrieve list of valid sub-usecases
     */
    subUsecases?: Array<string>;

    /**
     * Unique identifier assigned to the brand by the registry.
     */
    tcrBrandId?: string;

    /**
     * Unique identifier assigned to the campaign by the registry.
     */
    tcrCampaignId?: string;

    /**
     * Is terms & conditions accepted?
     */
    termsAndConditions?: boolean;

    /**
     * Link to the campaign's terms and conditions.
     */
    termsAndConditionsLink?: string;

    /**
     * Campaign usecase. Must be of defined valid types. Use `/registry/enum/usecase`
     * operation to retrieve usecases available for given brand.
     */
    usecase?: string;

    /**
     * @deprecated Business/industry segment of this campaign (Deprecated). Must be of
     * defined valid types. Use `/registry/enum/vertical` operation to retrieve
     * verticals available for given brand, vertical combination.
     *
     * This field is deprecated.
     */
    vertical?: string;

    /**
     * Failover webhook to which campaign status updates are sent.
     */
    webhookFailoverURL?: string;

    /**
     * Webhook to which campaign status updates are sent.
     */
    webhookURL?: string;
  }
}

export interface CampaignDeleteResponse {
  time: number;

  message?: string;

  record_type?: string;
}

export type CampaignAcceptSharingResponse = { [key: string]: unknown };

export interface CampaignGetMnoMetadataResponse {
  '10999'?: CampaignGetMnoMetadataResponse._10999;

  [k: string]: unknown;
}

export namespace CampaignGetMnoMetadataResponse {
  export interface _10999 {
    minMsgSamples: number;

    mno: string;

    mnoReview: boolean;

    mnoSupport: boolean;

    noEmbeddedLink: boolean;

    noEmbeddedPhone: boolean;

    qualify: boolean;

    reqSubscriberHelp: boolean;

    reqSubscriberOptin: boolean;

    reqSubscriberOptout: boolean;
  }
}

export type CampaignGetOperationStatusResponse = { [key: string]: unknown };

export interface CampaignGetSharingStatusResponse {
  sharedByMe?: CampaignAPI.CampaignSharingStatus;

  sharedWithMe?: CampaignAPI.CampaignSharingStatus;
}

export interface CampaignSubmitAppealResponse {
  /**
   * Timestamp when the appeal was submitted
   */
  appealed_at?: string;
}

export interface CampaignUpdateParams {
  /**
   * Help message of the campaign.
   */
  autoRenewal?: boolean;

  /**
   * Help message of the campaign.
   */
  helpMessage?: string;

  /**
   * Message flow description.
   */
  messageFlow?: string;

  /**
   * Alphanumeric identifier of the reseller that you want to associate with this
   * campaign.
   */
  resellerId?: string;

  /**
   * Message sample. Some campaign tiers require 1 or more message samples.
   */
  sample1?: string;

  /**
   * Message sample. Some campaign tiers require 2 or more message samples.
   */
  sample2?: string;

  /**
   * Message sample. Some campaign tiers require 3 or more message samples.
   */
  sample3?: string;

  /**
   * Message sample. Some campaign tiers require 4 or more message samples.
   */
  sample4?: string;

  /**
   * Message sample. Some campaign tiers require 5 or more message samples.
   */
  sample5?: string;

  /**
   * Webhook failover to which campaign status updates are sent.
   */
  webhookFailoverURL?: string;

  /**
   * Webhook to which campaign status updates are sent.
   */
  webhookURL?: string;
}

export interface CampaignListParams {
  brandId: string;

  /**
   * The 1-indexed page number to get. The default value is `1`.
   */
  page?: number;

  /**
   * The amount of records per page, limited to between 1 and 500 inclusive. The
   * default value is `10`.
   */
  recordsPerPage?: number;

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * createdAt in descending order.
   */
  sort?:
    | 'assignedPhoneNumbersCount'
    | '-assignedPhoneNumbersCount'
    | 'campaignId'
    | '-campaignId'
    | 'createdAt'
    | '-createdAt'
    | 'status'
    | '-status'
    | 'tcrCampaignId'
    | '-tcrCampaignId';
}

export interface CampaignSubmitAppealParams {
  /**
   * Detailed explanation of why the campaign should be reconsidered and what changes
   * have been made to address the rejection reason.
   */
  appeal_reason: string;
}

Campaign.Usecase = Usecase;
Campaign.Osr = Osr;

export declare namespace Campaign {
  export {
    type CampaignListResponse as CampaignListResponse,
    type CampaignDeleteResponse as CampaignDeleteResponse,
    type CampaignAcceptSharingResponse as CampaignAcceptSharingResponse,
    type CampaignGetMnoMetadataResponse as CampaignGetMnoMetadataResponse,
    type CampaignGetOperationStatusResponse as CampaignGetOperationStatusResponse,
    type CampaignGetSharingStatusResponse as CampaignGetSharingStatusResponse,
    type CampaignSubmitAppealResponse as CampaignSubmitAppealResponse,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSubmitAppealParams as CampaignSubmitAppealParams,
  };

  export {
    Usecase as Usecase,
    type UsecaseGetCostResponse as UsecaseGetCostResponse,
    type UsecaseGetCostParams as UsecaseGetCostParams,
  };

  export { Osr as Osr, type OsrGetAttributesResponse as OsrGetAttributesResponse };
}
