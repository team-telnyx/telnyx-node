// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Actions extends APIResource {
  /**
   * This endpoint will make an asynchronous request to refresh the Operator Connect
   * integration with Microsoft Teams for the current user. This will create new
   * external connections on the user's account if needed, and/or report the
   * integration results as
   * [log messages](https://developers.telnyx.com/api-reference/external-connections/list-all-log-messages#list-all-log-messages).
   */
  refresh(options?: RequestOptions): APIPromise<ActionRefreshResponse> {
    return this._client.post('/operator_connect/actions/refresh', options);
  }
}

export interface ActionRefreshResponse {
  /**
   * A message describing the result of the operation
   */
  message?: string;

  /**
   * Describes wether or not the operation was successful
   */
  success?: boolean;
}

export declare namespace Actions {
  export { type ActionRefreshResponse as ActionRefreshResponse };
}
