// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EmailDomainsAPI from './email-domains';
import * as WebhooksAPI from './webhooks';
import {
  EmailWebhook,
  EmailWebhookEvent,
  EmailWebhookResponse,
  EmailWebhooksDefaultFlatPagination,
  OffsetPaginationMeta,
  WebhookCreateParams,
  WebhookDeleteParams,
  WebhookListParams,
  WebhookRetrieveParams,
  WebhookUpdateParams,
  Webhooks,
} from './webhooks';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EmailDomains extends APIResource {
  webhooks: WebhooksAPI.Webhooks = new WebhooksAPI.Webhooks(this._client);

  /**
   * Shared (`type: shared`) Telnyx-managed domains are included/readable for every
   * account, in addition to the account's own custom domains.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const emailDomain of client.emailDomains.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: EmailDomainListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<EmailDomainsDefaultFlatPagination, EmailDomain> {
    return this._client.getAPIList('/email_domains', DefaultFlatPagination<EmailDomain>, {
      query,
      ...options,
    });
  }

  /**
   * Registers a domain for email sending and optional inbound delivery. The response
   * includes the domain configuration and current verification state.
   *
   * @example
   * ```ts
   * const emailDomainResponse =
   *   await client.emailDomains.create({
   *     domain: 'example.com',
   *     inbound_enabled: true,
   *     tracking: {
   *       open_tracking: true,
   *       click_tracking: true,
   *       unsubscribe_tracking: false,
   *     },
   *   });
   * ```
   */
  create(body: EmailDomainCreateParams, options?: RequestOptions): APIPromise<EmailDomainResponse> {
    return this._client.post('/email_domains', { body, ...options });
  }

  /**
   * Returns the DNS records Telnyx generated for domain ownership and DKIM
   * verification, plus MX records when inbound delivery is enabled.
   *
   * @example
   * ```ts
   * const response =
   *   await client.emailDomains.retrieveDNSRecords(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieveDNSRecords(
    domainID: string,
    options?: RequestOptions,
  ): APIPromise<EmailDomainRetrieveDNSRecordsResponse> {
    return this._client.get(path`/email_domains/${domainID}/dns_records`, options);
  }

  /**
   * Checks the published DNS records against the records required for the email
   * domain and returns the latest verification results.
   *
   * @example
   * ```ts
   * const emailDomainResponse =
   *   await client.emailDomains.verify(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  verify(domainID: string, options?: RequestOptions): APIPromise<EmailDomainResponse> {
    return this._client.post(path`/email_domains/${domainID}/verify`, options);
  }

  /**
   * Deletes an email domain configuration. Verified domains require `force=true`,
   * and shared domains are read-only for non-owner accounts.
   *
   * @example
   * ```ts
   * const emailDomainResponse =
   *   await client.emailDomains.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  delete(
    id: string,
    params: EmailDomainDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailDomainResponse> {
    const { force } = params ?? {};
    return this._client.delete(path`/email_domains/${id}`, { query: { force }, ...options });
  }

  /**
   * Shared (`type: shared`) Telnyx-managed domains are included/readable for every
   * account, in addition to the account's own custom domains.
   *
   * @example
   * ```ts
   * const emailDomainResponse =
   *   await client.emailDomains.retrieve(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<EmailDomainResponse> {
    return this._client.get(path`/email_domains/${id}`, options);
  }

  /**
   * Updates mutable settings for an existing email domain, including inbound
   * delivery and tracking configuration. Shared domains are read-only for non-owner
   * accounts.
   *
   * @example
   * ```ts
   * const emailDomainResponse =
   *   await client.emailDomains.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       inbound_enabled: true,
   *       tracking: { open_tracking: false },
   *     },
   *   );
   * ```
   */
  update(
    id: string,
    body: EmailDomainUpdateParams,
    options?: RequestOptions,
  ): APIPromise<EmailDomainResponse> {
    return this._client.patch(path`/email_domains/${id}`, { body, ...options });
  }

  /**
   * Returns a summary of domain health including verification status and usability.
   *
   * @example
   * ```ts
   * const response = await client.emailDomains.retrieveHealth(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieveHealth(id: string, options?: RequestOptions): APIPromise<EmailDomainRetrieveHealthResponse> {
    return this._client.get(path`/email_domains/${id}/health`, options);
  }
}

export type EmailDomainsDefaultFlatPagination = DefaultFlatPagination<EmailDomain>;

export interface DNSRecord {
  id: string;

  host: string;

  purpose: 'ownership' | 'spf' | 'dkim' | 'dmarc' | 'mx';

  record_type: 'TXT' | 'MX';

  required: boolean;

  status: 'pending' | 'verified' | 'failed' | 'not_required';

  value: string;

  actual_value?: string | null;

  priority?: number | null;
}

export interface DomainsTrackingSettings {
  /**
   * Rewrite HTML links through a tracking redirect to record click events.
   */
  click_tracking?: boolean;

  /**
   * Inject a tracking pixel into HTML messages to record open events.
   */
  open_tracking?: boolean;

  /**
   * Add RFC 8058 List-Unsubscribe headers with a signed one-click unsubscribe URL.
   * Enabled by default; Gmail/Yahoo bulk-sender rules require one-click unsubscribe
   * support.
   */
  unsubscribe_tracking?: boolean;
}

