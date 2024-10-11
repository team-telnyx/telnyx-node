import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type TexmlApplicationsDelId =
      paths['/texml_applications/{id}']['delete']['parameters']['path']['id'];

    type TexmlApplicationsDelParams =
      paths['/texml_applications/{id}']['delete']['parameters']['query'];

    type TexmlApplicationsDelResponse =
      paths['/texml_applications/{id}']['delete']['responses']['200']['content']['application/json'];

    type TexmlApplicationsCreateParams =
      paths['/texml_applications']['post']['requestBody']['content']['application/json'];

    type TexmlApplicationsCreateResponse =
      paths['/texml_applications']['post']['responses']['201']['content']['application/json'];

    type TexmlApplicationsRetrieveId =
      paths['/texml_applications/{id}']['get']['parameters']['path']['id'];

    type TexmlApplicationsRetrieveParams =
      paths['/texml_applications/{id}']['get']['parameters']['query'];

    type TexmlApplicationsRetrieveResponse =
      paths['/texml_applications/{id}']['get']['responses']['200']['content']['application/json'];

    type TexmlApplicationsListParams =
      paths['/texml_applications']['get']['parameters']['query'];

    type TexmlApplicationsListResponse =
      paths['/texml_applications']['get']['responses']['200']['content']['application/json'];

    type TexmlApplicationsUpdateId =
      paths['/texml_applications/{id}']['patch']['parameters']['path']['id'];

    type TexmlApplicationsUpdateParams =
      paths['/texml_applications/{id}']['patch']['requestBody']['content']['application/json'];

    type TexmlApplicationsUpdateResponse =
      paths['/texml_applications/{id}']['patch']['responses']['200']['content']['application/json'];

    type TexmlApplicationsNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlApplicationsDelResponse>>;

      update(
        params: TexmlApplicationsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlApplicationsUpdateResponse>>;
    };

    class TexmlApplicationsResource {
      del(
        id: TexmlApplicationsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlApplicationsDelResponse>>;

      create(
        params: TexmlApplicationsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.TexmlApplicationsCreateResponse &
            NestedResponseData<
              TexmlApplicationsCreateResponse['data'],
              TexmlApplicationsNestedMethods
            >
        >
      >;

      retrieve(
        id: TexmlApplicationsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.TexmlApplicationsRetrieveResponse &
            NestedResponseData<
              TexmlApplicationsRetrieveResponse['data'],
              TexmlApplicationsNestedMethods
            >
        >
      >;
      // ): Promise<Telnyx.Response<Telnyx.TexmlApplicationsRetrieveResponse>>;

      list(
        params?: TexmlApplicationsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlApplicationsListResponse>>;

      update(
        id: TexmlApplicationsUpdateId,
        params: TexmlApplicationsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TexmlApplicationsUpdateResponse>>;
    }
  }
}
