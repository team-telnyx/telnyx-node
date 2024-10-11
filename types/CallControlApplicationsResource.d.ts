import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CallControlApplicationsListParams =
      paths['/call_control_applications']['get']['parameters']['query'];

    type CallControlApplicationsListResponse =
      paths['/call_control_applications']['get']['responses']['200']['content']['application/json'];

    type CallControlApplicationsCreateParams =
      paths['/call_control_applications']['post']['requestBody']['content']['application/json'];

    type CallControlApplicationsCreateResponse =
      paths['/call_control_applications']['post']['responses']['201']['content']['application/json'];

    type CallControlApplicationsRetrieveId =
      paths['/call_control_applications/{id}']['get']['parameters']['path']['id'];

    type CallControlApplicationsRetrieveParams =
      paths['/call_control_applications/{id}']['get']['parameters']['query'];

    type CallControlApplicationsRetrieveResponse =
      paths['/call_control_applications/{id}']['get']['responses']['200']['content']['application/json'];

    type CallControlApplicationsUpdateId =
      paths['/call_control_applications/{id}']['patch']['parameters']['path']['id'];

    type CallControlApplicationsUpdateParams =
      paths['/call_control_applications/{id}']['patch']['requestBody']['content']['application/json'];

    type CallControlApplicationsUpdateResponse =
      paths['/call_control_applications/{id}']['patch']['responses']['200']['content']['application/json'];

    type CallControlApplicationsDelId =
      paths['/call_control_applications/{id}']['delete']['parameters']['path']['id'];

    type CallControlApplicationsDelParams =
      paths['/call_control_applications/{id}']['delete']['parameters']['query'];

    type CallControlApplicationsDelResponse =
      paths['/call_control_applications/{id}']['delete']['responses']['200']['content']['application/json'];

    type CallControlApplicationsNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallControlApplicationsDelResponse>>;

      update(
        params: CallControlApplicationsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallControlApplicationsUpdateResponse>>;
    };

    class CallControlApplicationsResource {
      list(
        params?: CallControlApplicationsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallControlApplicationsListResponse>>;

      create(
        params: CallControlApplicationsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.CallControlApplicationsCreateResponse &
            NestedResponseData<
              CallControlApplicationsCreateResponse['data'],
              CallControlApplicationsNestedMethods
            >
        >
      >;

      retrieve(
        id: CallControlApplicationsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.CallControlApplicationsRetrieveResponse &
            NestedResponseData<
              CallControlApplicationsRetrieveResponse['data'],
              CallControlApplicationsNestedMethods
            >
        >
      >;

      update(
        id: CallControlApplicationsUpdateId,
        params: CallControlApplicationsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallControlApplicationsUpdateResponse>>;

      del(
        id: CallControlApplicationsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallControlApplicationsDelResponse>>;
    }
  }
}
