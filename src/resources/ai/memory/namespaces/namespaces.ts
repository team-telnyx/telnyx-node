// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SettingsAPI from './settings';
import { NamespaceSettingsResponse, SettingPatchAllParams, Settings } from './settings';
import * as ProfilesAPI from './profiles/profiles';
import {
  PageMeta,
  ProfileDeleteParams,
  ProfileDeleteResponse,
  ProfileIngestParams,
  ProfileIngestResponse,
  ProfileListParams,
  ProfileListResponse,
  ProfileListResponsesDefaultFlatPagination,
  ProfileRecallParams,
  ProfileRecallResponse,
  ProfileRememberParams,
  ProfileRememberResponse,
  ProfileRetrieveSummaryParams,
  ProfileRetrieveSummaryResponse,
  Profiles,
} from './profiles/profiles';
import { APIPromise } from '../../../../core/api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Namespaces extends APIResource {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);

  /**
   * Whether a write has finished. Both `ingest` and `remember` return an
   * `operation_id`, and a memory is not recallable until its operation completes —
   * extraction, embedding and consolidation all run first.
   *
   * @example
   * ```ts
   * const namespace =
   *   await client.ai.memory.namespaces.retrieve(
   *     'operation_id',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  retrieve(
    operationID: string,
    params: NamespaceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceRetrieveResponse> {
    const { namespace } = params;
    return this._client.get(path`/ai/memory/namespaces/${namespace}/operations/${operationID}`, options);
  }

  /**
   * Every namespace in your organization, `default` among them.
   *
   * @example
   * ```ts
   * const namespaces = await client.ai.memory.namespaces.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get('/ai/memory/namespaces', options);
  }

  /**
   * Create a namespace. An organization can have at most five, `default` among them
   * — a sixth returns `403`.
   *
   * @example
   * ```ts
   * const namespace = await client.ai.memory.namespaces.create({
   *   name: 'staging',
   * });
   * ```
   */
  create(body: NamespaceCreateParams, options?: RequestOptions): APIPromise<NamespaceCreateResponse> {
    return this._client.post('/ai/memory/namespaces', { body, ...options });
  }

  /**
   * Delete a namespace and every profile and memory in it. `default` cannot be
   * deleted. This cannot be undone.
   *
   * @example
   * ```ts
   * await client.ai.memory.namespaces.delete('namespace');
   * ```
   */
  delete(namespace: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/memory/namespaces/${namespace}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * An isolated memory store within your organization.
 */
export interface Namespace {
  /**
   * The namespace's unique identifier.
   */
  id: string;

  /**
   * The namespace's name, used in the path. `default` exists for every organization.
   */
  name: string;
}

export interface NamespaceCreateResponse {
  /**
   * An isolated memory store within your organization.
   */
  data: Namespace;
}

export interface NamespaceRetrieveResponse {
  data: NamespaceRetrieveResponse.Data;
}

export namespace NamespaceRetrieveResponse {
  export interface Data {
    operation_id: string;

    /**
     * Where the write is. `completed`, `failed` and `cancelled` are terminal: stop
     * polling at any of them, and treat `failed` and `cancelled` as writes that did
     * not happen.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';

    completed_at?: string | null;

    created_at?: string | null;
  }
}

export interface NamespaceListResponse {
  data: Array<Namespace>;
}

export interface NamespaceRetrieveParams {
  namespace: string;
}

export interface NamespaceCreateParams {
  /**
   * A name for the new namespace, unique within your organization.
   */
  name: string;
}

Namespaces.Profiles = Profiles;
Namespaces.Settings = Settings;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceRetrieveResponse as NamespaceRetrieveResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceRetrieveParams as NamespaceRetrieveParams,
    type NamespaceCreateParams as NamespaceCreateParams,
  };

  export {
    Profiles as Profiles,
    type PageMeta as PageMeta,
    type ProfileListResponse as ProfileListResponse,
    type ProfileDeleteResponse as ProfileDeleteResponse,
    type ProfileIngestResponse as ProfileIngestResponse,
    type ProfileRecallResponse as ProfileRecallResponse,
    type ProfileRememberResponse as ProfileRememberResponse,
    type ProfileRetrieveSummaryResponse as ProfileRetrieveSummaryResponse,
    type ProfileListResponsesDefaultFlatPagination as ProfileListResponsesDefaultFlatPagination,
    type ProfileListParams as ProfileListParams,
    type ProfileDeleteParams as ProfileDeleteParams,
    type ProfileIngestParams as ProfileIngestParams,
    type ProfileRecallParams as ProfileRecallParams,
    type ProfileRememberParams as ProfileRememberParams,
    type ProfileRetrieveSummaryParams as ProfileRetrieveSummaryParams,
  };

  export {
    Settings as Settings,
    type NamespaceSettingsResponse as NamespaceSettingsResponse,
    type SettingPatchAllParams as SettingPatchAllParams,
  };
}
