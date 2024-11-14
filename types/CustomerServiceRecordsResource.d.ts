import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type CustomerServiceRecordsListParams =
      paths['/customer_service_records']['get']['parameters']['query'];

    type CustomerServiceRecordsListResponse =
      paths['/customer_service_records']['get']['responses']['200']['content']['application/json'];

    type CustomerServiceRecordsCreateParams =
      paths['/customer_service_records']['post']['requestBody']['content']['application/json'];

    type CustomerServiceRecordsCreateResponse =
      paths['/customer_service_records']['post']['responses']['201']['content']['application/json'];

    type CustomerServiceRecordsRetrieveId =
      paths['/customer_service_records/{customer_service_record_id}']['get']['parameters']['path']['customer_service_record_id'];

    type CustomerServiceRecordsRetrieveResponse =
      paths['/customer_service_records/{customer_service_record_id}']['get']['responses']['201']['content']['application/json'];

    type CustomerServiceRecordsPhoneNumbersCoverageCreateParams =
      paths['/customer_service_records/phone_number_coverages']['post']['requestBody']['content']['application/json'];

    type CustomerServiceRecordsPhoneNumbersCoverageCreateResponse =
      paths['/customer_service_records/phone_number_coverages']['post']['responses']['201']['content']['application/json'];

    class CustomerServiceRecordsResource {
      list(
        params?: CustomerServiceRecordsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CustomerServiceRecordsListResponse>>;

      create(
        params: CustomerServiceRecordsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.CustomerServiceRecordsCreateResponse>>;

      retrieve(
        id: CustomerServiceRecordsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.CustomerServiceRecordsRetrieveResponse>
      >;

      verifyPhoneNumbersCoverage(
        params: CustomerServiceRecordsPhoneNumbersCoverageCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.CustomerServiceRecordsPhoneNumbersCoverageCreateResponse>
      >;
    }
  }
}
