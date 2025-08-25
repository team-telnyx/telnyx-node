// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Comments extends APIResource {
  /**
   * Creates a comment on a portout request.
   *
   * @example
   * ```ts
   * const comment = await client.portouts.comments.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  create(id: string, body: CommentCreateParams, options?: RequestOptions): APIPromise<CommentCreateResponse> {
    return this._client.post(path`/portouts/${id}/comments`, { body, ...options });
  }

  /**
   * Returns a list of comments for a portout request.
   *
   * @example
   * ```ts
   * const comments = await client.portouts.comments.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<CommentListResponse> {
    return this._client.get(path`/portouts/${id}/comments`, options);
  }
}

export interface CommentCreateResponse {
  data?: CommentCreateResponse.Data;
}

export namespace CommentCreateResponse {
  export interface Data {
    id: string;

    /**
     * Comment body
     */
    body: string;

    /**
     * Comment creation timestamp in ISO 8601 format
     */
    created_at: string;

    /**
     * Identifies the user who created the comment. Will be null if created by Telnyx
     * Admin
     */
    user_id: string;

    /**
     * Identifies the associated port request
     */
    portout_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface CommentListResponse {
  data?: Array<CommentListResponse.Data>;

  meta?: Shared.Metadata;
}

export namespace CommentListResponse {
  export interface Data {
    id: string;

    /**
     * Comment body
     */
    body: string;

    /**
     * Comment creation timestamp in ISO 8601 format
     */
    created_at: string;

    /**
     * Identifies the user who created the comment. Will be null if created by Telnyx
     * Admin
     */
    user_id: string;

    /**
     * Identifies the associated port request
     */
    portout_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface CommentCreateParams {
  /**
   * Comment to post on this portout request
   */
  body?: string;
}

export declare namespace Comments {
  export {
    type CommentCreateResponse as CommentCreateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentCreateParams as CommentCreateParams,
  };
}
