// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class SimCardOrderPreview extends APIResource {
  /**
   * Preview SIM card order purchases.
   *
   * @example
   * ```ts
   * const response = await client.simCardOrderPreview.preview({
   *   address_id: '1293384261075731499',
   *   quantity: 21,
   * });
   * ```
   */
  preview(
    body: SimCardOrderPreviewPreviewParams,
    options?: RequestOptions,
  ): APIPromise<SimCardOrderPreviewPreviewResponse> {
    return this._client.post('/sim_card_order_preview', { body, ...options });
  }
}

export interface SimCardOrderPreviewPreviewResponse {
  data?: SimCardOrderPreviewPreviewResponse.Data;
}

export namespace SimCardOrderPreviewPreviewResponse {
  export interface Data {
    /**
     * The amount of SIM cards requested in the SIM card order.
     */
    quantity?: number;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    shipping_cost?: Data.ShippingCost;

    sim_cards_cost?: Data.SimCardsCost;

    total_cost?: Data.TotalCost;
  }

  export namespace Data {
    export interface ShippingCost {
      /**
       * A string representing the cost amount.
       */
      amount?: string;

      /**
       * ISO 4217 currency string.
       */
      currency?: string;
    }

    export interface SimCardsCost {
      /**
       * A string representing the cost amount.
       */
      amount?: string;

      /**
       * ISO 4217 currency string.
       */
      currency?: string;
    }

    export interface TotalCost {
      /**
       * A string representing the cost amount.
       */
      amount?: string;

      /**
       * ISO 4217 currency string.
       */
      currency?: string;
    }
  }
}

export interface SimCardOrderPreviewPreviewParams {
  /**
   * Uniquely identifies the address for the order.
   */
  address_id: string;

  /**
   * The amount of SIM cards that the user would like to purchase in the SIM card
   * order.
   */
  quantity: number;
}

export declare namespace SimCardOrderPreview {
  export {
    type SimCardOrderPreviewPreviewResponse as SimCardOrderPreviewPreviewResponse,
    type SimCardOrderPreviewPreviewParams as SimCardOrderPreviewPreviewParams,
  };
}
