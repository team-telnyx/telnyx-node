// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ToolPermissionsAPI from './tool-permissions';
import {
  AgentGatewayToolPermissions,
  AgentGatewayToolPermissionsResponse,
  ToolPermissionCreateParams,
  ToolPermissionListParams,
  ToolPermissions,
} from './tool-permissions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Keys on an instance.
 */
export class Keys extends APIResource {
  toolPermissions: ToolPermissionsAPI.ToolPermissions = new ToolPermissionsAPI.ToolPermissions(this._client);

  /**
   * Lists the instance's keys, without their values. Returns the first 100. The
   * instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const keys = await client.agentGateways.keys.list(
   *   'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   * );
   * ```
   */
  list(
    instanceID: string,
    query: KeyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<KeyListResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/keys`, { query, ...options });
  }

  /**
   * Issues a key on the instance. The key's value is in this response only. Every
   * field is optional; a key without `models` may use every model the instance
   * serves. The instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const key = await client.agentGateways.keys.create(
   *   'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   *   {
   *     budget_resets_every: '30d',
   *     max_budget: 20,
   *     max_parallel_requests: 4,
   *     models: ['GLM-5.3-Flash'],
   *     name: 'support-agent',
   *     requests_per_minute: 60,
   *     team_id: '0b6c5d4e-3f2a-4b1c-9d8e-7f6a5b4c3d2e',
   *   },
   * );
   * ```
   */
  create(instanceID: string, body: KeyCreateParams, options?: RequestOptions): APIPromise<KeyCreateResponse> {
    return this._client.post(path`/agent_gateways/${instanceID}/keys`, { body, ...options });
  }

  /**
   * Revokes a key and returns it as it was, without its value. The instance must be
   * `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayKeyResponse =
   *   await client.agentGateways.keys.delete(
   *     '5f1c3a0e9b7d4c2a8e6f0b1d3c5a7e9f2b4d6c8a0e1f3a5c7e9b1d3f5a7c9e0b',
   *     { instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996' },
   *   );
   * ```
   */
  delete(
    keyID: string,
    params: KeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayKeyResponse> {
    const { instance_id } = params;
    return this._client.delete(path`/agent_gateways/${instance_id}/keys/${keyID}`, options);
  }

  /**
   * Changes a key's settings without reissuing it. A field left out stays as it is,
   * and `null` clears it. `models: []` lifts the model restriction. `expires_in`
   * counts from now. Setting `blocked` to `true` makes the instance refuse the key
   * with `401` while keeping its settings and spend; `false` lets it through again.
   * The instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayKeyResponse =
   *   await client.agentGateways.keys.update(
   *     '5f1c3a0e9b7d4c2a8e6f0b1d3c5a7e9f2b4d6c8a0e1f3a5c7e9b1d3f5a7c9e0b',
   *     {
   *       instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   *       blocked: true,
   *     },
   *   );
   * ```
   */
  update(
    keyID: string,
    params: KeyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayKeyResponse> {
    const { instance_id, ...body } = params;
    return this._client.patch(path`/agent_gateways/${instance_id}/keys/${keyID}`, { body, ...options });
  }
}

/**
 * A key on an instance, without its value.
 */
export interface AgentGatewayKey {
  /**
   * Identifies the key. It is a 64-character hash the instance stores in place of
   * the key's value.
   */
  id: string;

  /**
   * Whether the instance refuses the key.
   */
  blocked: boolean;

  /**
   * When the key's spend next resets.
   */
  budget_resets_at: string | null;

  /**
   * How often the key's spend resets, such as `30d`.
   */
  budget_resets_every: string | null;

  /**
   * When the key was issued.
   */
  created_at: string | null;

  /**
   * When the key stops working; `null` when it does not expire.
   */
  expires_at: string | null;

  /**
   * The most the key may spend, in USD, until its budget resets.
   */
  max_budget: number | null;

  /**
   * The most requests the key may have in flight at once.
   */
  max_parallel_requests: number | null;

  /**
   * The models the key may use. Empty means every model the instance serves.
   */
  models: Array<string>;

  /**
   * A label for people; `null` when none was given.
   */
  name: string | null;

  /**
   * The most requests the key may make per minute.
   */
  requests_per_minute: number | null;

  /**
   * What the key has spent since its budget last reset, in USD.
   */
  spend: number;

  /**
   * The team the key belongs to, if any.
   */
  team_id: string | null;

  /**
   * The most tokens the key may use per minute.
   */
  tokens_per_minute: number | null;
}

export interface AgentGatewayKeyResponse {
  /**
   * A key on an instance, without its value.
   */
  data: AgentGatewayKey;
}

export interface KeyCreateResponse {
  /**
   * A key that was just issued: the only response that carries its value.
   */
  data: KeyCreateResponse.Data;
}

export namespace KeyCreateResponse {
  /**
   * A key that was just issued: the only response that carries its value.
   */
  export interface Data {
    /**
     * Identifies the key. It is a 64-character hash the instance stores in place of
     * the key's value.
     */
    id: string;

    /**
     * Whether the instance refuses the key.
     */
    blocked: boolean;

    /**
     * When the key's spend next resets.
     */
    budget_resets_at: string | null;

    /**
     * How often the key's spend resets, such as `30d`.
     */
    budget_resets_every: string | null;

    /**
     * When the key was issued.
     */
    created_at: string | null;

    /**
     * When the key stops working; `null` when it does not expire.
     */
    expires_at: string | null;

    /**
     * The key's value, sent as `Authorization: Bearer <key>` to the instance. Shown
     * only in this response.
     */
    key: string;

    /**
     * The most the key may spend, in USD, until its budget resets.
     */
    max_budget: number | null;

    /**
     * The most requests the key may have in flight at once.
     */
    max_parallel_requests: number | null;

    /**
     * The models the key may use. Empty means every model the instance serves.
     */
    models: Array<string>;

    /**
     * A label for people; `null` when none was given.
     */
    name: string | null;

    /**
     * The most requests the key may make per minute.
     */
    requests_per_minute: number | null;

    /**
     * What the key has spent since its budget last reset, in USD.
     */
    spend: number;

    /**
     * The team the key belongs to, if any.
     */
    team_id: string | null;

    /**
     * The most tokens the key may use per minute.
     */
    tokens_per_minute: number | null;
  }
}

export interface KeyListResponse {
  data: Array<AgentGatewayKey>;
}

export interface KeyListParams {
  /**
   * Only the keys of this team.
   */
  team_id?: string;
}

export interface KeyCreateParams {
  /**
   * How often the spend resets: a number and a unit, `s`, `m`, `h`, or `d`.
   */
  budget_resets_every?: string | null;

  /**
   * How long until the key stops working: a number and a unit, `s`, `m`, `h`, or
   * `d`.
   */
  expires_in?: string | null;

  /**
   * The most the key may spend, in USD.
   */
  max_budget?: number | null;

  /**
   * The most requests the key may have in flight at once.
   */
  max_parallel_requests?: number | null;

  /**
   * The models the key may use. Leave it out to allow every model.
   */
  models?: Array<string> | null;

  /**
   * A label for people, unique on the instance.
   */
  name?: string | null;

  /**
   * The most requests the key may make per minute.
   */
  requests_per_minute?: number | null;

  /**
   * A team on the instance. The key shares the team's model list, budget, and rate
   * limits.
   */
  team_id?: string | null;

  /**
   * The most tokens the key may use per minute.
   */
  tokens_per_minute?: number | null;
}

export interface KeyDeleteParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface KeyUpdateParams {
  /**
   * Path param: The Agent Gateway's `id`.
   */
  instance_id: string;

  /**
   * Body param: `true` makes the instance refuse the key; `false` lets it through
   * again.
   */
  blocked?: boolean;

  /**
   * Body param: How often the spend resets.
   */
  budget_resets_every?: string | null;

  /**
   * Body param: How long from now until the key stops working.
   */
  expires_in?: string | null;

  /**
   * Body param: The most the key may spend, in USD.
   */
  max_budget?: number | null;

  /**
   * Body param: The most requests the key may have in flight at once.
   */
  max_parallel_requests?: number | null;

  /**
   * Body param: The models the key may use. `[]` allows every model.
   */
  models?: Array<string>;

  /**
   * Body param: A label for people.
   */
  name?: string;

  /**
   * Body param: The most requests the key may make per minute.
   */
  requests_per_minute?: number | null;

  /**
   * Body param: Move the key to this team, or `null` to leave its team.
   */
  team_id?: string | null;

  /**
   * Body param: The most tokens the key may use per minute.
   */
  tokens_per_minute?: number | null;
}

Keys.ToolPermissions = ToolPermissions;

export declare namespace Keys {
  export {
    type AgentGatewayKey as AgentGatewayKey,
    type AgentGatewayKeyResponse as AgentGatewayKeyResponse,
    type KeyCreateResponse as KeyCreateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyListParams as KeyListParams,
    type KeyCreateParams as KeyCreateParams,
    type KeyDeleteParams as KeyDeleteParams,
    type KeyUpdateParams as KeyUpdateParams,
  };

  export {
    ToolPermissions as ToolPermissions,
    type AgentGatewayToolPermissions as AgentGatewayToolPermissions,
    type AgentGatewayToolPermissionsResponse as AgentGatewayToolPermissionsResponse,
    type ToolPermissionListParams as ToolPermissionListParams,
    type ToolPermissionCreateParams as ToolPermissionCreateParams,
  };
}
