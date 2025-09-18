// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class RequirementTypes extends APIResource {
  /**
   * Retrieve a requirement type by id
   *
   * @example
   * ```ts
   * const requirementType =
   *   await client.requirementTypes.retrieve(
   *     'a38c217a-8019-48f8-bff6-0fdd9939075b',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RequirementTypeRetrieveResponse> {
    return this._client.get(path`/requirement_types/${id}`, options);
  }

  /**
   * List all requirement types ordered by created_at descending
   *
   * @example
   * ```ts
   * const requirementTypes =
   *   await client.requirementTypes.list();
   * ```
   */
  list(
    query: RequirementTypeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RequirementTypeListResponse> {
    return this._client.get('/requirement_types', { query, ...options });
  }
}

export interface RequirementTypeRetrieveResponse {
  data?: Shared.DocReqsRequirementType;
}

export interface RequirementTypeListResponse {
  data?: Array<Shared.DocReqsRequirementType>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface RequirementTypeListParams {
  /**
   * Consolidated filter parameter for requirement types (deepObject style).
   * Originally: filter[name]
   */
  filter?: RequirementTypeListParams.Filter;

  /**
   * Consolidated sort parameter for requirement types (deepObject style).
   * Originally: sort[]
   */
  sort?: Array<'name' | 'created_at' | 'updated_at' | '-name' | '-created_at' | '-updated_at'>;
}

export namespace RequirementTypeListParams {
  /**
   * Consolidated filter parameter for requirement types (deepObject style).
   * Originally: filter[name]
   */
  export interface Filter {
    name?: Filter.Name;
  }

  export namespace Filter {
    export interface Name {
      /**
       * Filters requirement types to those whose name contains a certain string.
       */
      contains?: string;
    }
  }
}

export declare namespace RequirementTypes {
  export {
    type RequirementTypeRetrieveResponse as RequirementTypeRetrieveResponse,
    type RequirementTypeListResponse as RequirementTypeListResponse,
    type RequirementTypeListParams as RequirementTypeListParams,
  };
}
