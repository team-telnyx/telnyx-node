// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import * as RcsAPI from './rcs';
import { RcGenerateDeeplinkParams, RcGenerateDeeplinkResponse, Rcs } from './rcs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  rcs: RcsAPI.Rcs = new RcsAPI.Rcs(this._client);

  /**
   * Note: This API endpoint can only retrieve messages that are no older than 10
   * days since their creation. If you require messages older than this, please
   * generate an
   * [MDR report.](https://developers.telnyx.com/api/v1/mission-control/add-mdr-request)
   *
   * @example
   * ```ts
   * const message = await client.messages.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessageRetrieveResponse> {
    return this._client.get(path`/messages/${id}`, options);
  }

  /**
   * Cancel a scheduled message that has not yet been sent. Only messages with
   * `status=scheduled` and `send_at` more than a minute from now can be cancelled.
   *
   * @example
   * ```ts
   * const response = await client.messages.cancelScheduled(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  cancelScheduled(id: string, options?: RequestOptions): APIPromise<MessageCancelScheduledResponse> {
    return this._client.delete(path`/messages/${id}`, options);
  }

  /**
   * Schedule a message with a Phone Number, Alphanumeric Sender ID, Short Code or
   * Number Pool.
   *
   * This endpoint allows you to schedule a message with any messaging resource.
   * Current messaging resources include: long-code, short-code, number-pool, and
   * alphanumeric-sender-id.
   *
   * @example
   * ```ts
   * const response = await client.messages.schedule({
   *   to: '+18445550001',
   * });
   * ```
   */
  schedule(body: MessageScheduleParams, options?: RequestOptions): APIPromise<MessageScheduleResponse> {
    return this._client.post('/messages/schedule', { body, ...options });
  }

  /**
   * Send a message with a Phone Number, Alphanumeric Sender ID, Short Code or Number
   * Pool.
   *
   * This endpoint allows you to send a message with any messaging resource. Current
   * messaging resources include: long-code, short-code, number-pool, and
   * alphanumeric-sender-id.
   *
   * @example
   * ```ts
   * const response = await client.messages.send({
   *   to: '+18445550001',
   * });
   * ```
   */
  send(body: MessageSendParams, options?: RequestOptions): APIPromise<MessageSendResponse> {
    return this._client.post('/messages', { body, ...options });
  }

  /**
   * Send a group MMS message
   *
   * @example
   * ```ts
   * const response = await client.messages.sendGroupMms({
   *   from: '+13125551234',
   *   to: ['+18655551234', '+14155551234'],
   * });
   * ```
   */
  sendGroupMms(
    body: MessageSendGroupMmsParams,
    options?: RequestOptions,
  ): APIPromise<MessageSendGroupMmsResponse> {
    return this._client.post('/messages/group_mms', { body, ...options });
  }

  /**
   * Send a long code message
   *
   * @example
   * ```ts
   * const response = await client.messages.sendLongCode({
   *   from: '+18445550001',
   *   to: '+13125550002',
   * });
   * ```
   */
  sendLongCode(
    body: MessageSendLongCodeParams,
    options?: RequestOptions,
  ): APIPromise<MessageSendLongCodeResponse> {
    return this._client.post('/messages/long_code', { body, ...options });
  }

  /**
   * Send a message using number pool
   *
   * @example
   * ```ts
   * const response = await client.messages.sendNumberPool({
   *   messaging_profile_id:
   *     'abc85f64-5717-4562-b3fc-2c9600000000',
   *   to: 'to',
   * });
   * ```
   */
  sendNumberPool(
    body: MessageSendNumberPoolParams,
    options?: RequestOptions,
  ): APIPromise<MessageSendNumberPoolResponse> {
    return this._client.post('/messages/number_pool', { body, ...options });
  }

  /**
   * Send a short code message
   *
   * @example
   * ```ts
   * const response = await client.messages.sendShortCode({
   *   from: '+18445550001',
   *   to: '+18445550001',
   * });
   * ```
   */
  sendShortCode(
    body: MessageSendShortCodeParams,
    options?: RequestOptions,
  ): APIPromise<MessageSendShortCodeResponse> {
    return this._client.post('/messages/short_code', { body, ...options });
  }
}

export interface MessagingError {
  code: string;

  title: string;

  detail?: string;

  meta?: unknown;

  source?: MessagingError.Source;
}

