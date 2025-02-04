import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type DialogflowConnectionsDelId =
      paths['/dialogflow_connections/{connection_id}']['delete']['parameters']['path']['connection_id'];

    type DialogflowConnectionsDelParams =
      paths['/dialogflow_connections/{connection_id}']['delete']['parameters']['query'];

    type DialogflowConnectionsDelResponse =
      paths['/dialogflow_connections/{connection_id}']['delete']['responses']['204']['content'];

    type DialogflowConnectionsCreateParams =
      paths['/dialogflow_connections/{connection_id}']['post']['requestBody']['content']['application/json'];

    type DialogflowConnectionsCreateResponse =
      paths['/dialogflow_connections/{connection_id}']['post']['responses']['201']['content']['application/json'];

    type DialogflowConnectionsRetrieveId =
      paths['/dialogflow_connections/{connection_id}']['get']['parameters']['path']['connection_id'];

    type DialogflowConnectionsRetrieveParams =
      paths['/dialogflow_connections/{connection_id}']['get']['parameters']['query'];

    type DialogflowConnectionsRetrieveResponse =
      paths['/dialogflow_connections/{connection_id}']['get']['responses']['200']['content']['application/json'];

    type DialogflowConnectionsUpdateId =
      paths['/dialogflow_connections/{connection_id}']['put']['parameters']['path']['connection_id'];

    type DialogflowConnectionsUpdateParams =
      paths['/dialogflow_connections/{connection_id}']['put']['requestBody']['content']['application/json'];

    type DialogflowConnectionsUpdateResponse =
      paths['/dialogflow_connections/{connection_id}']['put']['responses']['200']['content']['application/json'];

    class DialogflowConnectionsResource {
      del(
        id: DialogflowConnectionsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DialogflowConnectionsDelResponse>>;

      create(
        params: DialogflowConnectionsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DialogflowConnectionsCreateResponse>>;

      retrieve(
        id: DialogflowConnectionsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DialogflowConnectionsRetrieveResponse>>;

      update(
        id: DialogflowConnectionsUpdateId,
        params: DialogflowConnectionsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DialogflowConnectionsUpdateResponse>>;
    }
  }
}
