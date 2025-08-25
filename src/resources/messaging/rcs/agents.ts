// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AuthenticationProvidersAPI from '../../authentication-providers';
import * as RcsAgentsAPI from '../../rcs-agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Agents extends APIResource {
  /**
   * Retrieve an RCS agent
   *
   * @example
   * ```ts
   * const rcsAgentResponse =
   *   await client.messaging.rcs.agents.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RcsAgentsAPI.RcsAgentResponse> {
    return this._client.get(path`/messaging/rcs/agents/${id}`, options);
  }

  /**
   * Modify an RCS agent
   *
   * @example
   * ```ts
   * const rcsAgentResponse =
   *   await client.messaging.rcs.agents.update('id');
   * ```
   */
  update(
    id: string,
    body: AgentUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RcsAgentsAPI.RcsAgentResponse> {
    return this._client.patch(path`/messaging/rcs/agents/${id}`, { body, ...options });
  }

  /**
   * List all RCS agents
   *
   * @example
   * ```ts
   * const agents = await client.messaging.rcs.agents.list();
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/messaging/rcs/agents', { query, ...options });
  }
}

export interface AgentListResponse {
  data?: Array<RcsAgentsAPI.RcsAgent>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface AgentUpdateParams {
  /**
   * Messaging profile ID associated with the RCS Agent
   */
  profile_id?: string | null;

  /**
   * Failover URL to receive RCS events
   */
  webhook_failover_url?: string | null;

  /**
   * URL to receive RCS events
   */
  webhook_url?: string | null;
}

export interface AgentListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: AgentListParams.Page;
}

export namespace AgentListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace Agents {
  export {
    type AgentListResponse as AgentListResponse,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
  };
}
