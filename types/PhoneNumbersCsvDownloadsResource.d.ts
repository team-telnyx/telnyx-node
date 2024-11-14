import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type PhoneNumbersCsvDownloadsListParams =
      paths['/phone_numbers/csv_downloads']['get']['parameters']['query'];

    type PhoneNumbersCsvDownloadsListResponse =
      paths['/phone_numbers/csv_downloads']['get']['responses']['200']['content']['application/json'];

    type PhoneNumbersCsvDownloadsCreateParams =
      paths['/phone_numbers/csv_downloads']['post']['requestBody'];

    type PhoneNumbersCsvDownloadsCreateResponse =
      paths['/phone_numbers/csv_downloads']['post']['responses']['200']['content']['application/json'];

    type PhoneNumbersCsvDownloadsRetrieveId =
      paths['/phone_numbers/csv_downloads/{id}']['get']['parameters']['path']['id'];

    type PhoneNumbersCsvDownloadsRetrieveResponse =
      paths['/phone_numbers/csv_downloads/{id}']['get']['responses']['200']['content']['application/json'];

    class PhoneNumbersCsvDownloadsResource {
      list(
        params?: PhoneNumbersCsvDownloadsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.PhoneNumbersCsvDownloadsListResponse>>;

      create(
        params: PhoneNumbersCsvDownloadsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersCsvDownloadsCreateResponse>
      >;

      retrieve(
        id: PhoneNumbersCsvDownloadsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.PhoneNumbersCsvDownloadsRetrieveResponse>
      >;
    }
  }
}
