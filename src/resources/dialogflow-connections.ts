// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class DialogflowConnections extends APIResource {
  /**
   * Save Dialogflow Credentiails to Telnyx, so it can be used with other Telnyx
   * services.
   *
   * @example
   * ```ts
   * const dialogflowConnection =
   *   await client.dialogflowConnections.create(
   *     'connection_id',
   *     {
   *       service_account: {
   *         type: 'bar',
   *         project_id: 'bar',
   *         private_key_id: 'bar',
   *         private_key: 'bar',
   *         client_email: 'bar',
   *         client_id: 'bar',
   *         auth_uri: 'bar',
   *         token_uri: 'bar',
   *         auth_provider_x509_cert_url: 'bar',
   *         client_x509_cert_url: 'bar',
   *       },
   *     },
   *   );
   * ```
   */
  create(
    connectionID: string,
    body: DialogflowConnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<DialogflowConnectionCreateResponse> {
    return this._client.post(path`/dialogflow_connections/${connectionID}`, { body, ...options });
  }

  /**
   * Return details of the Dialogflow connection associated with the given
   * CallControl connection.
   *
   * @example
   * ```ts
   * const dialogflowConnection =
   *   await client.dialogflowConnections.retrieve(
   *     'connection_id',
   *   );
   * ```
   */
  retrieve(connectionID: string, options?: RequestOptions): APIPromise<DialogflowConnectionRetrieveResponse> {
    return this._client.get(path`/dialogflow_connections/${connectionID}`, options);
  }

  /**
   * Updates a stored Dialogflow Connection.
   *
   * @example
   * ```ts
   * const dialogflowConnection =
   *   await client.dialogflowConnections.update(
   *     'connection_id',
   *     {
   *       service_account: {
   *         type: 'bar',
   *         project_id: 'bar',
   *         private_key_id: 'bar',
   *         private_key: 'bar',
   *         client_email: 'bar',
   *         client_id: 'bar',
   *         auth_uri: 'bar',
   *         token_uri: 'bar',
   *         auth_provider_x509_cert_url: 'bar',
   *         client_x509_cert_url: 'bar',
   *       },
   *     },
   *   );
   * ```
   */
  update(
    connectionID: string,
    body: DialogflowConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DialogflowConnectionUpdateResponse> {
    return this._client.put(path`/dialogflow_connections/${connectionID}`, { body, ...options });
  }

  /**
   * Deletes a stored Dialogflow Connection.
   *
   * @example
   * ```ts
   * await client.dialogflowConnections.delete('connection_id');
   * ```
   */
  delete(connectionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/dialogflow_connections/${connectionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface DialogflowConnectionCreateResponse {
  data: DialogflowConnectionCreateResponse.Data;
}

export namespace DialogflowConnectionCreateResponse {
  export interface Data {
    /**
     * Uniquely identifies a Telnyx application (Call Control).
     */
    connection_id?: string;

    /**
     * The id of a configured conversation profile on your Dialogflow account. (If you
     * use Dialogflow CX, this param is required)
     */
    conversation_profile_id?: string;

    /**
     * Which Dialogflow environment will be used.
     */
    environment?: string;

    record_type?: string;

    /**
     * The JSON map to connect your Dialoglow account.
     */
    service_account?: string;
  }
}

export interface DialogflowConnectionRetrieveResponse {
  data: DialogflowConnectionRetrieveResponse.Data;
}

export namespace DialogflowConnectionRetrieveResponse {
  export interface Data {
    /**
     * Uniquely identifies a Telnyx application (Call Control).
     */
    connection_id?: string;

    /**
     * The id of a configured conversation profile on your Dialogflow account. (If you
     * use Dialogflow CX, this param is required)
     */
    conversation_profile_id?: string;

    /**
     * Which Dialogflow environment will be used.
     */
    environment?: string;

    record_type?: string;

    /**
     * The JSON map to connect your Dialoglow account.
     */
    service_account?: string;
  }
}

export interface DialogflowConnectionUpdateResponse {
  data: DialogflowConnectionUpdateResponse.Data;
}

export namespace DialogflowConnectionUpdateResponse {
  export interface Data {
    /**
     * Uniquely identifies a Telnyx application (Call Control).
     */
    connection_id?: string;

    /**
     * The id of a configured conversation profile on your Dialogflow account. (If you
     * use Dialogflow CX, this param is required)
     */
    conversation_profile_id?: string;

    /**
     * Which Dialogflow environment will be used.
     */
    environment?: string;

    record_type?: string;

    /**
     * The JSON map to connect your Dialoglow account.
     */
    service_account?: string;
  }
}

export interface DialogflowConnectionCreateParams {
  /**
   * The JSON map to connect your Dialoglow account.
   */
  service_account: { [key: string]: unknown };

  /**
   * The id of a configured conversation profile on your Dialogflow account. (If you
   * use Dialogflow CX, this param is required)
   */
  conversation_profile_id?: string;

  /**
   * Determine which Dialogflow will be used.
   */
  dialogflow_api?: 'cx' | 'es';

  /**
   * Which Dialogflow environment will be used.
   */
  environment?: string;

  /**
   * The region of your agent is. (If you use Dialogflow CX, this param is required)
   */
  location?: string;
}

export interface DialogflowConnectionUpdateParams {
  /**
   * The JSON map to connect your Dialoglow account.
   */
  service_account: { [key: string]: unknown };

  /**
   * The id of a configured conversation profile on your Dialogflow account. (If you
   * use Dialogflow CX, this param is required)
   */
  conversation_profile_id?: string;

  /**
   * Determine which Dialogflow will be used.
   */
  dialogflow_api?: 'cx' | 'es';

  /**
   * Which Dialogflow environment will be used.
   */
  environment?: string;

  /**
   * The region of your agent is. (If you use Dialogflow CX, this param is required)
   */
  location?: string;
}

export declare namespace DialogflowConnections {
  export {
    type DialogflowConnectionCreateResponse as DialogflowConnectionCreateResponse,
    type DialogflowConnectionRetrieveResponse as DialogflowConnectionRetrieveResponse,
    type DialogflowConnectionUpdateResponse as DialogflowConnectionUpdateResponse,
    type DialogflowConnectionCreateParams as DialogflowConnectionCreateParams,
    type DialogflowConnectionUpdateParams as DialogflowConnectionUpdateParams,
  };
}
