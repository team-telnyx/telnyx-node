// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import {
  EventGetEventDetailsParams,
  EventGetEventDetailsResponse,
  EventListParams,
  EventListResponse,
  EventListResponsesDefaultFlatPagination,
  EventLogParams,
  EventLogResponse,
  Events,
} from './events';
import * as PlanAPI from './plan';
import {
  Plan,
  PlanAddStepsToPlanParams,
  PlanAddStepsToPlanResponse,
  PlanCreateParams,
  PlanCreateResponse,
  PlanGetStepDetailsParams,
  PlanGetStepDetailsResponse,
  PlanRetrieveParams,
  PlanRetrieveResponse,
  PlanStepData,
  PlanUpdateStepParams,
  PlanUpdateStepResponse,
} from './plan';
import * as TelnyxAgentsAPI from './telnyx-agents';
import {
  TelnyxAgentLinkParams,
  TelnyxAgentLinkResponse,
  TelnyxAgentListParams,
  TelnyxAgentListResponse,
  TelnyxAgentUnlinkParams,
  TelnyxAgents,
} from './telnyx-agents';
import { APIPromise } from '../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Runs extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  plan: PlanAPI.Plan = new PlanAPI.Plan(this._client);
  telnyxAgents: TelnyxAgentsAPI.TelnyxAgents = new TelnyxAgentsAPI.TelnyxAgents(this._client);

  /**
   * Start a new run for a mission
   *
   * @example
   * ```ts
   * const run = await client.ai.missions.runs.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  create(
    missionID: string,
    body: RunCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunCreateResponse> {
    return this._client.post(path`/ai/missions/${missionID}/runs`, { body, ...options });
  }

  /**
   * Get details of a specific run
   *
   * @example
   * ```ts
   * const run = await client.ai.missions.runs.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  retrieve(
    runID: string,
    params: RunRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<RunRetrieveResponse> {
    const { mission_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${runID}`, options);
  }

  /**
   * Update run status and/or result
   *
   * @example
   * ```ts
   * const run = await client.ai.missions.runs.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  update(runID: string, params: RunUpdateParams, options?: RequestOptions): APIPromise<RunUpdateResponse> {
    const { mission_id, ...body } = params;
    return this._client.patch(path`/ai/missions/${mission_id}/runs/${runID}`, { body, ...options });
  }

  /**
   * List all runs for a specific mission
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const missionRunData of client.ai.missions.runs.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    missionID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MissionRunDataDefaultFlatPagination, MissionRunData> {
    return this._client.getAPIList(
      path`/ai/missions/${missionID}/runs`,
      DefaultFlatPagination<MissionRunData>,
      { query, ...options },
    );
  }

  /**
   * Cancel a running or paused run
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.runs.cancelRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  cancelRun(
    runID: string,
    params: RunCancelRunParams,
    options?: RequestOptions,
  ): APIPromise<RunCancelRunResponse> {
    const { mission_id } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/cancel`, options);
  }

  /**
   * List recent runs across all missions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const missionRunData of client.ai.missions.runs.listRuns()) {
   *   // ...
   * }
   * ```
   */
  listRuns(
    query: RunListRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MissionRunDataDefaultFlatPagination, MissionRunData> {
    return this._client.getAPIList('/ai/missions/runs', DefaultFlatPagination<MissionRunData>, {
      query,
      ...options,
    });
  }

  /**
   * Pause a running run
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.runs.pauseRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  pauseRun(
    runID: string,
    params: RunPauseRunParams,
    options?: RequestOptions,
  ): APIPromise<RunPauseRunResponse> {
    const { mission_id } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/pause`, options);
  }

  /**
   * Resume a paused run
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.runs.resumeRun(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  resumeRun(
    runID: string,
    params: RunResumeRunParams,
    options?: RequestOptions,
  ): APIPromise<RunResumeRunResponse> {
    const { mission_id } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/resume`, options);
  }
}

export type MissionRunDataDefaultFlatPagination = DefaultFlatPagination<MissionRunData>;

export interface MissionRunData {
  mission_id: string;

  run_id: string;

  started_at: string;

  status: 'pending' | 'running' | 'paused' | 'succeeded' | 'failed' | 'cancelled';

  updated_at: string;

  error?: string;

  finished_at?: string;

  input?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };

  result_payload?: { [key: string]: unknown };

  result_summary?: string;
}

export interface RunCreateResponse {
  data: MissionRunData;
}

export interface RunRetrieveResponse {
  data: MissionRunData;
}

export interface RunUpdateResponse {
  data: MissionRunData;
}

export interface RunCancelRunResponse {
  data: MissionRunData;
}

export interface RunPauseRunResponse {
  data: MissionRunData;
}

export interface RunResumeRunResponse {
  data: MissionRunData;
}

export interface RunCreateParams {
  input?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

export interface RunRetrieveParams {
  mission_id: string;
}

export interface RunUpdateParams {
  /**
   * Path param
   */
  mission_id: string;

  /**
   * Body param
   */
  error?: string;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  result_payload?: { [key: string]: unknown };

  /**
   * Body param
   */
  result_summary?: string;

  /**
   * Body param
   */
  status?: 'pending' | 'running' | 'paused' | 'succeeded' | 'failed' | 'cancelled';
}

