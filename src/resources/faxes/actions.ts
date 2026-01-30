// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Cancel the outbound fax that is in one of the following states: `queued`,
   * `media.processed`, `originated` or `sending`
   *
   * @example
   * ```ts
   * const response = await client.faxes.actions.cancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<ActionCancelResponse> {
    return this._client.post(path`/faxes/${id}/actions/cancel`, options);
  }

  /**
   * Refreshes the inbound fax's media_url when it has expired
   *
   * @example
   * ```ts
   * const response = await client.faxes.actions.refresh(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  refresh(id: string, options?: RequestOptions): APIPromise<ActionRefreshResponse> {
    return this._client.post(path`/faxes/${id}/actions/refresh`, options);
  }
}

export interface ActionCancelResponse {
  data?: ActionCancelResponse.Data;
}

export namespace ActionCancelResponse {
  export interface Data {
    result?: string;
  }
}

export interface ActionRefreshResponse {
  data?: ActionRefreshResponse.Data;
}

export namespace ActionRefreshResponse {
  export interface Data {
    result?: string;
  }
}

export declare namespace Actions {
  export {
    type ActionCancelResponse as ActionCancelResponse,
    type ActionRefreshResponse as ActionRefreshResponse,
  };
}
