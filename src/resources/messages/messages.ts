// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MessagesAPI from './messages';
import * as Shared from '../shared';
import * as RcsAPI from './rcs';
import {
  RcGenerateDeeplinkParams,
  RcGenerateDeeplinkResponse,
  RcSendParams,
  RcSendResponse,
  Rcs,
} from './rcs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Messages extends APIResource {
  rcs: RcsAPI.Rcs = new RcsAPI.Rcs(this._client);

  /**
   * Note: This API endpoint can only retrieve messages that are no older than 10
   * days since their creation. If you require messages older than this, please
   * generate an
   * [MDR report.](https://developers.telnyx.com/api-reference/mdr-usage-reports/create-mdr-usage-report)
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
   *   to: '+13125550002',
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

  /**
   * Send a Whatsapp message
   *
   * @example
   * ```ts
   * const response = await client.messages.sendWhatsapp({
   *   from: '+13125551234',
   *   to: '+13125551234',
   *   whatsapp_message: {},
   * });
   * ```
   */
  sendWhatsapp(
    body: MessageSendWhatsappParams,
    options?: RequestOptions,
  ): APIPromise<MessageSendWhatsappResponse> {
    return this._client.post('/messages/whatsapp', { body, ...options });
  }
}

export interface MessagingError {
  code: string;

  title: string;

  detail?: string;

  meta?: { [key: string]: unknown };

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

  cc?: Array<OutboundMessagePayload.Cc>;

  /**
   * ISO 8601 formatted date indicating when the message was finalized.
   */
  completed_at?: string | null;

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
  sent_at?: string | null;

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

export interface RcsAgentMessage {
  content_message?: RcsAgentMessage.ContentMessage;

  /**
   * RCS Event to send to the recipient
   */
  event?: RcsAgentMessage.Event;

  /**
   * Timestamp in UTC of when this message is considered expired
   */
  expire_time?: string;

  /**
   * Duration in seconds ending with 's'
   */
  ttl?: string;
}

export namespace RcsAgentMessage {
  export interface ContentMessage {
    content_info?: MessagesAPI.RcsContentInfo;

    rich_card?: ContentMessage.RichCard;

    /**
     * List of suggested actions and replies
     */
    suggestions?: Array<MessagesAPI.RcsSuggestion>;

    /**
     * Text (maximum 3072 characters)
     */
    text?: string;
  }

  export namespace ContentMessage {
    export interface RichCard {
      /**
       * Carousel of cards.
       */
      carousel_card?: RichCard.CarouselCard;

      /**
       * Standalone card
       */
      standalone_card?: RichCard.StandaloneCard;
    }

    export namespace RichCard {
      /**
       * Carousel of cards.
       */
      export interface CarouselCard {
        /**
         * The list of contents for each card in the carousel. A carousel can have a
         * minimum of 2 cards and a maximum 10 cards.
         */
        card_contents: Array<MessagesAPI.RcsCardContent>;

        /**
         * The width of the cards in the carousel.
         */
        card_width: 'CARD_WIDTH_UNSPECIFIED' | 'SMALL' | 'MEDIUM';
      }

      /**
       * Standalone card
       */
      export interface StandaloneCard {
        card_content: MessagesAPI.RcsCardContent;

        /**
         * Orientation of the card.
         */
        card_orientation: 'CARD_ORIENTATION_UNSPECIFIED' | 'HORIZONTAL' | 'VERTICAL';

        /**
         * Image preview alignment for standalone cards with horizontal layout.
         */
        thumbnail_image_alignment: 'THUMBNAIL_IMAGE_ALIGNMENT_UNSPECIFIED' | 'LEFT' | 'RIGHT';
      }
    }
  }

  /**
   * RCS Event to send to the recipient
   */
  export interface Event {
    event_type?: 'TYPE_UNSPECIFIED' | 'IS_TYPING' | 'READ';
  }
}

export interface RcsCardContent {
  /**
   * Description of the card (at most 2000 characters)
   */
  description?: string;

  /**
   * A media file within a rich card.
   */
  media?: RcsCardContent.Media;

  /**
   * List of suggestions to include in the card. Maximum 10 suggestions.
   */
  suggestions?: Array<RcsSuggestion>;

