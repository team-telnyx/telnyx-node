// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import {
  DefaultFlatPaginationTopLevelArray,
  type DefaultFlatPaginationTopLevelArrayParams,
  PagePromise,
} from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class McpServers extends APIResource {
  /**
   * Create a new MCP server.
   *
   * @example
   * ```ts
   * const mcpServer = await client.ai.mcpServers.create({
   *   name: 'name',
   *   type: 'type',
   *   url: 'url',
   * });
   * ```
   */
  create(body: McpServerCreateParams, options?: RequestOptions): APIPromise<McpServer> {
    return this._client.post('/ai/mcp_servers', { body, ...options });
  }

  /**
   * Retrieve details for a specific MCP server.
   *
   * @example
   * ```ts
   * const mcpServer = await client.ai.mcpServers.retrieve(
   *   'mcp_server_id',
   * );
   * ```
   */
  retrieve(mcpServerID: string, options?: RequestOptions): APIPromise<McpServer> {
    return this._client.get(path`/ai/mcp_servers/${mcpServerID}`, options);
  }

  /**
   * Update an existing MCP server.
   *
   * @example
   * ```ts
   * const mcpServer = await client.ai.mcpServers.update(
   *   'mcp_server_id',
   * );
   * ```
   */
  update(mcpServerID: string, body: McpServerUpdateParams, options?: RequestOptions): APIPromise<McpServer> {
    return this._client.put(path`/ai/mcp_servers/${mcpServerID}`, { body, ...options });
  }

  /**
   * Retrieve a list of MCP servers.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const mcpServer of client.ai.mcpServers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: McpServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<McpServersDefaultFlatPaginationTopLevelArray, McpServer> {
    return this._client.getAPIList('/ai/mcp_servers', DefaultFlatPaginationTopLevelArray<McpServer>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a specific MCP server.
   *
   * @example
   * ```ts
   * await client.ai.mcpServers.delete('mcp_server_id');
   * ```
   */
  delete(mcpServerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/mcp_servers/${mcpServerID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type McpServersDefaultFlatPaginationTopLevelArray = DefaultFlatPaginationTopLevelArray<McpServer>;

export interface McpServer {
  id: string;

  created_at: string;

  name: string;

  type: string;

  url: string;

  allowed_tools?: Array<string> | null;

  api_key_ref?: string | null;
}

export interface McpServerCreateParams {
  name: string;

  type: string;

  url: string;

  allowed_tools?: Array<string> | null;

  api_key_ref?: string | null;
}

export interface McpServerUpdateParams {
  id?: string;

  allowed_tools?: Array<string> | null;

  api_key_ref?: string | null;

  created_at?: string;

  name?: string;

  type?: string;

  url?: string;
}

export interface McpServerListParams extends DefaultFlatPaginationTopLevelArrayParams {
  /**
   * Filter results by type.
   */
  type?: string;

  /**
   * Filter results by url.
   */
  url?: string;
}

export declare namespace McpServers {
  export {
    type McpServer as McpServer,
    type McpServersDefaultFlatPaginationTopLevelArray as McpServersDefaultFlatPaginationTopLevelArray,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerUpdateParams as McpServerUpdateParams,
    type McpServerListParams as McpServerListParams,
  };
}
