// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class KnowledgeBases extends APIResource {
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
   * Delete a knowledge base from a mission
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
   * Get a specific knowledge base by ID
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
   * List all knowledge bases for a mission
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
   * Update a knowledge base definition
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
  mission_id: string;
}

export interface KnowledgeBaseGetKnowledgeBaseParams {
  mission_id: string;
}

export interface KnowledgeBaseUpdateKnowledgeBaseParams {
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