export namespace MessagingError {
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

export interface OutboundMessagePayload {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the message was finalized.
   */
  completed_at?: string;

  cost?: OutboundMessagePayload.Cost | null;

  /**
   * Detailed breakdown of the message cost components.
   */
  cost_breakdown?: OutboundMessagePayload.CostBreakdown | null;

  /**
   * The direction of the message. Inbound messages are sent to you whereas outbound
   * messages are sent from you.
   */
  direction?: 'outbound';

  /**
   * Encoding scheme used for the message body.
   */
  encoding?: string;

  /**
   * These errors may point at addressees when referring to unsuccessful/unconfirmed
   * delivery statuses.
   */
  errors?: Array<MessagingError>;

  from?: OutboundMessagePayload.From;

  media?: Array<OutboundMessagePayload.Media>;

  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id?: string;

  /**
   * The id of the organization the messaging profile belongs to.
   */
  organization_id?: string;

  /**
   * Number of parts into which the message's body must be split.
   */
  parts?: number;

  /**
   * ISO 8601 formatted date indicating when the message request was received.
   */
  received_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'message';

  /**
   * ISO 8601 formatted date indicating when the message was sent.
   */
  sent_at?: string;

  /**
   * Subject of multimedia message
   */
  subject?: string | null;

  /**
   * Tags associated with the resource.
   */
  tags?: Array<string>;

  /**
   * Indicates whether the TCR campaign is billable.
   */
  tcr_campaign_billable?: boolean;

  /**
   * The Campaign Registry (TCR) campaign ID associated with the message.
   */
  tcr_campaign_id?: string | null;

  /**
   * The registration status of the TCR campaign.
   */
  tcr_campaign_registered?: string | null;

  /**
   * Message body (i.e., content) as a non-empty string.
   *
   * **Required for SMS**
   */
  text?: string;

  to?: Array<OutboundMessagePayload.To>;

  /**
   * The type of message.
   */
  type?: 'SMS' | 'MMS';

  /**
   * Message must be out of the queue by this time or else it will be discarded and
   * marked as 'sending_failed'. Once the message moves out of the queue, this field
   * will be nulled
   */
  valid_until?: string | null;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string | null;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string | null;
}

export namespace OutboundMessagePayload {
  export interface Cost {
    /**
     * The amount deducted from your account.
     */
    amount?: string;

    /**
     * The ISO 4217 currency identifier.
     */
    currency?: string;
  }

  /**
   * Detailed breakdown of the message cost components.
   */
  export interface CostBreakdown {
    carrier_fee?: CostBreakdown.CarrierFee;

    rate?: CostBreakdown.Rate;
  }

  export namespace CostBreakdown {
    export interface CarrierFee {
      /**
       * The carrier fee amount.
       */
      amount?: string;

      /**
       * The ISO 4217 currency identifier.
       */
      currency?: string;
    }

    export interface Rate {
      /**
       * The rate amount applied.
       */
      amount?: string;

      /**
       * The ISO 4217 currency identifier.
       */
      currency?: string;
    }
  }

  export interface From {
    /**
     * The carrier of the receiver.
     */
    carrier?: string;

    /**
     * The line-type of the receiver.
     */
    line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '';

    /**
     * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
     * code).
     */
    phone_number?: string;
  }

  export interface Media {
    /**
     * The MIME type of the requested media.
     */
    content_type?: string | null;

    /**
     * The SHA256 hash of the requested media.
     */
    sha256?: string | null;

    /**
     * The size of the requested media.
     */
    size?: number | null;

    /**
     * The url of the media requested to be sent.
     */
    url?: string;
  }

  export interface To {
    /**
     * The carrier of the receiver.
     */
    carrier?: string;

    /**
     * The line-type of the receiver.
     */
    line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '';

    /**
     * Receiving address (+E.164 formatted phone number or short code).
     */
    phone_number?: string;

    /**
     * The delivery status of the message.
     */
    status?:
      | 'queued'
      | 'sending'
      | 'sent'
      | 'expired'
      | 'sending_failed'
      | 'delivery_unconfirmed'
      | 'delivered'
      | 'delivery_failed';
  }
}

export interface MessageRetrieveResponse {
  data?: OutboundMessagePayload | MessageRetrieveResponse.InboundMessagePayload;
}

export namespace MessageRetrieveResponse {
  export interface InboundMessagePayload {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    cc?: Array<InboundMessagePayload.Cc>;

    /**
     * Not used for inbound messages.
     */
    completed_at?: string | null;

