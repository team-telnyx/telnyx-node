import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type ChannelzonesListParams =
      paths['/channel_zones']['get']['parameters']['query'];

    type ChannelzonesListResponse =
      paths['/channel_zones']['get']['responses']['200']['content']['application/json'];

    type ChannelzonesUpdateId =
      paths['/channel_zones/{channel_zone_id}']['put']['parameters']['path']['channel_zone_id'];

    type ChannelzonesUpdateParams =
      paths['/channel_zones/{channel_zone_id}']['put']['requestBody']['content']['application/json'];

    type ChannelzonesUpdateResponse =
      paths['/channel_zones/{channel_zone_id}']['put']['responses']['200']['content']['application/json'];

    class ChannelzonesResource {
      list(
        params?: ChannelzonesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ChannelzonesListResponse>>;

      update(
        id: ChannelzonesUpdateId,
        params: ChannelzonesUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ChannelzonesUpdateResponse>>;
    }
  }
}
