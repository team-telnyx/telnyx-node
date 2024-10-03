import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CredentialConnectionsListParams =
      paths['/credential_connections']['get']['parameters']['query'];

    type CredentialConnectionsListResponse =
      paths['/credential_connections']['get']['responses']['200']['content']['application/json'];

    type CredentialConnectionsCreateParams =
      paths['/credential_connections']['post']['requestBody']['content']['application/json'];

    type CredentialConnectionsCreateResponse =
      paths['/credential_connections']['post']['responses']['201']['content']['application/json'];

    type CredentialConnectionsRetrieveId =
      paths['/credential_connections/{id}']['get']['parameters']['path']['id'];

    type CredentialConnectionsRetrieveResponse =
      paths['/credential_connections/{id}']['get']['responses']['200']['content']['application/json'];

    type CredentialConnectionsUpdateId =
      paths['/credential_connections/{id}']['patch']['parameters']['path']['id'];

    type CredentialConnectionsUpdateParams =
      paths['/credential_connections/{id}']['patch']['requestBody']['content']['application/json'];

    type CredentialConnectionsUpdateResponse =
      paths['/credential_connections/{id}']['patch']['responses']['200']['content']['application/json'];

    type CredentialConnectionsDelId =
      paths['/credential_connections/{id}']['delete']['parameters']['path']['id'];

    type CredentialConnectionsDelParams =
      paths['/credential_connections/{id}']['delete']['parameters']['query'];

    type CredentialConnectionsDelResponse =
      paths['/credential_connections/{id}']['delete']['responses']['200']['content']['application/json'];

    class CredentialConnectionsResource {
      list(
        params?: CredentialConnectionsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CredentialConnectionsListResponse>>;

      create(
        params: CredentialConnectionsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CredentialConnectionsCreateResponse>>;

      retrieve(
        id: CredentialConnectionsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CredentialConnectionsRetrieveResponse>>;

      update(
        id: CredentialConnectionsUpdateId,
        params: CredentialConnectionsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CredentialConnectionsUpdateResponse>>;

      del(
        id: CredentialConnectionsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CredentialConnectionsDelResponse>>;
    }
  }
}
