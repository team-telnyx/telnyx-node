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

  components?: Array<{ [key: string]: unknown }>;
}

export declare namespace WhatsappMessageTemplates {
  export {
    type WhatsappMessageTemplateRetrieveResponse as WhatsappMessageTemplateRetrieveResponse,
    type WhatsappMessageTemplateUpdateResponse as WhatsappMessageTemplateUpdateResponse,
    type WhatsappMessageTemplateUpdateParams as WhatsappMessageTemplateUpdateParams,
  };
}
