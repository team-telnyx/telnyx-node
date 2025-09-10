// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BillingBundlesAPI from './billing-bundles';
import {
  BillingBundleListParams,
  BillingBundleListResponse,
  BillingBundleRetrieveParams,
  BillingBundleRetrieveResponse,
  BillingBundleSummary,
  BillingBundles,
  PaginationResponse,
} from './billing-bundles';
import * as UserBundlesAPI from './user-bundles';
import {
  UserBundle,
  UserBundleCreateParams,
  UserBundleCreateResponse,
  UserBundleDeactivateParams,
  UserBundleDeactivateResponse,
  UserBundleListParams,
  UserBundleListResourcesParams,
  UserBundleListResourcesResponse,
  UserBundleListResponse,
  UserBundleListUnusedParams,
  UserBundleListUnusedResponse,
  UserBundleResource,
  UserBundleRetrieveParams,
  UserBundleRetrieveResponse,
  UserBundles,
} from './user-bundles';

export class BundlePricing extends APIResource {
  billingBundles: BillingBundlesAPI.BillingBundles = new BillingBundlesAPI.BillingBundles(this._client);
  userBundles: UserBundlesAPI.UserBundles = new UserBundlesAPI.UserBundles(this._client);
}

BundlePricing.BillingBundles = BillingBundles;
BundlePricing.UserBundles = UserBundles;

export declare namespace BundlePricing {
  export {
    BillingBundles as BillingBundles,
    type BillingBundleSummary as BillingBundleSummary,
    type PaginationResponse as PaginationResponse,
    type BillingBundleRetrieveResponse as BillingBundleRetrieveResponse,
    type BillingBundleListResponse as BillingBundleListResponse,
    type BillingBundleRetrieveParams as BillingBundleRetrieveParams,
    type BillingBundleListParams as BillingBundleListParams,
  };

  export {
    UserBundles as UserBundles,
    type UserBundle as UserBundle,
    type UserBundleResource as UserBundleResource,
    type UserBundleCreateResponse as UserBundleCreateResponse,
    type UserBundleRetrieveResponse as UserBundleRetrieveResponse,
    type UserBundleListResponse as UserBundleListResponse,
    type UserBundleDeactivateResponse as UserBundleDeactivateResponse,
    type UserBundleListResourcesResponse as UserBundleListResourcesResponse,
    type UserBundleListUnusedResponse as UserBundleListUnusedResponse,
    type UserBundleCreateParams as UserBundleCreateParams,
    type UserBundleRetrieveParams as UserBundleRetrieveParams,
    type UserBundleListParams as UserBundleListParams,
    type UserBundleDeactivateParams as UserBundleDeactivateParams,
    type UserBundleListResourcesParams as UserBundleListResourcesParams,
    type UserBundleListUnusedParams as UserBundleListUnusedParams,
  };
}
