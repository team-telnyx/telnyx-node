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
   * Add Assistant Tag
   *
   * @example
   * ```ts
   * const response = await client.ai.assistants.tags.add(
   *   'assistant_id',
   *   { tag: 'tag' },
   * );
   * ```
   */
  add(assistantID: string, body: TagAddParams, options?: RequestOptions): APIPromise<TagAddResponse> {
    return this._client.post(path`/ai/assistants/${assistantID}/tags`, { body, ...options });
  }

  /**
   * Remove Assistant Tag
   *
   * @example
   * ```ts
   * const tag = await client.ai.assistants.tags.remove('tag', {
   *   assistant_id: 'assistant_id',
   * });
   * ```
   */
  remove(tag: string, params: TagRemoveParams, options?: RequestOptions): APIPromise<TagRemoveResponse> {
    const { assistant_id } = params
    return this._client.delete(path`/ai/assistants/${assistant_id}/tags/${tag}`, options);
  }
}

export interface TagListResponse {
  tags: Array<string>;
}

export interface TagAddResponse {
  tags: Array<string>;
}

export interface TagRemoveResponse {
  tags: Array<string>;
}

export interface TagAddParams {
  tag: string;
}

export interface TagRemoveParams {
  assistant_id: string;
}

export declare namespace Tags {
  export {
    type TagListResponse as TagListResponse,
    type TagAddResponse as TagAddResponse,
    type TagRemoveResponse as TagRemoveResponse,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams
  };
}
