// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messaging extends APIResource {
  /**
   * Retrieve a mobile phone number with messaging settings
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessagingRetrieveResponse> {
    return this._client.get(path`/mobile_phone_numbers/${id}/messaging`, options);
  }

  /**
   * List mobile phone numbers with messaging settings
   */
  list(
    query: MessagingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<MessagingListResponsesDefaultFlatPagination, MessagingListResponse> {
    return this._client.getAPIList(
      '/mobile_phone_numbers/messaging',
      DefaultFlatPagination<MessagingListResponse>,
      { query, ...options },
    );
  }
}

export type MessagingListResponsesDefaultFlatPagination = DefaultFlatPagination<MessagingListResponse>;

export interface MessagingRetrieveResponse {
  data?: MessagingRetrieveResponse.Data;
}

export namespace MessagingRetrieveResponse {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * ISO 3166-1 alpha-2 country code.
     */
    country_code?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    features?: Data.Features;

    /**
     * The messaging product that the number is registered to use
     */
    messaging_product?: string;

    /**
     * Unique identifier for a messaging profile.
     */
    messaging_profile_id?: string | null;

    /**
     * +E.164 formatted phone number.
     */
    phone_number?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'messaging_phone_number' | 'messaging_settings';

    /**
     * The messaging traffic or use case for which the number is currently configured.
     */
    traffic_type?: string;

    /**
     * The type of the phone number
     */
    type?: 'longcode';

    /**
     * ISO 8601 formatted date indicating when the resource was updated.
     */
    updated_at?: string;
  }

  export namespace Data {
    export interface Features {
      /**
       * The set of features available for a specific messaging use case (SMS or MMS).
       * Features can vary depending on the characteristics the phone number, as well as
       * its current product configuration.
       */
      sms?: Shared.MessagingFeatureSet | null;
    }
  }
}

export interface MessagingListResponse {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ISO 3166-1 alpha-2 country code.
   */
  country_code?: string;

  /**
   * ISO 8601 formatted date indicating when the resource was created.
   */
  created_at?: string;

  features?: MessagingListResponse.Features;

  /**
   * The messaging product that the number is registered to use
   */
  messaging_product?: string;

  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id?: string | null;

  /**
   * +E.164 formatted phone number.
   */
  phone_number?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'messaging_phone_number' | 'messaging_settings';

  /**
   * The messaging traffic or use case for which the number is currently configured.
   */
  traffic_type?: string;

  /**
   * The type of the phone number
   */
  type?: 'longcode';

  /**
   * ISO 8601 formatted date indicating when the resource was updated.
   */
  updated_at?: string;
}

export namespace MessagingListResponse {
  export interface Features {
    /**
     * The set of features available for a specific messaging use case (SMS or MMS).
     * Features can vary depending on the characteristics the phone number, as well as
     * its current product configuration.
     */
    sms?: Shared.MessagingFeatureSet | null;
  }
}

export interface MessagingListParams extends DefaultFlatPaginationParams {}

export declare namespace Messaging {
  export {
    type MessagingRetrieveResponse as MessagingRetrieveResponse,
    type MessagingListResponse as MessagingListResponse,
    type MessagingListResponsesDefaultFlatPagination as MessagingListResponsesDefaultFlatPagination,
    type MessagingListParams as MessagingListParams,
  };
}
