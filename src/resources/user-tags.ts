// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class UserTags extends APIResource {
  /**
   * List all user tags.
   */
  list(
    query: UserTagListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserTagListResponse> {
    return this._client.get('/user_tags', { query, ...options });
  }
}

export interface UserTagListResponse {
  data?: UserTagListResponse.Data;
}

export namespace UserTagListResponse {
  export interface Data {
    /**
     * A list of your tags on the given resource type. NOTE: The casing of the tags
     * returned will not necessarily match the casing of the tags when they were added
     * to a resource. This is because the tags will have the casing of the first time
     * they were used within the Telnyx system regardless of source.
     */
    number_tags?: Array<string>;

    /**
     * A list of your tags on the given resource type. NOTE: The casing of the tags
     * returned will not necessarily match the casing of the tags when they were added
     * to a resource. This is because the tags will have the casing of the first time
     * they were used within the Telnyx system regardless of source.
     */
    outbound_profile_tags?: Array<string>;
  }
}

export interface UserTagListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[starts_with]
   */
  filter?: UserTagListParams.Filter;
}

export namespace UserTagListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[starts_with]
   */
  export interface Filter {
    /**
     * Filter tags by prefix
     */
    starts_with?: string;
  }
}

export declare namespace UserTags {
  export { type UserTagListResponse as UserTagListResponse, type UserTagListParams as UserTagListParams };
}
