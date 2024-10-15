import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumberAssignmentByProfileRetrieveId =
      paths['/phoneNumberAssignmentByProfile/{taskId}']['get']['parameters']['path']['taskId'];

    type PhoneNumberAssignmentByProfileRetrieveParams =
      paths['/phoneNumberAssignmentByProfile/{taskId}']['get']['parameters']['query'];

    type PhoneNumberAssignmentByProfileRetrieveResponse =
      paths['/phoneNumberAssignmentByProfile/{taskId}']['get']['responses']['200']['content']['application/json'];

    type PhoneNumberAssignmentByProfileCreateParams =
      paths['/phoneNumberAssignmentByProfile']['post']['requestBody']['content']['application/json'];

    type PhoneNumberAssignmentByProfileCreateResponse =
      paths['/phoneNumberAssignmentByProfile']['post']['responses']['202']['content']['application/json'];

    type PhoneNumberAssignmentByProfileListPhoneNumbersId =
      paths['/phoneNumberAssignmentByProfile/{taskId}/phoneNumbers']['get']['parameters']['path']['taskId'];

    type PhoneNumberAssignmentByProfileListPhoneNumbersParams =
      paths['/phoneNumberAssignmentByProfile/{taskId}/phoneNumbers']['get']['parameters']['query'];

    type PhoneNumberAssignmentByProfileListPhoneNumbersResponse =
      paths['/phoneNumberAssignmentByProfile/{taskId}/phoneNumbers']['get']['responses']['200']['content']['application/json'];

    class PhoneNumberAssignmentByProfileResource {
      retrieve(
        id: PhoneNumberAssignmentByProfileRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumberAssignmentByProfileRetrieveResponse>
      >;

      phoneNumbers(
        id: PhoneNumberAssignmentByProfileListPhoneNumbersId,
        params: PhoneNumberAssignmentByProfileListPhoneNumbersParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumberAssignmentByProfileListPhoneNumbersResponse>
      >;

      create(
        params: PhoneNumberAssignmentByProfileCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumberAssignmentByProfileCreateResponse>
      >;
    }
  }
}
