// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Osr extends APIResource {
  /**
   * Get My Osr Campaign Attributes
   *
   * @example
   * ```ts
   * const response = await client.campaign.osr.getAttributes(
   *   'campaignId',
   * );
   * ```
   */
  getAttributes(campaignID: string, options?: RequestOptions): APIPromise<OsrGetAttributesResponse> {
    return this._client.get(path`/campaign/${campaignID}/osr/attributes`, options);
  }
}

export type OsrGetAttributesResponse = { [key: string]: unknown };

export declare namespace Osr {
  export { type OsrGetAttributesResponse as OsrGetAttributesResponse };
}
