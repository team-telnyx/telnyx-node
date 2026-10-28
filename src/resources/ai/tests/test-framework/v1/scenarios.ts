// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as MetricsAPI from './metrics';
import { APIPromise } from '../../../../../core/api-promise';
import { buildHeaders } from '../../../../../internal/headers';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Test agents, evaluator scenarios, metrics, and run results for the AI test framework.
 */
export class Scenarios extends APIResource {
  /**
   * Returns a paginated list of evaluator scenarios in your organization, optionally
   * filtered by test agent or tags.
   *
   * @example
   * ```ts
   * const scenarios =
   *   await client.ai.tests.testFramework.v1.scenarios.list();
   * ```
   */
  list(
    query: ScenarioListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScenarioListResponse> {
    return this._client.get('/ai/tests/test_framework/v1/scenarios', { query, ...options });
  }

  /**
   * Creates an evaluator scenario in your organization.
   *
   * @example
   * ```ts
   * const evaluatorScenarioDetail =
   *   await client.ai.tests.testFramework.v1.scenarios.create({
   *     name: 'Refund escalation flow',
   *     personality: 4643,
   *     agent: 1259,
   *     expected_outcome_prompt:
   *       'The assistant explains the refund policy and offers escalation.',
   *     first_message: 'Hi, I want a refund.',
   *     instructions:
   *       'Call the support line and demand a refund for a damaged product.',
   *     metrics: [266881],
   *     tags: ['support'],
   *   });
   * ```
   */
  create(body: ScenarioCreateParams, options?: RequestOptions): APIPromise<EvaluatorScenarioDetail> {
    return this._client.post('/ai/tests/test_framework/v1/scenarios', { body, ...options });
  }

  /**
   * Exports the selected evaluator scenarios as a CSV or XLSX file download.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.tests.testFramework.v1.scenarios.retrieveExportScenarios(
   *     { export_type: 'csv', scenario_ids: 'scenario_ids' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  retrieveExportScenarios(
    query: ScenarioRetrieveExportScenariosParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get('/ai/tests/test_framework/v1/scenarios/export_scenarios', {
      query,
      ...options,
      headers: buildHeaders([
        { Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' },
        options?.headers,
      ]),
      __binaryResponse: true,
    });
  }

  /**
   * Starts background generation of evaluator scenarios for a test agent. Returns a
   * progress ID to poll with the generate-scenarios-progress endpoint.
   *
   * @example
   * ```ts
   * const scenarioGenerationResponse =
   *   await client.ai.tests.testFramework.v1.scenarios.generateBg(
   *     {
   *       num_scenarios: 5,
   *       agent_id: 1259,
   *       extra_instructions:
   *         'Focus on angry customers asking about refunds.',
   *       generate_expected_outcomes: true,
   *       scenario_type: 'workflow',
   *     },
   *   );
   * ```
   */
  generateBg(
    body: ScenarioGenerateBgParams,
    options?: RequestOptions,
  ): APIPromise<MetricsAPI.ScenarioGenerationResponse> {
    return this._client.post('/ai/tests/test_framework/v1/scenarios/generate-bg', { body, ...options });
  }

  /**
   * Returns the status of a background scenario-generation job started with the
   * generate-evaluator-scenarios endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.tests.testFramework.v1.scenarios.retrieveGenerateProgress(
   *     { progress_id: 'progress_id' },
   *   );
   * ```
   */
  retrieveGenerateProgress(
    query: ScenarioRetrieveGenerateProgressParams,
    options?: RequestOptions,
  ): APIPromise<ScenarioRetrieveGenerateProgressResponse> {
    return this._client.get('/ai/tests/test_framework/v1/scenarios/generate-progress', { query, ...options });
  }

  /**
   * Runs the selected evaluator scenarios against their test agents and creates a
   * run batch. Returns the ID of the created batch, whose results can be listed with
   * the test-run-results endpoints.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.tests.testFramework.v1.scenarios.runScenarios(
   *     {
   *       agent_id: 1259,
   *       concurrency_limit: 3,
   *       mode: 'same_number',
   *       scenarios: [9512],
   *       tags: ['regression'],
   *     },
   *   );
   * ```
   */
  runScenarios(
    body: ScenarioRunScenariosParams,
    options?: RequestOptions,
  ): APIPromise<ScenarioRunScenariosResponse> {
    return this._client.post('/ai/tests/test_framework/v1/scenarios/run_scenarios', { body, ...options });
  }

  /**
   * Starts an interactive session that improves selected evaluator scenarios from a
   * natural-language instruction. Returns a progress ID to poll with the
   * improve-scenarios-progress endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.tests.testFramework.v1.scenarios.scenarioAgent(
   *     {
   *       scenarios: 'all',
   *       user_message:
   *         'Make the callers ask about damaged packaging too.',
   *       agent_id: 1259,
   *       apply_changes: true,
   *     },
   *   );
   * ```
   */
  scenarioAgent(
    body: ScenarioScenarioAgentParams,
    options?: RequestOptions,
  ): APIPromise<ScenarioScenarioAgentResponse> {
    return this._client.post('/ai/tests/test_framework/v1/scenarios/scenario-agent', { body, ...options });
  }

  /**
   * Returns the status of an improve-scenarios session started with the
   * improve-evaluator-scenarios endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.tests.testFramework.v1.scenarios.retrieveScenarioAgentProgress(
   *     { progress_id: 'progress_id' },
   *   );
   * ```
   */
  retrieveScenarioAgentProgress(
    query: ScenarioRetrieveScenarioAgentProgressParams,
    options?: RequestOptions,
  ): APIPromise<ScenarioRetrieveScenarioAgentProgressResponse> {
    return this._client.get('/ai/tests/test_framework/v1/scenarios/scenario-agent-progress', {
      query,
      ...options,
    });
  }

  /**
   * Deletes the specified evaluator scenario.
   *
   * @example
   * ```ts
   * const scenario =
   *   await client.ai.tests.testFramework.v1.scenarios.delete(
   *     0,
   *   );
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/tests/test_framework/v1/scenarios/${id}`, options);
  }

  /**
   * Returns the specified evaluator scenario with full detail.
   *
   * @example
   * ```ts
   * const evaluatorScenarioDetail =
   *   await client.ai.tests.testFramework.v1.scenarios.retrieve(
   *     0,
   *   );
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<EvaluatorScenarioDetail> {
    return this._client.get(path`/ai/tests/test_framework/v1/scenarios/${id}`, options);
  }

  /**
   * Updates the specified evaluator scenario.
   *
   * @example
   * ```ts
   * const evaluatorScenarioDetail =
   *   await client.ai.tests.testFramework.v1.scenarios.update(
   *     0,
   *     {
   *       instructions:
   *         'Call the support line, demand a refund, and mention the damaged packaging.',
   *       metrics: [266881, 266882],
   *       name: 'Refund escalation flow - updated',
   *     },
   *   );
   * ```
   */
  update(
    id: number,
    body: ScenarioUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EvaluatorScenarioDetail> {
    return this._client.patch(path`/ai/tests/test_framework/v1/scenarios/${id}`, { body, ...options });
  }
}

export interface EvaluatorScenarioDetail {
  id: number;

  agent: number | null;

  name: string;

  dynamic_variable_values?: { [key: string]: string } | null;

  expected_outcome_prompt?: string;

  first_message?: string;

  folder_path?: string | null;

  inbound_phone_number?: number | null;

  inbound_phone_number_data?: EvaluatorScenarioDetail.InboundPhoneNumberData | null;

  information_fields?: { [key: string]: string } | null;

  instructions?: string;

  is_predefined?: boolean;

  max_duration?: number | null;

  metric_names?: Array<string>;

  metrics?: Array<number>;

  outbound_phone_number_data?: EvaluatorScenarioDetail.OutboundPhoneNumberData | null;

  personality?: number | null;

  personality_name?: string;

  phone_number?: string;

  project?: number | null;

  runs?: Array<number>;

  scenario_language?: string | null;

  scenario_type?: string;

  simulation_description?: string;

  suite_type?: string;

  tags?: Array<string>;

  test_profile?: number | null;

  test_profile_data?: EvaluatorScenarioDetail.TestProfileData | null;

  tool_ids?: Array<string>;
}

export namespace EvaluatorScenarioDetail {
  export interface InboundPhoneNumberData {
    id?: number;

    number?: string;

    phone_number_id?: string;
  }

  export interface OutboundPhoneNumberData {
    id?: number;

    number?: string;

    phone_number_id?: string;
  }

  export interface TestProfileData {
    id?: number;

    agent?: number | null;

    information?: { [key: string]: string } | null;

    name?: string;

    project?: number | null;
  }
}

export interface ScenarioListResponse {
  count: number;

  next: string | null;

  previous: string | null;

  results: Array<ScenarioListResponse.Result>;
}

export namespace ScenarioListResponse {
  export interface Result {
    id: number;

    /**
     * ID of the test agent the scenario runs against.
     */
    agent: number | null;

    created_at: string;

    name: string;

    updated_at: string;

    dynamic_variable_values?: { [key: string]: string } | null;

    /**
     * What a successful conversation looks like; scored by the expected-outcome
     * metric.
     */
    expected_outcome_prompt?: string;

    /**
     * First message the simulated caller speaks or sends.
     */
    first_message?: string;

    folder_path?: string | null;

    inbound_phone_number?: number | null;

    inbound_phone_number_data?: string | null;

    /**
     * What the simulated caller should do during the conversation.
     */
    instructions?: string;

    last_updated_by?: number | null;

    metric_names?: Array<string>;

    /**
     * Metric IDs applied to the scenario.
     */
    metrics?: Array<number>;

    /**
     * ID of the test personality the caller simulates.
     */
    personality?: number | null;

    personality_name?: string;

    /**
     * Outbound phone number used to place the simulated call.
     */
    phone_number?: string;

    scenario_language?: string | null;

    /**
     * Type of scenario: workflow, red_teaming_voice, or red_teaming_text.
     */
    scenario_type?: string;

    tags?: Array<string>;

    test_profile?: number | null;

    test_profile_data?: Result.TestProfileData | null;

    tool_ids?: Array<string>;
  }

  export namespace Result {
    export interface TestProfileData {
      id?: number;

      agent?: number | null;

      information?: { [key: string]: string } | null;

      name?: string;

      project?: number | null;
    }
  }
}

export type ScenarioDeleteResponse = unknown;

export interface ScenarioRetrieveGenerateProgressResponse {
  completed_scenarios?: number;

  failed_scenarios?: number;

  scenarios_list?: Array<{ [key: string]: unknown }>;

  total_scenarios?: number;
}

export interface ScenarioRetrieveScenarioAgentProgressResponse {
  error?: string | null;

  mode?: string;

  progress_id?: string;

  result?: ScenarioRetrieveScenarioAgentProgressResponse.Result | null;

  session_id?: number | null;

  status?: string;
}

export namespace ScenarioRetrieveScenarioAgentProgressResponse {
  export interface Result {
    cancelled?: boolean;

    clarification_questions?: Array<Result.ClarificationQuestion>;

    conversation_history?: Array<Result.ConversationHistory>;

    message?: string;

    needs_clarification?: boolean;

    session_id?: number;

    success?: boolean;

    updated_scenarios?: Array<{ [key: string]: unknown }>;
  }

  export namespace Result {
    export interface ClarificationQuestion {
      question?: string;
    }

    export interface ConversationHistory {
      content?: string;

      role?: string;

      timestamp?: string;
    }
  }
}

export interface ScenarioRunScenariosResponse {
  /**
   * ID of the created test-run batch whose results can be polled.
   */
  id: number;

  /**
   * Initial status of the run batch.
   */
  status: string;
}

export interface ScenarioScenarioAgentResponse {
  progress_id: string;

  session_id?: number | null;
}

export interface ScenarioListParams {
  /**
   * Filter scenarios belonging to the specified test agent.
   */
  agent_id?: number;

  /**
   * Filter scenarios belonging to the specified Telnyx assistant.
   */
  assistant_id?: string;

  /**
   * Page number (1-based).
   */
  page?: number;

  /**
   * Number of results per page.
   */
  page_size?: number;

  /**
   * Filter scenarios by a comma-separated list of tags.
   */
  tags?: string;
}

export interface ScenarioCreateParams {
  name: string;

  /**
   * ID of the personality the caller simulates.
   */
  personality: number;

  agent?: number | null;

  expected_outcome_prompt?: string;

  first_message?: string;

  folder_path?: string | null;

  instructions?: string;

  metrics?: Array<number>;

  tags?: Array<string>;

  test_profile?: number;
}

export interface ScenarioRetrieveExportScenariosParams {
  /**
   * File format of the export.
   */
  export_type: 'csv' | 'xlsx';

  /**
   * Comma-separated scenario IDs to export.
   */
  scenario_ids: string;

  /**
   * Export scenarios belonging to the specified test agent.
   */
  agent_id?: number;
}

export interface ScenarioGenerateBgParams {
  /**
   * How many scenarios to generate.
   */
  num_scenarios: number;

  agent_id?: number;

  /**
   * Optional guidance steering scenario generation.
   */
  extra_instructions?: string;

  first_message?: string;

  folder_path?: string | null;

  /**
   * Whether to generate expected-outcome prompts for the scenarios.
   */
  generate_expected_outcomes?: boolean;

  inbound_phone_number?: number | null;

  personalities?: Array<number>;

  /**
   * Type of scenario to generate.
   */
  scenario_type?: 'workflow' | 'red_teaming_voice' | 'red_teaming_text';

  tags?: Array<string>;

  test_profile?: number;

  tool_ids?: Array<string>;
}

export interface ScenarioRetrieveGenerateProgressParams {
  /**
   * Progress ID returned by the generate-evaluator-scenarios endpoint.
   */
  progress_id: string;
}

export interface ScenarioRunScenariosParams {
  agent_id?: number;

  agent_number?: string;

  assistant_id?: string;

  /**
   * Maximum number of concurrent simulated calls.
   */
  concurrency_limit?: number;

  frequency?: number;

  mode?: 'same_number' | 'different_numbers';

  name?: string;

  outbound_phone_number?: string;

  personality_ids?: Array<number>;

  /**
   * Scenario IDs to run, or the literal string 'all'.
   */
  scenarios?: Array<unknown> | string;

  tags?: Array<string>;

  test_profile_ids?: Array<number>;
}

export interface ScenarioScenarioAgentParams {
  /**
   * Scenario IDs to improve, or the literal string 'all'.
   */
  scenarios: Array<unknown> | string;

  /**
   * What the assistant should improve about the selected scenarios.
   */
  user_message: string;

  agent_id?: number | null;

  agent_resolution_response?: string;

  apply_changes?: boolean;

  context?: Array<ScenarioScenarioAgentParams.Context> | null;

  knowledge_base?: Array<number>;

  num_scenarios?: number;

  pending_tool_calls?: Array<{ [key: string]: unknown }> | null;

  scenarios_needing_agent?: Array<number>;

  session_id?: number | null;

  updated_scenarios?: Array<{ [key: string]: unknown }>;
}

export namespace ScenarioScenarioAgentParams {
  export interface Context {
    content?: string;

    role?: string;

    timestamp?: string;
  }
}

export interface ScenarioRetrieveScenarioAgentProgressParams {
  /**
   * Progress ID returned by the improve-evaluator-scenarios endpoint.
   */
  progress_id: string;
}

export interface ScenarioUpdateParams {
  agent?: number | null;

  expected_outcome_prompt?: string;

  first_message?: string;

  folder_path?: string | null;

  inbound_phone_number?: number;

  instructions?: string;

  max_duration?: number | null;

  metrics?: Array<number>;

  name?: string;

  personality?: number;

  phone_number?: number;

  scenario_language?: string;

  tags?: Array<string>;

  test_profile?: number;

  tool_ids?: Array<string>;
}

export declare namespace Scenarios {
  export {
    type EvaluatorScenarioDetail as EvaluatorScenarioDetail,
    type ScenarioListResponse as ScenarioListResponse,
    type ScenarioDeleteResponse as ScenarioDeleteResponse,
    type ScenarioRetrieveGenerateProgressResponse as ScenarioRetrieveGenerateProgressResponse,
    type ScenarioRetrieveScenarioAgentProgressResponse as ScenarioRetrieveScenarioAgentProgressResponse,
    type ScenarioRunScenariosResponse as ScenarioRunScenariosResponse,
    type ScenarioScenarioAgentResponse as ScenarioScenarioAgentResponse,
    type ScenarioListParams as ScenarioListParams,
    type ScenarioCreateParams as ScenarioCreateParams,
    type ScenarioRetrieveExportScenariosParams as ScenarioRetrieveExportScenariosParams,
    type ScenarioGenerateBgParams as ScenarioGenerateBgParams,
    type ScenarioRetrieveGenerateProgressParams as ScenarioRetrieveGenerateProgressParams,
    type ScenarioRunScenariosParams as ScenarioRunScenariosParams,
    type ScenarioScenarioAgentParams as ScenarioScenarioAgentParams,
    type ScenarioRetrieveScenarioAgentProgressParams as ScenarioRetrieveScenarioAgentProgressParams,
    type ScenarioUpdateParams as ScenarioUpdateParams,
  };
}
