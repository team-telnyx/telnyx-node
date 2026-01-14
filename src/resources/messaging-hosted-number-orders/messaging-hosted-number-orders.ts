// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { MessagingHostedNumberOrdersDefaultFlatPagination } from '../shared';
import * as ActionsAPI from './actions';
import { ActionUploadFileParams, ActionUploadFileResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MessagingHostedNumberOrders extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Create a messaging hosted number order
   *
   * @example
   * ```ts
   * const messagingHostedNumberOrder =
   *   await client.messagingHostedNumberOrders.create();
   * ```
   */
  create(
    body: MessagingHostedNumberOrderCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingHostedNumberOrderCreateResponse> {
    return this._client.post('/messaging_hosted_number_orders', { body, ...options });
  }

  /**
   * Retrieve a messaging hosted number order
   *
   * @example
   * ```ts
   * const messagingHostedNumberOrder =
   *   await client.messagingHostedNumberOrders.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingHostedNumberOrderRetrieveResponse> {
    return this._client.get(path`/messaging_hosted_number_orders/${id}`, options);
  }

  /**
   * List messaging hosted number orders
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const messagingHostedNumberOrder of client.messagingHostedNumberOrders.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MessagingHostedNumberOrderListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagingHostedNumberOrdersDefaultFlatPagination, Shared.MessagingHostedNumberOrder> {
    return this._client.getAPIList(
      '/messaging_hosted_number_orders',
      DefaultFlatPagination<Shared.MessagingHostedNumberOrder>,
      { query, ...options },
    );
  }

  /**
   * Delete a messaging hosted number order and all associated phone numbers.
   *
   * @example
   * ```ts
   * const messagingHostedNumberOrder =
   *   await client.messagingHostedNumberOrders.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessagingHostedNumberOrderDeleteResponse> {
    return this._client.delete(path`/messaging_hosted_number_orders/${id}`, options);
  }

  /**
   * Check hosted messaging eligibility
   *
   * @example
   * ```ts
   * const response =
   *   await client.messagingHostedNumberOrders.checkEligibility(
   *     { phone_numbers: ['string'] },
   *   );
   * ```
   */
  checkEligibility(
    body: MessagingHostedNumberOrderCheckEligibilityParams,
    options?: RequestOptions,
  ): APIPromise<MessagingHostedNumberOrderCheckEligibilityResponse> {
    return this._client.post('/messaging_hosted_number_orders/eligibility_numbers_check', {
      body,
      ...options,
    });
  }

  /**
   * Create verification codes to validate numbers of the hosted order. The
   * verification codes will be sent to the numbers of the hosted order.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messagingHostedNumberOrders.createVerificationCodes(
   *     'id',
   *     {
   *       phone_numbers: ['string'],
   *       verification_method: 'sms',
   *     },
   *   );
   * ```
   */
  createVerificationCodes(
    id: string,
    body: MessagingHostedNumberOrderCreateVerificationCodesParams,
    options?: RequestOptions,
  ): APIPromise<MessagingHostedNumberOrderCreateVerificationCodesResponse> {
    return this._client.post(path`/messaging_hosted_number_orders/${id}/verification_codes`, {
      body,
      ...options,
    });
  }

  /**
   * Validate the verification codes sent to the numbers of the hosted order. The
   * verification codes must be created in the verification codes endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.messagingHostedNumberOrders.validateCodes(
   *     'id',
   *     {
   *       verification_codes: [
   *         { code: 'code', phone_number: 'phone_number' },
   *       ],
   *     },
   *   );
   * ```
   */
  validateCodes(
    id: string,
    body: MessagingHostedNumberOrderValidateCodesParams,
    options?: RequestOptions,
  ): APIPromise<MessagingHostedNumberOrderValidateCodesResponse> {
    return this._client.post(path`/messaging_hosted_number_orders/${id}/validation_codes`, {
      body,
      ...options,
    });
  }
}

export interface MessagingHostedNumberOrderCreateResponse {
  data?: Shared.MessagingHostedNumberOrder;
}

export interface MessagingHostedNumberOrderRetrieveResponse {
  data?: Shared.MessagingHostedNumberOrder;
}

export interface MessagingHostedNumberOrderDeleteResponse {
  data?: Shared.MessagingHostedNumberOrder;
}

export interface MessagingHostedNumberOrderCheckEligibilityResponse {
  /**
   * List of phone numbers with their eligibility status.
   */
  phone_numbers?: Array<MessagingHostedNumberOrderCheckEligibilityResponse.PhoneNumber>;
}

export namespace MessagingHostedNumberOrderCheckEligibilityResponse {
  export interface PhoneNumber {
    /**
     * Detailed information about the eligibility status.
     */
    detail?: string;

    /**
     * Whether the phone number is eligible for hosted messaging.
     */
    eligible?: boolean;

    /**
     * The eligibility status of the phone number.
     */
    eligible_status?:
      | 'NUMBER_CAN_NOT_BE_REPEATED'
      | 'NUMBER_CAN_NOT_BE_VALIDATED'
      | 'NUMBER_CAN_NOT_BE_WIRELESS'
      | 'NUMBER_CAN_NOT_BE_ACTIVE_IN_YOUR_ACCOUNT'
      | 'NUMBER_CAN_NOT_HOSTED_WITH_A_TELNYX_SUBSCRIBER'
      | 'NUMBER_CAN_NOT_BE_IN_TELNYX'
      | 'NUMBER_IS_NOT_A_US_NUMBER'
      | 'NUMBER_IS_NOT_A_VALID_ROUTING_NUMBER'
      | 'NUMBER_IS_NOT_IN_E164_FORMAT'
      | 'BILLING_ACCOUNT_CHECK_FAILED'
      | 'BILLING_ACCOUNT_IS_ABOLISHED'
      | 'ELIGIBLE';

    /**
     * The phone number in e164 format.
     */
    phone_number?: string;
  }
}

export interface MessagingHostedNumberOrderCreateVerificationCodesResponse {
  data: Array<MessagingHostedNumberOrderCreateVerificationCodesResponse.Data>;
}

export namespace MessagingHostedNumberOrderCreateVerificationCodesResponse {
  /**
   * Verification code result response
   */
  export interface Data {
    /**
     * Phone number for which the verification code was created
     */
    phone_number: string;

    /**
     * Error message describing why the verification code creation failed
     */
    error?: string;

    /**
     * Type of verification method used
     */
    type?: 'sms' | 'call' | 'flashcall';

    /**
     * Unique identifier for the verification code
     */
    verification_code_id?: string;
  }
}

export interface MessagingHostedNumberOrderValidateCodesResponse {
  data?: MessagingHostedNumberOrderValidateCodesResponse.Data;
}

export namespace MessagingHostedNumberOrderValidateCodesResponse {
  export interface Data {
    order_id: string;

    phone_numbers: Array<Data.PhoneNumber>;
  }

  export namespace Data {
    export interface PhoneNumber {
      phone_number: string;

      status: 'verified' | 'rejected' | 'already_verified';
    }
  }
}

export interface MessagingHostedNumberOrderCreateParams {
  /**
   * Automatically associate the number with this messaging profile ID when the order
   * is complete.
   */
  messaging_profile_id?: string;

  /**
   * Phone numbers to be used for hosted messaging.
   */
  phone_numbers?: Array<string>;
}

export interface MessagingHostedNumberOrderListParams extends DefaultFlatPaginationParams {}

export interface MessagingHostedNumberOrderCheckEligibilityParams {
  /**
   * List of phone numbers to check eligibility
   */
  phone_numbers: Array<string>;
}

export interface MessagingHostedNumberOrderCreateVerificationCodesParams {
  phone_numbers: Array<string>;

  verification_method: 'sms' | 'call' | 'flashcall';
}

export interface MessagingHostedNumberOrderValidateCodesParams {
  verification_codes: Array<MessagingHostedNumberOrderValidateCodesParams.VerificationCode>;
}

export namespace MessagingHostedNumberOrderValidateCodesParams {
  export interface VerificationCode {
    code: string;

    phone_number: string;
  }
}

MessagingHostedNumberOrders.Actions = Actions;

export declare namespace MessagingHostedNumberOrders {
  export {
    type MessagingHostedNumberOrderCreateResponse as MessagingHostedNumberOrderCreateResponse,
    type MessagingHostedNumberOrderRetrieveResponse as MessagingHostedNumberOrderRetrieveResponse,
    type MessagingHostedNumberOrderDeleteResponse as MessagingHostedNumberOrderDeleteResponse,
    type MessagingHostedNumberOrderCheckEligibilityResponse as MessagingHostedNumberOrderCheckEligibilityResponse,
    type MessagingHostedNumberOrderCreateVerificationCodesResponse as MessagingHostedNumberOrderCreateVerificationCodesResponse,
    type MessagingHostedNumberOrderValidateCodesResponse as MessagingHostedNumberOrderValidateCodesResponse,
    type MessagingHostedNumberOrderCreateParams as MessagingHostedNumberOrderCreateParams,
    type MessagingHostedNumberOrderListParams as MessagingHostedNumberOrderListParams,
    type MessagingHostedNumberOrderCheckEligibilityParams as MessagingHostedNumberOrderCheckEligibilityParams,
    type MessagingHostedNumberOrderCreateVerificationCodesParams as MessagingHostedNumberOrderCreateVerificationCodesParams,
    type MessagingHostedNumberOrderValidateCodesParams as MessagingHostedNumberOrderValidateCodesParams,
  };

  export {
    Actions as Actions,
    type ActionUploadFileResponse as ActionUploadFileResponse,
    type ActionUploadFileParams as ActionUploadFileParams,
  };
}

export { type MessagingHostedNumberOrdersDefaultFlatPagination };
