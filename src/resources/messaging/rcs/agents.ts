// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RcsAgentsAPI from '../../rcs-agents';
import { RcsAgentsDefaultFlatPagination } from '../../rcs-agents';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const rcsAgent of client.messaging.rcs.agents.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RcsAgentsDefaultFlatPagination, RcsAgentsAPI.RcsAgent> {
    return this._client.getAPIList('/messaging/rcs/agents', DefaultFlatPagination<RcsAgentsAPI.RcsAgent>, {
      query,
      ...options,
    });
  }
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

export interface AgentListParams extends DefaultFlatPaginationParams {}

export declare namespace Agents {
  export { type AgentUpdateParams as AgentUpdateParams, type AgentListParams as AgentListParams };
}

export { type RcsAgentsDefaultFlatPagination };
