// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BrandsAPI from './brands';
import * as AgentsAPI from './agents/agents';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage the legal business entities that operate RCS agents.
 */
export class Brands extends APIResource {
  /**
   * Lists RCS brands owned by the authenticated organization.
   *
   * @example
   * ```ts
   * const brandResponses = await client.rcs.brands.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<BrandListResponse> {
    return this._client.get('/rcs/brands', options);
  }

  /**
   * Creates an editable RCS brand draft. Creating the draft does not begin external
   * review.
   *
   * @example
   * ```ts
   * const brandResponse = await client.rcs.brands.create({
   *   addresses: {
   *     primary: {
   *       administrative_area: 'IL',
   *       city: 'Chicago',
   *       country_code: 'US',
   *       line_1: '1 Main Street',
   *       postal_code: '60601',
   *     },
   *   },
   *   contacts: {
   *     brand: {
   *       contact_type: 'BRAND',
   *       email: 'jane@example.com',
   *       first_name: 'Jane',
   *       last_name: 'Doe',
   *       phone_number: '+13125550100',
   *     },
   *   },
   *   display_name: 'Acme',
   *   identifiers: {
   *     ein: { identifier_type: 'EIN', value: '12-3456789' },
   *   },
   *   legal_entity_type: 'LIMITED_LIABILITY_COMPANY',
   *   legal_name: 'Acme LLC',
   *   organization_type: 'PRIVATE_PROFIT',
   *   website_url: 'https://www.example.com',
   * });
   * ```
   */
  create(body: BrandCreateParams, options?: RequestOptions): APIPromise<BrandResponse> {
    return this._client.post('/rcs/brands', { body, ...options });
  }

  /**
   * Retrieves an RCS brand and its current lifecycle status.
   *
   * @example
   * ```ts
   * const brandResponse = await client.rcs.brands.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BrandResponse> {
    return this._client.get(path`/rcs/brands/${id}`, options);
  }

  /**
   * Updates one or more fields on a brand while its status is `CREATED`. Submitted
   * brands cannot be changed.
   *
   * @example
   * ```ts
   * const brandResponse = await client.rcs.brands.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(id: string, body: BrandUpdateParams, options?: RequestOptions): APIPromise<BrandResponse> {
    return this._client.patch(path`/rcs/brands/${id}`, { body, ...options });
  }

  /**
   * Starts asynchronous provider provisioning and external review for a brand.
   * Repeating this request for an in-progress brand returns its current state
   * without creating new work.
   *
   * @example
   * ```ts
   * const brandResponse = await client.rcs.brands.submit(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  submit(id: string, options?: RequestOptions): APIPromise<BrandResponse> {
    return this._client.post(path`/rcs/brands/${id}/submit`, options);
  }
}

export interface BrandAddress {
  administrative_area: string;

  city: string;

  /**
   * The two-letter ISO 3166-1 country code.
   */
  country_code: string;

  line_1: string;

  postal_code: string;

  line_2?: string | null;
}

export interface BrandContact {
  contact_type: 'BRAND' | 'PRIMARY' | 'OFFICER' | 'AGENT' | 'RESPONSIBLE_PARTY' | 'BILLING' | 'UNKNOWN';

  email: string;

  first_name: string;

  last_name: string;

  phone_number: string;

  title?: string | null;
}

export type BrandLegalEntityType =
  | 'LIMITED_LIABILITY_COMPANY'
  | 'SOLE_PROPRIETORSHIP'
  | 'PARTNERSHIP'
  | 'CORPORATION'
  | 'S_CORPORATION';

export type BrandOrganizationType =
  | 'PRIVATE_PROFIT'
  | 'PUBLIC_PROFIT'
  | 'NON_PROFIT'
  | 'GOVERNMENT'
  | 'UNKNOWN';

export interface BrandResponse {
  addresses: { [key: string]: BrandAddress };

  brand_id: string;

  capabilities: AgentsAPI.CapabilitiesResponse;

  contacts: { [key: string]: BrandContact };

  display_name: string;

  identifiers: { [key: string]: EinBrandIdentifier | StockSymbolBrandIdentifier };

  legal_entity_type: string;

  legal_name: string;

  organization_type: string;

  profile_id: string | null;

  status:
    | 'CREATED'
    | 'CONFIGURED'
    | 'SUBMITTED'
    | 'REVIEWING'
    | 'VETTING'
    | 'VERIFIED'
    | 'REJECTED'
    | 'FAILED';

