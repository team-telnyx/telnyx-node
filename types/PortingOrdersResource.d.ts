import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PortingOrdersListParams =
      paths['/porting_orders']['get']['parameters']['query'];

    type PortingOrdersListResponse =
      paths['/porting_orders']['get']['responses']['200']['content']['application/json'];

    type PortingOrdersCreateParams =
      paths['/porting_orders']['post']['requestBody']['content']['application/json'];

    type PortingOrdersCreateResponse =
      paths['/porting_orders']['post']['responses']['201']['content']['application/json'];

    type PortingOrdersRetrieveId =
      paths['/porting_orders/{id}']['get']['parameters']['path']['id'];

    type PortingOrdersRetrieveParams =
      paths['/porting_orders/{id}']['get']['parameters']['query'];

    type PortingOrdersRetrieveResponse =
      paths['/porting_orders/{id}']['get']['responses']['200']['content']['application/json'];

    type PortingOrdersDelId =
      paths['/porting_orders/{id}']['delete']['parameters']['path']['id'];

    type PortingOrdersDelParams =
      paths['/porting_orders/{id}']['delete']['parameters']['query'];

    type PortingOrdersDelResponse =
      paths['/porting_orders/{id}']['delete']['responses']['204']['content'];

    type PortingOrdersUpdateId =
      paths['/porting_orders/{id}']['patch']['parameters']['path']['id'];

    type PortingOrdersUpdateParams =
      paths['/porting_orders/{id}']['patch']['requestBody']['content']['application/json'];

    type PortingOrdersUpdateResponse =
      paths['/porting_orders/{id}']['patch']['responses']['200']['content']['application/json'];

    class PortingOrdersResource {
      list(
        params?: PortingOrdersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingOrdersListResponse>>;

      create(
        params: PortingOrdersCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingOrdersCreateResponse>>;

      retrieve(
        id: PortingOrdersRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingOrdersRetrieveResponse>>;

      del(
        id: PortingOrdersDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingOrdersDelResponse>>;

      update(
        id: PortingOrdersUpdateId,
        params: PortingOrdersUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingOrdersUpdateResponse>>;
    }
  }
}
