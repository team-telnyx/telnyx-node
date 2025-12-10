// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BrandAPI from '../../brand/brand';
import * as ExternalVettingAPI from './external-vetting';
import {
  ExternalVetting,
  ExternalVettingImportParams,
  ExternalVettingImportResponse,
  ExternalVettingListResponse,
  ExternalVettingOrderParams,
  ExternalVettingOrderResponse,
} from './external-vetting';
import * as SMSOtpAPI from './sms-otp';
import {
  SMSOtp,
  SMSOtpGetStatusParams,
  SMSOtpGetStatusResponse,
  SMSOtpTriggerParams,
  SMSOtpTriggerResponse,
  SMSOtpVerifyParams,
} from './sms-otp';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Brand extends APIResource {
  smsOtp: SMSOtpAPI.SMSOtp = new SMSOtpAPI.SMSOtp(this._client);
  externalVetting: ExternalVettingAPI.ExternalVetting = new ExternalVettingAPI.ExternalVetting(this._client);

  /**
   * This endpoint is used to create a new brand. A brand is an entity created by The
   * Campaign Registry (TCR) that represents an organization or a company. It is this
   * entity that TCR created campaigns will be associated with. Each brand creation
   * will entail an upfront, non-refundable $4 expense.
   *
   * @example
   * ```ts
   * const telnyxBrand = await client.number10dlc.brand.create({
   *   country: 'US',
   *   displayName: 'ABC Mobile',
   *   email: 'email',
   *   entityType: 'PRIVATE_PROFIT',
   *   vertical: 'TECHNOLOGY',
   * });
   * ```
   */
  create(body: BrandCreateParams, options?: RequestOptions): APIPromise<BrandAPI.TelnyxBrand> {
    return this._client.post('/10dlc/brand', { body, ...options });
  }

  /**
   * Retrieve a brand by `brandId`.
   *
   * @example
   * ```ts
   * const brand = await client.number10dlc.brand.retrieve(
   *   'brandId',
   * );
   * ```
   */
  retrieve(brandID: string, options?: RequestOptions): APIPromise<BrandRetrieveResponse> {
    return this._client.get(path`/10dlc/brand/${brandID}`, options);
  }

  /**
   * Update a brand's attributes by `brandId`.
   *
   * @example
   * ```ts
   * const telnyxBrand = await client.number10dlc.brand.update(
   *   'brandId',
   *   {
   *     country: 'US',
   *     displayName: 'ABC Mobile',
   *     email: 'email',
   *     entityType: 'PRIVATE_PROFIT',
   *     vertical: 'TECHNOLOGY',
   *   },
   * );
   * ```
   */
  update(
    brandID: string,
    body: BrandUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BrandAPI.TelnyxBrand> {
    return this._client.put(path`/10dlc/brand/${brandID}`, { body, ...options });
  }

  /**
   * This endpoint is used to list all brands associated with your organization.
   *
   * @example
   * ```ts
   * const brands = await client.number10dlc.brand.list();
   * ```
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandListResponse> {
    return this._client.get('/10dlc/brand', { query, ...options });
  }

  /**
   * Delete Brand. This endpoint is used to delete a brand. Note the brand cannot be
   * deleted if it contains one or more active campaigns, the campaigns need to be
   * inactive and at least 3 months old due to billing purposes.
   *
   * @example
   * ```ts
   * await client.number10dlc.brand.delete('brandId');
   * ```
   */
  delete(brandID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/10dlc/brand/${brandID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get feedback about a brand by ID. This endpoint can be used after creating or
   * revetting a brand.
   *
   * Possible values for `.category[].id`:
   *
   * - `TAX_ID` - Data mismatch related to tax id and its associated properties.
   * - `STOCK_SYMBOL` - Non public entity registered as a public for profit entity or
   *   the stock information mismatch.
   * - `GOVERNMENT_ENTITY` - Non government entity registered as a government entity.
   *   Must be a U.S. government entity.
   * - `NONPROFIT` - Not a recognized non-profit entity. No IRS tax-exempt status
   *   found.
   * - `OTHERS` - Details of the data misrepresentation if any.
   *
   * @example
   * ```ts
   * const response = await client.number10dlc.brand.getFeedback(
   *   'brandId',
   * );
   * ```
   */
  getFeedback(brandID: string, options?: RequestOptions): APIPromise<BrandGetFeedbackResponse> {
    return this._client.get(path`/10dlc/brand/feedback/${brandID}`, options);
  }

  /**
   * Resend brand 2FA email
   *
   * @example
   * ```ts
   * await client.number10dlc.brand.resend2faEmail('brandId');
   * ```
   */
  resend2faEmail(brandID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/10dlc/brand/${brandID}/2faEmail`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * This operation allows you to revet the brand. However, revetting is allowed once
   * after the successful brand registration and thereafter limited to once every 3
   * months.
   *
   * @example
   * ```ts
   * const telnyxBrand = await client.number10dlc.brand.revet(
   *   'brandId',
   * );
   * ```
   */
  revet(brandID: string, options?: RequestOptions): APIPromise<BrandAPI.TelnyxBrand> {
    return this._client.put(path`/10dlc/brand/${brandID}/revet`, options);
  }
}

/**
 * Telnyx-specific extensions to The Campaign Registry's `Brand` type
 */
export interface BrandRetrieveResponse extends BrandAPI.TelnyxBrand {
  /**
   * Number of campaigns associated with the brand
   */
  assignedCampaignsCount?: number;
}

export interface BrandListResponse {
  page?: number;

  records?: Array<BrandListResponse.Record>;

  totalRecords?: number;
}

export namespace BrandListResponse {
  export interface Record {
    /**
     * Number of campaigns associated with the brand
     */
    assignedCampaingsCount?: number;

    /**
     * Unique identifier assigned to the brand.
     */
    brandId?: string;

    /**
     * (Required for Non-profit/private/public) Legal company name.
     */
    companyName?: string;

    /**
     * Date and time that the brand was created at.
     */
    createdAt?: string;

    /**
     * Display or marketing name of the brand.
     */
    displayName?: string;

    /**
     * Valid email address of brand support contact.
     */
    email?: string;

    /**
     * Entity type behind the brand. This is the form of business establishment.
     */
    entityType?: BrandAPI.EntityType;

    /**
     * Failure reasons for brand
     */
    failureReasons?: string;

    /**
     * The verification status of an active brand
     */
    identityStatus?: BrandAPI.BrandIdentityStatus;

    /**
     * Status of the brand
     */
    status?: 'OK' | 'REGISTRATION_PENDING' | 'REGISTRATION_FAILED';

    /**
     * Unique identifier assigned to the brand by the registry.
     */
    tcrBrandId?: string;

    /**
     * Date and time that the brand was last updated at.
     */
    updatedAt?: string;

    /**
     * Brand website URL.
     */
    website?: string;
  }
}

export interface BrandGetFeedbackResponse {
  /**
   * ID of the brand being queried about
   */
  brandId: string;

  /**
   * A list of reasons why brand creation/revetting didn't go as planned
   */
  category: Array<BrandGetFeedbackResponse.Category>;
}

export namespace BrandGetFeedbackResponse {
  export interface Category {
    /**
     * One of `TAX_ID`, `STOCK_SYMBOL`, `GOVERNMENT_ENTITY`, `NONPROFIT`, and `OTHERS`
     */
    id: string;

    /**
     * Long-form description of the feedback with additional information
     */
    description: string;

    /**
     * Human-readable version of the `id` field
     */
    displayName: string;

    /**
     * List of relevant fields in the originally-submitted brand json
     */
    fields: Array<string>;
  }
}

export interface BrandCreateParams {
  /**
   * ISO2 2 characters country code. Example: US - United States
   */
  country: string;

  /**
   * Display name, marketing name, or DBA name of the brand.
   */
  displayName: string;

  /**
   * Valid email address of brand support contact.
   */
  email: string;

  /**
   * Entity type behind the brand. This is the form of business establishment.
   */
  entityType: BrandAPI.EntityType;

  /**
   * Vertical or industry segment of the brand or campaign.
   */
  vertical: BrandAPI.Vertical;

  /**
   * Business contact email.
   *
   * Required if `entityType` is `PUBLIC_PROFIT`. Otherwise, it is recommended to
   * either omit this field or set it to `null`.
   */
  businessContactEmail?: string;

  /**
   * City name
   */
  city?: string;

  /**
   * (Required for Non-profit/private/public) Legal company name.
   */
  companyName?: string;

  /**
   * (Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits
   * in U.S.
   */
  ein?: string;

  /**
   * First name of business contact.
   */
  firstName?: string;

  /**
   * IP address of the browser requesting to create brand identity.
   */
  ipAddress?: string;

  isReseller?: boolean;

  /**
   * Last name of business contact.
   */
  lastName?: string;

  /**
   * Valid mobile phone number in e.164 international format.
   */
  mobilePhone?: string;

  /**
   * Mock brand for testing purposes. Defaults to false.
   */
  mock?: boolean;

  /**
   * Valid phone number in e.164 international format.
   */
  phone?: string;

  /**
   * Postal codes. Use 5 digit zipcode for United States
   */
  postalCode?: string;

  /**
   * State. Must be 2 letters code for United States.
   */
  state?: string;

  /**
   * (Required for public company) stock exchange.
   */
  stockExchange?: BrandAPI.StockExchange;

  /**
   * (Required for public company) stock symbol.
   */
  stockSymbol?: string;

  /**
   * Street number and name.
   */
  street?: string;

  /**
   * Webhook failover URL for brand status updates.
   */
  webhookFailoverURL?: string;

  /**
   * Webhook URL for brand status updates.
   */
  webhookURL?: string;

  /**
   * Brand website URL.
   */
  website?: string;
}

export interface BrandUpdateParams {
  /**
   * ISO2 2 characters country code. Example: US - United States
   */
  country: string;

  /**
   * Display or marketing name of the brand.
   */
  displayName: string;

  /**
   * Valid email address of brand support contact.
   */
  email: string;

  /**
   * Entity type behind the brand. This is the form of business establishment.
   */
  entityType: BrandAPI.EntityType;

  /**
   * Vertical or industry segment of the brand or campaign.
   */
  vertical: BrandAPI.Vertical;

  /**
   * Alternate business identifier such as DUNS, LEI, or GIIN
   */
  altBusiness_id?: string;

  /**
   * An enumeration.
   */
  altBusinessIdType?: BrandAPI.AltBusinessIDType;

  /**
   * Business contact email.
   *
   * Required if `entityType` will be changed to `PUBLIC_PROFIT`. Otherwise, it is
   * recommended to either omit this field or set it to `null`.
   */
  businessContactEmail?: string;

  /**
   * City name
   */
  city?: string;

  /**
   * (Required for Non-profit/private/public) Legal company name.
   */
  companyName?: string;

  /**
   * (Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits
   * in U.S.
   */
  ein?: string;

  /**
   * First name of business contact.
   */
  firstName?: string;

  /**
   * The verification status of an active brand
   */
  identityStatus?: BrandAPI.BrandIdentityStatus;

  /**
   * IP address of the browser requesting to create brand identity.
   */
  ipAddress?: string;

  isReseller?: boolean;

  /**
   * Last name of business contact.
   */
  lastName?: string;

  /**
   * Valid phone number in e.164 international format.
   */
  phone?: string;

  /**
   * Postal codes. Use 5 digit zipcode for United States
   */
  postalCode?: string;

  /**
   * State. Must be 2 letters code for United States.
   */
  state?: string;

  /**
   * (Required for public company) stock exchange.
   */
  stockExchange?: BrandAPI.StockExchange;

  /**
   * (Required for public company) stock symbol.
   */
  stockSymbol?: string;

  /**
   * Street number and name.
   */
  street?: string;

  /**
   * Webhook failover URL for brand status updates.
   */
  webhookFailoverURL?: string;

  /**
   * Webhook URL for brand status updates.
   */
  webhookURL?: string;

  /**
   * Brand website URL.
   */
  website?: string;
}

export interface BrandListParams {
  /**
   * Filter results by the Telnyx Brand id
   */
  brandId?: string;

  country?: string;

  displayName?: string;

  entityType?: string;

  page?: number;

  /**
   * number of records per page. maximum of 500
   */
  recordsPerPage?: number;

  /**
   * Specifies the sort order for results. If not given, results are sorted by
   * createdAt in descending order.
   */
  sort?:
    | 'assignedCampaignsCount'
    | '-assignedCampaignsCount'
    | 'brandId'
    | '-brandId'
    | 'createdAt'
    | '-createdAt'
    | 'displayName'
    | '-displayName'
    | 'identityStatus'
    | '-identityStatus'
    | 'status'
    | '-status'
    | 'tcrBrandId'
    | '-tcrBrandId';

  state?: string;

  /**
   * Filter results by the TCR Brand id
   */
  tcrBrandId?: string;
}

Brand.SMSOtp = SMSOtp;
Brand.ExternalVetting = ExternalVetting;

export declare namespace Brand {
  export {
    type BrandRetrieveResponse as BrandRetrieveResponse,
    type BrandListResponse as BrandListResponse,
    type BrandGetFeedbackResponse as BrandGetFeedbackResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
  };

  export {
    SMSOtp as SMSOtp,
    type SMSOtpGetStatusResponse as SMSOtpGetStatusResponse,
    type SMSOtpTriggerResponse as SMSOtpTriggerResponse,
    type SMSOtpGetStatusParams as SMSOtpGetStatusParams,
    type SMSOtpTriggerParams as SMSOtpTriggerParams,
    type SMSOtpVerifyParams as SMSOtpVerifyParams,
  };

  export {
    ExternalVetting as ExternalVetting,
    type ExternalVettingListResponse as ExternalVettingListResponse,
    type ExternalVettingImportResponse as ExternalVettingImportResponse,
    type ExternalVettingOrderResponse as ExternalVettingOrderResponse,
    type ExternalVettingImportParams as ExternalVettingImportParams,
    type ExternalVettingOrderParams as ExternalVettingOrderParams,
  };
}
