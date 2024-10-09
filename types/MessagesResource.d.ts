import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type MessagesCreateParams =
      | NonNullable<
          paths['/messages']['post']['requestBody']
        >['content']['application/json']
      | Record<string, never>;

    type MessagesCreateResponse =
      paths['/messages']['post']['responses']['200']['content']['application/json'];

    type MessagesRetrieveId =
      paths['/messages/{id}']['get']['parameters']['path']['id'];

    type MessagesRetrieveResponse =
      paths['/messages/{id}']['get']['responses']['200']['content']['application/json'];

    type MessagesGroupMmsCreateParams =
      | NonNullable<
          paths['/messages/group_mms']['post']['requestBody']
        >['content']['application/json']
      | Record<string, never>;

    type MessagesGroupMmsCreateResponse =
      paths['/messages/group_mms']['post']['responses']['200']['content']['application/json'];

    type MessagesLongCodeCreateParams =
      | NonNullable<
          paths['/messages/long_code']['post']['requestBody']
        >['content']['application/json']
      | Record<string, never>;

    type MessagesLongCodeCreateResponse =
      paths['/messages/long_code']['post']['responses']['200']['content']['application/json'];

    type MessagesShortCodeCreateParams =
      | NonNullable<
          paths['/messages/short_code']['post']['requestBody']
        >['content']['application/json']
      | Record<string, never>;

    type MessagesShortCodeCreateResponse =
      paths['/messages/short_code']['post']['responses']['200']['content']['application/json'];

    type MessagesNumberPoolCreateParams =
      | NonNullable<
          paths['/messages/number_pool']['post']['requestBody']
        >['content']['application/json']
      | Record<string, never>;

    type MessagesNumberPoolCreateResponse =
      paths['/messages/number_pool']['post']['responses']['200']['content']['application/json'];

    class MessagesResource {
      send(
        params: MessagesCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagesCreateResponse>>;

      create(
        params: MessagesCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagesCreateResponse>>;

      retrieve(
        id: MessagesRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagesRetrieveResponse>>;

      sendGroupMms(
        params: MessagesGroupMmsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagesGroupMmsCreateResponse>>;

      sendLongCode(
        params: MessagesLongCodeCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagesLongCodeCreateResponse>>;

      sendShortCode(
        params: MessagesShortCodeCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagesShortCodeCreateResponse>>;

      sendNumberPool(
        params: MessagesNumberPoolCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.MessagesNumberPoolCreateResponse>>;
    }
  }
}
