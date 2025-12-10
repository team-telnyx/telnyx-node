// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PhoneNumberCampaignsAPI from './phone-number-campaigns';
import {
  PhoneNumberCampaign,
  PhoneNumberCampaignCreate,
  PhoneNumberCampaignCreateParams,
  PhoneNumberCampaignListParams,
  PhoneNumberCampaignUpdateParams,
  PhoneNumberCampaigns,
  PhoneNumberCampaignsPerPagePaginationV2,
} from './phone-number-campaigns';
import * as BrandAPI from './brand/brand';
import {
  AltBusinessIDType,
  Brand,
  BrandCreateParams,
  BrandGetFeedbackResponse,
  BrandIdentityStatus,
  BrandListParams,
  BrandListResponse,
  BrandListResponsesPerPagePaginationV2,
  BrandRetrieveResponse,
  BrandRetrieveSMSOtpStatusParams,
  BrandRetrieveSMSOtpStatusResponse,
  BrandUpdateParams,
  EntityType,
  StockExchange,
  TelnyxBrand,
  Vertical,
} from './brand/brand';
import * as CampaignBuilderAPI from './campaign-builder/campaign-builder';
import { CampaignBuilder, CampaignBuilderSubmitParams } from './campaign-builder/campaign-builder';
import * as CampaignAPI from './campaign/campaign';
import {
  Campaign,
  CampaignAcceptSharingResponse,
  CampaignDeactivateResponse,
  CampaignGetMnoMetadataResponse,
  CampaignGetOperationStatusResponse,
  CampaignGetSharingStatusResponse,
  CampaignListParams,
  CampaignListResponse,
  CampaignListResponsesPerPagePaginationV2,
  CampaignSharingStatus,
  CampaignSubmitAppealParams,
  CampaignSubmitAppealResponse,
  CampaignUpdateParams,
  TelnyxCampaignCsp,
} from './campaign/campaign';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Number10dlc extends APIResource {
  brand: BrandAPI.Brand = new BrandAPI.Brand(this._client);
  campaign: CampaignAPI.Campaign = new CampaignAPI.Campaign(this._client);
  campaignBuilder: CampaignBuilderAPI.CampaignBuilder = new CampaignBuilderAPI.CampaignBuilder(this._client);
  phoneNumberCampaigns: PhoneNumberCampaignsAPI.PhoneNumberCampaigns =
    new PhoneNumberCampaignsAPI.PhoneNumberCampaigns(this._client);

  /**
   * Get Enum
   *
   * @example
   * ```ts
   * const response = await client.number10dlc.getEnum('mno');
   * ```
   */
  getEnum(
    endpoint:
      | 'mno'
      | 'optionalAttributes'
      | 'usecase'
      | 'vertical'
      | 'altBusinessIdType'
      | 'brandIdentityStatus'
      | 'brandRelationship'
      | 'campaignStatus'
      | 'entityType'
      | 'extVettingProvider'
      | 'vettingStatus'
      | 'brandStatus'
      | 'operationStatus'
      | 'approvedPublicCompany'
      | 'stockExchange'
      | 'vettingClass',
    options?: RequestOptions,
  ): APIPromise<Number10dlcGetEnumResponse> {
    return this._client.get(path`/10dlc/enum/${endpoint}`, options);
  }
}

export type Number10dlcGetEnumResponse =
  | Array<string>
  | Array<{ [key: string]: unknown }>
  | { [key: string]: unknown }
  | { [key: string]: unknown }
  | Number10dlcGetEnumResponse.EnumPaginatedResponse;

export namespace Number10dlcGetEnumResponse {
  export interface EnumPaginatedResponse {
    page: number;

    records: Array<{ [key: string]: unknown }>;

    totalRecords: number;
  }
}

Number10dlc.Brand = Brand;
Number10dlc.Campaign = Campaign;
Number10dlc.CampaignBuilder = CampaignBuilder;
Number10dlc.PhoneNumberCampaigns = PhoneNumberCampaigns;

export declare namespace Number10dlc {
  export { type Number10dlcGetEnumResponse as Number10dlcGetEnumResponse };

  export {
    Brand as Brand,
    type AltBusinessIDType as AltBusinessIDType,
    type BrandIdentityStatus as BrandIdentityStatus,
    type EntityType as EntityType,
    type StockExchange as StockExchange,
    type TelnyxBrand as TelnyxBrand,
    type Vertical as Vertical,
    type BrandRetrieveResponse as BrandRetrieveResponse,
    type BrandListResponse as BrandListResponse,
    type BrandGetFeedbackResponse as BrandGetFeedbackResponse,
    type BrandRetrieveSMSOtpStatusResponse as BrandRetrieveSMSOtpStatusResponse,
    type BrandListResponsesPerPagePaginationV2 as BrandListResponsesPerPagePaginationV2,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
    type BrandRetrieveSMSOtpStatusParams as BrandRetrieveSMSOtpStatusParams,
  };

  export {
    Campaign as Campaign,
    type CampaignSharingStatus as CampaignSharingStatus,
    type TelnyxCampaignCsp as TelnyxCampaignCsp,
    type CampaignListResponse as CampaignListResponse,
    type CampaignAcceptSharingResponse as CampaignAcceptSharingResponse,
    type CampaignDeactivateResponse as CampaignDeactivateResponse,
    type CampaignGetMnoMetadataResponse as CampaignGetMnoMetadataResponse,
    type CampaignGetOperationStatusResponse as CampaignGetOperationStatusResponse,
    type CampaignGetSharingStatusResponse as CampaignGetSharingStatusResponse,
    type CampaignSubmitAppealResponse as CampaignSubmitAppealResponse,
    type CampaignListResponsesPerPagePaginationV2 as CampaignListResponsesPerPagePaginationV2,
    type CampaignUpdateParams as CampaignUpdateParams,
    type CampaignListParams as CampaignListParams,
    type CampaignSubmitAppealParams as CampaignSubmitAppealParams,
  };

  export {
    CampaignBuilder as CampaignBuilder,
    type CampaignBuilderSubmitParams as CampaignBuilderSubmitParams,
  };

  export {
    PhoneNumberCampaigns as PhoneNumberCampaigns,
    type PhoneNumberCampaign as PhoneNumberCampaign,
    type PhoneNumberCampaignCreate as PhoneNumberCampaignCreate,
    type PhoneNumberCampaignsPerPagePaginationV2 as PhoneNumberCampaignsPerPagePaginationV2,
    type PhoneNumberCampaignCreateParams as PhoneNumberCampaignCreateParams,
    type PhoneNumberCampaignUpdateParams as PhoneNumberCampaignUpdateParams,
    type PhoneNumberCampaignListParams as PhoneNumberCampaignListParams,
  };
}
