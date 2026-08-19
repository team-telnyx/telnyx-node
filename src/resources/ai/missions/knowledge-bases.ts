// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class KnowledgeBases extends APIResource {
  /**
   * Returns the knowledge bases attached to the specified mission. Knowledge bases
   * provide reference content agents can draw on during runs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.knowledgeBases.listKnowledgeBases(
   *     'mission_id',
   *   );
   * ```
   */
  listKnowledgeBases(missionID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/ai/missions/${missionID}/knowledge-bases`, options);
  }

  /**
   * Create a new knowledge base for a mission
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.knowledgeBases.createKnowledgeBase(
   *     'mission_id',
   *   );
   * ```
   */
  createKnowledgeBase(missionID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/ai/missions/${missionID}/knowledge-bases`, options);
  }

  /**
   * Detaches the specified knowledge base from the mission so its content is no
   * longer available to agents in subsequent runs.
   *
   * @example
   * ```ts
   * await client.ai.missions.knowledgeBases.deleteKnowledgeBase(
   *   'knowledge_base_id',
   *   { mission_id: 'mission_id' },
   * );
   * ```
   */
  deleteKnowledgeBase(
    knowledgeBaseID: string,
    params: KnowledgeBaseDeleteKnowledgeBaseParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { mission_id } = params;
    return this._client.delete(path`/ai/missions/${mission_id}/knowledge-bases/${knowledgeBaseID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the details of a single knowledge base attached to the specified
   * mission.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.knowledgeBases.getKnowledgeBase(
   *     'knowledge_base_id',
   *     { mission_id: 'mission_id' },
   *   );
   * ```
   */
  getKnowledgeBase(
    knowledgeBaseID: string,
    params: KnowledgeBaseGetKnowledgeBaseParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { mission_id } = params;
    return this._client.get(path`/ai/missions/${mission_id}/knowledge-bases/${knowledgeBaseID}`, options);
  }

  /**
   * Replaces the definition of the specified knowledge base on this mission.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.missions.knowledgeBases.updateKnowledgeBase(
   *     'knowledge_base_id',
   *     { mission_id: 'mission_id' },
   *   );
   * ```
   */
  updateKnowledgeBase(
    knowledgeBaseID: string,
    params: KnowledgeBaseUpdateKnowledgeBaseParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    const { mission_id } = params;
    return this._client.put(path`/ai/missions/${mission_id}/knowledge-bases/${knowledgeBaseID}`, options);
  }
}

export type KnowledgeBaseCreateKnowledgeBaseResponse = unknown;

export type KnowledgeBaseGetKnowledgeBaseResponse = unknown;

export type KnowledgeBaseListKnowledgeBasesResponse = unknown;

export type KnowledgeBaseUpdateKnowledgeBaseResponse = unknown;

export interface KnowledgeBaseDeleteKnowledgeBaseParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface KnowledgeBaseGetKnowledgeBaseParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export interface KnowledgeBaseUpdateKnowledgeBaseParams {
  /**
   * Unique identifier of the mission.
   */
  mission_id: string;
}

export declare namespace KnowledgeBases {
  export {
    type KnowledgeBaseCreateKnowledgeBaseResponse as KnowledgeBaseCreateKnowledgeBaseResponse,
    type KnowledgeBaseGetKnowledgeBaseResponse as KnowledgeBaseGetKnowledgeBaseResponse,
    type KnowledgeBaseListKnowledgeBasesResponse as KnowledgeBaseListKnowledgeBasesResponse,
    type KnowledgeBaseUpdateKnowledgeBaseResponse as KnowledgeBaseUpdateKnowledgeBaseResponse,
    type KnowledgeBaseDeleteKnowledgeBaseParams as KnowledgeBaseDeleteKnowledgeBaseParams,
    type KnowledgeBaseGetKnowledgeBaseParams as KnowledgeBaseGetKnowledgeBaseParams,
    type KnowledgeBaseUpdateKnowledgeBaseParams as KnowledgeBaseUpdateKnowledgeBaseParams,
  };
}
