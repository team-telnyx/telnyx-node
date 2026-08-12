// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import * as TemplatesAPI from './whatsapp/templates';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Manage Whatsapp message templates
 */
export class WhatsappMessageTemplates extends APIResource {
  /**
   * Deletes the specified WhatsApp message template.
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/whatsapp_message_templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns the content, components, language, and current review state of the
   * specified WhatsApp message template.
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<WhatsappMessageTemplateRetrieveResponse> {
    return this._client.get(path`/v2/whatsapp_message_templates/${id}`, options);
  }

  /**
   * Updates the editable fields of the specified WhatsApp message template.
   */
  update(
    id: string,
    body: WhatsappMessageTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WhatsappMessageTemplateUpdateResponse> {
    return this._client.patch(path`/v2/whatsapp_message_templates/${id}`, { body, ...options });
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
    | TemplatesAPI.WhatsappTemplateHeaderComponent
    | TemplatesAPI.WhatsappTemplateBodyComponent
    | TemplatesAPI.WhatsappTemplateFooterComponent
    | TemplatesAPI.WhatsappTemplateButtonsComponent
    | TemplatesAPI.WhatsappTemplateCarouselComponent
  >;
}

export declare namespace WhatsappMessageTemplates {
  export {
    type WhatsappMessageTemplateRetrieveResponse as WhatsappMessageTemplateRetrieveResponse,
    type WhatsappMessageTemplateUpdateResponse as WhatsappMessageTemplateUpdateResponse,
    type WhatsappMessageTemplateUpdateParams as WhatsappMessageTemplateUpdateParams,
  };
}
