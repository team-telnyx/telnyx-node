// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MesssagesAPI from './messsages';

export class Messsages extends APIResource {}

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

export declare namespace Messsages {
  export {
    type RcsAgentMessage as RcsAgentMessage,
    type RcsCardContent as RcsCardContent,
    type RcsContentInfo as RcsContentInfo,
    type RcsSuggestion as RcsSuggestion,
  };
}
