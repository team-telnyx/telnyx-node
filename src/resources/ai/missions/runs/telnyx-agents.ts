// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TelnyxAgents extends APIResource {
  /**
   * List all Telnyx agents linked to a run
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
   *       telnyx_agent_id: 'telnyx_agent_id',
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
   * Unlink a Telnyx agent from a run
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

export interface TelnyxAgentListResponse {
  data: Array<TelnyxAgentListResponse.Data>;
}

export namespace TelnyxAgentListResponse {
  export interface Data {
    created_at: string;

    run_id: string;

    telnyx_agent_id: string;
  }
}

export interface TelnyxAgentLinkResponse {
  data: TelnyxAgentLinkResponse.Data;
}

export namespace TelnyxAgentLinkResponse {
  export interface Data {
    created_at: string;

    run_id: string;

    telnyx_agent_id: string;
  }
}

export interface TelnyxAgentListParams {
  mission_id: string;
}

export interface TelnyxAgentLinkParams {
  /**
   * Path param
   */
  mission_id: string;

  /**
   * Body param: The Telnyx AI agent ID to link
   */
  telnyx_agent_id: string;
}

export interface TelnyxAgentUnlinkParams {
  mission_id: string;

  run_id: string;
}

export declare namespace TelnyxAgents {
  export {
    type TelnyxAgentListResponse as TelnyxAgentListResponse,
    type TelnyxAgentLinkResponse as TelnyxAgentLinkResponse,
    type TelnyxAgentListParams as TelnyxAgentListParams,
    type TelnyxAgentLinkParams as TelnyxAgentLinkParams,
    type TelnyxAgentUnlinkParams as TelnyxAgentUnlinkParams,
  };
}
