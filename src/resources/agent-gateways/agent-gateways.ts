// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as APIsAPI from './apis';
import {
  APICreateParams,
  APIDeleteParams,
  APIListResponse,
  APIUpdateParams,
  APIs,
  AgentGatewayAPI,
  AgentGatewayAPIResponse,
  AgentGatewayNoAuth,
  AgentGatewayOAuthClientCredentials,
  AgentGatewayPassthroughAuth,
  AgentGatewayShownAuth,
  AgentGatewayStaticAuth,
} from './apis';
import * as GuardrailsAPI from './guardrails';
import {
  AgentGatewayGuardrail,
  AgentGatewayGuardrailResponse,
  GuardrailCreateParams,
  GuardrailDeleteParams,
  GuardrailListResponse,
  GuardrailUpdateParams,
  Guardrails,
} from './guardrails';
import * as McpServersAPI from './mcp-servers';
import {
  AgentGatewayAwsSigV4Auth,
  AgentGatewayMcpServer,
  AgentGatewayMcpServerResponse,
  McpServerCreateParams,
  McpServerDeleteParams,
  McpServerListResponse,
  McpServerUpdateParams,
  McpServers,
} from './mcp-servers';
import * as PoliciesAPI from './policies';
import {
  AgentGatewayPolicy,
  AgentGatewayPolicyGuardrails,
  AgentGatewayPolicyPipeline,
  AgentGatewayPolicyResponse,
  AgentGatewayPolicyStep,
  Policies,
  PolicyCreateParams,
  PolicyDeleteParams,
  PolicyListResponse,
  PolicyRetrieveParams,
  PolicyUpdateParams,
} from './policies';
import * as PolicyAttachmentsAPI from './policy-attachments';
import {
  AgentGatewayPolicyAttachment,
  AgentGatewayPolicyAttachmentResponse,
  PolicyAttachmentCreateParams,
  PolicyAttachmentDeleteParams,
  PolicyAttachmentListResponse,
  PolicyAttachments,
} from './policy-attachments';
import * as KeysAPI from './keys/keys';
import {
  AgentGatewayKey,
  AgentGatewayKeyResponse,
  KeyCreateParams,
  KeyCreateResponse,
  KeyDeleteParams,
  KeyListParams,
  KeyListResponse,
  KeyUpdateParams,
  Keys,
} from './keys/keys';
import * as TeamsAPI from './teams/teams';
import {
  AgentGatewayTeam,
  AgentGatewayTeamResponse,
  TeamCreateParams,
  TeamDeleteParams,
  TeamListResponse,
  TeamUpdateParams,
  Teams,
} from './teams/teams';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AgentGateways extends APIResource {
  apis: APIsAPI.APIs = new APIsAPI.APIs(this._client);
  guardrails: GuardrailsAPI.Guardrails = new GuardrailsAPI.Guardrails(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  mcpServers: McpServersAPI.McpServers = new McpServersAPI.McpServers(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  policyAttachments: PolicyAttachmentsAPI.PolicyAttachments = new PolicyAttachmentsAPI.PolicyAttachments(
    this._client,
  );
  teams: TeamsAPI.Teams = new TeamsAPI.Teams(this._client);

  /**
   * Lists the account's Agent Gateway instances, newest first, one page at a time.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const agentGateway of client.agentGateways.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AgentGatewayListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AgentGatewaysDefaultFlatPagination, AgentGateway> {
    return this._client.getAPIList('/agent_gateways', DefaultFlatPagination<AgentGateway>, {
      query,
      ...options,
    });
  }

  /**
   * Creates an Agent Gateway instance on one of the account's WireGuard Interfaces.
   * The instance starts `pending`, moves to `provisioning`, and then to `ready` or
   * `failed`. It joins the WireGuard Interface as a peer named `agw-<instance id>`,
   * and its `gateway_url` is set when it is `ready`.
   *
   * @example
   * ```ts
   * const agentGatewayResponse =
   *   await client.agentGateways.create({
   *     wireguard_interface_id:
   *       'c788eb40-a4c0-4bf5-8f84-976027960f8e',
   *     name: 'support-gw',
   *   });
   * ```
   */
  create(body: AgentGatewayCreateParams, options?: RequestOptions): APIPromise<AgentGatewayResponse> {
    return this._client.post('/agent_gateways', { body, ...options });
  }

  /**
   * Deletes an Agent Gateway instance in any status. The response shows it
   * `deleting`; repeating the request answers the same until the instance is gone,
   * and then `404`. The instance's engine and everything stored on it are removed.
   *
   * @example
   * ```ts
   * const agentGatewayResponse =
   *   await client.agentGateways.delete(
   *     'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   *   );
   * ```
   */
  delete(instanceID: string, options?: RequestOptions): APIPromise<AgentGatewayResponse> {
    return this._client.delete(path`/agent_gateways/${instanceID}`, options);
  }

  /**
   * Returns one of the account's Agent Gateway instances.
   *
   * @example
   * ```ts
   * const agentGatewayResponse =
   *   await client.agentGateways.retrieve(
   *     'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   *   );
   * ```
   */
  retrieve(instanceID: string, options?: RequestOptions): APIPromise<AgentGatewayResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}`, options);
  }

  /**
   * Lists the models the instance serves. Each has the name a request uses, the
   * Telnyx Inference model behind it, and its price per million tokens.
   *
   * @example
   * ```ts
   * const response = await client.agentGateways.retrieveModels(
   *   '32ce035d-3165-4031-b1a7-a7c0c259590a',
   * );
   * ```
   */
  retrieveModels(
    instanceID: string,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayRetrieveModelsResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/models`, options);
  }

  /**
   * Lists the requests the instance served with its keys, newest first, one page at
   * a time. The window defaults to the last 24 hours and spans at most 31 days. A
   * row appears a few seconds after its request. The instance must be `ready`;
   * otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.agentGateways.retrieveSpendLogs(
   *     'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   *   );
   * ```
   */
  retrieveSpendLogs(
    instanceID: string,
    query: AgentGatewayRetrieveSpendLogsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentGatewayRetrieveSpendLogsResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/spend_logs`, { query, ...options });
  }
}

export type AgentGatewaysDefaultFlatPagination = DefaultFlatPagination<AgentGateway>;

/**
 * An Agent Gateway instance on a WireGuard Interface.
 */
export interface AgentGateway {
  /**
   * Identifies the instance.
   */
  id: string;

  /**
   * When the instance was created.
   */
  created_at: string;

  /**
   * The gateway engine.
   */
  engine: 'litellm';

  /**
   * The engine version the instance runs.
   */
  engine_version: string;

  /**
   * The base URL of the instance's API, `http://<address>:4000`, where the address
   * is the instance's peer address on the WireGuard Interface. Reachable only from
   * hosts on the instance's _Network_, and every request to it carries a key from
   * this API. `null` until the instance is `ready`.
   */
  gateway_url: string | null;

  /**
   * A label for people; `null` when none was given.
   */
  name: string | null;

  /**
   * The [_Network_](https://developers.telnyx.com/docs/network/overview) the
   * WireGuard Interface belongs to.
   */
  network_id: string | null;

  /**
   * Where the instance is in its lifecycle. `pending`: created and waiting to start.
   * `provisioning`: starting. `ready`: running, with its `gateway_url` set.
   * `failed`: did not start in time; delete it. `deleting`: being removed.
   */
  status: 'pending' | 'provisioning' | 'ready' | 'failed' | 'deleting';

  /**
   * The WireGuard Interface the instance joins as a peer.
   */
  wireguard_interface_id: string | null;
}

