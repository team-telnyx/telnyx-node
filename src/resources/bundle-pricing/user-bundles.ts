// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BillingBundlesAPI from './billing-bundles';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class UserBundles extends APIResource {
  /**
   * Creates multiple user bundles for the user.
   *
   * @example
   * ```ts
   * const userBundle =
   *   await client.bundlePricing.userBundles.create();
   * ```
   */
  create(params: UserBundleCreateParams, options?: RequestOptions): APIPromise<UserBundleCreateResponse> {
    const { authorization_bearer, ...body } = params;
    return this._client.post('/bundle_pricing/user_bundles/bulk', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves a user bundle by its ID.
   *
   * @example
   * ```ts
   * const userBundle =
   *   await client.bundlePricing.userBundles.retrieve(
   *     'ca1d2263-d1f1-43ac-ba53-248e7a4bb26a',
   *   );
   * ```
   */
  retrieve(
    userBundleID: string,
    params: UserBundleRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserBundleRetrieveResponse> {
    const { authorization_bearer } = params ?? {};
    return this._client.get(path`/bundle_pricing/user_bundles/${userBundleID}`, {
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Get a paginated list of user bundles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userBundle of client.bundlePricing.userBundles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    params: UserBundleListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UserBundlesDefaultFlatPagination, UserBundle> {
    const { authorization_bearer, ...query } = params ?? {};
    return this._client.getAPIList('/bundle_pricing/user_bundles', DefaultFlatPagination<UserBundle>, {
      query,
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Deactivates a user bundle by its ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.bundlePricing.userBundles.deactivate(
   *     'ca1d2263-d1f1-43ac-ba53-248e7a4bb26a',
   *   );
   * ```
   */
  deactivate(
    userBundleID: string,
    params: UserBundleDeactivateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserBundleDeactivateResponse> {
    const { authorization_bearer } = params ?? {};
    return this._client.delete(path`/bundle_pricing/user_bundles/${userBundleID}`, {
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Retrieves the resources of a user bundle by its ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.bundlePricing.userBundles.listResources(
   *     'ca1d2263-d1f1-43ac-ba53-248e7a4bb26a',
   *   );
   * ```
   */
  listResources(
    userBundleID: string,
    params: UserBundleListResourcesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserBundleListResourcesResponse> {
    const { authorization_bearer } = params ?? {};
    return this._client.get(path`/bundle_pricing/user_bundles/${userBundleID}/resources`, {
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Returns all user bundles that aren't in use.
   *
   * @example
   * ```ts
   * const response =
   *   await client.bundlePricing.userBundles.listUnused();
   * ```
   */
  listUnused(
    params: UserBundleListUnusedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserBundleListUnusedResponse> {
    const { authorization_bearer, ...query } = params ?? {};
    return this._client.get('/bundle_pricing/user_bundles/unused', {
      query,
      ...options,
      headers: buildHeaders([
        { ...(authorization_bearer != null ? { authorization_bearer: authorization_bearer } : undefined) },
        options?.headers,
      ]),
    });
  }
}

export type UserBundlesDefaultFlatPagination = DefaultFlatPagination<UserBundle>;

export interface UserBundle {
  /**
   * User bundle's ID, this is used to identify the user bundle in the API.
   */
  id: string;

  /**
   * Status of the user bundle.
   */
  active: boolean;

  billing_bundle: BillingBundlesAPI.BillingBundleSummary;

  /**
   * Date the user bundle was created.
   */
  created_at: string;

  resources: Array<UserBundleResource>;

  /**
   * The customer's ID that owns this user bundle.
   */
  user_id: string;

  /**
   * Date the user bundle was last updated.
   */
  updated_at?: string | null;
}

export interface UserBundleResource {
  /**
   * Resource's ID.
   */
  id: string;

  /**
   * Date the resource was created.
   */
  created_at: string;

  /**
   * The resource itself (usually a phone number).
   */
  resource: string;

  /**
   * The type of the resource (usually 'number').
   */
  resource_type: string;

  /**
   * Date the resource was last updated.
   */
  updated_at?: string | null;
}

export interface UserBundleCreateResponse {
  data: Array<UserBundle>;
}

export interface UserBundleRetrieveResponse {
  data: UserBundle;
}

export interface UserBundleDeactivateResponse {
  data: UserBundle;
}

export interface UserBundleListResourcesResponse {
  data: Array<UserBundleResource>;
}

export interface UserBundleListUnusedResponse {
  data: Array<UserBundleListUnusedResponse.Data>;
}

export namespace UserBundleListUnusedResponse {
  export interface Data {
    billing_bundle: BillingBundlesAPI.BillingBundleSummary;

    /**
     * List of user bundle IDs for given bundle.
     */
    user_bundle_ids: Array<string>;
  }
}

export interface UserBundleCreateParams {
  /**
   * Body param: Idempotency key for the request. Can be any UUID, but should always
   * be unique for each request.
   */
  idempotency_key?: string;

  /**
   * Body param
   */
  items?: Array<UserBundleCreateParams.Item>;

  /**
   * Header param: Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export namespace UserBundleCreateParams {
  export interface Item {
    /**
     * Quantity of user bundles to order.
     */
    billing_bundle_id: string;

    /**
     * Quantity of user bundles to order.
     */
    quantity: number;
  }
}

export interface UserBundleRetrieveParams {
  /**
   * Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export interface UserBundleListParams extends DefaultFlatPaginationParams {
  /**
   * Query param: Consolidated filter parameter (deepObject style). Supports
   * filtering by country_iso and resource. Examples: filter[country_iso]=US or
   * filter[resource]=+15617819942
   */
  filter?: UserBundleListParams.Filter;

  /**
   * Header param: Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export namespace UserBundleListParams {
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

export interface UserBundleDeactivateParams {
  /**
   * Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export interface UserBundleListResourcesParams {
  /**
   * Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export interface UserBundleListUnusedParams {
  /**
   * Query param: Consolidated filter parameter (deepObject style). Supports
   * filtering by country_iso and resource. Examples: filter[country_iso]=US or
   * filter[resource]=+15617819942
   */
  filter?: UserBundleListUnusedParams.Filter;

  /**
   * Header param: Authenticates the request with your Telnyx API V2 KEY
   */
  authorization_bearer?: string;
}

export namespace UserBundleListUnusedParams {
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

export declare namespace UserBundles {
  export {
    type UserBundle as UserBundle,
    type UserBundleResource as UserBundleResource,
    type UserBundleCreateResponse as UserBundleCreateResponse,
    type UserBundleRetrieveResponse as UserBundleRetrieveResponse,
    type UserBundleDeactivateResponse as UserBundleDeactivateResponse,
    type UserBundleListResourcesResponse as UserBundleListResourcesResponse,
    type UserBundleListUnusedResponse as UserBundleListUnusedResponse,
    type UserBundlesDefaultFlatPagination as UserBundlesDefaultFlatPagination,
    type UserBundleCreateParams as UserBundleCreateParams,
    type UserBundleRetrieveParams as UserBundleRetrieveParams,
    type UserBundleListParams as UserBundleListParams,
    type UserBundleDeactivateParams as UserBundleDeactivateParams,
    type UserBundleListResourcesParams as UserBundleListResourcesParams,
    type UserBundleListUnusedParams as UserBundleListUnusedParams,
  };
}
