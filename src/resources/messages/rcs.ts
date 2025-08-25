// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rcs extends APIResource {
  /**
   * Generate a deeplink URL that can be used to start an RCS conversation with a
   * specific agent.
   *
   * @example
   * ```ts
   * const response = await client.messages.rcs.generateDeeplink(
   *   'agent_id',
   * );
   * ```
   */
  generateDeeplink(
    agentID: string,
    query: RcGenerateDeeplinkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RcGenerateDeeplinkResponse> {
    return this._client.get(path`/messages/rcs/deeplinks/${agentID}`, { query, ...options });
  }
}

export interface RcGenerateDeeplinkResponse {
  data: RcGenerateDeeplinkResponse.Data;
}

export namespace RcGenerateDeeplinkResponse {
  export interface Data {
    /**
     * The generated deeplink URL
     */
    url: string;
  }
}

export interface RcGenerateDeeplinkParams {
  /**
   * Pre-filled message body (URL encoded)
   */
  body?: string;

  /**
   * Phone number in E164 format (URL encoded)
   */
  phone_number?: string;
}

export declare namespace Rcs {
  export {
    type RcGenerateDeeplinkResponse as RcGenerateDeeplinkResponse,
    type RcGenerateDeeplinkParams as RcGenerateDeeplinkParams,
  };
}
