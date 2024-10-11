import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type NumberOrdersListParams =
      paths['/number_orders']['get']['parameters']['query'];

    type NumberOrdersListResponse =
      paths['/number_orders']['get']['responses']['200']['content']['application/json'];

    type NumberOrdersCreateParams =
      paths['/number_orders']['post']['requestBody']['content']['application/json'];

    type NumberOrdersCreateResponse =
      paths['/number_orders']['post']['responses']['200']['content']['application/json'];

    type NumberOrdersRetrieveId =
      paths['/number_orders/{number_order_id}']['get']['parameters']['path']['number_order_id'];

    type NumberOrdersRetrieveResponse =
      paths['/number_orders/{number_order_id}']['get']['responses']['200']['content']['application/json'];

    type NumberOrdersUpdateId =
      paths['/number_orders/{number_order_id}']['patch']['parameters']['path']['number_order_id'];

    type NumberOrdersUpdateParams =
      paths['/number_orders/{number_order_id}']['patch']['requestBody']['content']['application/json'];

    type NumberOrdersUpdateResponse =
      paths['/number_orders/{number_order_id}']['patch']['responses']['200']['content']['application/json'];

    type NumberOrdersNestedMethods = {
      update(
        params: NumberOrdersUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.NumberOrdersUpdateResponse>>;
    };

    class NumberOrdersResource {
      list(
        params?: NumberOrdersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.NumberOrdersListResponse>>;

      create(
        params: NumberOrdersCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.NumberOrdersCreateResponse &
            NestedResponseData<
              NumberOrdersCreateResponse['data'],
              NumberOrdersNestedMethods
            >
        >
      >;

      retrieve(
        id: NumberOrdersRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.NumberOrdersRetrieveResponse &
            NestedResponseData<
              NumberOrdersRetrieveResponse['data'],
              NumberOrdersNestedMethods
            >
        >
      >;

      update(
        id: NumberOrdersUpdateId,
        params: NumberOrdersUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.NumberOrdersUpdateResponse>>;
    }
  }
}
