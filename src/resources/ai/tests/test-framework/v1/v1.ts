// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as AiagentsAPI from './aiagents';
import {
  AiagentCreateParams,
  AiagentDeleteResponse,
  AiagentListParams,
  AiagentListResponse,
  AiagentUpdateParams,
  Aiagents,
  TestAgent,
} from './aiagents';
import * as MetricsAPI from './metrics';
import {
  AITestMetric,
  CreateAITestMetricRequest,
  MetricBulkCreateParams,
  MetricBulkCreateResponse,
  MetricCreateParams,
  MetricDeleteResponse,
  MetricGenerateMetricsParams,
  MetricListParams,
  MetricListResponse,
  MetricRetrieveGenerateMetricsProgressParams,
  MetricRetrieveGenerateMetricsProgressResponse,
  MetricUpdateParams,
  Metrics,
  ScenarioGenerationResponse,
} from './metrics';
import * as ResultsAPI from './results';
import {
  ResultDeleteResponse,
  ResultListParams,
  ResultListResponse,
  Results,
  TestRunResult,
} from './results';
import * as ScenariosAPI from './scenarios';
import {
  EvaluatorScenarioDetail,
  ScenarioCreateParams,
  ScenarioDeleteResponse,
  ScenarioGenerateBgParams,
  ScenarioListParams,
  ScenarioListResponse,
  ScenarioRetrieveExportScenariosParams,
  ScenarioRetrieveGenerateProgressParams,
  ScenarioRetrieveGenerateProgressResponse,
  ScenarioRetrieveScenarioAgentProgressParams,
  ScenarioRetrieveScenarioAgentProgressResponse,
  ScenarioRunScenariosParams,
  ScenarioRunScenariosResponse,
  ScenarioScenarioAgentParams,
  ScenarioScenarioAgentResponse,
  ScenarioUpdateParams,
  Scenarios,
} from './scenarios';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

/**
 * Test agents, evaluator scenarios, metrics, and run results for the AI test framework.
 */
export class V1 extends APIResource {
  aiagents: AiagentsAPI.Aiagents = new AiagentsAPI.Aiagents(this._client);
  metrics: MetricsAPI.Metrics = new MetricsAPI.Metrics(this._client);
  results: ResultsAPI.Results = new ResultsAPI.Results(this._client);
  scenarios: ScenariosAPI.Scenarios = new ScenariosAPI.Scenarios(this._client);

  /**
   * Returns the catalogue of test personalities available to your organization. A
   * personality describes how a simulated caller speaks: prompt, language, accent,
   * voice, interruption level, and call-behaviour settings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.tests.testFramework.v1.retrievePersonalities();
   * ```
   */
  retrievePersonalities(options?: RequestOptions): APIPromise<V1RetrievePersonalitiesResponse> {
    return this._client.get('/ai/tests/test_framework/v1/personalities', options);
  }
}

export type V1RetrievePersonalitiesResponse =
  Array<V1RetrievePersonalitiesResponse.V1RetrievePersonalitiesResponseItem>;

export namespace V1RetrievePersonalitiesResponse {
  export interface V1RetrievePersonalitiesResponseItem {
    id: number;

    end_call_enabled: boolean;

    /**
     * ISO language code the simulated caller speaks.
     */
    language: string;

    /**
     * Display name of the personality.
     */
    name: string;

    /**
     * Instructions the simulated caller follows.
     */
    prompt: string;

    accent?: string;

    background_noise?: string | null;

    background_sound_volume?: number | null;

    effective_voice_volume?: number | null;

    /**
     * ID of the personality this one was forked from.
     */
    forked_from?: number | null;

    generation_config?: { [key: string]: unknown } | null;

    /**
     * How aggressively the personality interrupts the assistant.
     */
    interruption_level?: string | null;

    /**
     * Idle-timeout plan for messages during a call.
     */
    message_plan?: { [key: string]: unknown } | null;

    network_simulation?: { [key: string]: unknown } | null;

    organization?: number | null;

    project?: number | null;

    speed?: number | string | null;

    start_speaking_plan?: number | { [key: string]: unknown } | null;

    stop_speaking_plan?: { [key: string]: unknown } | null;

    voice_volume?: number | null;
  }
}

V1.Aiagents = Aiagents;
V1.Metrics = Metrics;
V1.Results = Results;
V1.Scenarios = Scenarios;

export declare namespace V1 {
  export { type V1RetrievePersonalitiesResponse as V1RetrievePersonalitiesResponse };

  export {
    Aiagents as Aiagents,
    type TestAgent as TestAgent,
    type AiagentListResponse as AiagentListResponse,
    type AiagentDeleteResponse as AiagentDeleteResponse,
    type AiagentListParams as AiagentListParams,
    type AiagentCreateParams as AiagentCreateParams,
    type AiagentUpdateParams as AiagentUpdateParams,
  };

  export {
    Metrics as Metrics,
    type AITestMetric as AITestMetric,
    type CreateAITestMetricRequest as CreateAITestMetricRequest,
    type ScenarioGenerationResponse as ScenarioGenerationResponse,
    type MetricListResponse as MetricListResponse,
    type MetricDeleteResponse as MetricDeleteResponse,
    type MetricBulkCreateResponse as MetricBulkCreateResponse,
    type MetricRetrieveGenerateMetricsProgressResponse as MetricRetrieveGenerateMetricsProgressResponse,
    type MetricListParams as MetricListParams,
    type MetricCreateParams as MetricCreateParams,
    type MetricBulkCreateParams as MetricBulkCreateParams,
    type MetricGenerateMetricsParams as MetricGenerateMetricsParams,
    type MetricRetrieveGenerateMetricsProgressParams as MetricRetrieveGenerateMetricsProgressParams,
    type MetricUpdateParams as MetricUpdateParams,
  };

  export {
    Results as Results,
    type TestRunResult as TestRunResult,
    type ResultListResponse as ResultListResponse,
    type ResultDeleteResponse as ResultDeleteResponse,
    type ResultListParams as ResultListParams,
  };

  export {
    Scenarios as Scenarios,
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
