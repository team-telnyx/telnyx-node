import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersVoiceListParams =
      paths['/phone_numbers/voice']['get']['parameters']['query'];

    type PhoneNumbersVoiceListResponse =
      paths['/phone_numbers/voice']['get']['responses']['200']['content']['application/json'];

    class PhoneNumbersVoiceResource {
      list(
        params?: PhoneNumbersVoiceListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersVoiceListResponse>>;
    }
  }
}
