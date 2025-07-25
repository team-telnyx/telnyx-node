import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersInboundChannelsListParams =
      paths['/inbound_channels']['get']['parameters']['query'];

    type PhoneNumbersInboundChannelsListResponse =
      paths['/inbound_channels']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersInboundChannelsUpdateParams =
      paths['/inbound_channels']['patch']['requestBody']['content']['application/json'];

    type PhoneNumbersInboundChannelsUpdateResponse =
      paths['/inbound_channels']['patch']['responses']['200']['content']['application/json'];

    class InboundChannelsResource {
      list(
        params?: PhoneNumbersInboundChannelsListParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersInboundChannelsListResponse>
      >;

      update(
        params: PhoneNumbersInboundChannelsUpdateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersInboundChannelsUpdateResponse>
      >;
    }
  }
}
