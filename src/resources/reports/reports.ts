// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CdrUsageReportsAPI from './cdr-usage-reports';
import {
  CdrUsageReportFetchSyncParams,
  CdrUsageReportFetchSyncResponse,
  CdrUsageReports,
} from './cdr-usage-reports';
import * as MdrUsageReportsAPI from './mdr-usage-reports';
import {
  MdrUsageReport,
  MdrUsageReportCreateParams,
  MdrUsageReportCreateResponse,
  MdrUsageReportDeleteResponse,
  MdrUsageReportFetchSyncParams,
  MdrUsageReportFetchSyncResponse,
  MdrUsageReportListParams,
  MdrUsageReportListResponse,
  MdrUsageReportRetrieveResponse,
  MdrUsageReports,
} from './mdr-usage-reports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Reports extends APIResource {
  cdrUsageReports: CdrUsageReportsAPI.CdrUsageReports = new CdrUsageReportsAPI.CdrUsageReports(this._client);
  mdrUsageReports: MdrUsageReportsAPI.MdrUsageReports = new MdrUsageReportsAPI.MdrUsageReports(this._client);

  /**
   * Fetch all Mdr records
   *
   * @example
   * ```ts
   * const response = await client.reports.listMdrs();
   * ```
   */
  listMdrs(
    query: ReportListMdrsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportListMdrsResponse> {
    return this._client.get('/reports/mdrs', { query, ...options });
  }

  /**
   * Fetch all Wdr records
   *
   * @example
   * ```ts
   * const response = await client.reports.listWdrs();
   * ```
   */
  listWdrs(
    query: ReportListWdrsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ReportListWdrsResponse> {
    return this._client.get('/reports/wdrs', { query, ...options });
  }
}

export interface ReportListMdrsResponse {
  data?: Array<ReportListMdrsResponse.Data>;

  meta?: ReportListMdrsResponse.Meta;
}

export namespace ReportListMdrsResponse {
  export interface Data {
    /**
     * Id of message detail record
     */
    id?: string;

    /**
     * The destination number for a call, or the callee
     */
    cld?: string;

    /**
     * The number associated with the person initiating the call, or the caller
     */
    cli?: string;

    /**
     * Final cost. Cost is calculated as rate \* parts
     */
    cost?: string;

    /**
     * Message sent time
     */
    created_at?: string;

    /**
     * Currency of the rate and cost
     */
    currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD';

    /**
     * Direction of message - inbound or outbound.
     */
    direction?: string;

    /**
     * Type of message
     */
    message_type?: 'SMS' | 'MMS';

    /**
     * Number of parts this message has. Max number of character is 160. If message
     * contains more characters then that it will be broken down in multiple parts
     */
    parts?: number;

    /**
     * Configured profile name. New profiles can be created and configured on Telnyx
     * portal
     */
    profile_name?: string;

    /**
     * Rate applied to the message
     */
    rate?: string;

    record_type?: string;

    /**
     * Message status
     */
    status?:
      | 'GW_TIMEOUT'
      | 'DELIVERED'
      | 'DLR_UNCONFIRMED'
      | 'DLR_TIMEOUT'
      | 'RECEIVED'
      | 'GW_REJECT'
      | 'FAILED';
  }

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface ReportListWdrsResponse {
  data?: Array<ReportListWdrsResponse.Data>;

  meta?: ReportListWdrsResponse.Meta;
}

export namespace ReportListWdrsResponse {
  export interface Data {
    /**
     * WDR id
     */
    id?: string;

    cost?: Data.Cost;

    /**
     * Record created time
     */
    created_at?: string;

    downlink_data?: Data.DownlinkData;

    /**
     * Session duration in seconds.
     */
    duration_seconds?: number;

    /**
     * International mobile subscriber identity.
     */
    imsi?: string;

    /**
     * Mobile country code.
     */
    mcc?: string;

    /**
     * Mobile network code.
     */
    mnc?: string;

    /**
     * Phone number
     */
    phone_number?: string;

    rate?: Data.Rate;

    record_type?: string;

    /**
     * Sim card unique identifier
     */
    sim_card_id?: string;

    /**
     * Sim group unique identifier
     */
    sim_group_id?: string;

    /**
     * Defined sim group name
     */
    sim_group_name?: string;

    uplink_data?: Data.UplinkData;
  }

  export namespace Data {
    export interface Cost {
      /**
       * Final cost. Cost is calculated as rate \* unit
       */
      amount?: string;

      /**
       * Currency of the rate and cost
       */
      currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD';
    }

    export interface DownlinkData {
      /**
       * Downlink data
       */
      amount?: number;

      /**
       * Transmission unit
       */
      unit?: 'B' | 'KB' | 'MB';
    }

    export interface Rate {
      /**
       * Rate from which cost is calculated
       */
      amount?: string;

      /**
       * Currency of the rate and cost
       */
      currency?: 'AUD' | 'CAD' | 'EUR' | 'GBP' | 'USD';
    }

    export interface UplinkData {
      /**
       * Uplink data
       */
      amount?: number;

      /**
       * Transmission unit
       */
      unit?: 'B' | 'KB' | 'MB';
    }
  }

  export interface Meta {
    page_number?: number;

    page_size?: number;

    total_pages?: number;

    total_results?: number;
  }
}

export interface ReportListMdrsParams {
  /**
   * Message uuid
   */
  id?: string;

  /**
   * Destination number
   */
  cld?: string;

  /**
   * Origination number
   */
  cli?: string;

  /**
   * Direction (inbound or outbound)
   */
  direction?: 'INBOUND' | 'OUTBOUND';

  /**
   * Pagination end date
   */
  end_date?: string;

  /**
   * Type of message
   */
  message_type?: 'SMS' | 'MMS';

  /**
   * Name of the profile
   */
  profile?: string;

  /**
   * Pagination start date
   */
  start_date?: string;

  /**
   * Message status
   */
  status?:
    | 'GW_TIMEOUT'
    | 'DELIVERED'
    | 'DLR_UNCONFIRMED'
    | 'DLR_TIMEOUT'
    | 'RECEIVED'
    | 'GW_REJECT'
    | 'FAILED';
}

export interface ReportListWdrsParams {
  /**
   * WDR uuid
   */
  id?: string;

  /**
   * End date
   */
  end_date?: string;

  /**
   * International mobile subscriber identity
   */
  imsi?: string;

  /**
   * Mobile country code
   */
  mcc?: string;

  /**
   * Mobile network code
   */
  mnc?: string;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  page?: ReportListWdrsParams.Page;

  /**
   * Phone number
   */
  phone_number?: string;

  /**
   * Sim card unique identifier
   */
  sim_card_id?: string;

  /**
   * Sim group unique identifier
   */
  sim_group_id?: string;

  /**
   * Sim group name
   */
  sim_group_name?: string;

  /**
   * Field used to order the data. If no field is specified, default value is
   * 'created_at'
   */
  sort?: Array<string>;

  /**
   * Start date
   */
  start_date?: string;
}

export namespace ReportListWdrsParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[number],
   * page[size]
   */
  export interface Page {
    /**
     * Page number
     */
    number?: number;

    /**
     * Size of the page
     */
    size?: number;
  }
}

Reports.CdrUsageReports = CdrUsageReports;
Reports.MdrUsageReports = MdrUsageReports;

export declare namespace Reports {
  export {
    type ReportListMdrsResponse as ReportListMdrsResponse,
    type ReportListWdrsResponse as ReportListWdrsResponse,
    type ReportListMdrsParams as ReportListMdrsParams,
    type ReportListWdrsParams as ReportListWdrsParams,
  };

  export {
    CdrUsageReports as CdrUsageReports,
    type CdrUsageReportFetchSyncResponse as CdrUsageReportFetchSyncResponse,
    type CdrUsageReportFetchSyncParams as CdrUsageReportFetchSyncParams,
  };

  export {
    MdrUsageReports as MdrUsageReports,
    type MdrUsageReport as MdrUsageReport,
    type MdrUsageReportCreateResponse as MdrUsageReportCreateResponse,
    type MdrUsageReportRetrieveResponse as MdrUsageReportRetrieveResponse,
    type MdrUsageReportListResponse as MdrUsageReportListResponse,
    type MdrUsageReportDeleteResponse as MdrUsageReportDeleteResponse,
    type MdrUsageReportFetchSyncResponse as MdrUsageReportFetchSyncResponse,
    type MdrUsageReportCreateParams as MdrUsageReportCreateParams,
    type MdrUsageReportListParams as MdrUsageReportListParams,
    type MdrUsageReportFetchSyncParams as MdrUsageReportFetchSyncParams,
  };
}
