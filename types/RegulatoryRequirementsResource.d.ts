import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type RegulatoryRequirementsListParams =
      paths['/regulatory_requirements']['get']['parameters']['query'];

    type RegulatoryRequirementsListResponse =
      paths['/regulatory_requirements']['get']['responses']['200']['content']['application/json'];

    class RegulatoryRequirementsResource {
      list(
        params?: RegulatoryRequirementsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.RegulatoryRequirementsListResponse>>;
    }
  }
}
