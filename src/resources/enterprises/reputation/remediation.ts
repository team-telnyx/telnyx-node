// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Phone-number reputation monitoring (spam-score lookup and tracking).
 */
export class Remediation extends APIResource {
  /**
   * Submit a batch of phone numbers belonging to this enterprise for reputation
   * remediation. The request is accepted asynchronously: this endpoint returns `202`
   * with the persisted request id, then the request transitions through processing
   * states until completion. Use the GET endpoints to poll status and per-number
   * results.
   *
   * Each phone number must be in E.164 format and belong to this enterprise. A
   * number that already has an in-flight remediation request is rejected.
   *
   * @example
   * ```ts
   * const remediation =
   *   await client.enterprises.reputation.remediation.create(
   *     '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     {
   *       call_purpose:
   *         'Appointment reminders for our dental clinic.',
   *       phone_numbers: ['+19493253498', '+12134445566'],
   *       contact_email: 'ops@example.com',
   *       webhook_url:
   *         'https://example.com/webhooks/remediation',
   *     },
   *   );
   * ```
   */
  create(
    enterpriseID: string,
    body: RemediationCreateParams,
    options?: RequestOptions,
  ): APIPromise<RemediationCreateResponse> {
    return this._client.post(path`/enterprises/${enterpriseID}/reputation/remediation`, { body, ...options });
  }

  /**
   * Retrieve the full detail of a remediation request, including current status,
   * per-number results (once available), and submission metadata.
   *
   * @example
   * ```ts
   * const remediation =
   *   await client.enterprises.reputation.remediation.retrieve(
   *     'b7c1f1c0-7a9d-4f0a-9d3e-2f6a1c4b8e21',
   *     {
   *       enterprise_id: '4a6192a4-573d-446d-b3ce-aff9117272a6',
   *     },
   *   );
   * ```
   */
  retrieve(
    remediationID: string,
    params: RemediationRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RemediationRetrieveResponse> {
    const { enterprise_id } = params;
    return this._client.get(
      path`/enterprises/${enterprise_id}/reputation/remediation/${remediationID}`,
      options,
    );
  }

  /**
   * Paginated list of remediation requests for this enterprise. List items omit
   * per-number results and webhook URLs to keep the response small; call GET by id
   * for full detail. Supports JSON:API pagination and optional filters on status and
   * created-at range.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const remediationListResponse of client.enterprises.reputation.remediation.list(
   *   '4a6192a4-573d-446d-b3ce-aff9117272a6',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    enterpriseID: string,
    query: RemediationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RemediationListResponsesDefaultFlatPagination, RemediationListResponse> {
    return this._client.getAPIList(
      path`/enterprises/${enterpriseID}/reputation/remediation`,
      DefaultFlatPagination<RemediationListResponse>,
      { query, ...options },
    );
  }
}

export type RemediationListResponsesDefaultFlatPagination = DefaultFlatPagination<RemediationListResponse>;

export interface RemediationCreateResponse {
  /**
   * Full detail of a remediation request, returned on submit and GET by id.
   */
  data: RemediationCreateResponse.Data;
}

export namespace RemediationCreateResponse {
  /**
   * Full detail of a remediation request, returned on submit and GET by id.
   */
  export interface Data {
    id: string;

    call_purpose: string;

    created_at: string;

    /**
     * Total phone numbers in this batch, including any later cancelled. May exceed the
     * sum of the per-category result buckets, which omit cancelled numbers.
     */
    phone_numbers_count: number;

    /**
     * Numbers rejected before submission (e.g. cooldown).
     */
    phone_numbers_ineligible: number;

    /**
     * Numbers accepted for remediation, i.e. not rejected as ineligible. Counts
     * numbers still queued (pending) as well as processed ones.
     */
    phone_numbers_submitted: number;

    /**
     * Customer-facing status of a remediation request.
     */
    status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled';

    updated_at: string;

    contact_email?: string | null;

    /**
     * Per-category buckets. Populated once results are available. Null while the
     * request is still pending.
     */
    results?: Data.Results | null;

