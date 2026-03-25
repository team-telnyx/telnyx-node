// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NumbersAPI from './numbers';
import {
  NumberCreateParams,
  NumberCreateResponse,
  NumberDeleteParams,
  NumberListParams,
  NumberListResponse,
  NumberListResponsesDefaultFlatPagination,
  NumberRetrieveParams,
  NumberRetrieveResponse,
  Numbers,
} from './numbers';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage Number Reputation enrollment and check frequency settings for an enterprise
 */
export class Reputation extends APIResource {
  numbers: NumbersAPI.Numbers = new NumbersAPI.Numbers(this._client);

  /**
   * Enable Number Reputation service for an enterprise.
   *
   * **Requirements:**
   *
   * - Signed LOA (Letter of Authorization) document ID
   * - Reputation check frequency (defaults to `business_daily`)
   * - Number Reputation Terms of Service must be accepted
   *
   * **Flow:**
   *
   * 1. Registers the enterprise for reputation monitoring
   * 2. Creates reputation settings with `pending` status
   * 3. Awaits admin approval before monitoring begins
   *
   * **Resubmission After Rejection:** If a previously rejected record exists, this
   * endpoint will delete it and create a new `pending` record.
   *
   * **Available Frequencies:**
   *
   * - `business_daily` — Monday–Friday
   * - `daily` — Every day
   * - `weekly` — Once per week
   * - `biweekly` — Once every two weeks
   * - `monthly` — Once per month
   * - `never` — Manual refresh only
   *
   * @example
   * ```ts
   * const reputation =
   *   await client.enterprises.reputation.create(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { loa_document_id: 'doc_01HXYZ1234ABCDEF' },
   *   );
   * ```
   */
  create(
    enterpriseID: string,
    body: ReputationCreateParams,
    options?: RequestOptions,
  ): APIPromise<ReputationCreateResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation`, { body, ...options });
  }

  /**
   * Retrieve the current Number Reputation settings for an enterprise.
   *
   * Returns the enrollment status (`pending`, `approved`, `rejected`, `deleted`),
   * check frequency, and any rejection reasons.
   *
   * Returns `404` if reputation has not been enabled for this enterprise.
   *
   * @example
   * ```ts
   * const reputations =
   *   await client.enterprises.reputation.list(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  list(enterpriseID: string, options?: RequestOptions): APIPromise<ReputationListResponse> {
    return this._client.get(path`/enterprises/${enterpriseID}/reputation`, options);
  }

  /**
   * Disable Number Reputation for an enterprise.
   *
   * This will:
   *
   * - Delete the reputation settings record
   * - Log the deletion for audit purposes
   * - Stop all future automated reputation checks
   *
   * **Note:** Can only be performed on `approved` reputation settings.
   *
   * @example
   * ```ts
   * await client.enterprises.reputation.deleteAll(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  deleteAll(enterpriseID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/enterprises/${enterpriseID}/reputation`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update how often reputation data is automatically refreshed.
   *
   * **Note:** The enterprise must have `approved` reputation settings. Updating
   * frequency on `pending` or `rejected` settings will return an error.
   *
   * **Available Frequencies:**
   *
   * - `business_daily` — Monday–Friday
   * - `daily` — Every day including weekends
   * - `weekly` — Once per week
   * - `biweekly` — Once every two weeks
   * - `monthly` — Once per month
   * - `never` — Manual refresh only (no automatic checks)
   *
   * @example
   * ```ts
   * const response =
   *   await client.enterprises.reputation.updateFrequency(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *     { check_frequency: 'business_daily' },
   *   );
   * ```
   */
  updateFrequency(
    enterpriseID: string,
    body: ReputationUpdateFrequencyParams,
    options?: RequestOptions,
  ): APIPromise<ReputationUpdateFrequencyResponse> {
    return this._client.patch(path`/enterprises/${enterpriseID}/reputation/frequency`, { body, ...options });
  }
}

export interface ReputationCreateResponse {
  data?: ReputationCreateResponse.Data;
}

export namespace ReputationCreateResponse {
  export interface Data {
    /**
     * Frequency for refreshing reputation data
     */
    check_frequency?: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';

    /**
     * When the reputation settings were created
     */
    created_at?: string;

    /**
     * ID of the associated enterprise
     */
    enterprise_id?: string;

    /**
     * ID of the signed LOA document
     */
    loa_document_id?: string | null;

    /**
     * Reasons for rejection (present when status is rejected)
     */
    rejection_reasons?: Array<string> | null;

    /**
     * Current enrollment status
     */
    status?: 'pending' | 'approved' | 'rejected' | 'deleted';

    /**
     * When the reputation settings were last updated
     */
    updated_at?: string;
  }
}

export interface ReputationListResponse {
  data?: ReputationListResponse.Data;
}

export namespace ReputationListResponse {
  export interface Data {
    /**
     * Frequency for refreshing reputation data
     */
    check_frequency?: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';

    /**
     * When the reputation settings were created
     */
    created_at?: string;

    /**
     * ID of the associated enterprise
     */
    enterprise_id?: string;

    /**
     * ID of the signed LOA document
     */
    loa_document_id?: string | null;

    /**
     * Reasons for rejection (present when status is rejected)
     */
    rejection_reasons?: Array<string> | null;

    /**
     * Current enrollment status
     */
    status?: 'pending' | 'approved' | 'rejected' | 'deleted';

    /**
     * When the reputation settings were last updated
     */
    updated_at?: string;
  }
}

export interface ReputationUpdateFrequencyResponse {
  data?: ReputationUpdateFrequencyResponse.Data;
}

export namespace ReputationUpdateFrequencyResponse {
  export interface Data {
    /**
     * Frequency for refreshing reputation data
     */
    check_frequency?: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';

    /**
     * When the reputation settings were created
     */
    created_at?: string;

    /**
     * ID of the associated enterprise
     */
    enterprise_id?: string;

    /**
     * ID of the signed LOA document
     */
    loa_document_id?: string | null;

    /**
     * Reasons for rejection (present when status is rejected)
     */
    rejection_reasons?: Array<string> | null;

    /**
     * Current enrollment status
     */
    status?: 'pending' | 'approved' | 'rejected' | 'deleted';

    /**
     * When the reputation settings were last updated
     */
    updated_at?: string;
  }
}

export interface ReputationCreateParams {
  /**
   * ID of the signed Letter of Authorization (LOA) document uploaded to the document
   * service
   */
  loa_document_id: string;

  /**
   * Frequency for automatically refreshing reputation data
   */
  check_frequency?: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';
}

export interface ReputationUpdateFrequencyParams {
  /**
   * New frequency for refreshing reputation data
   */
  check_frequency: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';
}

Reputation.Numbers = Numbers;

export declare namespace Reputation {
  export {
    type ReputationCreateResponse as ReputationCreateResponse,
    type ReputationListResponse as ReputationListResponse,
    type ReputationUpdateFrequencyResponse as ReputationUpdateFrequencyResponse,
    type ReputationCreateParams as ReputationCreateParams,
    type ReputationUpdateFrequencyParams as ReputationUpdateFrequencyParams,
  };

  export {
    Numbers as Numbers,
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
