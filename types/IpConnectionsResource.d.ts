import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type IpConnectionsDelId =
      paths['/ip_connections/{id}']['delete']['parameters']['path']['id'];

    type IpConnectionsDelParams =
      paths['/ip_connections/{id}']['delete']['parameters']['query'];

    type IpConnectionsDelResponse =
      paths['/ip_connections/{id}']['delete']['responses']['200']['content']['application/json'];

    type IpConnectionsCreateParams =
      paths['/ip_connections']['post']['requestBody']['content']['application/json'];

    type IpConnectionsCreateResponse =
      paths['/ip_connections']['post']['responses']['201']['content']['application/json'];

    type IpConnectionsRetrieveId =
      paths['/ip_connections/{id}']['get']['parameters']['path']['id'];

    type IpConnectionsRetrieveParams =
      paths['/ip_connections/{id}']['get']['parameters']['query'];

    type IpConnectionsRetrieveResponse =
      paths['/ip_connections/{id}']['get']['responses']['200']['content']['application/json'];

    type IpConnectionsListParams =
      paths['/ip_connections']['get']['parameters']['query'];

    type IpConnectionsListResponse =
      paths['/ip_connections']['get']['responses']['200']['content']['application/json'];

    type IpConnectionsUpdateId =
      paths['/ip_connections/{id}']['patch']['parameters']['path']['id'];

    type IpConnectionsUpdateParams =
      paths['/ip_connections/{id}']['patch']['requestBody']['content']['application/json'];

    type IpConnectionsUpdateResponse =
      paths['/ip_connections/{id}']['patch']['responses']['200']['content']['application/json'];

    type IpConnectionsNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpConnectionsDelResponse>>;

      update(
        params: IpConnectionsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpConnectionsUpdateResponse>>;
    };

    class IpConnectionsResource {
      list(
        params?: IpConnectionsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpConnectionsListResponse>>;

      create(
        params: IpConnectionsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.IpConnectionsCreateResponse &
            NestedResponseData<
              IpConnectionsCreateResponse['data'],
              IpConnectionsNestedMethods
            >
        >
      >;

      retrieve(
        id: IpConnectionsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.IpConnectionsRetrieveResponse &
            NestedResponseData<
              IpConnectionsRetrieveResponse['data'],
              IpConnectionsNestedMethods
            >
        >
      >;
    }
  }
}
