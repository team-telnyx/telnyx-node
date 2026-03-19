// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class Tags extends APIResource {
  /**
   * Add Assistant Tag
   *
   * @example
   * ```ts
   * const tag = await client.ai.assistants.tags.create(
   *   'assistant_id',
   *   { tag: 'tag' },
   * );
   * ```
   */
  create(
    assistantID: string,
    body: TagCreateParams,
    options?: RequestOptions,
  ): APIPromise<TagCreateResponse> {
    return this._client.post(path`/ai/assistants/${assistantID}/tags`, { body, ...options });
  }

  /**
   * Get All Tags
   *
   * @example
   * ```ts
   * const tags = await client.ai.assistants.tags.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/ai/assistants/tags', options);
  }

  /**
   * Remove Assistant Tag
   *
   * @example
   * ```ts
   * const tag = await client.ai.assistants.tags.delete('tag', {
   *   assistant_id: 'assistant_id',
   * });
   * ```
   */
  delete(tag: string, params: TagDeleteParams, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    const { assistant_id } = params;
    return this._client.delete(path`/ai/assistants/${assistant_id}/tags/${tag}`, options);
  }
}

export interface TagCreateResponse {
  tags: Array<string>;
}

export interface TagListResponse {
  tags: Array<string>;
}

export interface TagDeleteResponse {
  tags: Array<string>;
}

export interface TagCreateParams {
  tag: string;
}

export interface TagDeleteParams {
  assistant_id: string;
}

export declare namespace Tags {
  export {
    type TagCreateResponse as TagCreateResponse,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagDeleteParams as TagDeleteParams,
  };
}
