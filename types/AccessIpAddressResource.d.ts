import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AccessIpAddressRetrieveId =
      paths['/access_ip_address/{access_ip_address_id}']['get']['parameters']['path']['access_ip_address_id'];

    type AccessIpAddressRetrieveParams =
      paths['/access_ip_address/{access_ip_address_id}']['get']['parameters']['query'];

    type AccessIpAddressRetrieveResponse =
      paths['/access_ip_address/{access_ip_address_id}']['get']['responses']['200']['content']['application/json'];

    type AccessIpAddressCreateParams =
      paths['/access_ip_address']['post']['requestBody']['content']['application/json'];

    type AccessIpAddressCreateResponse =
      paths['/access_ip_address']['post']['responses']['200']['content']['application/json'];

    type AccessIpAddressListParams =
      paths['/access_ip_address']['get']['parameters']['query'];

    type AccessIpAddressListResponse =
      paths['/access_ip_address']['get']['responses']['200']['content']['application/json'];

    type AccessIpAddressDelId =
      paths['/access_ip_address/{access_ip_address_id}']['delete']['parameters']['path']['access_ip_address_id'];

    type AccessIpAddressDelParams =
      paths['/access_ip_address/{access_ip_address_id}']['delete']['parameters']['query'];

    type AccessIpAddressDelResponse =
      paths['/access_ip_address/{access_ip_address_id}']['delete']['responses']['200']['content']['application/json'];

    class AccessIpAddressResource {
      retrieve(
        id: AccessIpAddressRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AccessIpAddressRetrieveResponse>>;

      create(
        params: AccessIpAddressCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AccessIpAddressCreateResponse>>;

      list(
        params?: AccessIpAddressListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AccessIpAddressListResponse>>;

      del(
        id: AccessIpAddressDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AccessIpAddressDelResponse>>;
    }
  }
}
