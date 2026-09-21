// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Noise suppression engines that can be selected when configuring noise suppression on voice connections.
 */
export class NoiseSuppressionEngines extends APIResource {
  /**
   * Returns all noise suppression engines available to the authenticated user.
   * Engines gated behind a feature flag are included only when the flag is enabled
   * for the user's account. Results are not paginated; the number of engines is
   * expected to remain small.
   */
  list(options?: RequestOptions): APIPromise<NoiseSuppressionEngineListResponse> {
    return this._client.get('/noise_suppression_engines', options);
  }
}

export interface NoiseSuppressionEngineListResponse {
  data: Array<NoiseSuppressionEngineListResponse.Data>;
}

export namespace NoiseSuppressionEngineListResponse {
  /**
   * A noise suppression engine available to the authenticated user.
   */
  export interface Data {
    /**
     * Default attenuation level of the engine (0-100, in multiples of ten).
     */
    default_attenuation_level: number;

    /**
     * Human-readable name of the engine.
     */
    label: string;

    /**
     * Machine-readable identifier of the engine, used when configuring noise
     * suppression.
     */
    value: string;
  }
}

export declare namespace NoiseSuppressionEngines {
  export { type NoiseSuppressionEngineListResponse as NoiseSuppressionEngineListResponse };
}
