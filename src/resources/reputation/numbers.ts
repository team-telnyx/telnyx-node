// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Associate phone numbers with an enterprise for reputation monitoring and retrieve reputation scores
 */
export class Numbers extends APIResource {
  /**
   * Get reputation data for a specific phone number without requiring an
   * `enterprise_id`.
   *
   * Same response as the enterprise-scoped endpoint. Uses cached data by default.
   */
  retrieve(
    phoneNumber: string,
    query: NumberRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberRetrieveResponse> {
    return this._client.get(path`/reputation/numbers/${phoneNumber}`, { query, ...options });
  }

  /**
   * List all phone numbers enrolled in Number Reputation monitoring for your
   * account. This is a simplified endpoint that does not require an `enterprise_id`
   * — it returns numbers across all your enterprises.
   *
   * Supports pagination and filtering by phone number.
   */
  list(
    query: NumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NumberListResponsesDefaultFlatPagination, NumberListResponse> {
    return this._client.getAPIList('/reputation/numbers', DefaultFlatPagination<NumberListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Remove a phone number from Number Reputation monitoring without requiring an
   * `enterprise_id`.
   */
  delete(phoneNumber: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/reputation/numbers/${phoneNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type NumberListResponsesDefaultFlatPagination = DefaultFlatPagination<NumberListResponse>;

export interface NumberRetrieveResponse {
  data?: NumberRetrieveResponse.Data;
}

export namespace NumberRetrieveResponse {
  export interface Data {
    /**
     * Unique identifier
     */
    id?: string;

    /**
     * When the number was associated
     */
    created_at?: string;

    /**
     * ID of the associated enterprise
     */
    enterprise_id?: string;

    /**
     * Phone number in E.164 format
     */
    phone_number?: string;

    /**
     * Reputation metrics (null if not yet fetched)
     */
    reputation_data?: Data.ReputationData | unknown;

    /**
     * When the record was last updated
     */
    updated_at?: string;
  }

  export namespace Data {
    /**
     * Reputation metrics
     */
    export interface ReputationData {
      /**
       * Connection quality metric (0–100)
       */
      connection_score?: number | null;

      /**
       * Engagement metric (0–100). Higher = more positive engagement
       */
      engagement_score?: number | null;

      /**
       * Timestamp of the last reputation data refresh
       */
      last_refreshed_at?: string | null;

      /**
       * Maturity metric (0–100). Higher = more established number
       */
      maturity_score?: number | null;

      /**
       * Sentiment metric (0–100). Higher = more positive sentiment
       */
      sentiment_score?: number | null;

      /**
       * Spam category classification (e.g., Telemarketing, Debt Collector)
       */
      spam_category?: string | null;

      /**
       * Overall spam risk level
       */
      spam_risk?: 'low' | 'medium' | 'high' | null;
    }
  }
}

export interface NumberListResponse {
  /**
   * Unique identifier
   */
  id?: string;

  /**
   * When the number was associated
   */
  created_at?: string;

  /**
   * ID of the associated enterprise
   */
  enterprise_id?: string;

  /**
   * Phone number in E.164 format
   */
  phone_number?: string;

  /**
   * Reputation metrics (null if not yet fetched)
   */
  reputation_data?: NumberListResponse.ReputationData | unknown;

  /**
   * When the record was last updated
   */
  updated_at?: string;
}

export namespace NumberListResponse {
  /**
   * Reputation metrics
   */
  export interface ReputationData {
    /**
     * Connection quality metric (0–100)
     */
    connection_score?: number | null;

    /**
     * Engagement metric (0–100). Higher = more positive engagement
     */
    engagement_score?: number | null;

    /**
     * Timestamp of the last reputation data refresh
     */
    last_refreshed_at?: string | null;

    /**
     * Maturity metric (0–100). Higher = more established number
     */
    maturity_score?: number | null;

    /**
     * Sentiment metric (0–100). Higher = more positive sentiment
     */
    sentiment_score?: number | null;

    /**
     * Spam category classification (e.g., Telemarketing, Debt Collector)
     */
    spam_category?: string | null;

    /**
     * Overall spam risk level
     */
    spam_risk?: 'low' | 'medium' | 'high' | null;
  }
}

export interface NumberRetrieveParams {
  /**
   * When true, fetches fresh reputation data (incurs API cost). When false, returns
   * cached data.
   */
  fresh?: boolean;
}

export interface NumberListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by specific phone number (E.164 format)
   */
  phone_number?: string;
}

export declare namespace Numbers {
  export {
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberListResponse as NumberListResponse,
    type NumberListResponsesDefaultFlatPagination as NumberListResponsesDefaultFlatPagination,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
  };
}
