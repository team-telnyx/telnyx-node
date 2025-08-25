// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PortabilityChecks extends APIResource {
  /**
   * Runs a portability check, returning the results immediately.
   *
   * @example
   * ```ts
   * const response = await client.portabilityChecks.run();
   * ```
   */
  run(body: PortabilityCheckRunParams, options?: RequestOptions): APIPromise<PortabilityCheckRunResponse> {
    return this._client.post('/portability_checks', { body, ...options });
  }
}

export interface PortabilityCheckRunResponse {
  data?: Array<PortabilityCheckRunResponse.Data>;
}

export namespace PortabilityCheckRunResponse {
  export interface Data {
    /**
     * Indicates whether this phone number is FastPort eligible
     */
    fast_portable?: boolean;

    /**
     * If this phone number is not portable, explains why. Empty string if the number
     * is portable.
     */
    not_portable_reason?: string;

    /**
     * The +E.164 formatted phone number this result is about
     */
    phone_number?: string;

    /**
     * Indicates whether this phone number is portable
     */
    portable?: boolean;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface PortabilityCheckRunParams {
  /**
   * The list of +E.164 formatted phone numbers to check for portability
   */
  phone_numbers?: Array<string>;
}

export declare namespace PortabilityChecks {
  export {
    type PortabilityCheckRunResponse as PortabilityCheckRunResponse,
    type PortabilityCheckRunParams as PortabilityCheckRunParams,
  };
}
