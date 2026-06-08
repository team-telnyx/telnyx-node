// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LoaAPI from './loa';
import { Loa, LoaRenderParams, LoaUpdateParams, LoaUpdateResponse } from './loa';
import * as NumbersAPI from './numbers';
import {
  NumberAssociateParams,
  NumberAssociateResponse,
  NumberDisassociateParams,
  NumberListParams,
  NumberListResponse,
  NumberListResponsesDefaultFlatPagination,
  NumberRefreshParams,
  NumberRefreshResponse,
  NumberRetrieveParams,
  NumberRetrieveResponse,
  Numbers,
} from './numbers';
import * as RemediationAPI from './remediation';
import {
  Remediation,
  RemediationCreateParams,
  RemediationCreateResponse,
  RemediationListParams,
  RemediationListResponse,
  RemediationListResponsesDefaultFlatPagination,
  RemediationRetrieveParams,
  RemediationRetrieveResponse,
} from './remediation';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Phone-number reputation monitoring (spam-score lookup and tracking).
 */
export class Reputation extends APIResource {
  numbers: NumbersAPI.Numbers = new NumbersAPI.Numbers(this._client);
  loa: LoaAPI.Loa = new LoaAPI.Loa(this._client);
  remediation: RemediationAPI.Remediation = new RemediationAPI.Remediation(this._client);

  /**
   * Phone Number Reputation tracks how your outbound caller-IDs are perceived (spam
   * risk, engagement, etc.) across the call-screening ecosystem. This endpoint reads
   * the enterprise-level settings: whether the product is enabled, the refresh
   * cadence, and the stored Letter of Authorization document id.
   *
   * Returns `404` if reputation has never been enabled for this enterprise.
   *
   * @example
   * ```ts
   * const reputation =
   *   await client.enterprises.reputation.retrieve(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   );
   * ```
   */
  retrieve(enterpriseID: string, options?: RequestOptions): APIPromise<ReputationRetrieveResponse> {
    return this._client.get(path`/enterprises/${enterpriseID}/reputation`, options);
  }

  /**
   * Disable Phone Number Reputation. All registered numbers are de-registered as a
   * cascade. The enterprise itself is unaffected. Returns `204` on success, `404` if
   * reputation is not enabled for this enterprise.
   *
   * @example
   * ```ts
   * await client.enterprises.reputation.disable(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   * );
   * ```
   */
  disable(enterpriseID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/enterprises/${enterpriseID}/reputation`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Activate Phone Number Reputation for the given enterprise. Requires an uploaded
   * Letter of Authorization document (the `loa_document_id` references the Telnyx
   * Documents API) and a refresh-frequency selection. After activation, individual
   * phone numbers can be registered via `POST .../reputation/numbers`.
   *
   * **Prerequisite**: the calling user must have agreed to the Phone Number
   * Reputation Terms of Service (`POST /terms_of_service/number_reputation/agree`).
   *
   * Failure modes:
   *
   * - `403` - Phone Number Reputation Terms of Service not accepted.
   * - `404` - enterprise does not exist or does not belong to your account.
   * - `400` - reputation already enabled for this enterprise.
   * - `422` - `loa_document_id` missing or `check_frequency` invalid.
   *
   * **Pricing:** This is a billable action. See https://telnyx.com/pricing/numbers
   * for current pricing.
   *
   * @example
   * ```ts
   * const response = await client.enterprises.reputation.enable(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *   {
   *     loa_document_id: '2a7e8337-e803-4057-a4ae-26c40eb0bc6c',
   *     check_frequency: 'business_daily',
   *   },
   * );
   * ```
   */
  enable(
    enterpriseID: string,
    body: ReputationEnableParams,
    options?: RequestOptions,
  ): APIPromise<ReputationEnableResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation`, { body, ...options });
  }

  /**
   * Update how often Telnyx refreshes the reputation data for this enterprise's
   * registered numbers. The new frequency takes effect on the next scheduled
   * refresh.
   *
   * The enterprise's reputation must be in `approved` status. A request made while
   * the status is `pending` is rejected with `400 Bad Request`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.enterprises.reputation.updateFrequency(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     { check_frequency: 'weekly' },
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

export interface EnterpriseReputationPublic {
  /**
   * How often Telnyx refreshes the stored reputation data for this enterprise's
   * registered numbers.
   */
  check_frequency?: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';

  created_at?: string;

  enterprise_id?: string;

  /**
   * Id of the signed LOA document.
   */
  loa_document_id?: string | null;

  /**
   * Customer-facing Letter-of-Authorization verification state. `approved` is
   * required (alongside reputation status) before phone numbers can be added.
   */
  loa_status?: 'pending' | 'approved' | 'rejected';

  /**
   * Populated when `status` is `rejected`.
   */
  rejection_reasons?: Array<string> | null;

  /**
   * Lifecycle status of the enterprise's Phone Number Reputation activation.
   */
  status?: 'pending' | 'approved' | 'deleted' | 'rejected';

  updated_at?: string;
}

