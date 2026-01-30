// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class MessagingURLDomains extends APIResource {
  /**
   * List messaging URL domains
   */
  list(
    query: MessagingURLDomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagingURLDomainListResponsesDefaultFlatPagination, MessagingURLDomainListResponse> {
    return this._client.getAPIList(
      '/messaging_url_domains',
      DefaultFlatPagination<MessagingURLDomainListResponse>,
      { query, ...options },
    );
  }
}

export type MessagingURLDomainListResponsesDefaultFlatPagination =
  DefaultFlatPagination<MessagingURLDomainListResponse>;

export interface MessagingURLDomainListResponse {
  id?: string;

  record_type?: string;

  url_domain?: string;

  use_case?: string;
}

export interface MessagingURLDomainListParams extends DefaultFlatPaginationParams {}

export declare namespace MessagingURLDomains {
  export {
    type MessagingURLDomainListResponse as MessagingURLDomainListResponse,
    type MessagingURLDomainListResponsesDefaultFlatPagination as MessagingURLDomainListResponsesDefaultFlatPagination,
    type MessagingURLDomainListParams as MessagingURLDomainListParams,
  };
}
