// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CivicAddressesAPI from './civic-addresses';
import {
  CivicAddressListParams,
  CivicAddressListResponse,
  CivicAddressRetrieveParams,
  CivicAddressRetrieveResponse,
  CivicAddresses,
} from './civic-addresses';
import * as LogMessagesAPI from './log-messages';
import {
  LogMessageDismissResponse,
  LogMessageListParams,
  LogMessageListResponse,
  LogMessageListResponsesDefaultPaginationForLogMessages,
  LogMessageRetrieveResponse,
  LogMessages,
} from './log-messages';
import * as PhoneNumbersAPI from './phone-numbers';
import {
  ExternalConnectionPhoneNumber,
  ExternalConnectionPhoneNumbersDefaultFlatPagination,
  PhoneNumberListParams,
  PhoneNumberRetrieveParams,
  PhoneNumberRetrieveResponse,
  PhoneNumberUpdateParams,
  PhoneNumberUpdateResponse,
  PhoneNumbers,
} from './phone-numbers';
import * as ReleasesAPI from './releases';
import {
  ReleaseListParams,
  ReleaseListResponse,
  ReleaseListResponsesDefaultFlatPagination,
  ReleaseRetrieveParams,
  ReleaseRetrieveResponse,
  Releases,
} from './releases';
import * as UploadsAPI from './uploads';
import {
  TnUploadEntry,
  Upload,
  UploadCreateParams,
  UploadCreateResponse,
  UploadListParams,
  UploadPendingCountResponse,
  UploadRefreshStatusResponse,
  UploadRetrieveParams,
  UploadRetrieveResponse,
  UploadRetryParams,
  UploadRetryResponse,
  Uploads,
  UploadsDefaultFlatPagination,
} from './uploads';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ExternalConnections extends APIResource {
  logMessages: LogMessagesAPI.LogMessages = new LogMessagesAPI.LogMessages(this._client);
  civicAddresses: CivicAddressesAPI.CivicAddresses = new CivicAddressesAPI.CivicAddresses(this._client);
  phoneNumbers: PhoneNumbersAPI.PhoneNumbers = new PhoneNumbersAPI.PhoneNumbers(this._client);
  releases: ReleasesAPI.Releases = new ReleasesAPI.Releases(this._client);
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this._client);

  /**
   * Creates a new External Connection based on the parameters sent in the request.
   * The external_sip_connection and outbound voice profile id are required. Once
   * created, you can assign phone numbers to your application using the
   * `/phone_numbers` endpoint.
   *
   * @example
   * ```ts
   * const externalConnection =
   *   await client.externalConnections.create({
   *     external_sip_connection: 'zoom',
   *     outbound: {},
   *   });
   * ```
   */
  create(
    body: ExternalConnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalConnectionCreateResponse> {
    return this._client.post('/external_connections', { body, ...options });
  }

  /**
   * Return the details of an existing External Connection inside the 'data'
   * attribute of the response.
   *
   * @example
   * ```ts
   * const externalConnection =
   *   await client.externalConnections.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ExternalConnectionRetrieveResponse> {
    return this._client.get(path`/external_connections/${id}`, options);
  }

  /**
   * Updates settings of an existing External Connection based on the parameters of
   * the request.
   *
   * @example
   * ```ts
   * const externalConnection =
   *   await client.externalConnections.update('id', {
   *     outbound: {
   *       outbound_voice_profile_id:
   *         'outbound_voice_profile_id',
   *     },
   *   });
   * ```
   */
  update(
    id: string,
    body: ExternalConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalConnectionUpdateResponse> {
    return this._client.patch(path`/external_connections/${id}`, { body, ...options });
  }

  /**
   * This endpoint returns a list of your External Connections inside the 'data'
   * attribute of the response. External Connections are used by Telnyx customers to
   * seamless configure SIP trunking integrations with Telnyx Partners, through
   * External Voice Integrations in Mission Control Portal.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const externalConnection of client.externalConnections.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ExternalConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ExternalConnectionsDefaultFlatPagination, ExternalConnection> {
    return this._client.getAPIList('/external_connections', DefaultFlatPagination<ExternalConnection>, {
      query,
      ...options,
    });
  }

  /**
   * Permanently deletes an External Connection. Deletion may be prevented if the
   * application is in use by phone numbers, is active, or if it is an Operator
   * Connect connection. To remove an Operator Connect integration please contact
   * Telnyx support.
   *
   * @example
   * ```ts
   * const externalConnection =
   *   await client.externalConnections.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<ExternalConnectionDeleteResponse> {
    return this._client.delete(path`/external_connections/${id}`, options);
  }

  /**
   * Update a location's static emergency address
   *
   * @example
   * ```ts
   * const response =
   *   await client.externalConnections.updateLocation(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       static_emergency_address_id:
   *         '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  updateLocation(
    locationID: string,
    params: ExternalConnectionUpdateLocationParams,
    options?: RequestOptions,
  ): APIPromise<ExternalConnectionUpdateLocationResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/external_connections/${id}/locations/${locationID}`, {
      body,
      ...options,
    });
  }
}

export type ExternalConnectionsDefaultFlatPagination = DefaultFlatPagination<ExternalConnection>;

export interface ExternalConnection {
  /**
   * Uniquely identifies the resource.
   */
  id?: string;

  /**
   * Specifies whether the connection can be used.
   */
  active?: boolean;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * If the credential associated with this service is active.
   */
  credential_active?: boolean;

  /**
   * The service that will be consuming this connection.
   */
  external_sip_connection?: 'zoom' | 'operator_connect';

  inbound?: ExternalConnection.Inbound;

  outbound?: ExternalConnection.Outbound;

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

export namespace ExternalConnection {
  export interface Inbound {
    /**
     * When set, this will limit the number of concurrent inbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;
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

export interface ExternalVoiceIntegrationsPaginationMeta {
  page_number: number;

  total_pages: number;

  page_size?: number;

  total_results?: number;
}

export interface ExternalConnectionCreateResponse {
  data?: ExternalConnection;
}

export interface ExternalConnectionRetrieveResponse {
  data?: ExternalConnection;
}

export interface ExternalConnectionUpdateResponse {
  data?: ExternalConnection;
}

export interface ExternalConnectionDeleteResponse {
  data?: ExternalConnection;
}

export interface ExternalConnectionUpdateLocationResponse {
  data?: ExternalConnectionUpdateLocationResponse.Data;
}

export namespace ExternalConnectionUpdateLocationResponse {
  export interface Data {
    accepted_address_suggestions?: boolean;

    location_id?: string;

    static_emergency_address_id?: string;
  }
}

export interface ExternalConnectionCreateParams {
  /**
   * The service that will be consuming this connection.
   */
  external_sip_connection: 'zoom';

  outbound: ExternalConnectionCreateParams.Outbound;

  /**
   * Specifies whether the connection can be used.
   */
  active?: boolean;

  inbound?: ExternalConnectionCreateParams.Inbound;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

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

export namespace ExternalConnectionCreateParams {
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

  export interface Inbound {
    /**
     * The ID of the outbound voice profile to use for inbound calls.
     */
    outbound_voice_profile_id: string;

    /**
     * When set, this will limit the number of concurrent inbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;
  }
}

export interface ExternalConnectionUpdateParams {
  outbound: ExternalConnectionUpdateParams.Outbound;

  /**
   * Specifies whether the connection can be used.
   */
  active?: boolean;

  inbound?: ExternalConnectionUpdateParams.Inbound;

  /**
   * Tags associated with the connection.
   */
  tags?: Array<string>;

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

export namespace ExternalConnectionUpdateParams {
  export interface Outbound {
    /**
     * Identifies the associated outbound voice profile.
     */
    outbound_voice_profile_id: string;

    /**
     * When set, this will limit the number of concurrent outbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;
  }

  export interface Inbound {
    /**
     * When set, this will limit the number of concurrent inbound calls to phone
     * numbers associated with this connection.
     */
    channel_limit?: number;
  }
}

export interface ExternalConnectionListParams extends DefaultFlatPaginationParams {
  /**
   * Filter parameter for external connections (deepObject style). Supports filtering
   * by connection_name, external_sip_connection, id, created_at, and phone_number.
   */
  filter?: ExternalConnectionListParams.Filter;
}

export namespace ExternalConnectionListParams {
  /**
   * Filter parameter for external connections (deepObject style). Supports filtering
   * by connection_name, external_sip_connection, id, created_at, and phone_number.
   */
  export interface Filter {
    /**
     * If present, connections with <code>id</code> matching the given value will be
     * returned.
     */
    id?: string;

    connection_name?: Filter.ConnectionName;

    /**
     * If present, connections with <code>created_at</code> date matching the given
     * YYYY-MM-DD date will be returned.
     */
    created_at?: string;

    /**
     * If present, connections with <code>external_sip_connection</code> matching the
     * given value will be returned.
     */
    external_sip_connection?: 'zoom' | 'operator_connect';

    /**
     * Phone number filter for connections. Note: Despite the 'contains' name, this
     * requires a full E164 match per the original specification.
     */
    phone_number?: Filter.PhoneNumber;
  }

  export namespace Filter {
    export interface ConnectionName {
      /**
       * If present, connections with <code>connection_name</code> containing the given
       * value will be returned. Matching is not case-sensitive. Requires at least three
       * characters.
       */
      contains?: string;
    }

    /**
     * Phone number filter for connections. Note: Despite the 'contains' name, this
     * requires a full E164 match per the original specification.
     */
    export interface PhoneNumber {
      /**
       * If present, connections associated with the given phone_number will be returned.
       * A full match is necessary with a e164 format.
       */
      contains?: string;
    }
  }
}

export interface ExternalConnectionUpdateLocationParams {
  /**
   * Path param: The ID of the external connection
   */
  id: string;

  /**
   * Body param: A new static emergency address ID to update the location with
   */
  static_emergency_address_id: string;
}

ExternalConnections.LogMessages = LogMessages;
ExternalConnections.CivicAddresses = CivicAddresses;
ExternalConnections.PhoneNumbers = PhoneNumbers;
ExternalConnections.Releases = Releases;
ExternalConnections.Uploads = Uploads;

export declare namespace ExternalConnections {
  export {
    type ExternalConnection as ExternalConnection,
    type ExternalVoiceIntegrationsPaginationMeta as ExternalVoiceIntegrationsPaginationMeta,
    type ExternalConnectionCreateResponse as ExternalConnectionCreateResponse,
    type ExternalConnectionRetrieveResponse as ExternalConnectionRetrieveResponse,
    type ExternalConnectionUpdateResponse as ExternalConnectionUpdateResponse,
    type ExternalConnectionDeleteResponse as ExternalConnectionDeleteResponse,
    type ExternalConnectionUpdateLocationResponse as ExternalConnectionUpdateLocationResponse,
    type ExternalConnectionsDefaultFlatPagination as ExternalConnectionsDefaultFlatPagination,
    type ExternalConnectionCreateParams as ExternalConnectionCreateParams,
    type ExternalConnectionUpdateParams as ExternalConnectionUpdateParams,
    type ExternalConnectionListParams as ExternalConnectionListParams,
    type ExternalConnectionUpdateLocationParams as ExternalConnectionUpdateLocationParams,
  };

  export {
    LogMessages as LogMessages,
    type LogMessageRetrieveResponse as LogMessageRetrieveResponse,
    type LogMessageListResponse as LogMessageListResponse,
    type LogMessageDismissResponse as LogMessageDismissResponse,
    type LogMessageListResponsesDefaultPaginationForLogMessages as LogMessageListResponsesDefaultPaginationForLogMessages,
    type LogMessageListParams as LogMessageListParams,
  };

  export {
    CivicAddresses as CivicAddresses,
    type CivicAddressRetrieveResponse as CivicAddressRetrieveResponse,
    type CivicAddressListResponse as CivicAddressListResponse,
    type CivicAddressRetrieveParams as CivicAddressRetrieveParams,
    type CivicAddressListParams as CivicAddressListParams,
  };

  export {
    PhoneNumbers as PhoneNumbers,
    type ExternalConnectionPhoneNumber as ExternalConnectionPhoneNumber,
    type PhoneNumberRetrieveResponse as PhoneNumberRetrieveResponse,
    type PhoneNumberUpdateResponse as PhoneNumberUpdateResponse,
    type ExternalConnectionPhoneNumbersDefaultFlatPagination as ExternalConnectionPhoneNumbersDefaultFlatPagination,
    type PhoneNumberRetrieveParams as PhoneNumberRetrieveParams,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
  };

  export {
    Releases as Releases,
    type ReleaseRetrieveResponse as ReleaseRetrieveResponse,
    type ReleaseListResponse as ReleaseListResponse,
    type ReleaseListResponsesDefaultFlatPagination as ReleaseListResponsesDefaultFlatPagination,
    type ReleaseRetrieveParams as ReleaseRetrieveParams,
    type ReleaseListParams as ReleaseListParams,
  };

  export {
    Uploads as Uploads,
    type TnUploadEntry as TnUploadEntry,
    type Upload as Upload,
    type UploadCreateResponse as UploadCreateResponse,
    type UploadRetrieveResponse as UploadRetrieveResponse,
    type UploadPendingCountResponse as UploadPendingCountResponse,
    type UploadRefreshStatusResponse as UploadRefreshStatusResponse,
    type UploadRetryResponse as UploadRetryResponse,
    type UploadsDefaultFlatPagination as UploadsDefaultFlatPagination,
    type UploadCreateParams as UploadCreateParams,
    type UploadRetrieveParams as UploadRetrieveParams,
    type UploadListParams as UploadListParams,
    type UploadRetryParams as UploadRetryParams,
  };
}
