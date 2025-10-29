// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectionsAPI from './connections';
import { ConnectionListResponse, ConnectionRetrieveResponse, Connections } from './connections';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Integrations extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);

  /**
   * Retrieve integration details
   *
   * @example
   * ```ts
   * const integration = await client.ai.integrations.retrieve(
   *   'integration_id',
   * );
   * ```
   */
  retrieve(integrationID: string, options?: RequestOptions): APIPromise<IntegrationRetrieveResponse> {
    return this._client.get(path`/ai/integrations/${integrationID}`, options);
  }

  /**
   * List all available integrations.
   *
   * @example
   * ```ts
   * const integrations = await client.ai.integrations.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<IntegrationListResponse> {
    return this._client.get('/ai/integrations', options);
  }
}

export interface IntegrationRetrieveResponse {
  id: string;

  available_tools: Array<string>;

  description: string;

  display_name: string;

  logo_url: string;

  name: string;

  status: 'disconnected' | 'connected';
}

export interface IntegrationListResponse {
  data: Array<IntegrationListResponse.Data>;
}

export namespace IntegrationListResponse {
  export interface Data {
    id: string;

    available_tools: Array<string>;

    description: string;

    display_name: string;

    logo_url: string;

    name: string;

    status: 'disconnected' | 'connected';
  }
}

Integrations.Connections = Connections;

export declare namespace Integrations {
  export {
    type IntegrationRetrieveResponse as IntegrationRetrieveResponse,
    type IntegrationListResponse as IntegrationListResponse,
  };

  export {
    Connections as Connections,
    type ConnectionRetrieveResponse as ConnectionRetrieveResponse,
    type ConnectionListResponse as ConnectionListResponse,
  };
}
