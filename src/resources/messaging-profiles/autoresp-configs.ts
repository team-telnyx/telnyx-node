// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AutorespConfigs extends APIResource {
  /**
   * Create auto-response setting
   *
   * @example
   * ```ts
   * const autoRespConfigResponse =
   *   await client.messagingProfiles.autorespConfigs.create(
   *     'profile_id',
   *     {
   *       country_code: 'US',
   *       keywords: ['keyword1', 'keyword2'],
   *       op: 'start',
   *     },
   *   );
   * ```
   */
  create(
    profileID: string,
    body: AutorespConfigCreateParams,
    options?: RequestOptions,
  ): APIPromise<AutoRespConfigResponse> {
    return this._client.post(path`/messaging_profiles/${profileID}/autoresp_configs`, { body, ...options });
  }

  /**
   * Get Auto-Response Setting
   *
   * @example
   * ```ts
   * const autoRespConfigResponse =
   *   await client.messagingProfiles.autorespConfigs.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    autorespCfgID: string,
    params: AutorespConfigRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AutoRespConfigResponse> {
    const { profile_id } = params;
    return this._client.get(
      path`/messaging_profiles/${profile_id}/autoresp_configs/${autorespCfgID}`,
      options,
    );
  }

  /**
   * Update Auto-Response Setting
   *
   * @example
   * ```ts
   * const autoRespConfigResponse =
   *   await client.messagingProfiles.autorespConfigs.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       country_code: 'US',
   *       keywords: ['keyword1', 'keyword2'],
   *       op: 'start',
   *     },
   *   );
   * ```
   */
  update(
    autorespCfgID: string,
    params: AutorespConfigUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AutoRespConfigResponse> {
    const { profile_id, ...body } = params;
    return this._client.put(path`/messaging_profiles/${profile_id}/autoresp_configs/${autorespCfgID}`, {
      body,
      ...options,
    });
  }

  /**
   * List Auto-Response Settings
   *
   * @example
   * ```ts
   * const autorespConfigs =
   *   await client.messagingProfiles.autorespConfigs.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(
    profileID: string,
    query: AutorespConfigListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AutorespConfigListResponse> {
    return this._client.get(path`/messaging_profiles/${profileID}/autoresp_configs`, { query, ...options });
  }

  /**
   * Delete Auto-Response Setting
   *
   * @example
   * ```ts
   * const autorespConfig =
   *   await client.messagingProfiles.autorespConfigs.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { profile_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  delete(
    autorespCfgID: string,
    params: AutorespConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<string> {
    const { profile_id } = params;
    return this._client.delete(
      path`/messaging_profiles/${profile_id}/autoresp_configs/${autorespCfgID}`,
      options,
    );
  }
}

export interface AutoRespConfig {
  id: string;

  country_code: string;

  created_at: string;

  keywords: Array<string>;

  op: 'start' | 'stop' | 'info';

  updated_at: string;

  resp_text?: string;
}

export interface AutoRespConfigCreate {
  country_code: string;

  keywords: Array<string>;

  op: 'start' | 'stop' | 'info';

  resp_text?: string;
}

export interface AutoRespConfigResponse {
  data: AutoRespConfig;
}

/**
 * List of Auto-Response Settings
 */
export interface AutorespConfigListResponse {
  data: Array<AutoRespConfig>;

  meta: Shared.MessagingPaginationMeta;
}

export type AutorespConfigDeleteResponse = string;

export interface AutorespConfigCreateParams {
  country_code: string;

  keywords: Array<string>;

  op: 'start' | 'stop' | 'info';

  resp_text?: string;
}

export interface AutorespConfigRetrieveParams {
  profile_id: string;
}

export interface AutorespConfigUpdateParams {
  /**
   * Path param
   */
  profile_id: string;

  /**
   * Body param
   */
  country_code: string;

  /**
   * Body param
   */
  keywords: Array<string>;

  /**
   * Body param
   */
  op: 'start' | 'stop' | 'info';

  /**
   * Body param
   */
  resp_text?: string;
}

export interface AutorespConfigListParams {
  country_code?: string;

  /**
   * Consolidated created_at parameter (deepObject style). Originally:
   * created_at[gte], created_at[lte]
   */
  created_at?: AutorespConfigListParams.CreatedAt;

  /**
   * Consolidated updated_at parameter (deepObject style). Originally:
   * updated_at[gte], updated_at[lte]
   */
  updated_at?: AutorespConfigListParams.UpdatedAt;
}

export namespace AutorespConfigListParams {
  /**
   * Consolidated created_at parameter (deepObject style). Originally:
   * created_at[gte], created_at[lte]
   */
  export interface CreatedAt {
    gte?: string;

    lte?: string;
  }

  /**
   * Consolidated updated_at parameter (deepObject style). Originally:
   * updated_at[gte], updated_at[lte]
   */
  export interface UpdatedAt {
    gte?: string;

    lte?: string;
  }
}

export interface AutorespConfigDeleteParams {
  profile_id: string;
}

export declare namespace AutorespConfigs {
  export {
    type AutoRespConfig as AutoRespConfig,
    type AutoRespConfigCreate as AutoRespConfigCreate,
    type AutoRespConfigResponse as AutoRespConfigResponse,
    type AutorespConfigListResponse as AutorespConfigListResponse,
    type AutorespConfigDeleteResponse as AutorespConfigDeleteResponse,
    type AutorespConfigCreateParams as AutorespConfigCreateParams,
    type AutorespConfigRetrieveParams as AutorespConfigRetrieveParams,
    type AutorespConfigUpdateParams as AutorespConfigUpdateParams,
    type AutorespConfigListParams as AutorespConfigListParams,
    type AutorespConfigDeleteParams as AutorespConfigDeleteParams,
  };
}
