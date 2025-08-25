// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class List extends APIResource {
  /**
   * Retrieve a list of all phone numbers using Channel Billing, grouped by Zone.
   */
  retrieveAll(options?: RequestOptions): APIPromise<ListRetrieveAllResponse> {
    return this._client.get('/list', options);
  }

  /**
   * Retrieve a list of phone numbers using Channel Billing for a specific Zone.
   */
  retrieveByZone(channelZoneID: string, options?: RequestOptions): APIPromise<ListRetrieveByZoneResponse> {
    return this._client.get(path`/list/${channelZoneID}`, options);
  }
}

export interface ListRetrieveAllResponse {
  data?: Array<ListRetrieveAllResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace ListRetrieveAllResponse {
  export interface Data {
    number_of_channels?: number;

    numbers?: Array<Data.Number>;

    zone_id?: string;

    zone_name?: string;
  }

  export namespace Data {
    export interface Number {
      country?: string;

      number?: string;
    }
  }
}

export interface ListRetrieveByZoneResponse {
  data?: Array<ListRetrieveByZoneResponse.Data>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export namespace ListRetrieveByZoneResponse {
  export interface Data {
    number_of_channels?: number;

    numbers?: Array<Data.Number>;

    zone_id?: string;

    zone_name?: string;
  }

  export namespace Data {
    export interface Number {
      country?: string;

      number?: string;
    }
  }
}

export declare namespace List {
  export {
    type ListRetrieveAllResponse as ListRetrieveAllResponse,
    type ListRetrieveByZoneResponse as ListRetrieveByZoneResponse,
  };
}
