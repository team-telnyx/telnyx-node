// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MigrationSourcesAPI from './migration-sources';
import {
  MigrationSourceCreateParams,
  MigrationSourceCreateResponse,
  MigrationSourceDeleteResponse,
  MigrationSourceListResponse,
  MigrationSourceParams,
  MigrationSourceRetrieveResponse,
  MigrationSources,
} from './migration-sources';
import * as BucketsAPI from './buckets/buckets';
import { BucketCreatePresignedURLParams, BucketCreatePresignedURLResponse, Buckets } from './buckets/buckets';
import * as UsageAPI from './buckets/usage';
import * as CloudfsAPI from './cloudfs/cloudfs';
import {
  CloudfCreateParams,
  CloudfListParams,
  CloudfListResponse,
  CloudfUpdateParams,
  Cloudfs,
  CloudfsFilesystem,
  CloudfsFilesystemDetail,
  CloudfsFilesystemDetailResponseWrapper,
  CloudfsFilesystemResponseWrapper,
  CloudfsFilesystemStatus,
} from './cloudfs/cloudfs';
import * as KvsAPI from './kvs/kvs';
import {
  EdgeComputePaginationMeta,
  KvCreateParams,
  KvListParams,
  KvNamespace,
  KvNamespaceResponseWrapper,
  KvNamespacesDefaultFlatPagination,
  Kvs,
} from './kvs/kvs';
import * as MigrationsAPI from './migrations/migrations';
import {
  MigrationCreateParams,
  MigrationCreateResponse,
  MigrationListResponse,
  MigrationParams,
  MigrationRetrieveResponse,
  Migrations,
} from './migrations/migrations';
import * as SqldbsAPI from './sqldbs/sqldbs';
import {
  SqlDatabase,
  SqlDatabaseResponseWrapper,
  SqlDatabasesDefaultFlatPagination,
  SqldbCreateParams,
  SqldbDeleteParams,
  SqldbListParams,
  Sqldbs,
} from './sqldbs/sqldbs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Migrate data from an external provider into Telnyx Cloud Storage
 */
export class Storage extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  migrationSources: MigrationSourcesAPI.MigrationSources = new MigrationSourcesAPI.MigrationSources(
    this._client,
  );
  migrations: MigrationsAPI.Migrations = new MigrationsAPI.Migrations(this._client);
  kvs: KvsAPI.Kvs = new KvsAPI.Kvs(this._client);
  cloudfs: CloudfsAPI.Cloudfs = new CloudfsAPI.Cloudfs(this._client);
  sqldbs: SqldbsAPI.Sqldbs = new SqldbsAPI.Sqldbs(this._client);

  /**
   * List the external storage providers and regions supported as migration sources.
   *
   * @example
   * ```ts
   * const response =
   *   await client.storage.listMigrationSourceCoverage();
   * ```
   */
  listMigrationSourceCoverage(
    options?: RequestOptions,
  ): APIPromise<StorageListMigrationSourceCoverageResponse> {
    return this._client.get('/storage/migration_source_coverage', options);
  }
}

export interface StorageListMigrationSourceCoverageResponse {
  data?: Array<StorageListMigrationSourceCoverageResponse.Data>;

  meta?: UsageAPI.PaginationMetaSimple;
}

export namespace StorageListMigrationSourceCoverageResponse {
  export interface Data {
    /**
     * Cloud provider from which to migrate data.
     */
    provider?: 'aws';

    /**
     * Provider region from which to migrate data.
     */
    source_region?: string;
  }
}

Storage.Buckets = Buckets;
Storage.MigrationSources = MigrationSources;
Storage.Migrations = Migrations;
Storage.Kvs = Kvs;
Storage.Cloudfs = Cloudfs;
Storage.Sqldbs = Sqldbs;

export declare namespace Storage {
  export { type StorageListMigrationSourceCoverageResponse as StorageListMigrationSourceCoverageResponse };

  export {
    Buckets as Buckets,
    type BucketCreatePresignedURLResponse as BucketCreatePresignedURLResponse,
    type BucketCreatePresignedURLParams as BucketCreatePresignedURLParams,
  };

  export {
    MigrationSources as MigrationSources,
    type MigrationSourceParams as MigrationSourceParams,
    type MigrationSourceCreateResponse as MigrationSourceCreateResponse,
    type MigrationSourceRetrieveResponse as MigrationSourceRetrieveResponse,
    type MigrationSourceListResponse as MigrationSourceListResponse,
    type MigrationSourceDeleteResponse as MigrationSourceDeleteResponse,
    type MigrationSourceCreateParams as MigrationSourceCreateParams,
  };

  export {
    Migrations as Migrations,
    type MigrationParams as MigrationParams,
    type MigrationCreateResponse as MigrationCreateResponse,
    type MigrationRetrieveResponse as MigrationRetrieveResponse,
    type MigrationListResponse as MigrationListResponse,
    type MigrationCreateParams as MigrationCreateParams,
  };

  export {
    Kvs as Kvs,
    type EdgeComputePaginationMeta as EdgeComputePaginationMeta,
    type KvNamespace as KvNamespace,
    type KvNamespaceResponseWrapper as KvNamespaceResponseWrapper,
    type KvNamespacesDefaultFlatPagination as KvNamespacesDefaultFlatPagination,
    type KvListParams as KvListParams,
    type KvCreateParams as KvCreateParams,
  };

  export {
    Cloudfs as Cloudfs,
    type CloudfsFilesystem as CloudfsFilesystem,
    type CloudfsFilesystemDetail as CloudfsFilesystemDetail,
    type CloudfsFilesystemDetailResponseWrapper as CloudfsFilesystemDetailResponseWrapper,
    type CloudfsFilesystemResponseWrapper as CloudfsFilesystemResponseWrapper,
    type CloudfsFilesystemStatus as CloudfsFilesystemStatus,
    type CloudfListResponse as CloudfListResponse,
    type CloudfListParams as CloudfListParams,
    type CloudfCreateParams as CloudfCreateParams,
    type CloudfUpdateParams as CloudfUpdateParams,
  };

  export {
    Sqldbs as Sqldbs,
    type SqlDatabase as SqlDatabase,
    type SqlDatabaseResponseWrapper as SqlDatabaseResponseWrapper,
    type SqlDatabasesDefaultFlatPagination as SqlDatabasesDefaultFlatPagination,
    type SqldbListParams as SqldbListParams,
    type SqldbCreateParams as SqldbCreateParams,
    type SqldbDeleteParams as SqldbDeleteParams,
  };
}
