import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersRegulatoryRequirementsListParams =
      paths['/phone_numbers_regulatory_requirements']['get']['parameters']['query'];

    type PhoneNumbersRegulatoryRequirementsListResponse =
      paths['/phone_numbers_regulatory_requirements']['get']['responses']['200']['content']['application/json'];

    class PhoneNumbersRegulatoryRequirementsResource {
      list(
        params?: PhoneNumbersRegulatoryRequirementsListParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersRegulatoryRequirementsListResponse>
      >;
    }
  }
}
