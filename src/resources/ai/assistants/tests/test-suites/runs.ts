// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as RunsAPI from '../runs';
import { TestRunResponsesDefaultFlatPagination } from '../runs';
import { APIPromise } from '../../../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Runs extends APIResource {
  /**
   * Retrieves paginated history of test runs for a specific test suite with
   * filtering options
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const testRunResponse of client.ai.assistants.tests.testSuites.runs.list(
   *   'suite_name',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    suiteName: string,
    query: RunListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TestRunResponsesDefaultFlatPagination, RunsAPI.TestRunResponse> {
    return this._client.getAPIList(
      path`/ai/assistants/tests/test-suites/${suiteName}/runs`,
      DefaultFlatPagination<RunsAPI.TestRunResponse>,
      { query, ...options },
    );
  }

  /**
   * Executes all tests within a specific test suite as a batch operation
   *
   * @example
   * ```ts
   * const testRunResponses =
   *   await client.ai.assistants.tests.testSuites.runs.trigger(
   *     'suite_name',
   *   );
   * ```
   */
  trigger(
    suiteName: string,
    body: RunTriggerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunTriggerResponse> {
    return this._client.post(path`/ai/assistants/tests/test-suites/${suiteName}/runs`, { body, ...options });
  }
}

export interface Meta {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

/**
 * Paginated list of test runs with metadata.
 *
 * Returns test run execution results with pagination support for handling large
 * numbers of test executions.
 */
export interface PaginatedTestRunList {
  /**
   * Array of test run objects for the current page.
   */
  data: Array<RunsAPI.TestRunResponse>;

  /**
   * Pagination metadata including total counts and current page info.
   */
  meta: Meta;
}

export type RunTriggerResponse = Array<RunsAPI.TestRunResponse>;

export interface RunListParams extends DefaultFlatPaginationParams {
  /**
   * Filter runs by execution status (pending, running, completed, failed, timeout)
   */
  status?: string;

  /**
   * Filter runs by specific suite execution batch ID
   */
  test_suite_run_id?: string;
}

export interface RunTriggerParams {
  /**
   * Optional assistant version ID to use for all test runs in this suite. If
   * provided, the version must exist or a 400 error will be returned. If not
   * provided, test will run on main version
   */
  destination_version_id?: string;
}

export declare namespace Runs {
  export {
    type Meta as Meta,
    type PaginatedTestRunList as PaginatedTestRunList,
    type RunTriggerResponse as RunTriggerResponse,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };
}

export { type TestRunResponsesDefaultFlatPagination };
