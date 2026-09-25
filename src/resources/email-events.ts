// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EmailEventsAPI from './email-events';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Retrieve account-level email events and event statistics.
 */
export class EmailEvents extends APIResource {
  /**
   * Lists account-level email events sorted oldest first by
   * `occurred_at asc, id asc`. Each row contains a legacy email.-prefixed event_type
   * and an additive canonical_event_type. Gateway rejection renders email.failed
   * with canonical email.gw_reject; ambiguous injection timeout renders
   * email.injection_timeout in both; MTA expiration renders email.bounced with
   * canonical email.expired. Message-scoped queued, sending, sandbox, cancelled, and
   * daily_limit_exceeded rows fan out per durable recipient with stable derived IDs
   * matching webhook delivery. Scheduled is the cardinality exception: account
   * polling retains one message-scoped scheduled row with its stored event ID, while
   * scheduled webhook publication fans out per recipient with derived IDs; reconcile
   * scheduled events by message ID, event type, and occurrence time rather than
   * event UUID. Recipient-scoped stored rows retain their stored UUIDs across
   * polling and webhook delivery. Legacy names are derived from stored rows; an
   * AdminBounce row stored as failed renders email.failed in polling while its
   * webhook retains email.bounced, both with canonical email.failed.
   */
  list(
    query: EmailEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailEventListResponse> {
    return this._client.get('/email_events', { query, ...options });
  }

  /**
   * Returns counts and rates for email events over a time range. The default start
   * time is 30 days ago.
   */
  retrieveStats(
    query: EmailEventRetrieveStatsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EmailEventRetrieveStatsResponse> {
    return this._client.get('/email_events/stats', { query, ...options });
  }
}

/**
 * Bare stored event names returned by message history. In addition to the normal
 * send and delivery lifecycle, polling can expose suppression, scan, and
 * quarantine lifecycle rows. Sharp canonical names gw_reject, injection_timeout,
 * and expired distinguish gateway rejection, ambiguous injection timeout, and MTA
 * expiration. The failed and bounced names remain valid for system/admin failures
 * and hard bounces respectively. Existing stored rows retain their original names.
 */
export type EmailEventType =
  | 'queued'
  | 'deferred'
  | 'scheduled'
  | 'cancelled'
  | 'sandbox'
  | 'sending'
  | 'sent'
  | 'failed'
  | 'delivered'
  | 'bounced'
  | 'complained'
  | 'suppressed'
  | 'rejected'
  | 'opened'
  | 'clicked'
  | 'unsubscribed'
  | 'daily_limit_exceeded'
  | 'scan_deferred'
  | 'quarantined'
  | 'quarantine_released'
  | 'quarantine_release_dispatched'
  | 'quarantine_rejected'
  | 'quarantine_expired'
  | 'gw_reject'
  | 'injection_timeout'
  | 'expired';

export interface EmailWebhookRecipient {
  email: string;

  kind?: 'to' | 'cc' | 'bcc';

  name?: string | null;
}

export interface TimeRange {
  from: string | null;

  to: string | null;
}

export interface EmailEventListResponse {
  data: Array<EmailEventListResponse.Data>;

  meta: EmailEventListResponse.Meta;
}

export namespace EmailEventListResponse {
  /**
   * An account-polling event. The envelope is webhook-shaped, but polling preserves
   * stored-event cardinality: queued, sending, sandbox, cancelled, and
   * daily_limit_exceeded message events fan out per recipient; scheduled remains one
   * message-scoped row. Payload fields vary among recipient-scoped, message-scoped,
   * and minimal fallback rows.
   */
  export interface Data {
    /**
     * Event UUID.
     */
    id: string;

    /**
     * Additive canonical outcome name, prefixed with `email.`. Gateway rejection is
     * `email.gw_reject`, ambiguous injection timeout is `email.injection_timeout`, and
     * MTA expiration is `email.expired`. Unchanged outcomes retain their names.
     * Existing stored rows are translated only when recorded payload evidence proves
     * the outcome; a legacy failed row is not guessed or sharpened.
     */
    canonical_event_type: string;

    /**
     * Legacy customer-visible event name, prefixed with `email.`. Gateway rejections
     * render `email.failed`; MTA expirations render `email.bounced`. Webhook
     * subscription allowlists match the legacy name.
     */
    event_type: string;

    occurred_at: string;

    /**
     * Payload returned by GET /email_events. Every row includes id, status, and
     * occurred_at. Recipient-scoped rows also include recipient_id, from, subject, and
     * exactly one object-valued to, cc, or bcc field. Legacy or message-scoped rows
     * can omit recipient_id and use object-valued or string-valued to/cc fields,
     * including an empty string when no address exists; bcc is redacted. If the
     * related message or recipient cannot be loaded, the minimal fallback can omit
     * from, subject, and recipient fields. Additional persisted public evidence can be
     * present.
     */
    payload: Data.Payload;

    /**
     * Durable email recipient UUID. Present for recipient-scoped events, including
     * each queued, sending, sandbox, cancelled, and daily_limit_exceeded fan-out
     * event.
     */
    recipient_id?: string;
  }

  export namespace Data {
    /**
     * Payload returned by GET /email_events. Every row includes id, status, and
     * occurred_at. Recipient-scoped rows also include recipient_id, from, subject, and
     * exactly one object-valued to, cc, or bcc field. Legacy or message-scoped rows
     * can omit recipient_id and use object-valued or string-valued to/cc fields,
     * including an empty string when no address exists; bcc is redacted. If the
     * related message or recipient cannot be loaded, the minimal fallback can omit
     * from, subject, and recipient fields. Additional persisted public evidence can be
     * present.
     */
    export interface Payload {
      /**
       * Email message UUID.
       */
      id: string;

      occurred_at: string;

      /**
       * Stored event outcome slug, not the authoritative recipient status. Account
       * polling returns the stored name, including suppression, scan, and quarantine
       * lifecycle names. Webhooks retain legacy payload names: gateway rejections use
       * failed and MTA expirations use bounced. New sharp stored rows can expose
       * gw_reject, injection_timeout, or expired. Use the envelope canonical_event_type
       * to identify the outcome across surfaces.
       */
      status:
        | 'queued'
        | 'deferred'
        | 'scheduled'
        | 'cancelled'
        | 'sandbox'
        | 'sending'
        | 'sent'
        | 'failed'
        | 'delivered'
        | 'bounced'
        | 'complained'
        | 'suppressed'
        | 'rejected'
        | 'opened'
        | 'clicked'
        | 'unsubscribed'
        | 'daily_limit_exceeded'
        | 'scan_deferred'
        | 'quarantined'
        | 'quarantine_released'
        | 'quarantine_release_dispatched'
        | 'quarantine_rejected'
        | 'quarantine_expired'
        | 'gw_reject'
        | 'injection_timeout'
        | 'expired';

      bcc?: EmailEventsAPI.EmailWebhookRecipient | 'redacted';

      /**
       * Legacy message-scoped address, or an empty string when absent.
       */
      cc?: EmailEventsAPI.EmailWebhookRecipient | string;

      /**
       * Sender projection in account event polling. The display name is explicitly null
       * when the message has no sender name.
       */
      from?: Payload.From;

      /**
       * Durable email recipient UUID. Present for recipient-scoped events.
       */
      recipient_id?: string;

      subject?: string;

      /**
       * Legacy message-scoped address, or an empty string when absent.
       */
      to?: EmailEventsAPI.EmailWebhookRecipient | string;

      [k: string]: unknown;
    }

    export namespace Payload {
      /**
       * Sender projection in account event polling. The display name is explicitly null
       * when the message has no sender name.
       */
      export interface From {
        email: string;

        name: string | null;
      }
    }
  }

  export interface Meta {
    page_size: number;

    time_range: EmailEventsAPI.TimeRange;

    /**
     * Cursor for the next page, when more results are available.
     */
    page_cursor?: string;
  }
}

export interface EmailEventRetrieveStatsResponse {
  data: EmailEventRetrieveStatsResponse.Data;
}

export namespace EmailEventRetrieveStatsResponse {
  export interface Data {
    /**
     * Recipient-level outcome counts for the queried time range. Each to, cc, and bcc
     * recipient counts separately; repeated events of the same type for the same
     * message and recipient count once. Partial MTA injection results count successful
     * recipients as sent and unsuccessful recipients as failed. Only the ten listed
     * event types are counted; other valid event types (scheduled, cancelled, sandbox,
     * sending, rejected) are not included in stats.
     */
    counts: Data.Counts;

    /**
     * Recipient-level event rates as percentages, rounded to 2 decimal places.
     */
    rates: Data.Rates;

    record_type: 'email_event_stats';

    time_range: EmailEventsAPI.TimeRange;
  }

  export namespace Data {
    /**
     * Recipient-level outcome counts for the queried time range. Each to, cc, and bcc
     * recipient counts separately; repeated events of the same type for the same
     * message and recipient count once. Partial MTA injection results count successful
     * recipients as sent and unsuccessful recipients as failed. Only the ten listed
     * event types are counted; other valid event types (scheduled, cancelled, sandbox,
     * sending, rejected) are not included in stats.
     */
    export interface Counts {
      bounced: number;

      clicked: number;

      complained: number;

      deferred: number;

      delivered: number;

      failed: number;

      opened: number;

      queued: number;

      sent: number;

      unsubscribed: number;
    }

    /**
     * Recipient-level event rates as percentages, rounded to 2 decimal places.
     */
    export interface Rates {
      /**
       * Bounced recipients / queued recipients as a percentage.
       */
      bounce_rate: number;

      /**
       * Recipients clicked / recipients opened as a percentage.
       */
      click_rate: number;

      /**
       * Recipients with a complaint feedback report / delivered recipients as a
       * percentage.
       */
      complaint_rate: number;

      /**
       * Deferred recipients / queued recipients as a percentage.
       */
      deferred_rate: number;

      /**
       * Delivered recipients / queued recipients as a percentage.
       */
      delivery_rate: number;

      /**
       * Recipients opened / recipients delivered as a percentage.
       */
      open_rate: number;
    }
  }
}

export interface EmailEventListParams {
  /**
   * Filter events for a specific email message UUID. Invalid UUID values are
   * silently ignored (no filter applied).
   */
  email_id?: string;

  /**
   * Comma-separated list of event types to include. Also accepts repeated query
   * parameters (e.g. event_type=delivered&event_type=bounced). Unknown values return
   * no matches.
   *
   * Dual-name compatibility: values are accepted bare or `email.`-prefixed. A legacy
   * value keeps matching the rows it matched pre-rename — no widening: `failed` also
   * matches the rows that now store the canonical names of the outcomes it covered
   * (`gw_reject`, `injection_timeout`, `expired`); `bounced` matches stored
   * `bounced` rows only (recipient-scoped Expirations stored `failed` pre-rename and
   * never matched `bounced`, so `expired` is deliberately not a `bounced`
   * expansion). A canonical value matches its own rows plus legacy rows whose
   * recorded payload evidence proves that outcome (`expired` also surfaces legacy
   * `bounced` rows with `bounce_category: transient`). The additive
   * `canonical_event_type` field in each response row names the canonical outcome.
   */
  event_type?: string | Array<string>;

  /**
   * Inclusive ISO 8601 start timestamp. Defaults to 30 days ago when omitted.
   */
  from?: string;

  /**
   * Number of results to return. Defaults to 25; maximum is 100. Invalid values are
   * clamped to the valid range.
   */
  page_size?: number;

  /**
   * Opaque URL-safe Base64 cursor returned by a previous event list response. The
   * legacy `page[after]` and flat `page_cursor` forms are also accepted.
   */
  'page[cursor]'?: string;

  /**
   * Inclusive ISO 8601 end timestamp. When `from` is provided without `to`, defaults
   * to `from + 30 days`.
   */
  to?: string;
}

export interface EmailEventRetrieveStatsParams {
  /**
   * Inclusive ISO 8601 start timestamp. Defaults to 30 days ago when omitted.
   */
  from?: string;

  /**
   * Inclusive ISO 8601 end timestamp. When `from` is provided without `to`, defaults
   * to `from + 30 days`.
   */
  to?: string;
}

export declare namespace EmailEvents {
  export {
    type EmailEventType as EmailEventType,
    type EmailWebhookRecipient as EmailWebhookRecipient,
    type TimeRange as TimeRange,
    type EmailEventListResponse as EmailEventListResponse,
    type EmailEventRetrieveStatsResponse as EmailEventRetrieveStatsResponse,
    type EmailEventListParams as EmailEventListParams,
    type EmailEventRetrieveStatsParams as EmailEventRetrieveStatsParams,
  };
}
