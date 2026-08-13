// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage SQL databases and run SQL against them
 */
export class Actions extends APIResource {
  /**
   * Runs SQL against the database and returns the resulting rows — empty for
   * statements that return none, such as DDL. Bind positional `?` placeholders with
   * `params` rather than interpolating values into the SQL string.
   *
   * @example
   * ```ts
   * const response = await client.storage.sqldbs.actions.query(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { sql: 'SELECT * FROM users WHERE name = ?' },
   * );
   * ```
   */
  query(id: string, body: ActionQueryParams, options?: RequestOptions): APIPromise<ActionQueryResponse> {
    return this._client.post(path`/storage/sqldbs/${id}/actions/query`, { body, ...options });
  }
}

export interface ActionQueryResponse {
  data?: ActionQueryResponse.Data;
}

export namespace ActionQueryResponse {
  export interface Data {
    /**
     * Number of rows returned.
     */
    count?: number;

    /**
     * Wall-clock duration of the request, in milliseconds.
     */
    duration?: number;

    meta?: Data.Meta;

    /**
     * The result rows, each a map of column name to value. Empty for statements that
     * return no rows.
     */
    results?: Array<{ [key: string]: unknown }>;

    success?: boolean;
  }

  export namespace Data {
    export interface Meta {
      /**
       * Number of rows added, changed, or removed by the statement.
       */
      changes?: number;

      /**
       * Wall-clock duration of the statement, in milliseconds.
       */
      duration?: number;

      /**
       * Rowid of the last inserted row, when applicable.
       */
      last_row_id?: number;

      rows_read?: number;

      rows_written?: number;
    }
  }
}

export interface ActionQueryParams {
  /**
   * The SQL to run. Use positional `?` placeholders and supply the values in
   * `params` rather than interpolating them into this string.
   */
  sql: string;

  /**
   * Positional bind parameters, in placeholder order. Each value is a string, a
   * number, a boolean, or null; booleans are cast to `1`/`0`. The count must match
   * the number of `?` placeholders exactly — a mismatch is rejected with 422 rather
   * than binding null for the ones you left out. (Not enforced for multi-statement
   * scripts or named parameters, where the placeholder count is not the number
   * bound.)
   */
  params?: Array<string | number | boolean | null>;
}

export declare namespace Actions {
  export { type ActionQueryResponse as ActionQueryResponse, type ActionQueryParams as ActionQueryParams };
}
