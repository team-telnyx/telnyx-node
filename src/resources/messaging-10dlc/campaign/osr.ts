// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Osr extends APIResource {
  /**
   * Get OSR campaign attributes
   *
   * @example
   * ```ts
   * const response =
   *   await client.messaging10dlc.campaign.osr.getAttributes(
   *     'campaignId',
   *   );
   * ```
   */
  getAttributes(campaignID: string, options?: RequestOptions): APIPromise<OsrGetAttributesResponse> {
    return this._client.get(path`/10dlc/campaign/${campaignID}/osr/attributes`, options);
  }
}

export type OsrGetAttributesResponse = { [key: string]: unknown };

export declare namespace Osr {
  export { type OsrGetAttributesResponse as OsrGetAttributesResponse };
}
