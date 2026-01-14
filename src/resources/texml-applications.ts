// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CredentialConnectionsAPI from './credential-connections/credential-connections';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TexmlApplications extends APIResource {
  /**
   * Creates a TeXML Application.
   *
   * @example
   * ```ts
   * const texmlApplication =
   *   await client.texmlApplications.create({
   *     friendly_name: 'call-router',
   *     voice_url: 'https://example.com',
   *   });
   * ```
   */
  create(
    body: TexmlApplicationCreateParams,
    options?: RequestOptions,
  ): APIPromise<TexmlApplicationCreateResponse> {
    return this._client.post('/texml_applications', { body, ...options });
  }

  /**
   * Retrieves the details of an existing TeXML Application.
   *
   * @example
   * ```ts
   * const texmlApplication =
   *   await client.texmlApplications.retrieve(
   *     '1293384261075731499',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TexmlApplicationRetrieveResponse> {
    return this._client.get(path`/texml_applications/${id}`, options);
  }

  /**
   * Updates settings of an existing TeXML Application.
   *
   * @example
   * ```ts
   * const texmlApplication =
   *   await client.texmlApplications.update(
   *     '1293384261075731499',
   *     {
   *       friendly_name: 'call-router',
   *       voice_url: 'https://example.com',
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: TexmlApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TexmlApplicationUpdateResponse> {
    return this._client.patch(path`/texml_applications/${id}`, { body, ...options });
  }

  /**
   * Returns a list of your TeXML Applications.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const texmlApplication of client.texmlApplications.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TexmlApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TexmlApplicationsDefaultFlatPagination, TexmlApplication> {
    return this._client.getAPIList('/texml_applications', DefaultFlatPagination<TexmlApplication>, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a TeXML Application.
   *
   * @example
   * ```ts
   * const texmlApplication =
   *   await client.texmlApplications.delete(
   *     '1293384261075731499',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TexmlApplicationDeleteResponse> {
    return this._client.delete(path`/texml_applications/${id}`, options);
  }
}

export type TexmlApplicationsDefaultFlatPagination = DefaultFlatPagination<TexmlApplication>;

export interface TexmlApplication {
  /**
   * Uniquely identifies the resource.
   */
  id?: string;

  /**
   * Specifies whether the connection can be used.
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  /**
   * Specifies if call cost webhooks should be sent for this TeXML Application.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: CredentialConnectionsAPI.DtmfType;

  /**
   * Specifies whether calls to phone numbers associated with this connection should
   * hangup after timing out.
   */
  first_command_timeout?: boolean;

  /**
   * Specifies how many seconds to wait before timing out a dial command.
   */
  first_command_timeout_secs?: number;

  /**
   * A user-assigned name to help manage the application.
   */
  friendly_name?: string;

  inbound?: TexmlApplication.Inbound;

  outbound?: TexmlApplication.Outbound;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * URL for Telnyx to send requests to containing information about call progress
   * events.
   */
  status_callback?: string;

  /**
   * HTTP request method Telnyx should use when requesting the status_callback URL.
   */
  status_callback_method?: 'get' | 'post';

  /**
   * Tags associated with the Texml Application.
   */
  tags?: Array<string>;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * URL to which Telnyx will deliver your XML Translator webhooks if we get an error
   * response from your voice_url.
   */
  voice_fallback_url?: string;

  /**
   * HTTP request method Telnyx will use to interact with your XML Translator
   * webhooks. Either 'get' or 'post'.
   */
  voice_method?: 'get' | 'post';

  /**
   * URL to which Telnyx will deliver your XML Translator webhooks.
   */
  voice_url?: string;
}

export namespace TexmlApplication {
  export interface Inbound {
    /**
     * When set, this will limit the total number of inbound calls to phone numbers
     * associated with this connection.
     */
    channel_limit?: number;

    /**
     * When enabled Telnyx will include Shaken/Stir data in the Webhook for new inbound
     * calls.
     */
    shaken_stir_enabled?: boolean;

