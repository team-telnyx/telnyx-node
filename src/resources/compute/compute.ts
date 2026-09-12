// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as FuncsAPI from './funcs';
import {
  FuncRetrieveLogsParams,
  FuncRetrieveLogsResponse,
  FuncRetrieveMetricAggregatesParams,
  FuncRetrieveMetricAggregatesResponse,
  FuncRetrieveRevisionsParams,
  FuncRetrieveRevisionsResponse,
  FuncRetrieveShipInspectionResponse,
  Funcs,
  FunctionsObservabilityPaginationMeta,
  LogsMeta,
} from './funcs';

export class Compute extends APIResource {
  funcs: FuncsAPI.Funcs = new FuncsAPI.Funcs(this._client);
}

Compute.Funcs = Funcs;

export declare namespace Compute {
  export {
    Funcs as Funcs,
    type FunctionsObservabilityPaginationMeta as FunctionsObservabilityPaginationMeta,
    type LogsMeta as LogsMeta,
    type FuncRetrieveLogsResponse as FuncRetrieveLogsResponse,
    type FuncRetrieveMetricAggregatesResponse as FuncRetrieveMetricAggregatesResponse,
    type FuncRetrieveRevisionsResponse as FuncRetrieveRevisionsResponse,
    type FuncRetrieveShipInspectionResponse as FuncRetrieveShipInspectionResponse,
    type FuncRetrieveLogsParams as FuncRetrieveLogsParams,
    type FuncRetrieveMetricAggregatesParams as FuncRetrieveMetricAggregatesParams,
    type FuncRetrieveRevisionsParams as FuncRetrieveRevisionsParams,
  };
}
