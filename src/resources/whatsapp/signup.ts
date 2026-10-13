// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Signup extends APIResource {
  /**
   * List finished WhatsApp Embedded Signup sessions, with status `SUCCESS` or
   * `FAILURE`, newest first. Use the `errors` of a failed session to see why
   * provisioning stopped.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const signupListResponse of client.whatsapp.signup.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: SignupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SignupListResponsesDefaultFlatPagination, SignupListResponse> {
    return this._client.getAPIList('/whatsapp/signup', DefaultFlatPagination<SignupListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve the current state and status of a WhatsApp Embedded Signup session.
   *
   * @example
   * ```ts
   * const response =
   *   await client.whatsapp.signup.retrieveStatus('id');
   * ```
   */
  retrieveStatus(id: string, options?: RequestOptions): APIPromise<SignupRetrieveStatusResponse> {
    return this._client.get(path`/whatsapp/signup/${id}/status`, options);
  }
}

export type SignupListResponsesDefaultFlatPagination = DefaultFlatPagination<SignupListResponse>;

export interface SignupListResponse {
  created_at?: string;

  /**
   * Tech provider customer reference submitted with the signup
   */
  customer_id?: string;

  /**
   * Errors recorded during provisioning
   */
  errors?: Array<string>;

  record_type?: 'whatsapp_session_id';

  /**
   * Signup session ID
   */
  session_id?: string;

  /**
   * Current provisioning step, or the step that failed. `REGISTER_PHONE_NUMBER` is
   * skipped for coexistence signups.
   */
  state?:
    | 'SUBSCRIBE_WEBHOOKS'
    | 'ASSIGNED_USERS'
    | 'SHARE_CREDIT_LINE'
    | 'REGISTER_PHONE_NUMBER'
    | 'ADD_WABA_TO_DB'
    | 'ADD_PHONE_NUMBERS_TO_DB'
    | 'COMPLETE';

  /**
   * `INCOMPLETE` waits for the Meta signup code, `PENDING` is in progress, `SUCCESS`
   * finished provisioning, and `FAILURE` stopped at `state`.
   */
  status?: 'INCOMPLETE' | 'PENDING' | 'SUCCESS' | 'FAILURE';

  updated_at?: string;

  /**
   * Telnyx user ID that owns the signup session
   */
  user_id?: string;

  /**
   * Meta WhatsApp Business Account ID
   */
  waba_id?: string;
}

export interface SignupRetrieveStatusResponse {
  data?: SignupRetrieveStatusResponse.Data;
}

export namespace SignupRetrieveStatusResponse {
  export interface Data {
    created_at?: string;

    /**
     * Tech provider customer reference submitted with the signup
     */
    customer_id?: string;

    /**
     * Errors recorded during provisioning
     */
    errors?: Array<string>;

    record_type?: 'whatsapp_session_id';

    /**
     * Signup session ID
     */
    session_id?: string;

    /**
     * Current provisioning step, or the step that failed. `REGISTER_PHONE_NUMBER` is
     * skipped for coexistence signups.
     */
    state?:
      | 'SUBSCRIBE_WEBHOOKS'
      | 'ASSIGNED_USERS'
      | 'SHARE_CREDIT_LINE'
      | 'REGISTER_PHONE_NUMBER'
      | 'ADD_WABA_TO_DB'
      | 'ADD_PHONE_NUMBERS_TO_DB'
      | 'COMPLETE';

    /**
     * `INCOMPLETE` waits for the Meta signup code, `PENDING` is in progress, `SUCCESS`
     * finished provisioning, and `FAILURE` stopped at `state`.
     */
    status?: 'INCOMPLETE' | 'PENDING' | 'SUCCESS' | 'FAILURE';

    updated_at?: string;

    /**
     * Telnyx user ID that owns the signup session
     */
    user_id?: string;

    /**
     * Meta WhatsApp Business Account ID
     */
    waba_id?: string;
  }
}

export interface SignupListParams extends DefaultFlatPaginationParams {
  /**
   * Return sessions created at or after this time (RFC 3339)
   */
  'filter[created_at][gte]'?: string;

  /**
   * Return sessions created at or before this time (RFC 3339)
   */
  'filter[created_at][lte]'?: string;

  /**
   * Filter by the tech provider customer reference
   */
  'filter[customer_id]'?: string;

  /**
   * Filter by Meta WABA ID
   */
  'filter[waba_id]'?: string;
}

export declare namespace Signup {
  export {
    type SignupListResponse as SignupListResponse,
    type SignupRetrieveStatusResponse as SignupRetrieveStatusResponse,
    type SignupListResponsesDefaultFlatPagination as SignupListResponsesDefaultFlatPagination,
    type SignupListParams as SignupListParams,
  };
}