/**
 * DMARC policy for a sending domain. Drives the recommended \_dmarc.<domain> TXT
 * record. DMARC is advisory and never blocks sending. When omitted or null, the
 * domain uses the advisory default (v=DMARC1; p=none;
 * rua=mailto:dmarc@telnyx.com).
 */
export interface EmailDmarcPolicy {
  /**
   * Policy applied to messages that fail alignment.
   */
  p?: 'none' | 'quarantine' | 'reject';

  /**
   * Percentage of messages the policy applies to. Omitted from the record when 100.
   */
  pct?: number;

  /**
   * URI for aggregate reports. Defaults to the Telnyx address when absent; null
   * omits it.
   */
  rua?: string | null;

  /**
   * Policy for subdomains. Omitted from the record when null.
   */
  sp?: 'none' | 'quarantine' | 'reject' | null;
}

export interface EmailDomain {
  id: string;

  created_at: string;

  dkim: EmailDomain.Dkim;

  /**
   * DMARC policy for a sending domain. Drives the recommended \_dmarc.<domain> TXT
   * record. DMARC is advisory and never blocks sending. When omitted or null, the
   * domain uses the advisory default (v=DMARC1; p=none;
   * rua=mailto:dmarc@telnyx.com).
   */
  dmarc_policy: EmailDmarcPolicy | null;

  dns_records: Array<DNSRecord>;

  domain: string;

  inbound: EmailDomain.Inbound;

  record_type: 'email_domain';

  status: EmailDomainStatus;

  tracking: DomainsTrackingSettings;

  /**
   * Domain type. `custom` domains are account-owned (BYOD). `shared` domains are
   * Telnyx-managed, visible to and usable by ALL accounts for sending, but
   * read-only: only the owning (system) account may modify, verify, or delete them;
   * other accounts receive 403 (code 10008).
   */
  type: EmailDomainType;

  updated_at: string;

  usable_for_inbound: boolean;

  usable_for_sending: boolean;

  verification: EmailDomainVerification;

  /**
   * Sender reputation for this domain (present on all domain responses).
   */
  reputation?: EmailDomain.Reputation;

  verified_at?: string | null;
}

export namespace EmailDomain {
  export interface Dkim {
    active: boolean;

    algorithm: 'rsa-sha256' | null;

    key_length: 2048 | null;

    rotated_at: string | null;

    selector: string | null;
  }

  export interface Inbound {
    catch_all: boolean;

    enabled: boolean;

    mx_required: boolean;
  }

  /**
   * Sender reputation for this domain (present on all domain responses).
   */
  export interface Reputation {
    /**
     * Reputation band, e.g. good/warn/poor.
     */
    band?: string;

    breakdown?: { [key: string]: unknown };

    computed_at?: string | null;
  }
}

export interface EmailDomainResponse {
  data: EmailDomain;
}

export type EmailDomainStatus = 'pending' | 'verifying' | 'verified' | 'failed' | 'degraded' | 'suspended';

export type EmailDomainType = 'custom' | 'shared' | 'shared_inbound';

export interface EmailDomainVerification {
  dkim: 'pending' | 'verified' | 'failed';

  dmarc: 'missing_optional' | 'verified' | 'failed';

  mx: 'not_required' | 'pending' | 'verified' | 'failed';

  ownership: 'pending' | 'verified' | 'not_required';

