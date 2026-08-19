// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as EventsAPI from './events';
import {
  EventData,
  EventDataDefaultFlatPagination,
  EventGetEventDetailsParams,
  EventListParams,
  EventLogParams,
  EventResponse,
  EventType,
  Events,
} from './events';
import * as PlanAPI from './plan';
import {
  CreatePlanStepRequest,
  Plan,
  PlanAddStepsToPlanParams,
  PlanCreateParams,
  PlanGetStepDetailsParams,
  PlanRetrieveParams,
  PlanRetrieveResponse,
  PlanStepData,
  PlanStepResponse,
  PlanStepsCreatedResponse,
  PlanUpdateStepParams,
  StepStatus,
} from './plan';
import * as TelnyxAgentsAPI from './telnyx-agents';
import {
  TelnyxAgentData,
  TelnyxAgentLinkParams,
  TelnyxAgentLinkResponse,
  TelnyxAgentListParams,
  TelnyxAgentListResponse,
  TelnyxAgentUnlinkParams,
  TelnyxAgents,
} from './telnyx-agents';
import * as TestSuitesRunsAPI from '../../assistants/tests/test-suites/runs';
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
   * Returns a paginated list of runs for the specified mission, optionally filtered
   * by run status, so you can track the mission's execution history over time.
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
   * Starts a new run of the specified mission and returns the created run object.
   * Track its progress through the run detail, plan, and events endpoints.
   *
   * @example
   * ```ts
   * const missionRunResponse =
   *   await client.ai.missions.runs.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       input: {
   *         objective:
   *           "Summarize yesterday's failed call attempts",
   *       },
   *       metadata: { requested_by: 'docs-example' },
   *     },
   *   );
   * ```
   */
  create(
    missionID: string,
    body: RunCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MissionRunResponse> {
    return this._client.post(path`/ai/missions/${missionID}/runs`, { body, ...options });
  }

  /**
   * Returns the full details of a single run, including its current status. Use this
   * to poll an in-flight run or inspect the outcome of a completed one.
   *
   * @example
   * ```ts
   * const missionRunResponse =
   *   await client.ai.missions.runs.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    runID: string,
    params: RunRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<MissionRunResponse> {
    const { mission_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${runID}`, options);
  }

  /**
   * Updates a run's status and/or result and returns the updated run object.
   * Typically used by executing agents to report progress or record the final
   * outcome.
   *
   * @example
   * ```ts
   * const missionRunResponse =
   *   await client.ai.missions.runs.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       result_summary:
   *         'Processed 24 customer records successfully.',
   *       status: 'succeeded',
   *     },
   *   );
   * ```
   */
  update(runID: string, params: RunUpdateParams, options?: RequestOptions): APIPromise<MissionRunResponse> {
    const { mission_id, ...body } = params;
    return this._client.patch(path`/ai/missions/${mission_id}/runs/${runID}`, { body, ...options });
  }

  /**
   * Returns a paginated list of recent runs across every mission in your
   * organization, optionally filtered by run status. Useful for monitoring overall
   * mission activity without querying each mission individually.
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
   * Cancels a running or paused run and returns the updated run object. A cancelled
   * run stops executing; start a new run to execute the mission again.
   *
   * @example
   * ```ts
   * const missionRunResponse =
   *   await client.ai.missions.runs.cancelRun(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  cancelRun(
    runID: string,
    params: RunCancelRunParams,
    options?: RequestOptions,
  ): APIPromise<MissionRunResponse> {
    const { mission_id } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/cancel`, options);
  }

  /**
   * Pauses a currently running run and returns the updated run object. Execution
   * halts until the run is resumed.
   *
   * @example
   * ```ts
   * const missionRunResponse =
   *   await client.ai.missions.runs.pauseRun(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  pauseRun(
    runID: string,
    params: RunPauseRunParams,
    options?: RequestOptions,
  ): APIPromise<MissionRunResponse> {
    const { mission_id } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/pause`, options);
  }

  /**
   * Resumes a previously paused run and returns the updated run object, letting
   * execution continue from where it was paused.
   *
   * @example
   * ```ts
   * const missionRunResponse =
   *   await client.ai.missions.runs.resumeRun(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  resumeRun(
    runID: string,
    params: RunResumeRunParams,
    options?: RequestOptions,
  ): APIPromise<MissionRunResponse> {
    const { mission_id } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/resume`, options);
  }
}

export type MissionRunDataDefaultFlatPagination = DefaultFlatPagination<MissionRunData>;

export interface MissionRunData {
  mission_id: string;

  run_id: string;

  started_at: string;

  status: RunStatus;

  updated_at: string;

  error?: string;

  finished_at?: string;

  input?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };

  result_payload?: { [key: string]: unknown };

  result_summary?: string;
}

export interface MissionRunResponse {
  data: MissionRunData;
}

export interface MissionRunsListResponse {
  data: Array<MissionRunData>;

  meta: TestSuitesRunsAPI.Meta;
}

export type RunStatus = 'pending' | 'running' | 'paused' | 'succeeded' | 'failed' | 'cancelled';

export interface RunListParams extends DefaultFlatPaginationParams {
  /**
   * Filter results by status.
   */
  status?: string;
}

