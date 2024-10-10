import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AvailablePhoneNumbersListParams =
      paths['/available_phone_numbers']['get']['parameters']['query'];

    type AvailablePhoneNumbersListResponse =
      paths['/available_phone_numbers']['get']['responses']['200']['content']['application/json'];

    class AvailablePhoneNumbersResource {
      list(
        params?: AvailablePhoneNumbersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AvailablePhoneNumbersListResponse>>;
    }
  }
}
