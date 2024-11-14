import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PortingReportsListParams =
      paths['/porting/reports']['get']['parameters']['query'];

    type PortingReportsListResponse =
      paths['/porting/reports']['get']['responses']['200']['content']['application/json'];

    type PortingReportsCreateParams =
      paths['/porting/reports']['post']['requestBody']['content']['application/json'];

    type PortingReportsCreateResponse =
      paths['/porting/reports']['post']['responses']['201']['content']['application/json'];

    type PortingReportsRetrieveId =
      paths['/porting/reports/{id}']['get']['parameters']['path']['id'];

    type PortingReportsRetrieveResponse =
      paths['/porting/reports/{id}']['get']['responses']['200']['content']['application/json'];

    class PortingReportsResource {
      list(
        params?: PortingReportsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingReportsListResponse>>;

      create(
        params: PortingReportsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingReportsCreateResponse>>;

      retrieve(
        id: PortingReportsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortingReportsRetrieveResponse>>;
    }
  }
}
