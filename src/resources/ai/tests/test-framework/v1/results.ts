// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Test agents, evaluator scenarios, metrics, and run results for the AI test framework.
 */
export class Results extends APIResource {
  /**
   * Returns a paginated list of test run batches in your organization, optionally
   * filtered by test agent, search text, or scenarios.
   *
   * @example
   * ```ts
   * const results =
   *   await client.ai.tests.testFramework.v1.results.list();
   * ```
   */
  list(
    query: ResultListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ResultListResponse> {
    return this._client.get('/ai/tests/test_framework/v1/results', { query, ...options });
  }

  /**
   * Deletes the specified test run batch.
   *
   * @example
   * ```ts
   * const result =
   *   await client.ai.tests.testFramework.v1.results.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/tests/test_framework/v1/results/${id}`, options);
  }

  /**
   * Returns the specified test run batch, optionally with per-run detail.
   *
   * @example
   * ```ts
   * const testRunResult =
   *   await client.ai.tests.testFramework.v1.results.retrieve(
   *     0,
   *   );
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<TestRunResult> {
    return this._client.get(path`/ai/tests/test_framework/v1/results/${id}`, options);
  }

  /**
   * Re-executes the scenarios of the specified test run batch and creates a new run
   * batch.
   *
   * @example
   * ```ts
   * const testRunResult =
   *   await client.ai.tests.testFramework.v1.results.rerun(0);
   * ```
   */
  rerun(id: number, options?: RequestOptions): APIPromise<TestRunResult> {
    return this._client.post(path`/ai/tests/test_framework/v1/results/${id}/rerun`, options);
  }
}

export interface TestRunResult {
  id: number;

  agent: number;

  created_at: string;

  name: string;

  /**
   * Run batch status: running, completed, failed, pending, in_progress, evaluating,
   * in_queue, timeout, cancelled, or scaling_up.
   */
  status: string;

  updated_at: string;

  agent_inbound?: boolean;

  agent_name?: string;

  completed_runs_count?: number | string;

  failed_runs_count?: number | string;

  /**
   * Whether this batch was started by a scheduled job.
   */
  is_cronjob?: boolean;

  met_expected_outcome_count?: number | string;

  /**
   * Whether the batch ran as text chat rather than voice calls.
   */
  run_as_text?: boolean;

  run_type?: string | null;

  /**
   * Per-run detail keyed by run ID.
   */
  runs?: { [key: string]: TestRunResult.Runs } | null;

  scenarios?: Array<TestRunResult.Scenario> | null;

  /**
   * Share of runs judged successful.
   */
  success_rate?: number | string;

  success_runs_count?: number | string;

  total_expected_outcome_count?: number | string;

  total_runs_count?: number | string;
}

export namespace TestRunResult {
  export interface Runs {
    id?: number;

    duration?: string;

    error_message?: string;

    evaluation_status?: string;

    executed_at?: string;

    personality_name?: string;

    scenario?: Runs.Scenario;

    scenario_name?: string;

    status?: string;

    success?: boolean | null;

    test_profile_name?: string;

    timestamp?: string;
  }

  export namespace Runs {
    export interface Scenario {
      id?: number;

      expected_outcome_prompt?: string;

      name?: string;

      personality_name?: string;
    }
  }

  export interface Scenario {
    id?: number;

    name?: string;
  }
}

export interface ResultListResponse {
  next: string | null;

  previous: string | null;

  results: Array<ResultListResponse.Result>;

  count?: number;
}

export namespace ResultListResponse {
  export interface Result {
    id: number;

    agent: number;

    created_at: string;

    name: string;

    /**
     * Run batch status: running, completed, failed, pending, in_progress, evaluating,
     * in_queue, timeout, cancelled, or scaling_up.
     */
    status: string;

    updated_at: string;

    agent_inbound?: boolean;

    agent_name?: string;

    completed_runs_count?: number | string;

    failed_runs_count?: number | string;

    /**
     * Whether this batch was started by a scheduled job.
     */
    is_cronjob?: boolean;

    met_expected_outcome_count?: number | string;

    /**
     * Whether the batch ran as text chat rather than voice calls.
     */
    run_as_text?: boolean;

    run_type?: string | null;

    /**
     * Run summaries in this batch. Retrieve the batch for detail keyed by run ID.
     */
    runs?: Array<Result.Run> | null;

    scenarios?: Array<Result.Scenario> | null;

    /**
     * Share of runs judged successful.
     */
    success_rate?: number | string;

    success_runs_count?: number | string;

    total_expected_outcome_count?: number | string;

    total_runs_count?: number | string;
  }

  export namespace Result {
    export interface Run {
      id?: number;

      inbound_number?: string | null;

      number?: string | null;

      scenario?: number;

      scenario_name?: string;

      status?: string;
    }

    export interface Scenario {
      id?: number;

      name?: string;
    }
  }
}

export type ResultDeleteResponse = unknown;

export interface ResultListParams {
  /**
   * Filter results belonging to the specified test agent.
   */
  agent_id?: number;

  /**
   * Page number (1-based).
   */
  page?: number;

  /**
   * Number of results per page.
   */
  page_size?: number;

  /**
   * Filter results by a comma-separated list of scenario IDs.
   */
  scenarios?: string;

  /**
   * Filter results by a search string.
   */
  search?: string;
}

export declare namespace Results {
  export {
    type TestRunResult as TestRunResult,
    type ResultListResponse as ResultListResponse,
    type ResultDeleteResponse as ResultDeleteResponse,
    type ResultListParams as ResultListParams,
  };
}
