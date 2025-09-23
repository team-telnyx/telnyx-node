// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Uploadable } from '../core/uploads';

export type DeleteObjectsResponse = unknown;

export interface ListBucketsResponse {
  Buckets?: Array<ListBucketsResponse.Bucket>;
}

export namespace ListBucketsResponse {
  export interface Bucket {
    CreationDate?: string;

    Name?: string;
  }
}

export interface ListObjectsResponse {
  Contents?: Array<ListObjectsResponse.Content>;

  Name?: string;
}

export namespace ListObjectsResponse {
  export interface Content {
    Key?: string;

    LastModified?: string;

    Size?: number;
  }
}

export interface CreateBucketParams {
  LocationConstraint?: string;
}

export interface DeleteObjectParams {
  /**
   * The bucket name.
   */
  bucketName: string;
}

export interface DeleteObjectsParams {
  /**
   * Query param:
   */
  delete: true;

  /**
   * Body param:
   */
  body: Array<DeleteObjectsParams.Body>;
}

export namespace DeleteObjectsParams {
  export interface Body {
    Key?: string;
  }
}

export interface GetObjectParams {
  /**
   * Path param: The bucket name.
   */
  bucketName: string;

  /**
   * Query param:
   */
  uploadId?: string;
}

export interface ListObjectsParams {
  'list-type'?: 2;
}

export interface PutObjectParams {
  /**
   * Path param: The bucket name.
   */
  bucketName: string;

  /**
   * Body param:
   */
  body: Uploadable;

  /**
   * Query param:
   */
  partNumber?: string;

  /**
   * Query param:
   */
  uploadId?: string;
}

export declare namespace TopLevel {
  export {
    type DeleteObjectsResponse as DeleteObjectsResponse,
    type ListBucketsResponse as ListBucketsResponse,
    type ListObjectsResponse as ListObjectsResponse,
    type CreateBucketParams as CreateBucketParams,
    type DeleteObjectParams as DeleteObjectParams,
    type DeleteObjectsParams as DeleteObjectsParams,
    type GetObjectParams as GetObjectParams,
    type ListObjectsParams as ListObjectsParams,
    type PutObjectParams as PutObjectParams,
  };
}
