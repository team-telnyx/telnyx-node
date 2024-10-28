import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PortabilityChecksCreateParams =
      paths['/portability_checks']['post']['requestBody']['content']['application/json'];

    type PortabilityChecksCreateResponse =
      paths['/portability_checks']['post']['responses']['201']['content']['application/json'];

    class PortabilityChecksResource {
      create(
        params: PortabilityChecksCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PortabilityChecksCreateResponse>>;
    }
  }
}
