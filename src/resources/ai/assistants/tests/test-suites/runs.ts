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
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
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
    params: RunTriggerParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RunTriggerResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params ?? {};
    return this._client.post(path`/ai/assistants/tests/test-suites/${suiteName}/runs`, {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
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
   * Body param: Optional assistant version ID to use for all test runs in this
   * suite. If provided, the version must exist or a 400 error will be returned. If
   * not provided, test will run on main version
   */
  destination_version_id?: string;

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;
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
