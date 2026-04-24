// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import * as ActionsAPI from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

/**
 * SIM Cards operations
 */
export class Purchase extends APIResource {
  /**
   * Purchases and registers the specified amount of eSIMs to the current user's
   * account.<br/><br/> If <code>sim_card_group_id</code> is provided, the eSIMs will
   * be associated with that group. Otherwise, the default group for the current user
   * will be used.<br/><br/>
   *
   * @example
   * ```ts
   * const purchase = await client.actions.purchase.create({
   *   amount: 10,
   * });
   * ```
   */
  create(body: PurchaseCreateParams, options?: RequestOptions): APIPromise<PurchaseCreateResponse> {
    return this._client.post('/actions/purchase/esims', { body, ...options });
  }
}

export interface PurchaseCreateResponse {
  /**
   * Successfully registered SIM cards.
   */
  data?: Array<Shared.SimpleSimCard>;

  errors?: Array<ActionsAPI.WirelessError>;
}

export interface PurchaseCreateParams {
  /**
   * The amount of eSIMs to be purchased.
   */
  amount: number;

  /**
   * Type of product to be purchased, specify "whitelabel" to use a custom SPN
   */
  product?: string;

  /**
   * The group SIMCardGroup identification. This attribute can be <code>null</code>
   * when it's present in an associated resource.
   */
  sim_card_group_id?: string;

  /**
   * Status on which the SIM cards will be set after being successfully registered.
   */
  status?: 'enabled' | 'disabled' | 'standby';

  /**
   * Searchable tags associated with the SIM cards
   */
  tags?: Array<string>;

  /**
   * Service Provider Name (SPN) for the Whitelabel eSIM product. It will be
   * displayed as the mobile service name by operating systems of smartphones. This
   * parameter must only contain letters, numbers and whitespaces.
   */
  whitelabel_name?: string;
}

export declare namespace Purchase {
  export {
    type PurchaseCreateResponse as PurchaseCreateResponse,
    type PurchaseCreateParams as PurchaseCreateParams,
  };
}
