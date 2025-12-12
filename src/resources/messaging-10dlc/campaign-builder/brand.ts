// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Brand extends APIResource {
  /**
   * This endpoint allows you to see whether or not the supplied brand is suitable
   * for your desired campaign use case.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging10dlc.campaignBuilder.brand.qualifyByUsecase(
   *     'usecase',
   *     { brandId: 'brandId' },
   *   );
   * ```
   */
  qualifyByUsecase(
    usecase: string,
    params: BrandQualifyByUsecaseParams,
    options?: RequestOptions,
  ): APIPromise<BrandQualifyByUsecaseResponse> {
    const { brandId } = params;
    return this._client.get(path`/10dlc/campaignBuilder/brand/${brandId}/usecase/${usecase}`, options);
  }
}

export interface BrandQualifyByUsecaseResponse {
  /**
   * Campaign annual subscription fee
   */
  annualFee?: number;

  /**
   * Maximum number of sub-usecases declaration required.
   */
  maxSubUsecases?: number;

  /**
   * Minimum number of sub-usecases declaration required.
   */
  minSubUsecases?: number;

  /**
   * Map of usecase metadata for each MNO. Key is the network ID of the MNO (e.g.
   * 10017), Value is the mno metadata for the usecase.
   */
  mnoMetadata?: { [key: string]: unknown };

  /**
   * Campaign monthly subscription fee
   */
  monthlyFee?: number;

  /**
   * Campaign quarterly subscription fee
   */
  quarterlyFee?: number;

  /**
   * Campaign usecase
   */
  usecase?: string;
}

export interface BrandQualifyByUsecaseParams {
  brandId: string;
}

export declare namespace Brand {
  export {
    type BrandQualifyByUsecaseResponse as BrandQualifyByUsecaseResponse,
    type BrandQualifyByUsecaseParams as BrandQualifyByUsecaseParams,
  };
}
