import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type VerifiedNumbersListParams =
      paths['/verified_numbers']['get']['parameters']['query'];

    type VerifiedNumbersListResponse =
      paths['/verified_numbers']['get']['responses']['200']['content']['application/json'];

    type VerifiedNumbersCreateParams =
      paths['/verified_numbers']['post']['requestBody']['content']['application/json'];

    type VerifiedNumbersCreateResponse =
      paths['/verified_numbers']['post']['responses']['200']['content']['application/json'];

    type VerifiedNumbersRetrievePhoneNumber =
      paths['/verified_numbers/{phone_number}']['get']['parameters']['path']['phone_number'];

    type VerifiedNumbersRetrieveParams =
      paths['/verified_numbers/{phone_number}']['get']['parameters']['query'];

    type VerifiedNumbersRetrieveResponse =
      paths['/verified_numbers/{phone_number}']['get']['responses']['200']['content']['application/json'];

    type VerifiedNumbersDelPhoneNumber =
      paths['/verified_numbers/{phone_number}']['delete']['parameters']['path']['phone_number'];

    type VerifiedNumbersDelParams =
      paths['/verified_numbers/{phone_number}']['delete']['parameters']['query'];

    type VerifiedNumbersDelResponse =
      paths['/verified_numbers/{phone_number}']['delete']['responses']['200']['content']['application/json'];

    type VerifiedNumbersVerifyPhoneNumber =
      paths['/verified_numbers/{phone_number}/actions/verify']['post']['parameters']['path']['phone_number'];

    type VerifiedNumbersVerifyParams =
      paths['/verified_numbers/{phone_number}/actions/verify']['post']['requestBody']['content']['application/json'];

    type VerifiedNumbersVerifyResponse =
      paths['/verified_numbers/{phone_number}/actions/verify']['post']['responses']['200']['content']['application/json'];

    type VerifiedNumbersNestedMethods = {
      verify(
        params: VerifiedNumbersVerifyParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifiedNumbersVerifyResponse>>;
    };

    class VerifiedNumbersResource {
      list(
        params?: VerifiedNumbersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifiedNumbersListResponse>>;

      create(
        params: VerifiedNumbersCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.VerifiedNumbersCreateResponse &
            NestedResponseData<
              VerifiedNumbersCreateResponse,
              VerifiedNumbersNestedMethods
            >
        >
      >;

      request(
        params: VerifiedNumbersCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.VerifiedNumbersCreateResponse &
            NestedResponseData<
              VerifiedNumbersCreateResponse,
              VerifiedNumbersNestedMethods
            >
        >
      >;

      verify(
        phoneNumber: VerifiedNumbersVerifyPhoneNumber,
        params: VerifiedNumbersVerifyParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifiedNumbersVerifyResponse>>;

      retrieve(
        phoneNumber: VerifiedNumbersRetrievePhoneNumber,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.VerifiedNumbersRetrieveResponse &
            NestedResponseData<
              VerifiedNumbersRetrieveResponse['data'],
              VerifiedNumbersNestedMethods
            >
        >
      >;

      del(
        phoneNumber: VerifiedNumbersDelPhoneNumber,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifiedNumbersDelResponse>>;
    }
  }
}
