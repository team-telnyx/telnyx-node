import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type NotificationEventsListParams =
      paths['/notification_events']['get']['parameters']['query'];

    type NotificationEventsListResponse =
      paths['/notification_events']['get']['responses']['200']['content']['application/json'];

    class NotificationEventsResource {
      list(
        params?: NotificationEventsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.NotificationEventsListResponse>>;
    }
  }
}
