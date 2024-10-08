import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type FqdnsDelId =
      paths['/fqdns/{id}']['delete']['parameters']['path']['id'];

    type FqdnsDelParams = paths['/fqdns/{id}']['delete']['parameters']['query'];

    type FqdnsDelResponse =
      paths['/fqdns/{id}']['delete']['responses']['200']['content']['application/json'];

    type FqdnsCreateParams =
      | NonNullable<
          paths['/fqdns']['post']['requestBody']
        >['content']['application/json']
      | object;

    type FqdnsCreateResponse =
      paths['/fqdns']['post']['responses']['201']['content']['application/json'];

    type FqdnsRetrieveId =
      paths['/fqdns/{id}']['get']['parameters']['path']['id'];

    type FqdnsRetrieveParams =
      paths['/fqdns/{id}']['get']['parameters']['query'];

    type FqdnsRetrieveResponse =
      paths['/fqdns/{id}']['get']['responses']['200']['content']['application/json'];

    type FqdnsListParams = paths['/fqdns']['get']['parameters']['query'];

    type FqdnsListResponse =
      paths['/fqdns']['get']['responses']['200']['content']['application/json'];

    type FqdnsUpdateId =
      paths['/fqdns/{id}']['patch']['parameters']['path']['id'];

    type FqdnsUpdateParams =
      | NonNullable<
          paths['/fqdns/{id}']['patch']['requestBody']
        >['content']['application/json']
      | object;

    type FqdnsUpdateResponse =
      paths['/fqdns/{id}']['patch']['responses']['200']['content']['application/json'];

    type FqdnsNestedMethods = {
      create: FqdnsResource['create'];
      del: FqdnsResource['del'];
    };

    class FqdnsResource {
      del(
        id: FqdnsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FqdnsDelResponse>>;

      create(
        params: FqdnsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FqdnsCreateResponse &
            NestedResponseData<FqdnsCreateResponse['data'], FqdnsNestedMethods>
        >
      >;

      retrieve(
        id: FqdnsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FqdnsRetrieveResponse &
            NestedResponseData<
              FqdnsRetrieveResponse['data'],
              FqdnsNestedMethods
            >
        >
      >;

      list(
        params?: FqdnsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FqdnsListResponse>>;

      update(
        id: FqdnsUpdateId,
        params: FqdnsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FqdnsUpdateResponse>>;
    }
  }
}