export interface RunCreateParams {
  input?: { [key: string]: unknown };

  metadata?: { [key: string]: unknown };
}

export interface RunRetrieveParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface RunUpdateParams {
  /**
   * Path param: Unique identifier of the mission.
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
  status?: RunStatus;
}

export interface RunListRunsParams extends DefaultFlatPaginationParams {
  /**
   * Filter results by status.
   */
  status?: string;
}

export interface RunCancelRunParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface RunPauseRunParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface RunResumeRunParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

Runs.Events = Events;
Runs.Plan = Plan;
Runs.TelnyxAgents = TelnyxAgents;

export declare namespace Runs {
  export {
    type MissionRunData as MissionRunData,
    type MissionRunResponse as MissionRunResponse,
    type MissionRunsListResponse as MissionRunsListResponse,
    type RunStatus as RunStatus,
    type MissionRunDataDefaultFlatPagination as MissionRunDataDefaultFlatPagination,
    type RunListParams as RunListParams,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunUpdateParams as RunUpdateParams,
    type RunListRunsParams as RunListRunsParams,
    type RunCancelRunParams as RunCancelRunParams,
    type RunPauseRunParams as RunPauseRunParams,
    type RunResumeRunParams as RunResumeRunParams,
  };

  export {
    Events as Events,
    type EventData as EventData,
    type EventResponse as EventResponse,
    type EventType as EventType,
    type EventDataDefaultFlatPagination as EventDataDefaultFlatPagination,
    type EventListParams as EventListParams,
    type EventLogParams as EventLogParams,
    type EventGetEventDetailsParams as EventGetEventDetailsParams,
  };

  export {
    Plan as Plan,
    type CreatePlanStepRequest as CreatePlanStepRequest,
    type PlanStepData as PlanStepData,
    type PlanStepResponse as PlanStepResponse,
    type PlanStepsCreatedResponse as PlanStepsCreatedResponse,
    type StepStatus as StepStatus,
    type PlanRetrieveResponse as PlanRetrieveResponse,
    type PlanRetrieveParams as PlanRetrieveParams,
    type PlanCreateParams as PlanCreateParams,
    type PlanUpdateStepParams as PlanUpdateStepParams,
    type PlanAddStepsToPlanParams as PlanAddStepsToPlanParams,
    type PlanGetStepDetailsParams as PlanGetStepDetailsParams,
  };

  export {
    TelnyxAgents as TelnyxAgents,
    type TelnyxAgentData as TelnyxAgentData,
    type TelnyxAgentListResponse as TelnyxAgentListResponse,
    type TelnyxAgentLinkResponse as TelnyxAgentLinkResponse,
    type TelnyxAgentListParams as TelnyxAgentListParams,
    type TelnyxAgentLinkParams as TelnyxAgentLinkParams,
    type TelnyxAgentUnlinkParams as TelnyxAgentUnlinkParams,
  };
}
