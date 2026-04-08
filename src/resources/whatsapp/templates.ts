// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { WhatsappTemplateDataDefaultFlatPagination } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

/**
 * Manage Whatsapp message templates
 */
export class Templates extends APIResource {
  /**
   * Create a Whatsapp message template
   *
   * @example
   * ```ts
   * const template = await client.whatsapp.templates.create({
   *   category: 'MARKETING',
   *   components: [{ format: 'TEXT', type: 'HEADER' }],
   *   language: 'language',
   *   name: 'name',
   *   waba_id: 'waba_id',
   * });
   * ```
   */
  create(body: TemplateCreateParams, options?: RequestOptions): APIPromise<TemplateCreateResponse> {
    return this._client.post('/v2/whatsapp/message_templates', { body, ...options });
  }

  /**
   * List Whatsapp message templates
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const whatsappTemplateData of client.whatsapp.templates.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WhatsappTemplateDataDefaultFlatPagination, Shared.WhatsappTemplateData> {
    return this._client.getAPIList(
      '/v2/whatsapp/message_templates',
      DefaultFlatPagination<Shared.WhatsappTemplateData>,
      { query, ...options },
    );
  }
}

export interface TemplateCreateResponse {
  data?: Shared.WhatsappTemplateData;
}

export interface TemplateCreateParams {
  /**
   * Template category: AUTHENTICATION, UTILITY, or MARKETING.
   */
  category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

  /**
   * Template components defining message structure. Passed through to Meta Graph
   * API. Templates with variables must include example values. Supports HEADER,
   * BODY, FOOTER, BUTTONS, CAROUSEL and any future Meta component types.
   */
  components: Array<
    | TemplateCreateParams.WhatsappTemplateHeaderComponent
    | TemplateCreateParams.WhatsappTemplateBodyComponent
    | TemplateCreateParams.WhatsappTemplateFooterComponent
    | TemplateCreateParams.WhatsappTemplateButtonsComponent
    | TemplateCreateParams.WhatsappTemplateCarouselComponent
  >;

  /**
   * Template language code (e.g. en_US, es, pt_BR).
   */
  language: string;

  /**
   * Template name. Lowercase letters, numbers, and underscores only.
   */
  name: string;

  /**
   * The WhatsApp Business Account ID.
   */
  waba_id: string;
}

export namespace TemplateCreateParams {
  /**
   * Optional header displayed at the top of the message.
   */
  export interface WhatsappTemplateHeaderComponent {
    /**
     * Header format type: TEXT (supports one variable), IMAGE, VIDEO, DOCUMENT, or
     * LOCATION.
     */
    format: 'TEXT' | 'IMAGE' | 'VIDEO' | 'DOCUMENT' | 'LOCATION';

    type: 'HEADER';

    /**
     * Sample values for header variables.
     */
    example?: WhatsappTemplateHeaderComponent.Example;

    /**
     * Header text. Required when format is TEXT. Supports one variable ({{1}}).
     * Variables cannot be at the start or end.
     */
    text?: string;
  }

  export namespace WhatsappTemplateHeaderComponent {
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
  export interface WhatsappTemplateBodyComponent {
    type: 'BODY';

    /**
     * Sample values for body variables. Required when body text contains parameters.
     */
    example?: WhatsappTemplateBodyComponent.Example;

    /**
     * Body text content. Use {{1}}, {{2}}, etc. for variable placeholders. Required
     * for MARKETING and UTILITY templates. Optional for AUTHENTICATION templates where
     * Meta provides the built-in OTP body.
     */
    text?: string;
  }

  export namespace WhatsappTemplateBodyComponent {
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
  export interface WhatsappTemplateFooterComponent {
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
  export interface WhatsappTemplateButtonsComponent {
    /**
     * Array of button objects. Meta supports various combinations of button types.
     */
    buttons: Array<WhatsappTemplateButtonsComponent.Button>;

    type: 'BUTTONS';
  }

  export namespace WhatsappTemplateButtonsComponent {
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
  export interface WhatsappTemplateCarouselComponent {
    /**
     * Array of card objects, each with its own components.
     */
    cards: Array<WhatsappTemplateCarouselComponent.Card>;

    type: 'CAROUSEL';
  }

  export namespace WhatsappTemplateCarouselComponent {
    export interface Card {
      components?: Array<unknown>;
    }
  }
}

export interface TemplateListParams extends DefaultFlatPaginationParams {
  /**
   * Filter by category
   */
  'filter[category]'?: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

  /**
   * Search templates by name
   */
  'filter[search]'?: string;

  /**
   * Filter by template status
   */
  'filter[status]'?: string;

  /**
   * Filter by WABA ID
   */
  'filter[waba_id]'?: string;
}

export declare namespace Templates {
  export {
    type TemplateCreateResponse as TemplateCreateResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
  };
}

export { type WhatsappTemplateDataDefaultFlatPagination };
