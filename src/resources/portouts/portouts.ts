// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CommentsAPI from './comments';
import { CommentCreateParams, CommentCreateResponse, CommentListResponse, Comments } from './comments';
import * as EventsAPI from './events';
import {
  EventListParams,
  EventListResponse,
  EventListResponsesDefaultFlatPagination,
  EventRetrieveResponse,
  Events,
} from './events';
import * as ReportsAPI from './reports';
import {
  ExportPortoutsCsvReport,
  PortoutReport,
  PortoutReportsDefaultFlatPagination,
  ReportCreateParams,
  ReportCreateResponse,
  ReportListParams,
  ReportRetrieveResponse,
  Reports,
} from './reports';
import * as SupportingDocumentsAPI from './supporting-documents';
import {
  SupportingDocumentCreateParams,
  SupportingDocumentCreateResponse,
  SupportingDocumentListResponse,
  SupportingDocuments,
} from './supporting-documents';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Portouts extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  comments: CommentsAPI.Comments = new CommentsAPI.Comments(this._client);
  supportingDocuments: SupportingDocumentsAPI.SupportingDocuments =
    new SupportingDocumentsAPI.SupportingDocuments(this._client);

  /**
   * Returns the portout request based on the ID provided
   *
   * @example
   * ```ts
   * const portout = await client.portouts.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PortoutRetrieveResponse> {
    return this._client.get(path`/portouts/${id}`, options);
  }

  /**
   * Returns the portout requests according to filters
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const portoutDetails of client.portouts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PortoutListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PortoutDetailsDefaultFlatPagination, PortoutDetails> {
    return this._client.getAPIList('/portouts', DefaultFlatPagination<PortoutDetails>, { query, ...options });
  }

  /**
   * Given a port-out ID, list rejection codes that are eligible for that port-out
   *
   * @example
   * ```ts
   * const response = await client.portouts.listRejectionCodes(
   *   '329d6658-8f93-405d-862f-648776e8afd7',
   * );
   * ```
   */
  listRejectionCodes(
    portoutID: string,
    query: PortoutListRejectionCodesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PortoutListRejectionCodesResponse> {
    return this._client.get(path`/portouts/rejections/${portoutID}`, { query, ...options });
  }

  /**
   * Authorize or reject portout request
   *
   * @example
   * ```ts
   * const response = await client.portouts.updateStatus(
   *   'authorized',
   *   {
   *     id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     reason: 'I do not recognize this transaction',
   *   },
   * );
   * ```
   */
  updateStatus(
    status: 'authorized' | 'rejected-pending',
    params: PortoutUpdateStatusParams,
    options?: RequestOptions,
  ): APIPromise<PortoutUpdateStatusResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/portouts/${id}/${status}`, { body, ...options });
  }
}

export type PortoutDetailsDefaultFlatPagination = DefaultFlatPagination<PortoutDetails>;

export interface PortoutDetails {
  id?: string;

  /**
   * Is true when the number is already ported
   */
  already_ported?: boolean;

  /**
   * Name of person authorizing the porting order
   */
  authorized_name?: string;

  /**
   * Carrier the number will be ported out to
   */
  carrier_name?: string;

  /**
   * City or municipality of billing address
   */
  city?: string;

  /**
   * ISO 8601 formatted date of when the portout was created
   */
  created_at?: string;

  /**
   * The current carrier
   */
  current_carrier?: string;

  /**
   * Person name or company name requesting the port
   */
  end_user_name?: string;

  /**
   * ISO 8601 formatted Date/Time of the FOC date
   */
  foc_date?: string;

  /**
   * Indicates whether messaging services should be maintained with Telnyx after the
   * port out completes
   */
  host_messaging?: boolean;

  /**
   * ISO 8601 formatted date of when the portout was created
   */
  inserted_at?: string;

  /**
   * The Local Service Request
   */
  lsr?: Array<string>;

  /**
   * Phone numbers associated with this portout
   */
  phone_numbers?: Array<string>;

  /**
   * Port order number assigned by the carrier the number will be ported out to
   */
  pon?: string;

  /**
   * The reason why the order is being rejected by the user. If the order is
   * authorized, this field can be left null
   */
  reason?: string | null;

  /**
   * Identifies the type of the resource.
   */
  record_type?: string;

  /**
   * The rejection code for one of the valid rejections to reject a port out order
   */
  rejection_code?: number;

  /**
   * ISO 8601 formatted Date/Time of the user requested FOC date
   */
  requested_foc_date?: string;

  /**
   * First line of billing address (street address)
   */
  service_address?: string;

  /**
   * New service provider spid
   */
  spid?: string;

  /**
   * State, province, or similar of billing address
   */
  state?: string;

  /**
   * Status of portout request
   */
  status?: 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled';

  /**
   * A key to reference this port out request when contacting Telnyx customer support
   */
  support_key?: string;

  /**
   * ISO 8601 formatted date of when the portout was last updated
   */
  updated_at?: string;

  /**
   * Identifies the user (or organization) who requested the port out
   */
  user_id?: string;

  /**
   * Telnyx partner providing network coverage
   */
  vendor?: string;

  /**
   * Postal Code of billing address
   */
  zip?: string;
}

export interface PortoutRetrieveResponse {
  data?: PortoutDetails;
}

export interface PortoutListRejectionCodesResponse {
  data?: Array<PortoutListRejectionCodesResponse.Data>;
}

export namespace PortoutListRejectionCodesResponse {
  export interface Data {
    code?: number;

    description?: string;

    reason_required?: boolean;
  }
}

export interface PortoutUpdateStatusResponse {
  data?: PortoutDetails;
}

export interface PortoutListParams extends DefaultFlatPaginationParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[carrier_name], filter[country_code], filter[country_code_in],
   * filter[foc_date], filter[inserted_at], filter[phone_number], filter[pon],
   * filter[ported_out_at], filter[spid], filter[status], filter[status_in],
   * filter[support_key]
   */
  filter?: PortoutListParams.Filter;
}

export namespace PortoutListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally:
   * filter[carrier_name], filter[country_code], filter[country_code_in],
   * filter[foc_date], filter[inserted_at], filter[phone_number], filter[pon],
   * filter[ported_out_at], filter[spid], filter[status], filter[status_in],
   * filter[support_key]
   */
  export interface Filter {
    /**
     * Filter by new carrier name.
     */
    carrier_name?: string;

    /**
     * Filter by 2-letter country code
     */
    country_code?: string;

    /**
     * Filter by a list of 2-letter country codes
     */
    country_code_in?: Array<string>;

    /**
     * Filter by foc_date. Matches all portouts with the same date
     */
    foc_date?: string;

    /**
     * Filter by inserted_at date range using nested operations
     */
    inserted_at?: Filter.InsertedAt;

    /**
     * Filter by a phone number on the portout. Matches all portouts with the phone
     * number
     */
    phone_number?: string;

    /**
     * Filter by Port Order Number (PON).
     */
    pon?: string;

    /**
     * Filter by ported_out_at date range using nested operations
     */
    ported_out_at?: Filter.PortedOutAt;

    /**
     * Filter by new carrier spid.
     */
    spid?: string;

    /**
     * Filter by portout status.
     */
    status?: 'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled';

    /**
     * Filter by a list of portout statuses
     */
    status_in?: Array<'pending' | 'authorized' | 'ported' | 'rejected' | 'rejected-pending' | 'canceled'>;

    /**
     * Filter by the portout's support_key
     */
    support_key?: string;
  }

  export namespace Filter {
    /**
     * Filter by inserted_at date range using nested operations
     */
    export interface InsertedAt {
      /**
       * Filter by inserted_at date greater than or equal.
       */
      gte?: string;

      /**
       * Filter by inserted_at date less than or equal.
       */
      lte?: string;
    }

    /**
     * Filter by ported_out_at date range using nested operations
     */
    export interface PortedOutAt {
      /**
       * Filter by ported_out_at date greater than or equal.
       */
      gte?: string;

      /**
       * Filter by ported_out_at date less than or equal.
       */
      lte?: string;
    }
  }
}

export interface PortoutListRejectionCodesParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[code],
   * filter[code][in]
   */
  filter?: PortoutListRejectionCodesParams.Filter;
}

export namespace PortoutListRejectionCodesParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[code],
   * filter[code][in]
   */
  export interface Filter {
    /**
     * Filter rejections of a specific code
     */
    code?: number | Array<number>;
  }
}

export interface PortoutUpdateStatusParams {
  /**
   * Path param: Portout id
   */
  id: string;

  /**
   * Body param: Provide a reason if rejecting the port out request
   */
  reason: string;

  /**
   * Body param: Indicates whether messaging services should be maintained with
   * Telnyx after the port out completes
   */
  host_messaging?: boolean;
}

Portouts.Events = Events;
Portouts.Reports = Reports;
Portouts.Comments = Comments;
Portouts.SupportingDocuments = SupportingDocuments;

export declare namespace Portouts {
  export {
    type PortoutDetails as PortoutDetails,
    type PortoutRetrieveResponse as PortoutRetrieveResponse,
    type PortoutListRejectionCodesResponse as PortoutListRejectionCodesResponse,
    type PortoutUpdateStatusResponse as PortoutUpdateStatusResponse,
    type PortoutDetailsDefaultFlatPagination as PortoutDetailsDefaultFlatPagination,
    type PortoutListParams as PortoutListParams,
    type PortoutListRejectionCodesParams as PortoutListRejectionCodesParams,
    type PortoutUpdateStatusParams as PortoutUpdateStatusParams,
  };

  export {
    Events as Events,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventListResponsesDefaultFlatPagination as EventListResponsesDefaultFlatPagination,
    type EventListParams as EventListParams,
  };

  export {
    Reports as Reports,
    type ExportPortoutsCsvReport as ExportPortoutsCsvReport,
    type PortoutReport as PortoutReport,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type PortoutReportsDefaultFlatPagination as PortoutReportsDefaultFlatPagination,
    type ReportCreateParams as ReportCreateParams,
    type ReportListParams as ReportListParams,
  };

  export {
    Comments as Comments,
    type CommentCreateResponse as CommentCreateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentCreateParams as CommentCreateParams,
  };

  export {
    SupportingDocuments as SupportingDocuments,
    type SupportingDocumentCreateResponse as SupportingDocumentCreateResponse,
    type SupportingDocumentListResponse as SupportingDocumentListResponse,
    type SupportingDocumentCreateParams as SupportingDocumentCreateParams,
  };
}
