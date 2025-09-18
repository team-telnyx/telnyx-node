// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsageAPI from './buckets/usage';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MigrationSources extends APIResource {
  /**
   * Create a source from which data can be migrated from.
   *
   * @example
   * ```ts
   * const migrationSource =
   *   await client.storage.migrationSources.create({
   *     bucket_name: 'bucket_name',
   *     provider: 'aws',
   *     provider_auth: {},
   *   });
   * ```
   */
  create(
    body: MigrationSourceCreateParams,
    options?: RequestOptions,
  ): APIPromise<MigrationSourceCreateResponse> {
    return this._client.post('/storage/migration_sources', { body, ...options });
  }

  /**
   * Get a Migration Source
   *
   * @example
   * ```ts
   * const migrationSource =
   *   await client.storage.migrationSources.retrieve('');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MigrationSourceRetrieveResponse> {
    return this._client.get(path`/storage/migration_sources/${id}`, options);
  }

  /**
   * List all Migration Sources
   *
   * @example
   * ```ts
   * const migrationSources =
   *   await client.storage.migrationSources.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<MigrationSourceListResponse> {
    return this._client.get('/storage/migration_sources', options);
  }

  /**
   * Delete a Migration Source
   *
   * @example
   * ```ts
   * const migrationSource =
   *   await client.storage.migrationSources.delete('');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MigrationSourceDeleteResponse> {
    return this._client.delete(path`/storage/migration_sources/${id}`, options);
  }
}

export interface MigrationSourceParams {
  /**
   * Bucket name to migrate the data from.
   */
  bucket_name: string;

  /**
   * Cloud provider from which to migrate data. Use 'telnyx' if you want to migrate
   * data from one Telnyx bucket to another.
   */
  provider: 'aws' | 'telnyx';

  provider_auth: MigrationSourceParams.ProviderAuth;

  /**
   * Unique identifier for the data migration source.
   */
  id?: string;

  /**
   * For intra-Telnyx buckets migration, specify the source bucket region in this
   * field.
   */
  source_region?: string;
}

export namespace MigrationSourceParams {
  export interface ProviderAuth {
    /**
     * AWS Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key here.
     */
    access_key?: string;

    /**
     * AWS Secret Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key
     * here as well.
     */
    secret_access_key?: string;
  }
}

export interface MigrationSourceCreateResponse {
  data?: MigrationSourceParams;
}

export interface MigrationSourceRetrieveResponse {
  data?: MigrationSourceParams;
}

export interface MigrationSourceListResponse {
  data?: Array<MigrationSourceParams>;

  meta?: UsageAPI.PaginationMetaSimple;
}

export interface MigrationSourceDeleteResponse {
  data?: MigrationSourceParams;
}

export interface MigrationSourceCreateParams {
  /**
   * Bucket name to migrate the data from.
   */
  bucket_name: string;

  /**
   * Cloud provider from which to migrate data. Use 'telnyx' if you want to migrate
   * data from one Telnyx bucket to another.
   */
  provider: 'aws' | 'telnyx';

  provider_auth: MigrationSourceCreateParams.ProviderAuth;

  /**
   * For intra-Telnyx buckets migration, specify the source bucket region in this
   * field.
   */
  source_region?: string;
}

export namespace MigrationSourceCreateParams {
  export interface ProviderAuth {
    /**
     * AWS Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key here.
     */
    access_key?: string;

    /**
     * AWS Secret Access Key. For Telnyx-to-Telnyx migrations, use your Telnyx API key
     * here as well.
     */
    secret_access_key?: string;
  }
}

export declare namespace MigrationSources {
  export {
    type MigrationSourceParams as MigrationSourceParams,
    type MigrationSourceCreateResponse as MigrationSourceCreateResponse,
    type MigrationSourceRetrieveResponse as MigrationSourceRetrieveResponse,
    type MigrationSourceListResponse as MigrationSourceListResponse,
    type MigrationSourceDeleteResponse as MigrationSourceDeleteResponse,
    type MigrationSourceCreateParams as MigrationSourceCreateParams,
  };
}
