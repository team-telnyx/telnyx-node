// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage Whatsapp phone numbers
 */
export class CallingRouting extends APIResource {
  /**
   * Retrieve the routing connection currently stored for a BYON (Bring Your Own
   * Number) phone number: the connection that inbound WhatsApp calls to the number
   * are delivered to.
   *
   * Use it to check the result of
   * `PATCH /whatsapp/phone_numbers/{id}/calling_routing`. A read made immediately
   * after an update can still return the previous value.
   *
   * Sub-users need read permission on connections.
   *
   * @example
   * ```ts
   * const callingRoutings =
   *   await client.whatsapp.phoneNumbers.callingRouting.list(
   *     '+13125550100',
   *   );
   * ```
   */
  list(id: string, options?: RequestOptions): APIPromise<CallingRoutingListResponse> {
    return this._client.get(path`/whatsapp/phone_numbers/${id}/calling_routing`, options);
  }

  /**
   * Set or clear the connection that inbound WhatsApp calls to a BYON (Bring Your
   * Own Number) phone number are delivered to.
   *
   * The update is processed asynchronously. A `202` response means the request was
   * accepted, not that the routing changed. Check the result with
   * `GET /whatsapp/phone_numbers/{id}/calling_routing`, which can return the
   * previous value immediately after an update. An update for a number that is not a
   * WhatsApp Calling number in the account returns 404.
   *
   * The connection must belong to the same account and must not be a WhatsApp
   * connection. Send `connection_id: null` to clear the routing; omitting
   * `connection_id` is rejected. Numbers active on Telnyx are rejected, because they
   * route through their own connection assignment.
   *
   * Sub-users need update permission on connections, and read permission to check
   * the result with `GET`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.whatsapp.phoneNumbers.callingRouting.patchAll(
   *     '+13125550100',
   *     { connection_id: '1234567890' },
   *   );
   * ```
   */
  patchAll(
    id: string,
    body: CallingRoutingPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<CallingRoutingPatchAllResponse> {
    return this._client.patch(path`/whatsapp/phone_numbers/${id}/calling_routing`, { body, ...options });
  }
}

export interface WhatsappCallingRoutingData {
  /**
   * ID of the routing connection, or `null` when none is set.
   */
  connection_id: string | null;

  /**
   * Phone number in E.164 format, with a leading `+`.
   */
  phone_number: string;

  /**
   * Identifies the type of the resource.
   */
  record_type: 'whatsapp_calling_routing';
}

export interface CallingRoutingListResponse {
  data: WhatsappCallingRoutingData;
}

export interface CallingRoutingPatchAllResponse {
  data: WhatsappCallingRoutingData;
}

export interface CallingRoutingPatchAllParams {
  /**
   * ID of the connection to deliver inbound WhatsApp calls to: a positive integer up
   * to 9223372036854775807, sent as a decimal string or an integer. Send a string to
   * keep large IDs exact. Non-null values are returned as strings. `null` clears the
   * routing.
   */
  connection_id: string | number | null;
}

export declare namespace CallingRouting {
  export {
    type WhatsappCallingRoutingData as WhatsappCallingRoutingData,
    type CallingRoutingListResponse as CallingRoutingListResponse,
    type CallingRoutingPatchAllResponse as CallingRoutingPatchAllResponse,
    type CallingRoutingPatchAllParams as CallingRoutingPatchAllParams,
  };
}
