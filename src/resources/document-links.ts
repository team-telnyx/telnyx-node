// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class DocumentLinks extends APIResource {
  /**
   * List all documents links ordered by created_at descending.
   */
  list(
    query: DocumentLinkListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DocumentLinkListResponsesDefaultFlatPagination, DocumentLinkListResponse> {
    return this._client.getAPIList('/document_links', DefaultFlatPagination<DocumentLinkListResponse>, {
      query,
      ...options,
    });
  }
}

export type DocumentLinkListResponsesDefaultFlatPagination = DefaultFlatPagination<DocumentLinkListResponse>;

export interface DocumentLinkListResponse {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Identifies the associated document.
   */
  document_id?: string;

  /**
   * The linked resource's record type.
   */
  linked_record_type?: string;

  /**
   * Identifies the linked resource.
   */
  linked_resource_id?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export interface DocumentLinkListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for document links (deepObject style). Originally:
   * filter[linked_record_type], filter[linked_resource_id]
   */
  filter?: DocumentLinkListParams.Filter;
}

export namespace DocumentLinkListParams {
  /**
   * Consolidated filter parameter for document links (deepObject style). Originally:
   * filter[linked_record_type], filter[linked_resource_id]
   */
  export interface Filter {
    /**
     * The linked_record_type of the document to filter on.
     */
    linked_record_type?: string;

    /**
     * The linked_resource_id of the document to filter on.
     */
    linked_resource_id?: string;
  }
}

export declare namespace DocumentLinks {
  export {
    type DocumentLinkListResponse as DocumentLinkListResponse,
    type DocumentLinkListResponsesDefaultFlatPagination as DocumentLinkListResponsesDefaultFlatPagination,
    type DocumentLinkListParams as DocumentLinkListParams,
  };
}
