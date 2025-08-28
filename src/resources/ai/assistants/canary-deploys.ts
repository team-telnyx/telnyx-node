// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CanaryDeploys extends APIResource {
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
   *     {
   *       versions: [
   *         { percentage: 1, version_id: 'version_id' },
   *       ],
   *     },
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
   *     {
   *       versions: [
   *         { percentage: 1, version_id: 'version_id' },
   *       ],
   *     },
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
}

/**
 * Request model for creating or updating canary deploys.
 */
export interface CanaryDeploy {
  /**
   * List of version configurations
   */
  versions: Array<VersionConfig>;
}

/**
 * Response model for canary deploy operations.
 */
export interface CanaryDeployResponse {
  assistant_id: string;

  created_at: string;

  updated_at: string;

  versions: Array<VersionConfig>;
}

/**
 * Configuration for a single version in canary deploy.
 */
export interface VersionConfig {
  /**
   * Percentage of traffic for this version [1-99]
   */
  percentage: number;

  /**
   * Version ID string that references assistant_versions.version_id
   */
  version_id: string;
}

export interface CanaryDeployCreateParams {
  /**
   * List of version configurations
   */
  versions: Array<VersionConfig>;
}

export interface CanaryDeployUpdateParams {
  /**
   * List of version configurations
   */
  versions: Array<VersionConfig>;
}

export declare namespace CanaryDeploys {
  export {
    type CanaryDeploy as CanaryDeploy,
    type CanaryDeployResponse as CanaryDeployResponse,
    type VersionConfig as VersionConfig,
    type CanaryDeployCreateParams as CanaryDeployCreateParams,
    type CanaryDeployUpdateParams as CanaryDeployUpdateParams,
  };
}