export interface AgentGatewayResponse {
  /**
   * An Agent Gateway instance on a WireGuard Interface.
   */
  data: AgentGateway;
}

export interface AgentGatewayRetrieveModelsResponse {
  data: Array<AgentGatewayRetrieveModelsResponse.Data>;
}

export namespace AgentGatewayRetrieveModelsResponse {
  /**
   * A model an instance serves.
   */
  export interface Data {
    /**
     * The model's ID on the instance.
     */
    id: string;

    /**
     * The Telnyx Inference model behind it, such as `zai-org/GLM-5.3-Flash`.
     */
    model: string;

    /**
     * The name a request uses, such as `GLM-5.3-Flash`.
     */
    name: string;

    /**
     * When the price was last set.
     */
    priced_at: string | null;

    /**
     * A model's price in USD per million tokens.
     */
    pricing: Data.Pricing;
  }

  export namespace Data {
    /**
     * A model's price in USD per million tokens.
     */
    export interface Pricing {
      /**
       * USD per million cached input tokens.
       */
      cached_input: number | null;

      /**
       * Always `USD`.
       */
      currency: string;

      /**
       * USD per million input tokens.
       */
      input: number;

      /**
       * USD per million output tokens.
       */
      output: number;

      /**
       * Always `1M_tokens`.
       */
      unit: string;
    }
  }
}

