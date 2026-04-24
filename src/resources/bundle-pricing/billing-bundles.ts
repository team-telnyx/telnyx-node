// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BillingBundles extends APIResource {
  /**
   * Get a single bundle by ID.
   *
   * @example
   * ```ts
   * const billingBundle =
   *   await client.bundlePricing.billingBundles.retrieve(
   *     '8661948c-a386-4385-837f-af00f40f111a',
   *   );
   * ```
   */
  retrieve(
    bundleID: string,
    params: BillingBundleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BillingBundleRetrieveResponse> {
    const { authorization_bearer } = params ?? {};
    return this._client.get(path`/bundle_pricing/billing_bundles/${bundleID}`, {
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get all allowed bundles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const billingBundleSummary of client.bundlePricing.billingBundles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: BillingBundleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<BillingBundleSummariesDefaultFlatPagination, BillingBundleSummary> {
    const { authorization_bearer, ...query } = params ?? {};
    return this._client.getAPIList(
      '/bundle_pricing/billing_bundles',
      DefaultFlatPagination<BillingBundleSummary>,
      {
        query,
        ...options,
        headers: buildHeaders([
          { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
          options?.headers,
        ]),
      },
    );
  }
}

export type BillingBundleSummariesDefaultFlatPagination = DefaultFlatPagination<BillingBundleSummary>;

export interface BillingBundleSummary {
  /**
   * Bundle's ID, this is used to identify the bundle in the API.
   */
  id: string;

  /**
   * Bundle's cost code, this is used to identify the bundle in the billing system.
   */
  cost_code: string;

  /**
   * Date the bundle was created.
   */
  created_at: string;

  /**
   * Available to all customers or only to specific customers.
   */
  is_public: boolean;

  /**
   * Bundle's name, this is used to identify the bundle in the UI.
   */
  name: string;

  /**
   * Bundle's currency code.
   */
  currency?: string;

  /**
   * Monthly recurring charge price.
   */
  mrc_price?: number;

  /**
   * Slugified version of the bundle's name.
   */
  slug?: string;

  specs?: Array<string>;
}

export interface PaginationResponse {
  /**
   * The current page number.
   */
  page_number: number;

  /**
   * The number of results per page.
   */
  page_size: number;

  /**
   * Total number of pages from the results.
   */
  total_pages: number;

  /**
   * Total number of results returned.
   */
  total_results: number;
}

export interface BillingBundleRetrieveResponse {
  data: BillingBundleRetrieveResponse.Data;
}

export namespace BillingBundleRetrieveResponse {
  export interface Data {
    /**
     * Bundle's ID, this is used to identify the bundle in the API.
     */
    id: string;

    /**
     * If that bundle is active or not.
     */
    active: boolean;

    bundle_limits: Array<Data.BundleLimit>;

    /**
     * Bundle's cost code, this is used to identify the bundle in the billing system.
     */
    cost_code: string;

    /**
     * Date the bundle was created.
     */
    created_at: string;

    /**
     * Available to all customers or only to specific customers.
     */
    is_public: boolean;

    /**
     * Bundle's name, this is used to identify the bundle in the UI.
     */
    name: string;

    /**
     * Slugified version of the bundle's name.
     */
    slug?: string;
  }

  export namespace Data {
    export interface BundleLimit {
      id: string;

      created_at: string;

      metric: string;

      service: string;

      updated_at: string;

      billing_service?: string;

      /**
       * @deprecated Use country_iso instead
       */
      country?: string;

      country_code?: number;

      country_iso?: string;

      /**
       * An enumeration.
       */
      direction?: 'inbound' | 'outbound';

      limit?: number;

      rate?: string;

      types?: Array<string>;
    }
  }
}

export interface BillingBundleRetrieveParams {
  /**
   * Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export interface BillingBundleListParams extends DefaultFlatPaginationParams {
  /**
   * Query param: Consolidated filter parameter (deepObject style). Supports
   * filtering by country_iso and resource. Examples: filter[country_iso]=US or
   * filter[resource]=+15617819942
   */
  filter?: BillingBundleListParams.Filter;

  /**
   * Header param: Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export namespace BillingBundleListParams {
  /**
   * Consolidated filter parameter (deepObject style). Supports filtering by
   * country_iso and resource. Examples: filter[country_iso]=US or
   * filter[resource]=+15617819942
   */
  export interface Filter {
    /**
     * Filter by country code.
     */
    country_iso?: Array<string>;

    /**
     * Filter by resource.
     */
    resource?: Array<string>;
  }
}

export declare namespace BillingBundles {
  export {
    type BillingBundleSummary as BillingBundleSummary,
    type PaginationResponse as PaginationResponse,
    type BillingBundleRetrieveResponse as BillingBundleRetrieveResponse,
    type BillingBundleSummariesDefaultFlatPagination as BillingBundleSummariesDefaultFlatPagination,
    type BillingBundleRetrieveParams as BillingBundleRetrieveParams,
    type BillingBundleListParams as BillingBundleListParams,
  };
}
