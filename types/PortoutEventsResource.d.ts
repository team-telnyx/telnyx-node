import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PortoutEventsListParams =
      paths['/portout/events']['get']['parameters']['query'];

    type PortoutEventsListResponse =
      paths['/portout/events']['get']['responses']['200']['content']['application/json'];

    type PortoutEventsRetrieveId =
      paths['/portout/events/{id}']['get']['parameters']['path']['id'];

    type PortoutEventsRetrieveParams =
      paths['/portout/events/{id}']['get']['parameters']['query'];

    type PortoutEventsRetrieveResponse =
      paths['/portout/events/{id}']['get']['responses']['200']['content']['application/json'];

    type PortoutEventsRepublishId =
      paths['/porting/events/{id}/republish']['post']['parameters']['path']['id'];

    type PortoutEventsRepublishResponse =
      paths['/porting/events/{id}/republish']['post']['responses']['204']['content'];

    class PortoutEventsResource {
      list(
        params?: PortoutEventsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortoutEventsListResponse>>;

      retrieve(
        id: PortoutEventsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortoutEventsRetrieveResponse>>;

      republish(
        id: PortoutEventsRepublishId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortoutEventsRepublishResponse>>;
    }
  }
}