  website_url: string;
}

export interface EinBrandIdentifier {
  identifier_type: 'EIN';

  /**
   * Nine digits, optionally formatted as NN-NNNNNNN.
   */
  value: string;
}

export interface StockSymbolBrandIdentifier {
  identifier_type: 'STOCK_SYMBOL';

  /**
   * A stock symbol using EXCHANGE:SYMBOL.
   */
  value: string;
}

export type BrandListResponse = Array<BrandResponse>;

export interface BrandCreateParams {
  addresses: { [key: string]: BrandAddress };

  /**
   * Named business contacts. Use the `brand` key for the required BRAND contact.
   */
  contacts: BrandCreateParams.Contacts;

  display_name: string;

  /**
   * Named business identifiers. Use the `ein` key for the required EIN and
   * `stock_symbol` for a public-profit brand's stock symbol.
   */
  identifiers: BrandCreateParams.Identifiers;

  legal_entity_type: BrandLegalEntityType;

  legal_name: string;

  organization_type: BrandOrganizationType;

  website_url: string;

  /**
   * A Messaging Profile owned by the authenticated organization. Agents inherit this
   * value when they do not provide their own profile.
   */
  profile_id?: string | null;
}

export namespace BrandCreateParams {
  /**
   * Named business contacts. Use the `brand` key for the required BRAND contact.
   */
  export interface Contacts {
    brand: Contacts.Brand;

    [k: string]: BrandsAPI.BrandContact | Contacts.Brand | undefined;
  }

  export namespace Contacts {
    export interface Brand extends Omit<BrandsAPI.BrandContact, 'contact_type'> {
      contact_type?: 'BRAND';
    }
  }

  /**
   * Named business identifiers. Use the `ein` key for the required EIN and
   * `stock_symbol` for a public-profit brand's stock symbol.
   */
  export interface Identifiers {
    ein: BrandsAPI.EinBrandIdentifier;

    stock_symbol?: BrandsAPI.StockSymbolBrandIdentifier;

    [k: string]:
      | BrandsAPI.EinBrandIdentifier
      | BrandsAPI.StockSymbolBrandIdentifier
      | BrandsAPI.EinBrandIdentifier
      | BrandsAPI.StockSymbolBrandIdentifier
      | undefined;
  }
}

export interface BrandUpdateParams {
  addresses?: { [key: string]: BrandAddress };

  /**
   * Named business contacts. Use the `brand` key for the required BRAND contact.
   */
  contacts?: BrandUpdateParams.Contacts;

  display_name?: string;

  /**
   * Named business identifiers. Use the `ein` key for the required EIN and
   * `stock_symbol` for a public-profit brand's stock symbol.
   */
  identifiers?: BrandUpdateParams.Identifiers;

  legal_entity_type?: BrandLegalEntityType;

  legal_name?: string;

  organization_type?: BrandOrganizationType;

  profile_id?: string;

  website_url?: string;
}

export namespace BrandUpdateParams {
  /**
   * Named business contacts. Use the `brand` key for the required BRAND contact.
   */
  export interface Contacts {
    brand: Contacts.Brand;

    [k: string]: BrandsAPI.BrandContact | Contacts.Brand | undefined;
  }

  export namespace Contacts {
    export interface Brand extends Omit<BrandsAPI.BrandContact, 'contact_type'> {
      contact_type?: 'BRAND';
    }
  }

  /**
   * Named business identifiers. Use the `ein` key for the required EIN and
   * `stock_symbol` for a public-profit brand's stock symbol.
   */
  export interface Identifiers {
    ein: BrandsAPI.EinBrandIdentifier;

    stock_symbol?: BrandsAPI.StockSymbolBrandIdentifier;

    [k: string]:
      | BrandsAPI.EinBrandIdentifier
      | BrandsAPI.StockSymbolBrandIdentifier
      | BrandsAPI.EinBrandIdentifier
      | BrandsAPI.StockSymbolBrandIdentifier
      | undefined;
  }
}

export declare namespace Brands {
  export {
    type BrandAddress as BrandAddress,
    type BrandContact as BrandContact,
    type BrandLegalEntityType as BrandLegalEntityType,
    type BrandOrganizationType as BrandOrganizationType,
    type BrandResponse as BrandResponse,
    type EinBrandIdentifier as EinBrandIdentifier,
    type StockSymbolBrandIdentifier as StockSymbolBrandIdentifier,
    type BrandListResponse as BrandListResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
  };
}
