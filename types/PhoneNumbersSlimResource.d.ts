import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersSlimListParams =
      paths['/phone_numbers/slim']['get']['parameters']['query'];

    type PhoneNumbersSlimListResponse =
      paths['/phone_numbers/slim']['get']['responses']['200']['content']['application/json'];

    class PhoneNumbersSlimResource {
      list(
        params?: PhoneNumbersSlimListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersSlimListResponse>>;
    }
  }
}
