// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage Whatsapp message templates
 */
export class WhatsappMessageTemplates extends APIResource {
  /**
   * Get a Whatsapp message template by ID
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WhatsappMessageTemplateRetrieveResponse> {
    return this._client.get(path`/v2/whatsapp_message_templates/${id}`, options);
  }

  /**
   * Update a Whatsapp message template
   */
  update(
    id: string,
    body: WhatsappMessageTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WhatsappMessageTemplateUpdateResponse> {
    return this._client.patch(path`/v2/whatsapp_message_templates/${id}`, { body, ...options });
  }

  /**
   * Delete a Whatsapp message template
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/whatsapp_message_templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface WhatsappMessageTemplateRetrieveResponse {
  data?: Shared.WhatsappTemplateData;
}

export interface WhatsappMessageTemplateUpdateResponse {
  data?: Shared.WhatsappTemplateData;
}

export interface WhatsappMessageTemplateUpdateParams {
  category?: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

  /**
   * Updated template components. Same structure as the create request.
   */
  components?: Array<
    | WhatsappMessageTemplateUpdateParams.Header
    | WhatsappMessageTemplateUpdateParams.Body
    | WhatsappMessageTemplateUpdateParams.Footer
    | WhatsappMessageTemplateUpdateParams.Buttons
    | WhatsappMessageTemplateUpdateParams.Carousel
  >;
}

export namespace WhatsappMessageTemplateUpdateParams {
  /**
   * Optional header displayed at the top of the message.
   */
  export interface Header {
    /**
     * Header format type: TEXT (supports one variable), IMAGE, VIDEO, DOCUMENT, or
     * LOCATION.
     */
    format: 'TEXT' | 'IMAGE' | 'VIDEO' | 'DOCUMENT' | 'LOCATION';

    type: 'HEADER';

    /**
     * Sample values for header variables.
     */
    example?: Header.Example;

    /**
     * Header text. Required when format is TEXT. Supports one variable ({{1}}).
     * Variables cannot be at the start or end.
     */
    text?: string;
  }

  export namespace Header {
    /**
     * Sample values for header variables.
     */
    export interface Example {
      /**
       * Media handle for IMAGE, VIDEO, or DOCUMENT headers.
       */
      header_handle?: Array<string>;

      /**
       * Sample values for text header variables.
       */
      header_text?: Array<string>;
    }
  }

  /**
   * The main text content of the message. Supports multiple variable parameters
   * ({{1}}, {{2}}, etc.). Variables cannot be at the start or end. Maximum 1024
   * characters.
   */
  export interface Body {
    type: 'BODY';

    /**
     * Sample values for body variables. Required when body text contains parameters.
     */
    example?: Body.Example;

    /**
     * Body text content. Use {{1}}, {{2}}, etc. for variable placeholders. Required
     * for MARKETING and UTILITY templates. Optional for AUTHENTICATION templates where
     * Meta provides the built-in OTP body.
     */
    text?: string;
  }

  export namespace Body {
    /**
     * Sample values for body variables. Required when body text contains parameters.
     */
    export interface Example {
      /**
       * Array containing one array of sample values, one per variable in order.
       */
      body_text?: Array<Array<string>>;
    }
  }

  /**
   * Optional footer displayed at the bottom of the message. Does not support
   * variables.
   */
  export interface Footer {
    type: 'FOOTER';

    /**
     * OTP code expiration time in minutes. Used in AUTHENTICATION template footers
     * instead of free-form text.
     */
    code_expiration_minutes?: number;

    /**
     * Footer text. Maximum 60 characters. For non-authentication templates.
     */
    text?: string;
  }

  /**
   * Optional interactive buttons. Maximum 3 buttons per template.
   */
  export interface Buttons {
    /**
     * Array of button objects. Meta supports various combinations of button types.
     */
    buttons: Array<Buttons.Button>;

    type: 'BUTTONS';
  }

  export namespace Buttons {
    export interface Button {
      type: 'URL' | 'PHONE_NUMBER' | 'QUICK_REPLY' | 'OTP' | 'COPY_CODE' | 'FLOW';

      /**
       * Custom autofill button text for ONE_TAP OTP buttons.
       */
      autofill_text?: string;

      /**
       * Sample values for URL variable.
       */
      example?: Array<string>;

      /**
       * Flow action type for FLOW-type buttons.
       */
      flow_action?: 'navigate' | 'data_exchange';

      /**
       * Flow ID for FLOW-type buttons.
       */
      flow_id?: string;

      /**
       * Target screen name for FLOW buttons with navigate action.
       */
      navigate_screen?: string;

      otp_type?: 'COPY_CODE' | 'ONE_TAP';

      /**
       * Android package name. Required for ONE_TAP OTP buttons.
       */
      package_name?: string;

      /**
       * Phone number in E.164 format.
       */
      phone_number?: string;

      /**
       * Android app signing key hash. Required for ONE_TAP OTP buttons.
       */
      signature_hash?: string;

      /**
       * Button label text. Maximum 25 characters. Required for URL, PHONE_NUMBER, and
       * QUICK_REPLY buttons. Not required for OTP buttons (Meta supplies the label).
       */
      text?: string;

      /**
       * URL for URL-type buttons. Supports one variable ({{1}}).
       */
      url?: string;

      /**
       * Whether zero-tap terms have been accepted.
       */
      zero_tap_terms_accepted?: boolean;
    }
  }

  /**
   * Carousel component for multi-card templates. Each card can contain its own
   * header, body, and buttons.
   */
  export interface Carousel {
    /**
     * Array of card objects, each with its own components.
     */
    cards: Array<Carousel.Card>;

    type: 'CAROUSEL';
  }

  export namespace Carousel {
    export interface Card {
      components?: Array<{ [key: string]: unknown }>;
    }
  }
}

export declare namespace WhatsappMessageTemplates {
  export {
    type WhatsappMessageTemplateRetrieveResponse as WhatsappMessageTemplateRetrieveResponse,
    type WhatsappMessageTemplateUpdateResponse as WhatsappMessageTemplateUpdateResponse,
    type WhatsappMessageTemplateUpdateParams as WhatsappMessageTemplateUpdateParams,
  };
}
