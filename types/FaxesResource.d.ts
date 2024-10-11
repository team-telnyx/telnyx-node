import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type FaxesDelId =
      paths['/faxes/{id}']['delete']['parameters']['path']['id'];

    type FaxesDelParams = paths['/faxes/{id}']['delete']['parameters']['query'];

    type FaxesDelResponse =
      paths['/faxes/{id}']['delete']['responses']['204']['content'];

    type FaxesCreateParams =
      paths['/faxes']['post']['requestBody']['content']['application/json'];

    type FaxesCreateResponse =
      paths['/faxes']['post']['responses']['202']['content']['application/json'];

    type FaxesRetrieveId =
      paths['/faxes/{id}']['get']['parameters']['path']['id'];

    type FaxesRetrieveParams =
      paths['/faxes/{id}']['get']['parameters']['query'];

    type FaxesRetrieveResponse =
      paths['/faxes/{id}']['get']['responses']['200']['content']['application/json'];

    type FaxesListParams = paths['/faxes']['get']['parameters']['query'];

    type FaxesListResponse =
      paths['/faxes']['get']['responses']['200']['content']['application/json'];

    type FaxesNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxesDelResponse>>;
    };

    class FaxesResource {
      list(
        params?: FaxesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxesListResponse>>;

      create(
        params: FaxesCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FaxesCreateResponse &
            NestedResponseData<FaxesCreateResponse['data'], FaxesNestedMethods>
        >
      >;

      send(
        params: FaxesCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FaxesCreateResponse &
            NestedResponseData<FaxesCreateResponse['data'], FaxesNestedMethods>
        >
      >;

      retrieve(
        id: FaxesRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FaxesRetrieveResponse &
            NestedResponseData<
              FaxesRetrieveResponse['data'],
              FaxesNestedMethods
            >
        >
      >;

      del(
        id: FaxesDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxesDelResponse>>;
    }
  }
}
