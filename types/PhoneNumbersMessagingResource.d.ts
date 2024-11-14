import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersMessagingListParams =
      paths['/phone_numbers/messaging']['get']['parameters']['query'];

    type PhoneNumbersMessagingListResponse =
      paths['/phone_numbers/messaging']['get']['responses']['200']['content']['application/json'];

    class PhoneNumbersMessagingResource {
      list(
        params?: PhoneNumbersMessagingListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersMessagingListResponse>>;
    }
  }
}
