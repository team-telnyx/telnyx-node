// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReputationAPI from './reputation/reputation';
import {
  EnterpriseReputationPublic,
  Reputation,
  ReputationCreateParams,
  ReputationCreateResponse,
  ReputationListResponse,
  ReputationUpdateFrequencyParams,
  ReputationUpdateFrequencyResponse,
} from './reputation/reputation';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Enterprise management for Branded Calling and Number Reputation services
 */
export class Enterprises extends APIResource {
  reputation: ReputationAPI.Reputation = new ReputationAPI.Reputation(this._client);

  /**
   * Create a new enterprise for Branded Calling / Number Reputation services.
   *
   * Registers the enterprise in the Branded Calling / Number Reputation services,
   * enabling it to create Display Identity Records (DIRs) or enroll in Number
   * Reputation monitoring.
   *
   * **Required Fields:** `legal_name`, `doing_business_as`, `organization_type`,
   * `country_code`, `website`, `fein`, `industry`, `number_of_employees`,
   * `organization_legal_type`, `organization_contact`, `billing_contact`,
   * `organization_physical_address`, `billing_address`
   *
   * @example
   * ```ts
   * const enterprise = await client.enterprises.create({
   *   billing_address: {
   *     administrative_area: 'Illinois',
   *     city: 'Chicago',
   *     country: 'United States',
   *     postal_code: '60601',
   *     street_address: '123 Main St',
   *   },
   *   billing_contact: {
   *     email: 'billing@acme.com',
   *     first_name: 'John',
   *     last_name: 'Doe',
   *     phone_number: '15551234568',
   *   },
   *   country_code: 'US',
   *   doing_business_as: 'Acme',
   *   fein: '12-3456789',
   *   industry: 'technology',
   *   legal_name: 'Acme Corp Inc.',
   *   number_of_employees: '51-200',
   *   organization_contact: {
   *     email: 'jane.smith@acme.com',
   *     first_name: 'Jane',
   *     job_title: 'VP of Engineering',
   *     last_name: 'Smith',
   *     phone: '+16035551234',
   *   },
   *   organization_legal_type: 'corporation',
   *   organization_physical_address: {
   *     administrative_area: 'Illinois',
   *     city: 'Chicago',
   *     country: 'United States',
   *     postal_code: '60601',
   *     street_address: '123 Main St',
   *   },
   *   organization_type: 'commercial',
   *   website: 'https://acme.com',
   * });
   * ```
   */
  create(body: EnterpriseCreateParams, options?: RequestOptions): APIPromise<EnterpriseCreateResponse> {
    return this._client.post('/enterprises', { body, ...options });
  }

  /**
   * Retrieve details of a specific enterprise by ID.
   *
   * @example
   * ```ts
   * const enterprise = await client.enterprises.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(enterpriseID: string, options?: RequestOptions): APIPromise<EnterpriseRetrieveResponse> {
    return this._client.get(path`/enterprises/${enterpriseID}`, options);
  }

  /**
   * Update enterprise information. All fields are optional — only the provided
   * fields will be updated.
   *
   * @example
   * ```ts
   * const enterprise = await client.enterprises.update(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  update(
    enterpriseID: string,
    body: EnterpriseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EnterpriseUpdateResponse> {
    return this._client.put(path`/enterprises/${enterpriseID}`, { body, ...options });
  }

  /**
   * Retrieve a paginated list of enterprises associated with your account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const enterprisePublic of client.enterprises.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EnterpriseListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EnterprisePublicsDefaultFlatPagination, EnterprisePublic> {
    return this._client.getAPIList('/enterprises', DefaultFlatPagination<EnterprisePublic>, {
      query,
      ...options,
    });
  }

  /**
   * Delete an enterprise and all associated resources. This action is irreversible.
   *
   * @example
   * ```ts
   * await client.enterprises.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(enterpriseID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/enterprises/${enterpriseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type EnterprisePublicsDefaultFlatPagination = DefaultFlatPagination<EnterprisePublic>;

export interface BillingAddress {
  /**
   * State or province
   */
  administrative_area: string;

  /**
   * City name
   */
  city: string;

  /**
   * Country name (e.g., United States)
   */
  country: string;

  /**
   * ZIP or postal code
   */
  postal_code: string;

  /**
   * Street address
   */
  street_address: string;