    /**
     * Specifies a subdomain that can be used to receive Inbound calls to a Connection,
     * in the same way a phone number is used, from a SIP endpoint. Example: the
     * subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using
     * the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any
     * alphanumeric value. Please note TLS encrypted calls are not allowed for
     * subdomain calls.
     */
    sip_subdomain?: string;

    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in
     * the public Internet) or "Only my connections" (any connection assigned to the
     * same Telnyx user).
     */
    sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone';
  }

  export interface Outbound {
    /**
     * When set, this will limit the total number of outbound calls to phone numbers
     * associated with this connection.
     */
    channel_limit?: number;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }
}

export interface TexmlApplicationCreateResponse {
  data?: TexmlApplication;
}

export interface TexmlApplicationRetrieveResponse {
  data?: TexmlApplication;
}

export interface TexmlApplicationUpdateResponse {
  data?: TexmlApplication;
}

export interface TexmlApplicationDeleteResponse {
  data?: TexmlApplication;
}

export interface TexmlApplicationCreateParams {
  /**
   * A user-assigned name to help manage the application.
   */
  friendly_name: string;

  /**
   * URL to which Telnyx will deliver your XML Translator webhooks.
   */
  voice_url: string;

  /**
   * Specifies whether the connection can be used.
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  /**
   * Specifies if call cost webhooks should be sent for this TeXML Application.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: CredentialConnectionsAPI.DtmfType;

  /**
   * Specifies whether calls to phone numbers associated with this connection should
   * hangup after timing out.
   */
  first_command_timeout?: boolean;

  /**
   * Specifies how many seconds to wait before timing out a dial command.
   */
  first_command_timeout_secs?: number;

  inbound?: TexmlApplicationCreateParams.Inbound;

  outbound?: TexmlApplicationCreateParams.Outbound;

  /**
   * URL for Telnyx to send requests to containing information about call progress
   * events.
   */
  status_callback?: string;

  /**
   * HTTP request method Telnyx should use when requesting the status_callback URL.
   */
  status_callback_method?: 'get' | 'post';

  /**
   * Tags associated with the Texml Application.
   */
  tags?: Array<string>;

  /**
   * URL to which Telnyx will deliver your XML Translator webhooks if we get an error
   * response from your voice_url.
   */
  voice_fallback_url?: string;

  /**
   * HTTP request method Telnyx will use to interact with your XML Translator
   * webhooks. Either 'get' or 'post'.
   */
  voice_method?: 'get' | 'post';
}

export namespace TexmlApplicationCreateParams {
  export interface Inbound {
    /**
     * When set, this will limit the total number of inbound calls to phone numbers
     * associated with this connection.
     */
    channel_limit?: number;

    /**
     * When enabled Telnyx will include Shaken/Stir data in the Webhook for new inbound
     * calls.
     */
    shaken_stir_enabled?: boolean;

    /**
     * Specifies a subdomain that can be used to receive Inbound calls to a Connection,
     * in the same way a phone number is used, from a SIP endpoint. Example: the
     * subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using
     * the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any
     * alphanumeric value. Please note TLS encrypted calls are not allowed for
     * subdomain calls.
     */
    sip_subdomain?: string;

    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in
     * the public Internet) or "Only my connections" (any connection assigned to the
     * same Telnyx user).
     */
    sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone';
  }

  export interface Outbound {
    /**
     * When set, this will limit the total number of outbound calls to phone numbers
     * associated with this connection.
     */
    channel_limit?: number;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }
}

export interface TexmlApplicationUpdateParams {
  /**
   * A user-assigned name to help manage the application.
   */
  friendly_name: string;

  /**
   * URL to which Telnyx will deliver your XML Translator webhooks.
   */
  voice_url: string;

  /**
   * Specifies whether the connection can be used.
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  /**
   * Specifies if call cost webhooks should be sent for this TeXML Application.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: CredentialConnectionsAPI.DtmfType;

  /**
   * Specifies whether calls to phone numbers associated with this connection should
   * hangup after timing out.
   */
  first_command_timeout?: boolean;

