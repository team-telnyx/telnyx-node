// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PhoneNumberCampaignsAPI from '../phone-number-campaigns';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PhoneNumberCampaigns extends APIResource {
  /**
   * Create New Phone Number Campaign
   *
   * @example
   * ```ts
   * const phoneNumberCampaign =
   *   await client.number10dlc.phoneNumberCampaigns.create({
   *     campaignId: '4b300178-131c-d902-d54e-72d90ba1620j',
   *     phoneNumber: '+18005550199',
   *   });
   * ```
   */
  create(
    body: PhoneNumberCampaignCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberCampaignsAPI.PhoneNumberCampaign> {
    return this._client.post('/10dlc/phone_number_campaigns', { body, ...options });
  }

  /**
   * Retrieve an individual phone number/campaign assignment by `phoneNumber`.
   *
   * @example
   * ```ts
   * const phoneNumberCampaign =
   *   await client.number10dlc.phoneNumberCampaigns.retrieve(
   *     'phoneNumber',
   *   );
   * ```
   */
  retrieve(
    phoneNumber: string,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberCampaignsAPI.PhoneNumberCampaign> {
    return this._client.get(path`/10dlc/phone_number_campaigns/${phoneNumber}`, options);
  }

  /**
   * Create New Phone Number Campaign
   *
   * @example
   * ```ts
   * const phoneNumberCampaign =
   *   await client.number10dlc.phoneNumberCampaigns.update(
   *     'phoneNumber',
   *     {
   *       campaignId: '4b300178-131c-d902-d54e-72d90ba1620j',
   *       body_phoneNumber: '+18005550199',
   *     },
   *   );
   * ```
   */
  update(
    pathPhoneNumber: string,
    body: PhoneNumberCampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberCampaignsAPI.PhoneNumberCampaign> {
    return this._client.put(path`/10dlc/phone_number_campaigns/${pathPhoneNumber}`, { body, ...options });
  }

  /**
   * Retrieve All Phone Number Campaigns
   *
   * @example
   * ```ts
   * const phoneNumberCampaigns =
   *   await client.number10dlc.phoneNumberCampaigns.list();
   * ```
   */
  list(
    query: PhoneNumberCampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberCampaignListResponse> {
    return this._client.get('/10dlc/phone_number_campaigns', { query, ...options });
  }

  /**
   * This endpoint allows you to remove a campaign assignment from the supplied
   * `phoneNumber`.
   *
   * @example
   * ```ts
   * const phoneNumberCampaign =
   *   await client.number10dlc.phoneNumberCampaigns.delete(
   *     'phoneNumber',
   *   );
   * ```
   */
  delete(
    phoneNumber: string,
    options?: RequestOptions,
  ): APIPromise<PhoneNumberCampaignsAPI.PhoneNumberCampaign> {
    return this._client.delete(path`/10dlc/phone_number_campaigns/${phoneNumber}`, options);
  }
}

export interface PhoneNumberCampaignListResponse {
  page: number;

  records: Array<PhoneNumberCampaignsAPI.PhoneNumberCampaign>;

  totalRecords: number;
}

export interface PhoneNumberCampaignCreateParams {
  /**
   * The ID of the campaign you want to link to the specified phone number.
   */
  campaignId: string;

  /**
   * The phone number you want to link to a specified campaign.
   */
  phoneNumber: string;
}

export interface PhoneNumberCampaignUpdateParams {
  /**
   * The ID of the campaign you want to link to the specified phone number.
   */
  campaignId: string;

  /**
   * The phone number you want to link to a specified campaign.
   */
  body_phoneNumber: string;
}

export interface PhoneNumberCampaignListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[telnyx_campaign_id], filter[telnyx_brand_id], filter[tcr_campaign_id],
   * filter[tcr_brand_id]
   */
  filter?: PhoneNumberCampaignListParams.Filter;

  page?: number;

  recordsPerPage?: number;

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * createdAt in descending order.
   */
  sort?:
    | 'assignmentStatus'
    | '-assignmentStatus'
    | 'createdAt'
    | '-createdAt'
    | 'phoneNumber'
    | '-phoneNumber';
}

export namespace PhoneNumberCampaignListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[telnyx_campaign_id], filter[telnyx_brand_id], filter[tcr_campaign_id],
   * filter[tcr_brand_id]
   */
  export interface Filter {
    /**
     * Filter results by the TCR Brand id
     */
    tcr_brand_id?: string;

    /**
     * Filter results by the TCR Campaign id
     */
    tcr_campaign_id?: string;

    /**
     * Filter results by the Telnyx Brand id
     */
    telnyx_brand_id?: string;

    /**
     * Filter results by the Telnyx Campaign id
     */
    telnyx_campaign_id?: string;
  }
}

export declare namespace PhoneNumberCampaigns {
  export {
    type PhoneNumberCampaignListResponse as PhoneNumberCampaignListResponse,
    type PhoneNumberCampaignCreateParams as PhoneNumberCampaignCreateParams,
    type PhoneNumberCampaignUpdateParams as PhoneNumberCampaignUpdateParams,
    type PhoneNumberCampaignListParams as PhoneNumberCampaignListParams,
  };
}
