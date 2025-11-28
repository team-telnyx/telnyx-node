// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
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
  ): APIPromise<MobileVoiceConnectionListResponse> {
    return this._client.get('/v2/mobile_voice_connections', { query, ...options });
  }

  /**
   * Delete a Mobile Voice Connection
   */
  delete(id: string, options?: RequestOptions): APIPromise<MobileVoiceConnectionDeleteResponse> {
    return this._client.delete(path`/v2/mobile_voice_connections/${id}`, options);
  }
}

export interface MobileVoiceConnectionCreateResponse {
  data?: MobileVoiceConnectionCreateResponse.Data;
}

export namespace MobileVoiceConnectionCreateResponse {
  export interface Data {
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

    inbound?: Data.Inbound;

    outbound?: Data.Outbound;

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

  export namespace Data {
    export interface Inbound {
      channel_limit?: number | null;
    }

    export interface Outbound {
      channel_limit?: number | null;

      outbound_voice_profile_id?: string | null;
    }
  }
}

export interface MobileVoiceConnectionRetrieveResponse {
  data?: MobileVoiceConnectionRetrieveResponse.Data;
}

export namespace MobileVoiceConnectionRetrieveResponse {
  export interface Data {
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

    inbound?: Data.Inbound;

    outbound?: Data.Outbound;

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

  export namespace Data {
    export interface Inbound {
      channel_limit?: number | null;
    }

    export interface Outbound {
      channel_limit?: number | null;

      outbound_voice_profile_id?: string | null;
    }
  }
}

export interface MobileVoiceConnectionUpdateResponse {
  data?: MobileVoiceConnectionUpdateResponse.Data;
}

export namespace MobileVoiceConnectionUpdateResponse {
  export interface Data {
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

    inbound?: Data.Inbound;

    outbound?: Data.Outbound;

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

  export namespace Data {
    export interface Inbound {
      channel_limit?: number | null;
    }

    export interface Outbound {
      channel_limit?: number | null;

      outbound_voice_profile_id?: string | null;
    }
  }
}

export interface MobileVoiceConnectionListResponse {
  data?: Array<MobileVoiceConnectionListResponse.Data>;

  meta?: MobileVoiceConnectionListResponse.Meta;
}

export namespace MobileVoiceConnectionListResponse {
  export interface Data {
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

    inbound?: Data.Inbound;

    outbound?: Data.Outbound;

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

  export namespace Data {
    export interface Inbound {
      channel_limit?: number | null;
    }

    export interface Outbound {
      channel_limit?: number | null;

      outbound_voice_profile_id?: string | null;
    }
  }

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface MobileVoiceConnectionDeleteResponse {
  data?: MobileVoiceConnectionDeleteResponse.Data;
}

export namespace MobileVoiceConnectionDeleteResponse {
  export interface Data {
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

    inbound?: Data.Inbound;

    outbound?: Data.Outbound;

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

  export namespace Data {
    export interface Inbound {
      channel_limit?: number | null;
    }

    export interface Outbound {
      channel_limit?: number | null;

      outbound_voice_profile_id?: string | null;
    }
  }
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

export interface MobileVoiceConnectionListParams {
  /**
   * Filter by connection name containing the given string
   */
  'filter[connection_name][contains]'?: string;

  /**
   * The page number to load
   */
  'page[number]'?: number;

  /**
   * The size of the page
   */
  'page[size]'?: number;

  /**
   * Sort by field (e.g., created_at, connection_name, active). Prefix with - for
   * descending order.
   */
  sort?: string;
}

export declare namespace MobileVoiceConnections {
  export {
    type MobileVoiceConnectionCreateResponse as MobileVoiceConnectionCreateResponse,
    type MobileVoiceConnectionRetrieveResponse as MobileVoiceConnectionRetrieveResponse,
    type MobileVoiceConnectionUpdateResponse as MobileVoiceConnectionUpdateResponse,
    type MobileVoiceConnectionListResponse as MobileVoiceConnectionListResponse,
    type MobileVoiceConnectionDeleteResponse as MobileVoiceConnectionDeleteResponse,
    type MobileVoiceConnectionCreateParams as MobileVoiceConnectionCreateParams,
    type MobileVoiceConnectionUpdateParams as MobileVoiceConnectionUpdateParams,
    type MobileVoiceConnectionListParams as MobileVoiceConnectionListParams,
  };
}