  /**
   * Specifies how many seconds to wait before timing out a dial command.
   */
  first_command_timeout_secs?: number;

  inbound?: TexmlApplicationUpdateParams.Inbound;

  outbound?: TexmlApplicationUpdateParams.Outbound;

  /**
   * URL for Telnyx to send requests to containing information about call progress
   * events.
   */
  status_callback?: string;

  /**
   * HTTP request method Telnyx should use when requesting the status_callback URL.
   */
  status_callback_method?: 'get' | 'post';

  /**
   * Tags associated with the Texml Application.
   */
  tags?: Array<string>;

  /**
   * URL to which Telnyx will deliver your XML Translator webhooks if we get an error
   * response from your voice_url.
   */
  voice_fallback_url?: string;

  /**
   * HTTP request method Telnyx will use to interact with your XML Translator
   * webhooks. Either 'get' or 'post'.
   */
  voice_method?: 'get' | 'post';
}

export namespace TexmlApplicationUpdateParams {
  export interface Inbound {
    /**
     * When set, this will limit the total number of inbound calls to phone numbers
     * associated with this connection.
     */
    channel_limit?: number;

    /**
     * When enabled Telnyx will include Shaken/Stir data in the Webhook for new inbound
     * calls.
     */
    shaken_stir_enabled?: boolean;

    /**
     * Specifies a subdomain that can be used to receive Inbound calls to a Connection,
     * in the same way a phone number is used, from a SIP endpoint. Example: the
     * subdomain "example.sip.telnyx.com" can be called from any SIP endpoint by using
     * the SIP URI "sip:@example.sip.telnyx.com" where the user part can be any
     * alphanumeric value. Please note TLS encrypted calls are not allowed for
     * subdomain calls.
     */
    sip_subdomain?: string;

    /**
     * This option can be enabled to receive calls from: "Anyone" (any SIP endpoint in
     * the public Internet) or "Only my connections" (any connection assigned to the
     * same Telnyx user).
     */
    sip_subdomain_receive_settings?: 'only_my_connections' | 'from_anyone';
  }

  export interface Outbound {
    /**
     * When set, this will limit the total number of outbound calls to phone numbers
     * associated with this connection.
     */
    channel_limit?: number;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }
}

export interface TexmlApplicationListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[outbound_voice_profile_id], filter[friendly_name]
   */
  filter?: TexmlApplicationListParams.Filter;

  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code> -</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>friendly_name</code>: sorts the result by the
   *     <code>friendly_name</code> field in ascending order.
   *   </li>
   *
   *   <li>
   *     <code>-friendly_name</code>: sorts the result by the
   *     <code>friendly_name</code> field in descending order.
   *   </li>
   * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
   */
  sort?: 'created_at' | 'friendly_name' | 'active';
}

export namespace TexmlApplicationListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[outbound_voice_profile_id], filter[friendly_name]
   */
  export interface Filter {
    /**
     * If present, applications with <code>friendly_name</code> containing the given
     * value will be returned. Matching is not case-sensitive. Requires at least three
     * characters.
     */
    friendly_name?: string;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }
}

export declare namespace TexmlApplications {
  export {
    type TexmlApplication as TexmlApplication,
    type TexmlApplicationCreateResponse as TexmlApplicationCreateResponse,
    type TexmlApplicationRetrieveResponse as TexmlApplicationRetrieveResponse,
    type TexmlApplicationUpdateResponse as TexmlApplicationUpdateResponse,
    type TexmlApplicationDeleteResponse as TexmlApplicationDeleteResponse,
    type TexmlApplicationsDefaultFlatPagination as TexmlApplicationsDefaultFlatPagination,
    type TexmlApplicationCreateParams as TexmlApplicationCreateParams,
    type TexmlApplicationUpdateParams as TexmlApplicationUpdateParams,
    type TexmlApplicationListParams as TexmlApplicationListParams,
  };
}
