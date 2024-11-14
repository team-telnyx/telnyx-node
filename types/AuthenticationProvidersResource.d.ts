import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AuthenticationProvidersListParams =
      paths['/authentication_providers']['get']['parameters']['query'];

    type AuthenticationProvidersListResponse =
      paths['/authentication_providers']['get']['responses']['200']['content']['application/json'];

    type AuthenticationProvidersCreateParams =
      paths['/authentication_providers']['post']['requestBody']['content']['application/json'];

    type AuthenticationProvidersCreateResponse =
      paths['/authentication_providers']['post']['responses']['200']['content']['application/json'];

    type AuthenticationProvidersRetrieveId =
      paths['/authentication_providers/{id}']['get']['parameters']['path']['id'];

    type AuthenticationProvidersRetrieveParams =
      paths['/authentication_providers/{id}']['get']['parameters']['query'];

    type AuthenticationProvidersRetrieveResponse =
      paths['/authentication_providers/{id}']['get']['responses']['200']['content']['application/json'];
    type AuthenticationProvidersUpdateId =
      paths['/authentication_providers/{id}']['patch']['parameters']['path']['id'];

    type AuthenticationProvidersUpdateParams =
      paths['/authentication_providers/{id}']['patch']['requestBody']['content']['application/json'];

    type AuthenticationProvidersUpdateResponse =
      paths['/authentication_providers/{id}']['patch']['responses']['200']['content']['application/json'];
    type AuthenticationProvidersDelId =
      paths['/authentication_providers/{id}']['delete']['parameters']['path']['id'];

    type AuthenticationProvidersDelParams =
      paths['/authentication_providers/{id}']['delete']['parameters']['query'];

    type AuthenticationProvidersDelResponse =
      paths['/authentication_providers/{id}']['delete']['responses']['200']['content']['application/json'];

    class AuthenticationProvidersResource {
      list(
        params?: AuthenticationProvidersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AuthenticationProvidersListResponse>>;

      create(
        params: AuthenticationProvidersCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AuthenticationProvidersCreateResponse>>;

      retrieve(
        id: AuthenticationProvidersRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.AuthenticationProvidersRetrieveResponse>
      >;

      update(
        id: AuthenticationProvidersUpdateId,
        params: AuthenticationProvidersUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AuthenticationProvidersUpdateResponse>>;

      del(
        id: AuthenticationProvidersDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AuthenticationProvidersDelResponse>>;
    }
  }
}
