// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Test agents, evaluator scenarios, metrics, and run results for the AI test framework.
 */
export class Metrics extends APIResource {
  /**
   * Returns the metrics available in your organization, optionally filtered by test
   * agent. Each metric scores one aspect of a conversation or scenario run.
   *
   * @example
   * ```ts
   * const aiTestMetrics =
   *   await client.ai.tests.testFramework.v1.metrics.list();
   * ```
   */
  list(
    query: MetricListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MetricListResponse> {
    return this._client.get('/ai/tests/test_framework/v1/metrics', { query, ...options });
  }

  /**
   * Creates a metric in your organization.
   *
   * @example
   * ```ts
   * const aiTestMetric =
   *   await client.ai.tests.testFramework.v1.metrics.create({
   *     name: 'Escalates on refund denial',
   *     agents: [1259],
   *     description:
   *       "Returns a score for whether the assistant escalates when the caller's refund is denied.",
   *     eval_type: 'continuous_qualitative',
   *     observability_enabled: true,
   *     prompt:
   *       "Score the assistant's escalation behaviour between 0.0 and 1.0.",
   *     simulation_enabled: true,
   *     type: 'llm_judge',
   *   });
   * ```
   */
  create(body: MetricCreateParams, options?: RequestOptions): APIPromise<AITestMetric> {
    return this._client.post('/ai/tests/test_framework/v1/metrics', { body, ...options });
  }

  /**
   * Creates several metrics in one request. Accepts an array of metric objects and
   * returns the created metrics.
   *
   * @example
   * ```ts
   * const aiTestMetrics =
   *   await client.ai.tests.testFramework.v1.metrics.bulkCreate(
   *     { body: [{ name: 'Greets within 5 seconds' }] },
   *   );
   * ```
   */
  bulkCreate(params: MetricBulkCreateParams, options?: RequestOptions): APIPromise<MetricBulkCreateResponse> {
    const { body } = params;
    return this._client.post('/ai/tests/test_framework/v1/metrics/bulk_create', { body: body, ...options });
  }

  /**
   * Starts background generation of suggested metrics for a test agent. Returns a
   * progress ID to poll with the get-test-metric-generation-progress endpoint.
   *
   * @example
   * ```ts
   * const scenarioGenerationResponse =
   *   await client.ai.tests.testFramework.v1.metrics.generateMetrics(
   *     {
   *       agent_id: 1259,
   *       num_metrics: 5,
   *       scenarios: [9512],
   *     },
   *   );
   * ```
   */
  generateMetrics(
    body: MetricGenerateMetricsParams,
    options?: RequestOptions,
  ): APIPromise<ScenarioGenerationResponse> {
    return this._client.post('/ai/tests/test_framework/v1/metrics/generate_metrics', { body, ...options });
  }

  /**
   * Returns the status of a background metric-generation job started with the
   * generate-test-metrics endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.tests.testFramework.v1.metrics.retrieveGenerateMetricsProgress(
   *     { progress_id: 'progress_id' },
   *   );
   * ```
   */
  retrieveGenerateMetricsProgress(
    query: MetricRetrieveGenerateMetricsProgressParams,
    options?: RequestOptions,
  ): APIPromise<MetricRetrieveGenerateMetricsProgressResponse> {
    return this._client.get('/ai/tests/test_framework/v1/metrics/generate_metrics_progress', {
      query,
      ...options,
    });
  }

  /**
   * Deletes the specified metric.
   *
   * @example
   * ```ts
   * const metric =
   *   await client.ai.tests.testFramework.v1.metrics.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/tests/test_framework/v1/metrics/${id}`, options);
  }

  /**
   * Returns the specified metric.
   *
   * @example
   * ```ts
   * const aiTestMetric =
   *   await client.ai.tests.testFramework.v1.metrics.retrieve(
   *     0,
   *   );
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<AITestMetric> {
    return this._client.get(path`/ai/tests/test_framework/v1/metrics/${id}`, options);
  }

  /**
   * Updates the specified metric.
   *
   * @example
   * ```ts
   * const aiTestMetric =
   *   await client.ai.tests.testFramework.v1.metrics.update(0, {
   *     audio_enabled: true,
   *     name: 'Escalates on refund denial',
   *     prompt:
   *       "Score the assistant's escalation behaviour between 0.0 and 1.0, considering tone.",
   *   });
   * ```
   */
  update(id: number, body: MetricUpdateParams, options?: RequestOptions): APIPromise<AITestMetric> {
    return this._client.patch(path`/ai/tests/test_framework/v1/metrics/${id}`, { body, ...options });
  }
}

export interface AITestMetric {
  id: number;

  /**
   * What the metric scores: numeric, continuous_qualitative, or
   * binary_workflow_adherence.
   */
  eval_type: string;

  name: string;

  /**
   * How the metric is evaluated: custom_code or llm_judge.
   */
  type: string;

  /**
   * Whether the metric is attached to newly created test agents by default.
   */
  add_to_new_agents?: boolean | null;

  agent?: number | null;

  agent_names?: Array<string>;

  /**
   * Test agent IDs the metric is attached to.
   */
  agents?: Array<number>;

  alert_filters?: { [key: string]: unknown } | null;

  alert_type?: string;

