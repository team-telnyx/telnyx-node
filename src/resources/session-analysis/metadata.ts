// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MetadataAPI from './metadata';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Analyze voice AI sessions, costs, and event hierarchies across Telnyx products.
 */
export class Metadata extends APIResource {
  /**
   * Returns all available record types and supported query parameters for session
   * analysis.
   */
  retrieve(options?: RequestOptions): APIPromise<MetadataRetrieveResponse> {
    return this._client.get('/session_analysis/metadata', options);
  }

  /**
   * Returns detailed metadata for a specific record type, including relationships
   * and examples.
   */
  retrieveRecordType(
    recordType: string,
    options?: RequestOptions,
  ): APIPromise<MetadataRetrieveRecordTypeResponse> {
    return this._client.get(path`/session_analysis/metadata/${recordType}`, options);
  }
}

export interface ChildRelationshipInfo {
  child_event: string;

  child_product: string;

  child_record_type: string;

  cost_rollup: boolean;

  description: string;

  relationship_type: string;

  traversal_enabled: boolean;

  via: MetadataFieldMapping;
}

export interface MetadataFieldMapping {
  local_field: string;

  parent_field: string;
}

export interface ParentRelationshipInfo {
  cost_rollup: boolean;

  description: string;

  parent_event: string;

  parent_product: string;

  parent_record_type: string;

  relationship_type: string;

  traversal_enabled: boolean;

  via: MetadataFieldMapping;
}

export interface MetadataRetrieveResponse {
  meta: MetadataRetrieveResponse.Meta;

  /**
   * Map of supported query parameter names to their definitions.
   */
  query_parameters: { [key: string]: MetadataRetrieveResponse.QueryParameters };

  record_types: Array<MetadataRetrieveResponse.RecordType>;
}

export namespace MetadataRetrieveResponse {
  export interface Meta {
    last_updated: string;

    total_record_types: number;
  }

  export interface QueryParameters {
    default: string;

    description: string;

    type: string;

    enum_values?: Array<string> | null;

    max?: number | null;

    min?: number | null;
  }

  export interface RecordType {
    aliases: Array<string>;

    child_relationships: Array<MetadataAPI.ChildRelationshipInfo>;

    description: string;

    event: string;

    parent_relationships: Array<MetadataAPI.ParentRelationshipInfo>;

    product: string;

    record_type: string;
  }
}

export interface MetadataRetrieveRecordTypeResponse {
  aliases: Array<string>;

  child_relationships: Array<ChildRelationshipInfo>;

  event: string;

  /**
   * Example queries and responses for this record type.
   */
  examples: { [key: string]: unknown };

  meta: MetadataRetrieveRecordTypeResponse.Meta;

  parent_relationships: Array<ParentRelationshipInfo>;

  product: string;

  record_type: string;
}

export namespace MetadataRetrieveRecordTypeResponse {
  export interface Meta {
    max_recommended_depth: number;

    total_children: number;

    total_parents: number;

    total_siblings: number;
  }
}

export declare namespace Metadata {
  export {
    type ChildRelationshipInfo as ChildRelationshipInfo,
    type MetadataFieldMapping as MetadataFieldMapping,
    type ParentRelationshipInfo as ParentRelationshipInfo,
    type MetadataRetrieveResponse as MetadataRetrieveResponse,
    type MetadataRetrieveRecordTypeResponse as MetadataRetrieveRecordTypeResponse,
  };
}
