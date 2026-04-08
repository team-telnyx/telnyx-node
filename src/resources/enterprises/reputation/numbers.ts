// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { ReputationPhoneNumberWithReputationDataDefaultFlatPagination } from '../../shared';
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
   * for await (const reputationPhoneNumberWithReputationData of client.enterprises.reputation.numbers.list(
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
  ): PagePromise<
    ReputationPhoneNumberWithReputationDataDefaultFlatPagination,
    Shared.ReputationPhoneNumberWithReputationData
  > {
    return this._client.getAPIList(
      path`/enterprises/${enterpriseID}/reputation/numbers`,
      DefaultFlatPagination<Shared.ReputationPhoneNumberWithReputationData>,
      { query, ...options },
    );
  }

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
   * const response =
   *   await client.enterprises.reputation.numbers.associate(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { phone_numbers: ['+16035551234'] },
   *   );
   * ```
   */
  associate(
    enterpriseID: string,
    body: NumberAssociateParams,
    options?: RequestOptions,
  ): APIPromise<NumberAssociateResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation/numbers`, { body, ...options });
  }

  /**
   * Remove a phone number from Number Reputation monitoring for an enterprise.
   *
   * The number will no longer be tracked and reputation data will no longer be
   * refreshed.
   *
   * @example
   * ```ts
   * await client.enterprises.reputation.numbers.disassociate(
   *   '+16035551234',
   *   { enterprise_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58' },
   * );
   * ```
   */
  disassociate(
    phoneNumber: string,
    params: NumberDisassociateParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { enterprise_id } = params;
    return this._client.delete(path`/enterprises/${enterprise_id}/reputation/numbers/${phoneNumber}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface NumberRetrieveResponse {
  data?: Shared.ReputationPhoneNumberWithReputationData;
}

export interface NumberAssociateResponse {
  data?: Array<NumberAssociateResponse.Data>;

  meta?: Shared.MetaInfo;
}

export namespace NumberAssociateResponse {
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

export interface NumberAssociateParams {
  /**
   * List of phone numbers to associate for reputation monitoring (max 100)
   */
  phone_numbers: Array<string>;
}

export interface NumberDisassociateParams {
  /**
   * Unique identifier of the enterprise (UUID)
   */
  enterprise_id: string;
}

export declare namespace Numbers {
  export {
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberAssociateResponse as NumberAssociateResponse,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
    type NumberAssociateParams as NumberAssociateParams,
    type NumberDisassociateParams as NumberDisassociateParams,
  };
}

export { type ReputationPhoneNumberWithReputationDataDefaultFlatPagination };
