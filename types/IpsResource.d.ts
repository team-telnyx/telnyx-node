import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type IpsDelId = paths['/ips/{id}']['delete']['parameters']['path']['id'];

    type IpsDelParams = paths['/ips/{id}']['delete']['parameters']['query'];

    type IpsDelResponse =
      paths['/ips/{id}']['delete']['responses']['200']['content']['application/json'];

    type IpsCreateOptionalParams = NonNullable<
      paths['/ips']['post']['requestBody']
    >['content']['application/json'];

    type IpsCreateParams = IpsCreateOptionalParams | Record<string, never>;

    type IpsCreateResponse =
      paths['/ips']['post']['responses']['201']['content']['application/json'];

    type IpsRetrieveId = paths['/ips/{id}']['get']['parameters']['path']['id'];

    type IpsRetrieveParams = paths['/ips/{id}']['get']['parameters']['query'];

    type IpsRetrieveResponse =
      paths['/ips/{id}']['get']['responses']['200']['content']['application/json'];

    type IpsListParams = paths['/ips']['get']['parameters']['query'];

    type IpsListResponse =
      paths['/ips']['get']['responses']['200']['content']['application/json'];

    type IpsUpdateId = paths['/ips/{id}']['patch']['parameters']['path']['id'];

    type IpsUpdateOptionalParams = NonNullable<
      paths['/ips/{id}']['patch']['requestBody']
    >['content']['application/json'];

    type IpsUpdateParams = IpsUpdateOptionalParams | Record<string, never>;

    type IpsUpdateResponse =
      paths['/ips/{id}']['patch']['responses']['200']['content']['application/json'];

    class IpsResource {
      del(
        id: IpsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpsDelResponse>>;

      create(
        params: IpsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpsCreateResponse>>;

      retrieve(
        id: IpsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpsRetrieveResponse>>;

      list(
        params?: IpsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpsListResponse>>;

      update(
        id: IpsUpdateId,
        params: IpsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.IpsUpdateResponse>>;
    }
  }
}