  /**
   * Additional address line (suite, apt, etc.)
   */
  extended_address?: string | null;
}

export interface BillingContact {
  /**
   * Contact's email address
   */
  email: string;

  /**
   * Contact's first name
   */
  first_name: string;

  /**
   * Contact's last name
   */
  last_name: string;

  /**
   * Contact's phone number (10-15 digits)
   */
  phone_number: string;
}

export interface EnterprisePublic {
  /**
   * Unique identifier of the enterprise
   */
  id?: string;

  billing_address?: BillingAddress;

  billing_contact?: BillingContact;

  /**
   * Corporate registration number
   */
  corporate_registration_number?: string | null;

  /**
   * ISO 3166-1 alpha-2 country code
   */
  country_code?: string;

  /**
   * When the enterprise was created
   */
  created_at?: string;

  /**
   * Customer reference identifier
   */
  customer_reference?: string | null;

  /**
   * DBA name
   */
  doing_business_as?: string;

  /**
   * D-U-N-S Number
   */
  dun_bradstreet_number?: string | null;

  /**
   * Federal Employer Identification Number
   */
  fein?: string | null;

  /**
   * Industry classification
   */
  industry?: string | null;

  /**
   * Legal name of the enterprise
   */
  legal_name?: string;

  /**
   * Employee count range
   */
  number_of_employees?: '1-10' | '11-50' | '51-200' | '201-500' | '501-2000' | '2001-10000' | '10001+' | null;

  /**
   * Organization contact information. Note: the response returns this object with
   * the phone field as 'phone' (not 'phone_number').
   */
  organization_contact?: OrganizationContact;

  /**
   * Legal structure type
   */
  organization_legal_type?: 'corporation' | 'llc' | 'partnership' | 'nonprofit' | 'other' | null;

  organization_physical_address?: PhysicalAddress;

  /**
   * Type of organization
   */
  organization_type?: 'commercial' | 'government' | 'non_profit';

  /**
   * SIC Code
   */
  primary_business_domain_sic_code?: string | null;

  /**
   * Professional license number
   */
  professional_license_number?: string | null;

  /**
   * Role type in Branded Calling / Number Reputation services
   */
  role_type?: 'enterprise' | 'bpo';

  /**
   * When the enterprise was last updated
   */
  updated_at?: string;

  /**
   * Company website URL
   */
  website?: string | null;
}

/**
 * Organization contact information. Note: the response returns this object with
 * the phone field as 'phone' (not 'phone_number').
 */
export interface OrganizationContact {
  /**
   * Contact's email address
   */
  email: string;

  /**
   * Contact's first name
   */
  first_name: string;

  /**
   * Contact's job title (required)
   */
  job_title: string;

  /**
   * Contact's last name
   */
  last_name: string;

  /**
   * Contact's phone number in E.164 format
   */
  phone: string;
}

export interface PhysicalAddress {
  /**
   * State or province
   */
  administrative_area: string;

  /**
   * City name
   */
  city: string;

  /**
   * Country name (e.g., United States)
   */
  country: string;

  /**
   * ZIP or postal code
   */
  postal_code: string;

  /**
   * Street address
   */
  street_address: string;

  /**
   * Additional address line (suite, apt, etc.)
   */
  extended_address?: string | null;
}

export interface EnterpriseCreateResponse {
  data?: EnterprisePublic;
}

export interface EnterpriseRetrieveResponse {
  data?: EnterprisePublic;
}

export interface EnterpriseUpdateResponse {
  data?: EnterprisePublic;
}

export interface EnterpriseCreateParams {
  billing_address: BillingAddress;

  billing_contact: BillingContact;

  /**
   * Country code. Currently only 'US' is accepted.
   */
  country_code: string;

  /**
   * Primary business name / DBA name
   */
  doing_business_as: string;

  /**
   * Federal Employer Identification Number. Format: XX-XXXXXXX or 9-digit number
   * (minimum 9 digits).
   */
  fein: string;

  /**
   * Industry classification. Case-insensitive. Accepted values: accounting, finance,
   * billing, collections, business, charity, nonprofit, communications, telecom,
   * customer service, support, delivery, shipping, logistics, education, financial,
   * banking, government, public, healthcare, health, pharmacy, medical, insurance,
   * legal, law, notifications, scheduling, real estate, property, retail, ecommerce,
   * sales, marketing, software, technology, tech, media, surveys, market research,
   * travel, hospitality, hotel
   */
  industry: string;

