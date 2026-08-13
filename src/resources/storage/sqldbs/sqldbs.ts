// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ActionsAPI from './actions';
import { ActionQueryParams, ActionQueryResponse, Actions } from './actions';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage SQL databases and run SQL against them
 */
export class Sqldbs extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Lists the SQL databases for the authenticated user's organization. Results use
   * page-based pagination (`page[number]`/`page[size]`) and can be filtered and
   * sorted.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sqlDatabase of client.storage.sqldbs.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SqldbListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SqlDatabasesDefaultFlatPagination, SqlDatabase> {
    return this._client.getAPIList('/storage/sqldbs', DefaultFlatPagination<SqlDatabase>, {
      query,
      ...options,
    });
  }

  /**
   * Creates a new SQL database. Provisioning is asynchronous: the database is
   * returned with status `pending` and becomes usable once it reaches
   * `provision_ok`.
   *
   * @example
   * ```ts
   * const sqlDatabaseResponseWrapper =
   *   await client.storage.sqldbs.create({
   *     name: 'my-database',
   *   });
   * ```
   */
  create(body: SqldbCreateParams, options?: RequestOptions): APIPromise<SqlDatabaseResponseWrapper> {
    return this._client.post('/storage/sqldbs', { body, ...options });
  }

  /**
   * Deletes a SQL database and all of the data it holds. Deletion is asynchronous
   * and returns `202` with an empty body — the record is not removed synchronously.
   * Poll `GET /storage/sqldbs/{id}`, which returns `404` once the database has been
   * purged; there is no durable `deleted` state. A database still bound by a
   * function is refused with `409` unless `force=true`.
   *
   * @example
   * ```ts
   * await client.storage.sqldbs.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(
    id: string,
    params: SqldbDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    const { force } = params ?? {};
    return this._client.delete(path`/storage/sqldbs/${id}`, {
      query: { force },
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieves a SQL database by its ID, including its provisioning status.
   *
   * @example
   * ```ts
   * const sqlDatabaseResponseWrapper =
   *   await client.storage.sqldbs.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<SqlDatabaseResponseWrapper> {
    return this._client.get(path`/storage/sqldbs/${id}`, options);
  }
}

export type SqlDatabasesDefaultFlatPagination = DefaultFlatPagination<SqlDatabase>;

export interface SqlDatabase {
  id?: string;

  created_at?: string;

  name?: string;

  record_type?: string;

  /**
   * Provisioning status. A database is usable once `status` is `provision_ok`. Once
   * deletion completes, the database no longer appears in the API.
   */
  status?: 'pending' | 'provision_ok' | 'provision_failed' | 'deleting' | 'delete_failed';

  updated_at?: string;
}

export interface SqlDatabaseResponseWrapper {
  data?: SqlDatabase;
}

export interface SqldbListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by exact name match.
   */
  'filter[name]'?: string;

  /**
   * Filter by provisioning status.
   */
  'filter[status]'?: 'pending' | 'provision_ok' | 'provision_failed' | 'deleting' | 'delete_failed';

  /**
   * Sort field; prefix with `-` for descending order.
   */
  sort?: 'name' | '-name' | 'status' | '-status' | 'created_at' | '-created_at';
}

export interface SqldbCreateParams {
  /**
   * Database name. Lowercase letters, numbers, and hyphens only; must start and end
   * with a letter or number.
   */
  name: string;
}

export interface SqldbDeleteParams {
  /**
   * Delete the database even when functions still bind it. Their bindings stop
   * resolving.
   */
  force?: boolean;
}

Sqldbs.Actions = Actions;

export declare namespace Sqldbs {
  export {
    type SqlDatabase as SqlDatabase,
    type SqlDatabaseResponseWrapper as SqlDatabaseResponseWrapper,
    type SqlDatabasesDefaultFlatPagination as SqlDatabasesDefaultFlatPagination,
    type SqldbListParams as SqldbListParams,
    type SqldbCreateParams as SqldbCreateParams,
    type SqldbDeleteParams as SqldbDeleteParams,
  };

  export {
    Actions as Actions,
    type ActionQueryResponse as ActionQueryResponse,
    type ActionQueryParams as ActionQueryParams,
  };
}
