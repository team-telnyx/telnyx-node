import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersInboundChannelsListParams =
      paths['/phone_numbers/inbound_channels']['get']['parameters']['query'];

    type PhoneNumbersInboundChannelsListResponse =
      paths['/phone_numbers/inbound_channels']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersInboundChannelsUpdateParams =
      paths['/phone_numbers/inbound_channels']['patch']['requestBody']['content']['application/json'];

    type PhoneNumbersInboundChannelsUpdateResponse =
      paths['/phone_numbers/inbound_channels']['patch']['responses']['200']['content']['application/json'];

    class PhoneNumbersInboundChannelsResource {
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
