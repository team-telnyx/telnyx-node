// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

/**
 * Connect calendars and manage automatic meeting joins.
 */
export class Calendar extends APIResource {
  /**
   * Browser redirect after calendar consent. Use the returned oauth_url rather than
   * constructing this request. Verified state identifies the connecting user.
   * Returns HTML for success, cancellation, or failure; no JSON error envelope or
   * bearer token is used.
   */
  retrieveOAuthCallback(
    query: CalendarRetrieveOAuthCallbackParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.get('/meeting_bot/calendar/oauth_callback', {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'text/html' }, options?.headers]),
    });
  }
}

export type CalendarRetrieveOAuthCallbackResponse = string;

export interface CalendarRetrieveOAuthCallbackParams {
  /**
   * Authorization code supplied by the calendar provider.
   */
  code?: string;

  /**
   * Authorization error supplied by the calendar provider, such as access_denied.
   */
  error?: string;

  /**
   * Unmodified signed state from the authorization URL.
   */
  state?: string;
}

export declare namespace Calendar {
  export {
    type CalendarRetrieveOAuthCallbackResponse as CalendarRetrieveOAuthCallbackResponse,
    type CalendarRetrieveOAuthCallbackParams as CalendarRetrieveOAuthCallbackParams,
  };
}