  /**
   * Legal name of the enterprise
   */
  legal_name: string;

  /**
   * Employee count range
   */
  number_of_employees: '1-10' | '11-50' | '51-200' | '201-500' | '501-2000' | '2001-10000' | '10001+';

  /**
   * Organization contact information. Note: the response returns this object with
   * the phone field as 'phone' (not 'phone_number').
   */
  organization_contact: OrganizationContact;

  /**
   * Legal structure type
   */
  organization_legal_type: 'corporation' | 'llc' | 'partnership' | 'nonprofit' | 'other';

  organization_physical_address: PhysicalAddress;

  /**
   * Type of organization
   */
  organization_type: 'commercial' | 'government' | 'non_profit';

  /**
   * Enterprise website URL. Accepts any string — no URL format validation enforced.
   */
  website: string;

  /**
   * Corporate registration number (optional)
   */
  corporate_registration_number?: string;

  /**
   * Optional customer reference identifier for your own tracking
   */
  customer_reference?: string;

  /**
   * D-U-N-S Number (optional)
   */
  dun_bradstreet_number?: string;

  /**
   * SIC Code (optional)
   */
  primary_business_domain_sic_code?: string;

  /**
   * Professional license number (optional)
   */
  professional_license_number?: string;

  /**
   * Role type in Branded Calling / Number Reputation services
   */
  role_type?: 'enterprise' | 'bpo';
}

export interface EnterpriseUpdateParams {
  billing_address?: BillingAddress;

  billing_contact?: BillingContact;

  /**
   * Corporate registration number
   */
  corporate_registration_number?: string;

  /**
   * Customer reference identifier
   */
  customer_reference?: string;

  /**
   * DBA name
   */
  doing_business_as?: string;

  /**
   * D-U-N-S Number
   */
  dun_bradstreet_number?: string;

  /**
   * Federal Employer Identification Number. Format: XX-XXXXXXX or XXXXXXXXX
   */
  fein?: string;

  /**
   * Industry classification
   */
  industry?: string;

  /**
   * Legal name of the enterprise
   */
  legal_name?: string;

  /**
   * Employee count range
   */
  number_of_employees?: '1-10' | '11-50' | '51-200' | '201-500' | '501-2000' | '2001-10000' | '10001+';

  /**
   * Organization contact information. Note: the response returns this object with
   * the phone field as 'phone' (not 'phone_number').
   */
  organization_contact?: OrganizationContact;

  /**
   * Legal structure type
   */
  organization_legal_type?: 'corporation' | 'llc' | 'partnership' | 'nonprofit' | 'other';

  organization_physical_address?: PhysicalAddress;

  /**
   * SIC Code
   */
  primary_business_domain_sic_code?: string;

  /**
   * Professional license number
   */
  professional_license_number?: string;

  /**
   * Company website URL
   */
  website?: string;
}

export interface EnterpriseListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by legal name (partial match)
   */
  legal_name?: string;
}

Enterprises.Reputation = Reputation;

export declare namespace Enterprises {
  export {
    type BillingAddress as BillingAddress,
    type BillingContact as BillingContact,
    type EnterprisePublic as EnterprisePublic,
    type OrganizationContact as OrganizationContact,
    type PhysicalAddress as PhysicalAddress,
    type EnterpriseCreateResponse as EnterpriseCreateResponse,
    type EnterpriseRetrieveResponse as EnterpriseRetrieveResponse,
    type EnterpriseUpdateResponse as EnterpriseUpdateResponse,
    type EnterprisePublicsDefaultFlatPagination as EnterprisePublicsDefaultFlatPagination,
    type EnterpriseCreateParams as EnterpriseCreateParams,
    type EnterpriseUpdateParams as EnterpriseUpdateParams,
    type EnterpriseListParams as EnterpriseListParams,
  };

  export {
    Reputation as Reputation,
    type EnterpriseReputationPublic as EnterpriseReputationPublic,
    type ReputationCreateResponse as ReputationCreateResponse,
    type ReputationListResponse as ReputationListResponse,
    type ReputationUpdateFrequencyResponse as ReputationUpdateFrequencyResponse,
    type ReputationCreateParams as ReputationCreateParams,
    type ReputationUpdateFrequencyParams as ReputationUpdateFrequencyParams,
  };
}