  spf: 'missing_optional' | 'verified' | 'failed' | 'not_required';
}

export interface EmailDomainRetrieveDNSRecordsResponse {
  data: Array<DNSRecord>;
}

export interface EmailDomainRetrieveHealthResponse {
  data: EmailDomainRetrieveHealthResponse.Data;
}

export namespace EmailDomainRetrieveHealthResponse {
  export interface Data {
    /**
     * Unique identifier for the email domain
     */
    id: string;

    /**
     * Timestamp of the last health check
     */
    checked_at: string;

    /**
     * Record type discriminator
     */
    record_type: 'email_domain_health';

    /**
     * Current domain status
     */
    status: 'pending' | 'verifying' | 'verified' | 'failed' | 'degraded' | 'suspended';

    /**
     * Whether the domain is usable for receiving inbound email
     */
    usable_for_inbound: boolean;

    /**
     * Whether the domain is usable for sending email
     */
    usable_for_sending: boolean;

    verification: EmailDomainsAPI.EmailDomainVerification;
  }
}

export interface EmailDomainListParams extends DefaultFlatPaginationParams {
  /**
   * Partial match on domain name (case-insensitive)
   */
  'filter[domain]'?: string;

  /**
   * Filter by profile UUID
   */
  'filter[profile_id]'?: string;

  'filter[status]'?: EmailDomainStatus;

  'filter[type]'?: EmailDomainType;

  'filter[usable_for_inbound]'?: boolean;

  'filter[usable_for_sending]'?: boolean;

  /**
   * Cursor for records after the provided value (cursor pagination)
   */
  'page[after]'?: string;

  /**
   * Cursor for records before the provided value (cursor pagination)
   */
  'page[before]'?: string;

  /**
   * Field to sort by. Prefix with `-` for descending order.
   */
  sort?: 'created_at' | '-created_at' | 'domain' | '-domain';
}

export interface EmailDomainCreateParams {
  domain: string;

  /**
   * DMARC policy for a sending domain. Drives the recommended \_dmarc.<domain> TXT
   * record. DMARC is advisory and never blocks sending. When omitted or null, the
   * domain uses the advisory default (v=DMARC1; p=none;
   * rua=mailto:dmarc@telnyx.com).
   */
  dmarc_policy?: EmailDmarcPolicy | null;

  /**
   * Enable inbound routing for this domain
   */
  inbound_enabled?: boolean;

  tracking?: DomainsTrackingSettings;
}

export interface EmailDomainDeleteParams {
  /**
   * Required as true when deleting verified domains
   */
  force?: boolean;
}

export interface EmailDomainUpdateParams {
  /**
   * DMARC policy for a sending domain. Drives the recommended \_dmarc.<domain> TXT
   * record. DMARC is advisory and never blocks sending. When omitted or null, the
   * domain uses the advisory default (v=DMARC1; p=none;
   * rua=mailto:dmarc@telnyx.com).
   */
  dmarc_policy?: EmailDmarcPolicy | null;

  /**
   * Enable or disable inbound routing for this domain
   */
  inbound_enabled?: boolean;

  tracking?: DomainsTrackingSettings;
}

EmailDomains.Webhooks = Webhooks;

export declare namespace EmailDomains {
  export {
    type DNSRecord as DNSRecord,
    type DomainsTrackingSettings as DomainsTrackingSettings,
    type EmailDmarcPolicy as EmailDmarcPolicy,
    type EmailDomain as EmailDomain,
    type EmailDomainResponse as EmailDomainResponse,
    type EmailDomainStatus as EmailDomainStatus,
    type EmailDomainType as EmailDomainType,
    type EmailDomainVerification as EmailDomainVerification,
    type EmailDomainRetrieveDNSRecordsResponse as EmailDomainRetrieveDNSRecordsResponse,
    type EmailDomainRetrieveHealthResponse as EmailDomainRetrieveHealthResponse,
    type EmailDomainsDefaultFlatPagination as EmailDomainsDefaultFlatPagination,
    type EmailDomainListParams as EmailDomainListParams,
    type EmailDomainCreateParams as EmailDomainCreateParams,
    type EmailDomainDeleteParams as EmailDomainDeleteParams,
    type EmailDomainUpdateParams as EmailDomainUpdateParams,
  };

  export {
    Webhooks as Webhooks,
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
