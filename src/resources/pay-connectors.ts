// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import {
  EmailBracketCursorPagination,
  type EmailBracketCursorPaginationParams,
  PagePromise,
} from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Generic payment connector configuration.
 */
export class PayConnectors extends APIResource {
  /**
   * List connectors belonging to the authenticated organization, including
   * connectors created by other users in that organization. Set filter[type]=generic
   * to restrict results to the type covered here. Results default to newest
   * created_at first. Use meta.end_cursor as page[after] for the next page, or
   * meta.start_cursor as page[before] for the preceding page. Omit both cursors for
   * the first page; if both are supplied, page[after] takes precedence. Responses
   * omit passwords and tokens.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const payConnector of client.payConnectors.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PayConnectorListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PayConnectorsEmailBracketCursorPagination, PayConnector> {
    return this._client.getAPIList('/pay_connectors', EmailBracketCursorPagination<PayConnector>, {
      query,
      ...options,
    });
  }

  /**
   * Create a generic payment connector in the authenticated organization. The name
   * must be unique in that organization. Authentication supplies ownership; do not
   * send user_id or organization_id. Config is encrypted at rest; passwords and
   * tokens are omitted from responses. This operation stores configuration and does
   * not initiate a payment. See the
   * [processor contract](/docs/voice/programmable-voice/pay#request-sent-to-the-payment-processor).
   *
   * @example
   * ```ts
   * const payConnectorResponse =
   *   await client.payConnectors.create({
   *     config: {
   *       endpoint_url: 'https://processor.example.com/pay',
   *       auth_type: 'none',
   *     },
   *     name: 'my-payment-connector',
   *     mode: 'test',
   *     type: 'generic',
   *   });
   * ```
   */
  create(body: PayConnectorCreateParams, options?: RequestOptions): APIPromise<PayConnectorResponse> {
    return this._client.post('/pay_connectors', { body, ...options });
  }

  /**
   * Delete a connector by name in the authenticated organization. Both test and live
   * connectors can be deleted. Returns no response body on success; a missing name
   * or a connector in another organization returns 404.
   *
   * @example
   * ```ts
   * await client.payConnectors.delete('my-payment-connector');
   * ```
   */
  delete(name: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/pay_connectors/${name}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve a connector by name within the authenticated organization. Password and
   * token are omitted. A missing name or a connector owned by another organization
   * returns 404.
   *
   * @example
   * ```ts
   * const payConnectorResponse =
   *   await client.payConnectors.retrieve(
   *     'my-payment-connector',
   *   );
   * ```
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<PayConnectorResponse> {
    return this._client.get(path`/pay_connectors/${name}`, options);
  }

  /**
   * Update a generic connector by name in the authenticated organization. Both test
   * and live connectors can be updated through the API. Omitted fields remain
   * unchanged. Supplying config replaces the entire config; it does not merge keys.
   * Include endpoint_url and the credentials required for the selected auth_type on
   * every config replacement. Omitting config preserves existing credentials,
   * allowing a mode-only update. The path name cannot be renamed. Public updates use
   * PATCH.
   *
   * @example
   * ```ts
   * const payConnectorResponse =
   *   await client.payConnectors.update(
   *     'my-payment-connector',
   *     { mode: 'live' },
   *   );
   * ```
   */
  update(
    name: string,
    body: PayConnectorUpdateParams,
    options?: RequestOptions,
  ): APIPromise<PayConnectorResponse> {
    return this._client.patch(path`/pay_connectors/${name}`, { body, ...options });
  }
}

export type PayConnectorsEmailBracketCursorPagination = EmailBracketCursorPagination<PayConnector>;

/**
 * Configuration for a generic connector. A config update replaces the complete
 * object, not individual keys. Unknown config keys are discarded. Authentication
 * credentials must be nonblank strings when required by the selected auth_type.
 */
export type GenericPayConnectorConfig =
  | GenericPayConnectorConfig.BasicAuthenticationAlsoTheValidationDefault
  | GenericPayConnectorConfig.BearerAuthentication
  | GenericPayConnectorConfig.NoProcessorAuthentication;

export namespace GenericPayConnectorConfig {
  export interface BasicAuthenticationAlsoTheValidationDefault {
    /**
     * Basic password.
     */
    password: string;

