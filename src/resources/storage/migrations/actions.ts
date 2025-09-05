// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MigrationsAPI from './migrations';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Stop a Migration
   *
   * @example
   * ```ts
   * const response =
   *   await client.storage.migrations.actions.stop('');
   * ```
   */
  stop(id: string, options?: RequestOptions): APIPromise<ActionStopResponse> {
    return this._client.post(path`/storage/migrations/${id}/actions/stop`, options);
  }
}

export interface ActionStopResponse {
  data?: MigrationsAPI.MigrationParams;
}

export declare namespace Actions {
  export { type ActionStopResponse as ActionStopResponse };
}
