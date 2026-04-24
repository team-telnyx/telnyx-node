// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NumbersAPI from './numbers';
import { NumberAssociateParams, NumberAssociateResponse, NumberDisassociateParams, NumberListParams, NumberRetrieveParams, NumberRetrieveResponse, Numbers } from './numbers';
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
   * Retrieve the current Number Reputation settings for an enterprise.
   *
   * Returns the enrollment status (`pending`, `approved`, `rejected`, `deleted`),
   * check frequency, and any rejection reasons.
   *
   * Returns `404` if reputation has not been enabled for this enterprise.
   *
   * @example
   * ```ts
   * const reputation =
   *   await client.enterprises.reputation.retrieve(
   *     '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   );
   * ```
   */
  retrieve(enterpriseID: string, options?: RequestOptions): APIPromise<ReputationRetrieveResponse> {
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
   * await client.enterprises.reputation.disable(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  disable(enterpriseID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/enterprises/${enterpriseID}/reputation`, { ...options, headers: buildHeaders([{Accept: '*/*'}, options?.headers]) });
  }

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
   * const response = await client.enterprises.reputation.enable(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   *   { loa_document_id: 'doc_01HXYZ1234ABCDEF' },
   * );
   * ```
   */
  enable(enterpriseID: string, body: ReputationEnableParams, options?: RequestOptions): APIPromise<ReputationEnableResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation`, { body, ...options });
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
  updateFrequency(enterpriseID: string, body: ReputationUpdateFrequencyParams, options?: RequestOptions): APIPromise<ReputationUpdateFrequencyResponse> {
    return this._client.patch(path`/enterprises/${enterpriseID}/reputation/frequency`, { body, ...options });
  }
}

export interface EnterpriseReputationPublic {
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

export interface ReputationRetrieveResponse {
  data?: EnterpriseReputationPublic;
}

export interface ReputationEnableResponse {
  data?: EnterpriseReputationPublic;
}

export interface ReputationUpdateFrequencyResponse {
  data?: EnterpriseReputationPublic;
}

export interface ReputationEnableParams {
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
    type EnterpriseReputationPublic as EnterpriseReputationPublic,
    type ReputationRetrieveResponse as ReputationRetrieveResponse,
    type ReputationEnableResponse as ReputationEnableResponse,
    type ReputationUpdateFrequencyResponse as ReputationUpdateFrequencyResponse,
    type ReputationEnableParams as ReputationEnableParams,
    type ReputationUpdateFrequencyParams as ReputationUpdateFrequencyParams
  };

  export {
    Numbers as Numbers,
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberAssociateResponse as NumberAssociateResponse,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
    type NumberAssociateParams as NumberAssociateParams,
    type NumberDisassociateParams as NumberDisassociateParams
  };
}
