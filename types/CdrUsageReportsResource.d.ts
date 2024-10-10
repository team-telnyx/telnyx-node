import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CdrUsageReportsSyncParams =
      paths['/reports/cdr_usage_reports/sync']['get']['parameters']['query'];

    type CdrUsageReportsSyncResponse =
      paths['/reports/cdr_usage_reports/sync']['get']['responses']['200']['content']['application/json'];

    class CdrUsageReportsResource {
      retrieveUsageReportSync(
        params?: CdrUsageReportsSyncParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CdrUsageReportsSyncResponse>>;
    }
  }
}
