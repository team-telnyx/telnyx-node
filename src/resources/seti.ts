// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Seti extends APIResource {
  /**
   * Returns the results of the various black box tests
   */
  retrieveBlackBoxTestResults(
    query: SetiRetrieveBlackBoxTestResultsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SetiRetrieveBlackBoxTestResultsResponse> {
    return this._client.get('/seti/black_box_test_results', { query, ...options });
  }
}

export interface SetiRetrieveBlackBoxTestResultsResponse {
  data?: Array<SetiRetrieveBlackBoxTestResultsResponse.Data>;
}

export namespace SetiRetrieveBlackBoxTestResultsResponse {
  export interface Data {
    black_box_tests?: Array<Data.BlackBoxTest>;

    /**
     * The product associated with the black box test group.
     */
    product?: string;

    record_type?: string;
  }

  export namespace Data {
    export interface BlackBoxTest {
      /**
       * The name of the black box test.
       */
      id?: string;

      record_type?: string;

      /**
       * The average result of the black box test over the last hour.
       */
      result?: number;
    }
  }
}

export interface SetiRetrieveBlackBoxTestResultsParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[product]
   */
  filter?: SetiRetrieveBlackBoxTestResultsParams.Filter;
}

export namespace SetiRetrieveBlackBoxTestResultsParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[product]
   */
  export interface Filter {
    /**
     * Filter results for a specific product.
     */
    product?: string;
  }
}

export declare namespace Seti {
  export {
    type SetiRetrieveBlackBoxTestResultsResponse as SetiRetrieveBlackBoxTestResultsResponse,
    type SetiRetrieveBlackBoxTestResultsParams as SetiRetrieveBlackBoxTestResultsParams,
  };
}
