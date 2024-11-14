import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type ConnectionsListParams =
      paths['/connections']['get']['parameters']['query'];

    type ConnectionsListResponse =
      paths['/connections']['get']['responses']['200']['content']['application/json'];

    type ConnectionsRetrieveId =
      paths['/connections/{id}']['get']['parameters']['path']['id'];

    type ConnectionsRetrieveResponse =
      paths['/connections/{id}']['get']['responses']['200']['content']['application/json'];

    type ConnectionsListActiveCallsId =
      paths['/connections/{connection_id}/active_calls']['get']['parameters']['path']['connection_id'];

    type ConnectionsListActiveCallsParams =
      paths['/connections/{connection_id}/active_calls']['get']['parameters']['query'];

    type ConnectionsListActiveCallsResponse =
      paths['/connections/{connection_id}/active_calls']['get']['responses']['200']['content']['application/json'];

    class ConnectionsResource {
      list(
        params?: ConnectionsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConnectionsListResponse>>;

      retrieve(
        id: ConnectionsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConnectionsRetrieveResponse>>;

      listActiveCalls(
        id: ConnectionsListActiveCallsId,
        params?: ConnectionsListActiveCallsParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ConnectionsListActiveCallsResponse>>;
    }
  }
}
