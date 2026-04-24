// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Retrieve a single invoice by its unique identifier.
   */
  retrieve(
    id: string,
    query: InvoiceRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvoiceRetrieveResponse> {
    return this._client.get(path`/invoices/${id}`, { query, ...options });
  }

  /**
   * Retrieve a paginated list of invoices.
   */
  list(
    query: InvoiceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<InvoiceListResponsesDefaultFlatPagination, InvoiceListResponse> {
    return this._client.getAPIList('/invoices', DefaultFlatPagination<InvoiceListResponse>, {
      query,
      ...options,
    });
  }
}

export type InvoiceListResponsesDefaultFlatPagination = DefaultFlatPagination<InvoiceListResponse>;

export interface InvoiceRetrieveResponse {
  data?: InvoiceRetrieveResponse.Data;
}

export namespace InvoiceRetrieveResponse {
  export interface Data {
    /**
     * Present only if the query parameter `action=link` is set.
     */
    download_url?: string;

    file_id?: string;

    invoice_id?: string;

    paid?: boolean;

    period_end?: string;

    period_start?: string;

    url?: string;
  }
}

export interface InvoiceListResponse {
  file_id?: string;

  invoice_id?: string;

  paid?: boolean;

  period_end?: string;

  period_start?: string;

  url?: string;
}

export interface InvoiceRetrieveParams {
  /**
   * Invoice action
   */
  action?: 'json' | 'link';
}

export interface InvoiceListParams extends DefaultFlatPaginationParams {
  /**
   * Specifies the sort order for results.
   */
  sort?: 'period_start' | '-period_start';
}

export declare namespace Invoices {
  export {
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceListResponsesDefaultFlatPagination as InvoiceListResponsesDefaultFlatPagination,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
