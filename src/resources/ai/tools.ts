// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class Tools extends APIResource {
  /**
   * Create Tool
   *
   * @example
   * ```ts
   * const sharedToolResponse = await client.ai.tools.create({
   *   display_name: 'display_name',
   *   type: 'type',
   * });
   * ```
   */
  create(body: ToolCreateParams, options?: RequestOptions): APIPromise<SharedToolResponse> {
    return this._client.post('/ai/tools', { body, ...options });
  }

  /**
   * Get Tool
   *
   * @example
   * ```ts
   * const sharedToolResponse = await client.ai.tools.retrieve(
   *   'tool_id',
   * );
   * ```
   */
  retrieve(toolID: string, options?: RequestOptions): APIPromise<SharedToolResponse> {
    return this._client.get(path`/ai/tools/${toolID}`, options);
  }

  /**
   * Update Tool
   *
   * @example
   * ```ts
   * const sharedToolResponse = await client.ai.tools.update(
   *   'tool_id',
   * );
   * ```
   */
  update(toolID: string, body: ToolUpdateParams, options?: RequestOptions): APIPromise<SharedToolResponse> {
    return this._client.patch(path`/ai/tools/${toolID}`, { body, ...options });
  }

  /**
   * List Tools
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sharedToolResponse of client.ai.tools.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SharedToolResponsesDefaultFlatPagination, SharedToolResponse> {
    return this._client.getAPIList('/ai/tools', DefaultFlatPagination<SharedToolResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete Tool
   *
   * @example
   * ```ts
   * const tool = await client.ai.tools.delete('tool_id');
   * ```
   */
  delete(toolID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/tools/${toolID}`, options);
  }
}

export type SharedToolResponsesDefaultFlatPagination = DefaultFlatPagination<SharedToolResponse>;

export interface SharedToolResponse {
  id: string;

  tool_definition: { [key: string]: unknown };

  type: string;

  created_at?: string;

  display_name?: string;

  timeout_ms?: number;
}

export type ToolDeleteResponse = unknown;

export interface ToolCreateParams {
  display_name: string;

  type: string;

  function?: { [key: string]: unknown };

  handoff?: { [key: string]: unknown };

  invite?: { [key: string]: unknown };

  retrieval?: { [key: string]: unknown };

  timeout_ms?: number;

  webhook?: { [key: string]: unknown };

  [k: string]: unknown;
}

export interface ToolUpdateParams {
  display_name?: string;

  function?: { [key: string]: unknown };

  handoff?: { [key: string]: unknown };

  invite?: { [key: string]: unknown };

  retrieval?: { [key: string]: unknown };

  timeout_ms?: number;

  type?: string;

  webhook?: { [key: string]: unknown };

  [k: string]: unknown;
}

export interface ToolListParams extends DefaultFlatPaginationParams {
  /**
   * Filter results by filter name.
   */
  'filter[name]'?: string;

  /**
   * Filter results by filter type.
   */
  'filter[type]'?: string;
}

export declare namespace Tools {
  export {
    type SharedToolResponse as SharedToolResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type SharedToolResponsesDefaultFlatPagination as SharedToolResponsesDefaultFlatPagination,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
  };
}