export interface AgentGatewayRetrieveSpendLogsResponse {
  data: Array<AgentGatewayRetrieveSpendLogsResponse.Data>;

  meta: AgentGatewayRetrieveSpendLogsResponse.Meta;
}

export namespace AgentGatewayRetrieveSpendLogsResponse {
  /**
   * One request the instance served.
   */
  export interface Data {
    /**
     * The request's ID.
     */
    id: string;

    /**
     * Output tokens, reasoning included.
     */
    completion_tokens: number;

    /**
     * How long the request took, in milliseconds.
     */
    duration_ms: number | null;

    /**
     * When the request ended.
     */
    ended_at: string | null;

    /**
     * The key the request used.
     */
    key_id: string | null;

    /**
     * The Telnyx Inference model that answered, such as `zai-org/GLM-5.3-Flash`. For
     * an MCP tool request, `MCP: ` and the tool's name.
     */
    model: string | null;

    /**
     * The request type. `acompletion` is a chat completion, `aresponses` a response,
     * `anthropic_messages` a message, `call_mcp_tool` an MCP tool request, and
     * `list_mcp_tools` an MCP tool list.
     */
    operation: string;

    /**
     * Input tokens.
     */
    prompt_tokens: number;

    /**
     * What the request cost, in USD, with its tokens at Telnyx Inference prices.
     */
    spend: number;

    /**
     * When the request started.
     */
    started_at: string;

    /**
     * `success` or `failure`.
     */
    status: string | null;

    /**
     * The key's team.
     */
    team_id: string | null;

    /**
     * Input and output tokens.
     */
    total_tokens: number;
  }

  export interface Meta {
    /**
     * The page returned, counting from 1.
     */
    page_number: number;

    /**
     * Results per page.
     */
    page_size: number;

    /**
     * Pages that can be requested; 0 when nothing matched.
     */
    total_pages: number;

    /**
     * Results across every page.
     */
    total_results: number;

    /**
     * `true` when the window holds more than 10,000 rows. The two totals are then
     * lower bounds: narrow the window, or page until a page comes back empty.
     */
    total_results_capped: boolean;
  }
}

export interface AgentGatewayListParams extends DefaultFlatPaginationParams {}

export interface AgentGatewayCreateParams {
  /**
   * One of the account's WireGuard Interfaces. The instance joins it as a peer, and
   * the interface's other peers reach the instance.
   */
  wireguard_interface_id: string;

  /**
   * A label for people.
   */
  name?: string | null;
}

export interface AgentGatewayRetrieveSpendLogsParams {
  /**
   * The window's end, an RFC 3339 timestamp with an offset. Defaults to now.
   */
  end?: string;

  /**
   * Only the requests made with this key.
   */
  key_id?: string;

  /**
   * The page to return, counting from 1.
   */
  'page[number]'?: number;

  /**
   * Results per page.
   */
  'page[size]'?: number;

  /**
   * The window's start, an RFC 3339 timestamp with an offset. Defaults to 24 hours
   * before `end`.
   */
  start?: string;

