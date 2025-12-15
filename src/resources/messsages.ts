// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MesssagesAPI from './messsages';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Messsages extends APIResource {
  /**
   * Send an RCS message
   *
   * @example
   * ```ts
   * const response = await client.messsages.rcs({
   *   agent_id: 'Agent007',
   *   agent_message: {},
   *   messaging_profile_id: 'messaging_profile_id',
   *   to: '+13125551234',
   * });
   * ```
   */
  rcs(body: MesssageRcsParams, options?: RequestOptions): APIPromise<MesssageRcsResponse> {
    return this._client.post('/messsages/rcs', { body, ...options });
  }

  /**
   * Send a Whatsapp message
   *
   * @example
   * ```ts
   * const response = await client.messsages.whatsapp({
   *   from: '+13125551234',
   *   to: '+13125551234',
   *   whatsapp_message: {},
   * });
   * ```
   */
  whatsapp(body: MesssageWhatsappParams, options?: RequestOptions): APIPromise<MesssageWhatsappResponse> {
    return this._client.post('/messsages/whatsapp', { body, ...options });
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
    content_info?: MesssagesAPI.RcsContentInfo;

    rich_card?: ContentMessage.RichCard;

    /**
     * List of suggested actions and replies
     */
    suggestions?: Array<MesssagesAPI.RcsSuggestion>;

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
        card_contents: Array<MesssagesAPI.RcsCardContent>;

        /**
         * The width of the cards in the carousel.
         */
        card_width: 'CARD_WIDTH_UNSPECIFIED' | 'SMALL' | 'MEDIUM';
      }

      /**
       * Standalone card
       */
      export interface StandaloneCard {
        card_content: MesssagesAPI.RcsCardContent;

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
    content_info?: MesssagesAPI.RcsContentInfo;

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

export interface MesssageRcsResponse {
  data?: MesssageRcsResponse.Data;
}

export namespace MesssageRcsResponse {
  export interface Data {
    /**
     * message ID
     */
    id?: string;

    body?: MesssagesAPI.RcsAgentMessage;

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
    export interface From {
      /**
       * agent ID
       */
      agent_id?: string;

      agent_name?: string;

      carrier?: string;
    }

    export interface To {
      carrier?: string;

      line_type?: string;

      phone_number?: string;

      status?: string;
    }
  }
}

export interface MesssageWhatsappResponse {
  data?: MesssageWhatsappResponse.Data;
}

export namespace MesssageWhatsappResponse {
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
      audio?: MesssagesAPI.WhatsappMedia;

      /**
       * custom data to return with status update
       */
      biz_opaque_callback_data?: string;

      contacts?: Array<Body.Contact>;

      document?: MesssagesAPI.WhatsappMedia;

      image?: MesssagesAPI.WhatsappMedia;

      interactive?: Body.Interactive;

      location?: Body.Location;

      reaction?: Body.Reaction;

      sticker?: MesssagesAPI.WhatsappMedia;

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

      video?: MesssagesAPI.WhatsappMedia;
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
              image?: MesssagesAPI.WhatsappMedia;

              type?: 'image' | 'video';

              video?: MesssagesAPI.WhatsappMedia;
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
          document?: MesssagesAPI.WhatsappMedia;

          image?: MesssagesAPI.WhatsappMedia;

          sub_text?: string;

          /**
           * header text, 60 character maximum
           */
          text?: string;

          video?: MesssagesAPI.WhatsappMedia;
        }
      }

      export interface Location {
        address?: string;

        latitude?: string;

        longitude?: string;

        name?: string;
      }

      export interface Reaction {
        empji?: string;

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

export interface MesssageRcsParams {
  /**
   * RCS Agent ID
   */
  agent_id: string;

  agent_message: RcsAgentMessage;

  /**
   * A valid messaging profile ID
   */
  messaging_profile_id: string;

  /**
   * Phone number in +E.164 format
   */
  to: string;

  mms_fallback?: MesssageRcsParams.MmsFallback;

  sms_fallback?: MesssageRcsParams.SMSFallback;

  /**
   * Message type - must be set to "RCS"
   */
  type?: 'RCS';

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export namespace MesssageRcsParams {
  export interface MmsFallback {
    /**
     * Phone number in +E.164 format
     */
    from?: string;

    /**
     * List of media URLs
     */
    media_urls?: Array<string>;

    /**
     * Subject of the message
     */
    subject?: string;

    /**
     * Text
     */
    text?: string;
  }

  export interface SMSFallback {
    /**
     * Phone number in +E.164 format
     */
    from?: string;

    /**
     * Text (maximum 3072 characters)
     */
    text?: string;
  }
}

export interface MesssageWhatsappParams {
  /**
   * Phone number in +E.164 format associated with Whatsapp account
   */
  from: string;

  /**
   * Phone number in +E.164 format
   */
  to: string;

  whatsapp_message: MesssageWhatsappParams.WhatsappMessage;

  /**
   * Message type - must be set to "WHATSAPP"
   */
  type?: 'WHATSAPP';

  /**
   * The URL where webhooks related to this message will be sent.
   */
  webhook_url?: string;
}

export namespace MesssageWhatsappParams {
  export interface WhatsappMessage {
    audio?: MesssagesAPI.WhatsappMedia;

    /**
     * custom data to return with status update
     */
    biz_opaque_callback_data?: string;

    contacts?: Array<WhatsappMessage.Contact>;

    document?: MesssagesAPI.WhatsappMedia;

    image?: MesssagesAPI.WhatsappMedia;

    interactive?: WhatsappMessage.Interactive;

    location?: WhatsappMessage.Location;

    reaction?: WhatsappMessage.Reaction;

    sticker?: MesssagesAPI.WhatsappMedia;

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

    video?: MesssagesAPI.WhatsappMedia;
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
            image?: MesssagesAPI.WhatsappMedia;

            type?: 'image' | 'video';

            video?: MesssagesAPI.WhatsappMedia;
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
        document?: MesssagesAPI.WhatsappMedia;

        image?: MesssagesAPI.WhatsappMedia;

        sub_text?: string;

        /**
         * header text, 60 character maximum
         */
        text?: string;

        video?: MesssagesAPI.WhatsappMedia;
      }
    }

    export interface Location {
      address?: string;

      latitude?: string;

      longitude?: string;

      name?: string;
    }

    export interface Reaction {
      empji?: string;

      message_id?: string;
    }
  }
}

export declare namespace Messsages {
  export {
    type RcsAgentMessage as RcsAgentMessage,
    type RcsCardContent as RcsCardContent,
    type RcsContentInfo as RcsContentInfo,
    type RcsSuggestion as RcsSuggestion,
    type WhatsappMedia as WhatsappMedia,
    type MesssageRcsResponse as MesssageRcsResponse,
    type MesssageWhatsappResponse as MesssageWhatsappResponse,
    type MesssageRcsParams as MesssageRcsParams,
    type MesssageWhatsappParams as MesssageWhatsappParams,
  };
}
