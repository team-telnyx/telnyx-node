// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Usecase extends APIResource {
  /**
   * Get Campaign Cost
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging10dlc.campaign.usecase.getCost({
   *     usecase: 'usecase',
   *   });
   * ```
   */
  getCost(query: UsecaseGetCostParams, options?: RequestOptions): APIPromise<UsecaseGetCostResponse> {
    return this._client.get('/10dlc/campaign/usecase/cost', { query, ...options });
  }
}

export interface UsecaseGetCostResponse {
  campaignUsecase: string;

  description: string;

  monthlyCost: string;

  upFrontCost: string;
}

export interface UsecaseGetCostParams {
  usecase: string;
}

export declare namespace Usecase {
  export {
    type UsecaseGetCostResponse as UsecaseGetCostResponse,
    type UsecaseGetCostParams as UsecaseGetCostParams,
  };
}
