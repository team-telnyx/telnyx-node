// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class VerifyProfiles extends APIResource {
  /**
   * Creates a new Verify profile to associate verifications with.
   *
   * @example
   * ```ts
   * const verifyProfileData =
   *   await client.verifyProfiles.create({
   *     name: 'Test Profile',
   *   });
   * ```
   */
  create(body: VerifyProfileCreateParams, options?: RequestOptions): APIPromise<VerifyProfileData> {
    return this._client.post('/verify_profiles', { body, ...options });
  }

  /**
   * Gets a single Verify profile.
   *
   * @example
   * ```ts
   * const verifyProfileData =
   *   await client.verifyProfiles.retrieve(
   *     '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   );
   * ```
   */
  retrieve(verifyProfileID: string, options?: RequestOptions): APIPromise<VerifyProfileData> {
    return this._client.get(path`/verify_profiles/${verifyProfileID}`, options);
  }

  /**
   * Update Verify profile
   *
   * @example
   * ```ts
   * const verifyProfileData =
   *   await client.verifyProfiles.update(
   *     '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   );
   * ```
   */
  update(
    verifyProfileID: string,
    body: VerifyProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<VerifyProfileData> {
    return this._client.patch(path`/verify_profiles/${verifyProfileID}`, { body, ...options });
  }

  /**
   * Gets a paginated list of Verify profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const verifyProfile of client.verifyProfiles.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: VerifyProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<VerifyProfilesDefaultFlatPagination, VerifyProfile> {
    return this._client.getAPIList('/verify_profiles', DefaultFlatPagination<VerifyProfile>, {
      query,
      ...options,
    });
  }

  /**
   * Delete Verify profile
   *
   * @example
   * ```ts
   * const verifyProfileData =
   *   await client.verifyProfiles.delete(
   *     '12ade33a-21c0-473b-b055-b3c836e1c292',
   *   );
   * ```
   */
  delete(verifyProfileID: string, options?: RequestOptions): APIPromise<VerifyProfileData> {
    return this._client.delete(path`/verify_profiles/${verifyProfileID}`, options);
  }

  /**
   * Create a new Verify profile message template.
   *
   * @example
   * ```ts
   * const messageTemplate =
   *   await client.verifyProfiles.createTemplate({
   *     text: 'Your {{app_name}} verification code is: {{code}}.',
   *   });
   * ```
   */
  createTemplate(
    body: VerifyProfileCreateTemplateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTemplate> {
    return this._client.post('/verify_profiles/templates', { body, ...options });
  }

  /**
   * List all Verify profile message templates.
   *
   * @example
   * ```ts
   * const response =
   *   await client.verifyProfiles.retrieveTemplates();
   * ```
   */
  retrieveTemplates(options?: RequestOptions): APIPromise<VerifyProfileRetrieveTemplatesResponse> {
    return this._client.get('/verify_profiles/templates', options);
  }

  /**
   * Update an existing Verify profile message template.
   *
   * @example
   * ```ts
   * const messageTemplate =
   *   await client.verifyProfiles.updateTemplate(
   *     '12ade33a-21c0-473b-b055-b3c836e1c292',
   *     {
   *       text: 'Your {{app_name}} verification code is: {{code}}.',
   *     },
   *   );
   * ```
   */
  updateTemplate(
    templateID: string,
    body: VerifyProfileUpdateTemplateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTemplate> {
    return this._client.patch(path`/verify_profiles/templates/${templateID}`, { body, ...options });
  }
}

export type VerifyProfilesDefaultFlatPagination = DefaultFlatPagination<VerifyProfile>;

export interface MessageTemplate {
  data?: VerifyProfileMessageTemplateResponse;
}

export interface VerifyProfile {
  id?: string;

  call?: VerifyProfile.Call;

  created_at?: string;

  flashcall?: VerifyProfile.Flashcall;

  language?: string;

  name?: string;

  /**
   * The possible verification profile record types.
   */
  record_type?: 'verification_profile';

  sms?: VerifyProfile.SMS;

  updated_at?: string;

  webhook_failover_url?: string;

  webhook_url?: string;
}

export namespace VerifyProfile {
  export interface Call {
    /**
     * The name that identifies the application requesting 2fa in the verification
     * message.
     */
    app_name?: string;

    /**
     * The length of the verify code to generate.
     */
    code_length?: number;

    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * The message template identifier selected from /verify_profiles/templates
     */
    messaging_template_id?: string;

    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations?: Array<string>;

    [k: string]: unknown;
  }

  export interface Flashcall {
    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    [k: string]: unknown;
  }

  export interface SMS {
    /**
     * The alphanumeric sender ID to use when sending to destinations that require an
     * alphanumeric sender ID.
     */
    alpha_sender?: string | null;

    /**
     * The name that identifies the application requesting 2fa in the verification
     * message.
     */
    app_name?: string;

    /**
     * The length of the verify code to generate.
     */
    code_length?: number;

    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * The message template identifier selected from /verify_profiles/templates
     */
    messaging_template_id?: string;

    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations?: Array<string>;

    [k: string]: unknown;
  }
}

export interface VerifyProfileData {
  data?: VerifyProfile;
}

export interface VerifyProfileMessageTemplateResponse {
  id?: string;

  text?: string;
}

/**
 * A list of Verify profile message templates
 */
export interface VerifyProfileRetrieveTemplatesResponse {
  data: Array<VerifyProfileMessageTemplateResponse>;
}

export interface VerifyProfileCreateParams {
  name: string;

  call?: VerifyProfileCreateParams.Call;

  flashcall?: VerifyProfileCreateParams.Flashcall;

  language?: string;

  sms?: VerifyProfileCreateParams.SMS;

  webhook_failover_url?: string;

  webhook_url?: string;
}

export namespace VerifyProfileCreateParams {
  export interface Call {
    /**
     * The name that identifies the application requesting 2fa in the verification
     * message.
     */
    app_name?: string;

    /**
     * The length of the verify code to generate.
     */
    code_length?: number;

    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * The message template identifier selected from /verify_profiles/templates
     */
    messaging_template_id?: string;

    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations?: Array<string>;

    [k: string]: unknown;
  }

  export interface Flashcall {
    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations?: Array<string>;

    [k: string]: unknown;
  }

  export interface SMS {
    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations: Array<string>;

    /**
     * The alphanumeric sender ID to use when sending to destinations that require an
     * alphanumeric sender ID.
     */
    alpha_sender?: string | null;

    /**
     * The name that identifies the application requesting 2fa in the verification
     * message.
     */
    app_name?: string;

    /**
     * The length of the verify code to generate.
     */
    code_length?: number;

    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * The message template identifier selected from /verify_profiles/templates
     */
    messaging_template_id?: string;

    [k: string]: unknown;
  }
}

export interface VerifyProfileUpdateParams {
  call?: VerifyProfileUpdateParams.Call;

  flashcall?: VerifyProfileUpdateParams.Flashcall;

  language?: string;

  name?: string;

  sms?: VerifyProfileUpdateParams.SMS;

  webhook_failover_url?: string;

  webhook_url?: string;
}

export namespace VerifyProfileUpdateParams {
  export interface Call {
    /**
     * The name that identifies the application requesting 2fa in the verification
     * message.
     */
    app_name?: string;

    /**
     * The length of the verify code to generate.
     */
    code_length?: number;

    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * The message template identifier selected from /verify_profiles/templates
     */
    messaging_template_id?: string;

    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations?: Array<string>;

    [k: string]: unknown;
  }

  export interface Flashcall {
    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations?: Array<string>;

    [k: string]: unknown;
  }

  export interface SMS {
    /**
     * The alphanumeric sender ID to use when sending to destinations that require an
     * alphanumeric sender ID.
     */
    alpha_sender?: string | null;

    /**
     * The name that identifies the application requesting 2fa in the verification
     * message.
     */
    app_name?: string;

    /**
     * The length of the verify code to generate.
     */
    code_length?: number;

    /**
     * For every request that is initiated via this Verify profile, this sets the
     * number of seconds before a verification request code expires. Once the
     * verification request expires, the user cannot use the code to verify their
     * identity.
     */
    default_verification_timeout_secs?: number;

    /**
     * The message template identifier selected from /verify_profiles/templates
     */
    messaging_template_id?: string;

    /**
     * Enabled country destinations to send verification codes. The elements in the
     * list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
     * destinations will be allowed.
     */
    whitelisted_destinations?: Array<string>;

    [k: string]: unknown;
  }
}

export interface VerifyProfileListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name]
   */
  filter?: VerifyProfileListParams.Filter;
}

