// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CalendarConnectionsAPI from './calendar-connections';
import * as MeetingsAPI from './meetings';
import {
  CalendarMeeting,
  MeetingListParams,
  MeetingListResponse,
  MeetingUpdateParams,
  MeetingUpdateResponse,
  Meetings,
} from './meetings';
import * as MeetingSessionsAPI from '../meeting-sessions/meeting-sessions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Connect calendars and manage automatic meeting joins.
 */
export class CalendarConnections extends APIResource {
  meetings: MeetingsAPI.Meetings = new MeetingsAPI.Meetings(this._client);

  /**
   * List only the authenticated connecting user’s calendar connections. Session
   * resources created by those connections are shared within the organization.
   *
   * @example
   * ```ts
   * const calendarConnections =
   *   await client.calendarConnections.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<CalendarConnectionListResponse> {
    return this._client.get('/calendar_connections', options);
  }

  /**
   * Start Google Calendar or Microsoft Outlook OAuth. Open oauth_url in a browser.
   * No connection exists until authorization succeeds. The resulting connection is
   * owned by the connecting user.
   *
   * @example
   * ```ts
   * const calendarConnection =
   *   await client.calendarConnections.create({
   *     platform: 'google_calendar',
   *   });
   * ```
   */
  create(
    body: CalendarConnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<CalendarConnectionCreateResponse> {
    return this._client.post('/calendar_connections', { body, ...options });
  }

  /**
   * Disconnect the calendar, cancel future joins, and clear retained calendar
   * identity fields. Previously created session records, transcripts, artifacts, and
   * Storage objects remain. The response is the updated connection.
   *
   * @example
   * ```ts
   * const calendarConnectionResponse =
   *   await client.calendarConnections.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<CalendarConnectionResponse> {
    return this._client.delete(path`/calendar_connections/${id}`, options);
  }

  /**
   * Retrieve a calendar connection owned by the authenticated connecting user.
   * Missing and foreign connections both return 404. Signing secrets are omitted.
   *
   * @example
   * ```ts
   * const calendarConnectionResponse =
   *   await client.calendarConnections.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CalendarConnectionResponse> {
    return this._client.get(path`/calendar_connections/${id}`, options);
  }

  /**
   * Update policy or defaults for future sessions. Supply at least one field.
   * Existing sessions retain their configuration. Null clears nullable overrides.
   * Assistant, recording, and webhook defaults apply to Google Meet and Teams.
   * Assistant defaults require default_barge_in to be false or null and
   * default_voice to be null. Recording=true requires a destination; false rejects
   * one. A non-null default_webhook_url update returns webhook_secret once; save it
   * to verify future session deliveries.
   *
   * @example
   * ```ts
   * const calendarConnection =
   *   await client.calendarConnections.update('id', {
   *     default_recording: true,
   *     default_recording_export: {
   *       bucket: 'meeting-recordings',
   *     },
   *     default_webhook_url:
   *       'https://example.com/meeting-events',
   *   });
   * ```
   */
  update(
    id: string,
    body: CalendarConnectionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CalendarConnectionUpdateResponse> {
    return this._client.patch(path`/calendar_connections/${id}`, { body, ...options });
  }
}

export interface CalendarConnection {
  /**
   * Calendar connection ID.
   */
  id: string;

  /**
   * all_meetings joins eligible events; external_organizer_excluded requires the
   * connected user to be the organizer; per_meeting requires an explicit opt-in.
   */
  auto_join_policy: 'all_meetings' | 'external_organizer_excluded' | 'per_meeting';

  /**
   * Bot display name; null clears the override.
   */
  bot_name: string | null;

  /**
   * Creation time.
   */
  created_at: string;

  default_assistant: MeetingSessionAssistant | null;

  /**
   * Default manual speech interruption. Cannot be true with default_assistant.
   */
  default_barge_in: boolean | null;

  /**
   * Google Meet and Teams recording intent. When null, recording is enabled only if
   * a destination is set. True requires default_recording_export; false cannot be
   * combined with a destination.
   */
  default_recording: boolean | null;

  /**
   * Customer-owned Telnyx Storage destination for recording exports. Uses the
   * authenticated organization and user; do not supply credentials, region,
   * organization ID or object key.
   */
  default_recording_export: MeetingSessionsAPI.MeetingSessionRecordingDestination | null;

  /**
   * Generate a summary when each future session transcript finalizes.
   */
  default_summarize_on_end: boolean | null;

  /**
   * Manual-speech voice; must be null when default_assistant is set.
   */
  default_voice: string | null;

  /**
   * HTTPS destination for future session webhooks. Null clears the default. A
   * non-null update returns webhook_secret once; save it to verify signatures for
   * sessions created with this default. Existing sessions retain their original
   * signing secret.
   */
  default_webhook_url: string | null;

  /**
   * Calendar provider: Google Calendar or Microsoft Outlook.
   */
  platform: 'google_calendar' | 'microsoft_outlook';

  /**
   * Connected calendar email address.
   */
  platform_email: string | null;

  /**
   * Connection status.
   */
  status: 'connected' | 'disconnected' | 'error';

  /**
   * Additional connection status detail.
   */
  status_detail: string | null;

  /**
   * Last update time.
   */
  updated_at: string;
}

export interface CalendarConnectionResponse {
  data: CalendarConnection;
}

export interface MeetingSessionAssistant {
  /**
   * Identifier of the assistant.
   */
  id: string;

  /**
   * Audio gating strategy in force for the assistant call leg.
   */
  audio_gate: 'half_duplex' | 'full_duplex';

  /**
   * Whether the bot leaves when the Assistant's conversation ends or fails.
   */
  leave_on_end: boolean;

  /**
   * Dynamic variables in individual-session responses; null when none were supplied.
   * Omitted from session list items.
   */
  dynamic_variables?: { [key: string]: string } | null;
}

export interface CalendarConnectionCreateResponse {
  data: CalendarConnectionCreateResponse.Data;
}

export namespace CalendarConnectionCreateResponse {
  export interface Data {
    /**
     * Open in a browser to authorize calendar access.
     */
    oauth_url: string;

    /**
     * Calendar provider: Google Calendar or Microsoft Outlook.
     */
    platform: 'google_calendar' | 'microsoft_outlook';

    /**
     * Authorization has not completed.
     */
    status: 'pending_oauth';
  }
}

export interface CalendarConnectionUpdateResponse {
  data: CalendarConnectionUpdateResponse.Data;
}

export namespace CalendarConnectionUpdateResponse {
  export interface Data {
    /**
     * Calendar connection ID.
     */
    id: string;

    /**
     * all_meetings joins eligible events; external_organizer_excluded requires the
     * connected user to be the organizer; per_meeting requires an explicit opt-in.
     */
    auto_join_policy: 'all_meetings' | 'external_organizer_excluded' | 'per_meeting';

    /**
     * Bot display name; null clears the override.
     */
    bot_name: string | null;

    /**
     * Creation time.
     */
    created_at: string;

    default_assistant: CalendarConnectionsAPI.MeetingSessionAssistant | null;

    /**
     * Default manual speech interruption. Cannot be true with default_assistant.
     */
    default_barge_in: boolean | null;

    /**
     * Google Meet and Teams recording intent. When null, recording is enabled only if
     * a destination is set. True requires default_recording_export; false cannot be
     * combined with a destination.
     */
    default_recording: boolean | null;

    /**
     * Customer-owned Telnyx Storage destination for recording exports. Uses the
     * authenticated organization and user; do not supply credentials, region,
     * organization ID or object key.
     */
    default_recording_export: MeetingSessionsAPI.MeetingSessionRecordingDestination | null;

    /**
     * Generate a summary when each future session transcript finalizes.
     */
    default_summarize_on_end: boolean | null;

    /**
     * Manual-speech voice; must be null when default_assistant is set.
     */
    default_voice: string | null;

    /**
     * HTTPS destination for future session webhooks. Null clears the default. A
     * non-null update returns webhook_secret once; save it to verify signatures for
     * sessions created with this default. Existing sessions retain their original
     * signing secret.
     */
    default_webhook_url: string | null;

    /**
     * Calendar provider: Google Calendar or Microsoft Outlook.
     */
    platform: 'google_calendar' | 'microsoft_outlook';

    /**
     * Connected calendar email address.
     */
    platform_email: string | null;

    /**
     * Connection status.
     */
    status: 'connected' | 'disconnected' | 'error';

    /**
     * Additional connection status detail.
     */
    status_detail: string | null;

    /**
     * Last update time.
     */
    updated_at: string;

    /**
     * Returned only when PATCH supplies a non-null default_webhook_url. Not returned
     * by list or retrieve. Save this secret to verify webhooks for future sessions.
     */
    webhook_secret?: string;
  }
}

export interface CalendarConnectionListResponse {
  data: Array<CalendarConnection>;
}

export interface CalendarConnectionCreateParams {
  /**
   * Calendar provider: Google Calendar or Microsoft Outlook.
   */
  platform: 'google_calendar' | 'microsoft_outlook';
}

export interface CalendarConnectionUpdateParams {
  /**
   * all_meetings joins eligible events; external_organizer_excluded requires the
   * connected user to be the organizer; per_meeting requires an explicit opt-in.
   */
  auto_join_policy?: 'all_meetings' | 'external_organizer_excluded' | 'per_meeting';

  /**
   * Bot display name; null clears the override.
   */
  bot_name?: string | null;

  /**
   * Default assistant for future calendar-scheduled Google Meet and Teams sessions.
   * The saved configuration must fit within 8 KiB. Use id, audio_gate,
   * dynamic_variables, and leave_on_end; avatar is not accepted. audio_gate defaults
   * to full_duplex.
   */
  default_assistant?: CalendarConnectionUpdateParams.DefaultAssistant | null;

  /**
   * Default manual speech interruption. Cannot be true with default_assistant.
   */
  default_barge_in?: boolean | null;

  /**
   * Google Meet and Teams recording intent. When null, recording is enabled only if
   * a destination is set. True requires default_recording_export; false cannot be
   * combined with a destination.
   */
  default_recording?: boolean | null;

  /**
   * Customer-owned Telnyx Storage destination for recording exports. Uses the
   * authenticated organization and user; do not supply credentials, region,
   * organization ID or object key.
   */
  default_recording_export?: MeetingSessionsAPI.MeetingSessionRecordingDestination | null;

  /**
   * Generate a summary when each future session transcript finalizes.
   */
  default_summarize_on_end?: boolean | null;

  /**
   * Manual-speech voice; must be null when default_assistant is set.
   */
  default_voice?: string | null;

  /**
   * HTTPS destination for future session webhooks. Null clears the default. A
   * non-null update returns webhook_secret once; save it to verify signatures for
   * sessions created with this default. Existing sessions retain their original
   * signing secret.
   */
  default_webhook_url?: string | null;
}

export namespace CalendarConnectionUpdateParams {
  /**
   * Default assistant for future calendar-scheduled Google Meet and Teams sessions.
   * The saved configuration must fit within 8 KiB. Use id, audio_gate,
   * dynamic_variables, and leave_on_end; avatar is not accepted. audio_gate defaults
   * to full_duplex.
   */
  export interface DefaultAssistant {
    /**
     * Identifier of the assistant to attach.
     */
    id: string;

    /**
     * Use full_duplex (default) to allow participants to interrupt, or half_duplex to
     * pause listening while the assistant speaks. Full-duplex pricing depends on
     * participant audio usage; see the Meeting pricing guide.
     */
    audio_gate?: 'half_duplex' | 'full_duplex';

    /**
     * Per-conversation values for the
     * [dynamic variables](/docs/inference/ai-assistants/dynamic-variables) used in the
     * Assistant's instructions, greeting, or tools. Delivered before the Assistant's
     * first utterance, so they resolve for the opening line as well as the rest of the
     * conversation. At most 63 entries; keys 1-128 characters; values must be strings.
     * The map is budgeted in aggregate at 1,047,552 bytes (1023 KiB) rather than
     * capped per value. `streaming_audio`, `ai_assistant_streaming_audio` and
     * `meeting_session_id` are reserved and rejected with `400 invalid_request`.
     */
    dynamic_variables?: { [key: string]: string };

    /**
     * Leave when the assistant conversation ends or fails. Defaults to false. Other
     * leave-policy rules and explicit leave requests still apply.
     */
    leave_on_end?: boolean;
  }
}

CalendarConnections.Meetings = Meetings;

export declare namespace CalendarConnections {
  export {
    type CalendarConnection as CalendarConnection,
    type CalendarConnectionResponse as CalendarConnectionResponse,
    type MeetingSessionAssistant as MeetingSessionAssistant,
    type CalendarConnectionCreateResponse as CalendarConnectionCreateResponse,
    type CalendarConnectionUpdateResponse as CalendarConnectionUpdateResponse,
    type CalendarConnectionListResponse as CalendarConnectionListResponse,
    type CalendarConnectionCreateParams as CalendarConnectionCreateParams,
    type CalendarConnectionUpdateParams as CalendarConnectionUpdateParams,
  };

  export {
    Meetings as Meetings,
    type CalendarMeeting as CalendarMeeting,
    type MeetingUpdateResponse as MeetingUpdateResponse,
    type MeetingListResponse as MeetingListResponse,
    type MeetingListParams as MeetingListParams,
    type MeetingUpdateParams as MeetingUpdateParams,
  };
}
