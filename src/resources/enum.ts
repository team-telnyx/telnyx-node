// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Enum extends APIResource {
  /**
   * Get Enum
   */
  retrieve(
    endpoint:
      | 'mno'
      | 'optionalAttributes'
      | 'usecase'
      | 'vertical'
      | 'altBusinessIdType'
      | 'brandIdentityStatus'
      | 'brandRelationship'
      | 'campaignStatus'
      | 'entityType'
      | 'extVettingProvider'
      | 'vettingStatus'
      | 'brandStatus'
      | 'operationStatus'
      | 'approvedPublicCompany'
      | 'stockExchange'
      | 'vettingClass',
    options?: RequestOptions,
  ): APIPromise<EnumRetrieveResponse> {
    return this._client.get(path`/10dlc/enum/${endpoint}`, options);
  }
}

export type EnumRetrieveResponse = Array<string | unknown> | unknown | unknown;

export declare namespace Enum {
  export { type EnumRetrieveResponse as EnumRetrieveResponse };
}
