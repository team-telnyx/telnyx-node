// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as BatchDetailRecordsAPI from './batch-detail-records/batch-detail-records';
import { BatchDetailRecords } from './batch-detail-records/batch-detail-records';
import * as UsageReportsAPI from './usage-reports/usage-reports';
import {
  UsageReportRetrieveSpeechToTextParams,
  UsageReportRetrieveSpeechToTextResponse,
  UsageReports,
} from './usage-reports/usage-reports';

export class Reporting extends APIResource {
  batchDetailRecords: BatchDetailRecordsAPI.BatchDetailRecords = new BatchDetailRecordsAPI.BatchDetailRecords(
    this._client,
  );
  usageReports: UsageReportsAPI.UsageReports = new UsageReportsAPI.UsageReports(this._client);
}

Reporting.BatchDetailRecords = BatchDetailRecords;
Reporting.UsageReports = UsageReports;

export declare namespace Reporting {
  export { BatchDetailRecords as BatchDetailRecords };

  export {
    UsageReports as UsageReports,
    type UsageReportRetrieveSpeechToTextResponse as UsageReportRetrieveSpeechToTextResponse,
    type UsageReportRetrieveSpeechToTextParams as UsageReportRetrieveSpeechToTextParams,
  };
}
