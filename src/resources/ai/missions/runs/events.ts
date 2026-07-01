// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Events extends APIResource {
  /**
   * List events for a run (paginated)
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const eventData of client.ai.missions.runs.events.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    runID: string,
    params: EventListParams,
    options?: RequestOptions,
  ): PagePromise<EventDataDefaultFlatPagination, EventData> {
    const { mission_id, ...query } = params;
    return this._client.getAPIList(
      path`/ai/missions/${mission_id}/runs/${runID}/events`,
      DefaultFlatPagination<EventData>,
      { query, ...options },
    );
  }

  /**
   * Log an event for a run
   *
   * @example
   * ```ts
   * const eventResponse =
   *   await client.ai.missions.runs.events.log(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       summary: 'summary',
   *       type: 'status_change',
   *     },
   *   );
   * ```
   */
  log(runID: string, params: EventLogParams, options?: RequestOptions): APIPromise<EventResponse> {
    const { mission_id, ...body } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/events`, { body, ...options });
  }

  /**
   * Get details of a specific event
   *
   * @example
   * ```ts
   * const eventResponse =
   *   await client.ai.missions.runs.events.getEventDetails(
   *     'event_id',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  getEventDetails(
    eventID: string,
    params: EventGetEventDetailsParams,
    options?: RequestOptions,
  ): APIPromise<EventResponse> {
    const { mission_id, run_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${run_id}/events/${eventID}`, options);
  }
}

export type EventDataDefaultFlatPagination = DefaultFlatPagination<EventData>;

export interface EventData {
  event_id: string;

  run_id: string;

  summary: string;

  timestamp: string;

  type: EventType;

  agent_id?: string;

  idempotency_key?: string;

  payload?: { [key: string]: unknown };

  step_id?: string;
}

export interface EventResponse {
  data: EventData;
}

export type EventType =
  | 'status_change'
  | 'step_started'
  | 'step_completed'
  | 'step_failed'
  | 'tool_call'
  | 'tool_result'
  | 'message'
  | 'error'
  | 'custom';

export interface EventListParams extends DefaultFlatPaginationParams {
  /**
   * Path param: Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Query param: Filter results by agent id.
   */
  agent_id?: string;

  /**
   * Query param: Filter results by step id.
   */
  step_id?: string;

  /**
   * Query param: Filter results by type.
   */
  type?: string;
}

export interface EventLogParams {
  /**
   * Path param: Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Body param
   */
  summary: string;

  /**
   * Body param
   */
  type: EventType;

  /**
   * Body param
   */
  agent_id?: string;

  /**
   * Body param: Prevents duplicate events on retry
   */
  idempotency_key?: string;

  /**
   * Body param
   */
  payload?: { [key: string]: unknown };

  /**
   * Body param
   */
  step_id?: string;
}

export interface EventGetEventDetailsParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Unique identifier of the run.
   */
  run_id: string;
}

export declare namespace Events {
  export {
    type EventData as EventData,
    type EventResponse as EventResponse,
    type EventType as EventType,
    type EventDataDefaultFlatPagination as EventDataDefaultFlatPagination,
    type EventListParams as EventListParams,
    type EventLogParams as EventLogParams,
    type EventGetEventDetailsParams as EventGetEventDetailsParams,
  };
}
