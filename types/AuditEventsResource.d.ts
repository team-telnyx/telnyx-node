import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AuditEventsListParams =
      paths['/audit_events']['get']['parameters']['query'];

    type AuditEventsListResponse =
      paths['/audit_events']['get']['responses']['200']['content']['application/json'];

    class AuditEventsResource {
      list(
        params?: AuditEventsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AuditEventsListResponse>>;
    }
  }
}
