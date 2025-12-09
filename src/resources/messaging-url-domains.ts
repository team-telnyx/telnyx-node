// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class MessagingURLDomains extends APIResource {
  /**
   * List messaging URL domains
   */
  list(
    query: MessagingURLDomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MessagingURLDomainListResponse> {
    return this._client.get('/messaging_url_domains', { query, ...options });
  }
}

export interface MessagingURLDomainListResponse {
  data?: Array<MessagingURLDomainListResponse.Data>;

  meta?: MessagingURLDomainListResponse.Meta;
}

export namespace MessagingURLDomainListResponse {
  export interface Data {
    id?: string;

    record_type?: string;

    url_domain?: string;

    use_case?: string;
  }

  export interface Meta {
    page_number: number;

    page_size: number;

    total_pages: number;

    total_results: number;
  }
}

export interface MessagingURLDomainListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: MessagingURLDomainListParams.Page;
}

export namespace MessagingURLDomainListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

export declare namespace MessagingURLDomains {
  export {
    type MessagingURLDomainListResponse as MessagingURLDomainListResponse,
    type MessagingURLDomainListParams as MessagingURLDomainListParams,
  };
}
