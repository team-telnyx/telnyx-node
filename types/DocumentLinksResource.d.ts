import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type DocumentLinksListParams =
      paths['/document_links']['get']['parameters']['query'];

    type DocumentLinksListResponse =
      paths['/document_links']['get']['responses']['200']['content']['application/json'];

    class DocumentLinksResource {
      list(
        params?: DocumentLinksListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DocumentLinksListResponse>>;
    }
  }
}
