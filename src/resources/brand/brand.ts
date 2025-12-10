// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExternalVettingAPI from './external-vetting';
import { ExternalVetting } from './external-vetting';
import * as SMSOtpAPI from './sms-otp';
import { SMSOtp } from './sms-otp';

export class Brand extends APIResource {
  externalVetting: ExternalVettingAPI.ExternalVetting = new ExternalVettingAPI.ExternalVetting(this._client);
  smsOtp: SMSOtpAPI.SMSOtp = new SMSOtpAPI.SMSOtp(this._client);
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
export type EntityType = 'PRIVATE_PROFIT' | 'PUBLIC_PROFIT' | 'NON_PROFIT' | 'GOVERNMENT' | 'SOLE_PROPRIETOR';

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

Brand.ExternalVetting = ExternalVetting;
Brand.SMSOtp = SMSOtp;

export declare namespace Brand {
  export {
    type AltBusinessIDType as AltBusinessIDType,
    type BrandIdentityStatus as BrandIdentityStatus,
    type EntityType as EntityType,
    type StockExchange as StockExchange,
    type TelnyxBrand as TelnyxBrand,
    type Vertical as Vertical,
  };

  export { ExternalVetting as ExternalVetting };

  export { SMSOtp as SMSOtp };
}
