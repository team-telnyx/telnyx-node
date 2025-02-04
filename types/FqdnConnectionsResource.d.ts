import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type FqdnConnectionsDelId =
      paths['/fqdn_connections/{id}']['delete']['parameters']['path']['id'];

    type FqdnConnectionsDelParams =
      paths['/fqdn_connections/{id}']['delete']['parameters']['query'];

    type FqdnConnectionsDelResponse =
      paths['/fqdn_connections/{id}']['delete']['responses']['200']['content']['application/json'];

    type FqdnConnectionsCreateParams =
      paths['/fqdn_connections']['post']['requestBody']['content']['application/json'];

    type FqdnConnectionsCreateResponse =
      paths['/fqdn_connections']['post']['responses']['201']['content']['application/json'];

    type FqdnConnectionsRetrieveId =
      paths['/fqdn_connections/{id}']['get']['parameters']['path']['id'];

    type FqdnConnectionsRetrieveParams =
      paths['/fqdn_connections/{id}']['get']['parameters']['query'];

    type FqdnConnectionsRetrieveResponse =
      paths['/fqdn_connections/{id}']['get']['responses']['200']['content']['application/json'];

    type FqdnConnectionsListParams =
      paths['/fqdn_connections']['get']['parameters']['query'];

    type FqdnConnectionsListResponse =
      paths['/fqdn_connections']['get']['responses']['200']['content']['application/json'];

    type FqdnConnectionsUpdateId =
      paths['/fqdn_connections/{id}']['patch']['parameters']['path']['id'];

    type FqdnConnectionsUpdateParams =
      paths['/fqdn_connections/{id}']['patch']['requestBody']['content']['application/json'];

    type FqdnConnectionsUpdateResponse =
      paths['/fqdn_connections/{id}']['patch']['responses']['200']['content']['application/json'];

    type FqdnConnectionsNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FqdnConnectionsDelResponse>>;

      update(
        params: FqdnConnectionsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FqdnConnectionsUpdateResponse>>;
    };

    class FqdnConnectionsResource {
      list(
        params?: FqdnConnectionsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FqdnConnectionsListResponse>>;

      create(
        params: FqdnConnectionsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FqdnConnectionsCreateResponse &
            NestedResponseData<
              FqdnConnectionsCreateResponse['data'],
              FqdnConnectionsNestedMethods
            >
        >
      >;

      retrieve(
        id: FqdnConnectionsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FqdnConnectionsRetrieveResponse &
            NestedResponseData<
              FqdnConnectionsRetrieveResponse['data'],
              FqdnConnectionsNestedMethods
            >
        >
      >;
    }
  }
}
