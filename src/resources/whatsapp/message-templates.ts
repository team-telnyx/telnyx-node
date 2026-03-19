// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { WhatsappTemplateDataDefaultFlatPagination } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Manage Whatsapp message templates
 */
export class MessageTemplates extends APIResource {
  /**
   * Create a Whatsapp message template
   *
   * @example
   * ```ts
   * const messageTemplate =
   *   await client.whatsapp.messageTemplates.create({
   *     category: 'MARKETING',
   *     components: [{ foo: 'bar' }],
   *     language: 'language',
   *     name: 'name',
   *     waba_id: 'waba_id',
   *   });
   * ```
   */
  create(
    body: MessageTemplateCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTemplateCreateResponse> {
    return this._client.post('/v2/whatsapp/message_templates', { body, ...options });
  }

  /**
   * Get a Whatsapp message template by ID
   *
   * @example
   * ```ts
   * const messageTemplate =
   *   await client.whatsapp.messageTemplates.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MessageTemplateRetrieveResponse> {
    return this._client.get(path`/v2/whatsapp_message_templates/${id}`, options);
  }

  /**
   * Update a Whatsapp message template
   *
   * @example
   * ```ts
   * const messageTemplate =
   *   await client.whatsapp.messageTemplates.update('id');
   * ```
   */
  update(
    id: string,
    body: MessageTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MessageTemplateUpdateResponse> {
    return this._client.patch(path`/v2/whatsapp_message_templates/${id}`, { body, ...options });
  }

  /**
   * List Whatsapp message templates
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const whatsappTemplateData of client.whatsapp.messageTemplates.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: MessageTemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<WhatsappTemplateDataDefaultFlatPagination, Shared.WhatsappTemplateData> {
    return this._client.getAPIList(
      '/v2/whatsapp/message_templates',
      DefaultFlatPagination<Shared.WhatsappTemplateData>,
      { query, ...options },
    );
  }

  /**
   * Delete a Whatsapp message template
   *
   * @example
   * ```ts
   * await client.whatsapp.messageTemplates.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v2/whatsapp_message_templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MessageTemplateCreateResponse {
  data?: Shared.WhatsappTemplateData;
}

export interface MessageTemplateRetrieveResponse {
  data?: Shared.WhatsappTemplateData;
}

export interface MessageTemplateUpdateResponse {
  data?: Shared.WhatsappTemplateData;
}

export interface MessageTemplateCreateParams {
  category: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

  components: Array<{ [key: string]: unknown }>;

  language: string;

  name: string;

  waba_id: string;
}

export interface MessageTemplateUpdateParams {
  category?: 'MARKETING' | 'UTILITY' | 'AUTHENTICATION';

  components?: Array<{ [key: string]: unknown }>;
}

export interface MessageTemplateListParams extends DefaultFlatPaginationParams {
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

export declare namespace MessageTemplates {
  export {
    type MessageTemplateCreateResponse as MessageTemplateCreateResponse,
    type MessageTemplateRetrieveResponse as MessageTemplateRetrieveResponse,
    type MessageTemplateUpdateResponse as MessageTemplateUpdateResponse,
    type MessageTemplateCreateParams as MessageTemplateCreateParams,
    type MessageTemplateUpdateParams as MessageTemplateUpdateParams,
    type MessageTemplateListParams as MessageTemplateListParams,
  };
}

export { type WhatsappTemplateDataDefaultFlatPagination };
