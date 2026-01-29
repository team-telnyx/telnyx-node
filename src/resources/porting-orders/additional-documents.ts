// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class AdditionalDocuments extends APIResource {
  /**
   * Creates a list of additional documents for a porting order.
   *
   * @example
   * ```ts
   * const additionalDocument =
   *   await client.portingOrders.additionalDocuments.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  create(
    id: string,
    body: AdditionalDocumentCreateParams,
    options?: RequestOptions,
  ): APIPromise<AdditionalDocumentCreateResponse> {
    return this._client.post(path`/porting_orders/${id}/additional_documents`, { body, ...options });
  }

  /**
   * Returns a list of additional documents for a porting order.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const additionalDocumentListResponse of client.portingOrders.additionalDocuments.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    query: AdditionalDocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AdditionalDocumentListResponsesDefaultFlatPagination, AdditionalDocumentListResponse> {
    return this._client.getAPIList(
      path`/porting_orders/${id}/additional_documents`,
      DefaultFlatPagination<AdditionalDocumentListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an additional document for a porting order.
   *
   * @example
   * ```ts
   * await client.portingOrders.additionalDocuments.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   * );
   * ```
   */
  delete(
    additionalDocumentID: string,
    params: AdditionalDocumentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    const { id } = params;
    return this._client.delete(path`/porting_orders/${id}/additional_documents/${additionalDocumentID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type AdditionalDocumentListResponsesDefaultFlatPagination =
  DefaultFlatPagination<AdditionalDocumentListResponse>;

export interface AdditionalDocumentCreateResponse {
  data?: Array<AdditionalDocumentCreateResponse.Data>;
}

export namespace AdditionalDocumentCreateResponse {
  export interface Data {
    /**
     * Uniquely identifies this additional document
     */
    id?: string;

    /**
     * The content type of the related document.
     */
    content_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * Identifies the associated document
     */
    document_id?: string;

    /**
     * Identifies the type of additional document
     */
    document_type?: 'loa' | 'invoice' | 'csr' | 'other';

    /**
     * The filename of the related document.
     */
    filename?: string;

    /**
     * Identifies the associated porting order
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

export interface AdditionalDocumentListResponse {
  /**
   * Uniquely identifies this additional document
   */
  id?: string;

  /**
   * The content type of the related document.
   */
  content_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Identifies the associated document
   */
  document_id?: string;

  /**
   * Identifies the type of additional document
   */
  document_type?: 'loa' | 'invoice' | 'csr' | 'other';

  /**
   * The filename of the related document.
   */
  filename?: string;

  /**
   * Identifies the associated porting order
   */
  porting_order_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface AdditionalDocumentCreateParams {
  additional_documents?: Array<AdditionalDocumentCreateParams.AdditionalDocument>;
}

export namespace AdditionalDocumentCreateParams {
  export interface AdditionalDocument {
    /**
     * The document identification
     */
    document_id?: string;

    /**
     * The type of document being created.
     */
    document_type?: 'loa' | 'invoice' | 'csr' | 'other';
  }
}

export interface AdditionalDocumentListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[document_type]
   */
  filter?: AdditionalDocumentListParams.Filter;

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  sort?: AdditionalDocumentListParams.Sort;
}

export namespace AdditionalDocumentListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[document_type]
   */
  export interface Filter {
    /**
     * Filter additional documents by a list of document types
     */
    document_type?: Array<'loa' | 'invoice' | 'csr' | 'other'>;
  }

  /**
   * Consolidated sort parameter (deepObject style). Originally: sort[value]
   */
  export interface Sort {
    /**
     * Specifies the sort order for results. If not given, results are sorted by
     * created_at in descending order.
     */
    value?: 'created_at' | '-created_at';
  }
}

export interface AdditionalDocumentDeleteParams {
  /**
   * Porting Order id
   */
  id: string;
}

export declare namespace AdditionalDocuments {
  export {
    type AdditionalDocumentCreateResponse as AdditionalDocumentCreateResponse,
    type AdditionalDocumentListResponse as AdditionalDocumentListResponse,
    type AdditionalDocumentListResponsesDefaultFlatPagination as AdditionalDocumentListResponsesDefaultFlatPagination,
    type AdditionalDocumentCreateParams as AdditionalDocumentCreateParams,
    type AdditionalDocumentListParams as AdditionalDocumentListParams,
    type AdditionalDocumentDeleteParams as AdditionalDocumentDeleteParams,
  };
}
