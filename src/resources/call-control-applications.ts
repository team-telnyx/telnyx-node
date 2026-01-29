// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class CallControlApplications extends APIResource {
  /**
   * Create a call control application.
   *
   * @example
   * ```ts
   * const callControlApplication =
   *   await client.callControlApplications.create({
   *     application_name: 'call-router',
   *     webhook_event_url: 'https://example.com',
   *   });
   * ```
   */
  create(
    body: CallControlApplicationCreateParams,
    options?: RequestOptions,
  ): APIPromise<CallControlApplicationCreateResponse> {
    return this._client.post('/call_control_applications', { body, ...options });
  }

  /**
   * Retrieves the details of an existing call control application.
   *
   * @example
   * ```ts
   * const callControlApplication =
   *   await client.callControlApplications.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CallControlApplicationRetrieveResponse> {
    return this._client.get(path`/call_control_applications/${id}`, options);
  }

  /**
   * Updates settings of an existing call control application.
   *
   * @example
   * ```ts
   * const callControlApplication =
   *   await client.callControlApplications.update('id', {
   *     application_name: 'call-router',
   *     webhook_event_url: 'https://example.com',
   *   });
   * ```
   */
  update(
    id: string,
    body: CallControlApplicationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CallControlApplicationUpdateResponse> {
    return this._client.patch(path`/call_control_applications/${id}`, { body, ...options });
  }

  /**
   * Return a list of call control applications.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const callControlApplication of client.callControlApplications.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: CallControlApplicationListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<CallControlApplicationsDefaultFlatPagination, CallControlApplication> {
    return this._client.getAPIList(
      '/call_control_applications',
      DefaultFlatPagination<CallControlApplication>,
      { query, ...options },
    );
  }

  /**
   * Deletes a call control application.
   *
   * @example
   * ```ts
   * const callControlApplication =
   *   await client.callControlApplications.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CallControlApplicationDeleteResponse> {
    return this._client.delete(path`/call_control_applications/${id}`, options);
  }
}

export type CallControlApplicationsDefaultFlatPagination = DefaultFlatPagination<CallControlApplication>;

export interface CallControlApplication {
  id?: string;

  /**
   * Specifies whether the connection can be used.
   */
  active?: boolean;

  /**
   * <code>Latency</code> directs Telnyx to route media through the site with the
   * lowest round-trip time to the user's connection. Telnyx calculates this time
   * using ICMP ping messages. This can be disabled by specifying a site to handle
   * all media.
   */
  anchorsite_override?:
    | 'Latency'
    | 'Chicago, IL'
    | 'Ashburn, VA'
    | 'San Jose, CA'
    | 'London, UK'
    | 'Chennai, IN'
    | 'Amsterdam, Netherlands'
    | 'Toronto, Canada'
    | 'Sydney, Australia';

  /**
   * A user-assigned name to help manage the application.
   */
  application_name?: string;

  /**
   * Specifies if call cost webhooks should be sent for this Call Control
   * Application.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * ISO 8601 formatted date of when the resource was created
   */
  created_at?: string;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: 'RFC 2833' | 'Inband' | 'SIP INFO';

  /**
   * Specifies whether calls to phone numbers associated with this connection should
   * hangup after timing out.
   */
  first_command_timeout?: boolean;

  /**
   * Specifies how many seconds to wait before timing out a dial command.
   */
  first_command_timeout_secs?: number;

  inbound?: CallControlApplicationInbound;

  outbound?: CallControlApplicationOutbound;

  record_type?: 'call_control_application';

  /**
   * When enabled, DTMF digits entered by users will be redacted in debug logs to
   * protect PII data entered through IVR interactions.
   */
  redact_dtmf_debug_logging?: boolean;

  /**
   * Tags assigned to the Call Control Application.
   */
  tags?: Array<string>;

  /**
   * ISO 8601 formatted date of when the resource was last updated
   */
  updated_at?: string;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: '1' | '2';

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails. Must include a scheme, such as `https`.
   */
  webhook_event_failover_url?: string | null;

  /**
   * The URL where webhooks related to this connection will be sent. Must include a
   * scheme, such as `https`.
   */
  webhook_event_url?: string;

  webhook_timeout_secs?: number | null;
}

