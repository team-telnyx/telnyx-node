// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Accept and review the Branded Calling and Phone Number Reputation terms of service.
 */
export class BrandedCalling extends APIResource {
  /**
   * Records the authenticated user's agreement to the current Branded Calling ToS.
   * No body required. Idempotent - re-calling after agreement is a no-op and returns
   * the existing agreement.
   *
   * This is a prerequisite for activating Branded Calling on any enterprise
   * (`POST /enterprises/{id}/branded_calling`); without an agreement, activation
   * returns `403`.
   */
  agree(options?: RequestOptions): APIPromise<BrandedCallingAgreeResponse> {
    return this._client.post('/terms_of_service/branded_calling/agree', options);
  }
}

export interface BrandedCallingAgreeResponse {
  /**
   * A recorded user agreement to a product's Terms of Service. The `user_id` is
   * intentionally NOT echoed back on this public surface - the caller already knows
   * their own identity.
   */
  data: BrandedCallingAgreeResponse.Data;
}

export namespace BrandedCallingAgreeResponse {
  /**
   * A recorded user agreement to a product's Terms of Service. The `user_id` is
   * intentionally NOT echoed back on this public surface - the caller already knows
   * their own identity.
   */
  export interface Data {
    id?: string;

    agreed_at?: string;

    created_at?: string;

    /**
     * Telnyx product the Terms of Service apply to.
     */
    product_type?: 'branded_calling' | 'number_reputation';

    terms_version?: string;

    /**
     * Convenience alias of `terms_version`. Both keys are present on every response.
     */
    version?: string;
  }
}

export declare namespace BrandedCalling {
  export { type BrandedCallingAgreeResponse as BrandedCallingAgreeResponse };
}
