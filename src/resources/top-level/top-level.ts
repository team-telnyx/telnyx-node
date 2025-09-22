// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Uploadable } from '../../core/uploads';
import {
  OAuth,
  OAuthGrantsParams,
  OAuthGrantsResponse,
  OAuthIntrospectParams,
  OAuthIntrospectResponse,
  OAuthRegisterParams,
  OAuthRegisterResponse,
  OAuthRetrieveAuthorizeParams,
  OAuthRetrieveJwksResponse,
  OAuthRetrieveResponse,
  OAuthTokenParams,
  OAuthTokenResponse,
} from './oauth';
import {
  OAuthClientCreateParams,
  OAuthClientCreateResponse,
  OAuthClientListParams,
  OAuthClientListResponse,
  OAuthClientRetrieveResponse,
  OAuthClientUpdateParams,
  OAuthClientUpdateResponse,
  OAuthClients,
} from './oauth-clients';
import {
  OAuthGrantDeleteResponse,
  OAuthGrantListParams,
  OAuthGrantListResponse,
  OAuthGrantRetrieveResponse,
  OAuthGrants,
} from './oauth-grants';
import { Legacy } from './legacy/legacy';

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

TopLevel.Legacy = Legacy;
TopLevel.OAuth = OAuth;
TopLevel.OAuthClients = OAuthClients;
TopLevel.OAuthGrants = OAuthGrants;

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

  export { Legacy as Legacy };

  export {
    OAuth as OAuth,
    type OAuthRetrieveResponse as OAuthRetrieveResponse,
    type OAuthGrantsResponse as OAuthGrantsResponse,
    type OAuthIntrospectResponse as OAuthIntrospectResponse,
    type OAuthRegisterResponse as OAuthRegisterResponse,
    type OAuthRetrieveJwksResponse as OAuthRetrieveJwksResponse,
    type OAuthTokenResponse as OAuthTokenResponse,
    type OAuthGrantsParams as OAuthGrantsParams,
    type OAuthIntrospectParams as OAuthIntrospectParams,
    type OAuthRegisterParams as OAuthRegisterParams,
    type OAuthRetrieveAuthorizeParams as OAuthRetrieveAuthorizeParams,
    type OAuthTokenParams as OAuthTokenParams,
  };

  export {
    OAuthClients as OAuthClients,
    type OAuthClientCreateResponse as OAuthClientCreateResponse,
    type OAuthClientRetrieveResponse as OAuthClientRetrieveResponse,
    type OAuthClientUpdateResponse as OAuthClientUpdateResponse,
    type OAuthClientListResponse as OAuthClientListResponse,
    type OAuthClientCreateParams as OAuthClientCreateParams,
    type OAuthClientUpdateParams as OAuthClientUpdateParams,
    type OAuthClientListParams as OAuthClientListParams,
  };

  export {
    OAuthGrants as OAuthGrants,
    type OAuthGrantRetrieveResponse as OAuthGrantRetrieveResponse,
    type OAuthGrantListResponse as OAuthGrantListResponse,
    type OAuthGrantDeleteResponse as OAuthGrantDeleteResponse,
    type OAuthGrantListParams as OAuthGrantListParams,
  };
}
