// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as EmailEventsAPI from './email-events';
import * as DraftsAPI from './email-inboxes/drafts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Retrieve account-level email events and event statistics.
 */
export class EmailEvents extends APIResource {
  /**
   * Lists account-level email events sorted oldest first by
   * `occurred_at asc, id asc`.
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
  | 'rejected'
  | 'opened'
  | 'clicked'
  | 'unsubscribed'
  | 'daily_limit_exceeded';

export interface TimeRange {
  from: string | null;

  to: string | null;
}

export interface EmailEventListResponse {
  data: Array<EmailEventListResponse.Data>;

  meta: EmailEventListResponse.Meta;
}

export namespace EmailEventListResponse {
  export interface Data {
    id: string;

    email_id: string;

    occurred_at: string;

    record_type: 'email_event';

    type: EmailEventsAPI.EmailEventType;

    /**
     * Summary of the associated email message. Present when the email_message preload
     * is available.
     */
    email?: Data.Email;

    payload?: { [key: string]: unknown };
  }

  export namespace Data {
    /**
     * Summary of the associated email message. Present when the email_message preload
     * is available.
     */
    export interface Email {
      cc: Array<DraftsAPI.EmailAddress>;

      from: DraftsAPI.EmailAddress;

      subject: string;

      to: Array<DraftsAPI.EmailAddress>;
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
   */
  event_type?: string | Array<string>;

  /**
   * Inclusive ISO 8601 start timestamp. Defaults to 30 days ago when omitted.
   */
  from?: string;

  /**
   * Opaque URL-safe Base64 cursor returned by a previous list response.
   */
  page_cursor?: string;

  /**
   * Number of results to return. Defaults to 25; maximum is 100. Invalid values are
   * clamped to the valid range.
   */
  page_size?: number;

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
    type TimeRange as TimeRange,
    type EmailEventListResponse as EmailEventListResponse,
    type EmailEventRetrieveStatsResponse as EmailEventRetrieveStatsResponse,
    type EmailEventListParams as EmailEventListParams,
    type EmailEventRetrieveStatsParams as EmailEventRetrieveStatsParams,
  };
}
