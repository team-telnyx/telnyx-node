import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersListParams =
      paths['/phone_numbers']['get']['parameters']['query'];

    type PhoneNumbersListResponse =
      paths['/phone_numbers']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersRetrieveId =
      paths['/phone_numbers/{id}']['get']['parameters']['path']['id'];

    type PhoneNumbersRetrieveResponse =
      paths['/phone_numbers/{id}']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersDelId =
      paths['/phone_numbers/{id}']['delete']['parameters']['path']['id'];

    type PhoneNumbersDelParams =
      paths['/phone_numbers/{id}']['delete']['parameters']['query'];

    type PhoneNumbersDelResponse =
      paths['/phone_numbers/{id}']['delete']['responses']['200']['content']['application/json'];

    type PhoneNumbersUpdateId =
      paths['/phone_numbers/{id}']['patch']['parameters']['path']['id'];

    type PhoneNumbersUpdateParams =
      paths['/phone_numbers/{id}']['patch']['requestBody']['content']['application/json'];

    type PhoneNumbersUpdateResponse =
      paths['/phone_numbers/{id}']['patch']['responses']['200']['content']['application/json'];

    type PhoneNumbersRetrieveVoiceSettingsId =
      paths['/phone_numbers/{id}/voice']['get']['parameters']['path']['id'];

    type PhoneNumbersRetrieveVoiceSettingsResponse =
      paths['/phone_numbers/{id}/voice']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersRetrieveMessagingSettingsId =
      paths['/phone_numbers/{id}/messaging']['get']['parameters']['path']['id'];

    type PhoneNumbersRetrieveMessagingSettingsResponse =
      paths['/phone_numbers/{id}/messaging']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersRetrieveVoicemailId =
      paths['/phone_numbers/{phone_number_id}/voicemail']['get']['parameters']['path']['phone_number_id'];

    type PhoneNumbersRetrieveVoicemailResponse =
      paths['/phone_numbers/{phone_number_id}/voicemail']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersVoiceSettingsUpdateId =
      paths['/phone_numbers/{id}/voice']['patch']['parameters']['path']['id'];

    type PhoneNumbersVoiceSettingsUpdateParams =
      paths['/phone_numbers/{id}/voice']['patch']['requestBody']['content']['application/json'];

    type PhoneNumbersVoiceSettingsUpdateResponse =
      paths['/phone_numbers/{id}/voice']['patch']['responses']['200']['content']['application/json'];

    type PhoneNumbersMessagingSettingsUpdateId =
      paths['/phone_numbers/{id}/messaging']['patch']['parameters']['path']['id'];

    type PhoneNumbersMessagingSettingsUpdateParams =
      paths['/phone_numbers/{id}/messaging']['patch']['requestBody']['content']['application/json'];

    type PhoneNumbersMessagingSettingsUpdateResponse =
      paths['/phone_numbers/{id}/messaging']['patch']['responses']['200']['content']['application/json'];

    type PhoneNumbersVoicemailUpdateId =
      paths['/phone_numbers/{phone_number_id}/voicemail']['patch']['parameters']['path']['phone_number_id'];

    type PhoneNumbersVoicemailUpdateParams =
      paths['/phone_numbers/{phone_number_id}/voicemail']['patch']['requestBody']['content']['application/json'];

    type PhoneNumbersVoicemailUpdateResponse =
      paths['/phone_numbers/{phone_number_id}/voicemail']['patch']['responses']['200']['content']['application/json'];

    type PhoneNumbersMessagingSettingsEnableId =
      paths['/phone_numbers/{id}/actions/enable_emergency']['post']['parameters']['path']['id'];

    type PhoneNumbersMessagingSettingsEnableParams =
      paths['/phone_numbers/{id}/actions/enable_emergency']['post']['requestBody']['content']['application/json'];

    type PhoneNumbersMessagingSettingsEnableResponse =
      paths['/phone_numbers/{id}/actions/enable_emergency']['post']['responses']['200']['content']['application/json'];

    type PhoneNumbersVoicemailCreateId =
      paths['/phone_numbers/{phone_number_id}/voicemail']['post']['parameters']['path']['phone_number_id'];

    type PhoneNumbersVoicemailCreateParams =
      paths['/phone_numbers/{phone_number_id}/voicemail']['post']['requestBody']['content']['application/json'];

    type PhoneNumbersVoicemailCreateResponse =
      paths['/phone_numbers/{phone_number_id}/voicemail']['post']['responses']['200']['content']['application/json'];

    type PhoneNumbersNestedMethods = {
      del(
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersDelResponse>>;

      update(
        params: PhoneNumbersUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersUpdateResponse>>;
    };

    class PhoneNumbersResource {
      list(
        params?: PhoneNumbersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersListResponse>>;

      retrieve(
        id: PhoneNumbersRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<
          Telnyx.PhoneNumbersRetrieveResponse &
            NestedResponseData<
              PhoneNumbersRetrieveResponse['data'],
              PhoneNumbersNestedMethods
            >
        >
      >;

      del(
        id: PhoneNumbersDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersDelResponse>>;

      update(
        id: PhoneNumbersUpdateId,
        params: PhoneNumbersUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersUpdateResponse>>;

      retrieveVoiceSettings(
        id: PhoneNumbersRetrieveVoiceSettingsId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersRetrieveVoiceSettingsResponse>
      >;

      retrieveMessagingSettings(
        id: PhoneNumbersRetrieveMessagingSettingsId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersRetrieveMessagingSettingsResponse>
      >;

      retrieveVoicemail(
        id: PhoneNumbersRetrieveVoicemailId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersRetrieveVoicemailResponse>>;

      updateVoiceSettings(
        id: PhoneNumbersVoiceSettingsUpdateId,
        params: PhoneNumbersVoiceSettingsUpdateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersVoiceSettingsUpdateResponse>
      >;

      updateMessagingSettings(
        id: PhoneNumbersMessagingSettingsUpdateId,
        params: PhoneNumbersMessagingSettingsUpdateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersMessagingSettingsUpdateResponse>
      >;

      updateVoicemail(
        id: PhoneNumbersVoicemailUpdateId,
        params: PhoneNumbersVoicemailUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersVoicemailUpdateResponse>>;

      enableEmergencySettings(
        id: PhoneNumbersMessagingSettingsEnableId,
        params: PhoneNumbersMessagingSettingsEnableParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersMessagingSettingsEnableResponse>
      >;

      createVoicemail(
        id: PhoneNumbersVoicemailCreateId,
        params: PhoneNumbersVoicemailCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersVoicemailCreateResponse>>;
    }
  }
}
