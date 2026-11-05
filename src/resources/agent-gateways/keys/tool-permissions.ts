// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * The MCP servers and tools a key or team may use.
 */
export class ToolPermissions extends APIResource {
  /**
   * Returns the MCP servers and APIs the key may use, and the tools within each.
   * `servers: []` means none. The instance must be `ready`; otherwise the request
   * answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayToolPermissionsResponse =
   *   await client.agentGateways.keys.toolPermissions.list(
   *     'f739ad190d29e2a5e658c3a486111953e6c18d746fd04374962ab150aae17757',
   *     { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
   *   );
   * ```
   */
  list(
    keyID: string,
    params: ToolPermissionListParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayToolPermissionsResponse> {
    const { instance_id } = params;
    return this._client.get(path`/agent_gateways/${instance_id}/keys/${keyID}/tool_permissions`, options);
  }

  /**
   * Replaces the grant whole and returns it. Every server must be one of the
   * instance's MCP servers or APIs, named once. A key reaches the servers granted to
   * it or to its team, and the servers open to every key; when both grant, only the
   * servers in both. The instance must be `ready`; otherwise the request answers
   * `409`.
   *
   * @example
   * ```ts
   * const agentGatewayToolPermissionsResponse =
   *   await client.agentGateways.keys.toolPermissions.create(
   *     'f739ad190d29e2a5e658c3a486111953e6c18d746fd04374962ab150aae17757',
   *     {
   *       instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *       servers: [
   *         {
   *           id: '88d5a97b-4080-4855-8bac-a39811b1dc24',
   *           tools: ['get_order'],
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    keyID: string,
    params: ToolPermissionCreateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayToolPermissionsResponse> {
    const { instance_id, ...body } = params;
    return this._client.put(path`/agent_gateways/${instance_id}/keys/${keyID}/tool_permissions`, {
      body,
      ...options,
    });
  }
}

export interface AgentGatewayToolPermissions {
  /**
   * The servers granted, each with its tools. `[]` grants none.
   */
  servers: Array<AgentGatewayToolPermissions.Server>;
}

export namespace AgentGatewayToolPermissions {
  export interface Server {
    /**
     * An MCP server's or API's `id` on the instance.
     */
    id: string;

    /**
     * The tools the grant covers, by name without the server prefix. `[]` covers every
     * tool the server exposes.
     */
    tools?: Array<string>;
  }
}

export interface AgentGatewayToolPermissionsResponse {
  data: AgentGatewayToolPermissions;
}

export interface ToolPermissionListParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface ToolPermissionCreateParams {
  /**
   * Path param: The Agent Gateway's `id`.
   */
  instance_id: string;

  /**
   * Body param: The servers granted, each with its tools. `[]` grants none.
   */
  servers: Array<ToolPermissionCreateParams.Server>;
}

export namespace ToolPermissionCreateParams {
  export interface Server {
    /**
     * An MCP server's or API's `id` on the instance.
     */
    id: string;

    /**
     * The tools the grant covers, by name without the server prefix. `[]` covers every
     * tool the server exposes.
     */
    tools?: Array<string>;
  }
}

export declare namespace ToolPermissions {
  export {
    type AgentGatewayToolPermissions as AgentGatewayToolPermissions,
    type AgentGatewayToolPermissionsResponse as AgentGatewayToolPermissionsResponse,
    type ToolPermissionListParams as ToolPermissionListParams,
    type ToolPermissionCreateParams as ToolPermissionCreateParams,
  };
}
