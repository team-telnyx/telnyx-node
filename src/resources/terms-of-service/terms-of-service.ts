// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgreementsAPI from './agreements';
import {
  AgreementListParams,
  Agreements,
  TosAgreement,
  TosAgreementWrapped,
  TosAgreementsDefaultFlatPagination,
  TosProductType,
} from './agreements';
import * as BrandedCallingAPI from './branded-calling';
import { BrandedCalling } from './branded-calling';
import * as NumberReputationAPI from './number-reputation';
import { NumberReputation } from './number-reputation';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * Accept and review the Branded Calling and Phone Number Reputation terms of service.
 */
export class TermsOfService extends APIResource {
  numberReputation: NumberReputationAPI.NumberReputation = new NumberReputationAPI.NumberReputation(
    this._client,
  );
  agreements: AgreementsAPI.Agreements = new AgreementsAPI.Agreements(this._client);
  brandedCalling: BrandedCallingAPI.BrandedCalling = new BrandedCallingAPI.BrandedCalling(this._client);

  /**
   * Returns whether the authenticated user has agreed to the current Terms of
   * Service for the product given by `product_type`. Used during onboarding to
   * decide whether to prompt the user with the ToS dialog before continuing.
   *
   * `agreement_required: true` means the user has not yet agreed (or has agreed to
   * an outdated version) and must agree before using that product's endpoints.
   */
  retrieveStatus(
    query: TermsOfServiceRetrieveStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TermsOfServiceRetrieveStatusResponse> {
    return this._client.get('/terms_of_service/status', { query, ...options });
  }

  /**
   * Returns the available Terms of Service agreements (product, current version,
   * terms URL, effective date). Omit `product_type` to return all products; pass it
   * to scope to one.
   */
  retrieveInfo(
    query: TermsOfServiceRetrieveInfoParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TermsOfServiceRetrieveInfoResponse> {
    return this._client.get('/terms_of_service/info', { query, ...options });
  }
}

export interface TermsOfServiceRetrieveInfoResponse {
  agreements?: Array<TermsOfServiceRetrieveInfoResponse.Agreement>;
}

export namespace TermsOfServiceRetrieveInfoResponse {
  export interface Agreement {
    current_version?: string;

    description?: string;

    effective_date?: string;

    /**
     * Telnyx product the Terms of Service apply to.
     */
    product_type?: AgreementsAPI.TosProductType;

    terms_url?: string;
  }
}

export interface TermsOfServiceRetrieveStatusResponse {
  /**
   * Whether the calling user has agreed to a product's current Terms of Service. The
   * `user_id` is intentionally omitted on this public surface.
   */
  data: TermsOfServiceRetrieveStatusResponse.Data;
}

export namespace TermsOfServiceRetrieveStatusResponse {
  /**
   * Whether the calling user has agreed to a product's current Terms of Service. The
   * `user_id` is intentionally omitted on this public surface.
   */
  export interface Data {
    /**
     * `true` when the user must agree to the latest version before using the product.
     * Equivalent to `!has_agreed`.
     */
    agreement_required: boolean;

    /**
     * Latest published version of the ToS for this product.
     */
    current_terms_version: string;

    /**
     * `true` if the user has agreed to the latest version.
     */
    has_agreed: boolean;

    /**
     * Telnyx product the Terms of Service apply to.
     */
    product_type: AgreementsAPI.TosProductType;

    agreed_at?: string | null;

    /**
     * Version the user previously agreed to (may be older than
     * `current_terms_version`). `null` if the user has never agreed.
     */
    agreed_version?: string | null;
  }
}

export interface TermsOfServiceRetrieveStatusParams {
  /**
   * Which product's ToS to check. Defaults to `branded_calling`.
   */
  product_type?: AgreementsAPI.TosProductType;
}

export interface TermsOfServiceRetrieveInfoParams {
  /**
   * Optional product filter. Omit to return info for all products.
   */
  product_type?: AgreementsAPI.TosProductType;
}

TermsOfService.NumberReputation = NumberReputation;
TermsOfService.Agreements = Agreements;
TermsOfService.BrandedCalling = BrandedCalling;

export declare namespace TermsOfService {
  export {
    type TermsOfServiceRetrieveInfoResponse as TermsOfServiceRetrieveInfoResponse,
    type TermsOfServiceRetrieveStatusResponse as TermsOfServiceRetrieveStatusResponse,
    type TermsOfServiceRetrieveStatusParams as TermsOfServiceRetrieveStatusParams,
    type TermsOfServiceRetrieveInfoParams as TermsOfServiceRetrieveInfoParams,
  };

  export { NumberReputation as NumberReputation };

  export {
    Agreements as Agreements,
    type TosAgreement as TosAgreement,
    type TosAgreementWrapped as TosAgreementWrapped,
    type TosProductType as TosProductType,
    type TosAgreementsDefaultFlatPagination as TosAgreementsDefaultFlatPagination,
    type AgreementListParams as AgreementListParams,
  };

  export { BrandedCalling as BrandedCalling };
}
