// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 * Test agents, evaluator scenarios, metrics, and run results for the AI test framework.
 */
export class Aiagents extends APIResource {
  /**
   * Returns a paginated list of test agents in your organization. A test agent wraps
   * the Telnyx AI assistant under test and drives simulated callers against it.
   *
   * @example
   * ```ts
   * const aiagents =
   *   await client.ai.tests.testFramework.v1.aiagents.list();
   * ```
   */
  list(
    query: AiagentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AiagentListResponse> {
    return this._client.get('/ai/tests/test_framework/v1/aiagents', { query, ...options });
  }

  /**
   * Creates a test agent in your organization. The agent wraps a Telnyx AI assistant
   * so simulated callers can be sent against it.
   *
   * @example
   * ```ts
   * const testAgent =
   *   await client.ai.tests.testFramework.v1.aiagents.create({
   *     agent_name: 'Support Bot Under Test',
   *     assistant_id: 'e1a2b3c4-d5e6-f7a8-b9c0-d1e2f3a4b5c6',
   *     description:
   *       'Evaluates the support assistant against generated callers.',
   *     language: 'en',
   *     llm_max_tokens: 512,
   *     llm_model: 'openai/gpt-oss-120b',
   *     llm_temperature: 0.7,
   *   });
   * ```
   */
  create(body: AiagentCreateParams, options?: RequestOptions): APIPromise<TestAgent> {
    return this._client.post('/ai/tests/test_framework/v1/aiagents', { body, ...options });
  }

  /**
   * Deletes the specified test agent.
   *
   * @example
   * ```ts
   * const aiagent =
   *   await client.ai.tests.testFramework.v1.aiagents.delete(0);
   * ```
   */
  delete(id: number, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/ai/tests/test_framework/v1/aiagents/${id}`, options);
  }

  /**
   * Returns the specified test agent.
   *
   * @example
   * ```ts
   * const testAgent =
   *   await client.ai.tests.testFramework.v1.aiagents.retrieve(
   *     0,
   *   );
   * ```
   */
  retrieve(id: number, options?: RequestOptions): APIPromise<TestAgent> {
    return this._client.get(path`/ai/tests/test_framework/v1/aiagents/${id}`, options);
  }

  /**
   * Updates the specified test agent.
   *
   * @example
   * ```ts
   * const testAgent =
   *   await client.ai.tests.testFramework.v1.aiagents.update(
   *     0,
   *     {
   *       agent_name: 'Support Bot Under Test - renamed',
   *       llm_max_tokens: 256,
   *       llm_temperature: 0.5,
   *     },
   *   );
   * ```
   */
  update(id: number, body: AiagentUpdateParams, options?: RequestOptions): APIPromise<TestAgent> {
    return this._client.put(path`/ai/tests/test_framework/v1/aiagents/${id}`, { body, ...options });
  }
}

export interface TestAgent {
  id: number;

  /**
   * Name of the test agent.
   */
  agent_name: string;

  /**
   * ID of the Telnyx AI assistant under test.
   */
  assistant_id: string;

  created_at: string;

  updated_at: string;

  auto_update_dropoff_nodes?: boolean;

  auto_update_topic_nodes?: boolean;

  /**
   * ID of the chat assistant under test, when testing text channels.
   */
  chat_assistant_id?: string;

  /**
   * Contact phone number for the test agent.
   */
  contact_number?: string;

  description?: string;

  /**
   * IDs of the test personalities enabled for this agent.
   */
  enabled_personalities?: Array<number>;

  hallucination_metric_kb_files?: Array<number>;

  /**
   * Whether the test agent accepts inbound calls.
   */
  inbound?: boolean;

  /**
   * Knowledge-base files associated with the test agent.
   */
  knowledge_base_files?: Array<unknown>;

  /**
   * ISO language code the test agent converses in.
   */
  language?: string;

  llm_max_tokens?: number;

  /**
   * Model used to drive the test agent's side of the conversation.
   */
  llm_model?: string;

  llm_system_prompt?: string;

  llm_temperature?: number;

  outbound_auto_call?: boolean;

  /**
   * Outbound numbers associated with the test agent.
   */
  outbound_numbers?: Array<unknown> | null;

  sip_auth?: { [key: string]: string } | null;

  sip_endpoint?: string;
}

export interface AiagentListResponse {
  count: number;

  /**
   * Link to the next page of results, or null.
   */
  next: string | null;

  /**
   * Link to the previous page of results, or null.
   */
  previous: string | null;

  results: Array<TestAgent>;
}

export type AiagentDeleteResponse = unknown;

export interface AiagentListParams {
  /**
   * Page number (1-based).
   */
  page?: number;

  /**
   * Number of results per page.
   */
  page_size?: number;
}

export interface AiagentCreateParams {
  /**
   * Name of the test agent.
   */
  agent_name: string;

  /**
   * ID of the Telnyx AI assistant under test.
   */
  assistant_id: string;

  auto_fetch_calls_enabled?: boolean;

  auto_sync_prompt_enabled?: boolean;

  auto_update_dropoff_nodes?: boolean;

  auto_update_topic_nodes?: boolean;

  contact_number?: string;

  description?: string;

  inbound?: boolean;

  /**
   * ISO language code the test agent converses in.
   */
  language?: string;

  llm_max_tokens?: number;

  llm_model?: string;

  llm_system_prompt?: string;

  llm_temperature?: number;

  outbound_auto_call?: boolean;

  sip_endpoint?: string;
}

export interface AiagentUpdateParams {
  /**
   * Name of the test agent.
   */
  agent_name?: string;

  /**
   * ID of the Telnyx AI assistant under test.
   */
  assistant_id?: string;

  auto_fetch_calls_enabled?: boolean;

  auto_sync_prompt_enabled?: boolean;

  auto_update_dropoff_nodes?: boolean;

  auto_update_topic_nodes?: boolean;

  contact_number?: string;

  description?: string;

  inbound?: boolean;

  /**
   * ISO language code the test agent converses in.
   */
  language?: string;

  llm_max_tokens?: number;

  llm_model?: string;

  llm_system_prompt?: string;

  llm_temperature?: number;

  outbound_auto_call?: boolean;

  sip_endpoint?: string;
}

export declare namespace Aiagents {
  export {
    type TestAgent as TestAgent,
    type AiagentListResponse as AiagentListResponse,
    type AiagentDeleteResponse as AiagentDeleteResponse,
    type AiagentListParams as AiagentListParams,
    type AiagentCreateParams as AiagentCreateParams,
    type AiagentUpdateParams as AiagentUpdateParams,
  };
}
