// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class ChannelZones extends APIResource {
  /**
   * Update the number of Voice Channels for the Non-US Zones. This allows your
   * account to handle multiple simultaneous inbound calls to Non-US numbers. Use
   * this endpoint to increase or decrease your capacity based on expected call
   * volume.
   */
  update(
    channelZoneID: string,
    body: ChannelZoneUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ChannelZoneUpdateResponse> {
    return this._client.put(path`/channel_zones/${channelZoneID}`, { body, ...options });
  }

  /**
   * Returns the non-US voice channels for your account. voice channels allow you to
   * use Channel Billing for calls to your Telnyx phone numbers. Please check the
   * <a href="https://support.telnyx.com/en/articles/8428806-global-channel-billing">Telnyx
   * Support Articles</a> section for full information and examples of how to utilize
   * Channel Billing.
   */
  list(
    query: ChannelZoneListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ChannelZoneListResponsesDefaultFlatPagination, ChannelZoneListResponse> {
    return this._client.getAPIList('/channel_zones', DefaultFlatPagination<ChannelZoneListResponse>, {
      query,
      ...options,
    });
  }
}

export type ChannelZoneListResponsesDefaultFlatPagination = DefaultFlatPagination<ChannelZoneListResponse>;

export interface ChannelZoneUpdateResponse {
  id: string;

  channels: number;

  /**
   * List of countries (in ISO 3166-2, capitalized) members of the billing channel
   * zone
   */
  countries: Array<string>;

  name: string;

  record_type: 'channel_zone';

  /**
   * ISO 8601 formatted date of when the channel zone was created
   */
  created_at?: string;

  /**
   * ISO 8601 formatted date of when the channel zone was updated
   */
  updated_at?: string;
}

export interface ChannelZoneListResponse {
  id: string;

  channels: number;

  /**
   * List of countries (in ISO 3166-2, capitalized) members of the billing channel
   * zone
   */
  countries: Array<string>;

  name: string;

  record_type: 'channel_zone';

  /**
   * ISO 8601 formatted date of when the channel zone was created
   */
  created_at?: string;

  /**
   * ISO 8601 formatted date of when the channel zone was updated
   */
  updated_at?: string;
}

export interface ChannelZoneUpdateParams {
  /**
   * The number of reserved channels
   */
  channels: number;
}

export interface ChannelZoneListParams extends DefaultFlatPaginationParams {}

export declare namespace ChannelZones {
  export {
    type ChannelZoneUpdateResponse as ChannelZoneUpdateResponse,
    type ChannelZoneListResponse as ChannelZoneListResponse,
    type ChannelZoneListResponsesDefaultFlatPagination as ChannelZoneListResponsesDefaultFlatPagination,
    type ChannelZoneUpdateParams as ChannelZoneUpdateParams,
    type ChannelZoneListParams as ChannelZoneListParams,
  };
}
