// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class CanaryDeploys extends APIResource {
  /**
   * Endpoint to delete a canary deploy configuration for an assistant.
   *
   * Removes all canary deploy configurations for the specified assistant.
   *
   * @example
   * ```ts
   * await client.ai.assistants.canaryDeploys.delete(
   *   'assistant_id',
   * );
   * ```
   */
  delete(assistantID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/assistants/${assistantID}/canary-deploys`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Endpoint to get a canary deploy configuration for an assistant.
   *
   * Retrieves the current canary deploy configuration with all version IDs and their
   * traffic percentages for the specified assistant.
   *
   * @example
   * ```ts
   * const canaryDeployResponse =
   *   await client.ai.assistants.canaryDeploys.retrieve(
   *     'assistant_id',
   *   );
   * ```
   */
  retrieve(assistantID: string, options?: RequestOptions): APIPromise<CanaryDeployResponse> {
    return this._client.get(path`/ai/assistants/${assistantID}/canary-deploys`, options);
  }

  /**
   * Endpoint to create a canary deploy configuration for an assistant.
   *
   * Creates a new canary deploy configuration with multiple version IDs and their
   * traffic percentages for A/B testing or gradual rollouts of assistant versions.
   *
   * @example
   * ```ts
   * const canaryDeployResponse =
   *   await client.ai.assistants.canaryDeploys.create(
   *     'assistant_id',
   *   );
   * ```
   */
  create(
    assistantID: string,
    body: CanaryDeployCreateParams,
    options?: RequestOptions,
  ): APIPromise<CanaryDeployResponse> {
    return this._client.post(path`/ai/assistants/${assistantID}/canary-deploys`, { body, ...options });
  }

  /**
   * Endpoint to update a canary deploy configuration for an assistant.
   *
   * Updates the existing canary deploy configuration with new version IDs and
   * percentages. All old versions and percentages are replaces by new ones from this
   * request.
   *
   * @example
   * ```ts
   * const canaryDeployResponse =
   *   await client.ai.assistants.canaryDeploys.update(
   *     'assistant_id',
   *   );
   * ```
   */
  update(
    assistantID: string,
    body: CanaryDeployUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CanaryDeployResponse> {
    return this._client.put(path`/ai/assistants/${assistantID}/canary-deploys`, { body, ...options });
  }
}

/**
 * Create/update request body. Accepts:
 *
 * - `rules` — canonical ordered list of routing rules
 */
export interface CanaryDeploy {
  rules?: Array<RuleInput>;
}

/**
 * Response shape.
 *
 * Always carries `rules` (canonical).
 */
export interface CanaryDeployResponse {
  assistant_id: string;

  created_at: string;

  rules: Array<RuleOutput>;

  updated_at: string;
}

/**
 * A single attribute/operator/values check.
 *
 * A clause matches when the routing context's value for `attribute` satisfies
 * `operator` against any of `values`.
 */
export interface Clause {
  /**
   * Attribute name from the routing context
   */
  attribute: string;

  /**
   * Match operator
   */
  operator: 'in' | 'not_in' | 'starts_with';

  values: Array<string>;
}

/**
 * One slot in a percentage rollout.
 */
export interface RolloutSlot {
  version_id: string;

  weight: number;
}

/**
 * A targeting rule: `match` clauses (AND) gate `serve`.
 *
 * An empty `match` is a catch-all (always fires).
 */
export interface RuleInput {
  /**
   * What a rule serves when matched.
   *
   * Exactly one of:
   *
   * - `version_id` — serve a specific version
   * - `rollout` — weighted random across versions; weights must sum to less than
   *   100, with the leftover routing to the main version
   */
  serve: Serve;

  match?: Array<Clause>;
}

/**
 * A targeting rule: `match` clauses (AND) gate `serve`.
 *
 * An empty `match` is a catch-all (always fires).
 */
export interface RuleOutput {
  /**
   * What a rule serves when matched.
   *
   * Exactly one of:
   *
   * - `version_id` — serve a specific version
   * - `rollout` — weighted random across versions; weights must sum to less than
   *   100, with the leftover routing to the main version
   */
  serve: Serve;

  match?: Array<Clause>;
}

/**
 * What a rule serves when matched.
 *
 * Exactly one of:
 *
 * - `version_id` — serve a specific version
 * - `rollout` — weighted random across versions; weights must sum to less than
 *   100, with the leftover routing to the main version
 */
export interface Serve {
  rollout?: Array<RolloutSlot>;

  version_id?: string;
}

export interface CanaryDeployCreateParams {
  rules?: Array<RuleInput>;
}

export interface CanaryDeployUpdateParams {
  rules?: Array<RuleInput>;
}

export declare namespace CanaryDeploys {
  export {
    type CanaryDeploy as CanaryDeploy,
    type CanaryDeployResponse as CanaryDeployResponse,
    type Clause as Clause,
    type RolloutSlot as RolloutSlot,
    type RuleInput as RuleInput,
    type RuleOutput as RuleOutput,
    type Serve as Serve,
    type CanaryDeployCreateParams as CanaryDeployCreateParams,
    type CanaryDeployUpdateParams as CanaryDeployUpdateParams,
  };
}
