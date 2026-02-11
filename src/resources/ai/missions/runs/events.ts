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
   * for await (const eventListResponse of client.ai.missions.runs.events.list(
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
  ): PagePromise<EventListResponsesDefaultFlatPagination, EventListResponse> {
    const { mission_id, ...query } = params;
    return this._client.getAPIList(
      path`/ai/missions/${mission_id}/runs/${runID}/events`,
      DefaultFlatPagination<EventListResponse>,
      { query, ...options },
    );
  }

  /**
   * Get details of a specific event
   *
   * @example
   * ```ts
   * const response =
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
  ): APIPromise<EventGetEventDetailsResponse> {
    const { mission_id, run_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${run_id}/events/${eventID}`, options);
  }

  /**
   * Log an event for a run
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.runs.events.log(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     summary: 'summary',
   *     type: 'status_change',
   *   },
   * );
   * ```
   */
  log(runID: string, params: EventLogParams, options?: RequestOptions): APIPromise<EventLogResponse> {
    const { mission_id, ...body } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/events`, { body, ...options });
  }
}

export type EventListResponsesDefaultFlatPagination = DefaultFlatPagination<EventListResponse>;

export interface EventListResponse {
  event_id: string;

  run_id: string;

  summary: string;

  timestamp: string;

  type:
    | 'status_change'
    | 'step_started'
    | 'step_completed'
    | 'step_failed'
    | 'tool_call'
    | 'tool_result'
    | 'message'
    | 'error'
    | 'custom';

  agent_id?: string;

  idempotency_key?: string;

  payload?: { [key: string]: unknown };

  step_id?: string;
}

export interface EventGetEventDetailsResponse {
  data: EventGetEventDetailsResponse.Data;
}

export namespace EventGetEventDetailsResponse {
  export interface Data {
    event_id: string;

    run_id: string;

    summary: string;

    timestamp: string;

    type:
      | 'status_change'
      | 'step_started'
      | 'step_completed'
      | 'step_failed'
      | 'tool_call'
      | 'tool_result'
      | 'message'
      | 'error'
      | 'custom';

    agent_id?: string;

    idempotency_key?: string;

    payload?: { [key: string]: unknown };

    step_id?: string;
  }
}

export interface EventLogResponse {
  data: EventLogResponse.Data;
}

export namespace EventLogResponse {
  export interface Data {
    event_id: string;

    run_id: string;

    summary: string;

    timestamp: string;

    type:
      | 'status_change'
      | 'step_started'
      | 'step_completed'
      | 'step_failed'
      | 'tool_call'
      | 'tool_result'
      | 'message'
      | 'error'
      | 'custom';

    agent_id?: string;

    idempotency_key?: string;

    payload?: { [key: string]: unknown };

    step_id?: string;
  }
}

export interface EventListParams extends DefaultFlatPaginationParams {
  /**
   * Path param
   */
  mission_id: string;

  /**
   * Query param
   */
  agent_id?: string;

  /**
   * Query param
   */
  step_id?: string;

  /**
   * Query param
   */
  type?: string;
}

export interface EventGetEventDetailsParams {
  mission_id: string;

  run_id: string;
}

export interface EventLogParams {
  /**
   * Path param
   */
  mission_id: string;

  /**
   * Body param
   */
  summary: string;

  /**
   * Body param
   */
  type:
    | 'status_change'
    | 'step_started'
    | 'step_completed'
    | 'step_failed'
    | 'tool_call'
    | 'tool_result'
    | 'message'
    | 'error'
    | 'custom';

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

export declare namespace Events {
  export {
    type EventListResponse as EventListResponse,
    type EventGetEventDetailsResponse as EventGetEventDetailsResponse,
    type EventLogResponse as EventLogResponse,
    type EventListResponsesDefaultFlatPagination as EventListResponsesDefaultFlatPagination,
    type EventListParams as EventListParams,
    type EventGetEventDetailsParams as EventGetEventDetailsParams,
    type EventLogParams as EventLogParams,
  };
}
