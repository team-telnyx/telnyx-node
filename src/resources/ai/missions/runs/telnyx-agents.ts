// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TelnyxAgents extends APIResource {
  /**
   * Returns the Telnyx agents currently linked to the specified run. Linked agents
   * participate in executing the run's plan.
   *
   * @example
   * ```ts
   * const telnyxAgents =
   *   await client.ai.missions.runs.telnyxAgents.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  list(
    runID: string,
    params: TelnyxAgentListParams,
    options?: RequestOptions,
  ): APIPromise<TelnyxAgentListResponse> {
    const { mission_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${runID}/telnyx-agents`, options);
  }

  /**
   * Link a Telnyx AI agent (voice/messaging) to a run
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.runs.telnyxAgents.link(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       telnyx_agent_id: 'Telnyx Agent Id',
   *     },
   *   );
   * ```
   */
  link(
    runID: string,
    params: TelnyxAgentLinkParams,
    options?: RequestOptions,
  ): APIPromise<TelnyxAgentLinkResponse> {
    const { mission_id, ...body } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/telnyx-agents`, {
      body,
      ...options,
    });
  }

  /**
   * Unlinks the specified Telnyx agent from the run so it no longer participates in
   * execution. The run itself and its history are unaffected.
   *
   * @example
   * ```ts
   * await client.ai.missions.runs.telnyxAgents.unlink(
   *   'telnyx_agent_id',
   *   {
   *     mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   },
   * );
   * ```
   */
  unlink(telnyxAgentID: string, params: TelnyxAgentUnlinkParams, options?: RequestOptions): APIPromise<void> {
    const { mission_id, run_id } = params;
    return this._client.delete(
      path`/ai/missions/${mission_id}/runs/${run_id}/telnyx-agents/${telnyxAgentID}`,
      { ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
    );
  }
}

export interface TelnyxAgentData {
  created_at: string;

  run_id: string;

  telnyx_agent_id: string;
}

export interface TelnyxAgentListResponse {
  data: Array<TelnyxAgentData>;
}

export interface TelnyxAgentLinkResponse {
  data: TelnyxAgentData;
}

export interface TelnyxAgentListParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface TelnyxAgentLinkParams {
  /**
   * Path param: Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Body param: The Telnyx AI agent ID to link
   */
  telnyx_agent_id: string;
}

export interface TelnyxAgentUnlinkParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Unique identifier of the run.
   */
  run_id: string;
}

export declare namespace TelnyxAgents {
  export {
    type TelnyxAgentData as TelnyxAgentData,
    type TelnyxAgentListResponse as TelnyxAgentListResponse,
    type TelnyxAgentLinkResponse as TelnyxAgentLinkResponse,
    type TelnyxAgentListParams as TelnyxAgentListParams,
    type TelnyxAgentLinkParams as TelnyxAgentLinkParams,
    type TelnyxAgentUnlinkParams as TelnyxAgentUnlinkParams,
  };
}
