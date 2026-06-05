// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Accept and review the Branded Calling and Phone Number Reputation terms of service.
 */
export class NumberReputation extends APIResource {
  /**
   * Records the authenticated user's agreement to the current Phone Number
   * Reputation ToS. No body required. Idempotent.
   *
   * Prerequisite for using any of the `/v2/.../reputation/*` endpoints.
   */
  agree(options?: RequestOptions): APIPromise<NumberReputationAgreeResponse> {
    return this._client.post('/terms_of_service/number_reputation/agree', options);
  }
}

export interface NumberReputationAgreeResponse {
  /**
   * A recorded user agreement to a product's Terms of Service. The `user_id` is
   * intentionally NOT echoed back on this public surface — the caller already knows
   * their own identity.
   */
  data: NumberReputationAgreeResponse.Data;
}

export namespace NumberReputationAgreeResponse {
  /**
   * A recorded user agreement to a product's Terms of Service. The `user_id` is
   * intentionally NOT echoed back on this public surface — the caller already knows
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

export declare namespace NumberReputation {
  export { type NumberReputationAgreeResponse as NumberReputationAgreeResponse };
}
