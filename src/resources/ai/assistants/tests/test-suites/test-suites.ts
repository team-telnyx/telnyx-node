// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as RunsAPI from './runs';
import {
  Meta,
  PaginatedTestRunList,
  RunListParams,
  RunTriggerParams,
  RunTriggerResponse,
  Runs,
} from './runs';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class TestSuites extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Retrieves a list of all distinct test suite names available to the current user
   *
   * @example
   * ```ts
   * const testSuites =
   *   await client.ai.assistants.tests.testSuites.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<TestSuiteListResponse> {
    return this._client.get('/ai/assistants/tests/test-suites', options);
  }
}

/**
 * Response containing all available test suite names.
 *
 * Returns a list of distinct test suite names that can be used for filtering and
 * organizing tests.
 */
export interface TestSuiteListResponse {
  /**
   * Array of unique test suite names available to the user.
   */
  data: Array<string>;
}

TestSuites.Runs = Runs;

export declare namespace TestSuites {
  export { type TestSuiteListResponse as TestSuiteListResponse };

  export {
    Runs as Runs,
    type Meta as Meta,
    type PaginatedTestRunList as PaginatedTestRunList,
    type RunTriggerResponse as RunTriggerResponse,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };
}