  audio_enabled?: boolean;

  configuration?: { [key: string]: unknown } | null;

  description?: string;

  display_order?: number;

  /**
   * Allowed values for qualitative enum metrics.
   */
  enum_values?: Array<string>;

  evaluation_trigger?: string;

  evaluation_trigger_custom_code?: string;

  evaluation_trigger_prompt?: string;

  /**
   * Smoothing factor for the alert trend.
   */
  ewma_alpha?: number;

  /**
   * Built-in evaluation function used by custom_code metrics.
   */
  function_name?: string | null;

  kb_file_ids?: Array<number>;

  knowledge_base_files?: Array<string>;

  metric_cost?: number;

  observability_enabled?: boolean;

  overall_score?: number | string;

  priority_assignment_prompt?: string;

  project?: number | null;

  /**
   * Judge prompt used by llm_judge metrics.
   */
  prompt?: string;

  sample_rate?: number | null;

  sampling_enabled?: boolean;

  significant_change_alert_direction?: string;

  significant_change_alert_status?: string;

  simulation_enabled?: boolean;

  /**
   * Stable identifier of a built-in metric.
   */
  slug?: string | null;

  /**
   * Standard-deviation multiplier for significant-change alerts.
   */
  std_multiplier?: number;

  total_score?: number | string;

  trigger_type?: string;

  user_defined?: boolean;

  uses_llm_judge?: boolean;

  /**
   * Sliding window size the alert status is computed over.
   */
  window_size?: number;
}

export interface CreateAITestMetricRequest {
  name: string;

  add_to_new_agents?: boolean | null;

  agents?: Array<number>;

  assistant_id?: string;

  audio_enabled?: boolean;

  description?: string;

  display_order?: number;

  enum_values?: Array<string>;

  /**
   * What the metric scores: numeric, continuous_qualitative, or
   * binary_workflow_adherence.
   */
  eval_type?: string;

  observability_enabled?: boolean;

  /**
   * Judge prompt used by llm_judge metrics.
   */
  prompt?: string;

  sampling_enabled?: boolean;

  simulation_enabled?: boolean;

  /**
   * How the metric is evaluated: custom_code or llm_judge.
   */
  type?: string;
}

export interface ScenarioGenerationResponse {
  /**
   * Identifier to poll generation progress with.
   */
  progress_id: string;
}

export type MetricListResponse = Array<AITestMetric>;

export type MetricDeleteResponse = unknown;

export type MetricBulkCreateResponse = Array<AITestMetric>;

export interface MetricRetrieveGenerateMetricsProgressResponse {
  agent_id: number;

  current_step: string;

  error: string | null;

  metrics: Array<MetricRetrieveGenerateMetricsProgressResponse.Metric>;

  status: 'queued' | 'processing' | 'completed' | 'failed';
}

export namespace MetricRetrieveGenerateMetricsProgressResponse {
  export interface Metric {
    agent?: number;

    description?: string;

    eval_type?: string;

    name?: string;

    scenarios?: Array<number>;
  }
}

export interface MetricListParams {
  /**
   * Filter metrics attached to the specified test agent.
   */
  agent_id?: number;

  /**
   * Filter metrics attached to the specified Telnyx assistant.
   */
  assistant_id?: string;
}

export interface MetricCreateParams {
  name: string;

  add_to_new_agents?: boolean | null;

  agents?: Array<number>;

  assistant_id?: string;

  audio_enabled?: boolean;

  description?: string;

  display_order?: number;

  enum_values?: Array<string>;

  /**
   * What the metric scores: numeric, continuous_qualitative, or
   * binary_workflow_adherence.
   */
  eval_type?: string;

  observability_enabled?: boolean;

  /**
   * Judge prompt used by llm_judge metrics.
   */
  prompt?: string;

  sampling_enabled?: boolean;

  simulation_enabled?: boolean;

  /**
   * How the metric is evaluated: custom_code or llm_judge.
   */
  type?: string;
}

export interface MetricBulkCreateParams {
  body: Array<CreateAITestMetricRequest>;
}

export interface MetricGenerateMetricsParams {
  /**
   * Test agent to suggest metrics for.
   */
  agent_id: number;

  /**
   * How many metrics to suggest.
   */
  num_metrics: number;

  /**
   * Scenario IDs to base the suggestions on.
   */
  scenarios?: Array<number>;
}

export interface MetricRetrieveGenerateMetricsProgressParams {
  /**
   * Progress ID returned by the generate-test-metrics endpoint.
   */
  progress_id: string;
}

export interface MetricUpdateParams {
  add_to_new_agents?: boolean | null;

  agents?: Array<number>;

  audio_enabled?: boolean;

  description?: string;

  display_order?: number;

  enum_values?: Array<string>;

  /**
   * What the metric scores: numeric, continuous_qualitative, or
   * binary_workflow_adherence.
   */
  eval_type?: string;

  name?: string;

  observability_enabled?: boolean;

  /**
   * Judge prompt used by llm_judge metrics.
   */
  prompt?: string;

  sampling_enabled?: boolean;

  simulation_enabled?: boolean;

  /**
   * How the metric is evaluated: custom_code or llm_judge.
   */
  type?: string;
}

export declare namespace Metrics {
  export {
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
}
