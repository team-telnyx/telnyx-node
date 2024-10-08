import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type InventoryCoverageListParams =
      paths['/inventory_coverage']['get']['parameters']['query'];

    type InventoryCoverageListResponse =
      paths['/inventory_coverage']['get']['responses']['200']['content']['application/json'];

    class InventoryCoverageResource {
      list(
        params?: InventoryCoverageListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.InventoryCoverageListResponse>>;

      request(
        params?: InventoryCoverageListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.InventoryCoverageListResponse>>;
    }
  }
}
