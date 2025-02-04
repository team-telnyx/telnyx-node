import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AvailablePhoneNumbersBlocksListParams =
      paths['/available_phone_number_blocks']['get']['parameters']['query'];

    type AvailablePhoneNumbersBlocksListResponse =
      paths['/available_phone_number_blocks']['get']['responses']['200']['content']['application/json'];

    class AvailablePhoneNumbersBlocksResource {
      list(
        params?: AvailablePhoneNumbersBlocksListParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.AvailablePhoneNumbersBlocksListResponse>
      >;
    }
  }
}
