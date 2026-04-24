// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class NumbersFeatures extends APIResource {
  /**
   * Retrieve the features for a list of numbers
   */
  create(
    body: NumbersFeatureCreateParams,
    options?: RequestOptions,
  ): APIPromise<NumbersFeatureCreateResponse> {
    return this._client.post('/numbers_features', { body, ...options });
  }
}

export interface NumbersFeatureCreateResponse {
  data?: Array<NumbersFeatureCreateResponse.Data>;
}

export namespace NumbersFeatureCreateResponse {
  export interface Data {
    features: Array<string>;

    phone_number: string;
  }
}

export interface NumbersFeatureCreateParams {
  phone_numbers: Array<string>;
}

export declare namespace NumbersFeatures {
  export {
    type NumbersFeatureCreateResponse as NumbersFeatureCreateResponse,
    type NumbersFeatureCreateParams as NumbersFeatureCreateParams,
  };
}
