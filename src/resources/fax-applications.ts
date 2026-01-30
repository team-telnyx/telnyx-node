// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CredentialConnectionsAPI from './credential-connections/credential-connections';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class FaxApplications extends APIResource {
  /**
   * Creates a new Fax Application based on the parameters sent in the request. The
   * application name and webhook URL are required. Once created, you can assign
   * phone numbers to your application using the `/phone_numbers` endpoint.
   *
   * @example
   * ```ts
   * const faxApplication = await client.faxApplications.create({
   *   application_name: 'fax-router',
   *   webhook_event_url: 'https://example.com',
   * });
   * ```
   */
  create(
    body: FaxApplicationCreateParams,
    options?: RequestOptions,
  ): APIPromise<FaxApplicationCreateResponse> {
    return this._client.post('/fax_applications', { body, ...options });
  }

  /**
   * Return the details of an existing Fax Application inside the 'data' attribute of
   * the response.
   *
   * @example
   * ```ts
   * const faxApplication =
   *   await client.faxApplications.retrieve(
   *     '1293384261075731499',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<FaxApplicationRetrieveResponse> {
    return this._client.get(path`/fax_applications/${id}`, options);
  }

  /**
   * Updates settings of an existing Fax Application based on the parameters of the
   * request.
   *
   * @example
   * ```ts
   * const faxApplication = await client.faxApplications.update(
   *   '1293384261075731499',
   *   {
   *     application_name: 'fax-router',
   *     webhook_event_url: 'https://example.com',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    body: FaxApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FaxApplicationUpdateResponse> {
    return this._client.patch(path`/fax_applications/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a list of your Fax Applications inside the 'data'
   * attribute of the response. You can adjust which applications are listed by using
   * filters. Fax Applications are used to configure how you send and receive faxes
   * using the Programmable Fax API with Telnyx.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const faxApplication of client.faxApplications.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: FaxApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<FaxApplicationsDefaultFlatPagination, FaxApplication> {
    return this._client.getAPIList('/fax_applications', DefaultFlatPagination<FaxApplication>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes a Fax Application. Deletion may be prevented if the
   * application is in use by phone numbers.
   *
   * @example
   * ```ts
   * const faxApplication = await client.faxApplications.delete(
   *   '1293384261075731499',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<FaxApplicationDeleteResponse> {
    return this._client.delete(path`/fax_applications/${id}`, options);
  }
}

export type FaxApplicationsDefaultFlatPagination = DefaultFlatPagination<FaxApplication>;

export interface FaxApplication {
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
   * A user-assigned name to help manage the application.
   */
  application_name?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  inbound?: FaxApplication.Inbound;

  outbound?: FaxApplication.Outbound;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Tags associated with the Fax Application.
   */
  tags?: Array<string>;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string | null;

  /**
   * The URL where webhooks related to this connection will be sent. Must include a
   * scheme, such as 'https'.
   */
  webhook_event_url?: string;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number | null;
}

export namespace FaxApplication {
  export interface Inbound {
    /**
     * When set, this will limit the number of concurrent inbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;

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
     * When set, this will limit the number of concurrent outbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }
}

export interface FaxApplicationCreateResponse {
  data?: FaxApplication;
}

export interface FaxApplicationRetrieveResponse {
  data?: FaxApplication;
}

export interface FaxApplicationUpdateResponse {
  data?: FaxApplication;
}

export interface FaxApplicationDeleteResponse {
  data?: FaxApplication;
}

export interface FaxApplicationCreateParams {
  /**
   * A user-assigned name to help manage the application.
   */
  application_name: string;

  /**
   * The URL where webhooks related to this connection will be sent. Must include a
   * scheme, such as 'https'.
   */
  webhook_event_url: string;

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

  inbound?: FaxApplicationCreateParams.Inbound;

  outbound?: FaxApplicationCreateParams.Outbound;

  /**
   * Tags associated with the Fax Application.
   */
  tags?: Array<string>;

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string | null;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number | null;
}

export namespace FaxApplicationCreateParams {
  export interface Inbound {
    /**
     * When set, this will limit the number of concurrent inbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;

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
     * When set, this will limit the number of concurrent outbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }
}

export interface FaxApplicationUpdateParams {
  /**
   * A user-assigned name to help manage the application.
   */
  application_name: string;

  /**
   * The URL where webhooks related to this connection will be sent. Must include a
   * scheme, such as 'https'.
   */
  webhook_event_url: string;

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
   * Specifies an email address where faxes sent to this application will be
   * forwarded to (as pdf or tiff attachments)
   */
  fax_email_recipient?: string | null;

  inbound?: FaxApplicationUpdateParams.Inbound;

  outbound?: FaxApplicationUpdateParams.Outbound;

  /**
   * Tags associated with the Fax Application.
   */
  tags?: Array<string>;

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails. Must include a scheme, such as 'https'.
   */
  webhook_event_failover_url?: string | null;

  /**
   * Specifies how many seconds to wait before timing out a webhook.
   */
  webhook_timeout_secs?: number | null;
}

export namespace FaxApplicationUpdateParams {
  export interface Inbound {
    /**
     * When set, this will limit the number of concurrent inbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;

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
     * When set, this will limit the number of concurrent outbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }
}

export interface FaxApplicationListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound_voice_profile_id]
   */
  filter?: FaxApplicationListParams.Filter;

  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code> -</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>application_name</code>: sorts the result by the
   *     <code>application_name</code> field in ascending order.
   *   </li>
   *
   *   <li>
   *     <code>-application_name</code>: sorts the result by the
   *     <code>application_name</code> field in descending order.
   *   </li>
   * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
   */
  sort?: 'created_at' | 'application_name' | 'active';
}

export namespace FaxApplicationListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound_voice_profile_id]
   */
  export interface Filter {
    /**
     * Application name filtering operations
     */
    application_name?: Filter.ApplicationName;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }

  export namespace Filter {
    /**
     * Application name filtering operations
     */
    export interface ApplicationName {
      /**
       * If present, applications with <code>application_name</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }
  }
}

export declare namespace FaxApplications {
  export {
    type FaxApplication as FaxApplication,
    type FaxApplicationCreateResponse as FaxApplicationCreateResponse,
    type FaxApplicationRetrieveResponse as FaxApplicationRetrieveResponse,
    type FaxApplicationUpdateResponse as FaxApplicationUpdateResponse,
    type FaxApplicationDeleteResponse as FaxApplicationDeleteResponse,
    type FaxApplicationsDefaultFlatPagination as FaxApplicationsDefaultFlatPagination,
    type FaxApplicationCreateParams as FaxApplicationCreateParams,
    type FaxApplicationUpdateParams as FaxApplicationUpdateParams,
    type FaxApplicationListParams as FaxApplicationListParams,
  };
}
