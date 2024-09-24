import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type MessagingProfilesRetrieveId =
      paths['/messaging_profiles/{id}']['get']['parameters']['path']['id'];

    type MessagingProfilesRetrieveParams =
      paths['/messaging_profiles/{id}']['get']['parameters']['query'];

    type MessagingProfilesDeleteId =
      paths['/messaging_profiles/{id}']['delete']['parameters']['path']['id'];

    type MessagingProfilesDeleteParams =
      paths['/messaging_profiles/{id}']['delete']['parameters']['query'];

    type MessagingProfilesRetrieveResponse =
      paths['/messaging_profiles/{id}']['get']['responses']['200']['content']['application/json']['data'];

    type MessagingProfilesDeleteResponse =
      paths['/messaging_profiles/{id}']['delete']['responses']['200']['content']['application/json']['data'];

    type MessagingProfilesListParams =
      paths['/messaging_profiles']['get']['parameters']['query'];

    type MessagingProfilesListResponse =
      paths['/messaging_profiles']['get']['responses']['200']['content']['application/json']['data'];

    type MessagingProfilesCreateParams =
      paths['/messaging_profiles']['post']['requestBody']['content']['application/json'];

    type MessagingProfilesCreateResponse =
      paths['/messaging_profiles']['post']['responses']['200']['content']['application/json']['data'];

    type MessagingProfilesListPhoneNumbersParams =
      paths['/messaging_profiles/{id}/phone_numbers']['get']['parameters']['query'];

    type MessagingProfilesListPhoneNumbersResponse =
      paths['/messaging_profiles/{id}/phone_numbers']['get']['responses']['200']['content']['application/json']['data'];

    type MessagingProfilesListShortCodesParams =
      paths['/messaging_profiles/{id}/short_codes']['get']['parameters']['query'];

    type MessagingProfilesListShortCodesResponse =
      paths['/messaging_profiles/{id}/short_codes']['get']['responses']['200']['content']['application/json']['data'];

    type MessagingProfilesRetrieveMetricsId =
      paths['/messaging_profiles/{id}/metrics']['get']['parameters']['path']['id'];

    type MessagingProfilesRetrieveMetricsParams =
      paths['/messaging_profiles/{id}/metrics']['get']['parameters']['query'];

    type MessagingProfilesRetrieveMetricsResponse =
      paths['/messaging_profiles/{id}/metrics']['get']['responses']['200']['content']['application/json']['data'];

    class MessagingProfilesResource {
      create(
        params?: MessagingProfilesCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesCreateResponse>>;

      del(
        params?: MessagingProfilesDeleteParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesDeleteResponse>>;

      retrieve(
        id?: MessagingProfilesRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesRetrieveResponse>>;

      list(
        params?: MessagingProfilesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesListResponse>>;

      listPhoneNumbers(
        params?: MessagingProfilesListPhoneNumbersParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListPhoneNumbersResponse>
      >;

      listShortCodes(
        params?: MessagingProfilesListShortCodesParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesListShortCodesResponse>
      >;

      retrieveMetrics(
        id?: MessagingProfilesRetrieveMetricsId,
        params?: MessagingProfilesRetrieveMetricsParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.MessagingProfilesRetrieveMetricsResponse>
      >;
    }
  }
}
