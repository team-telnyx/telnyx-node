import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type MessagingProfilesRetrieveParams =
      paths['/messaging_profiles/{id}']['get']['parameters']['query'];

    type MessagingProfilesDeleteParams =
      paths['/messaging_profiles/{id}']['delete']['parameters']['path'];

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
        params?: MessagingProfilesRetrieveParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesRetrieveResponse>>;

      list(
        params?: MessagingProfilesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagingProfilesListResponse>>;
    }
  }
}
