// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
   *   components: [{}],
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
   * for await (const templateListResponse of client.whatsapp.templates.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TemplateListResponsesDefaultFlatPagination, TemplateListResponse> {
    return this._client.getAPIList(
      '/v2/whatsapp/message_templates',
      DefaultFlatPagination<TemplateListResponse>,
      { query, ...options },
    );
  }
}

export type TemplateListResponsesDefaultFlatPagination = DefaultFlatPagination<TemplateListResponse>;

export interface TemplateCreateResponse {
  data?: TemplateCreateResponse.Data;
}

export namespace TemplateCreateResponse {
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

export interface TemplateListResponse {
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

  whatsapp_business_account?: TemplateListResponse.WhatsappBusinessAccount;
}

export namespace TemplateListResponse {
  export interface WhatsappBusinessAccount {
    id?: string;
  }
}

export interface TemplateCreateParams {
  category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

  components: Array<unknown>;

  language: string;

  name: string;

  waba_id: string;
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
    type TemplateListResponse as TemplateListResponse,
    type TemplateListResponsesDefaultFlatPagination as TemplateListResponsesDefaultFlatPagination,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateListParams as TemplateListParams,
  };
}
