// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EmailTemplatesAPI from './email-templates';
import { APIPromise } from '../core/api-promise';
import { EmailCursorPagination, type EmailCursorPaginationParams, PagePromise } from '../core/pagination';
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
   * // Automatically fetches more pages as needed.
   * for await (const emailTemplate of client.emailTemplates.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmailTemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailTemplatesEmailCursorPagination, EmailTemplate> {
    return this._client.getAPIList('/email_templates', EmailCursorPagination<EmailTemplate>, {
      query,
      ...options,
    });
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
   * Deletes the account-owned template. The operation returns `204` with no body and
   * prevents future sends or renders from using the deleted template ID.
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
   * Returns the account-owned template identified by ID, including its Liquid
   * subject and bodies, declared variables, and timestamps.
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
   *   await client.emailTemplates.replace(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { subject: 'Welcome aboard, {{first_name}}!' },
   *   );
   * ```
   */
  replace(
    id: string,
    body: EmailTemplateReplaceParams,
    options?: RequestOptions,
  ): APIPromise<EmailTemplateResponse> {
    return this._client.put(path`/email_templates/${id}`, { body, ...options });
  }

  /**
   * Updates one or more fields of the specified email template and returns the
   * updated template.
   *
   * @example
   * ```ts
   * const emailTemplateResponse =
   *   await client.emailTemplates.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { subject: 'Welcome aboard, {{first_name}}!' },
   *   );
   * ```
   */
  update(
    id: string,
    body: EmailTemplateUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EmailTemplateResponse> {
    return this._client.patch(path`/email_templates/${id}`, { body, ...options });
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

export type EmailTemplatesEmailCursorPagination = EmailCursorPagination<EmailTemplate>;

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

export interface EmailTemplateListParams extends EmailCursorPaginationParams {}

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

export interface EmailTemplateReplaceParams {
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
    type EmailTemplateRenderResponse as EmailTemplateRenderResponse,
    type EmailTemplatesEmailCursorPagination as EmailTemplatesEmailCursorPagination,
    type EmailTemplateListParams as EmailTemplateListParams,
    type EmailTemplateCreateParams as EmailTemplateCreateParams,
    type EmailTemplateReplaceParams as EmailTemplateReplaceParams,
    type EmailTemplateUpdateParams as EmailTemplateUpdateParams,
    type EmailTemplateRenderParams as EmailTemplateRenderParams,
  };
}