  /**
   * Title of the card (at most 200 characters)
   */
  title?: string;
}

export namespace RcsCardContent {
  /**
   * A media file within a rich card.
   */
  export interface Media {
    content_info?: MessagesAPI.RcsContentInfo;

    /**
     * The height of the media within a rich card with a vertical layout. For a
     * standalone card with horizontal layout, height is not customizable, and this
     * field is ignored.
     */
    height?: 'HEIGHT_UNSPECIFIED' | 'SHORT' | 'MEDIUM' | 'TALL';
  }
}

export interface RcsContentInfo {
  /**
   * Publicly reachable URL of the file.
   */
  file_url: string;

  /**
   * If set the URL content will not be cached.
   */
  force_refresh?: boolean;

  /**
   * Publicly reachable URL of the thumbnail. Maximum size of 100 kB.
   */
  thumbnail_url?: string;
}

export interface RcsSuggestion {
  /**
   * When tapped, initiates the corresponding native action on the device.
   */
  action?: RcsSuggestion.Action;

  reply?: RcsSuggestion.Reply;
}

export namespace RcsSuggestion {
  /**
   * When tapped, initiates the corresponding native action on the device.
   */
  export interface Action {
    /**
     * Opens the user's default calendar app and starts the new calendar event flow
     * with the agent-specified event data pre-filled.
     */
    create_calendar_event_action?: Action.CreateCalendarEventAction;

    /**
     * Opens the user's default dialer app with the agent-specified phone number filled
     * in.
     */
    dial_action?: Action.DialAction;

    /**
     * Fallback URL to use if a client doesn't support a suggested action. Fallback
     * URLs open in new browser windows. Maximum 2048 characters.
     */
    fallback_url?: string;

    /**
     * Opens the user's default web browser app to the specified URL.
     */
    open_url_action?: Action.OpenURLAction;

    /**
     * Payload (base64 encoded) that will be sent to the agent in the user event that
     * results when the user taps the suggested action. Maximum 2048 characters.
     */
    postback_data?: string;

    /**
     * Opens the RCS app's location chooser so the user can pick a location to send
     * back to the agent.
     */
    share_location_action?: { [key: string]: unknown };

    /**
     * Text that is shown in the suggested action. Maximum 25 characters.
     */
    text?: string;

    /**
     * Opens the user's default map app and selects the agent-specified location.
     */
    view_location_action?: Action.ViewLocationAction;
  }

  export namespace Action {
    /**
     * Opens the user's default calendar app and starts the new calendar event flow
     * with the agent-specified event data pre-filled.
     */
    export interface CreateCalendarEventAction {
      /**
       * Event description. Maximum 500 characters.
       */
      description?: string;

      end_time?: string;

      start_time?: string;

      /**
       * Event title. Maximum 100 characters.
       */
      title?: string;
    }

    /**
     * Opens the user's default dialer app with the agent-specified phone number filled
     * in.
     */
    export interface DialAction {
      /**
       * Phone number in +E.164 format
       */
      phone_number: string;
    }

    /**
     * Opens the user's default web browser app to the specified URL.
     */
    export interface OpenURLAction {
      /**
       * URL open application, browser or webview.
       */
      application: 'OPEN_URL_APPLICATION_UNSPECIFIED' | 'BROWSER' | 'WEBVIEW';

      url: string;

      webview_view_mode: 'WEBVIEW_VIEW_MODE_UNSPECIFIED' | 'FULL' | 'HALF' | 'TALL';

      /**
       * Accessbility description for webview.
       */
      description?: string;
    }

    /**
     * Opens the user's default map app and selects the agent-specified location.
     */
    export interface ViewLocationAction {
      /**
       * The label of the pin dropped
       */
      label?: string;

      lat_long?: ViewLocationAction.LatLong;

      /**
       * query string (Android only)
       */
      query?: string;
    }

    export namespace ViewLocationAction {
      export interface LatLong {
        /**
         * The latitude in degrees. It must be in the range [-90.0, +90.0].
         */
        latitude: number;

        /**
         * The longitude in degrees. It must be in the range [-180.0, +180.0].
         */
        longitude: number;
      }
    }
  }

  export interface Reply {
    /**
     * Payload (base64 encoded) that will be sent to the agent in the user event that
     * results when the user taps the suggested action. Maximum 2048 characters.
     */
    postback_data?: string;

