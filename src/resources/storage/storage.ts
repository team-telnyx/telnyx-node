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
import * as MigrationsAPI from './migrations/migrations';
import {
  MigrationCreateParams,
  MigrationCreateResponse,
  MigrationListResponse,
  MigrationParams,
  MigrationRetrieveResponse,
  Migrations,
} from './migrations/migrations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Storage extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  migrationSources: MigrationSourcesAPI.MigrationSources = new MigrationSourcesAPI.MigrationSources(
    this._client,
  );
  migrations: MigrationsAPI.Migrations = new MigrationsAPI.Migrations(this._client);

  /**
   * List Migration Source coverage
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
}
