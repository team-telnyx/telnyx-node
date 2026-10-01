// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DirAPI from './dir';
import { Dir, DirCreateParams, DirListParams } from './dir';
import * as VerifyEmailAPI from './verify-email';
import {
  EnterpriseEmailVerificationStatusWrapped,
  VerifyEmail,
  VerifyEmailConfirmParams,
} from './verify-email';
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
  verifyEmail: VerifyEmailAPI.VerifyEmail = new VerifyEmailAPI.VerifyEmail(this._client);

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
   * For an approved BPO enterprise (`role_type` `bpo`), changing any identity field
   * (legal name, DBA, website, FEIN, industry, number of employees, physical
   * address, organization contact, D-U-N-S number, legal type, SIC code, corporate
   * registration number, professional license number, or jurisdiction of
   * incorporation) resets `bpo_verification_status` to `pending` for re-approval and
   * sets every DIR authorization for that BPO to `rejected`. After re-approval, link
   * it again with a newly signed LOA (a new `loa_document_id`); resending the old
   * one keeps the authorization `rejected`. Re-sending an unchanged value does not
   * reset anything.
   *
   * If Number Reputation is enabled on the enterprise, `legal_name`,
   * `doing_business_as`, `website`, `fein`, `industry`, `number_of_employees`,
   * `organization_physical_address`, `organization_contact`, and
   * `dun_bradstreet_number` cannot be changed: the request is rejected with `400`.
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

export interface BillingContact {
  /**
   * The email address of the person Telnyx should contact about billing for this
   * account.
   */
  email: string;

  /**
   * The first name of the person Telnyx should contact about billing for this
   * account.
   */
  first_name: string;

  /**
   * The last name of the person Telnyx should contact about billing for this
   * account.
   */
  last_name: string;

  /**
   * The phone number of the billing contact, in E.164 format, for example
   * +12125551234.
   */
  phone_number: string;
}

export interface EnterprisePublic {
  id?: string;

  billing_address?: PhysicalAddress;

  billing_contact?: BillingContact;

  /**
   * Reason Telnyx rejected the BPO (Business Process Outsourcer) verification, when
   * `bpo_verification_status` is `rejected`; `null` otherwise.
   */
  bpo_verification_rejection_reason?: string | null;

  /**
   * Whether Telnyx has approved this BPO (Business Process Outsourcer) account. Only
   * set for accounts created with `role_type` `bpo`; `null` for normal enterprises.
   * A BPO enterprise must be `approved` before a DIR can be linked to it through
   * `bpo_authorizations`.
   */
  bpo_verification_status?: 'pending' | 'approved' | 'rejected' | null;

  /**
   * True once Branded Calling has been activated on this enterprise (see
   * `POST /enterprises/{id}/branded_calling`).
   */
  branded_calling_enabled?: boolean;

  /**
   * The official number your company received when it was legally registered or
   * incorporated (for example from your state or national business registry). It is
   * on your certificate of incorporation.
   */
  corporate_registration_number?: string | null;

  country_code?: string;

  created_at?: string;

  /**
   * Your own label for this account. Enter any reference that helps you find it in
   * your records. Telnyx does not use it during vetting.
   */
  customer_reference?: string;

  /**
   * The trade name your business operates under if it is different from your legal
   * name, also called a Doing Business As (DBA) name. Leave blank if you only use
   * your legal name.
   */
  doing_business_as?: string;

  /**
   * Your optional 9-digit D-U-N-S Number issued by Dun & Bradstreet, a unique
   * identifier for your business. Leave blank if you do not have one.
   */
  dun_bradstreet_number?: string | null;

  /**
   * US Federal Employer Identification Number (`NN-NNNNNNN`) or Canadian equivalent.
   */
  fein?: string;

  /**
   * The industry your business operates in. Choose the closest match from the list;
   * if your value is not accepted, pick the nearest category.
   */
  industry?: string;

  /**
   * The state, province, or country where your business was legally incorporated,
   * for example Delaware.
   */
  jurisdiction_of_incorporation?: string;

  /**
   * Your business's full registered legal name, exactly as it appears on your
   * incorporation or tax documents, 3 to 64 characters.
   */
  legal_name?: string;

