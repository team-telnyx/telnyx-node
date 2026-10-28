// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Download screenshots and other artifacts.
 */
export class ArtifactDownloads extends APIResource {
  /**
   * Downloads the artifact content. The signed URL (with expires and sig query
   * params) is obtained from the artifact metadata endpoint.
   */
  retrieve(
    artifactID: string,
    query: ArtifactDownloadRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/artifact_downloads/${artifactID}`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface ArtifactDownloadRetrieveParams {
  expires: string;

  sig: string;
}

export declare namespace ArtifactDownloads {
  export { type ArtifactDownloadRetrieveParams as ArtifactDownloadRetrieveParams };
}
