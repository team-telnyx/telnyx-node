import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type FaxApplicationsListParams =
      paths['/fax_applications']['get']['parameters']['query'];

    type FaxApplicationsListResponse =
      paths['/fax_applications']['get']['responses']['200']['content']['application/json'];

    type FaxApplicationsCreateParams =
      paths['/fax_applications']['post']['requestBody']['content']['application/json'];

    type FaxApplicationsCreateResponse =
      paths['/fax_applications']['post']['responses']['201']['content']['application/json'];

    type FaxApplicationsRetrieveId =
      paths['/fax_applications/{id}']['get']['parameters']['path']['id'];

    type FaxApplicationsRetrieveParams =
      paths['/fax_applications/{id}']['get']['parameters']['query'];

    type FaxApplicationsRetrieveResponse =
      paths['/fax_applications/{id}']['get']['responses']['200']['content']['application/json'];

    type FaxApplicationsDelId =
      paths['/fax_applications/{id}']['delete']['parameters']['path']['id'];

    type FaxApplicationsDelParams =
      paths['/fax_applications/{id}']['delete']['parameters']['query'];

    type FaxApplicationsDelResponse =
      paths['/fax_applications/{id}']['delete']['responses']['200']['content']['application/json'];

    type FaxApplicationsUpdateId =
      paths['/fax_applications/{id}']['patch']['parameters']['path']['id'];

    type FaxApplicationsUpdateParams =
      paths['/fax_applications/{id}']['patch']['requestBody']['content']['application/json'];

    type FaxApplicationsUpdateResponse =
      paths['/fax_applications/{id}']['patch']['responses']['200']['content']['application/json'];

    type FaxApplicationsNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxApplicationsDelResponse>>;

      update(
        params: FaxApplicationsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxApplicationsUpdateResponse>>;
    };

    class FaxApplicationsResource {
      list(
        params?: FaxApplicationsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxApplicationsListResponse>>;

      create(
        params: FaxApplicationsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FaxApplicationsCreateResponse &
            NestedResponseData<
              FaxApplicationsCreateResponse['data'],
              FaxApplicationsNestedMethods
            >
        >
      >;

      retrieve(
        id: FaxApplicationsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.FaxApplicationsRetrieveResponse &
            NestedResponseData<
              FaxApplicationsRetrieveResponse['data'],
              FaxApplicationsNestedMethods
            >
        >
      >;

      del(
        id: FaxApplicationsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxApplicationsDelResponse>>;

      update(
        id: FaxApplicationsUpdateId,
        params: FaxApplicationsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.FaxApplicationsUpdateResponse>>;
    }
  }
}