    cost?: InboundMessagePayload.Cost | null;

    /**
     * Detailed breakdown of the message cost components.
     */
    cost_breakdown?: InboundMessagePayload.CostBreakdown | null;

    /**
     * The direction of the message. Inbound messages are sent to you whereas outbound
     * messages are sent from you.
     */
    direction?: 'inbound';

    /**
     * Encoding scheme used for the message body.
     */
    encoding?: string;

    /**
     * These errors may point at addressees when referring to unsuccessful/unconfirmed
     * delivery statuses.
     */
    errors?: Array<MessagesAPI.MessagingError>;

    from?: InboundMessagePayload.From;

    media?: Array<InboundMessagePayload.Media>;

    /**
     * Unique identifier for a messaging profile.
     */
    messaging_profile_id?: string;

    /**
     * Number of parts into which the message's body must be split.
     */
    parts?: number;

    /**
     * ISO 8601 formatted date indicating when the message request was received.
     */
    received_at?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'message';

    /**
     * Not used for inbound messages.
     */
    sent_at?: string | null;

    /**
     * Tags associated with the resource.
     */
    tags?: Array<string>;

    /**
     * Indicates whether the TCR campaign is billable.
     */
    tcr_campaign_billable?: boolean;

    /**
     * The Campaign Registry (TCR) campaign ID associated with the message.
     */
    tcr_campaign_id?: string | null;

    /**
     * The registration status of the TCR campaign.
     */
    tcr_campaign_registered?: string | null;

    /**
     * Message body (i.e., content) as a non-empty string.
     *
     * **Required for SMS**
     */
    text?: string;

    to?: Array<InboundMessagePayload.To>;

    /**
     * The type of message. This value can be either 'sms' or 'mms'.
     */
    type?: 'SMS' | 'MMS';

    /**
     * Not used for inbound messages.
     */
    valid_until?: string | null;

    /**
     * The failover URL where webhooks related to this message will be sent if sending
     * to the primary URL fails.
     */
    webhook_failover_url?: string | null;

    /**
     * The URL where webhooks related to this message will be sent.
     */
    webhook_url?: string | null;
  }

  export namespace InboundMessagePayload {
    export interface Cc {
      /**
       * The carrier of the receiver.
       */
      carrier?: string;

      /**
       * The line-type of the receiver.
       */
      line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '';

      /**
       * Receiving address (+E.164 formatted phone number or short code).
       */
      phone_number?: string;

      status?:
        | 'queued'
        | 'sending'
        | 'sent'
        | 'delivered'
        | 'sending_failed'
        | 'delivery_failed'
        | 'delivery_unconfirmed';
    }

    export interface Cost {
      /**
       * The amount deducted from your account.
       */
      amount?: string;

      /**
       * The ISO 4217 currency identifier.
       */
      currency?: string;
    }

    /**
     * Detailed breakdown of the message cost components.
     */
    export interface CostBreakdown {
      carrier_fee?: CostBreakdown.CarrierFee;

      rate?: CostBreakdown.Rate;
    }

    export namespace CostBreakdown {
      export interface CarrierFee {
        /**
         * The carrier fee amount.
         */
        amount?: string;

        /**
         * The ISO 4217 currency identifier.
         */
        currency?: string;
      }

      export interface Rate {
        /**
         * The rate amount applied.
         */
        amount?: string;

        /**
         * The ISO 4217 currency identifier.
         */
        currency?: string;
      }
    }

    export interface From {
      /**
       * The carrier of the sender.
       */
      carrier?: string;

      /**
       * The line-type of the sender.
       */
      line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '';

      /**
       * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
       * code).
       */
      phone_number?: string;

      status?: 'received' | 'delivered';
    }

    export interface Media {
      /**
       * The MIME type of the requested media.
       */
      content_type?: string;

      /**
       * The SHA256 hash of the requested media.
       */
      hash_sha256?: string;

      /**
       * The size of the requested media.
       */
      size?: number;

      /**
       * The url of the media requested to be sent.
       */
      url?: string;
    }

    export interface To {
      /**
       * The carrier of the receiver.
       */
      carrier?: string;

      /**
       * The line-type of the receiver.
       */
      line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '';

      /**
       * Receiving address (+E.164 formatted phone number or short code).
       */
      phone_number?: string;

