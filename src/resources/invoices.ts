// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
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
  ): APIPromise<InvoiceListResponse> {
    return this._client.get('/invoices', { query, ...options });
  }
}

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
  data?: Array<InvoiceListResponse.Data>;

  meta?: InvoiceListResponse.Meta;
}

export namespace InvoiceListResponse {
  export interface Data {
    file_id?: string;

    invoice_id?: string;

    paid?: boolean;

    period_end?: string;

    period_start?: string;

    url?: string;
  }

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface InvoiceRetrieveParams {
  /**
   * Invoice action
   */
  action?: 'json' | 'link';
}

export interface InvoiceListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: InvoiceListParams.Page;

  /**
   * Specifies the sort order for results.
   */
  sort?: 'period_start' | '-period_start';
}

export namespace InvoiceListParams {
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

export declare namespace Invoices {
  export {
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