export namespace VerifyProfileListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name]
   */
  export interface Filter {
    /**
     * Optional filter for profile names.
     */
    name?: string;
  }
}

export interface VerifyProfileCreateTemplateParams {
  /**
   * The text content of the message template.
   */
  text: string;
}

export interface VerifyProfileUpdateTemplateParams {
  /**
   * The text content of the message template.
   */
  text: string;
}

export declare namespace VerifyProfiles {
  export {
    type MessageTemplate as MessageTemplate,
    type VerifyProfile as VerifyProfile,
    type VerifyProfileData as VerifyProfileData,
    type VerifyProfileMessageTemplateResponse as VerifyProfileMessageTemplateResponse,
    type VerifyProfileRetrieveTemplatesResponse as VerifyProfileRetrieveTemplatesResponse,
    type VerifyProfilesDefaultFlatPagination as VerifyProfilesDefaultFlatPagination,
    type VerifyProfileCreateParams as VerifyProfileCreateParams,
    type VerifyProfileUpdateParams as VerifyProfileUpdateParams,
    type VerifyProfileListParams as VerifyProfileListParams,
    type VerifyProfileCreateTemplateParams as VerifyProfileCreateTemplateParams,
    type VerifyProfileUpdateTemplateParams as VerifyProfileUpdateTemplateParams,
  };
}