export interface CallControlApplicationInbound {
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

export interface CallControlApplicationOutbound {
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

export interface CallControlApplicationCreateResponse {
  data?: CallControlApplication;
}

export interface CallControlApplicationRetrieveResponse {
  data?: CallControlApplication;
}

export interface CallControlApplicationUpdateResponse {
  data?: CallControlApplication;
}

export interface CallControlApplicationDeleteResponse {
  data?: CallControlApplication;
}

export interface CallControlApplicationCreateParams {
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
   * <code>Latency</code> directs Telnyx to route media through the site with the
   * lowest round-trip time to the user's connection. Telnyx calculates this time
   * using ICMP ping messages. This can be disabled by specifying a site to handle
   * all media.
   */
  anchorsite_override?:
    | 'Latency'
    | 'Chicago, IL'
    | 'Ashburn, VA'
    | 'San Jose, CA'
    | 'London, UK'
    | 'Chennai, IN'
    | 'Amsterdam, Netherlands'
    | 'Toronto, Canada'
    | 'Sydney, Australia';

  /**
   * Specifies if call cost webhooks should be sent for this Call Control
   * Application.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: 'RFC 2833' | 'Inband' | 'SIP INFO';

  /**
   * Specifies whether calls to phone numbers associated with this connection should
   * hangup after timing out.
   */
  first_command_timeout?: boolean;

  /**
   * Specifies how many seconds to wait before timing out a dial command.
   */
  first_command_timeout_secs?: number;

  inbound?: CallControlApplicationInbound;

  outbound?: CallControlApplicationOutbound;

  /**
   * When enabled, DTMF digits entered by users will be redacted in debug logs to
   * protect PII data entered through IVR interactions.
   */
  redact_dtmf_debug_logging?: boolean;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: '1' | '2';

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

export interface CallControlApplicationUpdateParams {
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
   * <code>Latency</code> directs Telnyx to route media through the site with the
   * lowest round-trip time to the user's connection. Telnyx calculates this time
   * using ICMP ping messages. This can be disabled by specifying a site to handle
   * all media.
   */
  anchorsite_override?:
    | 'Latency'
    | 'Chicago, IL'
    | 'Ashburn, VA'
    | 'San Jose, CA'
    | 'London, UK'
    | 'Chennai, IN'
    | 'Amsterdam, Netherlands'
    | 'Toronto, Canada'
    | 'Sydney, Australia';

  /**
   * Specifies if call cost webhooks should be sent for this Call Control
   * Application.
   */
  call_cost_in_webhooks?: boolean;

  /**
   * Sets the type of DTMF digits sent from Telnyx to this Connection. Note that DTMF
   * digits sent to Telnyx will be accepted in all formats.
   */
  dtmf_type?: 'RFC 2833' | 'Inband' | 'SIP INFO';

  /**
   * Specifies whether calls to phone numbers associated with this connection should
   * hangup after timing out.
   */
  first_command_timeout?: boolean;

  /**
   * Specifies how many seconds to wait before timing out a dial command.
   */
  first_command_timeout_secs?: number;

  inbound?: CallControlApplicationInbound;

  outbound?: CallControlApplicationOutbound;

  /**
   * When enabled, DTMF digits entered by users will be redacted in debug logs to
   * protect PII data entered through IVR interactions.
   */
  redact_dtmf_debug_logging?: boolean;

  /**
   * Tags assigned to the Call Control Application.
   */
  tags?: Array<string>;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: '1' | '2';

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

export interface CallControlApplicationListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound.outbound_voice_profile_id],
   * filter[leg_id], filter[application_session_id], filter[connection_id],
   * filter[product], filter[failed], filter[from], filter[to], filter[name],
   * filter[type], filter[occurred_at][eq/gt/gte/lt/lte], filter[status]
   */
  filter?: CallControlApplicationListParams.Filter;

