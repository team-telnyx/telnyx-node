import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PortingLoaConfigurationsListParams =
      paths['/porting/loa_configurations']['get']['parameters']['query'];

    type PortingLoaConfigurationsListResponse =
      paths['/porting/loa_configurations']['get']['responses']['200']['content']['application/json'];

    type PortingLoaConfigurationsCreateParams =
      paths['/porting/loa_configurations']['post']['requestBody']['content']['application/json'];

    type PortingLoaConfigurationsCreateResponse =
      paths['/porting/loa_configurations']['post']['responses']['201']['content']['application/json'];

    type PortingLoaConfigurationsRetrieveId =
      paths['/porting/loa_configurations/{id}']['get']['parameters']['path']['id'];

    type PortingLoaConfigurationsRetrieveParams =
      paths['/porting/loa_configurations/{id}']['get']['parameters']['query'];

    type PortingLoaConfigurationsRetrieveResponse =
      paths['/porting/loa_configurations/{id}']['get']['responses']['200']['content']['application/json'];

    type PortingLoaConfigurationsDelId =
      paths['/porting/loa_configurations/{id}']['delete']['parameters']['path']['id'];

    type PortingLoaConfigurationsDelParams =
      paths['/porting/loa_configurations/{id}']['delete']['parameters']['query'];

    type PortingLoaConfigurationsDelResponse =
      paths['/porting/loa_configurations/{id}']['delete']['responses']['204']['content'];

    type PortingLoaConfigurationsUpdateId =
      paths['/porting/loa_configurations/{id}']['patch']['parameters']['path']['id'];

    type PortingLoaConfigurationsUpdateParams =
      paths['/porting/loa_configurations/{id}']['patch']['requestBody']['content']['application/json'];

    type PortingLoaConfigurationsUpdateResponse =
      paths['/porting/loa_configurations/{id}']['patch']['responses']['200']['content']['application/json'];

    type PortingLoaConfigurationsPreviewId =
      paths['/porting/loa_configurations/{id}']['get']['parameters']['path']['id'];

    type PortingLoaConfigurationsPreviewResponse =
      paths['/porting/loa_configurations/{id}']['get']['responses']['200']['content']['application/json'];

    class PortingLoaConfigurationsResource {
      list(
        params?: PortingLoaConfigurationsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingLoaConfigurationsListResponse>>;

      create(
        params: PortingLoaConfigurationsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PortingLoaConfigurationsCreateResponse>
      >;

      retrieve(
        id: PortingLoaConfigurationsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PortingLoaConfigurationsRetrieveResponse>
      >;

      del(
        id: PortingLoaConfigurationsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingLoaConfigurationsDelResponse>>;

      update(
        id: PortingLoaConfigurationsUpdateId,
        params: PortingLoaConfigurationsUpdateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PortingLoaConfigurationsUpdateResponse>
      >;

      preview(
        id: PortingLoaConfigurationsPreviewId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PortingLoaConfigurationsPreviewResponse>
      >;
    }
  }
}