export interface ReputationRetrieveResponse {
  data: EnterpriseReputationPublic;
}

export interface ReputationEnableResponse {
  data: EnterpriseReputationPublic;
}

export interface ReputationUpdateFrequencyResponse {
  data: EnterpriseReputationPublic;
}

export interface ReputationEnableParams {
  /**
   * Id of the signed Letter of Authorization document, returned by the Telnyx
   * Documents API after upload (upload via `POST /v2/documents`; see
   * https://developers.telnyx.com/api/documents).
   */
  loa_document_id: string;

  /**
   * How often Telnyx refreshes the stored reputation data for this enterprise's
   * registered numbers.
   */
  check_frequency?: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';
}

export interface ReputationUpdateFrequencyParams {
  /**
   * How often Telnyx refreshes the stored reputation data for this enterprise's
   * registered numbers.
   */
  check_frequency: 'business_daily' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'never';
}

Reputation.Numbers = Numbers;
Reputation.Loa = Loa;
Reputation.Remediation = Remediation;

export declare namespace Reputation {
  export {
    type EnterpriseReputationPublic as EnterpriseReputationPublic,
    type ReputationRetrieveResponse as ReputationRetrieveResponse,
    type ReputationEnableResponse as ReputationEnableResponse,
    type ReputationUpdateFrequencyResponse as ReputationUpdateFrequencyResponse,
    type ReputationEnableParams as ReputationEnableParams,
    type ReputationUpdateFrequencyParams as ReputationUpdateFrequencyParams,
  };

  export {
    Numbers as Numbers,
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberListResponse as NumberListResponse,
    type NumberAssociateResponse as NumberAssociateResponse,
    type NumberRefreshResponse as NumberRefreshResponse,
    type NumberListResponsesDefaultFlatPagination as NumberListResponsesDefaultFlatPagination,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
    type NumberAssociateParams as NumberAssociateParams,
    type NumberDisassociateParams as NumberDisassociateParams,
    type NumberRefreshParams as NumberRefreshParams,
  };

  export {
    Loa as Loa,
    type LoaUpdateResponse as LoaUpdateResponse,
    type LoaUpdateParams as LoaUpdateParams,
    type LoaRenderParams as LoaRenderParams,
  };

  export {
    Remediation as Remediation,
    type RemediationCreateResponse as RemediationCreateResponse,
    type RemediationRetrieveResponse as RemediationRetrieveResponse,
    type RemediationListResponse as RemediationListResponse,
    type RemediationListResponsesDefaultFlatPagination as RemediationListResponsesDefaultFlatPagination,
    type RemediationCreateParams as RemediationCreateParams,
    type RemediationRetrieveParams as RemediationRetrieveParams,
    type RemediationListParams as RemediationListParams,
  };
}
