// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as RunsAPI from './runs';
import {
  RunListParams,
  RunRetrieveParams,
  RunTriggerParams,
  Runs,
  TestRunResponse,
  TestStatus,
} from './runs';
import * as TestSuitesRunsAPI from './test-suites/runs';
import * as TestSuitesAPI from './test-suites/test-suites';
import { TestSuiteListResponse, TestSuites } from './test-suites/test-suites';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tests extends APIResource {
  testSuites: TestSuitesAPI.TestSuites = new TestSuitesAPI.TestSuites(this._client);
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);

  /**
   * Creates a comprehensive test configuration for evaluating AI assistant
   * performance
   *
   * @example
   * ```ts
   * const assistantTest =
   *   await client.ai.assistants.tests.create({
   *     destination: 'x',
   *     instructions: 'x',
   *     name: 'x',
   *     rubric: [{ criteria: 'criteria', name: 'name' }],
   *   });
   * ```
   */
  create(body: TestCreateParams, options?: RequestOptions): APIPromise<AssistantTest> {
    return this._client.post('/ai/assistants/tests', { body, ...options });
  }

  /**
   * Retrieves detailed information about a specific assistant test
   *
   * @example
   * ```ts
   * const assistantTest =
   *   await client.ai.assistants.tests.retrieve('test_id');
   * ```
   */
  retrieve(testID: string, options?: RequestOptions): APIPromise<AssistantTest> {
    return this._client.get(path`/ai/assistants/tests/${testID}`, options);
  }

  /**
   * Updates an existing assistant test configuration with new settings
   *
   * @example
   * ```ts
   * const assistantTest =
   *   await client.ai.assistants.tests.update('test_id');
   * ```
   */
  update(testID: string, body: TestUpdateParams, options?: RequestOptions): APIPromise<AssistantTest> {
    return this._client.put(path`/ai/assistants/tests/${testID}`, { body, ...options });
  }

  /**
   * Retrieves a paginated list of assistant tests with optional filtering
   * capabilities
   *
   * @example
   * ```ts
   * const tests = await client.ai.assistants.tests.list();
   * ```
   */
  list(
    query: TestListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TestListResponse> {
    return this._client.get('/ai/assistants/tests', { query, ...options });
  }

  /**
   * Permanently removes an assistant test and all associated data
   *
   * @example
   * ```ts
   * const test = await client.ai.assistants.tests.delete(
   *   'test_id',
   * );
   * ```
   */
  delete(testID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/assistants/tests/${testID}`, options);
  }
}

/**
 * Response model containing complete assistant test information.
 *
 * Returns all test configuration details including evaluation criteria,
 * scheduling, and metadata. Used when retrieving individual tests or after
 * creating/updating tests.
 */
export interface AssistantTest {
  /**
   * Timestamp when the test was created.
   */
  created_at: string;

  /**
   * Human-readable name of the test.
   */
  name: string;

  /**
   * Evaluation criteria used to assess test performance.
   */
  rubric: Array<AssistantTest.Rubric>;

  /**
   * Communication channel used for test execution.
   */
  telnyx_conversation_channel: TelnyxConversationChannel;

  /**
   * Unique identifier for the assistant test.
   */
  test_id: string;

  /**
   * Detailed description of the test's purpose and scope.
   */
  description?: string;

  /**
   * Target destination for test conversations.
   */
  destination?: string;

  /**
   * Detailed test scenario instructions and objectives.
   */
  instructions?: string;

  /**
   * Maximum allowed duration for test execution in seconds.
   */
  max_duration_seconds?: number;

  /**
   * Test suite grouping for organizational purposes.
   */
  test_suite?: string;
}

export namespace AssistantTest {
  export interface Rubric {
    /**
     * Specific guidance on how to assess the assistant’s performance for this rubric
     * item.
     */
    criteria: string;

    /**
     * Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.
     */
    name: string;
  }
}

export type TelnyxConversationChannel = 'phone_call' | 'web_call' | 'sms_chat' | 'web_chat';

/**
 * Paginated list of assistant tests with metadata.
 *
 * Returns a subset of tests based on pagination parameters along with metadata for
 * implementing pagination controls in the UI.
 */
export interface TestListResponse {
  /**
   * Array of assistant test objects for the current page.
   */
  data: Array<AssistantTest>;

  /**
   * Pagination metadata including total counts and current page info.
   */
  meta: TestSuitesRunsAPI.Meta;
}

export type TestDeleteResponse = unknown;

export interface TestCreateParams {
  /**
   * The target destination for the test conversation. Format depends on the channel:
   * phone number for SMS/voice, webhook URL for web chat, etc.
   */
  destination: string;

  /**
   * Detailed instructions that define the test scenario and what the assistant
   * should accomplish. This guides the test execution and evaluation.
   */
  instructions: string;

  /**
   * A descriptive name for the assistant test. This will be used to identify the
   * test in the UI and reports.
   */
  name: string;

  /**
   * Evaluation criteria used to assess the assistant's performance. Each rubric item
   * contains a name and specific criteria for evaluation.
   */
  rubric: Array<TestCreateParams.Rubric>;

  /**
   * Optional detailed description of what this test evaluates and its purpose. Helps
   * team members understand the test's objectives.
   */
  description?: string;

  /**
   * Maximum duration in seconds that the test conversation should run before timing
   * out. If not specified, uses system default timeout.
   */
  max_duration_seconds?: number;

  /**
   * The communication channel through which the test will be conducted. Determines
   * how the assistant will receive and respond to test messages.
   */
  telnyx_conversation_channel?: TelnyxConversationChannel;

  /**
   * Optional test suite name to group related tests together. Useful for organizing
   * tests by feature, team, or release cycle.
   */
  test_suite?: string;
}

export namespace TestCreateParams {
  export interface Rubric {
    /**
     * Specific guidance on how to assess the assistant’s performance for this rubric
     * item.
     */
    criteria: string;

    /**
     * Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.
     */
    name: string;
  }
}

export interface TestUpdateParams {
  /**
   * Updated description of the test's purpose and evaluation criteria.
   */
  description?: string;

  /**
   * Updated target destination for test conversations.
   */
  destination?: string;

  /**
   * Updated test scenario instructions and objectives.
   */
  instructions?: string;

  /**
   * Updated maximum test duration in seconds.
   */
  max_duration_seconds?: number;

  /**
   * Updated name for the assistant test. Must be unique and descriptive.
   */
  name?: string;

  /**
   * Updated evaluation criteria for assessing assistant performance.
   */
  rubric?: Array<TestUpdateParams.Rubric>;

  /**
   * Updated communication channel for the test execution.
   */
  telnyx_conversation_channel?: TelnyxConversationChannel;

  /**
   * Updated test suite assignment for better organization.
   */
  test_suite?: string;
}

export namespace TestUpdateParams {
  export interface Rubric {
    /**
     * Specific guidance on how to assess the assistant’s performance for this rubric
     * item.
     */
    criteria: string;

    /**
     * Label for the evaluation criterion, e.g., Empathy, Accuracy, Clarity.
     */
    name: string;
  }
}

export interface TestListParams {
  /**
   * Filter tests by destination (phone number, webhook URL, etc.)
   */
  destination?: string;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: TestListParams.Page;

  /**
   * Filter tests by communication channel (e.g., 'web_chat', 'sms')
   */
  telnyx_conversation_channel?: string;

  /**
   * Filter tests by test suite name
   */
  test_suite?: string;
}

export namespace TestListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * Page number to retrieve (1-based indexing)
     */
    number?: number;

    /**
     * Number of tests to return per page (1-100)
     */
    size?: number;
  }
}

Tests.TestSuites = TestSuites;
Tests.Runs = Runs;

export declare namespace Tests {
  export {
    type AssistantTest as AssistantTest,
    type TelnyxConversationChannel as TelnyxConversationChannel,
    type TestListResponse as TestListResponse,
    type TestDeleteResponse as TestDeleteResponse,
    type TestCreateParams as TestCreateParams,
    type TestUpdateParams as TestUpdateParams,
    type TestListParams as TestListParams,
  };

  export { TestSuites as TestSuites, type TestSuiteListResponse as TestSuiteListResponse };

  export {
    Runs as Runs,
    type TestRunResponse as TestRunResponse,
    type TestStatus as TestStatus,
    type RunRetrieveParams as RunRetrieveParams,
    type RunListParams as RunListParams,
    type RunTriggerParams as RunTriggerParams,
  };
}
