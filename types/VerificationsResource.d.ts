import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type VerificationsCallCreateParams =
      paths['/verifications/call']['post']['requestBody']['content']['application/json'];

    type VerificationsCallCreateResponse =
      paths['/verifications/call']['post']['responses']['200']['content']['application/json'];

    type VerificationsFlashcallCreateParams =
      paths['/verifications/flashcall']['post']['requestBody']['content']['application/json'];

    type VerificationsFlashcallCreateResponse =
      paths['/verifications/flashcall']['post']['responses']['200']['content']['application/json'];

    type VerificationsSmsCreateParams =
      paths['/verifications/sms']['post']['requestBody']['content']['application/json'];

    type VerificationsSmsCreateResponse =
      paths['/verifications/sms']['post']['responses']['200']['content']['application/json'];

    type VerificationsRetrieveId =
      paths['/verifications/{verification_id}']['get']['parameters']['path']['verification_id'];

    type VerificationsRetrieveResponse =
      paths['/verifications/{verification_id}']['get']['responses']['200']['content']['application/json'];

    type VerificationsVerifyId =
      paths['/verifications/{verification_id}/actions/verify']['post']['parameters']['path']['verification_id'];

    type VerificationsVerifyParams =
      paths['/verifications/{verification_id}/actions/verify']['post']['requestBody']['content']['application/json'];

    type VerificationsVerifyResponse =
      paths['/verifications/{verification_id}/actions/verify']['post']['responses']['200']['content']['application/json'];

    type VerificationsListByPhoneNumberPhoneNumber =
      paths['/verifications/by_phone_number/{phone_number}']['get']['parameters']['path']['phone_number'];

    type VerificationsListByPhoneNumberParams =
      | paths['/verifications/by_phone_number/{phone_number}']['get']['parameters']['query']
      | Record<string, never>;

    type VerificationsListByPhoneNumberResponse =
      paths['/verifications/by_phone_number/{phone_number}']['get']['responses']['200']['content']['application/json'];

    type VerificationsVerifyByPhoneNumberPhoneNumber =
      paths['/verifications/by_phone_number/{phone_number}/actions/verify']['post']['parameters']['path']['phone_number'];

    type VerificationsVerifyByPhoneNumberParams =
      paths['/verifications/by_phone_number/{phone_number}/actions/verify']['post']['requestBody']['content']['application/json'];

    type VerificationsVerifyByPhoneNumberResponse =
      paths['/verifications/by_phone_number/{phone_number}/actions/verify']['post']['responses']['200']['content']['application/json'];

    type VerificationsNestedMethods = {
      verify(
        params: VerificationsVerifyParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerificationsVerifyResponse>>;
    };

    class VerificationsResource {
      callVerify(
        params: VerificationsCallCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerificationsCallCreateResponse>>;

      flashcallVerify(
        params: VerificationsFlashcallCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerificationsFlashcallCreateResponse>>;

      smsVerify(
        params: VerificationsSmsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerificationsSmsCreateResponse>>;

      retrieve(
        id: VerificationsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.VerificationsRetrieveResponse &
            NestedResponseData<
              VerificationsRetrieveResponse['data'],
              VerificationsNestedMethods
            >
        >
      >;

      verify(
        id: VerificationsVerifyId,
        params: VerificationsVerifyParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerificationsVerifyResponse>>;

      listByPhoneNumber(
        phoneNumber: VerificationsListByPhoneNumberPhoneNumber,
        params: VerificationsListByPhoneNumberParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.VerificationsListByPhoneNumberResponse>
      >;

      verifyByPhoneNumber(
        phoneNumber: VerificationsVerifyByPhoneNumberPhoneNumber,
        params: VerificationsVerifyByPhoneNumberParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.VerificationsVerifyByPhoneNumberResponse>
      >;
    }
  }
}
