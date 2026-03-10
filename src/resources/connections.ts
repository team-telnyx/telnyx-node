// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as CredentialConnectionsAPI from './credential-connections/credential-connections';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Retrieves the high-level details of an existing connection. To retrieve specific
   * authentication information, use the endpoint for the specific connection type.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ConnectionRetrieveResponse> {
    return this._client.get(path`/connections/${id}`, options);
  }

  /**
   * Returns a list of your connections irrespective of type.
   */
  list(
    query: ConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConnectionListResponsesDefaultFlatPagination, ConnectionListResponse> {
    return this._client.getAPIList('/connections', DefaultFlatPagination<ConnectionListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Lists all active calls for given connection. Acceptable connections are either
   * SIP connections with webhook_url or xml_request_url, call control or texml.
   * Returned results are cursor paginated.
   */
  listActiveCalls(
    connectionID: string,
    query: ConnectionListActiveCallsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ConnectionListActiveCallsResponsesDefaultFlatPagination, ConnectionListActiveCallsResponse> {
    return this._client.getAPIList(
      path`/connections/${connectionID}/active_calls`,
      DefaultFlatPagination<ConnectionListActiveCallsResponse>,
      { query, ...options },
    );
  }
}

export type ConnectionListResponsesDefaultFlatPagination = DefaultFlatPagination<ConnectionListResponse>;

export type ConnectionListActiveCallsResponsesDefaultFlatPagination =
  DefaultFlatPagination<ConnectionListActiveCallsResponse>;

export interface ConnectionRetrieveResponse {
  data?: ConnectionRetrieveResponse.Data;
}

export namespace ConnectionRetrieveResponse {
  export interface Data {
    /**
     * Identifies the specific resource.
     */
    id?: string;

    /**
     * Defaults to true
     */
    active?: boolean;

    /**
     * `Latency` directs Telnyx to route media through the site with the lowest
     * round-trip time to the user's connection. Telnyx calculates this time using ICMP
     * ping messages. This can be disabled by specifying a site to handle all media.
     */
    anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

    connection_name?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * Tags associated with the connection.
     */
    tags?: Array<string>;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;

    /**
     * Determines which webhook format will be used, Telnyx API v1 or v2.
     */
    webhook_api_version?: '1' | '2';

    /**
     * The failover URL where webhooks related to this connection will be sent if
     * sending to the primary URL fails.
     */
    webhook_event_failover_url?: string | null;

    /**
     * The URL where webhooks related to this connection will be sent.
     */
    webhook_event_url?: string | null;
  }
}

export interface ConnectionListResponse {
  /**
   * Identifies the specific resource.
   */
  id?: string;

  /**
   * Defaults to true
   */
  active?: boolean;

  /**
   * `Latency` directs Telnyx to route media through the site with the lowest
   * round-trip time to the user's connection. Telnyx calculates this time using ICMP
   * ping messages. This can be disabled by specifying a site to handle all media.
   */
  anchorsite_override?: CredentialConnectionsAPI.AnchorsiteOverride;

  connection_name?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Identifies the associated outbound voice profile.
   */
  outbound_voice_profile_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;

  /**
   * Determines which webhook format will be used, Telnyx API v1 or v2.
   */
  webhook_api_version?: '1' | '2';

  /**
   * The failover URL where webhooks related to this connection will be sent if
   * sending to the primary URL fails.
   */
  webhook_event_failover_url?: string | null;

  /**
   * The URL where webhooks related to this connection will be sent.
   */
  webhook_event_url?: string | null;
}

export interface ConnectionListActiveCallsResponse {
  /**
   * Unique identifier and token for controlling the call.
   */
  call_control_id: string;

  /**
   * Indicates the duration of the call in seconds
   */
  call_duration: number;

  /**
   * ID that is unique to the call and can be used to correlate webhook events
   */
  call_leg_id: string;

  /**
   * ID that is unique to the call session and can be used to correlate webhook
   * events. Call session is a group of related call legs that logically belong to
   * the same phone call, e.g. an inbound and outbound leg of a transferred call
   */
  call_session_id: string;

  /**
   * State received from a command.
   */
  client_state: string;

  record_type: 'call';
}

export interface ConnectionListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_name], filter[fqdn], filter[outbound_voice_profile_id],
   * filter[outbound.outbound_voice_profile_id]
   */
  filter?: ConnectionListParams.Filter;

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

export namespace ConnectionListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[connection_name], filter[fqdn], filter[outbound_voice_profile_id],
   * filter[outbound.outbound_voice_profile_id]
   */
  export interface Filter {
    /**
     * Filter by connection_name using nested operations
     */
    connection_name?: Filter.ConnectionName;

    /**
     * If present, connections with an `fqdn` that equals the given value will be
     * returned. Matching is case-sensitive, and the full string must match.
     */
    fqdn?: string;

    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id?: string;
  }

  export namespace Filter {
    /**
     * Filter by connection_name using nested operations
     */
    export interface ConnectionName {
      /**
       * If present, connections with <code>connection_name</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }
  }
}

export interface ConnectionListActiveCallsParams extends DefaultFlatPaginationParams {}

export declare namespace Connections {
  export {
    type ConnectionRetrieveResponse as ConnectionRetrieveResponse,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionListActiveCallsResponse as ConnectionListActiveCallsResponse,
    type ConnectionListResponsesDefaultFlatPagination as ConnectionListResponsesDefaultFlatPagination,
    type ConnectionListActiveCallsResponsesDefaultFlatPagination as ConnectionListActiveCallsResponsesDefaultFlatPagination,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionListActiveCallsParams as ConnectionListActiveCallsParams,
  };
}
