// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ProductsAPI from './products';
import { APIPromise } from '../../core/api-promise';
import {
  DefaultFlatPaginationForInexplicitNumberOrders,
  type DefaultFlatPaginationForInexplicitNumberOrdersParams,
  PagePromise,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Public pricing operations
 */
export class Products extends APIResource {
  /**
   * Returns the full product catalog with pagination. Each entry contains a slug,
   * display name, and description. Use the slug to fetch per-product pricing via GET
   * /pricing/products/{slug}.
   */
  list(
    query: ProductListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ProductListResponsesDefaultFlatPaginationForInexplicitNumberOrders, ProductListResponse> {
    return this._client.getAPIList(
      '/pricing/products',
      DefaultFlatPaginationForInexplicitNumberOrders<ProductListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns pricing entries for a single product. Most products return standard rate
   * entries with fields like rate, unit, country_iso, direction, and tiers.
   * Inference products return model-specific fields (model, input_rate, output_rate,
   * cached_input_rate) with tiered pricing. Some products use rate decks
   * (pricing_type: rate_deck) where rates are determined dynamically.
   */
  retrieve(
    slug: string,
    query: ProductRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/pricing/products/${slug}`, { query, ...options });
  }
}

export type ProductListResponsesDefaultFlatPaginationForInexplicitNumberOrders =
  DefaultFlatPaginationForInexplicitNumberOrders<ProductListResponse>;

export interface PricingPaginationMeta {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

export interface PricingTier {
  /**
   * Upper bound of the tier (exclusive). Null means no upper limit.
   */
  max: number | null;

  /**
   * Lower bound of the tier (inclusive).
   */
  min: number;

  /**
   * Rate for this tier. Numeric for standard products, string for inference
   * products.
   */
  rate: number | string;
}

export interface ProductRetrieveResponse {
  data: Array<ProductRetrieveResponse.Data>;

  meta: PricingPaginationMeta;
}

export namespace ProductRetrieveResponse {
  /**
   * A single pricing entry. Standard products include rate, unit, currency, type,
   * country_iso, direction, and tiers. Inference products include model, input_rate,
   * output_rate, cached_input_rate, and their respective tier arrays. Rate-deck
   * products include pricing_type and note fields with null rate and empty tiers.
   */
  export interface Data {
    /**
     * Cached input token rate. Present only on inference product entries.
     */
    cached_input_rate?: string;

    /**
     * Cached input token tiered pricing. Present only on inference product entries.
     */
    cached_input_tiers?: Array<ProductsAPI.PricingTier>;

    /**
     * ISO country code. Null for non-geographic products.
     */
    country_iso?: string | null;

    /**
     * ISO currency code (e.g., USD).
     */
    currency?: string;

    /**
     * Direction (e.g., termination). Null for non-directional products.
     */
    direction?: string | null;

    /**
     * Input token rate. Present only on inference product entries.
     */
    input_rate?: string;

    /**
     * Input token tiered pricing. Present only on inference product entries.
     */
    input_tiers?: Array<ProductsAPI.PricingTier>;

    /**
     * Model identifier. Present only on inference product entries.
     */
    model?: string;

    /**
     * Human-readable name describing the pricing entry.
     */
    name?: string;

    /**
     * Additional note for rate-deck products (e.g., "Pricing is determined by the
     * WhatsApp rate deck.").
     */
    note?: string | null;

    /**
     * Output token rate. Present only on inference product entries.
     */
    output_rate?: string;

    /**
     * Output token tiered pricing. Present only on inference product entries.
     */
    output_tiers?: Array<ProductsAPI.PricingTier>;

    /**
     * Pricing type for non-standard products (e.g., rate_deck). Absent on standard
     * products.
     */
    pricing_type?: string | null;

    /**
     * Per-unit rate. Numeric for standard products, string for inference products.
     * Null for rate-deck products.
     */
    rate?: number | string | null;

    /**
     * Volume-based tiered pricing. Empty for rate-deck products.
     */
    tiers?: Array<ProductsAPI.PricingTier>;

    /**
     * Pricing type (e.g., usage).
     */
    type?: string;

    /**
     * Unit of measurement (e.g., part, message, GB, per_1k_tokens).
     */
    unit?: string;
  }
}

export interface ProductListResponse {
  /**
   * Human-readable description of the product.
   */
  description: string;

  /**
   * Display name of the product.
   */
  name: string;

  /**
   * Product identifier used in the per-product pricing endpoint.
   */
  slug: string;
}

export interface ProductListParams extends DefaultFlatPaginationForInexplicitNumberOrdersParams {}

export interface ProductRetrieveParams {
  /**
   * Page number (1-based).
   */
  page_number?: number;

  /**
   * Number of items per page (max 100).
   */
  page_size?: number;
}

export declare namespace Products {
  export {
    type PricingPaginationMeta as PricingPaginationMeta,
    type PricingTier as PricingTier,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductListResponse as ProductListResponse,
    type ProductListResponsesDefaultFlatPaginationForInexplicitNumberOrders as ProductListResponsesDefaultFlatPaginationForInexplicitNumberOrders,
    type ProductListParams as ProductListParams,
    type ProductRetrieveParams as ProductRetrieveParams,
  };
}
