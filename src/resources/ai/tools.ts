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
   * const tool = await client.ai.tools.create({
   *   display_name: 'display_name',
   *   type: 'type',
   * });
   * ```
   */
  create(body: ToolCreateParams, options?: RequestOptions): APIPromise<ToolCreateResponse> {
    return this._client.post('/ai/tools', { body, ...options });
  }

  /**
   * Get Tool
   *
   * @example
   * ```ts
   * const tool = await client.ai.tools.retrieve('tool_id');
   * ```
   */
  retrieve(toolID: string, options?: RequestOptions): APIPromise<ToolRetrieveResponse> {
    return this._client.get(path`/ai/tools/${toolID}`, options);
  }

  /**
   * Update Tool
   *
   * @example
   * ```ts
   * const tool = await client.ai.tools.update('tool_id');
   * ```
   */
  update(toolID: string, body: ToolUpdateParams, options?: RequestOptions): APIPromise<ToolUpdateResponse> {
    return this._client.patch(path`/ai/tools/${toolID}`, { body, ...options });
  }

  /**
   * List Tools
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const toolListResponse of client.ai.tools.list()) {
   *   // ...
   * }
   * ```
   */
  list(query: ToolListParams | null | undefined = {}, options?: RequestOptions): PagePromise<ToolListResponsesDefaultFlatPagination, ToolListResponse> {
    return this._client.getAPIList('/ai/tools', DefaultFlatPagination<ToolListResponse>, { query, ...options });
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

export type ToolListResponsesDefaultFlatPagination = DefaultFlatPagination<ToolListResponse>

export interface ToolCreateResponse {
  id: string;

  tool_definition: { [key: string]: unknown };

  type: string;

  created_at?: string;

  display_name?: string;

  timeout_ms?: number;
}

export interface ToolRetrieveResponse {
  id: string;

  tool_definition: { [key: string]: unknown };

  type: string;

  created_at?: string;

  display_name?: string;

  timeout_ms?: number;
}

export interface ToolUpdateResponse {
  id: string;

  tool_definition: { [key: string]: unknown };

  type: string;

  created_at?: string;

  display_name?: string;

  timeout_ms?: number;
}

export interface ToolListResponse {
  id: string;

  tool_definition: { [key: string]: unknown };

  type: string;

  created_at?: string;

  display_name?: string;

  timeout_ms?: number;
}

export type ToolDeleteResponse = unknown

export interface ToolCreateParams {
  display_name: string;

  type: string;

  function?: { [key: string]: unknown };

  handoff?: { [key: string]: unknown };

  invite?: { [key: string]: unknown };

  retrieval?: { [key: string]: unknown };

  timeout_ms?: number;

  webhook?: { [key: string]: unknown };

[k: string]: unknown
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

[k: string]: unknown
}

export interface ToolListParams extends DefaultFlatPaginationParams {
  'filter[name]'?: string;

  'filter[type]'?: string;
}

export declare namespace Tools {
  export {
    type ToolCreateResponse as ToolCreateResponse,
    type ToolRetrieveResponse as ToolRetrieveResponse,
    type ToolUpdateResponse as ToolUpdateResponse,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolListResponsesDefaultFlatPagination as ToolListResponsesDefaultFlatPagination,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams
  };
}