    tier1_completed_at?: string | null;

    tier2_completed_at?: string | null;

    webhook_url?: string | null;
  }

  export namespace Data {
    /**
     * Per-category buckets. Populated once results are available. Null while the
     * request is still pending.
     */
    export interface Results {
      ineligible?: Array<string>;

      not_flagged?: Array<string>;

      refused?: Array<string>;

      remediated?: Array<string>;

      requires_review?: Array<string>;
    }
  }
}

export interface RemediationRetrieveResponse {
  /**
   * Full detail of a remediation request, returned on submit and GET by id.
   */
  data: RemediationRetrieveResponse.Data;
}

export namespace RemediationRetrieveResponse {
  /**
   * Full detail of a remediation request, returned on submit and GET by id.
   */
  export interface Data {
    id: string;

    call_purpose: string;

    created_at: string;

    /**
     * Total phone numbers in this batch, including any later cancelled. May exceed the
     * sum of the per-category result buckets, which omit cancelled numbers.
     */
    phone_numbers_count: number;

    /**
     * Numbers rejected before submission (e.g. cooldown).
     */
    phone_numbers_ineligible: number;

    /**
     * Numbers accepted for remediation, i.e. not rejected as ineligible. Counts
     * numbers still queued (pending) as well as processed ones.
     */
    phone_numbers_submitted: number;

    /**
     * Customer-facing status of a remediation request.
     */
    status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled';

    updated_at: string;

    contact_email?: string | null;

    /**
     * Per-category buckets. Populated once results are available. Null while the
     * request is still pending.
     */
    results?: Data.Results | null;

    tier1_completed_at?: string | null;

    tier2_completed_at?: string | null;

    webhook_url?: string | null;
  }

  export namespace Data {
    /**
     * Per-category buckets. Populated once results are available. Null while the
     * request is still pending.
     */
    export interface Results {
      ineligible?: Array<string>;

      not_flagged?: Array<string>;

      refused?: Array<string>;

      remediated?: Array<string>;

      requires_review?: Array<string>;
    }
  }
}

/**
 * Slim list-endpoint shape. Omits per-number results and webhook URLs to keep
 * responses small.
 */
export interface RemediationListResponse {
  id: string;

  call_purpose: string;

  created_at: string;

  phone_numbers_count: number;

  /**
   * Customer-facing status of a remediation request.
   */
  status: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled';

  updated_at: string;

  tier1_completed_at?: string | null;

  tier2_completed_at?: string | null;
}

export interface RemediationCreateParams {
  /**
   * How the numbers are used (free text).
   */
  call_purpose: string;

  /**
   * Phone numbers in E.164 format. Each must belong to this enterprise. Maximum
   * 2,000 per request.
   */
  phone_numbers: Array<string>;

  /**
   * Optional contact email for this remediation request.
   */
  contact_email?: string;

  /**
   * Optional https:// URL for status notifications.
   */
  webhook_url?: string;
}

export interface RemediationRetrieveParams {
  /**
   * The enterprise id. Lowercase UUID.
   */
  enterprise_id: string;
}

export interface RemediationListParams extends DefaultFlatPaginationParams {
  /**
   * Only requests created on or after this timestamp (ISO 8601).
   */
  'filter[created_at][gte]'?: string;

  /**
   * Only requests created on or before this timestamp (ISO 8601).
   */
  'filter[created_at][lte]'?: string;

  /**
   * Filter by customer-facing status.
   */
  'filter[status]'?: 'pending' | 'in_progress' | 'completed' | 'failed' | 'cancelled';
}

export declare namespace Remediation {
  export {
    type RemediationCreateResponse as RemediationCreateResponse,
    type RemediationRetrieveResponse as RemediationRetrieveResponse,
    type RemediationListResponse as RemediationListResponse,
    type RemediationListResponsesDefaultFlatPagination as RemediationListResponsesDefaultFlatPagination,
    type RemediationCreateParams as RemediationCreateParams,
    type RemediationRetrieveParams as RemediationRetrieveParams,
    type RemediationListParams as RemediationListParams,
  };
}
