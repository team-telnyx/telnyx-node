// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ToolPermissionsAPI from './tool-permissions';
import { ToolPermissionCreateParams, ToolPermissionListParams, ToolPermissions } from './tool-permissions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Teams on an instance: shared model lists, budgets, and rate limits.
 */
export class Teams extends APIResource {
  toolPermissions: ToolPermissionsAPI.ToolPermissions = new ToolPermissionsAPI.ToolPermissions(this._client);

  /**
   * Lists the instance's teams. The instance must be `ready`; otherwise the request
   * answers `409`.
   *
   * @example
   * ```ts
   * const teams = await client.agentGateways.teams.list(
   *   'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   * );
   * ```
   */
  list(instanceID: string, options?: RequestOptions): APIPromise<TeamListResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/teams`, options);
  }

  /**
   * Creates a team on the instance. A team is a model list, a budget, and rate
   * limits that its keys share. Names need not be unique; the `id` identifies the
   * team. The instance must be `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayTeamResponse =
   *   await client.agentGateways.teams.create(
   *     'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   *     {
   *       name: 'support',
   *       budget_resets_every: '30d',
   *       max_budget: 50,
   *       models: ['GLM-5.3-Flash', 'Qwen3.8-27B-nothink'],
   *       requests_per_minute: 120,
   *     },
   *   );
   * ```
   */
  create(
    instanceID: string,
    body: TeamCreateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayTeamResponse> {
    return this._client.post(path`/agent_gateways/${instanceID}/teams`, { body, ...options });
  }

  /**
   * Deletes a team that has no keys and returns it. A team that still has keys
   * answers `409`; delete or move its keys first. The instance must be `ready`;
   * otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayTeamResponse =
   *   await client.agentGateways.teams.delete(
   *     '0b6c5d4e-3f2a-4b1c-9d8e-7f6a5b4c3d2e',
   *     { instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996' },
   *   );
   * ```
   */
  delete(
    teamID: string,
    params: TeamDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayTeamResponse> {
    const { instance_id } = params;
    return this._client.delete(path`/agent_gateways/${instance_id}/teams/${teamID}`, options);
  }

  /**
   * Changes a team's settings. A field left out stays as it is, and `null` clears
   * it. `models: []` lifts the model restriction. Setting `blocked` to `true` makes
   * the instance refuse every key in the team with `401`. The instance must be
   * `ready`; otherwise the request answers `409`.
   *
   * @example
   * ```ts
   * const agentGatewayTeamResponse =
   *   await client.agentGateways.teams.update(
   *     '0b6c5d4e-3f2a-4b1c-9d8e-7f6a5b4c3d2e',
   *     {
   *       instance_id: 'ecffdf4b-93ea-4a7b-8295-51dfd2077996',
   *       max_budget: 100,
   *     },
   *   );
   * ```
   */
  update(
    teamID: string,
    params: TeamUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayTeamResponse> {
    const { instance_id, ...body } = params;
    return this._client.patch(path`/agent_gateways/${instance_id}/teams/${teamID}`, { body, ...options });
  }
}

/**
 * A team on an instance: a model list, a budget, and rate limits that its keys
 * share.
 */
export interface AgentGatewayTeam {
  /**
   * Identifies the team.
   */
  id: string;

  /**
   * Whether the instance refuses every key in the team.
   */
  blocked: boolean;

  /**
   * When the team's spend next resets.
   */
  budget_resets_at: string | null;

  /**
   * How often the team's spend resets, such as `30d`.
   */
  budget_resets_every: string | null;

  /**
   * When the team was created.
   */
  created_at: string | null;

  /**
   * The most the team's keys may spend together, in USD, until the budget resets.
   */
  max_budget: number | null;

  /**
   * The models the team's keys may use. Empty means every model the instance serves.
   */
  models: Array<string>;

  /**
   * A label for people. Names need not be unique.
   */
  name: string | null;

  /**
   * The most requests the team's keys may make per minute, together.
   */
  requests_per_minute: number | null;

  /**
   * What the team's keys have spent since the budget last reset, in USD.
   */
  spend: number;

  /**
   * The most tokens the team's keys may use per minute, together.
   */
  tokens_per_minute: number | null;
}

export interface AgentGatewayTeamResponse {
  /**
   * A team on an instance: a model list, a budget, and rate limits that its keys
   * share.
   */
  data: AgentGatewayTeam;
}

export interface TeamListResponse {
  data: Array<AgentGatewayTeam>;
}

export interface TeamCreateParams {
  /**
   * A label for people.
   */
  name: string;

  /**
   * How often the spend resets: a number and a unit, `s`, `m`, `h`, or `d`.
   */
  budget_resets_every?: string | null;

  /**
   * The most the team's keys may spend together, in USD.
   */
  max_budget?: number | null;

  /**
   * The models the team's keys may use. Leave it out to allow every model.
   */
  models?: Array<string> | null;

  /**
   * The most requests the team's keys may make per minute, together.
   */
  requests_per_minute?: number | null;

  /**
   * The most tokens the team's keys may use per minute, together.
   */
  tokens_per_minute?: number | null;
}

export interface TeamDeleteParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface TeamUpdateParams {
  /**
   * Path param: The Agent Gateway's `id`.
   */
  instance_id: string;

  /**
   * Body param: `true` makes the instance refuse every key in the team; `false` lets
   * them through again.
   */
  blocked?: boolean;

  /**
   * Body param: How often the spend resets.
   */
  budget_resets_every?: string | null;

  /**
   * Body param: The most the team's keys may spend together, in USD.
   */
  max_budget?: number | null;

  /**
   * Body param: The models the team's keys may use. `[]` allows every model.
   */
  models?: Array<string>;

  /**
   * Body param: A label for people.
   */
  name?: string;

  /**
   * Body param: The most requests the team's keys may make per minute, together.
   */
  requests_per_minute?: number | null;

  /**
   * Body param: The most tokens the team's keys may use per minute, together.
   */
  tokens_per_minute?: number | null;
}

Teams.ToolPermissions = ToolPermissions;

export declare namespace Teams {
  export {
    type AgentGatewayTeam as AgentGatewayTeam,
    type AgentGatewayTeamResponse as AgentGatewayTeamResponse,
    type TeamListResponse as TeamListResponse,
    type TeamCreateParams as TeamCreateParams,
    type TeamDeleteParams as TeamDeleteParams,
    type TeamUpdateParams as TeamUpdateParams,
  };

  export {
    ToolPermissions as ToolPermissions,
    type ToolPermissionListParams as ToolPermissionListParams,
    type ToolPermissionCreateParams as ToolPermissionCreateParams,
  };
}
