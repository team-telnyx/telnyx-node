import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type DocumentsListParams =
      paths['/documents']['get']['parameters']['query'];

    type DocumentsListResponse =
      paths['/documents']['get']['responses']['200']['content']['application/json'];

    type DocumentsCreateParams =
      paths['/documents']['post']['requestBody']['content']['application/json'];

    type DocumentsCreateResponse =
      paths['/documents']['post']['responses']['200']['content']['application/json'];

    type DocumentsRetrieveId =
      paths['/documents/{id}']['get']['parameters']['path']['id'];

    type DocumentsRetrieveResponse =
      paths['/documents/{id}']['get']['responses']['200']['content']['application/json'];

    type DocumentsUpdateId =
      paths['/documents/{id}']['patch']['parameters']['path']['id'];

    type DocumentsUpdateParams =
      NonNullable<paths['/documents/{id}']['patch']['requestBody']>['content']['application/json'];

    type DocumentsUpdateResponse =
      paths['/documents/{id}']['patch']['responses']['200']['content']['application/json'];

    type DocumentsDelId =
      paths['/documents/{id}']['delete']['parameters']['path']['id'];

    type DocumentsDelParams =
      paths['/documents/{id}']['delete']['parameters']['query'];

    type DocumentsDelResponse =
      paths['/documents/{id}']['delete']['responses']['200']['content']['application/json'];

    type DocumentsDownloadId =
      paths['/documents/{id}/download']['get']['parameters']['path']['id'];

    type DocumentsDownloadResponse =
      paths['/documents/{id}/download']['get']['responses']['200']['content']['*/*'];

    class DocumentsResource {
      list(
        params?: DocumentsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DocumentsListResponse>>;

      create(
        params: DocumentsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DocumentsCreateResponse>>;

      retrieve(
        id: DocumentsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DocumentsRetrieveResponse>>;

      update(
        id: DocumentsUpdateId,
        params: DocumentsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DocumentsUpdateResponse>>;

      del(
        id: DocumentsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DocumentsDelResponse>>;

      download(
        id: DocumentsDownloadId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DocumentsDownloadResponse>>;
    }
  }
}
