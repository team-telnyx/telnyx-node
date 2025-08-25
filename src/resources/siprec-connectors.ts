// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class SiprecConnectors extends APIResource {
  /**
   * Creates a new SIPREC connector configuration.
   *
   * @example
   * ```ts
   * const siprecConnector =
   *   await client.siprecConnectors.create({
   *     host: 'siprec.telnyx.com',
   *     name: 'my-siprec-connector',
   *     port: 5060,
   *   });
   * ```
   */
  create(
    body: SiprecConnectorCreateParams,
    options?: RequestOptions,
  ): APIPromise<SiprecConnectorCreateResponse> {
    return this._client.post('/siprec_connectors', { body, ...options });
  }

  /**
   * Returns details of a stored SIPREC connector.
   *
   * @example
   * ```ts
   * const siprecConnector =
   *   await client.siprecConnectors.retrieve('connector_name');
   * ```
   */
  retrieve(connectorName: string, options?: RequestOptions): APIPromise<SiprecConnectorRetrieveResponse> {
    return this._client.get(path`/siprec_connectors/${connectorName}`, options);
  }

  /**
   * Updates a stored SIPREC connector configuration.
   *
   * @example
   * ```ts
   * const siprecConnector =
   *   await client.siprecConnectors.update('connector_name', {
   *     host: 'siprec.telnyx.com',
   *     name: 'my-siprec-connector',
   *     port: 5060,
   *   });
   * ```
   */
  update(
    connectorName: string,
    body: SiprecConnectorUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SiprecConnectorUpdateResponse> {
    return this._client.put(path`/siprec_connectors/${connectorName}`, { body, ...options });
  }

  /**
   * Deletes a stored SIPREC connector.
   *
   * @example
   * ```ts
   * await client.siprecConnectors.delete('connector_name');
   * ```
   */
  delete(connectorName: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/siprec_connectors/${connectorName}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SiprecConnectorCreateResponse {
  data: SiprecConnectorCreateResponse.Data;
}

export namespace SiprecConnectorCreateResponse {
  export interface Data {
    /**
     * Subdomain to route calls when using Telnyx SRS (optional).
     */
    app_subdomain?: string;

    /**
     * ISO 8601 formatted date/time of creation.
     */
    created_at?: string;

    /**
     * Hostname/IPv4 address of the SIPREC SRS.
     */
    host?: string;

    /**
     * Name for the SIPREC connector resource.
     */
    name?: string;

    /**
     * Port for the SIPREC SRS.
     */
    port?: number;

    record_type?: string;

    /**
     * ISO 8601 formatted date/time of last update.
     */
    updated_at?: string;
  }
}

export interface SiprecConnectorRetrieveResponse {
  data: SiprecConnectorRetrieveResponse.Data;
}

export namespace SiprecConnectorRetrieveResponse {
  export interface Data {
    /**
     * Subdomain to route calls when using Telnyx SRS (optional).
     */
    app_subdomain?: string;

    /**
     * ISO 8601 formatted date/time of creation.
     */
    created_at?: string;

    /**
     * Hostname/IPv4 address of the SIPREC SRS.
     */
    host?: string;

    /**
     * Name for the SIPREC connector resource.
     */
    name?: string;

    /**
     * Port for the SIPREC SRS.
     */
    port?: number;

    record_type?: string;

    /**
     * ISO 8601 formatted date/time of last update.
     */
    updated_at?: string;
  }
}

export interface SiprecConnectorUpdateResponse {
  data: SiprecConnectorUpdateResponse.Data;
}

export namespace SiprecConnectorUpdateResponse {
  export interface Data {
    /**
     * Subdomain to route calls when using Telnyx SRS (optional).
     */
    app_subdomain?: string;

    /**
     * ISO 8601 formatted date/time of creation.
     */
    created_at?: string;

    /**
     * Hostname/IPv4 address of the SIPREC SRS.
     */
    host?: string;

    /**
     * Name for the SIPREC connector resource.
     */
    name?: string;

    /**
     * Port for the SIPREC SRS.
     */
    port?: number;

    record_type?: string;

    /**
     * ISO 8601 formatted date/time of last update.
     */
    updated_at?: string;
  }
}

export interface SiprecConnectorCreateParams {
  /**
   * Hostname/IPv4 address of the SIPREC SRS.
   */
  host: string;

  /**
   * Name for the SIPREC connector resource.
   */
  name: string;

  /**
   * Port for the SIPREC SRS.
   */
  port: number;

  /**
   * Subdomain to route the call when using Telnyx SRS (optional for non-Telnyx SRS).
   */
  app_subdomain?: string;
}

export interface SiprecConnectorUpdateParams {
  /**
   * Hostname/IPv4 address of the SIPREC SRS.
   */
  host: string;

  /**
   * Name for the SIPREC connector resource.
   */
  name: string;

  /**
   * Port for the SIPREC SRS.
   */
  port: number;

  /**
   * Subdomain to route the call when using Telnyx SRS (optional for non-Telnyx SRS).
   */
  app_subdomain?: string;
}

export declare namespace SiprecConnectors {
  export {
    type SiprecConnectorCreateResponse as SiprecConnectorCreateResponse,
    type SiprecConnectorRetrieveResponse as SiprecConnectorRetrieveResponse,
    type SiprecConnectorUpdateResponse as SiprecConnectorUpdateResponse,
    type SiprecConnectorCreateParams as SiprecConnectorCreateParams,
    type SiprecConnectorUpdateParams as SiprecConnectorUpdateParams,
  };
}
