// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Read messages from the Telnyx vetting team and reply with clarifying information.
 */
export class Comments extends APIResource {
  /**
   * List the comments on a DIR. The enterprise is resolved server-side from the DIR
   * id.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dirComment of client.dir.comments.list(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    dirID: string,
    query: CommentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DirCommentsDefaultFlatPagination, DirComment> {
    return this._client.getAPIList(path`/dir/${dirID}/comments`, DefaultFlatPagination<DirComment>, {
      query,
      ...options,
    });
  }

  /**
   * Post a customer comment on a DIR (for example, to respond to reviewer notes).
   * Send only `content` (1–5000 chars) and an optional `parent_comment_id`; the
   * server sets the comment type, visibility, and author automatically. The
   * enterprise is resolved server-side from the DIR id.
   *
   * @example
   * ```ts
   * const comment = await client.dir.comments.create(
   *   '16635d38-75a6-4481-82e8-69af60e05011',
   *   {
   *     content:
   *       'Re-uploaded the certificate. New document_id: 89450109-ee35-411c-b5bb-14f1d806fca2.',
   *   },
   * );
   * ```
   */
  create(
    dirID: string,
    body: CommentCreateParams,
    options?: RequestOptions,
  ): APIPromise<CommentCreateResponse> {
    return this._client.post(path`/dir/${dirID}/comments`, { body, ...options });
  }
}

export type DirCommentsDefaultFlatPagination = DefaultFlatPagination<DirComment>;

/**
 * Comment categorisation. Customers post `customer_inquiry`. The Telnyx team posts
 * `vetting_comment`, `rejection_reason`, `notification`, `status_update`, or
 * `admin_response`. `internal_note` is filtered out of customer-visible responses.
 */
export type CommentType =
  | 'vetting_comment'
  | 'rejection_reason'
  | 'internal_note'
  | 'notification'
  | 'status_update'
  | 'customer_inquiry'
  | 'admin_response';

export interface DirComment {
  id?: string;

  /**
   * Display name of the author. May be `null`.
   */
  author_name?: string | null;

  /**
   * Who wrote the comment. `admin` covers the Telnyx vetting team.
   */
  author_role?: 'customer' | 'admin';

  /**
   * Comment categorisation. Customers post `customer_inquiry`. The Telnyx team posts
   * `vetting_comment`, `rejection_reason`, `notification`, `status_update`, or
   * `admin_response`. `internal_note` is filtered out of customer-visible responses.
   */
  comment_type?: CommentType;

  content?: string;

  created_at?: string;

  /**
   * Resource the comment is attached to. Always `dir` on this endpoint.
   */
  entity_type?: 'dir';

  /**
   * Always `customer` on this endpoint - internal-only comments are filtered out.
   */
  visibility?: 'customer';
}

export interface CommentCreateResponse {
  data: DirComment;
}

export interface CommentListParams extends DefaultFlatPaginationParams {
  /**
   * Restrict to comments of this category. Customer-visible categories only:
   * internal-only comments are filtered out regardless of this filter.
   */
  comment_type?: CommentType;
}

export interface CommentCreateParams {
  /**
   * Comment body. 1–5000 characters.
   */
  content: string;

  /**
   * Optional parent comment id to thread this reply under.
   */
  parent_comment_id?: string;
}

export declare namespace Comments {
  export {
    type CommentType as CommentType,
    type DirComment as DirComment,
    type CommentCreateResponse as CommentCreateResponse,
    type DirCommentsDefaultFlatPagination as DirCommentsDefaultFlatPagination,
    type CommentListParams as CommentListParams,
    type CommentCreateParams as CommentCreateParams,
  };
}
