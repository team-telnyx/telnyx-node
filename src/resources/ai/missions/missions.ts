// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KnowledgeBasesAPI from './knowledge-bases';
import {
  KnowledgeBaseCreateKnowledgeBaseResponse,
  KnowledgeBaseDeleteKnowledgeBaseParams,
  KnowledgeBaseGetKnowledgeBaseParams,
  KnowledgeBaseGetKnowledgeBaseResponse,
  KnowledgeBaseListKnowledgeBasesResponse,
  KnowledgeBaseUpdateKnowledgeBaseParams,
  KnowledgeBaseUpdateKnowledgeBaseResponse,
  KnowledgeBases,
} from './knowledge-bases';
import * as McpServersAPI from './mcp-servers';
import {
  McpServerCreateMcpServerResponse,
  McpServerDeleteMcpServerParams,
  McpServerGetMcpServerParams,
  McpServerGetMcpServerResponse,
  McpServerListMcpServersResponse,
  McpServerUpdateMcpServerParams,
  McpServerUpdateMcpServerResponse,
  McpServers,
} from './mcp-servers';
import * as ToolsAPI from './tools';
import {
  ToolCreateToolResponse,
  ToolDeleteToolParams,
  ToolGetToolParams,
  ToolGetToolResponse,
  ToolListToolsResponse,
  ToolUpdateToolParams,
  ToolUpdateToolResponse,
  Tools,
} from './tools';
import * as RunsAPI from './runs/runs';
import {
  MissionRunData,
  MissionRunDataDefaultFlatPagination,
  RunCancelRunParams,
  RunCancelRunResponse,
  RunCreateParams,
  RunCreateResponse,
  RunListParams,
  RunListRunsParams,
  RunPauseRunParams,
  RunPauseRunResponse,
  RunResumeRunParams,
  RunResumeRunResponse,
  RunRetrieveParams,
  RunRetrieveResponse,
  RunUpdateParams,
  RunUpdateResponse,
  Runs,
} from './runs/runs';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Missions extends APIResource {
  runs: RunsAPI.Runs = new RunsAPI.Runs(this._client);
  knowledgeBases: KnowledgeBasesAPI.KnowledgeBases = new KnowledgeBasesAPI.KnowledgeBases(this._client);
  mcpServers: McpServersAPI.McpServers = new McpServersAPI.McpServers(this._client);
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);

  /**
   * Create a new mission definition
   *
   * @example
   * ```ts
   * const mission = await client.ai.missions.create({
   *   name: 'name',
   * });
   * ```
   */
  create(body: MissionCreateParams, options?: RequestOptions): APIPromise<MissionCreateResponse> {
    return this._client.post('/ai/missions', { body, ...options });
  }

  /**
   * Get a mission by ID (includes tools, knowledge_bases, mcp_servers)
   *
   * @example
   * ```ts
   * const mission = await client.ai.missions.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(missionID: string, options?: RequestOptions): APIPromise<MissionRetrieveResponse> {
    return this._client.get(path`/ai/missions/${missionID}`, options);
  }

  /**
   * List all missions for the organization
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const missionData of client.ai.missions.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MissionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MissionDataDefaultFlatPagination, MissionData> {
    return this._client.getAPIList('/ai/missions', DefaultFlatPagination<MissionData>, { query, ...options });
  }

  /**
   * Clone an existing mission
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.cloneMission(
   *   'mission_id',
   * );
   * ```
   */
  cloneMission(missionID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/ai/missions/${missionID}/clone`, options);
  }

  /**
   * Delete a mission
   *
   * @example
   * ```ts
   * await client.ai.missions.deleteMission(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  deleteMission(missionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/missions/${missionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * List recent events across all missions
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const missionListEventsResponse of client.ai.missions.listEvents()) {
   *   // ...
   * }
   * ```
   */
  listEvents(
    query: MissionListEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MissionListEventsResponsesDefaultFlatPagination, MissionListEventsResponse> {
    return this._client.getAPIList('/ai/missions/events', DefaultFlatPagination<MissionListEventsResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Update a mission definition
   *
   * @example
   * ```ts
   * const response = await client.ai.missions.updateMission(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  updateMission(
    missionID: string,
    body: MissionUpdateMissionParams,
    options?: RequestOptions,
  ): APIPromise<MissionUpdateMissionResponse> {
    return this._client.put(path`/ai/missions/${missionID}`, { body, ...options });
  }
}

export type MissionDataDefaultFlatPagination = DefaultFlatPagination<MissionData>;

export type MissionListEventsResponsesDefaultFlatPagination =
  DefaultFlatPagination<MissionListEventsResponse>;

export interface MissionData {
  created_at: string;

  execution_mode: 'external' | 'managed';

  mission_id: string;

  name: string;

  updated_at: string;

  description?: string;

  instructions?: string;

  metadata?: { [key: string]: unknown };

  model?: string;
}

export interface MissionCreateResponse {
  data: MissionData;
}

export interface MissionRetrieveResponse {
  data: MissionData;
}

export type MissionCloneMissionResponse = unknown;

export interface MissionListEventsResponse {
  event_id: string;

  run_id: string;

  summary: string;

  timestamp: string;

  type:
    | 'status_change'
    | 'step_started'
    | 'step_completed'
    | 'step_failed'
    | 'tool_call'
    | 'tool_result'
    | 'message'
    | 'error'
    | 'custom';

  agent_id?: string;

  idempotency_key?: string;

  payload?: { [key: string]: unknown };

  step_id?: string;
}

export interface MissionUpdateMissionResponse {
  data: MissionData;
}

export interface MissionCreateParams {
  name: string;

  description?: string;

  execution_mode?: 'external' | 'managed';

  instructions?: string;

  metadata?: { [key: string]: unknown };

  model?: string;
}

export interface MissionListParams extends DefaultFlatPaginationParams {}

export interface MissionListEventsParams extends DefaultFlatPaginationParams {
  type?: string;
}

export interface MissionUpdateMissionParams {
  description?: string;

  execution_mode?: 'external' | 'managed';

  instructions?: string;

  metadata?: { [key: string]: unknown };

  model?: string;

  name?: string;
}

Missions.Runs = Runs;
Missions.KnowledgeBases = KnowledgeBases;
Missions.McpServers = McpServers;
Missions.Tools = Tools;

export declare namespace Missions {
  export {
    type MissionData as MissionData,
    type MissionCreateResponse as MissionCreateResponse,
    type MissionRetrieveResponse as MissionRetrieveResponse,
    type MissionCloneMissionResponse as MissionCloneMissionResponse,
    type MissionListEventsResponse as MissionListEventsResponse,
    type MissionUpdateMissionResponse as MissionUpdateMissionResponse,
    type MissionDataDefaultFlatPagination as MissionDataDefaultFlatPagination,
    type MissionListEventsResponsesDefaultFlatPagination as MissionListEventsResponsesDefaultFlatPagination,
    type MissionCreateParams as MissionCreateParams,
    type MissionListParams as MissionListParams,
    type MissionListEventsParams as MissionListEventsParams,
    type MissionUpdateMissionParams as MissionUpdateMissionParams,
  };

  export {
    Runs as Runs,
    type MissionRunData as MissionRunData,
    type RunCreateResponse as RunCreateResponse,
    type RunRetrieveResponse as RunRetrieveResponse,
    type RunUpdateResponse as RunUpdateResponse,
    type RunCancelRunResponse as RunCancelRunResponse,
    type RunPauseRunResponse as RunPauseRunResponse,
    type RunResumeRunResponse as RunResumeRunResponse,
    type MissionRunDataDefaultFlatPagination as MissionRunDataDefaultFlatPagination,
    type RunCreateParams as RunCreateParams,
    type RunRetrieveParams as RunRetrieveParams,
    type RunUpdateParams as RunUpdateParams,
    type RunListParams as RunListParams,
    type RunCancelRunParams as RunCancelRunParams,
    type RunListRunsParams as RunListRunsParams,
    type RunPauseRunParams as RunPauseRunParams,
    type RunResumeRunParams as RunResumeRunParams,
  };

  export {
    KnowledgeBases as KnowledgeBases,
    type KnowledgeBaseCreateKnowledgeBaseResponse as KnowledgeBaseCreateKnowledgeBaseResponse,
    type KnowledgeBaseGetKnowledgeBaseResponse as KnowledgeBaseGetKnowledgeBaseResponse,
    type KnowledgeBaseListKnowledgeBasesResponse as KnowledgeBaseListKnowledgeBasesResponse,
    type KnowledgeBaseUpdateKnowledgeBaseResponse as KnowledgeBaseUpdateKnowledgeBaseResponse,
    type KnowledgeBaseDeleteKnowledgeBaseParams as KnowledgeBaseDeleteKnowledgeBaseParams,
    type KnowledgeBaseGetKnowledgeBaseParams as KnowledgeBaseGetKnowledgeBaseParams,
    type KnowledgeBaseUpdateKnowledgeBaseParams as KnowledgeBaseUpdateKnowledgeBaseParams,
  };

  export {
    McpServers as McpServers,
    type McpServerCreateMcpServerResponse as McpServerCreateMcpServerResponse,
    type McpServerGetMcpServerResponse as McpServerGetMcpServerResponse,
    type McpServerListMcpServersResponse as McpServerListMcpServersResponse,
    type McpServerUpdateMcpServerResponse as McpServerUpdateMcpServerResponse,
    type McpServerDeleteMcpServerParams as McpServerDeleteMcpServerParams,
    type McpServerGetMcpServerParams as McpServerGetMcpServerParams,
    type McpServerUpdateMcpServerParams as McpServerUpdateMcpServerParams,
  };

  export {
    Tools as Tools,
    type ToolCreateToolResponse as ToolCreateToolResponse,
    type ToolGetToolResponse as ToolGetToolResponse,
    type ToolListToolsResponse as ToolListToolsResponse,
    type ToolUpdateToolResponse as ToolUpdateToolResponse,
    type ToolDeleteToolParams as ToolDeleteToolParams,
    type ToolGetToolParams as ToolGetToolParams,
    type ToolUpdateToolParams as ToolUpdateToolParams,
  };
}