    /**
     * Text that is shown in the suggested reply (maximum 25 characters)
     */
    text?: string;
  }
}

export interface WhatsappMedia {
  /**
   * media caption
   */
  caption?: string;

  /**
   * file name with extension
   */
  filename?: string;

  /**
   * media URL
   */
  link?: string;

  /**
   * true if voice message
   */
  voice?: boolean;
}

export interface MessageRetrieveResponse {
  data?: OutboundMessagePayload | Shared.InboundMessagePayload;
}

export interface MessageCancelScheduledResponse {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  cc?: Array<MessageCancelScheduledResponse.Cc>;

  /**
   * ISO 8601 formatted date indicating when the message was finalized.
   */
  completed_at?: string | null;

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
  sent_at?: string | null;

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

export interface MessageSendWhatsappResponse {
  data?: MessageSendWhatsappResponse.Data;
}

export namespace MessageSendWhatsappResponse {
  export interface Data {
    /**
     * message ID
     */
    id?: string;

    body?: Data.Body;

    direction?: string;

    encoding?: string;

    from?: Data.From;

    messaging_profile_id?: string;

    organization_id?: string;

    received_at?: string;

    record_type?: string;

    to?: Array<Data.To>;

    type?: string;
  }

  export namespace Data {
    export interface Body {
      audio?: MessagesAPI.WhatsappMedia;

      /**
       * custom data to return with status update
       */
      biz_opaque_callback_data?: string;

      contacts?: Array<Body.Contact>;

      document?: MessagesAPI.WhatsappMedia;

      image?: MessagesAPI.WhatsappMedia;

      interactive?: Body.Interactive;

      location?: Body.Location;

      reaction?: Body.Reaction;

      sticker?: MessagesAPI.WhatsappMedia;

      type?:
        | 'audio'
        | 'document'
        | 'image'
        | 'sticker'
        | 'video'
        | 'interactive'
        | 'location'
        | 'template'
        | 'reaction'
        | 'contacts';

      video?: MessagesAPI.WhatsappMedia;
    }

    export namespace Body {
      export interface Contact {
        addresses?: Array<Contact.Address>;

        birthday?: string;

        emails?: Array<Contact.Email>;

        name?: string;

        org?: Contact.Org;

        phones?: Array<Contact.Phone>;

        urls?: Array<Contact.URL>;
      }

      export namespace Contact {
        export interface Address {
          city?: string;

          country?: string;

          country_code?: string;

          state?: string;

          street?: string;

          type?: string;

          zip?: string;
        }

        export interface Email {
          email?: string;

          type?: string;
        }

        export interface Org {
          company?: string;

          department?: string;

          title?: string;
        }

        export interface Phone {
          phone?: string;

          type?: string;

          wa_id?: string;
        }

        export interface URL {
          type?: string;

          url?: string;
        }
      }

      export interface Interactive {
        action?: Interactive.Action;

        body?: Interactive.Body;

        footer?: Interactive.Footer;

        header?: Interactive.Header;

        type?: 'cta_url' | 'list' | 'carousel' | 'button' | 'location_request_message';
      }

      export namespace Interactive {
        export interface Action {
          button?: string;

          buttons?: Array<Action.Button>;

          cards?: Array<Action.Card>;

          catalog_id?: string;

          mode?: string;

          name?: string;

          parameters?: Action.Parameters;

          product_retailer_id?: string;

          sections?: Array<Action.Section>;
        }

        export namespace Action {
          export interface Button {
            reply?: Button.Reply;

            type?: 'reply';
          }

          export namespace Button {
            export interface Reply {
              /**
               * unique identifier for each button, 256 character maximum
               */
              id?: string;

              /**
               * button label, 20 character maximum
               */
              title?: string;
            }
          }

          export interface Card {
            action?: Card.Action;

            body?: Card.Body;

            /**
             * unique index for each card (0-9)
             */
            card_index?: number;

            header?: Card.Header;

            type?: 'cta_url';
          }

          export namespace Card {
            export interface Action {
              /**
               * the unique ID of the catalog
               */
              catalog_id?: string;

              /**
               * the unique retailer ID of the product
               */
              product_retailer_id?: string;
            }

            export interface Body {
              /**
               * 160 character maximum, up to 2 line breaks
               */
              text?: string;
            }

            export interface Header {
              image?: MessagesAPI.WhatsappMedia;

              type?: 'image' | 'video';