    /**
     * Basic username.
     */
    username: string;

    /**
     * Nonblank string required for bearer authentication. Write-only; omitted from
     * responses. Re-send when replacing a bearer-auth config.
     */
    token?: unknown;

    auth_type?: 'basic';

    /**
     * HTTP or HTTPS processor URL with a host. Use HTTPS to protect payment data in
     * transit.
     */
    endpoint_url?: string;

    /**
     * Processor HTTP timeout in milliseconds. Omitted or null uses 10000; null is
     * removed before storage. Not the IVR digit-gather timeout.
     */
    timeout?: number | null;
  }

  export interface BearerAuthentication {
    /**
     * Processor bearer token.
     */
    token: string;

    auth_type: 'bearer';

    /**
     * HTTP or HTTPS processor URL with a host. Use HTTPS to protect payment data in
     * transit.
     */
    endpoint_url?: string;

    /**
     * Nonblank string required for basic authentication. Write-only; omitted from
     * responses. Re-send when replacing a basic-auth config.
     */
    password?: unknown;

    /**
     * Processor HTTP timeout in milliseconds. Omitted or null uses 10000; null is
     * removed before storage. Not the IVR digit-gather timeout.
     */
    timeout?: number | null;

    /**
     * Nonblank string required for basic authentication. Returned in connector
     * responses.
     */
    username?: unknown;
  }

  export interface NoProcessorAuthentication {
    auth_type: 'none';

    /**
     * Nonblank string required for bearer authentication. Write-only; omitted from
     * responses. Re-send when replacing a bearer-auth config.
     */
    token?: unknown;

    /**
     * HTTP or HTTPS processor URL with a host. Use HTTPS to protect payment data in
     * transit.
     */
    endpoint_url?: string;

    /**
     * Nonblank string required for basic authentication. Write-only; omitted from
     * responses. Re-send when replacing a basic-auth config.
     */
    password?: unknown;

    /**
     * Processor HTTP timeout in milliseconds. Omitted or null uses 10000; null is
     * removed before storage. Not the IVR digit-gather timeout.
     */
    timeout?: number | null;

    /**
     * Nonblank string required for basic authentication. Returned in connector
     * responses.
     */
    username?: unknown;
  }
}

/**
 * Organization-owned connector. Examples and config properties here describe
 * generic connectors; listing is not restricted to that type unless
 * filter[type]=generic is supplied. Passwords and bearer tokens are omitted, not
 * masked. Defaults for auth_type and timeout need not appear in stored config.
 */
export interface PayConnector {
  /**
   * Connector identifier.
   */
  id?: string;

  /**
   * Redacted stored configuration. Generic connector fields are shown here. Unknown
   * config keys are discarded. Password and token are never returned.
   */
  config?: PayConnector.Config;

  /**
   * Creation time.
   */
  created_at?: string;

  /**
   * Configured mode.
   */
  mode?: 'test' | 'live';

  /**
   * Connector name used for retrieval, update, deletion and Pay.
   */
  name?: string;

  /**
   * Owning organization; assigned from authentication, not request input.
   */
  organization_id?: string;

  /**
   * Resource type.
   */
  record_type?: 'pay_connector';

  /**
   * Connector type; generic is covered by this reference. Other types may appear in
   * unfiltered lists.
   */
  type?: string;

  /**
   * Last update time.
   */
  updated_at?: string;

  /**
   * Creating user; assigned from authentication, not request input.
   */
  user_id?: string;
}

export namespace PayConnector {
  /**
   * Redacted stored configuration. Generic connector fields are shown here. Unknown
   * config keys are discarded. Password and token are never returned.
   */
  export interface Config {
    /**
     * Stored processor authentication selection. Omitted if it was not explicitly
     * configured.
     */
    auth_type?: 'none' | 'basic' | 'bearer';

    /**
     * HTTP or HTTPS processor URL with a host. Use HTTPS to protect payment data in
     * transit.
     */
    endpoint_url?: string;

