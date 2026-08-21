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
   * Retrieve all tags that have been applied to your AI assistants.
   *
   * @example
   * ```ts
   * const tagsResponse = await client.ai.assistants.tags.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TagsResponse> {
    return this._client.get('/ai/assistants/tags', options);
  }

  /**
   * Add a tag to an AI assistant. Tags help you organize and filter your assistants.
   *
   * @example
   * ```ts
   * const tagsResponse = await client.ai.assistants.tags.add(
   *   'assistant_id',
   *   { tag: 'Tag' },
   * );
   * ```
   */
  add(assistantID: string, body: TagAddParams, options?: RequestOptions): APIPromise<TagsResponse> {
    return this._client.post(path`/ai/assistants/${assistantID}/tags`, { body, ...options });
  }

  /**
   * Removes the specified tag from the AI assistant and returns the assistant's
   * updated tag list.
   *
   * @example
   * ```ts
   * const tagsResponse = await client.ai.assistants.tags.remove(
   *   'tag',
   *   { assistant_id: 'assistant_id' },
   * );
   * ```
   */
  remove(tag: string, params: TagRemoveParams, options?: RequestOptions): APIPromise<TagsResponse> {
    const { assistant_id } = params;
    return this._client.delete(path`/ai/assistants/${assistant_id}/tags/${tag}`, options);
  }
}

export interface TagsResponse {
  tags: Array<string>;
}

export interface TagAddParams {
  tag: string;
}

export interface TagRemoveParams {
  /**
   * Unique identifier of the assistant.
   */
  assistant_id: string;
}

export declare namespace Tags {
  export {
    type TagsResponse as TagsResponse,
    type TagAddParams as TagAddParams,
    type TagRemoveParams as TagRemoveParams,
  };
}
