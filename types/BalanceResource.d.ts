import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type BalanceRetrieveParams =
      paths['/balance']['get']['parameters']['query'];

    type BalanceRetrieveResponse =
      paths['/balance']['get']['responses']['200']['content']['application/json'];

    class BalanceResource {
      /** Get user balance details */
      retrieve(
        params?: BalanceRetrieveParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BalanceRetrieveResponse>>;
    }
  }
}
