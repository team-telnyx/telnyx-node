// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIsAPI from './apis';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * MCP servers on an instance, served to agents at one MCP endpoint.
 */
export class McpServers extends APIResource {
  /**
   * Lists the MCP servers the instance serves at `{gateway_url}/mcp`, without their
   * credentials. The instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const mcpServers =
   *   await client.agentGateways.mcpServers.list(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *   );
   * ```
   */
  list(instanceID: string, options?: RequestOptions): APIPromise<McpServerListResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/mcp_servers`, options);
  }

  /**
   * Adds an MCP server. The instance serves its tools at `{gateway_url}/mcp`, each
   * named with the server's `name` and a hyphen, to the keys granted the server and,
   * with `open_to_every_key`, to every key. The instance must be `ready`; otherwise
   * the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayMcpServerResponse =
   *   await client.agentGateways.mcpServers.create(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *     {
   *       name: 'orders',
   *       url: 'http://10.40.3.7:9000/mcp',
   *       auth: {
   *         type: 'api_key',
   *         value: 'example-orders-key',
   *       },
   *       forwarded_headers: ['X-Request-Id'],
   *       static_headers: { 'X-Env': 'prod' },
   *     },
   *   );
   * ```
   */
  create(
    instanceID: string,
    body: McpServerCreateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayMcpServerResponse> {
    return this._client.post(path`/agent_gateways/${instanceID}/mcp_servers`, { body, ...options });
  }

  /**
   * Removes an MCP server and returns it as it was. Its `id` stays in the tool
   * permissions that name it until they are next set. The instance must be `ready`;
   * otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayMcpServerResponse =
   *   await client.agentGateways.mcpServers.delete(
   *     '88d5a97b-4080-4855-8bac-a39811b1dc24',
   *     { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
   *   );
   * ```
   */
  delete(
    serverID: string,
    params: McpServerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayMcpServerResponse> {
    const { instance_id } = params;
    return this._client.delete(path`/agent_gateways/${instance_id}/mcp_servers/${serverID}`, options);
  }

  /**
   * Changes an MCP server's settings. A field left out stays as it is. `auth` is
   * replaced whole, `tools: []` exposes every tool, and `static_headers: {}` clears
   * the headers. The instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayMcpServerResponse =
   *   await client.agentGateways.mcpServers.update(
   *     '88d5a97b-4080-4855-8bac-a39811b1dc24',
   *     {
   *       instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *       tools: ['get_order', 'create_ticket'],
   *     },
   *   );
   * ```
   */
  update(
    serverID: string,
    params: McpServerUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayMcpServerResponse> {
    const { instance_id, ...body } = params;
    return this._client.patch(path`/agent_gateways/${instance_id}/mcp_servers/${serverID}`, {
      body,
      ...options,
    });
  }
}

/**
 * The gateway signs each request with AWS Signature Version 4. Without keys or a
 * role, it uses the instance's own AWS identity. Keys are write-only.
 */
export interface AgentGatewayAwsSigV4Auth {
  /**
   * The AWS region to sign for.
   */
  region: string;

  type: 'aws_sigv4';

  access_key_id?: string | null;

  /**
   * The ARN of a role for the gateway to assume.
   */
  role_name?: string | null;

  secret_access_key?: string | null;

  /**
   * The AWS service to sign for.
   */
  service?: string;

  session_token?: string | null;
}

export interface AgentGatewayMcpServer {
  /**
   * Identifies the server.
   */
  id: string;

  /**
   * The server's outbound authentication method. Credentials are never returned.
   */
  auth: APIsAPI.AgentGatewayShownAuth;

  created_at: string | null;

  /**
   * Headers copied from the agent's request, by name.
   */
  forwarded_headers: Array<string>;

  /**
   * A name for the server, unique on the instance across MCP servers and APIs,
   * regardless of case. Letters, digits, `_`, and `.`. The gateway prefixes the
   * server's tools with it and a hyphen.
   */
  name: string;

  /**
   * `true` lets every key on the instance use the server, granted or not.
   */
  open_to_every_key: boolean;

  /**
   * Headers sent on every request.
   */
  static_headers: { [key: string]: string };

  /**
   * The tools the server exposes to every key, by name. `[]` exposes every tool.
   */
  tools: Array<string>;

  /**
   * `http` for Streamable HTTP, or `sse` for Server-Sent Events.
   */
  transport: 'http' | 'sse';

  updated_at: string | null;

  /**
   * The server's MCP endpoint.
   */
  url: string;
}

export interface AgentGatewayMcpServerResponse {
  data: AgentGatewayMcpServer;
}

export interface McpServerListResponse {
  data: Array<AgentGatewayMcpServer>;
}

export interface McpServerCreateParams {
  /**
   * A name for the server, unique on the instance across MCP servers and APIs,
   * regardless of case. Up to 100 letters, digits, `_`, and `.`. The gateway
   * prefixes the server's tools with it and a hyphen.
   */
  name: string;

  /**
   * The server's MCP endpoint, `http` or `https`.
   */
  url: string;

  /**
   * How the gateway authenticates to the server. Replaced whole on an update;
   * `{"type": "none"}` removes the credential.
   */
  auth?:
    | APIsAPI.AgentGatewayNoAuth
    | APIsAPI.AgentGatewayStaticAuth
    | APIsAPI.AgentGatewayOAuthClientCredentials
    | APIsAPI.AgentGatewayPassthroughAuth
    | AgentGatewayAwsSigV4Auth;

  /**
   * Headers copied from the agent's request, by name.
   */
  forwarded_headers?: Array<string>;

  /**
   * `true` lets every key on the instance use the server, granted or not.
   */
  open_to_every_key?: boolean;

  /**
   * Headers sent on every request.
   */
  static_headers?: { [key: string]: string };

  /**
   * The tools the server exposes to every key, by name. `[]` exposes every tool.
   */
  tools?: Array<string>;

  /**
   * `http` for Streamable HTTP, or `sse` for Server-Sent Events.
   */
  transport?: 'http' | 'sse';
}

export interface McpServerDeleteParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface McpServerUpdateParams {
  /**
   * Path param: The Agent Gateway's `id`.
   */
  instance_id: string;

  /**
   * Body param: How the gateway authenticates to the server. Replaced whole on an
   * update; `{"type": "none"}` removes the credential.
   */
  auth?:
    | APIsAPI.AgentGatewayNoAuth
    | APIsAPI.AgentGatewayStaticAuth
    | APIsAPI.AgentGatewayOAuthClientCredentials
    | APIsAPI.AgentGatewayPassthroughAuth
    | AgentGatewayAwsSigV4Auth;

  /**
   * Body param: Headers copied from the agent's request, by name.
   */
  forwarded_headers?: Array<string>;

  /**
   * Body param: A name for the server, unique on the instance across MCP servers and
   * APIs, regardless of case. Letters, digits, `_`, and `.`. The gateway prefixes
   * the server's tools with it and a hyphen.
   */
  name?: string;

  /**
   * Body param: `true` lets every key on the instance use the server, granted or
   * not.
   */
  open_to_every_key?: boolean;

  /**
   * Body param: Headers sent on every request.
   */
  static_headers?: { [key: string]: string };

  /**
   * Body param: The tools the server exposes to every key, by name. `[]` exposes
   * every tool.
   */
  tools?: Array<string>;

  /**
   * Body param: `http` for Streamable HTTP, or `sse` for Server-Sent Events.
   */
  transport?: 'http' | 'sse';

  /**
   * Body param: The server's MCP endpoint, `http` or `https`.
   */
  url?: string;
}

export declare namespace McpServers {
  export {
    type AgentGatewayAwsSigV4Auth as AgentGatewayAwsSigV4Auth,
    type AgentGatewayMcpServer as AgentGatewayMcpServer,
    type AgentGatewayMcpServerResponse as AgentGatewayMcpServerResponse,
    type McpServerListResponse as McpServerListResponse,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerDeleteParams as McpServerDeleteParams,
    type McpServerUpdateParams as McpServerUpdateParams,
  };
}
