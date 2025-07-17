import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type MessagingProfilesRetrieveId =
      paths['/messaging_profiles/{id}']['get']['parameters']['path']['id'];

    type MessagingProfilesRetrieveParams =
      paths['/messaging_profiles/{id}']['get']['parameters']['query'];

    type MessagingProfilesDelId =
      paths['/messaging_profiles/{id}']['delete']['parameters']['path']['id'];

    type MessagingProfilesDelParams =
      paths['/messaging_profiles/{id}']['delete']['parameters']['query'];

    type MessagingProfilesUpdateId =
      paths['/messaging_profiles/{id}']['patch']['parameters']['path']['id'];

    type MessagingProfilesUpdateParams =
      paths['/messaging_profiles/{id}']['patch']['requestBody']['content']['application/json'];

    type MessagingProfilesRetrieveResponse =
      paths['/messaging_profiles/{id}']['get']['responses']['200']['content']['application/json'];

    type MessagingProfilesDelResponse =
      paths['/messaging_profiles/{id}']['delete']['responses']['200']['content']['application/json'];

    type MessagingProfilesUpdateResponse =
      paths['/messaging_profiles/{id}']['patch']['responses']['200']['content']['application/json'];

    type MessagingProfilesListParams =
      paths['/messaging_profiles']['get']['parameters']['query'];

    type MessagingProfilesListResponse =
      paths['/messaging_profiles']['get']['responses']['200']['content']['application/json'];

    type MessagingProfilesCreateParams =
      paths['/messaging_profiles']['post']['requestBody']['content']['application/json'];

    type MessagingProfilesCreateResponse =
      paths['/messaging_profiles']['post']['responses']['200']['content']['application/json'];

    type MessagingProfilesListPhoneNumbersId =
      paths['/messaging_profiles/{id}/phone_numbers']['get']['parameters']['path']['id'];

    type MessagingProfilesListPhoneNumbersParams =
      paths['/messaging_profiles/{id}/phone_numbers']['get']['parameters']['query'];

    type MessagingProfilesListPhoneNumbersResponse =
      paths['/messaging_profiles/{id}/phone_numbers']['get']['responses']['200']['content']['application/json'];

    type MessagingProfilesListShortCodesId =
      paths['/messaging_profiles/{id}/short_codes']['get']['parameters']['path']['id'];

    type MessagingProfilesListShortCodesParams =
      paths['/messaging_profiles/{id}/short_codes']['get']['parameters']['query'];

    type MessagingProfilesListShortCodesResponse =
      paths['/messaging_profiles/{id}/short_codes']['get']['responses']['200']['content']['application/json'];

    type MessagingProfilesListAutorespConfigsId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['get']['parameters']['path']['profile_id'];

    type MessagingProfilesListAutorespConfigsParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['get']['parameters']['query'];

    type MessagingProfilesListAutorespConfigsResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['get']['responses']['200']['content']['application/json'];

    type MessagingProfilesRetrieveAutorespConfigId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['get']['parameters']['path']['profile_id'];

    type MessagingProfilesRetrieveAutorespConfigAutorespConfigId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['get']['parameters']['path']['autoresp_cfg_id'];

    type MessagingProfilesRetrieveAutorespConfigResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['get']['responses']['200']['content']['application/json'];

    type MessagingProfilesCreateAutorespConfigsId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['post']['parameters']['path']['profile_id'];

    type MessagingProfilesCreateAutorespConfigsParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['post']['requestBody']['content']['application/json'];

    type MessagingProfilesCreateAutorespConfigsResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['post']['responses']['200']['content']['application/json'];

    type MessagingProfilesDelAutorespConfigId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['delete']['parameters']['path']['profile_id'];

    type MessagingProfilesDelAutorespConfigAutorespConfigId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['delete']['parameters']['path']['autoresp_cfg_id'];

    type MessagingProfilesDelAutorespConfigResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['delete']['responses']['200']['content']['application/json'];

    type MessagingProfilesUpdateAutorespConfigId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['put']['parameters']['path']['profile_id'];

    type MessagingProfilesUpdateAutorespConfigAutorespConfigId =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['put']['parameters']['path']['autoresp_cfg_id'];

    type MessagingProfilesUpdateAutorespConfigParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['put']['requestBody']['content']['application/json'];

    type MessagingProfilesUpdateAutorespConfigResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['put']['responses']['200']['content']['application/json'];

    type MessagingProfilesNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesDelResponse>>;

      phoneNumbers(
        params: MessagingProfilesListPhoneNumbersParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListPhoneNumbersResponse>
      >;

      shortCodes(
        params: MessagingProfilesListShortCodesParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListShortCodesResponse>
      >;

      autorespConfigs(
        params: MessagingProfilesListAutorespConfigsParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListAutorespConfigsResponse>
      >;
    };

    class MessagingProfilesResource {
      create(
        params: MessagingProfilesCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.MessagingProfilesCreateResponse &
            NestedResponseData<
              MessagingProfilesCreateResponse['data'],
              MessagingProfilesNestedMethods
            >
        >
      >;

      del(
        id: MessagingProfilesDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesDelResponse>>;

      update(
        id: MessagingProfilesUpdateId,
        params: MessagingProfilesUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesUpdateResponse>>;

      retrieve(
        id: MessagingProfilesRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.MessagingProfilesRetrieveResponse &
            NestedResponseData<
              MessagingProfilesRetrieveResponse['data'],
              MessagingProfilesNestedMethods
            >
        >
      >;

      list(
        params: MessagingProfilesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesListResponse>>;

      listPhoneNumbers(
        id: MessagingProfilesListPhoneNumbersId,
        params: MessagingProfilesListPhoneNumbersParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListPhoneNumbersResponse>
      >;

      listShortCodes(
        id: MessagingProfilesListShortCodesId,
        params: MessagingProfilesListShortCodesParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListShortCodesResponse>
      >;

      listAutorespConfigs(
        id: MessagingProfilesListAutorespConfigsId,
        params: MessagingProfilesListAutorespConfigsParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListAutorespConfigsResponse>
      >;

      createAutorespConfig(
        id: MessagingProfilesCreateAutorespConfigsId,
        params: MessagingProfilesCreateAutorespConfigsParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesCreateAutorespConfigsResponse>
      >;

      delAutorespConfig(
        id: MessagingProfilesDelAutorespConfigId,
        autorespConfigId: MessagingProfilesDelAutorespConfigAutorespConfigId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesDelAutorespConfigResponse>
      >;

      retrieveAutorespConfig(
        id: MessagingProfilesRetrieveAutorespConfigId,
        autorespConfigId: MessagingProfilesRetrieveAutorespConfigAutorespConfigId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesRetrieveAutorespConfigResponse>
      >;

      updateAutorespConfig(
        id: MessagingProfilesUpdateAutorespConfigId,
        autorespConfigId: MessagingProfilesUpdateAutorespConfigAutorespConfigId,
        params: MessagingProfilesUpdateAutorespConfigParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesUpdateAutorespConfigResponse>
      >;
    }
  }
}
