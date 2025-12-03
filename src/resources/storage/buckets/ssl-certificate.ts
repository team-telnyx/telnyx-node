// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class SslCertificateResource extends APIResource {
  /**
   * Uploads an SSL certificate and its matching secret so that you can use Telnyx's
   * storage as your CDN.
   *
   * @example
   * ```ts
   * const sslCertificate =
   *   await client.storage.buckets.sslCertificate.create('');
   * ```
   */
  create(
    bucketName: string,
    body: SslCertificateCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SslCertificateCreateResponse> {
    return this._client.put(
      path`/storage/buckets/${bucketName}/ssl_certificate`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns the stored certificate detail of a bucket, if applicable.
   *
   * @example
   * ```ts
   * const sslCertificate =
   *   await client.storage.buckets.sslCertificate.retrieve('');
   * ```
   */
  retrieve(bucketName: string, options?: RequestOptions): APIPromise<SslCertificateRetrieveResponse> {
    return this._client.get(path`/storage/buckets/${bucketName}/ssl_certificate`, options);
  }

  /**
   * Deletes an SSL certificate and its matching secret.
   *
   * @example
   * ```ts
   * const sslCertificate =
   *   await client.storage.buckets.sslCertificate.delete('');
   * ```
   */
  delete(bucketName: string, options?: RequestOptions): APIPromise<SslCertificateDeleteResponse> {
    return this._client.delete(path`/storage/buckets/${bucketName}/ssl_certificate`, options);
  }
}

export interface SslCertificate {
  /**
   * Unique identifier for the SSL certificate
   */
  id?: string;

  /**
   * Time when SSL certificate was uploaded
   */
  created_at?: string;

  issued_by?: SslCertificate.IssuedBy;

  issued_to?: SslCertificate.IssuedTo;

  /**
   * The time the certificate is valid from
   */
  valid_from?: string;

  /**
   * The time the certificate is valid to
   */
  valid_to?: string;
}

export namespace SslCertificate {
  export interface IssuedBy {
    /**
     * The common name of the entity the certificate was issued by
     */
    common_name?: string;

    /**
     * The organization the certificate was issued by
     */
    organization?: string;

    /**
     * The organizational unit the certificate was issued by
     */
    organization_unit?: string;
  }

  export interface IssuedTo {
    /**
     * The common name of the entity the certificate was issued to
     */
    common_name?: string;

    /**
     * The organization the certificate was issued to
     */
    organization?: string;

    /**
     * The organizational unit the certificate was issued to
     */
    organization_unit?: string;
  }
}

export interface SslCertificateCreateResponse {
  data?: SslCertificate;
}

export interface SslCertificateRetrieveResponse {
  data?: SslCertificate;
}

export interface SslCertificateDeleteResponse {
  data?: SslCertificate;
}

export interface SslCertificateCreateParams {
  /**
   * The SSL certificate file
   */
  certificate?: Uploadable;

  /**
   * The private key file
   */
  private_key?: Uploadable;
}

export declare namespace SslCertificateResource {
  export {
    type SslCertificate as SslCertificate,
    type SslCertificateCreateResponse as SslCertificateCreateResponse,
    type SslCertificateRetrieveResponse as SslCertificateRetrieveResponse,
    type SslCertificateDeleteResponse as SslCertificateDeleteResponse,
    type SslCertificateCreateParams as SslCertificateCreateParams,
  };
}
