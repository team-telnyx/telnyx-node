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
   * Returns a paginated list of the MCP servers configured on your account, with
   * optional filtering by type or URL.
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
   * Creates a new MCP server configuration on your account and returns the created
   * server.
   *
   * @example
   * ```ts
   * const mcpServer = await client.ai.mcpServers.create({
   *   name: 'Name',
   *   type: 'Type',
   *   url: 'Url',
   * });
   * ```
   */
  create(params: McpServerCreateParams, options?: RequestOptions): APIPromise<McpServer> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/ai/mcp_servers', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Permanently deletes the specified MCP server configuration from your account.
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
   * Updates the specified MCP server's configuration and returns the updated server.
   *
   * @example
   * ```ts
   * const mcpServer = await client.ai.mcpServers.update(
   *   'mcp_server_id',
   *   {
   *     id: 'Id',
   *     created_at: '2024-01-23T18:10:02.574Z',
   *     name: 'Name',
   *     type: 'Type',
   *     url: 'Url',
   *   },
   * );
   * ```
   */
  update(mcpServerID: string, body: McpServerUpdateParams, options?: RequestOptions): APIPromise<McpServer> {
    return this._client.put(path`/ai/mcp_servers/${mcpServerID}`, { body, ...options });
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

export interface McpServerCreateParams {
  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  type: string;

  /**
   * Body param
   */
  url: string;

  /**
   * Body param
   */
  allowed_tools?: Array<string> | null;

  /**
   * Body param
   */
  api_key_ref?: string | null;

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;
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

export declare namespace McpServers {
  export {
    type McpServer as McpServer,
    type McpServersDefaultFlatPaginationTopLevelArray as McpServersDefaultFlatPaginationTopLevelArray,
    type McpServerListParams as McpServerListParams,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerUpdateParams as McpServerUpdateParams,
  };
}
