// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class McpServers extends APIResource {
  /**
   * Returns the MCP servers configured on the specified mission. MCP servers expose
   * external tools and data sources agents can use during runs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.mcpServers.listMcpServers(
   *     'mission_id',
   *   );
   * ```
   */
  listMcpServers(missionID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/ai/missions/${missionID}/mcp-servers`, options);
  }

  /**
   * Adds an MCP server to the specified mission, making the server's tools available
   * to agents during runs of this mission.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.mcpServers.createMcpServer(
   *     'mission_id',
   *   );
   * ```
   */
  createMcpServer(missionID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/ai/missions/${missionID}/mcp-servers`, options);
  }

  /**
   * Removes the specified MCP server from the mission, revoking agent access to its
   * tools in subsequent runs.
   *
   * @example
   * ```ts
   * await client.ai.missions.mcpServers.deleteMcpServer(
   *   'mcp_server_id',
   *   { mission_id: 'mission_id' },
   * );
   * ```
   */
  deleteMcpServer(
    mcpServerID: string,
    params: McpServerDeleteMcpServerParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { mission_id } = params;
    return this._client.delete(path`/ai/missions/${mission_id}/mcp-servers/${mcpServerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the configuration of a single MCP server attached to the specified
   * mission.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.mcpServers.getMcpServer(
   *     'mcp_server_id',
   *     { mission_id: 'mission_id' },
   *   );
   * ```
   */
  getMcpServer(
    mcpServerID: string,
    params: McpServerGetMcpServerParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { mission_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/mcp-servers/${mcpServerID}`, options);
  }

  /**
   * Replaces the configuration of the specified MCP server on this mission.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.mcpServers.updateMcpServer(
   *     'mcp_server_id',
   *     { mission_id: 'mission_id' },
   *   );
   * ```
   */
  updateMcpServer(
    mcpServerID: string,
    params: McpServerUpdateMcpServerParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { mission_id } = params;
    return this._client.put(path`/ai/missions/${mission_id}/mcp-servers/${mcpServerID}`, options);
  }
}

export type McpServerCreateMcpServerResponse = unknown;

export type McpServerGetMcpServerResponse = unknown;

export type McpServerListMcpServersResponse = unknown;

export type McpServerUpdateMcpServerResponse = unknown;

export interface McpServerDeleteMcpServerParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface McpServerGetMcpServerParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface McpServerUpdateMcpServerParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export declare namespace McpServers {
  export {
    type McpServerCreateMcpServerResponse as McpServerCreateMcpServerResponse,
    type McpServerGetMcpServerResponse as McpServerGetMcpServerResponse,
    type McpServerListMcpServersResponse as McpServerListMcpServersResponse,
    type McpServerUpdateMcpServerResponse as McpServerUpdateMcpServerResponse,
    type McpServerDeleteMcpServerParams as McpServerDeleteMcpServerParams,
    type McpServerGetMcpServerParams as McpServerGetMcpServerParams,
    type McpServerUpdateMcpServerParams as McpServerUpdateMcpServerParams,
  };
}
