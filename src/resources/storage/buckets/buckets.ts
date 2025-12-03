// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SslCertificateAPI from './ssl-certificate';
import {
  SslCertificate,
  SslCertificateCreateParams,
  SslCertificateCreateResponse,
  SslCertificateDeleteResponse,
  SslCertificateResource,
  SslCertificateRetrieveResponse,
} from './ssl-certificate';
import * as UsageAPI from './usage';
import {
  PaginationMetaSimple,
  Usage,
  UsageGetAPIUsageParams,
  UsageGetAPIUsageResponse,
  UsageGetBucketUsageResponse,
} from './usage';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Buckets extends APIResource {
  sslCertificate: SslCertificateAPI.SslCertificateResource = new SslCertificateAPI.SslCertificateResource(
    this._client,
  );
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);

  /**
   * Returns a timed and authenticated URL to download (GET) or upload (PUT) an
   * object. This is the equivalent to AWS S3’s “presigned” URL. Please note that
   * Telnyx performs authentication differently from AWS S3 and you MUST NOT use the
   * presign method of AWS s3api CLI or SDK to generate the presigned URL.
   *
   * Refer to: https://developers.telnyx.com/docs/cloud-storage/presigned-urls
   *
   * @example
   * ```ts
   * const response =
   *   await client.storage.buckets.createPresignedURL('', {
   *     bucketName: '',
   *   });
   * ```
   */
  createPresignedURL(
    objectName: string,
    params: BucketCreatePresignedURLParams,
    options?: RequestOptions,
  ): APIPromise<BucketCreatePresignedURLResponse> {
    const { bucketName, ...body } = params;
    return this._client.post(path`/storage/buckets/${bucketName}/${objectName}/presigned_url`, {
      body,
      ...options,
    });
  }
}

export interface BucketCreatePresignedURLResponse {
  content?: BucketCreatePresignedURLResponse.Content;
}

export namespace BucketCreatePresignedURLResponse {
  export interface Content {
    /**
     * The token for the object
     */
    token?: string;

    /**
     * The expiration time of the token
     */
    expires_at?: string;

    /**
     * The presigned URL for the object
     */
    presigned_url?: string;
  }
}

export interface BucketCreatePresignedURLParams {
  /**
   * Path param: The name of the bucket
   */
  bucketName: string;

  /**
   * Body param: The time to live of the token in seconds
   */
  ttl?: number;
}

Buckets.SslCertificateResource = SslCertificateResource;
Buckets.Usage = Usage;

export declare namespace Buckets {
  export {
    type BucketCreatePresignedURLResponse as BucketCreatePresignedURLResponse,
    type BucketCreatePresignedURLParams as BucketCreatePresignedURLParams,
  };

  export {
    SslCertificateResource as SslCertificateResource,
    type SslCertificate as SslCertificate,
    type SslCertificateCreateResponse as SslCertificateCreateResponse,
    type SslCertificateRetrieveResponse as SslCertificateRetrieveResponse,
    type SslCertificateDeleteResponse as SslCertificateDeleteResponse,
    type SslCertificateCreateParams as SslCertificateCreateParams,
  };

  export {
    Usage as Usage,
    type PaginationMetaSimple as PaginationMetaSimple,
    type UsageGetAPIUsageResponse as UsageGetAPIUsageResponse,
    type UsageGetBucketUsageResponse as UsageGetBucketUsageResponse,
    type UsageGetAPIUsageParams as UsageGetAPIUsageParams,
  };
}
