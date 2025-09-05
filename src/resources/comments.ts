// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Comments extends APIResource {
  /**
   * Create a comment
   *
   * @example
   * ```ts
   * const comment = await client.comments.create();
   * ```
   */
  create(body: CommentCreateParams, options?: RequestOptions): APIPromise<CommentCreateResponse> {
    return this._client.post('/comments', { body, ...options });
  }

  /**
   * Retrieve a comment
   *
   * @example
   * ```ts
   * const comment = await client.comments.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CommentRetrieveResponse> {
    return this._client.get(path`/comments/${id}`, options);
  }

  /**
   * Retrieve all comments
   *
   * @example
   * ```ts
   * const comments = await client.comments.list();
   * ```
   */
  list(
    query: CommentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CommentListResponse> {
    return this._client.get('/comments', { query, ...options });
  }

  /**
   * Mark a comment as read
   *
   * @example
   * ```ts
   * const response = await client.comments.markAsRead('id');
   * ```
   */
  markAsRead(id: string, options?: RequestOptions): APIPromise<CommentMarkAsReadResponse> {
    return this._client.patch(path`/comments/${id}/read`, options);
  }
}

export interface CommentCreateResponse {
  data?: CommentCreateResponse.Data;
}

export namespace CommentCreateResponse {
  export interface Data {
    id?: string;

    body?: string;

    comment_record_id?: string;

    comment_record_type?: 'sub_number_order' | 'requirement_group';

    commenter?: string;

    commenter_type?: 'admin' | 'user';

    /**
     * An ISO 8901 datetime string denoting when the comment was created.
     */
    created_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was read.
     */
    read_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was updated.
     */
    updated_at?: string;
  }
}

export interface CommentRetrieveResponse {
  data?: CommentRetrieveResponse.Data;
}

export namespace CommentRetrieveResponse {
  export interface Data {
    id?: string;

    body?: string;

    comment_record_id?: string;

    comment_record_type?: 'sub_number_order' | 'requirement_group';

    commenter?: string;

    commenter_type?: 'admin' | 'user';

    /**
     * An ISO 8901 datetime string denoting when the comment was created.
     */
    created_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was read.
     */
    read_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was updated.
     */
    updated_at?: string;
  }
}

export interface CommentListResponse {
  data?: Array<CommentListResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace CommentListResponse {
  export interface Data {
    id?: string;

    body?: string;

    comment_record_id?: string;

    comment_record_type?: 'sub_number_order' | 'requirement_group';

    commenter?: string;

    commenter_type?: 'admin' | 'user';

    /**
     * An ISO 8901 datetime string denoting when the comment was created.
     */
    created_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was read.
     */
    read_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was updated.
     */
    updated_at?: string;
  }
}

export interface CommentMarkAsReadResponse {
  data?: CommentMarkAsReadResponse.Data;
}

export namespace CommentMarkAsReadResponse {
  export interface Data {
    id?: string;

    body?: string;

    comment_record_id?: string;

    comment_record_type?: 'sub_number_order' | 'requirement_group';

    commenter?: string;

    commenter_type?: 'admin' | 'user';

    /**
     * An ISO 8901 datetime string denoting when the comment was created.
     */
    created_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was read.
     */
    read_at?: string;

    /**
     * An ISO 8901 datetime string for when the comment was updated.
     */
    updated_at?: string;
  }
}

export interface CommentCreateParams {
  body?: string;

  comment_record_id?: string;

  comment_record_type?: 'sub_number_order' | 'requirement_group';
}

export interface CommentListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[comment_record_type], filter[comment_record_id]
   */
  filter?: CommentListParams.Filter;
}

export namespace CommentListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[comment_record_type], filter[comment_record_id]
   */
  export interface Filter {
    /**
     * ID of the record the comments relate to
     */
    comment_record_id?: string;

    /**
     * Record type that the comment relates to
     */
    comment_record_type?: 'sub_number_order' | 'requirement_group';
  }
}

export declare namespace Comments {
  export {
    type CommentCreateResponse as CommentCreateResponse,
    type CommentRetrieveResponse as CommentRetrieveResponse,
    type CommentListResponse as CommentListResponse,
    type CommentMarkAsReadResponse as CommentMarkAsReadResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentListParams as CommentListParams,
  };
}
