// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AuthenticationProvidersAPI from '../authentication-providers';
import * as ActionsAPI from './actions';
import { ActionExtendResponse, Actions } from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class NumberReservations extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Creates a Phone Number Reservation for multiple numbers.
   *
   * @example
   * ```ts
   * const numberReservation =
   *   await client.numberReservations.create();
   * ```
   */
  create(
    body: NumberReservationCreateParams,
    options?: RequestOptions,
  ): APIPromise<NumberReservationCreateResponse> {
    return this._client.post('/number_reservations', { body, ...options });
  }

  /**
   * Gets a single phone number reservation.
   *
   * @example
   * ```ts
   * const numberReservation =
   *   await client.numberReservations.retrieve(
   *     'number_reservation_id',
   *   );
   * ```
   */
  retrieve(
    numberReservationID: string,
    options?: RequestOptions,
  ): APIPromise<NumberReservationRetrieveResponse> {
    return this._client.get(path`/number_reservations/${numberReservationID}`, options);
  }

  /**
   * Gets a paginated list of phone number reservations.
   *
   * @example
   * ```ts
   * const numberReservations =
   *   await client.numberReservations.list();
   * ```
   */
  list(
    query: NumberReservationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NumberReservationListResponse> {
    return this._client.get('/number_reservations', { query, ...options });
  }
}

export interface NumberReservation {
  id?: string;

  /**
   * An ISO 8901 datetime string denoting when the numbers reservation was created.
   */
  created_at?: string;

  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  phone_numbers?: Array<ReservedPhoneNumber>;

  record_type?: string;

  /**
   * The status of the entire reservation.
   */
  status?: 'pending' | 'success' | 'failure';

  /**
   * An ISO 8901 datetime string for when the number reservation was updated.
   */
  updated_at?: string;
}

export interface ReservedPhoneNumber {
  id?: string;

  /**
   * An ISO 8901 datetime string denoting when the individual number reservation was
   * created.
   */
  created_at?: string;

  /**
   * An ISO 8901 datetime string for when the individual number reservation is going
   * to expire
   */
  expired_at?: string;

  phone_number?: string;

  record_type?: string;

  /**
   * The status of the phone number's reservation.
   */
  status?: 'pending' | 'success' | 'failure';

  /**
   * An ISO 8901 datetime string for when the the individual number reservation was
   * updated.
   */
  updated_at?: string;
}

export interface NumberReservationCreateResponse {
  data?: NumberReservation;
}

export interface NumberReservationRetrieveResponse {
  data?: NumberReservation;
}

export interface NumberReservationListResponse {
  data?: Array<NumberReservation>;

  meta?: AuthenticationProvidersAPI.PaginationMeta;
}

export interface NumberReservationCreateParams {
  /**
   * A customer reference string for customer look ups.
   */
  customer_reference?: string;

  phone_numbers?: Array<ReservedPhoneNumber>;
}

export interface NumberReservationListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[created_at], filter[phone_numbers.phone_number],
   * filter[customer_reference]
   */
  filter?: NumberReservationListParams.Filter;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: NumberReservationListParams.Page;
}

export namespace NumberReservationListParams {
  /**
   * Consolidated filter parameter (deepObject style). Originally: filter[status],
   * filter[created_at], filter[phone_numbers.phone_number],
   * filter[customer_reference]
   */
  export interface Filter {
    /**
     * Filter number reservations by date range.
     */
    created_at?: Filter.CreatedAt;

    /**
     * Filter number reservations via the customer reference set.
     */
    customer_reference?: string;

    /**
     * Filter number reservations having these phone numbers.
     */
    'phone_numbers.phone_number'?: string;

    /**
     * Filter number reservations by status.
     */
    status?: string;
  }

  export namespace Filter {
    /**
     * Filter number reservations by date range.
     */
    export interface CreatedAt {
      /**
       * Filter number reservations later than this value.
       */
      gt?: string;

      /**
       * Filter number reservations earlier than this value.
       */
      lt?: string;
    }
  }

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    /**
     * The page number to load
     */
    number?: number;

    /**
     * The size of the page
     */
    size?: number;
  }
}

NumberReservations.Actions = Actions;

export declare namespace NumberReservations {
  export {
    type NumberReservation as NumberReservation,
    type ReservedPhoneNumber as ReservedPhoneNumber,
    type NumberReservationCreateResponse as NumberReservationCreateResponse,
    type NumberReservationRetrieveResponse as NumberReservationRetrieveResponse,
    type NumberReservationListResponse as NumberReservationListResponse,
    type NumberReservationCreateParams as NumberReservationCreateParams,
    type NumberReservationListParams as NumberReservationListParams,
  };

  export { Actions as Actions, type ActionExtendResponse as ActionExtendResponse };
}
