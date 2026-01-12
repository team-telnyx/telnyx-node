// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EventsAPI from './events';
import {
  EventListParams,
  EventListResponse,
  EventListResponsesDefaultPagination,
  EventRetrieveResponse,
  Events,
} from './events';
import * as LoaConfigurationsAPI from './loa-configurations';
import {
  LoaConfigurationCreateParams,
  LoaConfigurationCreateResponse,
  LoaConfigurationListParams,
  LoaConfigurationPreview0Params,
  LoaConfigurationRetrieveResponse,
  LoaConfigurationUpdateParams,
  LoaConfigurationUpdateResponse,
  LoaConfigurations,
  PortingLoaConfiguration,
  PortingLoaConfigurationsDefaultPagination,
} from './loa-configurations';
import * as ReportsAPI from './reports';
import {
  ExportPortingOrdersCsvReport,
  PortingReport,
  PortingReportsDefaultPagination,
  ReportCreateParams,
  ReportCreateResponse,
  ReportListParams,
  ReportRetrieveResponse,
  Reports,
} from './reports';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Porting extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  loaConfigurations: LoaConfigurationsAPI.LoaConfigurations = new LoaConfigurationsAPI.LoaConfigurations(
    this._client,
  );

  /**
   * List available carriers in the UK.
   *
   * @example
   * ```ts
   * const response = await client.porting.listUkCarriers();
   * ```
   */
  listUkCarriers(options?: RequestOptions): APIPromise<PortingListUkCarriersResponse> {
    return this._client.get('/porting/uk_carriers', options);
  }
}

export interface PortingListUkCarriersResponse {
  data?: Array<PortingListUkCarriersResponse.Data>;
}

export namespace PortingListUkCarriersResponse {
  export interface Data {
    /**
     * Identifies the UK carrier.
     */
    id?: string;

    /**
     * Alternative CUPIDs of the carrier.
     */
    alternative_cupids?: Array<string>;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * The CUPID of the carrier. This is a 3 digit number code that identifies the
     * carrier in the UK.
     */
    cupid?: string;

    /**
     * The name of the carrier.
     */
    name?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }
}

Porting.Events = Events;
Porting.Reports = Reports;
Porting.LoaConfigurations = LoaConfigurations;

export declare namespace Porting {
  export { type PortingListUkCarriersResponse as PortingListUkCarriersResponse };

  export {
    Events as Events,
    type EventRetrieveResponse as EventRetrieveResponse,
    type EventListResponse as EventListResponse,
    type EventListResponsesDefaultPagination as EventListResponsesDefaultPagination,
    type EventListParams as EventListParams,
  };

  export {
    Reports as Reports,
    type ExportPortingOrdersCsvReport as ExportPortingOrdersCsvReport,
    type PortingReport as PortingReport,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type PortingReportsDefaultPagination as PortingReportsDefaultPagination,
    type ReportCreateParams as ReportCreateParams,
    type ReportListParams as ReportListParams,
  };

  export {
    LoaConfigurations as LoaConfigurations,
    type PortingLoaConfiguration as PortingLoaConfiguration,
    type LoaConfigurationCreateResponse as LoaConfigurationCreateResponse,
    type LoaConfigurationRetrieveResponse as LoaConfigurationRetrieveResponse,
    type LoaConfigurationUpdateResponse as LoaConfigurationUpdateResponse,
    type PortingLoaConfigurationsDefaultPagination as PortingLoaConfigurationsDefaultPagination,
    type LoaConfigurationCreateParams as LoaConfigurationCreateParams,
    type LoaConfigurationUpdateParams as LoaConfigurationUpdateParams,
    type LoaConfigurationListParams as LoaConfigurationListParams,
    type LoaConfigurationPreview0Params as LoaConfigurationPreview0Params,
  };
}
