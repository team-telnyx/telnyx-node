// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Plan extends APIResource {
  /**
   * Returns the plan for the specified run, including all plan steps and their
   * statuses, so you can see how the mission was decomposed and how far execution
   * has progressed.
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
   * Creates the initial plan for the specified run from the provided steps and
   * returns the created plan steps. Progress is subsequently reported by updating
   * individual steps.
   *
   * @example
   * ```ts
   * const planStepsCreatedResponse =
   *   await client.ai.missions.runs.plan.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       steps: [
   *         {
   *           step_id: 'Step Id',
   *           description: 'Description',
   *           sequence: 0,
   *           parent_step_id: 'Parent Step Id',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(
    runID: string,
    params: PlanCreateParams,
    options?: RequestOptions,
  ): APIPromise<PlanStepsCreatedResponse> {
    const { mission_id, ...body } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/plan`, { body, ...options });
  }

  /**
   * Updates the status of a single plan step and returns the updated step. Typically
   * called by the executing agent as it works through the plan.
   *
   * @example
   * ```ts
   * const planStepResponse =
   *   await client.ai.missions.runs.plan.updateStep('step_id', {
   *     mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     run_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     status: 'pending',
   *   });
   * ```
   */
  updateStep(
    stepID: string,
    params: PlanUpdateStepParams,
    options?: RequestOptions,
  ): APIPromise<PlanStepResponse> {
    const { mission_id, run_id, ...body } = params;
    return this._client.patch(path`/ai/missions/${mission_id}/runs/${run_id}/plan/steps/${stepID}`, {
      body,
      ...options,
    });
  }

  /**
   * Add one or more steps to an existing plan
   *
   * @example
   * ```ts
   * const planStepsCreatedResponse =
   *   await client.ai.missions.runs.plan.addStepsToPlan(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       mission_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       steps: [
   *         {
   *           step_id: 'Step Id',
   *           description: 'Description',
   *           sequence: 0,
   *           parent_step_id: 'Parent Step Id',
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
  ): APIPromise<PlanStepsCreatedResponse> {
    const { mission_id, ...body } = params;
    return this._client.post(path`/ai/missions/${mission_id}/runs/${runID}/plan/steps`, { body, ...options });
  }

  /**
   * Returns the details of a single plan step within a run's plan, including its
   * status.
   *
   * @example
   * ```ts
   * const planStepResponse =
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
  ): APIPromise<PlanStepResponse> {
    const { mission_id, run_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/runs/${run_id}/plan/steps/${stepID}`, options);
  }
}

export interface CreatePlanStepRequest {
  description: string;

  sequence: number;

  step_id: string;

  metadata?: { [key: string]: unknown };

  parent_step_id?: string;
}

export interface PlanStepData {
  description: string;

  run_id: string;

  sequence: number;

  status: StepStatus;

  step_id: string;

  completed_at?: string;

  metadata?: { [key: string]: unknown };

  parent_step_id?: string;

  started_at?: string;
}

export interface PlanStepResponse {
  data: PlanStepData;
}

export interface PlanStepsCreatedResponse {
  data: Array<PlanStepData>;
}

export type StepStatus = 'pending' | 'in_progress' | 'completed' | 'skipped' | 'failed';

export interface PlanRetrieveResponse {
  data: Array<PlanStepData>;
}

export interface PlanRetrieveParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface PlanCreateParams {
  /**
   * Path param: Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Body param
   */
  steps: Array<CreatePlanStepRequest>;
}

export interface PlanUpdateStepParams {
  /**
   * Path param: Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Path param: Unique identifier of the run.
   */
  run_id: string;

  /**
   * Body param
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param
   */
  status?: StepStatus;
}

export interface PlanAddStepsToPlanParams {
  /**
   * Path param: Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Body param
   */
  steps: Array<CreatePlanStepRequest>;
}

export interface PlanGetStepDetailsParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;

  /**
   * Unique identifier of the run.
   */
  run_id: string;
}

export declare namespace Plan {
  export {
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
}