  /**
   * Specifies the sort order for results. By default sorting direction is ascending.
   * To have the results sorted in descending order add the <code> -</code>
   * prefix.<br/><br/> That is: <ul>
   *
   *   <li>
   *     <code>connection_name</code>: sorts the result by the
   *     <code>connection_name</code> field in ascending order.
   *   </li>
   *
   *   <li>
   *     <code>-connection_name</code>: sorts the result by the
   *     <code>connection_name</code> field in descending order.
   *   </li>
   * </ul> <br/> If not given, results are sorted by <code>created_at</code> in descending order.
   */
  sort?: 'created_at' | 'connection_name' | 'active';
}

export namespace CallControlApplicationListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[application_name][contains], filter[outbound.outbound_voice_profile_id],
   * filter[leg_id], filter[application_session_id], filter[connection_id],
   * filter[product], filter[failed], filter[from], filter[to], filter[name],
   * filter[type], filter[occurred_at][eq/gt/gte/lt/lte], filter[status]
   */
  export interface Filter {
    /**
     * Application name filters
     */
    application_name?: Filter.ApplicationName;

    /**
     * The unique identifier of the call session. A session may include multiple call
     * leg events.
     */
    application_session_id?: string;

    /**
     * The unique identifier of the conection.
     */
    connection_id?: string;

    /**
     * Delivery failed or not.
     */
    failed?: boolean;

    /**
     * Filter by From number.
     */
    from?: string;

    /**
     * The unique identifier of an individual call leg.
     */
    leg_id?: string;

    /**
     * If present, conferences will be filtered to those with a matching `name`
     * attribute. Matching is case-sensitive
     */
    name?: string;

    /**
     * Event occurred_at filters
     */
    occurred_at?: Filter.OccurredAt;

    /**
     * Identifies the associated outbound voice profile.
     */
    'outbound.outbound_voice_profile_id'?: string;

    /**
     * Filter by product.
     */
    product?: 'call_control' | 'fax' | 'texml';

    /**
     * If present, conferences will be filtered by status.
     */
    status?: 'init' | 'in_progress' | 'completed';

    /**
     * Filter by To number.
     */
    to?: string;

    /**
     * Event type
     */
    type?: 'command' | 'webhook';
  }

  export namespace Filter {
    /**
     * Application name filters
     */
    export interface ApplicationName {
      /**
       * If present, applications with <code>application_name</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }

    /**
     * Event occurred_at filters
     */
    export interface OccurredAt {
      /**
       * Event occurred_at: equal
       */
      eq?: string;

      /**
       * Event occurred_at: greater than
       */
      gt?: string;

      /**
       * Event occurred_at: greater than or equal
       */
      gte?: string;

      /**
       * Event occurred_at: lower than
       */
      lt?: string;

      /**
       * Event occurred_at: lower than or equal
       */
      lte?: string;
    }
  }
}

export declare namespace CallControlApplications {
  export {
    type CallControlApplication as CallControlApplication,
    type CallControlApplicationInbound as CallControlApplicationInbound,
    type CallControlApplicationOutbound as CallControlApplicationOutbound,
    type CallControlApplicationCreateResponse as CallControlApplicationCreateResponse,
    type CallControlApplicationRetrieveResponse as CallControlApplicationRetrieveResponse,
    type CallControlApplicationUpdateResponse as CallControlApplicationUpdateResponse,
    type CallControlApplicationDeleteResponse as CallControlApplicationDeleteResponse,
    type CallControlApplicationsDefaultFlatPagination as CallControlApplicationsDefaultFlatPagination,
    type CallControlApplicationCreateParams as CallControlApplicationCreateParams,
    type CallControlApplicationUpdateParams as CallControlApplicationUpdateParams,
    type CallControlApplicationListParams as CallControlApplicationListParams,
  };
}
