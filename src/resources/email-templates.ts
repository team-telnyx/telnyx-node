// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EmailTemplatesAPI from './email-templates';
import * as ThreadsAPI from './email-inboxes/threads/threads';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Create, list, retrieve, update, delete, and render Liquid email templates.
 */
export class EmailTemplates extends APIResource {
  /**
   * Lists templates sorted newest first by `created_at desc, id desc`.
   *
   * @example
   * ```ts
   * const emailTemplates = await client.emailTemplates.list();
   * ```
   */
  list(
    query: EmailTemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailTemplateListResponse> {
    return this._client.get('/email_templates', { query, ...options });
  }

  /**
   * Creates a Liquid email template. Variables are auto-extracted when omitted.
   *
   * @example
   * ```ts
   * const emailTemplateResponse =
   *   await client.emailTemplates.create({
   *     name: 'Welcome Email',
   *     html_body: '<h1>Hello {{ first_name }}</h1>',
   *     subject: 'Welcome, {{ first_name }}!',
   *     text_body: 'Hello {{ first_name }}',
   *   });
   * ```
   */
  create(params: EmailTemplateCreateParams, options?: RequestOptions): APIPromise<EmailTemplateResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/email_templates', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Delete an email template
   *
   * @example
   * ```ts
   * await client.emailTemplates.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/email_templates/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get an email template
   *
   * @example
   * ```ts
   * const emailTemplateResponse =
   *   await client.emailTemplates.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailTemplateResponse> {
    return this._client.get(path`/email_templates/${id}`, options);
  }

  /**
   * Replaces template fields. Behaves identically to PATCH; provided for
   * compatibility with Phoenix resource routes.
   *
   * @example
   * ```ts
   * const emailTemplateResponse =
   *   await client.emailTemplates.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  update(
    id: string,
    body: EmailTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EmailTemplateResponse> {
    return this._client.put(path`/email_templates/${id}`, { body, ...options });
  }

  /**
   * Renders a template using the provided Liquid variables. Missing
   * `template_variables` defaults to `{}`.
   *
   * @example
   * ```ts
   * const response = await client.emailTemplates.render(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { template_variables: { first_name: 'Ada' } },
   * );
   * ```
   */
  render(
    id: string,
    body: EmailTemplateRenderParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailTemplateRenderResponse> {
    return this._client.post(path`/email_templates/${id}/render`, { body, ...options });
  }
}

export interface EmailTemplate {
  id: string;

  created_at: string;

  html_body: string | null;

  name: string;

  record_type: 'email_template';

  subject: string | null;

  text_body: string | null;

  updated_at: string;

  variables: Array<string>;
}

export interface EmailTemplateResponse {
  data: EmailTemplate;
}

export interface UpdateEmailTemplateRequest {
  /**
   * Liquid template HTML body.
   */
  html_body?: string | null;

  name?: string;

  /**
   * Liquid template subject.
   */
  subject?: string | null;

  /**
   * Liquid template text body.
   */
  text_body?: string | null;

  variables?: Array<string>;
}

export interface EmailTemplateListResponse {
  data: Array<EmailTemplate>;

  meta: ThreadsAPI.EmailPaginationMeta;
}

export interface EmailTemplateRenderResponse {
  /**
   * Template object with `subject`, `html_body`, and `text_body` replaced by their
   * Liquid-rendered values. All other template fields (id, name, variables, etc.)
   * remain unchanged.
   */
  data: EmailTemplateRenderResponse.Data;
}

export namespace EmailTemplateRenderResponse {
  /**
   * Template object with `subject`, `html_body`, and `text_body` replaced by their
   * Liquid-rendered values. All other template fields (id, name, variables, etc.)
   * remain unchanged.
   */
  export interface Data extends EmailTemplatesAPI.EmailTemplate {}
}

export interface EmailTemplateListParams {
  /**
   * Opaque URL-safe Base64 cursor returned by a previous list response.
   */
  page_cursor?: string;

  /**
   * Number of results to return. Defaults to 25; maximum is 100. Invalid values are
   * clamped to the valid range.
   */
  page_size?: number;
}

export interface EmailTemplateCreateParams {
  /**
   * Body param: Letters, numbers, spaces, hyphens, and underscores only.
   */
  name: string;

  /**
   * Body param: Liquid template HTML body.
   */
  html_body?: string | null;

  /**
   * Body param: Liquid template subject.
   */
  subject?: string | null;

  /**
   * Body param: Liquid template text body.
   */
  text_body?: string | null;

  /**
   * Body param: Template variables. Auto-extracted from subject/body fields when
   * absent.
   */
  variables?: Array<string>;

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;
}

export interface EmailTemplateUpdateParams {
  /**
   * Liquid template HTML body.
   */
  html_body?: string | null;

  name?: string;

  /**
   * Liquid template subject.
   */
  subject?: string | null;

  /**
   * Liquid template text body.
   */
  text_body?: string | null;

  variables?: Array<string>;
}

export interface EmailTemplateRenderParams {
  /**
   * Variables for Liquid template rendering. Non-object values are silently treated
   * as an empty object.
   */
  template_variables?: { [key: string]: unknown };
}

export declare namespace EmailTemplates {
  export {
    type EmailTemplate as EmailTemplate,
    type EmailTemplateResponse as EmailTemplateResponse,
    type UpdateEmailTemplateRequest as UpdateEmailTemplateRequest,
    type EmailTemplateListResponse as EmailTemplateListResponse,
    type EmailTemplateRenderResponse as EmailTemplateRenderResponse,
    type EmailTemplateListParams as EmailTemplateListParams,
    type EmailTemplateCreateParams as EmailTemplateCreateParams,
    type EmailTemplateUpdateParams as EmailTemplateUpdateParams,
    type EmailTemplateRenderParams as EmailTemplateRenderParams,
  };
}
