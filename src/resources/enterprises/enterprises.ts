// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DirAPI from './dir';
import { Dir, DirCreateParams, DirListParams } from './dir';
import * as ReputationAPI from './reputation/reputation';
import {
  EnterpriseReputationPublic,
  EnterpriseReputationPublicWrapped,
  Reputation,
  ReputationCheckFrequency,
  ReputationEnableParams,
  ReputationUpdateFrequencyParams,
} from './reputation/reputation';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage the legal-entity record that owns your DIRs and phone numbers.
 */
export class Enterprises extends APIResource {
  reputation: ReputationAPI.Reputation = new ReputationAPI.Reputation(this._client);
  dir: DirAPI.Dir = new DirAPI.Dir(this._client);

  /**
   * Return the enterprises you own, paginated. The default page size is 20; the
   * maximum is 250.
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
   * Create the legal entity (enterprise) that represents your business on the Telnyx
   * platform.
   *
   * The response carries a server-assigned `id` you use for every subsequent call.
   * An enterprise is created once and reused; the API collects all required fields
   * up front.
   *
   * Common failure modes:
   *
   * - `422` - a required field is missing or malformed (the response
   *   `errors[].source.pointer` names the field).
   * - `409` - an enterprise with the same identifying details already exists under
   *   your account.
   *
   * @example
   * ```ts
   * const enterprisePublicWrapped = await client.enterprises.create({
   *   billing_address: {
   *     country: 'US',
   *     administrative_area: 'IL',
   *     city: 'Chicago',
   *     postal_code: '60601',
   *     street_address: '100 Main St',
   *   },
   *   billing_contact: {
   *     first_name: 'Alex',
   *     last_name: 'Bill',
   *     email: 'billing@run065.example.com',
   *     phone_number: '+13125550001',
   *   },
   *   country_code: 'US',
   *   doing_business_as: 'Run 065 Debug',
   *   fein: '12-3456789',
   *   industry: 'technology',
   *   jurisdiction_of_incorporation: 'Delaware',
   *   legal_name: 'Run 065 Debug Co',
   *   number_of_employees: '51-200',
   *   organization_contact: {
   *     first_name: 'Sam',
   *     last_name: 'Org',
   *     email: 'org@run065.example.com',
   *     job_title: 'Compliance Lead',
   *     phone_number: '+13125550000',
   *   },
   *   organization_legal_type: 'llc',
   *   organization_physical_address: {
   *     country: 'US',
   *     administrative_area: 'IL',
   *     city: 'Chicago',
   *     postal_code: '60601',
   *     street_address: '100 Main St',
   *   },
   *   organization_type: 'commercial',
   *   website: 'https://run065.example.com',
   *   role_type: 'enterprise',
   * });
   * ```
   */
  create(body: EnterpriseCreateParams, options?: RequestOptions): APIPromise<EnterprisePublicWrapped> {
    return this._client.post('/enterprises', { body, ...options });
  }