export interface RunListParams extends DefaultFlatPaginationParams {
  status?: string;
}

export interface RunCancelRunParams {
  mission_id: string;
}

export interface RunListRunsParams extends DefaultFlatPaginationParams {
  status?: string;
}

export interface RunPauseRunParams {
  mission_id: string;
}

export interface RunResumeRunParams {
  mission_id: string;
}

Runs.Events = Events;
Runs.Plan = Plan;
Runs.TelnyxAgents = TelnyxAgents;

export declare namespace Runs {
  export {
    type MissionRunData as MissionRunData,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunUpdateResponse as RunUpdateResponse,
    type RunCancelRunResponse as RunCancelRunResponse,
    type RunPauseRunResponse as RunPauseRunResponse,
    type RunResumeRunResponse as RunResumeRunResponse,
    type MissionRunDataDefaultFlatPagination as MissionRunDataDefaultFlatPagination,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunUpdateParams as RunUpdateParams,
    type RunListParams as RunListParams,
    type RunCancelRunParams as RunCancelRunParams,
    type RunListRunsParams as RunListRunsParams,
    type RunPauseRunParams as RunPauseRunParams,
    type RunResumeRunParams as RunResumeRunParams,
  };

  export {
    Events as Events,
    type EventListResponse as EventListResponse,
    type EventGetEventDetailsResponse as EventGetEventDetailsResponse,
    type EventLogResponse as EventLogResponse,
    type EventListResponsesDefaultFlatPagination as EventListResponsesDefaultFlatPagination,
    type EventListParams as EventListParams,
    type EventGetEventDetailsParams as EventGetEventDetailsParams,
    type EventLogParams as EventLogParams,
  };

  export {
    Plan as Plan,
    type PlanStepData as PlanStepData,
    type PlanCreateResponse as PlanCreateResponse,
    type PlanRetrieveResponse as PlanRetrieveResponse,
    type PlanAddStepsToPlanResponse as PlanAddStepsToPlanResponse,
    type PlanGetStepDetailsResponse as PlanGetStepDetailsResponse,
    type PlanUpdateStepResponse as PlanUpdateStepResponse,
    type PlanCreateParams as PlanCreateParams,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanAddStepsToPlanParams as PlanAddStepsToPlanParams,
    type PlanGetStepDetailsParams as PlanGetStepDetailsParams,
    type PlanUpdateStepParams as PlanUpdateStepParams,
  };

  export {
    TelnyxAgents as TelnyxAgents,
    type TelnyxAgentListResponse as TelnyxAgentListResponse,
    type TelnyxAgentLinkResponse as TelnyxAgentLinkResponse,
    type TelnyxAgentListParams as TelnyxAgentListParams,
    type TelnyxAgentLinkParams as TelnyxAgentLinkParams,
    type TelnyxAgentUnlinkParams as TelnyxAgentUnlinkParams,
  };
}
