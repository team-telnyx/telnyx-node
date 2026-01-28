// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
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
    documentID: string,
    body: DocumentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUpdateResponse> {
    return this._client.patch(path`/documents/${documentID}`, { body, ...options });
  }

  /**
   * List all documents ordered by created_at descending.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const docServiceDocument of client.documents.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DocumentListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DocServiceDocumentsDefaultFlatPagination, DocServiceDocument> {
    return this._client.getAPIList('/documents', DefaultFlatPagination<DocServiceDocument>, {
      query,
      ...options,
    });
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
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Generates a temporary pre-signed URL that can be used to download the document
   * directly from the storage backend without authentication.
   *
   * @example
   * ```ts
   * const response =
   *   await client.documents.generateDownloadLink(
   *     '550e8400-e29b-41d4-a716-446655440000',
   *   );
   * ```
   */
  generateDownloadLink(
    id: string,
    options?: RequestOptions,
  ): APIPromise<DocumentGenerateDownloadLinkResponse> {
    return this._client.get(path`/documents/${id}/download_link`, options);
  }

  /**
   * Upload a document.<br /><br />Uploaded files must be linked to a service within
   * 30 minutes or they will be automatically deleted.
   *
   * @example
   * ```ts
   * const response = await client.documents.upload({
   *   document: {},
   * });
   * ```
   */
  upload(params: DocumentUploadParams, options?: RequestOptions): APIPromise<DocumentUploadResponse> {
    const { document } = params;
    return this._client.post('/documents?content-type=multipart', { body: document, ...options });
  }

  /**
   * Upload a document.<br /><br />Uploaded files must be linked to a service within
   * 30 minutes or they will be automatically deleted.
   *
   * @example
   * ```ts
   * const response = await client.documents.uploadJson({
   *   document: {},
   * });
   * ```
   */
  uploadJson(
    params: DocumentUploadJsonParams,
    options?: RequestOptions,
  ): APIPromise<DocumentUploadJsonResponse> {
    const { document } = params;
    return this._client.post('/documents', { body: document, ...options });
  }
}

export type DocServiceDocumentsDefaultFlatPagination = DefaultFlatPagination<DocServiceDocument>;

export interface DocServiceDocument {
  /**
   * Identifies the resource.
   */
  id?: string;

  /**
   * The antivirus scan status of the document.
   */
  av_scan_status?: 'scanned' | 'infected' | 'pending_scan' | 'not_scanned';

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

export interface DocumentDeleteResponse {
  data?: DocServiceDocument;
}

export interface DocumentGenerateDownloadLinkResponse {
  data: DocumentGenerateDownloadLinkResponse.Data;
}

export namespace DocumentGenerateDownloadLinkResponse {
  export interface Data {
    /**
     * Pre-signed temporary URL for downloading the document
     */
    url: string;
  }
}

export interface DocumentUploadResponse {
  data?: DocServiceDocument;
}

export interface DocumentUploadJsonResponse {
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

export interface DocumentListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter for documents (deepObject style). Originally:
   * filter[filename][contains], filter[customer_reference][eq],
   * filter[customer_reference][in][], filter[created_at][gt], filter[created_at][lt]
   */
  filter?: DocumentListParams.Filter;

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
}

export interface DocumentUploadParams {
  document: DocumentUploadParams.Document;
}

export namespace DocumentUploadParams {
  export interface Document {
    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;

    /**
     * Alternatively, instead of the URL you can provide the Base64 encoded contents of
     * the file you are uploading.
     */
    file?: string;

    /**
     * The filename of the document.
     */
    filename?: string;

    /**
     * If the file is already hosted publicly, you can provide a URL and have the
     * documents service fetch it for you.
     */
    url?: string;
  }
}

export interface DocumentUploadJsonParams {
  document: DocumentUploadJsonParams.Document;
}

export namespace DocumentUploadJsonParams {
  export interface Document {
    /**
     * A customer reference string for customer look ups.
     */
    customer_reference?: string;

    /**
     * Alternatively, instead of the URL you can provide the Base64 encoded contents of
     * the file you are uploading.
     */
    file?: string;

    /**
     * The filename of the document.
     */
    filename?: string;

    /**
     * If the file is already hosted publicly, you can provide a URL and have the
     * documents service fetch it for you.
     */
    url?: string;
  }
}

export declare namespace Documents {
  export {
    type DocServiceDocument as DocServiceDocument,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentGenerateDownloadLinkResponse as DocumentGenerateDownloadLinkResponse,
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUploadJsonResponse as DocumentUploadJsonResponse,
    type DocServiceDocumentsDefaultFlatPagination as DocServiceDocumentsDefaultFlatPagination,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentUploadParams as DocumentUploadParams,
    type DocumentUploadJsonParams as DocumentUploadJsonParams,
  };
}
