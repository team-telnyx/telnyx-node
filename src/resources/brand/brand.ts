// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BrandAPI from './brand';
import * as ExternalVettingAPI from './external-vetting';
import {
  ExternalVetting,
  ExternalVettingImportParams,
  ExternalVettingImportResponse,
  ExternalVettingListResponse,
  ExternalVettingOrderParams,
  ExternalVettingOrderResponse,
} from './external-vetting';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Brand extends APIResource {
  externalVetting: ExternalVettingAPI.ExternalVetting = new ExternalVettingAPI.ExternalVetting(this._client);

  /**
   * This endpoint is used to create a new brand. A brand is an entity created by The
   * Campaign Registry (TCR) that represents an organization or a company. It is this
   * entity that TCR created campaigns will be associated with. Each brand creation
   * will entail an upfront, non-refundable $4 expense.
   *
   * @example
   * ```ts
   * const telnyxBrand = await client.brand.create({
   *   country: 'US',
   *   displayName: 'ABC Mobile',
   *   email: 'email',
   *   entityType: 'PRIVATE_PROFIT',
   *   vertical: 'TECHNOLOGY',
   * });
   * ```
   */
  create(body: BrandCreateParams, options?: RequestOptions): APIPromise<TelnyxBrand> {
    return this._client.post('/brand', { body, ...options });
  }

  /**
   * Retrieve a brand by `brandId`.
   *
   * @example
   * ```ts
   * const brand = await client.brand.retrieve('brandId');
   * ```
   */
  retrieve(brandID: string, options?: RequestOptions): APIPromise<BrandRetrieveResponse> {
    return this._client.get(path`/brand/${brandID}`, options);
  }

  /**
   * Update a brand's attributes by `brandId`.
   *
   * @example
   * ```ts
   * const telnyxBrand = await client.brand.update('brandId', {
   *   country: 'US',
   *   displayName: 'ABC Mobile',
   *   email: 'email',
   *   entityType: 'PRIVATE_PROFIT',
   *   vertical: 'TECHNOLOGY',
   * });
   * ```
   */
  update(brandID: string, body: BrandUpdateParams, options?: RequestOptions): APIPromise<TelnyxBrand> {
    return this._client.put(path`/brand/${brandID}`, { body, ...options });
  }

  /**
   * This endpoint is used to list all brands associated with your organization.
   *
   * @example
   * ```ts
   * const brands = await client.brand.list();
   * ```
   */
  list(
    query: BrandListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrandListResponse> {
    return this._client.get('/brand', { query, ...options });
  }

  /**
   * Delete Brand. This endpoint is used to delete a brand. Note the brand cannot be
   * deleted if it contains one or more active campaigns, the campaigns need to be
   * inactive and at least 3 months old due to billing purposes.
   *
   * @example
   * ```ts
   * await client.brand.delete('brandId');
   * ```
   */
  delete(brandID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/brand/${brandID}`, {
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
   * const response = await client.brand.getFeedback('brandId');
   * ```
   */
  getFeedback(brandID: string, options?: RequestOptions): APIPromise<BrandGetFeedbackResponse> {
    return this._client.get(path`/brand/feedback/${brandID}`, options);
  }

  /**
   * Resend brand 2FA email
   *
   * @example
   * ```ts
   * await client.brand.resend2faEmail('brandId');
   * ```
   */
  resend2faEmail(brandID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/brand/${brandID}/2faEmail`, {
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
   * const telnyxBrand = await client.brand.revet('brandId');
   * ```
   */
  revet(brandID: string, options?: RequestOptions): APIPromise<TelnyxBrand> {
    return this._client.put(path`/brand/${brandID}/revet`, options);
  }
}

/**
 * An enumeration.
 */
export type AltBusinessIDType = 'NONE' | 'DUNS' | 'GIIN' | 'LEI';

/**
 * The verification status of an active brand
 */
export type BrandIdentityStatus = 'VERIFIED' | 'UNVERIFIED' | 'SELF_DECLARED' | 'VETTED_VERIFIED';

/**
 * Entity type behind the brand. This is the form of business establishment.
 */
export type EntityType = 'PRIVATE_PROFIT' | 'PUBLIC_PROFIT' | 'NON_PROFIT' | 'GOVERNMENT';

/**
 * (Required for public company) stock exchange.
 */
export type StockExchange =
  | 'NONE'
  | 'NASDAQ'
  | 'NYSE'
  | 'AMEX'
  | 'AMX'
  | 'ASX'
  | 'B3'
  | 'BME'
  | 'BSE'
  | 'FRA'
  | 'ICEX'
  | 'JPX'
  | 'JSE'
  | 'KRX'
  | 'LON'
  | 'NSE'
  | 'OMX'
  | 'SEHK'
  | 'SSE'
  | 'STO'
  | 'SWX'
  | 'SZSE'
  | 'TSX'
  | 'TWSE'
  | 'VSE';

/**
 * Telnyx-specific extensions to The Campaign Registry's `Brand` type
 */
export interface TelnyxBrand {
  /**
   * Brand relationship to the CSP.
   */
  brandRelationship: 'BASIC_ACCOUNT' | 'SMALL_ACCOUNT' | 'MEDIUM_ACCOUNT' | 'LARGE_ACCOUNT' | 'KEY_ACCOUNT';

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
  entityType: EntityType;

  /**
   * Vertical or industry segment of the brand.
   */
  vertical: string;

  /**
   * Alternate business identifier such as DUNS, LEI, or GIIN
   */
  altBusinessId?: string;

  /**
   * An enumeration.
   */
  altBusinessIdType?: AltBusinessIDType;

  /**
   * Unique identifier assigned to the brand.
   */
  brandId?: string;

  /**
   * Business contact email.
   *
   * Required if `entityType` is `PUBLIC_PROFIT`.
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
   * Date and time that the brand was created at.
   */
  createdAt?: string;

  /**
   * Unique identifier assigned to the csp by the registry.
   */
  cspId?: string;

  /**
   * (Required for Non-profit) Government assigned corporate tax ID. EIN is 9-digits
   * in U.S.
   */
  ein?: string;

  /**
   * Failure reasons for brand
   */
  failureReasons?: string;

  /**
   * First name of business contact.
   */
  firstName?: string;

  /**
   * The verification status of an active brand
   */
  identityStatus?: BrandIdentityStatus;

  /**
   * IP address of the browser requesting to create brand identity.
   */
  ipAddress?: string;

  /**
   * Indicates whether this brand is known to be a reseller
   */
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
   * Mock brand for testing purposes
   */
  mock?: boolean;

  optionalAttributes?: TelnyxBrand.OptionalAttributes;

  /**
   * Valid phone number in e.164 international format.
   */
  phone?: string;

  /**
   * Postal codes. Use 5 digit zipcode for United States
   */
  postalCode?: string;

  /**
   * Unique identifier Telnyx assigned to the brand - the brandId
   */
  referenceId?: string;

  /**
   * State. Must be 2 letters code for United States.
   */
  state?: string;

  /**
   * Status of the brand
   */
  status?: 'OK' | 'REGISTRATION_PENDING' | 'REGISTRATION_FAILED';

  /**
   * (Required for public company) stock exchange.
   */
  stockExchange?: StockExchange;

  /**
   * (Required for public company) stock symbol.
   */
  stockSymbol?: string;

  /**
   * Street number and name.
   */
  street?: string;

  /**
   * Unique identifier assigned to the brand by the registry.
   */
  tcrBrandId?: string;

  /**
   * Universal EIN of Brand, Read Only.
   */
  universalEin?: string;

  /**
   * Date and time that the brand was last updated at.
   */
  updatedAt?: string;

  /**
   * Failover webhook to which brand status updates are sent.
   */
  webhookFailoverURL?: string;

  /**
   * Webhook to which brand status updates are sent.
   */
  webhookURL?: string;

  /**
   * Brand website URL.
   */
  website?: string;
}

export namespace TelnyxBrand {
  export interface OptionalAttributes {
    /**
     * The tax exempt status of the brand
     */
    taxExemptStatus?: string;
  }
}

/**
 * Vertical or industry segment of the brand or campaign.
 */
export type Vertical =
  | 'REAL_ESTATE'
  | 'HEALTHCARE'
  | 'ENERGY'
  | 'ENTERTAINMENT'
  | 'RETAIL'
  | 'AGRICULTURE'
  | 'INSURANCE'
  | 'EDUCATION'
  | 'HOSPITALITY'
  | 'FINANCIAL'
  | 'GAMBLING'
  | 'CONSTRUCTION'
  | 'NGO'
  | 'MANUFACTURING'
  | 'GOVERNMENT'
  | 'TECHNOLOGY'
  | 'COMMUNICATION';

/**
 * Telnyx-specific extensions to The Campaign Registry's `Brand` type
 */
export interface BrandRetrieveResponse extends TelnyxBrand {
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
  entityType: EntityType;

  /**
   * Vertical or industry segment of the brand or campaign.
   */
  vertical: Vertical;

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
  stockExchange?: StockExchange;

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
  entityType: EntityType;

  /**
   * Vertical or industry segment of the brand or campaign.
   */
  vertical: Vertical;

  /**
   * Alternate business identifier such as DUNS, LEI, or GIIN
   */
  altBusiness_id?: string;

  /**
   * An enumeration.
   */
  altBusinessIdType?: AltBusinessIDType;

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
  identityStatus?: BrandIdentityStatus;

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
  stockExchange?: StockExchange;

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

Brand.ExternalVetting = ExternalVetting;

export declare namespace Brand {
  export {
    type AltBusinessIDType as AltBusinessIDType,
    type BrandIdentityStatus as BrandIdentityStatus,
    type EntityType as EntityType,
    type StockExchange as StockExchange,
    type TelnyxBrand as TelnyxBrand,
    type Vertical as Vertical,
    type BrandRetrieveResponse as BrandRetrieveResponse,
    type BrandListResponse as BrandListResponse,
    type BrandGetFeedbackResponse as BrandGetFeedbackResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
    type BrandListParams as BrandListParams,
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
