import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CallRecordingsListParams =
      paths['/recordings']['get']['parameters']['query'];

    type CallRecordingsListResponse =
      paths['/recordings']['get']['responses']['200']['content']['application/json'];

    type CallRecordingsRetrieveId =
      paths['/recordings/{recording_id}']['get']['parameters']['path']['recording_id'];

    type CallRecordingsRetrieveParams =
      paths['/recordings/{recording_id}']['get']['parameters']['query'];

    type CallRecordingsRetrieveResponse =
      paths['/recordings/{recording_id}']['get']['responses']['200']['content']['application/json'];

    type CallRecordingsDelId =
      paths['/recordings/{recording_id}']['delete']['parameters']['path']['recording_id'];

    type CallRecordingsDelResponse =
      paths['/recordings/{recording_id}']['delete']['responses']['200']['content']['application/json'];

    type CallRecordingsBulkDelParams =
      paths['/recordings/actions/delete']['delete']['requestBody']['content']['application/json'];

    type CallRecordingsBulkDelResponse =
      paths['/recordings/actions/delete']['delete']['responses']['204']['content'];

    class CallRecordingsResource {
      list(
        params?: CallRecordingsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallRecordingsListResponse>>;

      retrieve(
        id: CallRecordingsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallRecordingsRetrieveResponse>>;

      del(
        id: CallRecordingsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallRecordingsDelResponse>>;

      del(
        id: CallRecordingsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallRecordingsDelResponse>>;

      bulkDel(
        params?: CallRecordingsBulkDelParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CallRecordingsDelResponse>>;
    }
  }
}
