// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Terms of Service agreement endpoints
 */
export class NumberReputation extends APIResource {
  /**
   * Accept the Terms of Service for the Number Reputation product. Must be called
   * before using Number Reputation endpoints.
   *
   * Returns `400` with error code `10015` if the user has already agreed to the
   * current ToS version.
   */
  agree(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/terms-of-service/number-reputation/agree', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
