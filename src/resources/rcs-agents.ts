// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination } from '../core/pagination';

export class RcsAgents extends APIResource {}

export type RcsAgentsDefaultFlatPagination = DefaultFlatPagination<RcsAgent>;

export interface RcsAgent {
  /**
   * RCS Agent ID
   */
  agent_id?: string;

  /**
   * Human readable agent name
   */
  agent_name?: string;

  /**
   * Date and time when the resource was created
   */
  created_at?: string;

  /**
   * Specifies whether the agent is enabled
   */
  enabled?: boolean;

  /**
   * Messaging profile ID associated with the RCS Agent
   */
  profile_id?: string | null;

  /**
   * Date and time when the resource was updated
   */
  updated_at?: string;

  /**
   * User ID associated with the RCS Agent
   */
  user_id?: string;

  /**
   * Failover URL to receive RCS events
   */
  webhook_failover_url?: string | null;

  /**
   * URL to receive RCS events
   */
  webhook_url?: string | null;
}

export interface RcsAgentResponse {
  data?: RcsAgent;
}

export declare namespace RcsAgents {
  export { type RcsAgent as RcsAgent, type RcsAgentResponse as RcsAgentResponse };
}
