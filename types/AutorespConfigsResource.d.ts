import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type AutorespConfigsRetrievePathParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['get']['parameters']['path'];

    type AutorespConfigsRetrieveResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['get']['responses']['200']['content']['application/json'];

    type AutorespConfigsCreatePathParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['post']['parameters']['path'];

    type AutorespConfigsCreateParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['post']['requestBody']['content']['application/json'];

    type AutorespConfigsCreateResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['post']['responses']['200']['content']['application/json'];

    type AutorespConfigsListPathParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['get']['parameters']['path'];

    type AutorespConfigsListParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['get']['parameters']['query'];

    type AutorespConfigsListResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs']['get']['responses']['200']['content']['application/json'];

    type AutorespConfigsDelPathParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['delete']['parameters']['path'];

    type AutorespConfigsDelResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['delete']['responses']['200']['content']['application/json'];

    type AutorespConfigsUpdatePathParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['put']['parameters']['path'];

    type AutorespConfigsUpdateParams =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['put']['requestBody']['content']['application/json'];

    type AutorespConfigsUpdateResponse =
      paths['/messaging_profiles/{profile_id}/autoresp_configs/{autoresp_cfg_id}']['put']['responses']['200']['content']['application/json'];

    class AutorespConfigsResource {
      retrieve(
        params: AutorespConfigsRetrievePathParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AutorespConfigsRetrieveResponse>>;

      create(
        pathParams: AutorespConfigsCreatePathParams,
        params: AutorespConfigsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AutorespConfigsCreateResponse>>;

      list(
        pathParams: AutorespConfigsListPathParams,
        params?: AutorespConfigsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AutorespConfigsListResponse>>;

      del(
        params: AutorespConfigsDelPathParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AutorespConfigsDelResponse>>;

      update(
        pathParams: AutorespConfigsUpdatePathParams,
        params: AutorespConfigsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.AutorespConfigsUpdateResponse>>;
    }
  }
}
