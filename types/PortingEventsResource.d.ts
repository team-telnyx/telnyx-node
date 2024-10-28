import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PortingEventsListParams =
      paths['/porting/events']['get']['parameters']['query'];

    type PortingEventsListResponse =
      paths['/porting/events']['get']['responses']['200']['content']['application/json'];

    type PortingEventsRetrieveId =
      paths['/porting/events/{id}']['get']['parameters']['path']['id'];

    type PortingEventsRetrieveParams =
      paths['/porting/events/{id}']['get']['parameters']['query'];

    type PortingEventsRetrieveResponse =
      paths['/porting/events/{id}']['get']['responses']['200']['content']['application/json'];

    type PortingEventsRepublishId =
      paths['/porting/events/{id}/republish']['post']['parameters']['path']['id'];

    type PortingEventsRepublishResponse =
      paths['/porting/events/{id}/republish']['post']['responses']['204']['content'];

    class PortingEventsResource {
      list(
        params?: PortingEventsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingEventsListResponse>>;

      show(
        id: PortingEventsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingEventsRetrieveResponse>>;

      retrieve(
        id: PortingEventsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingEventsRetrieveResponse>>;

      republish(
        id: PortingEventsRepublishId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingEventsRepublishResponse>>;
    }
  }
}
