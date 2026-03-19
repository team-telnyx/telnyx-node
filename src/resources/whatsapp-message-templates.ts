// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
  data?: WhatsappMessageTemplateRetrieveResponse.Data;
}

export namespace WhatsappMessageTemplateRetrieveResponse {
  export interface Data {
    id?: string;

    category?: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

    /**
     * Whatsapp template components (header, body, footer, buttons)
     */
    components?: Array<unknown>;

    created_at?: string;

    language?: string;

    name?: string;

    record_type?: string;

    rejection_reason?: string;

    status?: string;

    template_id?: string;

    updated_at?: string;

    whatsapp_business_account?: Data.WhatsappBusinessAccount;
  }

  export namespace Data {
    export interface WhatsappBusinessAccount {
      id?: string;
    }
  }
}

export interface WhatsappMessageTemplateUpdateResponse {
  data?: WhatsappMessageTemplateUpdateResponse.Data;
}

export namespace WhatsappMessageTemplateUpdateResponse {
  export interface Data {
    id?: string;

    category?: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

    /**
     * Whatsapp template components (header, body, footer, buttons)
     */
    components?: Array<unknown>;

    created_at?: string;

    language?: string;

    name?: string;

    record_type?: string;

    rejection_reason?: string;

    status?: string;

    template_id?: string;

    updated_at?: string;

    whatsapp_business_account?: Data.WhatsappBusinessAccount;
  }

  export namespace Data {
    export interface WhatsappBusinessAccount {
      id?: string;
    }
  }
}

export interface WhatsappMessageTemplateUpdateParams {
  category?: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

  components?: Array<unknown>;
}

export declare namespace WhatsappMessageTemplates {
  export {
    type WhatsappMessageTemplateRetrieveResponse as WhatsappMessageTemplateRetrieveResponse,
    type WhatsappMessageTemplateUpdateResponse as WhatsappMessageTemplateUpdateResponse,
    type WhatsappMessageTemplateUpdateParams as WhatsappMessageTemplateUpdateParams,
  };
}
