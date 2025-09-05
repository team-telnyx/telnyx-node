// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PortingOrdersAPI from './porting-orders';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Activate each number in a porting order asynchronously. This operation is
   * limited to US FastPort orders only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.portingOrders.actions.activate(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  activate(id: string, options?: RequestOptions): APIPromise<ActionActivateResponse> {
    return this._client.post(path`/porting_orders/${id}/actions/activate`, options);
  }

  /**
   * Cancel a porting order
   *
   * @example
   * ```ts
   * const response = await client.portingOrders.actions.cancel(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  cancel(id: string, options?: RequestOptions): APIPromise<ActionCancelResponse> {
    return this._client.post(path`/porting_orders/${id}/actions/cancel`, options);
  }

  /**
   * Confirm and submit your porting order.
   *
   * @example
   * ```ts
   * const response = await client.portingOrders.actions.confirm(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  confirm(id: string, options?: RequestOptions): APIPromise<ActionConfirmResponse> {
    return this._client.post(path`/porting_orders/${id}/actions/confirm`, options);
  }

  /**
   * Creates a sharing token for a porting order. The token can be used to share the
   * porting order with non-Telnyx users.
   *
   * @example
   * ```ts
   * const response = await client.portingOrders.actions.share(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  share(id: string, body: ActionShareParams, options?: RequestOptions): APIPromise<ActionShareResponse> {
    return this._client.post(path`/porting_orders/${id}/actions/share`, { body, ...options });
  }
}

export interface ActionActivateResponse {
  data?: PortingOrdersAPI.PortingOrdersActivationJob;
}

export interface ActionCancelResponse {
  data?: PortingOrdersAPI.PortingOrder;

  meta?: ActionCancelResponse.Meta;
}

export namespace ActionCancelResponse {
  export interface Meta {
    /**
     * Link to list all phone numbers
     */
    phone_numbers_url?: string;
  }
}

export interface ActionConfirmResponse {
  data?: PortingOrdersAPI.PortingOrder;

  meta?: ActionConfirmResponse.Meta;
}

export namespace ActionConfirmResponse {
  export interface Meta {
    /**
     * Link to list all phone numbers
     */
    phone_numbers_url?: string;
  }
}

export interface ActionShareResponse {
  data?: ActionShareResponse.Data;
}

export namespace ActionShareResponse {
  export interface Data {
    /**
     * Uniquely identifies this sharing token
     */
    id?: string;

    /**
     * A signed JWT token that can be used to access the shared resource
     */
    token?: string;

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    created_at?: string;

    /**
     * ISO 8601 formatted date indicating when the sharing token expires.
     */
    expires_at?: string;

    /**
     * The number of seconds until the sharing token expires
     */
    expires_in_seconds?: number;

    /**
     * The permissions granted to the sharing token
     */
    permissions?: Array<'porting_order.document.read' | 'porting_order.document.update'>;

    /**
     * Identifies the porting order resource being shared
     */
    porting_order_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;
  }
}

export interface ActionShareParams {
  /**
   * The number of seconds the token will be valid for
   */
  expires_in_seconds?: number;

  /**
   * The permissions the token will have
   */
  permissions?: 'porting_order.document.read' | 'porting_order.document.update';
}

export declare namespace Actions {
  export {
    type ActionActivateResponse as ActionActivateResponse,
    type ActionCancelResponse as ActionCancelResponse,
    type ActionConfirmResponse as ActionConfirmResponse,
    type ActionShareResponse as ActionShareResponse,
    type ActionShareParams as ActionShareParams,
  };
}