    /**
     * Stored processor HTTP timeout in milliseconds. Omitted when no timeout was
     * configured; the effective runtime default is 10000.
     */
    timeout?: number;

    /**
     * Stored username, when supplied. Required to be a nonblank string for basic
     * authentication.
     */
    username?: unknown;
  }
}

export interface PayConnectorResponse {
  /**
   * Organization-owned connector. Examples and config properties here describe
   * generic connectors; listing is not restricted to that type unless
   * filter[type]=generic is supplied. Passwords and bearer tokens are omitted, not
   * masked. Defaults for auth_type and timeout need not appear in stored config.
   */
  data?: PayConnector;
}

export interface PayConnectorListParams extends EmailBracketCursorPaginationParams {
  /**
   * Equal to this created_at timestamp.
   */
  'filter[created_at][eq]'?: string;

  /**
   * After this created_at timestamp.
   */
  'filter[created_at][gt]'?: string;

  /**
   * At or after this created_at timestamp.
   */
  'filter[created_at][gte]'?: string;

  /**
   * Before this created_at timestamp.
   */
  'filter[created_at][lt]'?: string;

  /**
   * At or before this created_at timestamp.
   */
  'filter[created_at][lte]'?: string;

  /**
   * Exact match on mode.
   */
  'filter[mode]'?: string;

  /**
   * Exact match on name.
   */
  'filter[name]'?: string;

  /**
   * Exact match on type.
   */
  'filter[type]'?: string;

  /**
   * Equal to this updated_at timestamp.
   */
  'filter[updated_at][eq]'?: string;

  /**
   * After this updated_at timestamp.
   */
  'filter[updated_at][gt]'?: string;

  /**
   * At or after this updated_at timestamp.
   */
  'filter[updated_at][gte]'?: string;

  /**
   * Before this updated_at timestamp.
   */
  'filter[updated_at][lt]'?: string;

  /**
   * At or before this updated_at timestamp.
   */
  'filter[updated_at][lte]'?: string;

  /**
   * Opaque cursor from meta.start_cursor.
   */
  'page[before]'?: string;

  /**
   * Comma-separated created_at or updated_at fields, optionally prefixed with - for
   * descending order.
   */
  sort?: string;
}

export interface PayConnectorCreateParams {
  /**
   * Configuration for a generic connector. A config update replaces the complete
   * object, not individual keys. Unknown config keys are discarded. Authentication
   * credentials must be nonblank strings when required by the selected auth_type.
   */
  config: GenericPayConnectorConfig;

  /**
   * Unique within the authenticated organization. Used in resource paths and as
   * connector_name in the Call Control Pay request. Cannot be renamed by update.
   */
  name: string;

  /**
   * Defaults to test on creation. Test restricts collected card numbers but still
   * contacts the configured processor; use a processor sandbox URL and sandbox
   * credentials. Live removes the test-card restriction. Neither mode locks API
   * updates.
   */
  mode?: 'test' | 'live';

  /**
   * Connector type covered by this reference.
   */
  type?: 'generic';
}

export interface PayConnectorUpdateParams {
  /**
   * Configuration for a generic connector. A config update replaces the complete
   * object, not individual keys. Unknown config keys are discarded. Authentication
   * credentials must be nonblank strings when required by the selected auth_type.
   */
  config?: GenericPayConnectorConfig;

  /**
   * Omit to preserve the existing mode. Use an explicit test or live value.
   */
  mode?: 'test' | 'live';

  /**
   * Generic connector type. Omit to preserve the existing value.
   */
  type?: 'generic';
}

export declare namespace PayConnectors {
  export {
    type GenericPayConnectorConfig as GenericPayConnectorConfig,
    type PayConnector as PayConnector,
    type PayConnectorResponse as PayConnectorResponse,
    type PayConnectorsEmailBracketCursorPagination as PayConnectorsEmailBracketCursorPagination,
    type PayConnectorListParams as PayConnectorListParams,
    type PayConnectorCreateParams as PayConnectorCreateParams,
    type PayConnectorUpdateParams as PayConnectorUpdateParams,
  };
}
