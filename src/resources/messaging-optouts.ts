// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class MessagingOptouts extends APIResource {
  /**
   * Retrieve a list of opt-out blocks.
   */
  list(
    query: MessagingOptoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagingOptoutListResponsesDefaultFlatPagination, MessagingOptoutListResponse> {
    return this._client.getAPIList('/messaging_optouts', DefaultFlatPagination<MessagingOptoutListResponse>, {
      query,
      ...options,
    });
  }
}

export type MessagingOptoutListResponsesDefaultFlatPagination =
  DefaultFlatPagination<MessagingOptoutListResponse>;

export interface MessagingOptoutListResponse {
  /**
   * The timestamp when the opt-out was created
   */
  created_at?: string;

  /**
   * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
   * code).
   */
  from?: string;

  /**
   * The keyword that triggered the opt-out.
   */
  keyword?: string | null;

  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id?: string | null;

  /**
   * Receiving address (+E.164 formatted phone number or short code).
   */
  to?: string;
}

export interface MessagingOptoutListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated created_at parameter (deepObject style). Originally:
   * created_at[gte], created_at[lte]
   */
  created_at?: MessagingOptoutListParams.CreatedAt;

  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[messaging_profile_id], filter[from]
   */
  filter?: MessagingOptoutListParams.Filter;

  /**
   * If receiving address (+E.164 formatted phone number) should be redacted
   */
  redaction_enabled?: string;
}

export namespace MessagingOptoutListParams {
  /**
   * Consolidated created_at parameter (deepObject style). Originally:
   * created_at[gte], created_at[lte]
   */
  export interface CreatedAt {
    /**
     * Filter opt-outs created after this date (ISO-8601 format)
     */
    gte?: string;

    /**
     * Filter opt-outs created before this date (ISO-8601 format)
     */
    lte?: string;
  }

  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[messaging_profile_id], filter[from]
   */
  export interface Filter {
    /**
     * The sending address (+E.164 formatted phone number, alphanumeric sender ID, or
     * short code) to retrieve opt-outs for
     */
    from?: string;

    /**
     * The ID of the messaging profile to retrieve opt-outs for
     */
    messaging_profile_id?: string;
  }
}

export declare namespace MessagingOptouts {
  export {
    type MessagingOptoutListResponse as MessagingOptoutListResponse,
    type MessagingOptoutListResponsesDefaultFlatPagination as MessagingOptoutListResponsesDefaultFlatPagination,
    type MessagingOptoutListParams as MessagingOptoutListParams,
  };
}