  /**
   * Approximate headcount range. Used for vetting heuristics; pick the bucket that
   * contains your current employee count.
   */
  number_of_employees?: string;

  /**
   * True once Phone Number Reputation has been enabled on this enterprise (see
   * `POST /enterprises/{id}/reputation`).
   */
  number_reputation_enabled?: boolean;

  organization_contact?: OrganizationContact;

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
  organization_legal_type?: string;

  organization_physical_address?: PhysicalAddress;

  organization_type?: string;

  /**
   * The 4-digit Standard Industrial Classification code for your main line of
   * business, which tells us what industry you operate in. Look it up in the SIC
   * code directory if you are unsure.
   */
  primary_business_domain_sic_code?: string | null;

  /**
   * If your business operates under a professional license (for example legal,
   * medical, or financial services), enter the license number issued by the
   * licensing authority. Leave blank if it does not apply.
   */
  professional_license_number?: string | null;

  role_type?: 'enterprise' | 'bpo';

  updated_at?: string;

  /**
   * Your business's public website address, including https://. Leave blank if your
   * business has no website.
   */
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
  /**
   * The email address of the main person Telnyx should contact about this account.
   * For a call center (BPO) account this is the email you will verify later, so use
   * a mailbox you can access.
   */
  email: string;

  /**
   * The first name of the main person Telnyx should contact about this account.
   */
  first_name: string;

  /**
   * The job title of the main person Telnyx should contact about this account.
   */
  job_title: string;

  /**
   * The last name of the main person Telnyx should contact about this account.
   */
  last_name: string;

  /**
   * The phone number of the main contact, in E.164 format, for example +12125551234.
   */
  phone_number: string;
}

export interface PhysicalAddress {
  /**
   * State or province code (e.g. `IL`, `ON`).
   */
  administrative_area: string;

  /**
   * The city of your registered business address.
   */
  city: string;

  /**
   * ISO 3166-1 alpha-2 code (currently `US` or `CA`).
   */
  country: string;

  /**
   * The postal or ZIP code of your registered business address.
   */
  postal_code: string;

  /**
   * The street address of your registered business, including the building number
   * and street name.
   */
  street_address: string;

  /**
   * An optional second address line, such as a suite, unit, or floor. Leave blank if
   * it does not apply.
   */
  extended_address?: string | null;
}

export interface EnterpriseListParams extends DefaultFlatPaginationParams {
  /**
   * Case-insensitive partial match on legal name.
   */
  'filter[legal_name][contains]'?: string;

  /**
   * Only return enterprises of this type: `bpo` for call-center (BPO) enterprises,
   * `enterprise` for normal enterprises. Omit to return both.
   */
  'filter[role_type]'?: 'enterprise' | 'bpo';

  /**
   * Filter by legal name (partial match).
   */
  legal_name?: string;
}

export interface EnterpriseCreateParams {
  billing_address: PhysicalAddress;

  billing_contact: BillingContact;

  /**
   * ISO 3166-1 alpha-2 country code. Currently `US` and `CA` are supported.
   */
  country_code: string;

  /**
   * The trade name your business operates under if it is different from your legal
   * name, also called a Doing Business As (DBA) name. Leave blank if you only use
   * your legal name.
   */
  doing_business_as: string;

  /**
   * US Federal Employer Identification Number (`NN-NNNNNNN`) or Canadian equivalent.
   */
  fein: string;

  /**
   * The industry your business operates in. Choose the closest match from the list;
   * if your value is not accepted, pick the nearest category.
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

  /**
   * The state, province, or country where your business was legally incorporated,
   * for example Delaware.
   */
  jurisdiction_of_incorporation: string;

  /**
   * Your business's full registered legal name, exactly as it appears on your
   * incorporation or tax documents, 3 to 64 characters.
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

  /**
   * Your business's public website address, including https://. Leave blank if your
   * business has no website.
   */
  website: string;

  /**
   * The official number your company received when it was legally registered or
   * incorporated (for example from your state or national business registry). It is
   * on your certificate of incorporation.
   */
  corporate_registration_number?: string | null;

