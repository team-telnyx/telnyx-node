// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ExternalVetting extends APIResource {
  /**
   * Get list of valid external vetting record for a given brand
   *
   * @example
   * ```ts
   * const externalVettings =
   *   await client.brand.externalVetting.list('brandId');
   * ```
   */
  list(brandID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/brand/${brandID}/externalVetting`, options);
  }

  /**
   * This operation can be used to import an external vetting record from a
   * TCR-approved vetting provider. If the vetting provider confirms validity of the
   * record, it will be saved with the brand and will be considered for future
   * campaign qualification.
   *
   * @example
   * ```ts
   * const response = await client.brand.externalVetting.import(
   *   'brandId',
   *   { evpId: 'evpId', vettingId: 'vettingId' },
   * );
   * ```
   */
  import(
    brandID: string,
    body: ExternalVettingImportParams,
    options?: RequestOptions,
  ): APIPromise<ExternalVettingImportResponse> {
    return this._client.put(path`/brand/${brandID}/externalVetting`, { body, ...options });
  }

  /**
   * Order new external vetting for a brand
   *
   * @example
   * ```ts
   * const response = await client.brand.externalVetting.order(
   *   'brandId',
   *   { evpId: 'evpId', vettingClass: 'vettingClass' },
   * );
   * ```
   */
  order(brandID: string, body: ExternalVettingOrderParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(path`/brand/${brandID}/externalVetting`, { body, ...options });
  }
}

export type ExternalVettingListResponse = unknown;

export interface ExternalVettingImportResponse {
  /**
   * Vetting submission date. This is the date when the vetting request is generated
   * in ISO 8601 format.
   */
  createDate?: string;

  /**
   * External vetting provider ID for the brand.
   */
  evpId?: string;

  /**
   * Vetting effective date. This is the date when vetting was completed, or the
   * starting effective date in ISO 8601 format. If this date is missing, then the
   * vetting was not complete or not valid.
   */
  vettedDate?: string;

  /**
   * Identifies the vetting classification.
   */
  vettingClass?: string;

  /**
   * Unique ID that identifies a vetting transaction performed by a vetting provider.
   * This ID is provided by the vetting provider at time of vetting.
   */
  vettingId?: string;

  /**
   * Vetting score ranging from 0-100.
   */
  vettingScore?: number;

  /**
   * Required by some providers for vetting record confirmation.
   */
  vettingToken?: string;
}

export type ExternalVettingOrderResponse = unknown;

export interface ExternalVettingImportParams {
  /**
   * External vetting provider ID for the brand.
   */
  evpId: string;

  /**
   * Unique ID that identifies a vetting transaction performed by a vetting provider.
   * This ID is provided by the vetting provider at time of vetting.
   */
  vettingId: string;

  /**
   * Required by some providers for vetting record confirmation.
   */
  vettingToken?: string;
}

export interface ExternalVettingOrderParams {
  /**
   * External vetting provider ID for the brand.
   */
  evpId: string;

  /**
   * Identifies the vetting classification.
   */
  vettingClass: string;
}

export declare namespace ExternalVetting {
  export {
    type ExternalVettingListResponse as ExternalVettingListResponse,
    type ExternalVettingImportResponse as ExternalVettingImportResponse,
    type ExternalVettingOrderResponse as ExternalVettingOrderResponse,
    type ExternalVettingImportParams as ExternalVettingImportParams,
    type ExternalVettingOrderParams as ExternalVettingOrderParams,
  };
}
