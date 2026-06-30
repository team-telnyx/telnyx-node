// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgreementsAPI from './agreements';
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
  agree(options?: RequestOptions): APIPromise<AgreementsAPI.TosAgreementWrapped> {
    return this._client.post('/terms_of_service/branded_calling/agree', options);
  }
}
