// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClustersAPI from './clusters';
import * as PhoneNumberAssignmentByProfileAPI from '../messaging-10dlc/phone-number-assignment-by-profile';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Clusters extends APIResource {
  /**
   * Fetch a cluster
   *
   * @example
   * ```ts
   * const cluster = await client.ai.clusters.retrieve(
   *   'task_id',
   * );
   * ```
   */
  retrieve(
    taskID: string,
    query: ClusterRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ClusterRetrieveResponse> {
    return this._client.get(path`/ai/clusters/${taskID}`, { query, ...options });
  }

  /**
   * List all clusters
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const clusterListResponse of client.ai.clusters.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ClusterListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ClusterListResponsesDefaultFlatPagination, ClusterListResponse> {
    return this._client.getAPIList('/ai/clusters', DefaultFlatPagination<ClusterListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Delete a cluster
   *
   * @example
   * ```ts
   * await client.ai.clusters.delete('task_id');
   * ```
   */
  delete(taskID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/clusters/${taskID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Starts a background task to compute how the data in an
   * [embedded storage bucket](https://developers.telnyx.com/api-reference/embeddings/embed-documents)
   * is clustered. This helps identify common themes and patterns in the data.
   *
   * @example
   * ```ts
   * const response = await client.ai.clusters.compute({
   *   bucket: 'bucket',
   * });
   * ```
   */
  compute(body: ClusterComputeParams, options?: RequestOptions): APIPromise<ClusterComputeResponse> {
    return this._client.post('/ai/clusters', { body, ...options });
  }

  /**
   * Fetch a cluster visualization
   *
   * @example
   * ```ts
   * const response = await client.ai.clusters.fetchGraph(
   *   'task_id',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  fetchGraph(
    taskID: string,
    query: ClusterFetchGraphParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Response> {
    return this._client.get(path`/ai/clusters/${taskID}/graph`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'image/png' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export type ClusterListResponsesDefaultFlatPagination = DefaultFlatPagination<ClusterListResponse>;

export interface RecursiveCluster {
  cluster_id: string;

  cluster_summary: string;

  total_number_of_nodes: number;

  cluster_header?: string;

  nodes?: Array<RecursiveCluster.Node>;

  subclusters?: Array<RecursiveCluster>;
}

export namespace RecursiveCluster {
  export interface Node {
    /**
     * The corresponding source file of your embedded storage bucket that the node is
     * from.
     */
    filename: string;

    /**
     * The text of the node.
     */
    text: string;
  }
}

export interface ClusterRetrieveResponse {
  data: ClusterRetrieveResponse.Data;
}

export namespace ClusterRetrieveResponse {
  export interface Data {
    bucket: string;

    clusters: Array<ClustersAPI.RecursiveCluster>;

    status: PhoneNumberAssignmentByProfileAPI.TaskStatus;
  }
}

export interface ClusterListResponse {
  bucket: string;

  created_at: string;

  finished_at: string;

  min_cluster_size: number;

  min_subcluster_size: number;

  status: PhoneNumberAssignmentByProfileAPI.TaskStatus;

  task_id: string;
}

export interface ClusterComputeResponse {
  data: ClusterComputeResponse.Data;
}

export namespace ClusterComputeResponse {
  export interface Data {
    task_id: string;
  }
}

export interface ClusterRetrieveParams {
  /**
   * Whether or not to include subclusters and their nodes in the response.
   */
  show_subclusters?: boolean;

  /**
   * The number of nodes in the cluster to return in the response. Nodes will be
   * sorted by their centrality within the cluster.
   */
  top_n_nodes?: number;
}

export interface ClusterListParams extends DefaultFlatPaginationParams {}

export interface ClusterComputeParams {
  /**
   * The embedded storage bucket to compute the clusters from. The bucket must
   * already be
   * [embedded](https://developers.telnyx.com/api-reference/embeddings/embed-documents).
   */
  bucket: string;

  /**
   * Array of files to filter which are included.
   */
  files?: Array<string>;

  /**
   * Smallest number of related text chunks to qualify as a cluster. Top-level
   * clusters should be thought of as identifying broad themes in your data.
   */
  min_cluster_size?: number;

  /**
   * Smallest number of related text chunks to qualify as a sub-cluster. Sub-clusters
   * should be thought of as identifying more specific topics within a broader theme.
   */
  min_subcluster_size?: number;

  /**
   * Prefix to filter whcih files in the buckets are included.
   */
  prefix?: string;
}

export interface ClusterFetchGraphParams {
  cluster_id?: number;
}

export declare namespace Clusters {
  export {
    type RecursiveCluster as RecursiveCluster,
    type ClusterRetrieveResponse as ClusterRetrieveResponse,
    type ClusterListResponse as ClusterListResponse,
    type ClusterComputeResponse as ClusterComputeResponse,
    type ClusterListResponsesDefaultFlatPagination as ClusterListResponsesDefaultFlatPagination,
    type ClusterRetrieveParams as ClusterRetrieveParams,
    type ClusterListParams as ClusterListParams,
    type ClusterComputeParams as ClusterComputeParams,
    type ClusterFetchGraphParams as ClusterFetchGraphParams,
  };
}