      status?:
        | 'queued'
        | 'sending'
        | 'sent'
        | 'delivered'
        | 'sending_failed'
        | 'delivery_failed'
        | 'delivery_unconfirmed'
        | 'webhook_delivered';
    }
  }
}

export interface MessageCancelScheduledResponse {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * ISO 8601 formatted date indicating when the message was finalized.
   */
  completed_at?: string;

  cost?: MessageCancelScheduledResponse.Cost | null;

  /**
   * Detailed breakdown of the message cost components.
   */
  cost_breakdown?: MessageCancelScheduledResponse.CostBreakdown | null;

  /**
   * The direction of the message. Inbound messages are sent to you whereas outbound
   * messages are sent from you.
   */
  direction?: 'outbound';

  /**
   * Encoding scheme used for the message body.
   */
  encoding?: string;

  /**
   * These errors may point at addressees when referring to unsuccessful/unconfirmed
   * delivery statuses.
   */
  errors?: Array<MessagingError>;

  from?: MessageCancelScheduledResponse.From;

  media?: Array<MessageCancelScheduledResponse.Media>;

  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id?: string;

  /**
   * The id of the organization the messaging profile belongs to.
   */
  organization_id?: string;

  /**
   * Number of parts into which the message's body must be split.
   */
  parts?: number;

  /**
   * ISO 8601 formatted date indicating when the message request was received.
   */
  received_at?: string;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'message';

  /**
   * ISO 8601 formatted date indicating when the message was sent.
   */
  sent_at?: string;

  /**
   * Subject of multimedia message
   */
  subject?: string | null;

  /**
   * Tags associated with the resource.
   */
  tags?: Array<string>;

  /**
   * Indicates whether the TCR campaign is billable.
   */
  tcr_campaign_billable?: boolean;

  /**
   * The Campaign Registry (TCR) campaign ID associated with the message.
   */
  tcr_campaign_id?: string | null;

  /**
   * The registration status of the TCR campaign.
   */
  tcr_campaign_registered?: string | null;

  /**
   * Message body (i.e., content) as a non-empty string.
   *
   * **Required for SMS**
   */
  text?: string;

  to?: Array<MessageCancelScheduledResponse.To>;

  /**
   * The type of message.
   */
  type?: 'SMS' | 'MMS';

  /**
   * Message must be out of the queue by this time or else it will be discarded and
   * marked as 'sending_failed'. Once the message moves out of the queue, this field
   * will be nulled
   */
  valid_until?: string | null;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string | null;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string | null;
}

export namespace MessageCancelScheduledResponse {
  export interface Cost {
    /**
     * The amount deducted from your account.
     */
    amount?: string;

    /**
     * The ISO 4217 currency identifier.
     */
    currency?: string;
  }

  /**
   * Detailed breakdown of the message cost components.
   */
  export interface CostBreakdown {
    carrier_fee?: CostBreakdown.CarrierFee;

    rate?: CostBreakdown.Rate;
  }

  export namespace CostBreakdown {
    export interface CarrierFee {
      /**
       * The carrier fee amount.
       */
      amount?: string;

      /**
       * The ISO 4217 currency identifier.
       */
      currency?: string;
    }

    export interface Rate {
      /**
       * The rate amount applied.
       */
      amount?: string;

      /**
       * The ISO 4217 currency identifier.
       */
      currency?: string;
    }
  }

  export interface From {
    /**
     * The carrier of the receiver.
     */
    carrier?: string;

    /**
     * The line-type of the receiver.
     */
    line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '';

    /**
     * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
     * code).
     */
    phone_number?: string;
  }

  export interface Media {
    /**
     * The MIME type of the requested media.
     */
    content_type?: string | null;

    /**
     * The SHA256 hash of the requested media.
     */
    sha256?: string | null;

    /**
     * The size of the requested media.
     */
    size?: number | null;

    /**
     * The url of the media requested to be sent.
     */
    url?: string;
  }

  export interface To {
    /**
     * The carrier of the receiver.
     */
    carrier?: string;

    /**
     * The line-type of the receiver.
     */
    line_type?: 'Wireline' | 'Wireless' | 'VoWiFi' | 'VoIP' | 'Pre-Paid Wireless' | '';

    /**
     * Receiving address (+E.164 formatted phone number or short code).
     */
    phone_number?: string;

