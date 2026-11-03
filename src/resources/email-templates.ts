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
   * Lists templates sorted newest first by `created_at desc, id desc`. Optional
   * filters match a case-insensitive literal name/subject query, stored body
   * presence, and the `strict_variables` and `autoescape` settings. Filters
   * intersect, remain scoped to the authenticated account, and apply before cursor
   * pagination. Invalid filter names or values return 400.
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

export interface EmailTemplate extends EmailTemplateCommon {
  subject: string | null;
}

export interface EmailTemplateCommon {
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

  text_body: string | null;

  updated_at: string;

  /**
   * Structured variable requirements, or `null` when the template uses only the
   * legacy `variables` array.
   */
  variable_schema: { [key: string]: VariableSchemaEntry } | null;

  /**
   * Persisted variable names. In `explicit` mode this array preserves the exact
   * provided order, duplicates, and string contents; in `automatic` mode it is
   * derived from the stored subject and bodies.
   */
  variables: Array<string>;

  /**
   * `automatic` when variable names are derived from template content; `explicit`
   * when `variables` is the exact manually managed array.
   */
  variables_mode: 'automatic' | 'explicit';
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
  variable_schema?: { [key: string]: VariableSchemaEntry } | null;

  /**
   * Persisted variable names. In `automatic` mode a non-null array is rejected; in
   * `explicit` mode this is the exact manual array and each item is limited to 255
   * Unicode code points.
   */
  variables?: Array<string> | null;

  /**
   * Controls how `variables` is maintained. Setting `automatic` re-extracts
   * immediately from the effective subject, HTML body, and text body and rejects a
   * simultaneous non-null array. Setting `explicit` requires the exact non-null
   * array, including valid `[]`. With the mode omitted, a non-null array selects
   * explicit mode, null selects automatic mode, and omitting both fields preserves
   * the current mode. Source-content changes re-extract only in automatic mode.
   */
  variables_mode?: 'automatic' | 'explicit';
}

export interface VariableSchemaEntry {
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

export interface EmailTemplateRenderResponse {
  /**
   * Template object with `subject`, `html_body`, and `text_body` replaced by their
   * Liquid-rendered values. Rendered content is not limited by the stored
   * template-field lengths. All other template fields remain unchanged.
   */
  data: EmailTemplateRenderResponse.Data;
}

export namespace EmailTemplateRenderResponse {
  /**
   * Template object with `subject`, `html_body`, and `text_body` replaced by their
   * Liquid-rendered values. Rendered content is not limited by the stored
   * template-field lengths. All other template fields remain unchanged.
   */
  export interface Data extends EmailTemplatesAPI.EmailTemplateCommon {
    subject: string | null;
  }
}

export interface EmailTemplateListParams extends EmailCursorPaginationParams {
  /**
   * Exact match on the template's `autoescape` option. Only the exact query strings
   * `true` and `false` are accepted; other values, including blank, return 400.
   */
  'filter[autoescape]'?: 'true' | 'false';

  /**
   * Matches templates by stored body presence. `html_and_text` requires both an HTML
   * and text body; `html_only` requires HTML and no text body; `text_only` requires
   * text and no HTML body; `no_body` requires neither. `null` and exactly `""` count
   * as absent; whitespace-only strings count as content. An empty or unsupported
   * value returns a 400 response.
   */
  'filter[content_type]'?: 'html_and_text' | 'html_only' | 'text_only' | 'no_body';

  /**
   * Case-insensitive literal substring match over the template `name` or stored
   * `subject` only; bodies are never searched. `%`, `_`, and `\` are literal
   * characters with no wildcard meaning. A blank value is treated as omitted.
   */
  'filter[query]'?: string;

  /**
   * Exact match on the template's `strict_variables` option. Only the exact query
   * strings `true` and `false` are accepted; other values, including blank,
   * return 400.
   */
  'filter[strict_variables]'?: 'true' | 'false';
}

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
  variable_schema?: { [key: string]: VariableSchemaEntry } | null;

  /**
   * Body param: Persisted variable names. In `automatic` mode a non-null array is
   * rejected; in `explicit` mode this is the exact manual array and each item is
   * limited to 255 Unicode code points.
   */
  variables?: Array<string> | null;

  /**
   * Body param: Controls how `variables` is maintained. If both fields are omitted
   * (or `variables` is null), the template uses `automatic` mode and extracts
   * variable names from the effective subject, HTML body, and text body. A non-null
   * `variables` array with no mode selects `explicit`. `automatic` rejects a
   * simultaneous non-null array; `explicit` requires a non-null array, including
   * valid `[]`, and preserves its exact order, duplicates, and string contents.
   */
  variables_mode?: 'automatic' | 'explicit';

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
  variable_schema?: { [key: string]: VariableSchemaEntry } | null;

  /**
   * Persisted variable names. In `automatic` mode a non-null array is rejected; in
   * `explicit` mode this is the exact manual array and each item is limited to 255
   * Unicode code points.
   */
  variables?: Array<string> | null;

  /**
   * Controls how `variables` is maintained. Setting `automatic` re-extracts
   * immediately from the effective subject, HTML body, and text body and rejects a
   * simultaneous non-null array. Setting `explicit` requires the exact non-null
   * array, including valid `[]`. With the mode omitted, a non-null array selects
   * explicit mode, null selects automatic mode, and omitting both fields preserves
   * the current mode. Source-content changes re-extract only in automatic mode.
   */
  variables_mode?: 'automatic' | 'explicit';
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
  variable_schema?: { [key: string]: VariableSchemaEntry } | null;

  /**
   * Persisted variable names. In `automatic` mode a non-null array is rejected; in
   * `explicit` mode this is the exact manual array and each item is limited to 255
   * Unicode code points.
   */
  variables?: Array<string> | null;

  /**
   * Controls how `variables` is maintained. Setting `automatic` re-extracts
   * immediately from the effective subject, HTML body, and text body and rejects a
   * simultaneous non-null array. Setting `explicit` requires the exact non-null
   * array, including valid `[]`. With the mode omitted, a non-null array selects
   * explicit mode, null selects automatic mode, and omitting both fields preserves
   * the current mode. Source-content changes re-extract only in automatic mode.
   */
  variables_mode?: 'automatic' | 'explicit';
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
    type EmailTemplateCommon as EmailTemplateCommon,
    type EmailTemplateResponse as EmailTemplateResponse,
    type UpdateEmailTemplateRequest as UpdateEmailTemplateRequest,
    type VariableSchemaEntry as VariableSchemaEntry,
    type EmailTemplateRenderResponse as EmailTemplateRenderResponse,
    type EmailTemplatesEmailCursorPagination as EmailTemplatesEmailCursorPagination,
    type EmailTemplateListParams as EmailTemplateListParams,
    type EmailTemplateCreateParams as EmailTemplateCreateParams,
    type EmailTemplateReplaceParams as EmailTemplateReplaceParams,
    type EmailTemplateUpdateParams as EmailTemplateUpdateParams,
    type EmailTemplateRenderParams as EmailTemplateRenderParams,
  };
}
