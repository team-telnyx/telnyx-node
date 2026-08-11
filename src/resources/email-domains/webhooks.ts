// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Per-domain webhook endpoints with event subscriptions
 */
export class Webhooks extends APIResource {
  /**
   * Returns a paginated list of webhook subscriptions scoped to the email domain.
   * Results can be sorted by creation time.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const emailWebhook of client.emailDomains.webhooks.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    domainID: string,
    query: WebhookListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailWebhooksDefaultFlatPagination, EmailWebhook> {
    return this._client.getAPIList(
      path`/email_domains/${domainID}/webhooks`,
      DefaultFlatPagination<EmailWebhook>,
      { query, ...options },
    );
  }

  /**
   * Creates a webhook endpoint subscribed to a specific allowlist of event types.
   * Both `email.*` events (published by email-api) and `email_domain.*` events
   * (published by this service) flow through the same webhooks.
   *
   * @example
   * ```ts
   * const emailWebhookResponse =
   *   await client.emailDomains.webhooks.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       events: [
   *         'email.sent',
   *         'email.delivered',
   *         'email.bounced',
   *       ],
   *       url: 'https://example.com/webhooks/email',
   *     },
   *   );
   * ```
   */
  create(
    domainID: string,
    body: WebhookCreateParams,
    options?: RequestOptions,
  ): APIPromise<EmailWebhookResponse> {
    return this._client.post(path`/email_domains/${domainID}/webhooks`, { body, ...options });
  }

  /**
   * Deletes the webhook subscription identified by ID within the specified email
   * domain and returns the deleted subscription.
   *
   * @example
   * ```ts
   * const emailWebhookResponse =
   *   await client.emailDomains.webhooks.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: WebhookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<EmailWebhookResponse> {
    const { domain_id } = params;
    return this._client.delete(path`/email_domains/${domain_id}/webhooks/${id}`, options);
  }

  /**
   * Returns the webhook subscription identified by ID within the specified email
   * domain.
   *
   * @example
   * ```ts
   * const emailWebhookResponse =
   *   await client.emailDomains.webhooks.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  retrieve(
    id: string,
    params: WebhookRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<EmailWebhookResponse> {
    const { domain_id } = params;
    return this._client.get(path`/email_domains/${domain_id}/webhooks/${id}`, options);
  }

  /**
   * Update a webhook's URL and/or event subscription. A webhook is bound to its
   * domain — `domain_id` is not mutable.
   *
   * @example
   * ```ts
   * const emailWebhookResponse =
   *   await client.emailDomains.webhooks.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       domain_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       events: [
   *         'email.sent',
   *         'email.delivered',
   *         'email.opened',
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EmailWebhookResponse> {
    const { domain_id, ...body } = params;
    return this._client.patch(path`/email_domains/${domain_id}/webhooks/${id}`, { body, ...options });
  }
}

export type EmailWebhooksDefaultFlatPagination = DefaultFlatPagination<EmailWebhook>;

export interface EmailWebhook {
  id: string;

  created_at: string;

  domain_id: string;

  /**
   * Allowlist of event types delivered to this webhook. At least one event is
   * required — there is no default-to-all.
   */
  events: Array<EmailWebhookEvent>;

  record_type: 'email_webhook';

  updated_at: string;

  /**
   * HTTPS endpoint to deliver subscribed events to.
   */
  url: string;
}

/**
 * Event types a webhook may subscribe to. The union of email._ events (published
 * by email-api) and email_domain._ lifecycle events (published by this service).
 * An event not listed here can never be subscribed to and is silently dropped.
 */
export type EmailWebhookEvent =
  | 'email.scheduled'
  | 'email.sandbox'
  | 'email.queued'
  | 'email.sending'
  | 'email.sent'
  | 'email.delivered'
  | 'email.deferred'
  | 'email.bounced'
  | 'email.failed'
  | 'email.complained'
  | 'email.opened'
  | 'email.clicked'
  | 'email.unsubscribed'
  | 'email.received'
  | 'email_domain.created'
  | 'email_domain.verified'
  | 'email_domain.degraded'
  | 'email_domain.suspended'
  | 'email_domain.deleted';

export interface EmailWebhookResponse {
  data: EmailWebhook;
}

export interface OffsetPaginationMeta {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

export interface WebhookListParams extends DefaultFlatPaginationParams {
  /**
   * Field to sort by. Prefix with `-` for descending order.
   */
  sort?: 'created_at' | '-created_at';
}

export interface WebhookCreateParams {
  /**
   * At least one event type is required.
   */
  events: Array<EmailWebhookEvent>;

  /**
   * HTTPS endpoint to deliver subscribed events to.
   */
  url: string;
}

export interface WebhookDeleteParams {
  /**
   * Email domain UUID
   */
  domain_id: string;
}

export interface WebhookRetrieveParams {
  /**
   * Email domain UUID
   */
  domain_id: string;
}

export interface WebhookUpdateParams {
  /**
   * Path param: Email domain UUID
   */
  domain_id: string;

  /**
   * Body param
   */
  events?: Array<EmailWebhookEvent>;

  /**
   * Body param
   */
  url?: string;
}

export declare namespace Webhooks {
  export {
    type EmailWebhook as EmailWebhook,
    type EmailWebhookEvent as EmailWebhookEvent,
    type EmailWebhookResponse as EmailWebhookResponse,
    type OffsetPaginationMeta as OffsetPaginationMeta,
    type EmailWebhooksDefaultFlatPagination as EmailWebhooksDefaultFlatPagination,
    type WebhookListParams as WebhookListParams,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookRetrieveParams as WebhookRetrieveParams,
    type WebhookUpdateParams as WebhookUpdateParams,
  };
}