  /**
   * Your own label for this account. Enter any reference that helps you find it in
   * your records. Telnyx does not use it during vetting.
   */
  customer_reference?: string;

  /**
   * Your optional 9-digit D-U-N-S Number issued by Dun & Bradstreet, a unique
   * identifier for your business. Leave blank if you do not have one.
   */
  dun_bradstreet_number?: string | null;

  /**
   * The 4-digit Standard Industrial Classification code for your main line of
   * business, which tells us what industry you operate in. Look it up in the SIC
   * code directory if you are unsure.
   */
  primary_business_domain_sic_code?: string | null;

  /**
   * If your business operates under a professional license (for example legal,
   * medical, or financial services), enter the license number issued by the
   * licensing authority. Leave blank if it does not apply.
   */
  professional_license_number?: string | null;

  /**
   * `enterprise` for an organization registering its own DIRs (the default, and the
   * right choice when the calls display your own brand). `bpo` for a Business
   * Process Outsourcer: a call center that places calls on behalf of other
   * enterprises and displays their brand. A `bpo` enterprise describes the call
   * center itself and cannot own a DIR. Each client the call center calls for gets
   * its own `enterprise` in the same account, with the client's DIR under it; that
   * DIR is then linked to the `bpo` enterprise through `bpo_authorizations`. Fixed
   * at creation.
   */
  role_type?: 'enterprise' | 'bpo';
}

export interface EnterpriseUpdateParams {
  billing_address?: PhysicalAddress;

  billing_contact?: BillingContact;

  /**
   * The official number your company received when it was legally registered or
   * incorporated (for example from your state or national business registry). It is
   * on your certificate of incorporation.
   */
  corporate_registration_number?: string | null;

  /**
   * Your own label for this account. Enter any reference that helps you find it in
   * your records. Telnyx does not use it during vetting.
   */
  customer_reference?: string;

  /**
   * The trade name your business operates under if it is different from your legal
   * name, also called a Doing Business As (DBA) name. Leave blank if you only use
   * your legal name.
   */
  doing_business_as?: string;

  /**
   * Your optional 9-digit D-U-N-S Number issued by Dun & Bradstreet, a unique
   * identifier for your business. Leave blank if you do not have one.
   */
  dun_bradstreet_number?: string | null;

  /**
   * US Federal Employer Identification Number (`NN-NNNNNNN`) or Canadian equivalent.
   */
  fein?: string;

  /**
   * The industry your business operates in. Choose the closest match from the list;
   * if your value is not accepted, pick the nearest category.
   */
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
   * The state, province, or country where your business was legally incorporated,
   * for example Delaware.
   */
  jurisdiction_of_incorporation?: string;

  /**
   * Your business's full registered legal name, exactly as it appears on your
   * incorporation or tax documents, 3 to 64 characters.
   */
  legal_name?: string;

  /**
   * Approximate headcount range. Used for vetting heuristics; pick the bucket that
   * contains your current employee count.
   */
  number_of_employees?: string;

  organization_contact?: OrganizationContact;

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
  organization_legal_type?: string;

  organization_physical_address?: PhysicalAddress;

  /**
   * The 4-digit Standard Industrial Classification code for your main line of
   * business, which tells us what industry you operate in. Look it up in the SIC
   * code directory if you are unsure.
   */
  primary_business_domain_sic_code?: string | null;

  /**
   * If your business operates under a professional license (for example legal,
   * medical, or financial services), enter the license number issued by the
   * licensing authority. Leave blank if it does not apply.
   */
  professional_license_number?: string | null;

  /**
   * Your business's public website address, including https://. Leave blank if your
   * business has no website.
   */
  website?: string;
}

Enterprises.Reputation = Reputation;
Enterprises.Dir = Dir;
Enterprises.VerifyEmail = VerifyEmail;

export declare namespace Enterprises {
  export {
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

  export {
    VerifyEmail as VerifyEmail,
    type EnterpriseEmailVerificationStatusWrapped as EnterpriseEmailVerificationStatusWrapped,
    type VerifyEmailConfirmParams as VerifyEmailConfirmParams,
  };
}
