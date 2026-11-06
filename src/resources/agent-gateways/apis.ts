// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * REST APIs on an instance, served to agents as tools.
 */
export class APIs extends APIResource {
  /**
   * Lists the REST APIs the instance serves as tools, without their credentials. The
   * instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const apis = await client.agentGateways.apis.list(
   *   '32ce035d-3165-4031-b1a7-a7c0c259590a',
   * );
   * ```
   */
  list(instanceID: string, options?: RequestOptions): APIPromise<APIListResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/apis`, options);
  }

  /**
   * Adds a REST API by its OpenAPI description. Each operation becomes a tool at
   * `{gateway_url}/mcp`, named with the API's `name`, a hyphen, and the lowercased
   * `operationId`. A description the gateway cannot fetch yields an API with no
   * tools. The instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayAPIResponse =
   *   await client.agentGateways.apis.create(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *     {
   *       name: 'petstore',
   *       spec_url:
   *         'https://petstore3.swagger.io/api/v3/openapi.json',
   *       base_url: 'https://petstore3.swagger.io/api/v3',
   *       open_to_every_key: true,
   *     },
   *   );
   * ```
   */
  create(
    instanceID: string,
    body: APICreateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayAPIResponse> {
    return this._client.post(path`/agent_gateways/${instanceID}/apis`, { body, ...options });
  }

  /**
   * Removes an API and returns it as it was. An MCP server's `id` answers `404`. The
   * instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayAPIResponse =
   *   await client.agentGateways.apis.delete(
   *     'dbe53cc0-bf7e-4f7a-8d84-752d19890eb3',
   *     { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
   *   );
   * ```
   */
  delete(
    apiID: string,
    params: APIDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayAPIResponse> {
    const { instance_id } = params;
    return this._client.delete(path`/agent_gateways/${instance_id}/apis/${apiID}`, options);
  }

  /**
   * Changes an API's settings. A field left out stays as it is, `"base_url": null`
   * clears the base URL, and `auth` is replaced whole. The instance must be `ready`;
   * otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayAPIResponse =
   *   await client.agentGateways.apis.update(
   *     'dbe53cc0-bf7e-4f7a-8d84-752d19890eb3',
   *     {
   *       instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *       tools: ['findpetsbystatus', 'getpetbyid'],
   *     },
   *   );
   * ```
   */
  update(
    apiID: string,
    params: APIUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayAPIResponse> {
    const { instance_id, ...body } = params;
    return this._client.patch(path`/agent_gateways/${instance_id}/apis/${apiID}`, { body, ...options });
  }
}

export interface AgentGatewayAPI {
  /**
   * Identifies the API.
   */
  id: string;

  /**
   * The server's outbound authentication method. Credentials are never returned.
   */
  auth: AgentGatewayShownAuth;

  /**
   * Where the gateway sends the API's requests. `null` takes the description's first
   * `servers` entry.
   */
  base_url: string | null;

  created_at: string | null;

  /**
   * Headers copied from the agent's request, by name.
   */
  forwarded_headers: Array<string>;

  /**
   * A name for the API, unique on the instance across MCP servers and APIs,
   * regardless of case. Letters, digits, `_`, and `.`. The gateway prefixes the
   * API's tools with it and a hyphen.
   */
  name: string;

  /**
   * `true` lets every key on the instance use the server, granted or not.
   */
  open_to_every_key: boolean;

  /**
   * The URL of the API's OpenAPI description.
   */
  spec_url: string;

  /**
   * Headers sent on every request.
   */
  static_headers: { [key: string]: string };

  /**
   * The operations the API exposes as tools, by tool name. `[]` exposes every
   * operation.
   */
  tools: Array<string>;

  updated_at: string | null;
}

export interface AgentGatewayAPIResponse {
  data: AgentGatewayAPI;
}

/**
 * The gateway sends no credential.
 */
export interface AgentGatewayNoAuth {
  type?: 'none';
}

/**
 * The gateway gets its own access token with the `client_credentials` grant and
 * sends it as a bearer token on every request, renewing it before it expires. The
 * client ID and secret are write-only.
 */
export interface AgentGatewayOAuthClientCredentials {
  client_id: string;

  client_secret: string;

  /**
   * The OAuth provider's token endpoint.
   */
  token_url: string;

  type: 'oauth_client_credentials';

  /**
   * The token's audience, sent in the token request.
   */
  audience?: string | null;

  /**
   * Whether the client ID and secret go in the token request's body or as HTTP Basic
   * authentication.
   */
  credentials_in?: 'body' | 'basic';

  /**
   * The resource the token is for, sent in the token request.
   */
  resource?: string | null;

  /**
   * The scopes to request.
   */
  scopes?: Array<string>;
}

/**
 * The gateway forwards the agent's own `Authorization` header to the server
 * unchanged.
 */
export interface AgentGatewayPassthroughAuth {
  type?: 'passthrough';
}

/**
 * The server's outbound authentication method. Credentials are never returned.
 */
export interface AgentGatewayShownAuth {
  /**
   * The method's `type`.
   */
  type: string;
}

/**
 * A static credential the gateway sends on every request. Write-only: responses
 * show its `type` only.
 */
export interface AgentGatewayStaticAuth {
  /**
   * How the credential is sent: `api_key` as `X-API-Key: <value>`, `bearer_token` as
   * `Authorization: Bearer <value>`, `basic` as
   * `Authorization: Basic <base64 of value>` with `value` in the form
   * `user:password`, `token` as `Authorization: token <value>`, and `authorization`
   * as `Authorization: <value>`.
   */
  type: 'api_key' | 'bearer_token' | 'basic' | 'token' | 'authorization';

  /**
   * The credential.
   */
  value: string;

  /**
   * A header name that replaces `X-API-Key` or `Authorization`.
   */
  header?: string | null;
}

export interface APIListResponse {
  data: Array<AgentGatewayAPI>;
}

export interface APICreateParams {
  /**
   * A name for the API, unique on the instance across MCP servers and APIs,
   * regardless of case. Up to 100 letters, digits, `_`, and `.`. The gateway
   * prefixes the API's tools with it and a hyphen.
   */
  name: string;

  /**
   * The URL of the API's OpenAPI description: OpenAPI 3.0, OpenAPI 3.1, or Swagger
   * 2.0.
   */
  spec_url: string;

  /**
   * How the gateway authenticates to the API. AWS Signature Version 4 is for MCP
   * servers only. Replaced whole on an update.
   */
  auth?:
    | AgentGatewayNoAuth
    | AgentGatewayStaticAuth
    | AgentGatewayOAuthClientCredentials
    | AgentGatewayPassthroughAuth;

  /**
   * Where the gateway sends the API's requests. Without it, the gateway takes the
   * description's first `servers` entry.
   */
  base_url?: string | null;

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
   * The operations the API exposes as tools, by tool name. `[]` exposes every
   * operation.
   */
  tools?: Array<string>;
}

export interface APIDeleteParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface APIUpdateParams {
  /**
   * Path param: The Agent Gateway's `id`.
   */
  instance_id: string;

  /**
   * Body param: How the gateway authenticates to the API. AWS Signature Version 4 is
   * for MCP servers only. Replaced whole on an update.
   */
  auth?:
    | AgentGatewayNoAuth
    | AgentGatewayStaticAuth
    | AgentGatewayOAuthClientCredentials
    | AgentGatewayPassthroughAuth;

  /**
   * Body param: Where the gateway sends the API's requests. Without it, the gateway
   * takes the description's first `servers` entry.
   */
  base_url?: string | null;

  /**
   * Body param: Headers copied from the agent's request, by name.
   */
  forwarded_headers?: Array<string>;

  /**
   * Body param: A name for the API, unique on the instance across MCP servers and
   * APIs, regardless of case. Letters, digits, `_`, and `.`. The gateway prefixes
   * the API's tools with it and a hyphen.
   */
  name?: string;

  /**
   * Body param: `true` lets every key on the instance use the server, granted or
   * not.
   */
  open_to_every_key?: boolean;

  /**
   * Body param: The URL of the API's OpenAPI description: OpenAPI 3.0, OpenAPI 3.1,
   * or Swagger 2.0.
   */
  spec_url?: string;

  /**
   * Body param: Headers sent on every request.
   */
  static_headers?: { [key: string]: string };

  /**
   * Body param: The operations the API exposes as tools, by tool name. `[]` exposes
   * every operation.
   */
  tools?: Array<string>;
}

export declare namespace APIs {
  export {
    type AgentGatewayAPI as AgentGatewayAPI,
    type AgentGatewayAPIResponse as AgentGatewayAPIResponse,
    type AgentGatewayNoAuth as AgentGatewayNoAuth,
    type AgentGatewayOAuthClientCredentials as AgentGatewayOAuthClientCredentials,
    type AgentGatewayPassthroughAuth as AgentGatewayPassthroughAuth,
    type AgentGatewayShownAuth as AgentGatewayShownAuth,
    type AgentGatewayStaticAuth as AgentGatewayStaticAuth,
    type APIListResponse as APIListResponse,
    type APICreateParams as APICreateParams,
    type APIDeleteParams as APIDeleteParams,
    type APIUpdateParams as APIUpdateParams,
  };
}
