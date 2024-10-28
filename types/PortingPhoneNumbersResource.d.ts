import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PortingPhoneNumbersListParams =
      paths['/porting_phone_numbers']['get']['parameters']['query'];

    type PortingPhoneNumbersListResponse =
      paths['/porting_phone_numbers']['get']['responses']['200']['content']['application/json'];

    class PortingPhoneNumbersResource {
      list(
        params?: PortingPhoneNumbersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingPhoneNumbersListResponse>>;
    }
  }
}
