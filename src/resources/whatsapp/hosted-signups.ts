// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class HostedSignups extends APIResource {
  /**
   * List hosted signups created by the account, newest first. Expired hosted signups
   * are included.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const whatsappHostedSignup of client.whatsapp.hostedSignups.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: HostedSignupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WhatsappHostedSignupsDefaultFlatPagination, WhatsappHostedSignup> {
    return this._client.getAPIList('/whatsapp/hosted_signups', DefaultFlatPagination<WhatsappHostedSignup>, {
      query,
      ...options,
    });
  }

  /**
   * Create a time-limited onboarding URL on the Telnyx-hosted Embedded Signup page
   * for a Tech Provider's end customer. Set `signup_type` to `coexistence` to launch
   * Meta's WhatsApp Business app coexistence flow instead of standard Cloud API
   * onboarding.
   *
   * @example
   * ```ts
   * const hostedSignup =
   *   await client.whatsapp.hostedSignups.create({
   *     app_id: '123456789012345',
   *     signup_type: 'coexistence',
   *   });
   * ```
   */
  create(body: HostedSignupCreateParams, options?: RequestOptions): APIPromise<HostedSignupCreateResponse> {
    return this._client.post('/whatsapp/hosted_signups', { body, ...options });
  }

  /**
   * Retrieve a hosted signup and its onboarding URL.
   *
   * @example
   * ```ts
   * const hostedSignup =
   *   await client.whatsapp.hostedSignups.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<HostedSignupRetrieveResponse> {
    return this._client.get(path`/whatsapp/hosted_signups/${id}`, options);
  }
}

export type WhatsappHostedSignupsDefaultFlatPagination = DefaultFlatPagination<WhatsappHostedSignup>;

export interface WhatsappHostedSignup {
  /**
   * Hosted signup ID
   */
  id?: string;

  /**
   * Meta App ID the hosted signup onboards customers into
   */
  app_id?: string;

  created_at?: string;

  /**
   * When the onboarding URL stops working
   */
  expires_at?: string;

  /**
   * Signed token embedded in `url`
   */
  jwt?: string;

  record_type?: 'whatsapp_jwt';

  /**
   * Meta Partner Solution ID linked to the app. Returned only when creating a hosted
   * signup.
   */
  solution_id?: string;

  /**
   * Hosted onboarding URL to share with the end customer
   */
  url?: string;
}

export interface HostedSignupCreateResponse {
  data?: WhatsappHostedSignup;
}

export interface HostedSignupRetrieveResponse {
  data?: WhatsappHostedSignup;
}

export interface HostedSignupListParams extends DefaultFlatPaginationParams {}

export interface HostedSignupCreateParams {
  /**
   * Meta App ID linked to the Telnyx account or its manager account. The app must be
   * enabled.
   */
  app_id: string;

  /**
   * When the onboarding URL expires, in RFC 3339 format. Must be in the future and
   * at most 3 days ahead. Defaults to 24 hours after creation.
   */
  expires_at?: string;

  /**
   * Onboarding flow the hosted page launches. Use `coexistence` for a number that
   * remains active in the WhatsApp Business app.
   */
  signup_type?: 'standard' | 'coexistence';
}

export declare namespace HostedSignups {
  export {
    type WhatsappHostedSignup as WhatsappHostedSignup,
    type HostedSignupCreateResponse as HostedSignupCreateResponse,
    type HostedSignupRetrieveResponse as HostedSignupRetrieveResponse,
    type WhatsappHostedSignupsDefaultFlatPagination as WhatsappHostedSignupsDefaultFlatPagination,
    type HostedSignupListParams as HostedSignupListParams,
    type HostedSignupCreateParams as HostedSignupCreateParams,
  };
}
