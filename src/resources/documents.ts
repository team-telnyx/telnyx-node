// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AuthenticationProvidersAPI from './authentication-providers';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { maybeMultipartFormRequestOptions } from '../internal/uploads';
import { path } from '../internal/utils/path';

export class Documents extends APIResource {
  /**
   * Retrieve a document.
   *
   * @example
   * ```ts
   * const document = await client.documents.retrieve(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<DocumentRetrieveResponse> {
    return this._client.get(path`/documents/${id}`, options);
  }

  /**
   * Update a document.
   *
   * @example
   * ```ts
   * const document = await client.documents.update(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  update(
    id: string,
    body: DocumentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateResponse> {
    return this._client.patch(path`/documents/${id}`, { body, ...options });
  }

  /**
   * List all documents ordered by created_at descending.
   *
   * @example
   * ```ts
   * const documents = await client.documents.list();
   * ```
   */
  list(
    query: DocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DocumentListResponse> {
    return this._client.get('/documents', { query, ...options });
  }

  /**
   * Delete a document.<br /><br />A document can only be deleted if it's not linked
   * to a service. If it is linked to a service, it must be unlinked prior to
   * deleting.
   *
   * @example
   * ```ts
   * const document = await client.documents.delete(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<DocumentDeleteResponse> {
    return this._client.delete(path`/documents/${id}`, options);
  }

  /**
   * Download a document.
   *
   * @example
   * ```ts
   * const response = await client.documents.download(
   *   '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(id: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/documents/${id}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: '*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a document.<br /><br />Uploaded files must be linked to a service within
   * 30 minutes or they will be automatically deleted.
   *
   * @example
   * ```ts
   * const response = await client.documents.upload({
   *   url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
   * });
   * ```
   */
  upload(body: DocumentUploadParams, options?: RequestOptions): APIPromise<DocumentUploadResponse> {
    return this._client.post(
      '/documents',
      maybeMultipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export interface DocServiceDocument {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The document's content_type.
   */
  content_type?: string;

  /**
   * ISO 8601 formatted date-time indicating when the resource was created.
   */
  created_at?: string;

  /**
   * Optional reference string for customer tracking.
   */
  customer_reference?: string;

  /**
   * The filename of the document.
   */
  filename?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The document's SHA256 hash provided for optional verification purposes.
   */
  sha256?: string;

  /**
   * Indicates the document's filesize
   */
  size?: DocServiceDocument.Size;

  /**
   * Indicates the current document reviewing status
   */
  status?: 'pending' | 'verified' | 'denied';

  /**
   * ISO 8601 formatted date-time indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace DocServiceDocument {
  /**
   * Indicates the document's filesize
   */
  export interface Size {
    /**
     * The number of bytes
     */
    amount?: number;

    /**
     * Identifies the unit
     */
    unit?: string;
  }
}

export interface DocumentRetrieveResponse {
  data?: DocServiceDocument;
}

export interface DocumentUpdateResponse {
  data?: DocServiceDocument;
}

export interface DocumentListResponse {
  data?: Array<DocServiceDocument>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface DocumentDeleteResponse {
  data?: DocServiceDocument;
}

export interface DocumentUploadResponse {
  data?: DocServiceDocument;
}

export interface DocumentUpdateParams {
  /**
   * Optional reference string for customer tracking.
   */
  customer_reference?: string;

  /**
   * The filename of the document.
   */
  filename?: string;
}

export interface DocumentListParams {
  /**
   * Consolidated filter parameter for documents (deepObject style). Originally:
   * filter[filename][contains], filter[customer_reference][eq],
   * filter[customer_reference][in][], filter[created_at][gt], filter[created_at][lt]
   */
  filter?: DocumentListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: DocumentListParams.Page;

  /**
   * Consolidated sort parameter for documents (deepObject style). Originally: sort[]
   */
  sort?: Array<'filename' | 'created_at' | 'updated_at' | '-filename' | '-created_at' | '-updated_at'>;
}

export namespace DocumentListParams {
  /**
   * Consolidated filter parameter for documents (deepObject style). Originally:
   * filter[filename][contains], filter[customer_reference][eq],
   * filter[customer_reference][in][], filter[created_at][gt], filter[created_at][lt]
   */
  export interface Filter {
    created_at?: Filter.CreatedAt;

    customer_reference?: Filter.CustomerReference;

    filename?: Filter.Filename;
  }

  export namespace Filter {
    export interface CreatedAt {
      /**
       * Filter by created at greater than provided value.
       */
      gt?: string;

      /**
       * Filter by created at less than provided value.
       */
      lt?: string;
    }

    export interface CustomerReference {
      /**
       * Filter documents by a customer reference.
       */
      eq?: string;

      /**
       * Filter documents by a list of customer references.
       */
      in?: Array<string>;
    }

    export interface Filename {
      /**
       * Filter by string matching part of filename.
       */
      contains?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
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

export type DocumentUploadParams =
  | DocumentUploadParams.DocServiceDocumentUploadURL
  | DocumentUploadParams.DocServiceDocumentUploadInline;

export declare namespace DocumentUploadParams {
  export interface DocServiceDocumentUploadURL {
    /**
     * If the file is already hosted publicly, you can provide a URL and have the
     * documents service fetch it for you.
     */
    url: string;

    /**
     * Optional reference string for customer tracking.
     */
    customer_reference?: string;

    /**
     * The filename of the document.
     */
    filename?: string;
  }

  export interface DocServiceDocumentUploadInline {
    /**
     * The Base64 encoded contents of the file you are uploading.
     */
    file: string;

    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;

    /**
     * The filename of the document.
     */
    filename?: string;
  }
}

export declare namespace Documents {
  export {
    type DocServiceDocument as DocServiceDocument,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