  /**
   * Soft-delete an enterprise.
   *
   * Failure modes:
   *
   * - `400` - the enterprise still has dependent resources in a non-deletable state.
   *   Remove those first; the response `detail` identifies what is blocking the
   *   delete.
   * - `409` - the enterprise has a dependent resource with an unresolved claim.
   *   Resolve it before deleting.
   * - `404` - the enterprise does not exist or does not belong to your account.
   *
   * @example
   * ```ts
   * await client.enterprises.delete(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   * );
   * ```
   */
  delete(enterpriseID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/enterprises/${enterpriseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a single enterprise by id. Returns `404` if the id does not exist or
   * does not belong to your account.
   *
   * @example
   * ```ts
   * const enterprisePublicWrapped =
   *   await client.enterprises.retrieve(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   );
   * ```
   */
  retrieve(enterpriseID: string, options?: RequestOptions): APIPromise<EnterprisePublicWrapped> {
    return this._client.get(path`/enterprises/${enterpriseID}`, options);
  }

  /**
   * Replace the enterprise's mutable fields. Only mutable fields may be sent.
   * Server-assigned and immutable fields (`id`, `record_type`, `created_at`,
   * `updated_at`, status fields, `organization_type`, `country_code`, `role_type`)
   * cannot be changed: including any of them in the body is rejected with
   * `400 Bad Request` (`Field 'X' is not allowed in this request`).
   *
   * @example
   * ```ts
   * const enterprisePublicWrapped = await client.enterprises.update(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   {
   *     billing_address: {
   *       country: 'US',
   *       administrative_area: 'IL',
   *       city: 'Chicago',
   *       postal_code: '60601',
   *       street_address: '100 Main St',
   *     },
   *     billing_contact: {
   *       first_name: 'Alex',
   *       last_name: 'Bill',
   *       email: 'billing@acmeplumbing.example.com',
   *       phone_number: '+13125550001',
   *     },
   *     customer_reference: 'internal-ref-2026Q2',
   *     doing_business_as: 'Acme Plumbing',
   *     fein: '12-3456789',
   *     industry: 'business',
   *     jurisdiction_of_incorporation: 'Delaware',
   *     legal_name: 'Acme Plumbing LLC',
   *     number_of_employees: '51-200',
   *     organization_contact: {
   *       first_name: 'Sam',
   *       last_name: 'Owner',
   *       email: 'sam@acmeplumbing.example.com',
   *       job_title: 'Compliance Lead',
   *       phone_number: '+13125550000',
   *     },
   *     organization_legal_type: 'llc',
   *     organization_physical_address: {
   *       country: 'US',
   *       administrative_area: 'IL',
   *       city: 'Chicago',
   *       postal_code: '60601',
   *       street_address: '100 Main St',
   *     },
   *     website: 'https://acmeplumbing.example.com',
   *   },
   * );
   * ```
   */
  update(
    enterpriseID: string,
    body: EnterpriseUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EnterprisePublicWrapped> {
    return this._client.put(path`/enterprises/${enterpriseID}`, { body, ...options });
  }

  /**
   * Branded Calling is a paid product that must be activated on each enterprise.
   * Activation is idempotent:
   *
   * - First call: marks the enterprise as activated and begins onboarding it with
   *   the Branded Calling platform asynchronously. Returns `200` with
   *   `branded_calling_enabled: true`.
   * - Re-call after success: no-op, returns the same enterprise body.
   * - Re-call after a prior failure: re-queues onboarding, returns `200`.
   *
   * Prerequisite: the calling user must have agreed to the Branded Calling Terms of
   * Service (`POST /terms_of_service/branded_calling/agree`). Without that, this
   * endpoint returns `403 terms_of_service_not_accepted`.
   *
   * Failure modes:
   *
   * - `403` - Branded Calling Terms of Service not accepted.
   * - `404` - enterprise does not exist or does not belong to your account.
   *
   * **Pricing:** This is a billable action. See https://telnyx.com/pricing/numbers
   * for current pricing.
   *
   * @example
   * ```ts
   * const enterprisePublicWrapped =
   *   await client.enterprises.brandedCalling(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   );
   * ```
   */
  brandedCalling(enterpriseID: string, options?: RequestOptions): APIPromise<EnterprisePublicWrapped> {
    return this._client.post(path`/enterprises/${enterpriseID}/branded_calling`, options);
  }
}

export type EnterprisePublicsDefaultFlatPagination = DefaultFlatPagination<EnterprisePublic>;

export interface BillingAddress {
  /**
   * State or province code (e.g. `IL`, `ON`).
   */
  administrative_area: string;

  city: string;

  /**
   * ISO 3166-1 alpha-2 code (currently `US` or `CA`).
   */
  country: string;

  postal_code: string;

  street_address: string;

  extended_address?: string | null;
}

export interface BillingContact {
  email: string;

  first_name: string;

  last_name: string;

  /**
   * E.164 format with leading `+`.
   */
  phone_number: string;
}

export interface EnterprisePublic {
  id?: string;

  billing_address?: BillingAddress;

  billing_contact?: BillingContact;

  /**
   * True once Branded Calling has been activated on this enterprise (see
   * `POST /enterprises/{id}/branded_calling`).
   */
  branded_calling_enabled?: boolean;

  /**
   * Optional corporate-registration / company-number identifier.
   */
  corporate_registration_number?: string | null;

  country_code?: string;

  created_at?: string;

  customer_reference?: string;

  doing_business_as?: string;

  /**
   * Optional D-U-N-S Number issued by Dun & Bradstreet.
   */
  dun_bradstreet_number?: string | null;

  fein?: string;

  industry?: string;

  jurisdiction_of_incorporation?: string;

  legal_name?: string;

  number_of_employees?: string;

  /**
   * True once Phone Number Reputation has been enabled on this enterprise (see
   * `POST /enterprises/{id}/reputation`).
   */
  number_reputation_enabled?: boolean;

  organization_contact?: OrganizationContact;

  organization_legal_type?: string;

  organization_physical_address?: PhysicalAddress;

  organization_type?: string;

  /**
   * Optional SIC code for the primary line of business.
   */
  primary_business_domain_sic_code?: string | null;

  /**
   * Optional professional-license number for regulated industries.
   */
  professional_license_number?: string | null;

  role_type?: string;

  updated_at?: string;

  website?: string;
}

export interface EnterprisePublicWrapped {
  data?: EnterprisePublic;
}

/**
 * JSON:API pagination metadata returned with every paginated list response. Page
 * numbering is 1-based. `page_size` reports the number of items actually returned
 * in `data` for this page; the requested size is taken from the `page[size]` query
 * parameter.
 */
export interface NumberReputationPaginationMeta {
  /**
   * 1-based index of this page. Echoes the `page[number]` query parameter (default
   * `1`).
   */
  page_number: number;

  /**
   * Number of items returned in this page's `data` array. Capped at 250.
   */
  page_size: number;

  /**
   * Total number of pages available given the current `page_size`.
   */
  total_pages: number;

  /**
   * Total number of items across all pages (excludes soft-deleted rows).
   */
  total_results: number;
}

export interface OrganizationContact {
  email: string;

  first_name: string;

  job_title: string;

  last_name: string;

  /**
   * E.164 format with leading `+`.
   */
  phone_number: string;
}

export interface PhysicalAddress {
  /**
   * State or province code (e.g. `IL`, `ON`).
   */
  administrative_area: string;

  city: string;

  /**
   * ISO 3166-1 alpha-2 code (currently `US` or `CA`).
   */
  country: string;

  postal_code: string;

  street_address: string;

  extended_address?: string | null;
}

export interface EnterpriseListParams extends DefaultFlatPaginationParams {
  /**
   * Case-insensitive partial match on legal name.
   */
  'filter[legal_name][contains]'?: string;

  /**
   * Filter by legal name (partial match).
   */
  legal_name?: string;
}

export interface EnterpriseCreateParams {
  billing_address: BillingAddress;

  billing_contact: BillingContact;

  /**
   * ISO 3166-1 alpha-2 country code. Currently `US` and `CA` are supported.
   */
  country_code: string;

  doing_business_as: string;

  /**
   * US Federal Employer Identification Number (`NN-NNNNNNN`) or Canadian equivalent.
   */
  fein: string;

  /**
   * Industry classification.
   */
  industry:
    | 'accounting'
    | 'finance'
    | 'billing'
    | 'collections'
    | 'business'
    | 'charity'
    | 'nonprofit'
    | 'communications'
    | 'telecom'
    | 'customer service'
    | 'support'
    | 'delivery'
    | 'shipping'
    | 'logistics'
    | 'education'
    | 'financial'
    | 'banking'
    | 'government'
    | 'public'
    | 'healthcare'
    | 'health'
    | 'pharmacy'
    | 'medical'
    | 'insurance'
    | 'legal'
    | 'law'
    | 'notifications'
    | 'scheduling'
    | 'real estate'
    | 'property'
    | 'retail'
    | 'ecommerce'
    | 'sales'
    | 'marketing'
    | 'software'
    | 'technology'
    | 'tech'
    | 'media'
    | 'surveys'
    | 'market research'
    | 'travel'
    | 'hospitality'
    | 'hotel';

  jurisdiction_of_incorporation: string;

  /**
   * Legal name of the enterprise.
   */
  legal_name: string;

  /**
   * Approximate headcount range. Used for vetting heuristics; pick the bucket that
   * contains your current employee count.
   */
  number_of_employees: '1-10' | '11-50' | '51-200' | '201-500' | '501-2000' | '2001-10000' | '10001+';

  organization_contact: OrganizationContact;

  /**
   * Legal-entity form. Pick the form that matches your incorporation documents:
   *
   * - `corporation` - C-corp or S-corp.
   * - `llc` - limited liability company.
   * - `partnership` - general/limited partnership.
   * - `nonprofit` - non-profit corporation, charitable trust, or
   *   501(c)(3)/equivalent.
   * - `other` - anything else (sole proprietorships, government bodies, DBAs, etc.).
   *   You may be asked for additional documents during vetting.
   */
  organization_legal_type: 'corporation' | 'llc' | 'partnership' | 'nonprofit' | 'other';

  organization_physical_address: PhysicalAddress;

  /**
   * Organization category for vetting purposes:
   *
   * - `commercial` - for-profit business entities (LLC, corp, partnership, sole
   *   proprietorship). Most callers fall here.
   * - `government` - federal/state/local government bodies.
   * - `non_profit` - registered 501(c)(3)/equivalent (incl. educational
   *   institutions, charities, religious organisations).
   */
  organization_type: 'commercial' | 'government' | 'non_profit';

  website: string;

  /**
   * Optional corporate-registration / company-number identifier.
   */
  corporate_registration_number?: string | null;

  /**
   * Optional free-form string the caller can attach for their own bookkeeping.
   * Telnyx does not interpret it.
   */
  customer_reference?: string;

  /**
   * Optional D-U-N-S Number.
   */
  dun_bradstreet_number?: string | null;

  /**
   * Optional SIC code for the primary line of business.
   */
  primary_business_domain_sic_code?: string | null;

  /**
   * Optional professional-license number for regulated industries.
   */
  professional_license_number?: string | null;

  /**
   * `enterprise` for an organization registering its own DIRs; `bpo` for a Business
   * Process Outsourcer placing calls on behalf of one or more enterprises.
   */
  role_type?: 'enterprise' | 'bpo';
}

export interface EnterpriseUpdateParams {
  billing_address?: BillingAddress;

  billing_contact?: BillingContact;

  corporate_registration_number?: string | null;

  customer_reference?: string;

  doing_business_as?: string;

  dun_bradstreet_number?: string | null;

  fein?: string;

  industry?:
    | 'accounting'
    | 'finance'
    | 'billing'
    | 'collections'
    | 'business'
    | 'charity'
    | 'nonprofit'
    | 'communications'
    | 'telecom'
    | 'customer service'
    | 'support'
    | 'delivery'
    | 'shipping'
    | 'logistics'
    | 'education'
    | 'financial'
    | 'banking'
    | 'government'
    | 'public'
    | 'healthcare'
    | 'health'
    | 'pharmacy'
    | 'medical'
    | 'insurance'
    | 'legal'
    | 'law'
    | 'notifications'
    | 'scheduling'
    | 'real estate'
    | 'property'
    | 'retail'
    | 'ecommerce'
    | 'sales'
    | 'marketing'
    | 'software'
    | 'technology'
    | 'tech'
    | 'media'
    | 'surveys'
    | 'market research'
    | 'travel'
    | 'hospitality'
    | 'hotel';

  /**
   * Updated state/province/country of incorporation. Optional on update.
   */
  jurisdiction_of_incorporation?: string;

  /**
   * Legal name of the enterprise.
   */
  legal_name?: string;

  number_of_employees?: string;

  organization_contact?: OrganizationContact;

  organization_legal_type?: string;

  organization_physical_address?: PhysicalAddress;

  primary_business_domain_sic_code?: string | null;

  professional_license_number?: string | null;

  website?: string;
}

Enterprises.Reputation = Reputation;
Enterprises.Dir = Dir;

export declare namespace Enterprises {
  export {
    type BillingAddress as BillingAddress,
    type BillingContact as BillingContact,
    type EnterprisePublic as EnterprisePublic,
    type EnterprisePublicWrapped as EnterprisePublicWrapped,
    type NumberReputationPaginationMeta as NumberReputationPaginationMeta,
    type OrganizationContact as OrganizationContact,
    type PhysicalAddress as PhysicalAddress,
    type EnterprisePublicsDefaultFlatPagination as EnterprisePublicsDefaultFlatPagination,
    type EnterpriseListParams as EnterpriseListParams,
    type EnterpriseCreateParams as EnterpriseCreateParams,
    type EnterpriseUpdateParams as EnterpriseUpdateParams,
  };

  export {
    Reputation as Reputation,
    type EnterpriseReputationPublic as EnterpriseReputationPublic,
    type EnterpriseReputationPublicWrapped as EnterpriseReputationPublicWrapped,
    type ReputationCheckFrequency as ReputationCheckFrequency,
    type ReputationEnableParams as ReputationEnableParams,
    type ReputationUpdateFrequencyParams as ReputationUpdateFrequencyParams,
  };

  export { Dir as Dir, type DirListParams as DirListParams, type DirCreateParams as DirCreateParams };
}
