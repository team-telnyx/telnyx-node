// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultPagination, type DefaultPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class MessagingURLDomains extends APIResource {
  /**
   * List messaging URL domains
   */
  list(
    query: MessagingURLDomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagingURLDomainListResponsesDefaultPagination, MessagingURLDomainListResponse> {
    return this._client.getAPIList(
      '/messaging_url_domains',
      DefaultPagination<MessagingURLDomainListResponse>,
      { query, ...options },
    );
  }
}

export type MessagingURLDomainListResponsesDefaultPagination =
  DefaultPagination<MessagingURLDomainListResponse>;

export interface MessagingURLDomainListResponse {
  id?: string;

  record_type?: string;

  url_domain?: string;

  use_case?: string;
}

export interface MessagingURLDomainListParams extends DefaultPaginationParams {}

export declare namespace MessagingURLDomains {
  export {
    type MessagingURLDomainListResponse as MessagingURLDomainListResponse,
    type MessagingURLDomainListResponsesDefaultPagination as MessagingURLDomainListResponsesDefaultPagination,
    type MessagingURLDomainListParams as MessagingURLDomainListParams,
  };
}
