// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Comments extends APIResource {
  /**
   * Creates a new comment for a porting order.
   *
   * @example
   * ```ts
   * const comment = await client.portingOrders.comments.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  create(id: string, body: CommentCreateParams, options?: RequestOptions): APIPromise<CommentCreateResponse> {
    return this._client.post(path`/porting_orders/${id}/comments`, { body, ...options });
  }

  /**
   * Returns a list of all comments of a porting order.
   *
   * @example
   * ```ts
   * const comments = await client.portingOrders.comments.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(
    id: string,
    query: CommentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommentListResponse> {
    return this._client.get(path`/porting_orders/${id}/comments`, { query, ...options });
  }
}

export interface CommentCreateResponse {
  data?: CommentCreateResponse.Data;
}

export namespace CommentCreateResponse {
  export interface Data {
    id?: string;

    /**
     * Body of comment
     */
    body?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * Indicates whether this comment was created by a Telnyx Admin, user, or system
     */
    user_type?: 'admin' | 'user' | 'system';
  }
}

export interface CommentListResponse {
  data?: Array<CommentListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace CommentListResponse {
  export interface Data {
    id?: string;

    /**
     * Body of comment
     */
    body?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * Indicates whether this comment was created by a Telnyx Admin, user, or system
     */
    user_type?: 'admin' | 'user' | 'system';
  }
}

export interface CommentCreateParams {
  body?: string;
}

export interface CommentListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: CommentListParams.Page;
}

export namespace CommentListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
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

export declare namespace Comments {
  export {
    type CommentCreateResponse as CommentCreateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
  };
}
