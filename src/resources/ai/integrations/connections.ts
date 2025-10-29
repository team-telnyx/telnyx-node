// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Get user setup integrations
   *
   * @example
   * ```ts
   * const connection =
   *   await client.ai.integrations.connections.retrieve(
   *     'user_connection_id',
   *   );
   * ```
   */
  retrieve(userConnectionID: string, options?: RequestOptions): APIPromise<ConnectionRetrieveResponse> {
    return this._client.get(path`/ai/integrations/connections/${userConnectionID}`, options);
  }

  /**
   * List user setup integrations
   *
   * @example
   * ```ts
   * const connections =
   *   await client.ai.integrations.connections.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ConnectionListResponse> {
    return this._client.get('/ai/integrations/connections', options);
  }

  /**
   * Delete a specific integration connection.
   *
   * @example
   * ```ts
   * await client.ai.integrations.connections.delete(
   *   'user_connection_id',
   * );
   * ```
   */
  delete(userConnectionID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/integrations/connections/${userConnectionID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ConnectionRetrieveResponse {
  data: ConnectionRetrieveResponse.Data;
}

export namespace ConnectionRetrieveResponse {
  export interface Data {
    id: string;

    allowed_tools: Array<string>;

    integration_id: string;
  }
}

export interface ConnectionListResponse {
  data: Array<ConnectionListResponse.Data>;
}

export namespace ConnectionListResponse {
  export interface Data {
    id: string;

    allowed_tools: Array<string>;

    integration_id: string;
  }
}

export declare namespace Connections {
  export {
    type ConnectionRetrieveResponse as ConnectionRetrieveResponse,
    type ConnectionListResponse as ConnectionListResponse,
  };
}
