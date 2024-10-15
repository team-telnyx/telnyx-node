import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type ChannelzonesListParams =
      paths['/channel_zones']['get']['parameters']['query'];

    type ChannelzonesListResponse =
      paths['/channel_zones']['get']['responses']['200']['content']['application/json'];

    type ChannelzonesUpdateId =
      paths['/channel_zones/{channel_zone_id}']['patch']['parameters']['path']['channel_zone_id'];

    type ChannelzonesUpdateParams =
      paths['/channel_zones/{channel_zone_id}']['patch']['requestBody']['content']['application/json'];

    type ChannelzonesUpdateResponse =
      paths['/channel_zones/{channel_zone_id}']['patch']['responses']['200']['content']['application/json'];

    type ChannelzonesRetrieveId =
      paths['/channel_zones/{channel_zone_id}']['get']['parameters']['path']['channel_zone_id'];

    type ChannelzonesRetrieveParams =
      paths['/channel_zones/{channel_zone_id}']['get']['parameters']['query'];

    type ChannelzonesRetrieveResponse =
      paths['/channel_zones/{channel_zone_id}']['get']['responses']['200']['content']['application/json'];

    type ChannelzonesPhoneNumbersListChannelzoneId =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers']['get']['parameters']['path']['channel_zone_id'];

    type ChannelzonesPhoneNumbersListParams =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers']['get']['parameters']['query'];

    type ChannelzonesPhoneNumbersListResponse =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers']['get']['responses']['200']['content']['application/json'];

    type ChannelzonesPhoneNumbersCreateChannelZoneId =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers']['post']['parameters']['path']['channel_zone_id'];

    type ChannelzonesPhoneNumbersCreateParams =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers']['post']['requestBody']['content']['application/json'];

    type ChannelzonesPhoneNumbersCreateResponse =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers']['post']['responses']['200']['content']['application/json'];

    type ChannelzonesPhoneNumbersDeleteChannelzoneId =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers/{phone_number}']['delete']['parameters']['path']['channel_zone_id'];

    type ChannelzonesPhoneNumbersDeletePhoneNumber =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers/{phone_number}']['delete']['parameters']['path']['phone_number'];

    type ChannelzonesPhoneNumbersDeleteResponse =
      paths['/channel_zones/{channel_zone_id}/channel_zone_phone_numbers/{phone_number}']['delete']['responses']['200']['content'];

    class ChannelzonesResource {
      list(
        params?: ChannelzonesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ChannelzonesListResponse>>;

      update(
        id: ChannelzonesUpdateId,
        params: ChannelzonesUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ChannelzonesUpdateResponse>>;

      retrieve(
        id: ChannelzonesRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ChannelzonesRetrieveResponse>>;

      listPhoneNumbers(
        id: ChannelzonesPhoneNumbersListChannelzoneId,
        params?: ChannelzonesPhoneNumbersListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.ChannelzonesPhoneNumbersListResponse>>;

      createPhoneNumber(
        id: ChannelzonesPhoneNumbersCreateChannelZoneId,
        params: ChannelzonesPhoneNumbersCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ChannelzonesPhoneNumbersCreateResponse>
      >;

      delPhoneNumber(
        id: ChannelzonesPhoneNumbersDeleteChannelzoneId,
        phoneNumber: ChannelzonesPhoneNumbersDeletePhoneNumber,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.ChannelzonesPhoneNumbersDeleteResponse>
      >;
    }
  }
}
