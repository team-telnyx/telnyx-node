// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductsAPI from './products';
import {
  PricingPaginationMeta,
  PricingTier,
  ProductListParams,
  ProductListResponse,
  ProductListResponsesDefaultFlatPaginationForInexplicitNumberOrders,
  ProductRetrieveParams,
  ProductRetrieveResponse,
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
    type ProductListResponsesDefaultFlatPaginationForInexplicitNumberOrders as ProductListResponsesDefaultFlatPaginationForInexplicitNumberOrders,
    type ProductListParams as ProductListParams,
    type ProductRetrieveParams as ProductRetrieveParams,
  };
}
