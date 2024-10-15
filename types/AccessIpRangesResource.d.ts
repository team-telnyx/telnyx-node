import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AccessIpRangesCreateParams =
      paths['/access_ip_ranges']['post']['requestBody']['content']['application/json'];

    type AccessIpRangesCreateResponse =
      paths['/access_ip_ranges']['post']['responses']['200']['content']['application/json'];

    type AccessIpRangesListParams =
      paths['/access_ip_ranges']['get']['parameters']['query'];

    type AccessIpRangesListResponse =
      paths['/access_ip_ranges']['get']['responses']['200']['content']['application/json'];

    type AccessIpRangesDelId =
      paths['/access_ip_ranges/{access_ip_range_id}']['delete']['parameters']['path']['access_ip_range_id'];

    type AccessIpRangesDelParams =
      paths['/access_ip_ranges/{access_ip_range_id}']['delete']['parameters']['query'];

    type AccessIpRangesDelResponse =
      paths['/access_ip_ranges/{access_ip_range_id}']['delete']['responses']['200']['content']['application/json'];

    class AccessIpRangesResource {
      create(
        params: AccessIpRangesCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AccessIpRangesCreateResponse>>;

      list(
        params?: AccessIpRangesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AccessIpRangesListResponse>>;

      del(
        id: AccessIpRangesDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AccessIpRangesDelResponse>>;
    }
  }
}
