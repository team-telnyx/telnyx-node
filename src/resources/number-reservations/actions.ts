// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NumberReservationsAPI from './number-reservations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Extends reservation expiry time on all phone numbers.
   *
   * @example
   * ```ts
   * const response =
   *   await client.numberReservations.actions.extend(
   *     'number_reservation_id',
   *   );
   * ```
   */
  extend(numberReservationID: string, options?: RequestOptions): APIPromise<ActionExtendResponse> {
    return this._client.post(path`/number_reservations/${numberReservationID}/actions/extend`, options);
  }
}

export interface ActionExtendResponse {
  data?: NumberReservationsAPI.NumberReservation;
}

export declare namespace Actions {
  export { type ActionExtendResponse as ActionExtendResponse };
}