    /**
     * The delivery status of the message.
     */
    status?:
      | 'scheduled'
      | 'queued'
      | 'sending'
      | 'sent'
      | 'cancelled'
      | 'expired'
      | 'sending_failed'
      | 'delivery_unconfirmed'
      | 'delivered'
      | 'delivery_failed';
  }
}

export interface MessageScheduleResponse {
  data?: OutboundMessagePayload;
}

export interface MessageSendResponse {
  data?: OutboundMessagePayload;
}

export interface MessageSendGroupMmsResponse {
  data?: OutboundMessagePayload;
}

export interface MessageSendLongCodeResponse {
  data?: OutboundMessagePayload;
}

export interface MessageSendNumberPoolResponse {
  data?: OutboundMessagePayload;
}

export interface MessageSendShortCodeResponse {
  data?: OutboundMessagePayload;
}

export interface MessageScheduleParams {
  /**
   * Receiving address (+E.164 formatted phone number or short code).
   */
  to: string;

  /**
   * Automatically detect if an SMS message is unusually long and exceeds a
   * recommended limit of message parts.
   */
  auto_detect?: boolean;

  /**
   * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
   * code).
   *
   * **Required if sending with a phone number, short code, or alphanumeric sender
   * ID.**
   */
  from?: string;

  /**
   * A list of media URLs. The total media size must be less than 1 MB.
   *
   * **Required for MMS**
   */
  media_urls?: Array<string>;

  /**
   * Unique identifier for a messaging profile.
   *
   * **Required if sending via number pool or with an alphanumeric sender ID.**
   */
  messaging_profile_id?: string;

  /**
   * ISO 8601 formatted date indicating when to send the message - accurate up till a
   * minute.
   */
  send_at?: string;

  /**
   * Subject of multimedia message
   */
  subject?: string;

  /**
   * Message body (i.e., content) as a non-empty string.
   *
   * **Required for SMS**
   */
  text?: string;

  /**
   * The protocol for sending the message, either SMS or MMS.
   */
  type?: 'SMS' | 'MMS';

