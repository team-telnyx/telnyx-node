// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgreementsAPI from './agreements';
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
  agree(options?: RequestOptions): APIPromise<AgreementsAPI.TosAgreementWrapped> {
    return this._client.post('/terms_of_service/number_reputation/agree', options);
  }
}
