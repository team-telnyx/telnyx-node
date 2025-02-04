import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AddressesRetrieveId =
      paths['/addresses/{id}']['get']['parameters']['path']['id'];

    type AddressesRetrieveParams =
      paths['/addresses/{id}']['get']['parameters']['query'];

    type AddressesRetrieveResponse =
      paths['/addresses/{id}']['get']['responses']['200']['content']['application/json'];

    type AddressesCreateParams =
      paths['/addresses']['post']['requestBody']['content']['application/json'];

    type AddressesCreateResponse =
      paths['/addresses']['post']['responses']['200']['content']['application/json'];

    type AddressesValidateParams =
      paths['/addresses/actions/validate']['post']['requestBody']['content']['application/json'];

    type AddressesValidateResponse =
      paths['/addresses/actions/validate']['post']['responses']['200']['content']['application/json'];

    type AddressesListParams =
      paths['/addresses']['get']['parameters']['query'];

    type AddressesListResponse =
      paths['/addresses']['get']['responses']['200']['content']['application/json'];

    type AddressesDelId =
      paths['/addresses/{id}']['delete']['parameters']['path']['id'];

    type AddressesDelParams =
      paths['/addresses/{id}']['delete']['parameters']['query'];

    type AddressesDelResponse =
      paths['/addresses/{id}']['delete']['responses']['200']['content']['application/json'];

    type AddressesNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AddressesDelResponse>>;
    };

    class AddressesResource {
      retrieve(
        id: AddressesRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.AddressesRetrieveResponse &
            NestedResponseData<
              AddressesRetrieveResponse['data'],
              AddressesNestedMethods
            >
        >
      >;

      create(
        params: AddressesCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.AddressesCreateResponse &
            NestedResponseData<
              AddressesCreateResponse['data'],
              AddressesNestedMethods
            >
        >
      >;

      validate(
        params: AddressesValidateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AddressesValidateResponse>>;

      list(
        params?: AddressesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AddressesListResponse>>;

      del(
        id: AddressesDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AddressesDelResponse>>;
    }
  }
}