  /**
   * If the profile this number is associated with has webhooks, use them for
   * delivery notifications. If webhooks are also specified on the message itself,
   * they will be attempted first, then those on the profile.
   */
  use_profile_webhooks?: boolean;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export interface MessageSendParams {
  /**
   * Receiving address (+E.164 formatted phone number or short code).
   */
  to: string;

  /**
   * Automatically detect if an SMS message is unusually long and exceeds a
   * recommended limit of message parts.
   */
  auto_detect?: boolean;

  /**
   * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
   * code).
   *
   * **Required if sending with a phone number, short code, or alphanumeric sender
   * ID.**
   */
  from?: string;

  /**
   * A list of media URLs. The total media size must be less than 1 MB.
   *
   * **Required for MMS**
   */
  media_urls?: Array<string>;

  /**
   * Unique identifier for a messaging profile.
   *
   * **Required if sending via number pool or with an alphanumeric sender ID.**
   */
  messaging_profile_id?: string;

  /**
   * ISO 8601 formatted date indicating when to send the message - accurate up till a
   * minute.
   */
  send_at?: string | null;

  /**
   * Subject of multimedia message
   */
  subject?: string;

  /**
   * Message body (i.e., content) as a non-empty string.
   *
   * **Required for SMS**
   */
  text?: string;

  /**
   * The protocol for sending the message, either SMS or MMS.
   */
  type?: 'SMS' | 'MMS';

  /**
   * If the profile this number is associated with has webhooks, use them for
   * delivery notifications. If webhooks are also specified on the message itself,
   * they will be attempted first, then those on the profile.
   */
  use_profile_webhooks?: boolean;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export interface MessageSendGroupMmsParams {
  /**
   * Phone number, in +E.164 format, used to send the message.
   */
  from: string;

  /**
   * A list of destinations. No more than 8 destinations are allowed.
   */
  to: Array<string>;

  /**
   * A list of media URLs. The total media size must be less than 1 MB.
   */
  media_urls?: Array<string>;

  /**
   * Subject of multimedia message
   */
  subject?: string;

  /**
   * Message body (i.e., content) as a non-empty string.
   */
  text?: string;

  /**
   * If the profile this number is associated with has webhooks, use them for
   * delivery notifications. If webhooks are also specified on the message itself,
   * they will be attempted first, then those on the profile.
   */
  use_profile_webhooks?: boolean;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export interface MessageSendLongCodeParams {
  /**
   * Phone number, in +E.164 format, used to send the message.
   */
  from: string;

  /**
   * Receiving address (+E.164 formatted phone number or short code).
   */
  to: string;

  /**
   * Automatically detect if an SMS message is unusually long and exceeds a
   * recommended limit of message parts.
   */
  auto_detect?: boolean;

  /**
   * A list of media URLs. The total media size must be less than 1 MB.
   *
   * **Required for MMS**
   */
  media_urls?: Array<string>;

  /**
   * Subject of multimedia message
   */
  subject?: string;

  /**
   * Message body (i.e., content) as a non-empty string.
   *
   * **Required for SMS**
   */
  text?: string;

  /**
   * The protocol for sending the message, either SMS or MMS.
   */
  type?: 'SMS' | 'MMS';

  /**
   * If the profile this number is associated with has webhooks, use them for
   * delivery notifications. If webhooks are also specified on the message itself,
   * they will be attempted first, then those on the profile.
   */
  use_profile_webhooks?: boolean;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export interface MessageSendNumberPoolParams {
  /**
   * Unique identifier for a messaging profile.
   */
  messaging_profile_id: string;

  /**
   * Receiving address (+E.164 formatted phone number or short code).
   */
  to: string;

  /**
   * Automatically detect if an SMS message is unusually long and exceeds a
   * recommended limit of message parts.
   */
  auto_detect?: boolean;

  /**
   * A list of media URLs. The total media size must be less than 1 MB.
   *
   * **Required for MMS**
   */
  media_urls?: Array<string>;

  /**
   * Subject of multimedia message
   */
  subject?: string;

  /**
   * Message body (i.e., content) as a non-empty string.
   *
   * **Required for SMS**
   */
  text?: string;

  /**
   * The protocol for sending the message, either SMS or MMS.
   */
  type?: 'SMS' | 'MMS';

  /**
   * If the profile this number is associated with has webhooks, use them for
   * delivery notifications. If webhooks are also specified on the message itself,
   * they will be attempted first, then those on the profile.
   */
  use_profile_webhooks?: boolean;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export interface MessageSendShortCodeParams {
  /**
   * Phone number, in +E.164 format, used to send the message.
   */
  from: string;

  /**
   * Receiving address (+E.164 formatted phone number or short code).
   */
  to: string;

  /**
   * Automatically detect if an SMS message is unusually long and exceeds a
   * recommended limit of message parts.
   */
  auto_detect?: boolean;

  /**
   * A list of media URLs. The total media size must be less than 1 MB.
   *
   * **Required for MMS**
   */
  media_urls?: Array<string>;

  /**
   * Subject of multimedia message
   */
  subject?: string;

  /**
   * Message body (i.e., content) as a non-empty string.
   *
   * **Required for SMS**
   */
  text?: string;

  /**
   * The protocol for sending the message, either SMS or MMS.
   */
  type?: 'SMS' | 'MMS';

  /**
   * If the profile this number is associated with has webhooks, use them for
   * delivery notifications. If webhooks are also specified on the message itself,
   * they will be attempted first, then those on the profile.
   */
  use_profile_webhooks?: boolean;

  /**
   * The failover URL where webhooks related to this message will be sent if sending
   * to the primary URL fails.
   */
  webhook_failover_url?: string;

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

Messages.Rcs = Rcs;

export declare namespace Messages {
  export {
    type MessagingError as MessagingError,
    type OutboundMessagePayload as OutboundMessagePayload,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageCancelScheduledResponse as MessageCancelScheduledResponse,
    type MessageScheduleResponse as MessageScheduleResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageSendGroupMmsResponse as MessageSendGroupMmsResponse,
    type MessageSendLongCodeResponse as MessageSendLongCodeResponse,
    type MessageSendNumberPoolResponse as MessageSendNumberPoolResponse,
    type MessageSendShortCodeResponse as MessageSendShortCodeResponse,
    type MessageScheduleParams as MessageScheduleParams,
    type MessageSendParams as MessageSendParams,
    type MessageSendGroupMmsParams as MessageSendGroupMmsParams,
    type MessageSendLongCodeParams as MessageSendLongCodeParams,
    type MessageSendNumberPoolParams as MessageSendNumberPoolParams,
    type MessageSendShortCodeParams as MessageSendShortCodeParams,
  };

  export {
    Rcs as Rcs,
    type RcGenerateDeeplinkResponse as RcGenerateDeeplinkResponse,
    type RcGenerateDeeplinkParams as RcGenerateDeeplinkParams,
  };
}
