import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type TelephonyCredentialsListParams =
      paths['/telephony_credentials']['get']['parameters']['query'];

    type TelephonyCredentialsListResponse =
      paths['/telephony_credentials']['get']['responses']['200']['content']['application/json'];

    type TelephonyCredentialsCreateParams =
      paths['/telephony_credentials']['post']['requestBody']['content']['application/json'];

    type TelephonyCredentialsCreateResponse =
      paths['/telephony_credentials']['post']['responses']['201']['content']['application/json'];

    type TelephonyCredentialsRetrieveId =
      paths['/telephony_credentials/{id}']['get']['parameters']['path']['id'];

    type TelephonyCredentialsRetrieveParams =
      paths['/telephony_credentials/{id}']['get']['parameters']['query'];

    type TelephonyCredentialsRetrieveResponse =
      paths['/telephony_credentials/{id}']['get']['responses']['200']['content']['application/json'];

    type TelephonyCredentialsUpdateId =
      paths['/telephony_credentials/{id}']['patch']['parameters']['path']['id'];

    type TelephonyCredentialsUpdateParams =
      paths['/telephony_credentials/{id}']['patch']['requestBody']['content']['application/json'];

    type TelephonyCredentialsUpdateResponse =
      paths['/telephony_credentials/{id}']['patch']['responses']['200']['content']['application/json'];

    type TelephonyCredentialsDelId =
      paths['/telephony_credentials/{id}']['delete']['parameters']['path']['id'];

    type TelephonyCredentialsDelParams =
      paths['/telephony_credentials/{id}']['delete']['parameters']['query'];

    type TelephonyCredentialsDelResponse =
      paths['/telephony_credentials/{id}']['delete']['responses']['200']['content']['application/json'];

    type TelephonyCredentialsCreateTokenId =
      paths['/telephony_credentials/{id}/token']['post']['parameters']['path']['id'];

    type TelephonyCredentialsCreateTokenParams =
      paths['/telephony_credentials/{id}/token']['post']['requestBody'];

    type TelephonyCredentialsCreateTokenResponse =
      paths['/telephony_credentials/{id}/token']['post']['responses']['201']['content']['text/plain'];

    class TelephonyCredentialsResource {
      list(
        params?: TelephonyCredentialsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TelephonyCredentialsListResponse>>;

      create(
        params: TelephonyCredentialsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TelephonyCredentialsCreateResponse>>;

      retrieve(
        id: TelephonyCredentialsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TelephonyCredentialsRetrieveResponse>>;

      update(
        id: TelephonyCredentialsUpdateId,
        params: TelephonyCredentialsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TelephonyCredentialsUpdateResponse>>;

      del(
        id: TelephonyCredentialsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.TelephonyCredentialsDelResponse>>;

      createToken(
        id: TelephonyCredentialsCreateTokenId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.TelephonyCredentialsCreateTokenResponse>
      >;
    }
  }
}
