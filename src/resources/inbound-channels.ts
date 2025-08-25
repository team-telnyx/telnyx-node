// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class InboundChannels extends APIResource {
  /**
   * Update the number of Voice Channels for the US Zone. This allows your account to
   * handle multiple simultaneous inbound calls to US numbers. Use this endpoint to
   * increase or decrease your capacity based on expected call volume.
   *
   * @example
   * ```ts
   * const inboundChannel = await client.inboundChannels.update({
   *   channels: 7,
   * });
   * ```
   */
  update(
    body: InboundChannelUpdateParams,
    options?: RequestOptions,
  ): APIPromise<InboundChannelUpdateResponse> {
    return this._client.patch('/inbound_channels', { body, ...options });
  }

  /**
   * Returns the US Zone voice channels for your account. voice channels allows you
   * to use Channel Billing for calls to your Telnyx phone numbers. Please check the
   * <a href="https://support.telnyx.com/en/articles/8428806-global-channel-billing">Telnyx
   * Support Articles</a> section for full information and examples of how to utilize
   * Channel Billing.
   *
   * @example
   * ```ts
   * const inboundChannels = await client.inboundChannels.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<InboundChannelListResponse> {
    return this._client.get('/inbound_channels', options);
  }
}

export interface InboundChannelUpdateResponse {
  data?: InboundChannelUpdateResponse.Data;
}

export namespace InboundChannelUpdateResponse {
  export interface Data {
    /**
     * The number of channels set for the account
     */
    channels?: number;

    /**
     * Identifies the type of the response
     */
    record_type?: string;
  }
}

export interface InboundChannelListResponse {
  data?: InboundChannelListResponse.Data;
}

export namespace InboundChannelListResponse {
  export interface Data {
    /**
     * The current number of concurrent channels set for the account
     */
    channels?: number;

    /**
     * Identifies the type of the response
     */
    record_type?: string;
  }
}

export interface InboundChannelUpdateParams {
  /**
   * The new number of concurrent channels for the account
   */
  channels: number;
}

export declare namespace InboundChannels {
  export {
    type InboundChannelUpdateResponse as InboundChannelUpdateResponse,
    type InboundChannelListResponse as InboundChannelListResponse,
    type InboundChannelUpdateParams as InboundChannelUpdateParams,
  };
}
