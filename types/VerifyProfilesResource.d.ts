import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type VerifyProfilesListParams =
      paths['/verify_profiles']['get']['parameters']['query'];

    type VerifyProfilesListResponse =
      paths['/verify_profiles']['get']['responses']['200']['content']['application/json'];

    type VerifyProfilesCreateParams =
      paths['/verify_profiles']['post']['requestBody']['content']['application/json'];

    type VerifyProfilesCreateResponse =
      paths['/verify_profiles']['post']['responses']['200']['content']['application/json'];

    type VerifyProfilesRetrieveId =
      paths['/verify_profiles/{verify_profile_id}']['get']['parameters']['path']['verify_profile_id'];

    type VerifyProfilesRetrieveParams =
      paths['/verify_profiles/{verify_profile_id}']['get']['parameters']['query'];

    type VerifyProfilesRetrieveResponse =
      paths['/verify_profiles/{verify_profile_id}']['get']['responses']['200']['content']['application/json'];

    type VerifyProfilesDelId =
      paths['/verify_profiles/{verify_profile_id}']['delete']['parameters']['path']['verify_profile_id'];

    type VerifyProfilesDelParams =
      paths['/verify_profiles/{verify_profile_id}']['delete']['parameters']['query'];

    type VerifyProfilesDelResponse =
      paths['/verify_profiles/{verify_profile_id}']['delete']['responses']['200']['content']['application/json'];

    type VerifyProfilesUpdateId =
      paths['/verify_profiles/{verify_profile_id}']['patch']['parameters']['path']['verify_profile_id'];

    type VerifyProfilesUpdateParams =
      paths['/verify_profiles/{verify_profile_id}']['patch']['requestBody']['content']['application/json'];

    type VerifyProfilesUpdateResponse =
      paths['/verify_profiles/{verify_profile_id}']['patch']['responses']['200']['content']['application/json'];

    type VerifyProfilesListTemplatesParams =
      | paths['/verify_profiles/templates']['get']['parameters']['query']
      | Record<string, never>;

    type VerifyProfilesListTemplatesResponse =
      paths['/verify_profiles/templates']['get']['responses']['200']['content']['application/json'];

    class VerifyProfilesResource {
      list(
        params?: VerifyProfilesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifyProfilesListResponse>>;

      create(
        params: VerifyProfilesCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifyProfilesCreateResponse>>;

      retrieve(
        id: VerifyProfilesRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifyProfilesRetrieveResponse>>;

      del(
        id: VerifyProfilesDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifyProfilesDelResponse>>;

      update(
        id: VerifyProfilesUpdateId,
        params: VerifyProfilesUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifyProfilesUpdateResponse>>;

      listTemplates(
        params?: VerifyProfilesListTemplatesParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.VerifyProfilesListTemplatesResponse>>;
    }
  }
}
