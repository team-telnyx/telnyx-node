// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Connect calendars and manage automatic meeting joins.
 */
export class Meetings extends APIResource {
  /**
   * List tracked meetings in a window. Defaults from now through seven days from
   * now. from must not exceed to and the window must not exceed 31 days.
   * bot_will_join is the effective policy decision; check session_id and the linked
   * session status for actual attendance.
   *
   * @example
   * ```ts
   * const meetings =
   *   await client.calendarConnections.meetings.list('id');
   * ```
   */
  list(
    id: string,
    query: MeetingListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeetingListResponse> {
    return this._client.get(path`/calendar_connections/${id}/meetings`, { query, ...options });
  }

  /**
   * Set an individual meeting override: true opts in, false opts out, null follows
   * the connection policy. A supported meeting link is required. Changes re-evaluate
   * the meeting immediately; poll the linked session for its final lifecycle
   * outcome.
   *
   * @example
   * ```ts
   * const meeting =
   *   await client.calendarConnections.meetings.update(
   *     'meeting_id',
   *     { id: 'id', bot_will_join: false },
   *   );
   * ```
   */
  update(
    meetingID: string,
    params: MeetingUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MeetingUpdateResponse> {
    const { id, ...body } = params;
    return this._client.patch(path`/calendar_connections/${id}/meetings/${meetingID}`, { body, ...options });
  }
}

export interface CalendarMeeting {
  /**
   * Tracked calendar meeting ID.
   */
  id: string;

  /**
   * Calendar attendees; identity fields are cleared after the retention window.
   */
  attendees: Array<CalendarMeeting.Attendee>;

  /**
   * Effective policy decision, not proof that the bot has joined.
   */
  bot_will_join: boolean;

  /**
   * Explicit override; null follows the connection policy.
   */
  bot_will_join_override: boolean | null;

  /**
   * Scheduling decision.
   */
  decision:
    | 'pending'
    | 'scheduled'
    | 'skipped_policy'
    | 'skipped_no_url'
    | 'skipped_duplicate'
    | 'skipped_unsupported'
    | 'cancelled';

  /**
   * Event end time.
   */
  end_time: string | null;

  /**
   * Whether the connected calendar user is not the organizer.
   */
  is_external_organizer: boolean | null;

  organizer: CalendarMeeting.Organizer | null;

  /**
   * Detected meeting platform.
   */
  platform: 'zoom' | 'google_meet' | 'teams' | 'webex' | 'unknown';

  /**
   * Linked meeting session ID, or null until one exists.
   */
  session_id: string | null;

  /**
   * Event start time.
   */
  start_time: string;
}

export namespace CalendarMeeting {
  export interface Attendee {
    /**
     * Display name.
     */
    display_name: string | null;

    /**
     * Email address.
     */
    email: string | null;

    /**
     * Whether attendance is optional.
     */
    optional: boolean | null;

    /**
     * Calendar RSVP status.
     */
    response_status: string | null;

    /**
     * Whether this is the connected calendar user.
     */
    self: boolean | null;
  }

  export interface Organizer {
    /**
     * Display name.
     */
    display_name: string | null;

    /**
     * Email address.
     */
    email: string | null;

    /**
     * Whether this is the connected calendar user.
     */
    self: boolean | null;
  }
}

export interface MeetingUpdateResponse {
  data: CalendarMeeting;
}

export interface MeetingListResponse {
  data: Array<CalendarMeeting>;
}

export interface MeetingListParams {
  /**
   * Window start; defaults to now.
   */
  from?: string;

  /**
   * Window end; defaults to seven days from now.
   */
  to?: string;
}

export interface MeetingUpdateParams {
  /**
   * Path param: Calendar connection ID.
   */
  id: string;

  /**
   * Body param: True opts in, false opts out, null follows connection policy. A
   * supported meeting URL is still required.
   */
  bot_will_join: boolean | null;
}

export declare namespace Meetings {
  export {
    type CalendarMeeting as CalendarMeeting,
    type MeetingUpdateResponse as MeetingUpdateResponse,
    type MeetingListResponse as MeetingListResponse,
    type MeetingListParams as MeetingListParams,
    type MeetingUpdateParams as MeetingUpdateParams,
  };
}
