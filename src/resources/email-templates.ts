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
   * When the template has `strict_variables` enabled and a required variable (per
   * `variable_schema`) is missing, returns 422 naming the variable. When the
   * template has `autoescape` enabled, the rendered `html_body` expression output is
   * HTML-escaped at the output boundary; `subject` and `text_body` are not
   * autoescaped.
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

  /**
   * Whether HTML autoescaping is enabled for this template. When `true`, only
   * rendered `html_body` expression output is HTML-escaped at the output boundary;
   * `subject` and `text_body` are never autoescaped.
   */
  autoescape: boolean;

  created_at: string;

  html_body: string | null;

  name: string;

  record_type: 'email_template';

  /**
   * Whether strict variable validation is enabled for this template. When `true`,
   * sends and renders that are missing a variable marked `required: true` in
   * `variable_schema` fail with 422 naming the variable.
   */
  strict_variables: boolean;

  subject: string | null;

  text_body: string | null;

  updated_at: string;

  /**
   * Structured variable requirements, or `null` when the template uses only the
   * legacy `variables` array.
   */
  variable_schema: { [key: string]: EmailTemplate.VariableSchema } | null;

  /**
   * Legacy unstructured variable names. This path remains supported unchanged.
   */
  variables: Array<string>;
}

export namespace EmailTemplate {
  export interface VariableSchema {
    /**
     * Whether the variable must be supplied when strict variable validation is
     * enabled.
     */
    required: boolean;

    /**
     * Default value for an optional variable. Rejected when `required` is `true`.
     */
    default?: string;
  }
}

export interface EmailTemplateResponse {
  data: EmailTemplate;
}

export interface UpdateEmailTemplateRequest {
  /**
   * Per-template HTML autoescaping setting.
   */
  autoescape?: boolean;

  /**
   * Liquid template HTML body.
   */
  html_body?: string | null;

  name?: string;

  /**
   * Per-template strict variable-validation setting.
   */
  strict_variables?: boolean;

  /**
   * Liquid template subject.
   */
  subject?: string | null;

  /**
   * Liquid template text body.
   */
  text_body?: string | null;

  /**
   * Structured variable requirements. Required variables cannot define defaults;
   * invalid combinations return 422. Set to `null` to clear the schema.
   */
  variable_schema?: { [key: string]: UpdateEmailTemplateRequest.VariableSchema } | null;

  variables?: Array<string>;
}

export namespace UpdateEmailTemplateRequest {
  export interface VariableSchema {
    /**
     * Whether the variable must be supplied when strict variable validation is
     * enabled.
     */
    required: boolean;

    /**
     * Default value for an optional variable. Rejected when `required` is `true`.
     */
    default?: string;
  }
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
   * Body param: Per-template HTML autoescaping setting. Defaults to `false` for
   * backward compatibility. When `true`, the rendered `html_body` HTML-escapes each
   * Liquid expression's output at the output boundary (after its filters run, before
   * concatenation with literal template markup). Input values are never mutated and
   * `subject`/`text_body` are never autoescaped. The boundary escape is idempotent:
   * HTML entities already present in the output (e.g. from an explicit `escape`
   * filter) are preserved, so an explicit `escape`/`escape_once` is never
   * double-escaped, and markup introduced by any later filter in the chain is still
   * escaped.
   */
  autoescape?: boolean;

  /**
   * Body param: Liquid template HTML body.
   */
  html_body?: string | null;

  /**
   * Body param: Per-template strict variable-validation setting. Defaults to `false`
   * for backward compatibility. When `true`, a send or render that is missing a
   * variable marked `required: true` in `variable_schema` fails with 422 naming the
   * variable. Missing optional variables never fail; their schema `default` (when
   * set) is applied to the render.
   */
  strict_variables?: boolean;

  /**
   * Body param: Liquid template subject.
   */
  subject?: string | null;

  /**
   * Body param: Liquid template text body.
   */
  text_body?: string | null;

  /**
   * Body param: Structured variable requirements. Required variables cannot define
   * defaults; invalid combinations return 422. This is independent of the legacy
   * `variables` array. On render with `strict_variables` enabled: `required`
   * variables must be supplied as non-empty values — absent, `null`, empty string,
   * empty object `{}`, and empty array `[]` all fail with 422 naming the variable,
   * while present values such as `false` and `0` pass (they are present, not empty).
   * Optional variables fall back to their `default` when absent.
   */
  variable_schema?: { [key: string]: EmailTemplateCreateParams.VariableSchema } | null;

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

export namespace EmailTemplateCreateParams {
  export interface VariableSchema {
    /**
     * Whether the variable must be supplied when strict variable validation is
     * enabled.
     */
    required: boolean;

    /**
     * Default value for an optional variable. Rejected when `required` is `true`.
     */
    default?: string;
  }
}

export interface EmailTemplateReplaceParams {
  /**
   * Per-template HTML autoescaping setting.
   */
  autoescape?: boolean;

  /**
   * Liquid template HTML body.
   */
  html_body?: string | null;

  name?: string;

  /**
   * Per-template strict variable-validation setting.
   */
  strict_variables?: boolean;

  /**
   * Liquid template subject.
   */
  subject?: string | null;

  /**
   * Liquid template text body.
   */
  text_body?: string | null;

  /**
   * Structured variable requirements. Required variables cannot define defaults;
   * invalid combinations return 422. Set to `null` to clear the schema.
   */
  variable_schema?: { [key: string]: EmailTemplateReplaceParams.VariableSchema } | null;

  variables?: Array<string>;
}

export namespace EmailTemplateReplaceParams {
  export interface VariableSchema {
    /**
     * Whether the variable must be supplied when strict variable validation is
     * enabled.
     */
    required: boolean;

    /**
     * Default value for an optional variable. Rejected when `required` is `true`.
     */
    default?: string;
  }
}

export interface EmailTemplateUpdateParams {
  /**
   * Per-template HTML autoescaping setting.
   */
  autoescape?: boolean;

  /**
   * Liquid template HTML body.
   */
  html_body?: string | null;

  name?: string;

  /**
   * Per-template strict variable-validation setting.
   */
  strict_variables?: boolean;

  /**
   * Liquid template subject.
   */
  subject?: string | null;

  /**
   * Liquid template text body.
   */
  text_body?: string | null;

  /**
   * Structured variable requirements. Required variables cannot define defaults;
   * invalid combinations return 422. Set to `null` to clear the schema.
   */
  variable_schema?: { [key: string]: EmailTemplateUpdateParams.VariableSchema } | null;

  variables?: Array<string>;
}

export namespace EmailTemplateUpdateParams {
  export interface VariableSchema {
    /**
     * Whether the variable must be supplied when strict variable validation is
     * enabled.
     */
    required: boolean;

    /**
     * Default value for an optional variable. Rejected when `required` is `true`.
     */
    default?: string;
  }
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
