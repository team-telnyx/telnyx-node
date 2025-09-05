// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GlobalIPAllowedPorts extends APIResource {
  /**
   * List all Global IP Allowed Ports
   */
  list(options?: RequestOptions): APIPromise<GlobalIPAllowedPortListResponse> {
    return this._client.get('/global_ip_allowed_ports', options);
  }
}

export interface GlobalIPAllowedPortListResponse {
  data?: Array<GlobalIPAllowedPortListResponse.Data>;
}

export namespace GlobalIPAllowedPortListResponse {
  export interface Data {
    /**
     * Identifies the resource.
     */
    id?: string;

    /**
     * First port of a range.
     */
    first_port?: number;

    /**
     * Last port of a range.
     */
    last_port?: number;

    /**
     * A name for the Global IP ports range.
     */
    name?: string;

    /**
     * The Global IP Protocol code.
     */
    protocol_code?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export declare namespace GlobalIPAllowedPorts {
  export { type GlobalIPAllowedPortListResponse as GlobalIPAllowedPortListResponse };
}
