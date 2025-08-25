// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SupportingDocuments extends APIResource {
  /**
   * Creates a list of supporting documents on a portout request.
   *
   * @example
   * ```ts
   * const supportingDocument =
   *   await client.portouts.supportingDocuments.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  create(
    id: string,
    body: SupportingDocumentCreateParams,
    options?: RequestOptions,
  ): APIPromise<SupportingDocumentCreateResponse> {
    return this._client.post(path`/portouts/${id}/supporting_documents`, { body, ...options });
  }

  /**
   * List every supporting documents for a portout request.
   *
   * @example
   * ```ts
   * const supportingDocuments =
   *   await client.portouts.supportingDocuments.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<SupportingDocumentListResponse> {
    return this._client.get(path`/portouts/${id}/supporting_documents`, options);
  }
}

export interface SupportingDocumentCreateResponse {
  data?: Array<SupportingDocumentCreateResponse.Data>;
}

export namespace SupportingDocumentCreateResponse {
  export interface Data {
    id: string;

    /**
     * Supporting document creation timestamp in ISO 8601 format
     */
    created_at: string;

    /**
     * Identifies the associated document
     */
    document_id: string;

    /**
     * Identifies the associated port request
     */
    portout_id: string;

    /**
     * Identifies the type of the resource.
     */
    record_type: string;

    /**
     * Identifies the type of the document
     */
    type: 'loa' | 'invoice';

    /**
     * Supporting document last changed timestamp in ISO 8601 format
     */
    updated_at: string;
  }
}

export interface SupportingDocumentListResponse {
  data?: Array<SupportingDocumentListResponse.Data>;
}

export namespace SupportingDocumentListResponse {
  export interface Data {
    id: string;

    /**
     * Supporting document creation timestamp in ISO 8601 format
     */
    created_at: string;

    /**
     * Identifies the associated document
     */
    document_id: string;

    /**
     * Identifies the associated port request
     */
    portout_id: string;

    /**
     * Identifies the type of the resource.
     */
    record_type: string;

    /**
     * Identifies the type of the document
     */
    type: 'loa' | 'invoice';

    /**
     * Supporting document last changed timestamp in ISO 8601 format
     */
    updated_at: string;
  }
}

export interface SupportingDocumentCreateParams {
  /**
   * List of supporting documents parameters
   */
  documents?: Array<SupportingDocumentCreateParams.Document>;
}

export namespace SupportingDocumentCreateParams {
  export interface Document {
    /**
     * Identifies the associated document
     */
    document_id: string;

    /**
     * Identifies the type of the document
     */
    type: 'loa' | 'invoice';
  }
}

export declare namespace SupportingDocuments {
  export {
    type SupportingDocumentCreateResponse as SupportingDocumentCreateResponse,
    type SupportingDocumentListResponse as SupportingDocumentListResponse,
    type SupportingDocumentCreateParams as SupportingDocumentCreateParams,
  };
}
