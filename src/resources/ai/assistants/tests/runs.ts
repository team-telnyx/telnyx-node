// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RunsAPI from './runs';
import { APIPromise } from '../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Retrieves detailed information about a specific test run execution
   *
   * @example
   * ```ts
   * const testRunResponse =
   *   await client.ai.assistants.tests.runs.retrieve('run_id', {
   *     test_id: 'test_id',
   *   });
   * ```
   */
  retrieve(runID: string, params: RunRetrieveParams, options?: RequestOptions): APIPromise<TestRunResponse> {
    const { test_id } = params;
    return this._client.get(path`/ai/assistants/tests/${test_id}/runs/${runID}`, options);
  }

  /**
   * Retrieves paginated execution history for a specific assistant test with
   * filtering options
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const testRunResponse of client.ai.assistants.tests.runs.list(
   *   'test_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    testID: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TestRunResponsesDefaultFlatPagination, TestRunResponse> {
    return this._client.getAPIList(
      path`/ai/assistants/tests/${testID}/runs`,
      DefaultFlatPagination<TestRunResponse>,
      { query, ...options },
    );
  }

  /**
   * Initiates immediate execution of a specific assistant test
   *
   * @example
   * ```ts
   * const testRunResponse =
   *   await client.ai.assistants.tests.runs.trigger('test_id');
   * ```
   */
  trigger(
    testID: string,
    body: RunTriggerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TestRunResponse> {
    return this._client.post(path`/ai/assistants/tests/${testID}/runs`, { body, ...options });
  }
}

export type TestRunResponsesDefaultFlatPagination = DefaultFlatPagination<TestRunResponse>;

/**
 * Response model containing test run execution details and results.
 *
 * Provides comprehensive information about a test execution including status,
 * timing, logs, and detailed evaluation results.
 */
export interface TestRunResponse {
  /**
   * Timestamp when the test run was created and queued.
   */
  created_at: string;

  /**
   * Unique identifier for this specific test run execution.
   */
  run_id: string;

  /**
   * Represents the lifecycle of a test:
   *
   * - 'pending': Test is waiting to be executed.
   * - 'starting': Test execution is initializing.
   * - 'running': Test is currently executing.
   * - 'passed': Test completed successfully.
   * - 'failed': Test executed but did not pass.
   * - 'error': An error occurred during test execution.
   */
  status: TestStatus;

  /**
   * Identifier of the assistant test that was executed.
   */
  test_id: string;

  /**
   * How this test run was initiated (manual, scheduled, or API).
   */
  triggered_by: string;

  /**
   * Timestamp when the test run finished execution.
   */
  completed_at?: string;

  /**
   * Identifier of the conversation created during test execution.
   */
  conversation_id?: string;

  /**
   * Identifier for conversation analysis and insights data.
   */
  conversation_insights_id?: string;

  /**
   * Detailed evaluation results for each rubric criteria. Name is name of the
   * criteria from the rubric and status is the result of the evaluation. This list
   * will have a result for every criteria in the rubric section.
   */
  detail_status?: Array<TestRunResponse.DetailStatus>;

  /**
   * Detailed execution logs and debug information.
   */
  logs?: string;

  /**
   * Identifier linking this run to a test suite execution batch.
   */
  test_suite_run_id?: string;

  /**
   * Timestamp of the last update to this test run.
   */
  updated_at?: string;
}

export namespace TestRunResponse {
  export interface DetailStatus {
    name: string;

    /**
     * Represents the lifecycle of a test:
     *
     * - 'pending': Test is waiting to be executed.
     * - 'starting': Test execution is initializing.
     * - 'running': Test is currently executing.
     * - 'passed': Test completed successfully.
     * - 'failed': Test executed but did not pass.
     * - 'error': An error occurred during test execution.
     */
    status: RunsAPI.TestStatus;
  }
}

/**
 * Represents the lifecycle of a test:
 *
 * - 'pending': Test is waiting to be executed.
 * - 'starting': Test execution is initializing.
 * - 'running': Test is currently executing.
 * - 'passed': Test completed successfully.
 * - 'failed': Test executed but did not pass.
 * - 'error': An error occurred during test execution.
 */
export type TestStatus = 'pending' | 'starting' | 'running' | 'passed' | 'failed' | 'error';

export interface RunRetrieveParams {
  test_id: string;
}

export interface RunListParams extends DefaultFlatPaginationParams {
  /**
   * Filter runs by execution status (pending, running, completed, failed, timeout)
   */
  status?: string;
}

export interface RunTriggerParams {
  /**
   * Optional assistant version ID to use for this test run. If provided, the version
   * must exist or a 400 error will be returned. If not provided, test will run on
   * main version
   */
  destination_version_id?: string;
}

export declare namespace Runs {
  export {
    type TestRunResponse as TestRunResponse,
    type TestStatus as TestStatus,
    type TestRunResponsesDefaultFlatPagination as TestRunResponsesDefaultFlatPagination,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };
}
