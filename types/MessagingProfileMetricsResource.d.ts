import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type MessagingProfilesListMetricsParams =
      paths['/messaging_profile_metrics']['get']['parameters']['query'];

    type MessagingProfilesListMetricsResponse =
      paths['/messaging_profile_metrics']['get']['responses']['200']['content']['application/json'];

    class MessagingProfileMetricsResource {
      listMetrics(
        params?: MessagingProfilesListMetricsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesListMetricsResponse>>;
    }
  }
}
