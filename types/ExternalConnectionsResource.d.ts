import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type ExternalConnectionsDelId =
      paths['/external_connections/{id}']['delete']['parameters']['path']['id'];

    type ExternalConnectionsDelParams =
      paths['/external_connections/{id}']['delete']['parameters']['query'];

    type ExternalConnectionsDelResponse =
      paths['/external_connections/{id}']['delete']['responses']['200']['content']['application/json'];

    type ExternalConnectionsCreateParams =
      paths['/external_connections']['post']['requestBody']['content']['application/json'];

    type ExternalConnectionsCreateResponse =
      paths['/external_connections']['post']['responses']['201']['content']['application/json'];

    type ExternalConnectionsRetrieveId =
      paths['/external_connections/{id}']['get']['parameters']['path']['id'];

    type ExternalConnectionsRetrieveParams =
      paths['/external_connections/{id}']['get']['parameters']['query'];

    type ExternalConnectionsRetrieveResponse =
      paths['/external_connections/{id}']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsListParams =
      paths['/external_connections']['get']['parameters']['query'];

    type ExternalConnectionsListResponse =
      paths['/external_connections']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsUpdateId =
      paths['/external_connections/{id}']['patch']['parameters']['path']['id'];

    type ExternalConnectionsUpdateParams =
      paths['/external_connections/{id}']['patch']['requestBody']['content']['application/json'];

    type ExternalConnectionsUpdateResponse =
      paths['/external_connections/{id}']['patch']['responses']['200']['content']['application/json'];

    type ExternalConnectionsListLogMessagesParams =
      paths['/external_connections/log_messages']['get']['parameters']['query'];

    type ExternalConnectionsListLogMessagesResponse =
      paths['/external_connections/log_messages']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsLogMessageDelId =
      paths['/external_connections/log_messages/{id}']['delete']['parameters']['path']['id'];

    type ExternalConnectionsLogMessageDelParams =
      paths['/external_connections/log_messages/{id}']['delete']['parameters']['query'];

    type ExternalConnectionsLogMessageDelResponse =
      paths['/external_connections/log_messages/{id}']['delete']['responses']['200']['content']['application/json'];

    type ExternalConnectionsLogMessageRetrieveId =
      paths['/external_connections/log_messages/{id}']['get']['parameters']['path']['id'];

    type ExternalConnectionsLogMessageRetrieveParams =
      paths['/external_connections/log_messages/{id}']['get']['parameters']['query'];

    type ExternalConnectionsLogMessageRetrieveResponse =
      paths['/external_connections/log_messages/{id}']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsCivicAddressListId =
      paths['/external_connections/{id}/civic_addresses']['get']['parameters']['path']['id'];

    type ExternalConnectionsCivicAddressListParams =
      paths['/external_connections/{id}/civic_addresses']['get']['parameters']['query'];

    type ExternalConnectionsCivicAddressListResponse =
      paths['/external_connections/{id}/civic_addresses']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsCivicAddressRetrieveId =
      paths['/external_connections/{id}/civic_addresses/{address_id}']['get']['parameters']['path']['id'];

    type ExternalConnectionsCivicAddressRetrieveParams =
      paths['/external_connections/{id}/civic_addresses/{address_id}']['get']['parameters']['query'];

    type ExternalConnectionsCivicAddressRetrieveResponse =
      paths['/external_connections/{id}/civic_addresses/{address_id}']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsPhoneNumbersListId =
      paths['/external_connections/{id}/phone_numbers']['get']['parameters']['path']['id'];

    type ExternalConnectionsPhoneNumbersListParams =
      paths['/external_connections/{id}/phone_numbers']['get']['parameters']['query'];

    type ExternalConnectionsPhoneNumbersListResponse =
      paths['/external_connections/{id}/phone_numbers']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsPhoneNumbersRetrieveId =
      paths['/external_connections/{id}/phone_numbers/{phone_number_id}']['get']['parameters']['path']['id'];

    type ExternalConnectionsPhoneNumbersRetrievePhoneNumberId =
      paths['/external_connections/{id}/phone_numbers/{phone_number_id}']['get']['parameters']['path']['phone_number_id'];

    type ExternalConnectionsPhoneNumbersRetrieveResponse =
      paths['/external_connections/{id}/phone_numbers/{phone_number_id}']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsReleasesListId =
      paths['/external_connections/{id}/releases']['get']['parameters']['path']['id'];

    type ExternalConnectionsReleasesListParams =
      paths['/external_connections/{id}/releases']['get']['parameters']['query'];

    type ExternalConnectionsReleasesListResponse =
      paths['/external_connections/{id}/releases']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsReleasesRetrieveId =
      paths['/external_connections/{id}/releases/{release_id}']['get']['parameters']['path']['id'];

    type ExternalConnectionsReleasesRetrieveReleaseId =
      paths['/external_connections/{id}/releases/{release_id}']['get']['parameters']['path']['release_id'];

    type ExternalConnectionsReleasesRetrieveResponse =
      paths['/external_connections/{id}/releases/{release_id}']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsUploadsListId =
      paths['/external_connections/{id}/uploads']['get']['parameters']['path']['id'];

    type ExternalConnectionsUploadsListParams =
      paths['/external_connections/{id}/uploads']['get']['parameters']['query'];

    type ExternalConnectionsUploadsListResponse =
      paths['/external_connections/{id}/uploads']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsUploadsRetrieveId =
      paths['/external_connections/{id}/uploads/{ticket_id}']['get']['parameters']['path']['id'];

    type ExternalConnectionsUploadsRetrieveTicketId =
      paths['/external_connections/{id}/uploads/{ticket_id}']['get']['parameters']['path']['ticket_id'];

    type ExternalConnectionsUploadsRetrieveResponse =
      paths['/external_connections/{id}/uploads/{ticket_id}']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsUploadsRefreshId =
      paths['/external_connections/{id}/uploads/refresh']['post']['parameters']['path']['id'];

    type ExternalConnectionsUploadsRefreshParams =
      paths['/external_connections/{id}/uploads/refresh']['post']['requestBody'];

    type ExternalConnectionsUploadsRefreshResponse =
      paths['/external_connections/{id}/uploads/refresh']['post']['responses']['200']['content']['application/json'];

    type ExternalConnectionsUploadsStatusRetrieveId =
      paths['/external_connections/{id}/uploads/status']['get']['parameters']['path']['id'];

    type ExternalConnectionsUploadsStatusRetrieveResponse =
      paths['/external_connections/{id}/uploads/status']['get']['responses']['200']['content']['application/json'];

    type ExternalConnectionsUploadsRetryId =
      paths['/external_connections/{id}/uploads/{ticket_id}/retry']['post']['parameters']['path']['id'];

    type ExternalConnectionsUploadsRetryTicketId =
      paths['/external_connections/{id}/uploads/{ticket_id}/retry']['post']['parameters']['path']['ticket_id'];

    type ExternalConnectionsUploadsRetryParams =
      paths['/external_connections/{id}/uploads/{ticket_id}/retry']['post']['requestBody'];

    type ExternalConnectionsUploadsRetryResponse =
      paths['/external_connections/{id}/uploads/{ticket_id}/retry']['post']['responses']['202']['content']['application/json'];

    class ExternalConnectionsResource {
      del(
        id: ExternalConnectionsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ExternalConnectionsDelResponse>>;

      create(
        params: ExternalConnectionsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ExternalConnectionsCreateResponse>>;

      retrieve(
        id: ExternalConnectionsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ExternalConnectionsRetrieveResponse>>;

      list(
        params?: ExternalConnectionsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ExternalConnectionsListResponse>>;

      update(
        id: ExternalConnectionsUpdateId,
        params: ExternalConnectionsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ExternalConnectionsUpdateResponse>>;

      listLogMessages(
        params?: ExternalConnectionsListLogMessagesParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsListLogMessagesResponse>
      >;

      retrieveLogMessage(
        id: ExternalConnectionsLogMessageRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsLogMessageRetrieveResponse>
      >;

      delLogMessage(
        id: ExternalConnectionsLogMessageDelId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsLogMessageDelResponse>
      >;

      listCivicAddresses(
        id: ExternalConnectionsCivicAddressListId,
        params?: ExternalConnectionsCivicAddressListParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsCivicAddressListResponse>
      >;

      retrieveCivicAddress(
        id: ExternalConnectionsCivicAddressRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsCivicAddressRetrieveResponse>
      >;

      listPhoneNumbers(
        id: ExternalConnectionsPhoneNumbersListId,
        params?: ExternalConnectionsPhoneNumbersListParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsPhoneNumbersListResponse>
      >;

      retrievePhoneNumber(
        id: ExternalConnectionsPhoneNumbersRetrieveId,
        phoneNumberId: ExternalConnectionsPhoneNumbersRetrievePhoneNumberId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsPhoneNumbersRetrieveResponse>
      >;

      listReleases(
        id: ExternalConnectionsReleasesListId,
        params?: ExternalConnectionsReleasesListParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsReleasesListResponse>
      >;

      retrieveRelease(
        id: ExternalConnectionsReleasesRetrieveId,
        releaseId: ExternalConnectionsReleasesRetrieveReleaseId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsReleasesRetrieveResponse>
      >;

      listUploads(
        id: ExternalConnectionsUploadsListId,
        params?: ExternalConnectionsUploadsListParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsUploadsListResponse>
      >;

      retrieveUpload(
        id: ExternalConnectionsUploadsRetrieveId,
        ticketId: ExternalConnectionsUploadsRetrieveTicketId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsUploadsRetrieveResponse>
      >;

      retrieveUploadsStatus(
        id: ExternalConnectionsUploadsStatusRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsUploadsStatusRetrieveResponse>
      >;

      refreshUploads(
        id: ExternalConnectionsUploadsRefreshId,
        params: ExternalConnectionsUploadsRefreshParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsUploadsRefreshResponse>
      >;

      retryUpload(
        id: ExternalConnectionsUploadsRetryId,
        ticketId: ExternalConnectionsUploadsRetryTicketId,
        params: ExternalConnectionsUploadsRetryParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ExternalConnectionsUploadsRetryResponse>
      >;
    }
  }
}
