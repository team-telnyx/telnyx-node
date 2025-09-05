// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class GlobalIPProtocols extends APIResource {
  /**
   * List all Global IP Protocols
   */
  list(options?: RequestOptions): APIPromise<GlobalIPProtocolListResponse> {
    return this._client.get('/global_ip_protocols', options);
  }
}

export interface GlobalIPProtocolListResponse {
  data?: Array<GlobalIPProtocolListResponse.Data>;
}

export namespace GlobalIPProtocolListResponse {
  export interface Data {
    /**
     * The Global IP Protocol code.
     */
    code?: string;

    /**
     * A name for Global IP Protocol.
     */
    name?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export declare namespace GlobalIPProtocols {
  export { type GlobalIPProtocolListResponse as GlobalIPProtocolListResponse };
}
