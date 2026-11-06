// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Checks an instance runs on model and tool requests.
 */
export class Guardrails extends APIResource {
  /**
   * Lists the instance's guardrails, without their secrets. The instance must be
   * `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const guardrails =
   *   await client.agentGateways.guardrails.list(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *   );
   * ```
   */
  list(instanceID: string, options?: RequestOptions): APIPromise<GuardrailListResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/guardrails`, options);
  }

  /**
   * Adds a check the instance runs on model and tool requests. It runs on every
   * request when `always_on`, and otherwise on the requests that name it in
   * `guardrails`. The instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayGuardrailResponse =
   *   await client.agentGateways.guardrails.create(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *     {
   *       modes: ['before_request'],
   *       name: 'mask-pii',
   *       type: 'content_filter',
   *       settings: {
   *         patterns: [
   *           { name: 'us_ssn', action: 'mask' },
   *           { name: 'email', action: 'mask' },
   *         ],
   *       },
   *     },
   *   );
   * ```
   */
  create(
    instanceID: string,
    body: GuardrailCreateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayGuardrailResponse> {
    return this._client.post(path`/agent_gateways/${instanceID}/guardrails`, { body, ...options });
  }

  /**
   * Removes a guardrail and returns it as it was. The instance must be `ready`;
   * otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayGuardrailResponse =
   *   await client.agentGateways.guardrails.delete(
   *     '9645e556-6532-4341-8cab-21b58cdef529',
   *     { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
   *   );
   * ```
   */
  delete(
    guardrailID: string,
    params: GuardrailDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayGuardrailResponse> {
    const { instance_id } = params;
    return this._client.delete(path`/agent_gateways/${instance_id}/guardrails/${guardrailID}`, options);
  }

  /**
   * Changes a guardrail's `name`, `modes`, `always_on`, or `settings`. `settings` is
   * replaced whole, secrets included. The `type` cannot change. The instance must be
   * `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayGuardrailResponse =
   *   await client.agentGateways.guardrails.update(
   *     '9645e556-6532-4341-8cab-21b58cdef529',
   *     {
   *       instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *       always_on: true,
   *     },
   *   );
   * ```
   */
  update(
    guardrailID: string,
    params: GuardrailUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayGuardrailResponse> {
    const { instance_id, ...body } = params;
    return this._client.patch(path`/agent_gateways/${instance_id}/guardrails/${guardrailID}`, {
      body,
      ...options,
    });
  }
}

export interface AgentGatewayGuardrail {
  /**
   * Identifies the guardrail.
   */
  id: string;

  /**
   * Whether it runs on every request.
   */
  always_on: boolean;

  created_at: string | null;

  /**
   * When the guardrail runs.
   */
  modes: Array<
    | 'before_request'
    | 'during_request'
    | 'after_request'
    | 'logging_only'
    | 'before_tool_request'
    | 'during_tool_request'
    | 'after_tool_request'
  >;

  /**
   * What a request names in its `guardrails` field.
   */
  name: string;

  /**
   * The type's settings. `content_filter`: `patterns` (prebuilt patterns by name,
   * such as `us_ssn` or `email`), `regexes`, `keywords`, and `categories` (such as
   * `prompt_injection`), each with an `action` of `block` or `mask`.
   * `tool_permission`: `rules` (`id`, `tool_name`, `tool_type`, `decision`,
   * `argument_patterns`), a `default` decision, and `on_denied` (`block` or
   * `rewrite`). `model_judge`: a `model` on the instance and weighted `criteria`
   * (`name`, `description`, `weight`, the weights summing to 100). `custom_code`:
   * `code` defining `apply_guardrail(inputs, request_data, input_type)`. `lakera`:
   * `api_key`, `project_id`, `api_base`. `presidio`: `analyzer_url`,
   * `anonymizer_url`, `entities` (entity name to `block` or `mask`), `language`.
   * `bedrock`: `guardrail_id`, `version`, `region`, and `access_key_id` with
   * `secret_access_key`, or `role_name`. `azure_content_safety`: `api_key`,
   * `endpoint`, `severity` (0 to 7). Provider secrets are write-only. Responses
   * leave the secrets out.
   */
  settings: { [key: string]: unknown };

  type:
    | 'content_filter'
    | 'tool_permission'
    | 'model_judge'
    | 'custom_code'
    | 'lakera'
    | 'presidio'
    | 'bedrock'
    | 'azure_content_safety';

  updated_at: string | null;
}

export interface AgentGatewayGuardrailResponse {
  data: AgentGatewayGuardrail;
}

export interface GuardrailListResponse {
  data: Array<AgentGatewayGuardrail>;
}

export interface GuardrailCreateParams {
  /**
   * When the guardrail runs. Each type runs in some modes only.
   */
  modes: Array<
    | 'before_request'
    | 'during_request'
    | 'after_request'
    | 'logging_only'
    | 'before_tool_request'
    | 'during_tool_request'
    | 'after_tool_request'
  >;

  /**
   * A name, unique on the instance. A request names it in its `guardrails` field.
   */
  name: string;

  /**
   * The kind of check. It cannot change after create.
   */
  type:
    | 'content_filter'
    | 'tool_permission'
    | 'model_judge'
    | 'custom_code'
    | 'lakera'
    | 'presidio'
    | 'bedrock'
    | 'azure_content_safety';

  /**
   * `true` runs the guardrail on every request, and a request cannot turn it off.
   * `false` runs it on the requests that name it.
   */
  always_on?: boolean;

  /**
   * The type's settings. `content_filter`: `patterns` (prebuilt patterns by `name`,
   * such as `us_ssn` or `email`), `regexes` (each a `name`, which tags masked
   * matches, and a `pattern`), `keywords` (each a `keyword`), and `categories` (each
   * a `name`), each entry with an `action` of `block` or `mask`. `tool_permission`:
   * `rules` (`id`, `tool_name`, `tool_type`, `decision`, `argument_patterns`), a
   * `default` decision, and `on_denied` (`block` or `rewrite`). `model_judge`: a
   * `model` on the instance and weighted `criteria` (`name`, `description`,
   * `weight`, the weights summing to 100). `custom_code`: `code` defining
   * `apply_guardrail(inputs, request_data, input_type)`. `lakera`: `api_key`,
   * `project_id`, `api_base`. `presidio`: `analyzer_url`, `anonymizer_url`,
   * `entities` (entity name to `block` or `mask`), `language`. `bedrock`:
   * `guardrail_id`, `version`, `region`, and `access_key_id` with
   * `secret_access_key`, or `role_name`. `azure_content_safety`: `api_key`,
   * `endpoint`, `severity` (0 to 7). Provider secrets are write-only.
   */
  settings?: { [key: string]: unknown };
}

export interface GuardrailDeleteParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface GuardrailUpdateParams {
  /**
   * Path param: The Agent Gateway's `id`.
   */
  instance_id: string;

  /**
   * Body param: `true` runs the guardrail on every request, and a request cannot
   * turn it off. `false` runs it on the requests that name it.
   */
  always_on?: boolean;

  /**
   * Body param: When the guardrail runs. Each type runs in some modes only.
   */
  modes?: Array<
    | 'before_request'
    | 'during_request'
    | 'after_request'
    | 'logging_only'
    | 'before_tool_request'
    | 'during_tool_request'
    | 'after_tool_request'
  >;

  /**
   * Body param: A name, unique on the instance. A request names it in its
   * `guardrails` field.
   */
  name?: string;

  /**
   * Body param: The type's settings. `content_filter`: `patterns` (prebuilt patterns
   * by name, such as `us_ssn` or `email`), `regexes`, `keywords`, and `categories`
   * (such as `prompt_injection`), each with an `action` of `block` or `mask`.
   * `tool_permission`: `rules` (`id`, `tool_name`, `tool_type`, `decision`,
   * `argument_patterns`), a `default` decision, and `on_denied` (`block` or
   * `rewrite`). `model_judge`: a `model` on the instance and weighted `criteria`
   * (`name`, `description`, `weight`, the weights summing to 100). `custom_code`:
   * `code` defining `apply_guardrail(inputs, request_data, input_type)`. `lakera`:
   * `api_key`, `project_id`, `api_base`. `presidio`: `analyzer_url`,
   * `anonymizer_url`, `entities` (entity name to `block` or `mask`), `language`.
   * `bedrock`: `guardrail_id`, `version`, `region`, and `access_key_id` with
   * `secret_access_key`, or `role_name`. `azure_content_safety`: `api_key`,
   * `endpoint`, `severity` (0 to 7). Provider secrets are write-only.
   */
  settings?: { [key: string]: unknown };
}

export declare namespace Guardrails {
  export {
    type AgentGatewayGuardrail as AgentGatewayGuardrail,
    type AgentGatewayGuardrailResponse as AgentGatewayGuardrailResponse,
    type GuardrailListResponse as GuardrailListResponse,
    type GuardrailCreateParams as GuardrailCreateParams,
    type GuardrailDeleteParams as GuardrailDeleteParams,
    type GuardrailUpdateParams as GuardrailUpdateParams,
  };
}
