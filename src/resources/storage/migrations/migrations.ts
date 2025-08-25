// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UsageAPI from '../buckets/usage';
import * as ActionsAPI from './actions';
import { ActionStopResponse, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Migrations extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Initiate a migration of data from an external provider into Telnyx Cloud
   * Storage. Currently, only S3 is supported.
   *
   * @example
   * ```ts
   * const migration = await client.storage.migrations.create({
   *   source_id: 'source_id',
   *   target_bucket_name: 'target_bucket_name',
   *   target_region: 'target_region',
   * });
   * ```
   */
  create(body: MigrationCreateParams, options?: RequestOptions): APIPromise<MigrationCreateResponse> {
    return this._client.post('/storage/migrations', { body, ...options });
  }

  /**
   * Get a Migration
   *
   * @example
   * ```ts
   * const migration = await client.storage.migrations.retrieve(
   *   '',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MigrationRetrieveResponse> {
    return this._client.get(path`/storage/migrations/${id}`, options);
  }

  /**
   * List all Migrations
   *
   * @example
   * ```ts
   * const migrations = await client.storage.migrations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<MigrationListResponse> {
    return this._client.get('/storage/migrations', options);
  }
}

export interface MigrationParams {
  /**
   * ID of the Migration Source from which to migrate data.
   */
  source_id: string;

  /**
   * Bucket name to migrate the data into. Will default to the same name as the
   * `source_bucket_name`.
   */
  target_bucket_name: string;

  /**
   * Telnyx Cloud Storage region to migrate the data to.
   */
  target_region: string;

  /**
   * Unique identifier for the data migration.
   */
  id?: string;

  /**
   * Total amount of data that has been succesfully migrated.
   */
  bytes_migrated?: number;

  /**
   * Total amount of data found in source bucket to migrate.
   */
  bytes_to_migrate?: number;

  /**
   * Time when data migration was created
   */
  created_at?: string;

  /**
   * Estimated time the migration will complete.
   */
  eta?: string;

  /**
   * Time when data migration was last copied from the source.
   */
  last_copy?: string;

  /**
   * If true, will continue to poll the source bucket to ensure new data is
   * continually migrated over.
   */
  refresh?: boolean;

  /**
   * Current speed of the migration.
   */
  speed?: number;

  /**
   * Status of the migration.
   */
  status?: 'pending' | 'checking' | 'migrating' | 'complete' | 'error' | 'stopped';
}

export interface MigrationCreateResponse {
  data?: MigrationParams;
}

export interface MigrationRetrieveResponse {
  data?: MigrationParams;
}

export interface MigrationListResponse {
  data?: Array<MigrationParams>;

  meta?: UsageAPI.PaginationMetaSimple;
}

export interface MigrationCreateParams {
  /**
   * ID of the Migration Source from which to migrate data.
   */
  source_id: string;

  /**
   * Bucket name to migrate the data into. Will default to the same name as the
   * `source_bucket_name`.
   */
  target_bucket_name: string;

  /**
   * Telnyx Cloud Storage region to migrate the data to.
   */
  target_region: string;

  /**
   * If true, will continue to poll the source bucket to ensure new data is
   * continually migrated over.
   */
  refresh?: boolean;
}

Migrations.Actions = Actions;

export declare namespace Migrations {
  export {
    type MigrationParams as MigrationParams,
    type MigrationCreateResponse as MigrationCreateResponse,
    type MigrationRetrieveResponse as MigrationRetrieveResponse,
    type MigrationListResponse as MigrationListResponse,
    type MigrationCreateParams as MigrationCreateParams,
  };

  export { Actions as Actions, type ActionStopResponse as ActionStopResponse };
}
