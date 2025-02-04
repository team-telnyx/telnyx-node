import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type DetailRecordsListParams =
      paths['/detail_records']['get']['parameters']['query'];

    type DetailRecordsListResponse =
      paths['/detail_records']['get']['responses']['200']['content']['application/json'];

    class DetailRecordsResource {
      list(
        params?: DetailRecordsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DetailRecordsListResponse>>;
    }
  }
}
