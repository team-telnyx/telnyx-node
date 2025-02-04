import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CallEventsListParams =
      paths['/call_events']['get']['parameters']['query'];

    type CallEventsListResponse =
      paths['/call_events']['get']['responses']['200']['content']['application/json'];

    class CallEventsResource {
      list(
        params?: CallEventsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallEventsListResponse>>;
    }
  }
}
