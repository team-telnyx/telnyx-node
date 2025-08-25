// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Actions extends APIResource {
  /**
   * Permanently deletes a list of call recordings.
   *
   * @example
   * ```ts
   * await client.recordings.actions.delete({
   *   ids: [
   *     '428c31b6-7af4-4bcb-b7f5-5013ef9657c1',
   *     '428c31b6-7af4-4bcb-b7f5-5013ef9657c2',
   *   ],
   * });
   * ```
   */
  delete(body: ActionDeleteParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/recordings/actions/delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ActionDeleteParams {
  /**
   * List of call recording IDs to delete.
   */
  ids: Array<string>;
}

export declare namespace Actions {
  export { type ActionDeleteParams as ActionDeleteParams };
}