              video?: MessagesAPI.WhatsappMedia;
            }
          }

          export interface Parameters {
            /**
             * button label text, 20 character maximum
             */
            display_text?: string;

            /**
             * button URL to load when tapped by the user
             */
            url?: string;
          }

          export interface Section {
            product_items?: Array<Section.ProductItem>;

            rows?: Array<Section.Row>;

            /**
             * section title, 24 character maximum
             */
            title?: string;
          }

          export namespace Section {
            export interface ProductItem {
              product_retailer_id?: string;
            }

            export interface Row {
              /**
               * arbitrary string identifying the row, 200 character maximum
               */
              id?: string;

              /**
               * row description, 72 character maximum
               */
              description?: string;

              /**
               * row title, 24 character maximum
               */
              title?: string;
            }
          }
        }

        export interface Body {
          /**
           * body text, 1024 character maximum
           */
          text?: string;
        }

        export interface Footer {
          /**
           * footer text, 60 character maximum
           */
          text?: string;
        }

        export interface Header {
          document?: MessagesAPI.WhatsappMedia;

          image?: MessagesAPI.WhatsappMedia;

          sub_text?: string;

          /**
           * header text, 60 character maximum
           */
          text?: string;

          video?: MessagesAPI.WhatsappMedia;
        }
      }

      export interface Location {
        address?: string;

        latitude?: string;

        longitude?: string;

        name?: string;
      }

      export interface Reaction {
        emoji?: string;

        message_id?: string;
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

    export interface To {
      carrier?: string;

      line_type?: string;

      phone_number?: string;

      status?: string;
    }
  }
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

export interface MessageSendWhatsappParams {
  /**
   * Phone number in +E.164 format associated with Whatsapp account
   */
  from: string;

  /**
   * Phone number in +E.164 format
   */
  to: string;

  whatsapp_message: MessageSendWhatsappParams.WhatsappMessage;

