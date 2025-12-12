// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class MobileVoiceConnections extends APIResource {
  /**
   * Create a Mobile Voice Connection
   */
  create(
    body: MobileVoiceConnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<MobileVoiceConnectionCreateResponse> {
    return this._client.post('/v2/mobile_voice_connections', { body, ...options });
  }

  /**
   * Retrieve a Mobile Voice Connection
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MobileVoiceConnectionRetrieveResponse> {
    return this._client.get(path`/v2/mobile_voice_connections/${id}`, options);
  }

  /**
   * Update a Mobile Voice Connection
   */
  update(
    id: string,
    body: MobileVoiceConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MobileVoiceConnectionUpdateResponse> {
    return this._client.patch(path`/v2/mobile_voice_connections/${id}`, { body, ...options });
  }

  /**
   * List Mobile Voice Connections
   */
  list(
    query: MobileVoiceConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MobileVoiceConnectionsDefaultFlatPagination, MobileVoiceConnection> {
    return this._client.getAPIList(
      '/v2/mobile_voice_connections',
      DefaultFlatPagination<MobileVoiceConnection>,
      { query, ...options },
    );
  }

  /**
   * Delete a Mobile Voice Connection
   */
  delete(id: string, options?: RequestOptions): APIPromise<MobileVoiceConnectionDeleteResponse> {
    return this._client.delete(path`/v2/mobile_voice_connections/${id}`, options);
  }
}

export type MobileVoiceConnectionsDefaultFlatPagination = DefaultFlatPagination<MobileVoiceConnection>;

export interface MobileVoiceConnection {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * Indicates if the connection is active.
   */
  active?: boolean;

  /**
   * The name of the connection.
   */
  connection_name?: string;

  created_at?: string;

  inbound?: MobileVoiceConnection.Inbound;

  outbound?: MobileVoiceConnection.Outbound;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'mobile_voice_connection';

  /**
   * A list of tags associated with the connection.
   */
  tags?: Array<string>;

  updated_at?: string;

  /**
   * The API version for webhooks.
   */
  webhook_api_version?: '1' | '2' | null;

  /**
   * The failover URL where webhooks are sent.
   */
  webhook_event_failover_url?: string | null;

  /**
   * The URL where webhooks are sent.
   */
  webhook_event_url?: string | null;

  /**
   * The timeout for webhooks in seconds.
   */
  webhook_timeout_secs?: number | null;
}

export namespace MobileVoiceConnection {
  export interface Inbound {
    channel_limit?: number | null;
  }

  export interface Outbound {
    channel_limit?: number | null;

    outbound_voice_profile_id?: string | null;
  }
}

export interface MobileVoiceConnectionCreateResponse {
  data?: MobileVoiceConnection;
}

export interface MobileVoiceConnectionRetrieveResponse {
  data?: MobileVoiceConnection;
}

export interface MobileVoiceConnectionUpdateResponse {
  data?: MobileVoiceConnection;
}

export interface MobileVoiceConnectionDeleteResponse {
  data?: MobileVoiceConnection;
}

export interface MobileVoiceConnectionCreateParams {
  active?: boolean;

  connection_name?: string;

  inbound?: MobileVoiceConnectionCreateParams.Inbound;

  outbound?: MobileVoiceConnectionCreateParams.Outbound;

  tags?: Array<string>;

  webhook_api_version?: '1' | '2';

  webhook_event_failover_url?: string | null;

  webhook_event_url?: string | null;

  webhook_timeout_secs?: number | null;
}

export namespace MobileVoiceConnectionCreateParams {
  export interface Inbound {
    channel_limit?: number;
  }

  export interface Outbound {
    channel_limit?: number;

    outbound_voice_profile_id?: string;
  }
}

export interface MobileVoiceConnectionUpdateParams {
  active?: boolean;

  connection_name?: string;

  inbound?: MobileVoiceConnectionUpdateParams.Inbound;

  outbound?: MobileVoiceConnectionUpdateParams.Outbound;

  tags?: Array<string>;

  webhook_api_version?: '1' | '2';

  webhook_event_failover_url?: string | null;

  webhook_event_url?: string | null;

  webhook_timeout_secs?: number;
}

export namespace MobileVoiceConnectionUpdateParams {
  export interface Inbound {
    channel_limit?: number;
  }

  export interface Outbound {
    channel_limit?: number;

    outbound_voice_profile_id?: string;
  }
}

export interface MobileVoiceConnectionListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by connection name containing the given string
   */
  'filter[connection_name][contains]'?: string;

  /**
   * Sort by field (e.g., created_at, connection_name, active). Prefix with - for
   * descending order.
   */
  sort?: string;
}

export declare namespace MobileVoiceConnections {
  export {
    type MobileVoiceConnection as MobileVoiceConnection,
    type MobileVoiceConnectionCreateResponse as MobileVoiceConnectionCreateResponse,
    type MobileVoiceConnectionRetrieveResponse as MobileVoiceConnectionRetrieveResponse,
    type MobileVoiceConnectionUpdateResponse as MobileVoiceConnectionUpdateResponse,
    type MobileVoiceConnectionDeleteResponse as MobileVoiceConnectionDeleteResponse,
    type MobileVoiceConnectionsDefaultFlatPagination as MobileVoiceConnectionsDefaultFlatPagination,
    type MobileVoiceConnectionCreateParams as MobileVoiceConnectionCreateParams,
    type MobileVoiceConnectionUpdateParams as MobileVoiceConnectionUpdateParams,
    type MobileVoiceConnectionListParams as MobileVoiceConnectionListParams,
  };
}
