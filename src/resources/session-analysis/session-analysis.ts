// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MetadataAPI from './metadata';
import {
  ChildRelationshipInfo,
  Metadata,
  MetadataFieldMapping,
  MetadataRetrieveRecordTypeResponse,
  MetadataRetrieveResponse,
  ParentRelationshipInfo,
} from './metadata';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Analyze voice AI sessions, costs, and event hierarchies across Telnyx products.
 */
export class SessionAnalysis extends APIResource {
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);

  /**
   * Retrieves a full session analysis tree for a given event, including costs, child
   * events, and product linkages.
   */
  retrieve(
    eventID: string,
    params: SessionAnalysisRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<SessionAnalysisRetrieveResponse> {
    const { record_type, ...query } = params;
    return this._client.get(path`/session_analysis/${record_type}/${eventID}`, { query, ...options });
  }
}

export interface EventNode {
  /**
   * Event identifier.
   */
  id: string;

  /**
   * Child events in the session tree.
   */
  children: Array<EventNode>;

  cost: EventNode.Cost;

  /**
   * Name of the event type.
   */
  event_name: string;

  links: EventNode.Links;

  /**
   * Product that generated this event.
   */
  product: string;

  /**
   * The underlying detail record data. Contents vary by record type.
   */
  record: { [key: string]: unknown };

  /**
   * Relationship to the parent node, null for root.
   */
  relationship?: EventNode.Relationship | null;
}

export namespace EventNode {
  export interface Cost {
    /**
     * Cumulative cost including all descendants.
     */
    cumulative_cost: string;

    /**
     * ISO 4217 currency code.
     */
    currency: string;

    /**
     * Cost of this individual event.
     */
    event_cost: string;
  }

  export interface Links {
    /**
     * Link to the underlying detail records.
     */
    records: string;

    /**
     * Link to this session analysis node.
     */
    self: string;
  }

  /**
   * Relationship to the parent node, null for root.
   */
  export interface Relationship {
    /**
     * Identifier of the parent event.
     */
    parent_id: string;

    /**
     * Relationship type identifier.
     */
    type: string;

    via: Relationship.Via;
  }

  export namespace Relationship {
    export interface Via {
      /**
       * Field name on the child record.
       */
      local_field: string;

      /**
       * Field name on the parent record.
       */
      parent_field: string;
    }
  }
}

export interface SessionAnalysisRetrieveResponse {
  cost: SessionAnalysisRetrieveResponse.Cost;

  /**
   * When the session started.
   */
  created_at: string;

  meta: SessionAnalysisRetrieveResponse.Meta;

  root: EventNode;

  /**
   * Identifier for the analyzed session.
   */
  session_id: string;

  /**
   * Analysis status (e.g. "completed").
   */
  status: string;

  /**
   * When the session completed.
   */
  completed_at?: string | null;
}

export namespace SessionAnalysisRetrieveResponse {
  export interface Cost {
    /**
     * ISO 4217 currency code.
     */
    currency: string;

    /**
     * Total session cost as a decimal string.
     */
    total: string;
  }

  export interface Meta {
    /**
     * Total number of events in the session tree.
     */
    event_count: number;

    /**
     * List of distinct products involved in the session.
     */
    products: Array<string>;
  }
}

export interface SessionAnalysisRetrieveParams {
  /**
   * Path param: The record type identifier.
   */
  record_type: string;

  /**
   * Query param: ISO 8601 timestamp to narrow index selection for faster lookups.
   */
  date_time?: string;

  /**
   * Query param: Controls what data to expand on each event node.
   */
  expand?: 'record' | 'none';

  /**
   * Query param: Whether to include child events in the response.
   */
  include_children?: boolean;

  /**
   * Query param: Maximum traversal depth for the event tree.
   */
  max_depth?: number;
}

SessionAnalysis.Metadata = Metadata;

export declare namespace SessionAnalysis {
  export {
    type EventNode as EventNode,
    type SessionAnalysisRetrieveResponse as SessionAnalysisRetrieveResponse,
    type SessionAnalysisRetrieveParams as SessionAnalysisRetrieveParams,
  };

  export {
    Metadata as Metadata,
    type ChildRelationshipInfo as ChildRelationshipInfo,
    type MetadataFieldMapping as MetadataFieldMapping,
    type ParentRelationshipInfo as ParentRelationshipInfo,
    type MetadataRetrieveResponse as MetadataRetrieveResponse,
    type MetadataRetrieveRecordTypeResponse as MetadataRetrieveRecordTypeResponse,
  };
}
