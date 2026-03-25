// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Associate phone numbers with an enterprise for reputation monitoring and retrieve reputation scores
 */
export class Numbers extends APIResource {
  /**
   * Associate one or more phone numbers with an enterprise for Number Reputation
   * monitoring.
   *
   * **Validations:**
   *
   * - Phone numbers must be in E.164 format (e.g., `+16035551234`)
   * - Phone numbers must be in-service and belong to your account (verified via
   *   Warehouse)
   * - Phone numbers must be US local numbers
   * - Phone numbers cannot already be associated with any enterprise
   *
   * **Note:** This operation is atomic — if any number fails validation, the entire
   * request fails.
   *
   * **Maximum:** 100 phone numbers per request.
   *
   * @example
   * ```ts
   * const number =
   *   await client.enterprises.reputation.numbers.create(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { phone_numbers: ['+16035551234'] },
   *   );
   * ```
   */
  create(
    enterpriseID: string,
    body: NumberCreateParams,
    options?: RequestOptions,
  ): APIPromise<NumberCreateResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation/numbers`, { body, ...options });
  }

  /**
   * Get detailed reputation data for a specific phone number associated with an
   * enterprise.
   *
   * **Query Parameters:**
   *
   * - `fresh` (default: `false`): When `true`, fetches fresh reputation data (incurs
   *   API cost). When `false`, returns cached data. If no cached data exists, fresh
   *   data is automatically fetched.
   *
   * **Returns:**
   *
   * - `spam_risk`: Overall spam risk level (`low`, `medium`, `high`)
   * - `spam_category`: Spam category classification
   * - `maturity_score`: Maturity metric (0–100)
   * - `connection_score`: Connection quality metric (0–100)
   * - `engagement_score`: Engagement metric (0–100)
   * - `sentiment_score`: Sentiment metric (0–100)
   * - `last_refreshed_at`: Timestamp of last data refresh
   *
   * @example
   * ```ts
   * const number =
   *   await client.enterprises.reputation.numbers.retrieve(
   *     '+16035551234',
   *     {
   *       enterprise_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     },
   *   );
   * ```
   */
  retrieve(
    phoneNumber: string,
    params: NumberRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NumberRetrieveResponse> {
    const { enterprise_id, ...query } = params;
    return this._client.get(path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}`, {
      query,
      ...options,
    });
  }

  /**
   * List all phone numbers associated with an enterprise for Number Reputation
   * monitoring.
   *
   * Returns phone numbers with their cached reputation data (if available). Supports
   * pagination and filtering by phone number.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const numberListResponse of client.enterprises.reputation.numbers.list(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    enterpriseID: string,
    query: NumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NumberListResponsesDefaultFlatPagination, NumberListResponse> {
    return this._client.getAPIList(
      path`/enterprises/${enterpriseID}/reputation/numbers`,
      DefaultFlatPagination<NumberListResponse>,
      { query, ...options },
    );
  }

  /**
   * Remove a phone number from Number Reputation monitoring for an enterprise.
   *
   * The number will no longer be tracked and reputation data will no longer be
   * refreshed.
   *
   * @example
   * ```ts
   * await client.enterprises.reputation.numbers.delete(
   *   '+16035551234',
   *   { enterprise_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58' },
   * );
   * ```
   */
  delete(phoneNumber: string, params: NumberDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { enterprise_id } = params;
    return this._client.delete(path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type NumberListResponsesDefaultFlatPagination = DefaultFlatPagination<NumberListResponse>;

export interface NumberCreateResponse {
  data?: Array<NumberCreateResponse.Data>;

  meta?: NumberCreateResponse.Meta;
}

export namespace NumberCreateResponse {
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
     * When the record was last updated
     */
    updated_at?: string;
  }

  export interface Meta {
    /**
     * Current page number
     */
    page_number?: number;

    /**
     * Items per page
     */
    page_size?: number;

    /**
     * Total number of pages
     */
    total_pages?: number;

    /**
     * Total number of results
     */
    total_results?: number;
  }
}

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

export interface NumberCreateParams {
  /**
   * List of phone numbers to associate for reputation monitoring (max 100)
   */
  phone_numbers: Array<string>;
}

export interface NumberRetrieveParams {
  /**
   * Path param: Unique identifier of the enterprise (UUID)
   */
  enterprise_id: string;

  /**
   * Query param: When true, fetches fresh reputation data (incurs API cost). When
   * false, returns cached data.
   */
  fresh?: boolean;
}

export interface NumberListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by specific phone number (E.164 format)
   */
  phone_number?: string;
}

export interface NumberDeleteParams {
  /**
   * Unique identifier of the enterprise (UUID)
   */
  enterprise_id: string;
}

export declare namespace Numbers {
  export {
    type NumberCreateResponse as NumberCreateResponse,
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberListResponse as NumberListResponse,
    type NumberListResponsesDefaultFlatPagination as NumberListResponsesDefaultFlatPagination,
    type NumberCreateParams as NumberCreateParams,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
    type NumberDeleteParams as NumberDeleteParams,
  };
}