  /**
   * Only the requests made with this team's keys.
   */
  team_id?: string;
}

AgentGateways.APIs = APIs;
AgentGateways.Guardrails = Guardrails;
AgentGateways.Keys = Keys;
AgentGateways.McpServers = McpServers;
AgentGateways.Policies = Policies;
AgentGateways.PolicyAttachments = PolicyAttachments;
AgentGateways.Teams = Teams;

export declare namespace AgentGateways {
  export {
    type AgentGateway as AgentGateway,
    type AgentGatewayResponse as AgentGatewayResponse,
    type AgentGatewayRetrieveModelsResponse as AgentGatewayRetrieveModelsResponse,
    type AgentGatewayRetrieveSpendLogsResponse as AgentGatewayRetrieveSpendLogsResponse,
    type AgentGatewaysDefaultFlatPagination as AgentGatewaysDefaultFlatPagination,
    type AgentGatewayListParams as AgentGatewayListParams,
    type AgentGatewayCreateParams as AgentGatewayCreateParams,
    type AgentGatewayRetrieveSpendLogsParams as AgentGatewayRetrieveSpendLogsParams,
  };

  export {
    APIs as APIs,
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

  export {
    Guardrails as Guardrails,
    type AgentGatewayGuardrail as AgentGatewayGuardrail,
    type AgentGatewayGuardrailResponse as AgentGatewayGuardrailResponse,
    type GuardrailListResponse as GuardrailListResponse,
    type GuardrailCreateParams as GuardrailCreateParams,
    type GuardrailDeleteParams as GuardrailDeleteParams,
    type GuardrailUpdateParams as GuardrailUpdateParams,
  };

  export {
    Keys as Keys,
    type AgentGatewayKey as AgentGatewayKey,
    type AgentGatewayKeyResponse as AgentGatewayKeyResponse,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyListParams as KeyListParams,
    type KeyCreateParams as KeyCreateParams,
    type KeyDeleteParams as KeyDeleteParams,
    type KeyUpdateParams as KeyUpdateParams,
  };

  export {
    McpServers as McpServers,
    type AgentGatewayAwsSigV4Auth as AgentGatewayAwsSigV4Auth,
    type AgentGatewayMcpServer as AgentGatewayMcpServer,
    type AgentGatewayMcpServerResponse as AgentGatewayMcpServerResponse,
    type McpServerListResponse as McpServerListResponse,
    type McpServerCreateParams as McpServerCreateParams,
    type McpServerDeleteParams as McpServerDeleteParams,
    type McpServerUpdateParams as McpServerUpdateParams,
  };

  export {
    Policies as Policies,
    type AgentGatewayPolicy as AgentGatewayPolicy,
    type AgentGatewayPolicyGuardrails as AgentGatewayPolicyGuardrails,
    type AgentGatewayPolicyPipeline as AgentGatewayPolicyPipeline,
    type AgentGatewayPolicyResponse as AgentGatewayPolicyResponse,
    type AgentGatewayPolicyStep as AgentGatewayPolicyStep,
    type PolicyListResponse as PolicyListResponse,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyRetrieveParams as PolicyRetrieveParams,
    type PolicyUpdateParams as PolicyUpdateParams,
  };

  export {
    PolicyAttachments as PolicyAttachments,
    type AgentGatewayPolicyAttachment as AgentGatewayPolicyAttachment,
    type AgentGatewayPolicyAttachmentResponse as AgentGatewayPolicyAttachmentResponse,
    type PolicyAttachmentListResponse as PolicyAttachmentListResponse,
    type PolicyAttachmentCreateParams as PolicyAttachmentCreateParams,
    type PolicyAttachmentDeleteParams as PolicyAttachmentDeleteParams,
  };

  export {
    Teams as Teams,
    type AgentGatewayTeam as AgentGatewayTeam,
    type AgentGatewayTeamResponse as AgentGatewayTeamResponse,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamDeleteParams as TeamDeleteParams,
    type TeamUpdateParams as TeamUpdateParams,
  };
}
