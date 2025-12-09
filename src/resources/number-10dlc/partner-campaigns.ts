// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PartnerCampaignsAPI from '../partner-campaigns';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PartnerCampaigns extends APIResource {
  /**
   * Retrieve campaign details by `campaignId`.
   *
   * @example
   * ```ts
   * const telnyxDownstreamCampaign =
   *   await client.number10dlc.partnerCampaigns.retrieve(
   *     'campaignId',
   *   );
   * ```
   */
  retrieve(
    campaignID: string,
    options?: RequestOptions,
  ): APIPromise<PartnerCampaignsAPI.TelnyxDownstreamCampaign> {
    return this._client.get(path`/10dlc/partner_campaigns/${campaignID}`, options);
  }

  /**
   * Update campaign details by `campaignId`. **Please note:** Only webhook urls are
   * editable.
   *
   * @example
   * ```ts
   * const telnyxDownstreamCampaign =
   *   await client.number10dlc.partnerCampaigns.update(
   *     'campaignId',
   *   );
   * ```
   */
  update(
    campaignID: string,
    body: PartnerCampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PartnerCampaignsAPI.TelnyxDownstreamCampaign> {
    return this._client.patch(path`/10dlc/partner_campaigns/${campaignID}`, { body, ...options });
  }

  /**
   * Retrieve all partner campaigns you have shared to Telnyx in a paginated fashion.
   *
   * This endpoint is currently limited to only returning shared campaigns that
   * Telnyx has accepted. In other words, shared but pending campaigns are currently
   * omitted from the response from this endpoint.
   *
   * @example
   * ```ts
   * const partnerCampaigns =
   *   await client.number10dlc.partnerCampaigns.list();
   * ```
   */
  list(
    query: PartnerCampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PartnerCampaignListResponse> {
    return this._client.get('/10dlc/partner_campaigns', { query, ...options });
  }
}

export interface PartnerCampaignListResponse {
  page?: number;

  records?: Array<PartnerCampaignsAPI.TelnyxDownstreamCampaign>;

  totalRecords?: number;
}

export interface PartnerCampaignUpdateParams {
  /**
   * Webhook failover to which campaign status updates are sent.
   */
  webhookFailoverURL?: string;

  /**
   * Webhook to which campaign status updates are sent.
   */
  webhookURL?: string;
}

export interface PartnerCampaignListParams {
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
    | 'brandDisplayName'
    | '-brandDisplayName'
    | 'tcrBrandId'
    | '-tcrBranId'
    | 'tcrCampaignId'
    | '-tcrCampaignId'
    | 'createdAt'
    | '-createdAt'
    | 'campaignStatus'
    | '-campaignStatus';
}

export declare namespace PartnerCampaigns {
  export {
    type PartnerCampaignListResponse as PartnerCampaignListResponse,
    type PartnerCampaignUpdateParams as PartnerCampaignUpdateParams,
    type PartnerCampaignListParams as PartnerCampaignListParams,
  };
}
