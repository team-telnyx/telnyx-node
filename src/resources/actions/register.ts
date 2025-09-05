// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Register extends APIResource {
  /**
   * Register the SIM cards associated with the provided registration codes to the
   * current user's account.<br/><br/> If <code>sim_card_group_id</code> is provided,
   * the SIM cards will be associated with that group. Otherwise, the default group
   * for the current user will be used.<br/><br/>
   *
   * @example
   * ```ts
   * const register = await client.actions.register.create({
   *   registration_codes: [
   *     '0000000001',
   *     '0000000002',
   *     '0000000003',
   *   ],
   * });
   * ```
   */
  create(body: RegisterCreateParams, options?: RequestOptions): APIPromise<RegisterCreateResponse> {
    return this._client.post('/actions/register/sim_cards', { body, ...options });
  }
}

export interface RegisterCreateResponse {
  /**
   * Successfully registered SIM cards.
   */
  data?: Array<Shared.SimpleSimCard>;

  errors?: Array<RegisterCreateResponse.Error>;
}

export namespace RegisterCreateResponse {
  export interface Error {
    code: string;

    title: string;

    detail?: string;

    meta?: { [key: string]: unknown };

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      /**
       * Indicates which query parameter caused the error.
       */
      parameter?: string;

      /**
       * JSON pointer (RFC6901) to the offending entity.
       */
      pointer?: string;
    }
  }
}

export interface RegisterCreateParams {
  registration_codes: Array<string>;

  /**
   * The group SIMCardGroup identification. This attribute can be <code>null</code>
   * when it's present in an associated resource.
   */
  sim_card_group_id?: string;

  /**
   * Status on which the SIM card will be set after being successful registered.
   */
  status?: 'enabled' | 'disabled' | 'standby';

  /**
   * Searchable tags associated with the SIM card
   */
  tags?: Array<string>;
}

export declare namespace Register {
  export {
    type RegisterCreateResponse as RegisterCreateResponse,
    type RegisterCreateParams as RegisterCreateParams,
  };
}
