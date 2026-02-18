// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Plan extends APIResource {
  /**
   * Create the initial plan for a run
   *
   * @example
   * ```ts
   * const plan = await client.ai.missions.runs.plan.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     steps: [
   *       {
   *         description: 'description',
   *         sequence: 0,
   *         step_id: 'step_id',
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  create(runID: string, params: PlanCreateParams, options?: RequestOptions): APIPromise<PlanCreateResponse> {
    const { mission_id, ...body } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/plan`, { body, ...options });
  }

  /**
   * Get the plan (all steps) for a run
   *
   * @example
   * ```ts
   * const plan = await client.ai.missions.runs.plan.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  retrieve(
    runID: string,
    params: PlanRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PlanRetrieveResponse> {
    const { mission_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${runID}/plan`, options);
  }

  /**
   * Add one or more steps to an existing plan
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.runs.plan.addStepsToPlan(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       steps: [
   *         {
   *           description: 'description',
   *           sequence: 0,
   *           step_id: 'step_id',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  addStepsToPlan(
    runID: string,
    params: PlanAddStepsToPlanParams,
    options?: RequestOptions,
  ): APIPromise<PlanAddStepsToPlanResponse> {
    const { mission_id, ...body } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/plan/steps`, { body, ...options });
  }

  /**
   * Get details of a specific plan step
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.runs.plan.getStepDetails(
   *     'step_id',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  getStepDetails(
    stepID: string,
    params: PlanGetStepDetailsParams,
    options?: RequestOptions,
  ): APIPromise<PlanGetStepDetailsResponse> {
    const { mission_id, run_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${run_id}/plan/steps/${stepID}`, options);
  }

  /**
   * Update the status of a plan step
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.runs.plan.updateStep('step_id', {
   *     mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   });
   * ```
   */
  updateStep(
    stepID: string,
    params: PlanUpdateStepParams,
    options?: RequestOptions,
  ): APIPromise<PlanUpdateStepResponse> {
    const { mission_id, run_id, ...body } = params;
    return this._client.patch(path`/ai/missions/${mission_id}/runs/${run_id}/plan/steps/${stepID}`, {
      body,
      ...options,
    });
  }
}

export interface PlanCreateResponse {
  data: Array<PlanCreateResponse.Data>;
}

export namespace PlanCreateResponse {
  export interface Data {
    description: string;

    run_id: string;

    sequence: number;

    status: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';

    step_id: string;

    completed_at?: string;

    metadata?: { [key: string]: unknown };

    parent_step_id?: string;

    started_at?: string;
  }
}

export interface PlanRetrieveResponse {
  data: Array<PlanRetrieveResponse.Data>;
}

export namespace PlanRetrieveResponse {
  export interface Data {
    description: string;

    run_id: string;

    sequence: number;

    status: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';

    step_id: string;

    completed_at?: string;

    metadata?: { [key: string]: unknown };

    parent_step_id?: string;

    started_at?: string;
  }
}

export interface PlanAddStepsToPlanResponse {
  data: Array<PlanAddStepsToPlanResponse.Data>;
}

export namespace PlanAddStepsToPlanResponse {
  export interface Data {
    description: string;

    run_id: string;

    sequence: number;

    status: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';

    step_id: string;

    completed_at?: string;

    metadata?: { [key: string]: unknown };

    parent_step_id?: string;

    started_at?: string;
  }
}

export interface PlanGetStepDetailsResponse {
  data: PlanGetStepDetailsResponse.Data;
}

export namespace PlanGetStepDetailsResponse {
  export interface Data {
    description: string;

    run_id: string;

    sequence: number;

    status: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';

    step_id: string;

    completed_at?: string;

    metadata?: { [key: string]: unknown };

    parent_step_id?: string;

    started_at?: string;
  }
}

export interface PlanUpdateStepResponse {
  data: PlanUpdateStepResponse.Data;
}

export namespace PlanUpdateStepResponse {
  export interface Data {
    description: string;

    run_id: string;

    sequence: number;

    status: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';

    step_id: string;

    completed_at?: string;

    metadata?: { [key: string]: unknown };

    parent_step_id?: string;

    started_at?: string;
  }
}

export interface PlanCreateParams {
  /**
   * Path param
   */
  mission_id: string;

  /**
   * Body param
   */
  steps: Array<PlanCreateParams.Step>;
}

export namespace PlanCreateParams {
  export interface Step {
    description: string;

    sequence: number;

    step_id: string;

    metadata?: { [key: string]: unknown };

    parent_step_id?: string;
  }
}

export interface PlanRetrieveParams {
  mission_id: string;
}

export interface PlanAddStepsToPlanParams {
  /**
   * Path param
   */
  mission_id: string;

  /**
   * Body param
   */
  steps: Array<PlanAddStepsToPlanParams.Step>;
}

export namespace PlanAddStepsToPlanParams {
  export interface Step {
    description: string;

    sequence: number;

    step_id: string;

    metadata?: { [key: string]: unknown };

    parent_step_id?: string;
  }
}

export interface PlanGetStepDetailsParams {
  mission_id: string;

  run_id: string;
}

export interface PlanUpdateStepParams {
  /**
   * Path param
   */
  mission_id: string;

  /**
   * Path param
   */
  run_id: string;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  status?: 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';
}

export declare namespace Plan {
  export {
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
}
