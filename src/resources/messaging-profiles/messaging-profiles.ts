// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import * as Shared from '../shared';
import * as AutorespConfigsAPI from './autoresp-configs';
import {
  AutoRespConfig,
  AutoRespConfigCreate,
  AutoRespConfigResponse,
  AutorespConfigCreateParams,
  AutorespConfigDeleteParams,
  AutorespConfigDeleteResponse,
  AutorespConfigListParams,
  AutorespConfigListResponse,
  AutorespConfigRetrieveParams,
  AutorespConfigUpdateParams,
  AutorespConfigs,
} from './autoresp-configs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MessagingProfiles extends APIResource {
  autorespConfigs: AutorespConfigsAPI.AutorespConfigs = new AutorespConfigsAPI.AutorespConfigs(this._client);

  /**
   * Create a messaging profile
   *
   * @example
   * ```ts
   * const messagingProfile =
   *   await client.messagingProfiles.create({
   *     name: 'My name',
   *     whitelisted_destinations: ['US'],
   *   });
   * ```
   */
  create(
    body: MessagingProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingProfileCreateResponse> {
    return this._client.post('/messaging_profiles', { body, ...options });
  }

  /**
   * Retrieve a messaging profile
   *
   * @example
   * ```ts
   * const messagingProfile =
   *   await client.messagingProfiles.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingProfileRetrieveResponse> {
    return this._client.get(path`/messaging_profiles/${id}`, options);
  }

  /**
   * Update a messaging profile
   *
   * @example
   * ```ts
   * const messagingProfile =
   *   await client.messagingProfiles.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  update(
    id: string,
    body: MessagingProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessagingProfileUpdateResponse> {
    return this._client.patch(path`/messaging_profiles/${id}`, { body, ...options });
  }

  /**
   * List messaging profiles
   *
   * @example
   * ```ts
   * const messagingProfiles =
   *   await client.messagingProfiles.list();
   * ```
   */
  list(
    query: MessagingProfileListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingProfileListResponse> {
    return this._client.get('/messaging_profiles', { query, ...options });
  }

  /**
   * Delete a messaging profile
   *
   * @example
   * ```ts
   * const messagingProfile =
   *   await client.messagingProfiles.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MessagingProfileDeleteResponse> {
    return this._client.delete(path`/messaging_profiles/${id}`, options);
  }

  /**
   * List phone numbers associated with a messaging profile
   *
   * @example
   * ```ts
   * const response =
   *   await client.messagingProfiles.listPhoneNumbers(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  listPhoneNumbers(
    id: string,
    query: MessagingProfileListPhoneNumbersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingProfileListPhoneNumbersResponse> {
    return this._client.get(path`/messaging_profiles/${id}/phone_numbers`, { query, ...options });
  }

  /**
   * List short codes associated with a messaging profile
   *
   * @example
   * ```ts
   * const response =
   *   await client.messagingProfiles.listShortCodes(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  listShortCodes(
    id: string,
    query: MessagingProfileListShortCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingProfileListShortCodesResponse> {
    return this._client.get(path`/messaging_profiles/${id}/short_codes`, { query, ...options });
  }
}

export interface MessagingProfile {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The alphanumeric sender ID to use when sending to destinations that require an
   * alphanumeric sender ID.
   */
  alpha_sender?: string | null;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * The maximum amount of money (in USD) that can be spent by this profile before
   * midnight UTC.
   */
  daily_spend_limit?: string;

  /**
   * Whether to enforce the value configured by `daily_spend_limit`.
   */
  daily_spend_limit_enabled?: boolean;

  /**
   * Specifies whether the messaging profile is enabled or not.
   */
  enabled?: boolean;

  /**
   * enables SMS fallback for MMS messages.
   */
  mms_fall_back_to_sms?: boolean;

  /**
   * enables automated resizing of MMS media.
   */
  mms_transcoding?: boolean;

  /**
   * Send messages only to mobile phone numbers.
   */
  mobile_only?: boolean;

  /**
   * A user friendly name for the messaging profile.
   */
  name?: string;

  /**
   * Number Pool allows you to send messages from a pool of numbers of different
   * types, assigning weights to each type. The pool consists of all the long code
   * and toll free numbers assigned to the messaging profile.
   *
   * To disable this feature, set the object field to `null`.
   */
  number_pool_settings?: NumberPoolSettings | null;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'messaging_profile';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The URL shortener feature allows automatic replacement of URLs that were
   * generated using a public URL shortener service. Some examples include bit.do,
   * bit.ly, goo.gl, ht.ly, is.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com.
   * Such URLs are replaced with with links generated by Telnyx. The use of custom
   * links can improve branding and message deliverability.
   *
   * To disable this feature, set the object field to `null`.
   */
  url_shortener_settings?: URLShortenerSettings | null;

  /**
   * Secret used to authenticate with v1 endpoints.
   */
  v1_secret?: string;

  /**
   * Determines which webhook format will be used, Telnyx API v1, v2, or a legacy
   * 2010-04-01 format.
   */
  webhook_api_version?: '1' | '2' | '2010-04-01';

  /**
   * The failover URL where webhooks related to this messaging profile will be sent
   * if sending to the primary URL fails.
   */
  webhook_failover_url?: string | null;

  /**
   * The URL where webhooks related to this messaging profile will be sent.
   */
  webhook_url?: string | null;

  /**
   * Destinations to which the messaging profile is allowed to send. The elements in
   * the list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
   * destinations will be allowed.
   */
  whitelisted_destinations?: Array<string>;
}

/**
 * Number Pool allows you to send messages from a pool of numbers of different
 * types, assigning weights to each type. The pool consists of all the long code
 * and toll free numbers assigned to the messaging profile.
 *
 * To disable this feature, set the object field to `null`.
 */
export interface NumberPoolSettings {
  /**
   * Defines the probability weight for a Long Code number to be selected when
   * sending a message. The higher the weight the higher the probability. The sum of
   * the weights for all number types does not necessarily need to add to 100. Weight
   * must be a non-negative number, and when equal to zero it will remove the number
   * type from the pool.
   */
  long_code_weight: number;

  /**
   * If set to true all unhealthy numbers will be automatically excluded from the
   * pool. Health metrics per number are calculated on a regular basis, taking into
   * account the deliverability rate and the amount of messages marked as spam by
   * upstream carriers. Numbers with a deliverability rate below 25% or spam ratio
   * over 75% will be considered unhealthy.
   */
  skip_unhealthy: boolean;

  /**
   * Defines the probability weight for a Toll Free number to be selected when
   * sending a message. The higher the weight the higher the probability. The sum of
   * the weights for all number types does not necessarily need to add to 100. Weight
   * must be a non-negative number, and when equal to zero it will remove the number
   * type from the pool.
   */
  toll_free_weight: number;

  /**
   * If set to true, Number Pool will try to choose a sending number with the same
   * area code as the destination number. If there are no such numbers available, a
   * nunber with a different area code will be chosen. Currently only NANP numbers
   * are supported.
   */
  geomatch?: boolean;

  /**
   * If set to true, Number Pool will try to choose the same sending number for all
   * messages to a particular recipient. If the sending number becomes unhealthy and
   * `skip_unhealthy` is set to true, a new number will be chosen.
   */
  sticky_sender?: boolean;
}

/**
 * The URL shortener feature allows automatic replacement of URLs that were
 * generated using a public URL shortener service. Some examples include bit.do,
 * bit.ly, goo.gl, ht.ly, is.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com.
 * Such URLs are replaced with with links generated by Telnyx. The use of custom
 * links can improve branding and message deliverability.
 *
 * To disable this feature, set the object field to `null`.
 */
export interface URLShortenerSettings {
  /**
   * One of the domains provided by the Telnyx URL shortener service.
   */
  domain: string;

  /**
   * Optional prefix that can be used to identify your brand, and will appear in the
   * Telnyx generated URLs after the domain name.
   */
  prefix?: string;

  /**
   * Use the link replacement tool only for links that are specifically blacklisted
   * by Telnyx.
   */
  replace_blacklist_only?: boolean;

  /**
   * Receive webhooks for when your replaced links are clicked. Webhooks are sent to
   * the webhooks on the messaging profile.
   */
  send_webhooks?: boolean;
}

export interface MessagingProfileCreateResponse {
  data?: MessagingProfile;
}

export interface MessagingProfileRetrieveResponse {
  data?: MessagingProfile;
}

export interface MessagingProfileUpdateResponse {
  data?: MessagingProfile;
}

export interface MessagingProfileListResponse {
  data?: Array<MessagingProfile>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface MessagingProfileDeleteResponse {
  data?: MessagingProfile;
}

export interface MessagingProfileListPhoneNumbersResponse {
  data?: Array<Shared.PhoneNumberWithMessagingSettings>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface MessagingProfileListShortCodesResponse {
  data?: Array<Shared.ShortCode>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface MessagingProfileCreateParams {
  /**
   * A user friendly name for the messaging profile.
   */
  name: string;

  /**
   * Destinations to which the messaging profile is allowed to send. The elements in
   * the list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]` all
   * destinations will be allowed.
   */
  whitelisted_destinations: Array<string>;

  /**
   * The alphanumeric sender ID to use when sending to destinations that require an
   * alphanumeric sender ID.
   */
  alpha_sender?: string | null;

  /**
   * The maximum amount of money (in USD) that can be spent by this profile before
   * midnight UTC.
   */
  daily_spend_limit?: string;

  /**
   * Whether to enforce the value configured by `daily_spend_limit`.
   */
  daily_spend_limit_enabled?: boolean;

  /**
   * Specifies whether the messaging profile is enabled or not.
   */
  enabled?: boolean;

  /**
   * enables SMS fallback for MMS messages.
   */
  mms_fall_back_to_sms?: boolean;

  /**
   * enables automated resizing of MMS media.
   */
  mms_transcoding?: boolean;

  /**
   * Send messages only to mobile phone numbers.
   */
  mobile_only?: boolean;

  /**
   * Number Pool allows you to send messages from a pool of numbers of different
   * types, assigning weights to each type. The pool consists of all the long code
   * and toll free numbers assigned to the messaging profile.
   *
   * To disable this feature, set the object field to `null`.
   */
  number_pool_settings?: NumberPoolSettings | null;

  /**
   * The URL shortener feature allows automatic replacement of URLs that were
   * generated using a public URL shortener service. Some examples include bit.do,
   * bit.ly, goo.gl, ht.ly, is.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com.
   * Such URLs are replaced with with links generated by Telnyx. The use of custom
   * links can improve branding and message deliverability.
   *
   * To disable this feature, set the object field to `null`.
   */
  url_shortener_settings?: URLShortenerSettings | null;

  /**
   * Determines which webhook format will be used, Telnyx API v1, v2, or a legacy
   * 2010-04-01 format.
   */
  webhook_api_version?: '1' | '2' | '2010-04-01';

  /**
   * The failover URL where webhooks related to this messaging profile will be sent
   * if sending to the primary URL fails.
   */
  webhook_failover_url?: string | null;

  /**
   * The URL where webhooks related to this messaging profile will be sent.
   */
  webhook_url?: string | null;
}

export interface MessagingProfileUpdateParams {
  /**
   * The alphanumeric sender ID to use when sending to destinations that require an
   * alphanumeric sender ID.
   */
  alpha_sender?: string | null;

  /**
   * The maximum amount of money (in USD) that can be spent by this profile before
   * midnight UTC.
   */
  daily_spend_limit?: string;

  /**
   * Whether to enforce the value configured by `daily_spend_limit`.
   */
  daily_spend_limit_enabled?: boolean;

  /**
   * Specifies whether the messaging profile is enabled or not.
   */
  enabled?: boolean;

  /**
   * enables SMS fallback for MMS messages.
   */
  mms_fall_back_to_sms?: boolean;

  /**
   * enables automated resizing of MMS media.
   */
  mms_transcoding?: boolean;

  /**
   * Send messages only to mobile phone numbers.
   */
  mobile_only?: boolean;

  /**
   * A user friendly name for the messaging profile.
   */
  name?: string;

  /**
   * Number Pool allows you to send messages from a pool of numbers of different
   * types, assigning weights to each type. The pool consists of all the long code
   * and toll free numbers assigned to the messaging profile.
   *
   * To disable this feature, set the object field to `null`.
   */
  number_pool_settings?: NumberPoolSettings | null;

  /**
   * The URL shortener feature allows automatic replacement of URLs that were
   * generated using a public URL shortener service. Some examples include bit.do,
   * bit.ly, goo.gl, ht.ly, is.gd, ow.ly, rebrand.ly, t.co, tiny.cc, and tinyurl.com.
   * Such URLs are replaced with with links generated by Telnyx. The use of custom
   * links can improve branding and message deliverability.
   *
   * To disable this feature, set the object field to `null`.
   */
  url_shortener_settings?: URLShortenerSettings | null;

  /**
   * Secret used to authenticate with v1 endpoints.
   */
  v1_secret?: string;

  /**
   * Determines which webhook format will be used, Telnyx API v1, v2, or a legacy
   * 2010-04-01 format.
   */
  webhook_api_version?: '1' | '2' | '2010-04-01';

  /**
   * The failover URL where webhooks related to this messaging profile will be sent
   * if sending to the primary URL fails.
   */
  webhook_failover_url?: string | null;

  /**
   * The URL where webhooks related to this messaging profile will be sent.
   */
  webhook_url?: string | null;

  /**
   * Destinations to which the messaging profile is allowed to send. The elements in
   * the list must be valid ISO 3166-1 alpha-2 country codes. If set to `["*"]`, all
   * destinations will be allowed.
   *
   * This field is required if the messaging profile doesn't have it defined yet.
   */
  whitelisted_destinations?: Array<string>;
}

export interface MessagingProfileListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name]
   */
  filter?: MessagingProfileListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: MessagingProfileListParams.Page;
}

export namespace MessagingProfileListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[name]
   */
  export interface Filter {
    /**
     * Filter by name
     */
    name?: string;
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export interface MessagingProfileListPhoneNumbersParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: MessagingProfileListPhoneNumbersParams.Page;
}

export namespace MessagingProfileListPhoneNumbersParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export interface MessagingProfileListShortCodesParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: MessagingProfileListShortCodesParams.Page;
}

export namespace MessagingProfileListShortCodesParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

MessagingProfiles.AutorespConfigs = AutorespConfigs;

export declare namespace MessagingProfiles {
  export {
    type MessagingProfile as MessagingProfile,
    type NumberPoolSettings as NumberPoolSettings,
    type URLShortenerSettings as URLShortenerSettings,
    type MessagingProfileCreateResponse as MessagingProfileCreateResponse,
    type MessagingProfileRetrieveResponse as MessagingProfileRetrieveResponse,
    type MessagingProfileUpdateResponse as MessagingProfileUpdateResponse,
    type MessagingProfileListResponse as MessagingProfileListResponse,
    type MessagingProfileDeleteResponse as MessagingProfileDeleteResponse,
    type MessagingProfileListPhoneNumbersResponse as MessagingProfileListPhoneNumbersResponse,
    type MessagingProfileListShortCodesResponse as MessagingProfileListShortCodesResponse,
    type MessagingProfileCreateParams as MessagingProfileCreateParams,
    type MessagingProfileUpdateParams as MessagingProfileUpdateParams,
    type MessagingProfileListParams as MessagingProfileListParams,
    type MessagingProfileListPhoneNumbersParams as MessagingProfileListPhoneNumbersParams,
    type MessagingProfileListShortCodesParams as MessagingProfileListShortCodesParams,
  };

  export {
    AutorespConfigs as AutorespConfigs,
    type AutoRespConfig as AutoRespConfig,
    type AutoRespConfigCreate as AutoRespConfigCreate,
    type AutoRespConfigResponse as AutoRespConfigResponse,
    type AutorespConfigListResponse as AutorespConfigListResponse,
    type AutorespConfigDeleteResponse as AutorespConfigDeleteResponse,
    type AutorespConfigCreateParams as AutorespConfigCreateParams,
    type AutorespConfigRetrieveParams as AutorespConfigRetrieveParams,
    type AutorespConfigUpdateParams as AutorespConfigUpdateParams,
    type AutorespConfigListParams as AutorespConfigListParams,
    type AutorespConfigDeleteParams as AutorespConfigDeleteParams,
  };
}
