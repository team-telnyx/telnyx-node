// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class MessagingOptouts extends APIResource {
  /**
   * Retrieve a list of opt-out blocks.
   */
  list(
    query: MessagingOptoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingOptoutListResponse> {
    return this._client.get('/messaging_optouts', { query, ...options });
  }
}

export interface MessagingOptoutListResponse {
  data?: Array<MessagingOptoutListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace MessagingOptoutListResponse {
  export interface Data {
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
}

export interface MessagingOptoutListParams {
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
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: MessagingOptoutListParams.Page;

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

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace MessagingOptouts {
  export {
    type MessagingOptoutListResponse as MessagingOptoutListResponse,
    type MessagingOptoutListParams as MessagingOptoutListParams,
  };
}
