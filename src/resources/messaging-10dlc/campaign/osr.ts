// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Campaign operations
 */
export class Osr extends APIResource {
  /**
   * Returns the optional shared-responsibility attributes recorded for the campaign.
   * Use these values to inspect the campaign configuration submitted to the
   * registry.
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
