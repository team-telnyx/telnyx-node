// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GlobalIPHealthCheckTypes extends APIResource {
  /**
   * List all Global IP Health check types.
   */
  list(options?: RequestOptions): APIPromise<GlobalIPHealthCheckTypeListResponse> {
    return this._client.get('/global_ip_health_check_types', options);
  }
}

export interface GlobalIPHealthCheckTypeListResponse {
  data?: Array<GlobalIPHealthCheckTypeListResponse.Data>;
}

export namespace GlobalIPHealthCheckTypeListResponse {
  export interface Data {
    /**
     * Global IP Health check params.
     */
    health_check_params?: { [key: string]: unknown };

    /**
     * Global IP Health check type.
     */
    health_check_type?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export declare namespace GlobalIPHealthCheckTypes {
  export { type GlobalIPHealthCheckTypeListResponse as GlobalIPHealthCheckTypeListResponse };
}
