// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Create a new tool for a mission
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.tools.createTool(
   *   'mission_id',
   * );
   * ```
   */
  createTool(missionID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/ai/missions/${missionID}/tools`, options);
  }

  /**
   * Delete a tool from a mission
   *
   * @example
   * ```ts
   * await client.ai.missions.tools.deleteTool('tool_id', {
   *   mission_id: 'mission_id',
   * });
   * ```
   */
  deleteTool(toolID: string, params: ToolDeleteToolParams, options?: RequestOptions): APIPromise<void> {
    const { mission_id } = params;
    return this._client.delete(path`/ai/missions/${mission_id}/tools/${toolID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get a specific tool by ID
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.tools.getTool(
   *   'tool_id',
   *   { mission_id: 'mission_id' },
   * );
   * ```
   */
  getTool(toolID: string, params: ToolGetToolParams, options?: RequestOptions): APIPromise<unknown> {
    const { mission_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/tools/${toolID}`, options);
  }

  /**
   * List all tools for a mission
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.tools.listTools(
   *   'mission_id',
   * );
   * ```
   */
  listTools(missionID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/ai/missions/${missionID}/tools`, options);
  }

  /**
   * Update a tool definition
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.tools.updateTool(
   *   'tool_id',
   *   { mission_id: 'mission_id' },
   * );
   * ```
   */
  updateTool(toolID: string, params: ToolUpdateToolParams, options?: RequestOptions): APIPromise<unknown> {
    const { mission_id } = params;
    return this._client.put(path`/ai/missions/${mission_id}/tools/${toolID}`, options);
  }
}

export type ToolCreateToolResponse = unknown;

export type ToolGetToolResponse = unknown;

export type ToolListToolsResponse = unknown;

export type ToolUpdateToolResponse = unknown;

export interface ToolDeleteToolParams {
  mission_id: string;
}

export interface ToolGetToolParams {
  mission_id: string;
}

export interface ToolUpdateToolParams {
  mission_id: string;
}

export declare namespace Tools {
  export {
    type ToolCreateToolResponse as ToolCreateToolResponse,
    type ToolGetToolResponse as ToolGetToolResponse,
    type ToolListToolsResponse as ToolListToolsResponse,
    type ToolUpdateToolResponse as ToolUpdateToolResponse,
    type ToolDeleteToolParams as ToolDeleteToolParams,
    type ToolGetToolParams as ToolGetToolParams,
    type ToolUpdateToolParams as ToolUpdateToolParams,
  };
}