  /**
   * Message type - must be set to "WHATSAPP"
   */
  type?: 'WHATSAPP';

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export namespace MessageSendWhatsappParams {
  export interface WhatsappMessage {
    audio?: MessagesAPI.WhatsappMedia;

    /**
     * custom data to return with status update
     */
    biz_opaque_callback_data?: string;

    contacts?: Array<WhatsappMessage.Contact>;

    document?: MessagesAPI.WhatsappMedia;

    image?: MessagesAPI.WhatsappMedia;

    interactive?: WhatsappMessage.Interactive;

    location?: WhatsappMessage.Location;

    reaction?: WhatsappMessage.Reaction;

    sticker?: MessagesAPI.WhatsappMedia;

    type?:
      | 'audio'
      | 'document'
      | 'image'
      | 'sticker'
      | 'video'
      | 'interactive'
      | 'location'
      | 'template'
      | 'reaction'
      | 'contacts';

    video?: MessagesAPI.WhatsappMedia;
  }

  export namespace WhatsappMessage {
    export interface Contact {
      addresses?: Array<Contact.Address>;

      birthday?: string;

      emails?: Array<Contact.Email>;

      name?: string;

      org?: Contact.Org;

      phones?: Array<Contact.Phone>;

      urls?: Array<Contact.URL>;
    }

    export namespace Contact {
      export interface Address {
        city?: string;

        country?: string;

        country_code?: string;

        state?: string;

        street?: string;

        type?: string;

        zip?: string;
      }

      export interface Email {
        email?: string;

        type?: string;
      }

      export interface Org {
        company?: string;

        department?: string;

        title?: string;
      }

      export interface Phone {
        phone?: string;

        type?: string;

        wa_id?: string;
      }

      export interface URL {
        type?: string;

        url?: string;
      }
    }

    export interface Interactive {
      action?: Interactive.Action;

      body?: Interactive.Body;

      footer?: Interactive.Footer;

      header?: Interactive.Header;

      type?: 'cta_url' | 'list' | 'carousel' | 'button' | 'location_request_message';
    }

    export namespace Interactive {
      export interface Action {
        button?: string;

        buttons?: Array<Action.Button>;

        cards?: Array<Action.Card>;

        catalog_id?: string;

        mode?: string;

        name?: string;

        parameters?: Action.Parameters;

        product_retailer_id?: string;

        sections?: Array<Action.Section>;
      }

      export namespace Action {
        export interface Button {
          reply?: Button.Reply;

          type?: 'reply';
        }

        export namespace Button {
          export interface Reply {
            /**
             * unique identifier for each button, 256 character maximum
             */
            id?: string;

            /**
             * button label, 20 character maximum
             */
            title?: string;
          }
        }

        export interface Card {
          action?: Card.Action;

          body?: Card.Body;

          /**
           * unique index for each card (0-9)
           */
          card_index?: number;

          header?: Card.Header;

          type?: 'cta_url';
        }

        export namespace Card {
          export interface Action {
            /**
             * the unique ID of the catalog
             */
            catalog_id?: string;

            /**
             * the unique retailer ID of the product
             */
            product_retailer_id?: string;
          }

          export interface Body {
            /**
             * 160 character maximum, up to 2 line breaks
             */
            text?: string;
          }

          export interface Header {
            image?: MessagesAPI.WhatsappMedia;

            type?: 'image' | 'video';

            video?: MessagesAPI.WhatsappMedia;
          }
        }

        export interface Parameters {
          /**
           * button label text, 20 character maximum
           */
          display_text?: string;

          /**
           * button URL to load when tapped by the user
           */
          url?: string;
        }

        export interface Section {
          product_items?: Array<Section.ProductItem>;

          rows?: Array<Section.Row>;

          /**
           * section title, 24 character maximum
           */
          title?: string;
        }

        export namespace Section {
          export interface ProductItem {
            product_retailer_id?: string;
          }

          export interface Row {
            /**
             * arbitrary string identifying the row, 200 character maximum
             */
            id?: string;

            /**
             * row description, 72 character maximum
             */
            description?: string;

            /**
             * row title, 24 character maximum
             */
            title?: string;
          }
        }
      }

      export interface Body {
        /**
         * body text, 1024 character maximum
         */
        text?: string;
      }

      export interface Footer {
        /**
         * footer text, 60 character maximum
         */
        text?: string;
      }

      export interface Header {
        document?: MessagesAPI.WhatsappMedia;

        image?: MessagesAPI.WhatsappMedia;

        sub_text?: string;

        /**
         * header text, 60 character maximum
         */
        text?: string;

        video?: MessagesAPI.WhatsappMedia;
      }
    }

    export interface Location {
      address?: string;

      latitude?: string;

      longitude?: string;

      name?: string;
    }

    export interface Reaction {
      emoji?: string;

      message_id?: string;
    }
  }
}

Messages.Rcs = Rcs;

export declare namespace Messages {
  export {
    type MessagingError as MessagingError,
    type OutboundMessagePayload as OutboundMessagePayload,
    type RcsAgentMessage as RcsAgentMessage,
    type RcsCardContent as RcsCardContent,
    type RcsContentInfo as RcsContentInfo,
    type RcsSuggestion as RcsSuggestion,
    type WhatsappMedia as WhatsappMedia,
    type MessageRetrieveResponse as MessageRetrieveResponse,
    type MessageCancelScheduledResponse as MessageCancelScheduledResponse,
    type MessageScheduleResponse as MessageScheduleResponse,
    type MessageSendResponse as MessageSendResponse,
    type MessageSendGroupMmsResponse as MessageSendGroupMmsResponse,
    type MessageSendLongCodeResponse as MessageSendLongCodeResponse,
    type MessageSendNumberPoolResponse as MessageSendNumberPoolResponse,
    type MessageSendShortCodeResponse as MessageSendShortCodeResponse,
    type MessageSendWhatsappResponse as MessageSendWhatsappResponse,
    type MessageScheduleParams as MessageScheduleParams,
    type MessageSendParams as MessageSendParams,
    type MessageSendGroupMmsParams as MessageSendGroupMmsParams,
    type MessageSendLongCodeParams as MessageSendLongCodeParams,
    type MessageSendNumberPoolParams as MessageSendNumberPoolParams,
    type MessageSendShortCodeParams as MessageSendShortCodeParams,
    type MessageSendWhatsappParams as MessageSendWhatsappParams,
  };

  export {
    Rcs as Rcs,
    type RcGenerateDeeplinkResponse as RcGenerateDeeplinkResponse,
    type RcSendResponse as RcSendResponse,
    type RcGenerateDeeplinkParams as RcGenerateDeeplinkParams,
    type RcSendParams as RcSendParams,
  };
}
