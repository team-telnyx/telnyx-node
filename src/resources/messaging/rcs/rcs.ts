// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './agents';
import { AgentListParams, AgentUpdateParams, Agents } from './agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Rcs extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);

  /**
   * Adds a test phone number to an RCS agent for testing purposes.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging.rcs.inviteTestNumber(
   *     'phone_number',
   *     { id: 'id' },
   *   );
   * ```
   */
  inviteTestNumber(
    phoneNumber: string,
    params: RcInviteTestNumberParams,
    options?: RequestOptions,
  ): APIPromise<RcInviteTestNumberResponse> {
    const { id } = params;
    return this._client.put(path`/messaging/rcs/test_number_invite/${id}/${phoneNumber}`, options);
  }

  /**
   * Check RCS capabilities (batch)
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging.rcs.listBulkCapabilities({
   *     agent_id: 'TestAgent',
   *     phone_numbers: ['+13125551234'],
   *   });
   * ```
   */
  listBulkCapabilities(
    body: RcListBulkCapabilitiesParams,
    options?: RequestOptions,
  ): APIPromise<RcListBulkCapabilitiesResponse> {
    return this._client.post('/messaging/rcs/bulk_capabilities', { body, ...options });
  }

  /**
   * Check RCS capabilities
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging.rcs.retrieveCapabilities(
   *     'phone_number',
   *     { agent_id: 'agent_id' },
   *   );
   * ```
   */
  retrieveCapabilities(
    phoneNumber: string,
    params: RcRetrieveCapabilitiesParams,
    options?: RequestOptions,
  ): APIPromise<RcRetrieveCapabilitiesResponse> {
    const { agent_id } = params;
    return this._client.get(path`/messaging/rcs/capabilities/${agent_id}/${phoneNumber}`, options);
  }
}

export interface RcsCapabilities {
  /**
   * RCS agent ID
   */
  agent_id?: string;

  /**
   * RCS agent name
   */
  agent_name?: string;

  /**
   * List of RCS capabilities
   */
  features?: Array<string>;

  /**
   * Phone number
   */
  phone_number?: string;

  /**
   * Identifies the type of the resource
   */
  record_type?: 'rcs.capabilities';
}

export interface RcInviteTestNumberResponse {
  data: RcInviteTestNumberResponse.Data;
}

export namespace RcInviteTestNumberResponse {
  export interface Data {
    /**
     * RCS agent ID
     */
    agent_id?: string;

    /**
     * Phone number that was invited for testing
     */
    phone_number?: string;

    /**
     * Identifies the type of the resource
     */
    record_type?: 'rcs.test_number_invite';

    /**
     * Status of the test number invitation
     */
    status?: string;
  }
}

export interface RcListBulkCapabilitiesResponse {
  data?: Array<RcsCapabilities>;
}

export interface RcRetrieveCapabilitiesResponse {
  data?: RcsCapabilities;
}

export interface RcInviteTestNumberParams {
  /**
   * RCS agent ID
   */
  id: string;
}

export interface RcListBulkCapabilitiesParams {
  /**
   * RCS Agent ID
   */
  agent_id: string;

  /**
   * List of phone numbers to check
   */
  phone_numbers: Array<string>;
}

export interface RcRetrieveCapabilitiesParams {
  /**
   * RCS agent ID
   */
  agent_id: string;
}

Rcs.Agents = Agents;

export declare namespace Rcs {
  export {
    type RcsCapabilities as RcsCapabilities,
    type RcInviteTestNumberResponse as RcInviteTestNumberResponse,
    type RcListBulkCapabilitiesResponse as RcListBulkCapabilitiesResponse,
    type RcRetrieveCapabilitiesResponse as RcRetrieveCapabilitiesResponse,
    type RcInviteTestNumberParams as RcInviteTestNumberParams,
    type RcListBulkCapabilitiesParams as RcListBulkCapabilitiesParams,
    type RcRetrieveCapabilitiesParams as RcRetrieveCapabilitiesParams,
  };

  export {
    Agents as Agents,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
  };
}
