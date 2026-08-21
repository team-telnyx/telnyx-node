// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductsAPI from './products';
import {
  PricingPaginationMeta,
  PricingTier,
  ProductListParams,
  ProductListResponse,
  ProductListResponsesDefaultFlatPagination,
  ProductRetrieveParams,
  ProductRetrieveResponse,
  ProductRetrieveResponsesDefaultFlatPagination,
  Products,
} from './products';

export class Pricing extends APIResource {
  products: ProductsAPI.Products = new ProductsAPI.Products(this._client);
}

Pricing.Products = Products;

export declare namespace Pricing {
  export {
    Products as Products,
    type PricingPaginationMeta as PricingPaginationMeta,
    type PricingTier as PricingTier,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductListResponse as ProductListResponse,
    type ProductListResponsesDefaultFlatPagination as ProductListResponsesDefaultFlatPagination,
    type ProductRetrieveResponsesDefaultFlatPagination as ProductRetrieveResponsesDefaultFlatPagination,
    type ProductListParams as ProductListParams,
    type ProductRetrieveParams as ProductRetrieveParams,
  };
}
