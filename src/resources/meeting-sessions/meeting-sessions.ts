// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MeetingSessionsAPI from './meeting-sessions';
import * as CalendarConnectionsAPI from '../calendar-connections/calendar-connections';
import * as ActionsAPI from './actions';
import { ActionAcceptedResponse, ActionSendChatParams, ActionSpeakParams, Actions } from './actions';
import * as ArtifactsAPI from './artifacts';
import {
  ArtifactCreateParams,
  ArtifactListResponse,
  ArtifactRetrieveParams,
  Artifacts,
  MeetingSessionArtifact,
  MeetingSessionArtifactResponse,
} from './artifacts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MeetingSessions extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
  artifacts: ArtifactsAPI.Artifacts = new ArtifactsAPI.Artifacts(this._client);

  /**
   * Returns a list of meeting sessions, optionally filtered by status. List items
   * omit assistant.dynamic_variables and recording_export. Some items include
   * remote_state_observed_at; retrieve the individual session for current state.
   *
   * @example
   * ```ts
   * const meetingSessions = await client.meetingSessions.list();
   * ```
   */
  list(
    query: MeetingSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeetingSessionListResponse> {
    return this._client.get('/meeting_sessions', { query, ...options });
  }

  /**
   * Creates a meeting session and returns 201, or 200 for a replay. Use a unique
   * `idempotency_key` per intended join and reuse the same key and request on
   * retries. Reusing a key with a different join configuration or meeting URL can
   * return 409 invalid_state. Always retry with the original request. The session
   * can pass through joining and waiting_for_admission before active. Optional
   * `camera_image` input is write-only and applies when no assistant avatar takes
   * precedence. An ignored URL is not fetched. An effective URL source is resolved
   * before bot creation; the source URL and image bytes are not returned in the
   * session response. Treat signed URLs as credentials. With
   * `assistant.avatar: true`, the assistant is read before the bot is created: an
   * assistant without a Telnyx avatar configured is rejected with 400
   * `invalid_request` (message prefix `assistant_avatar_not_configured:`), an
   * unknown assistant with 400 `invalid_request` (prefix `assistant_not_found:`),
   * and a failed lookup with 503 `assistant_lookup_unavailable`; no bot is created
   * in any of these cases.
   *
   * @example
   * ```ts
   * const meetingSessionResponse =
   *   await client.meetingSessions.create({
   *     meeting_url: 'https://zoom.us/j/1234567890',
   *   });
   * ```
   */
  create(body: MeetingSessionCreateParams, options?: RequestOptions): APIPromise<MeetingSessionResponse> {
    return this._client.post('/meeting_sessions', { body, ...options });
  }

  /**
   * Stops a meeting session without deleting its persisted record. Scheduled bots
   * are cancelled, while bots that are joining or active are asked to leave. The
   * persisted meeting session record remains available. A successful response can
   * report leaving while departure is pending. Poll until ended, failed, or
   * admission_denied. Exported Storage objects are unaffected.
   *
   * @example
   * ```ts
   * const meetingSessionResponse =
   *   await client.meetingSessions.delete(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<MeetingSessionResponse> {
    return this._client.delete(path`/meeting_sessions/${id}`, options);
  }

  /**
   * Retrieves a single meeting session by ID. A session that does not exist or that
   * belongs to a different account both return 404.
   *
   * @example
   * ```ts
   * const meetingSessionResponse =
   *   await client.meetingSessions.retrieve(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<MeetingSessionResponse> {
    return this._client.get(path`/meeting_sessions/${id}`, options);
  }

  /**
   * Updates mutable properties of a meeting session. Only sessions in the scheduled
   * state can be updated; any other state returns 409 with the invalid_state error
   * code. All request fields are optional, and an empty object is a valid no-op
   * update. Calendar-controlled Google Meet and Teams sessions return 409
   * calendar_managed; change the event instead. A conflicting pending edit returns
   * 409 edit_in_progress. On a timeout or 503, read the session and retry the same
   * changes.
   *
   * @example
   * ```ts
   * const meetingSessionResponse =
   *   await client.meetingSessions.update(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     { join_at: '2026-08-05T17:00:00Z' },
   *   );
   * ```
   */
  update(
    id: string,
    body: MeetingSessionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<MeetingSessionResponse> {
    return this._client.patch(path`/meeting_sessions/${id}`, { body, ...options });
  }

  /**
   * Returns stored events ordered by ascending `seq`. To continue, pass the last
   * returned item's `seq` as `after`. An empty page means no later stored events
   * existed at read time; this operation returns no separate next-page cursor.
   * Default `limit` is 100 and maximum is 1,000.
   *
   * @example
   * ```ts
   * const response =
   *   await client.meetingSessions.retrieveEvents(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  retrieveEvents(
    id: string,
    query: MeetingSessionRetrieveEventsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeetingSessionRetrieveEventsResponse> {
    return this._client.get(path`/meeting_sessions/${id}/events`, { query, ...options });
  }

  /**
   * Irreversibly requests deletion of the aggregate recording media for the session.
   * The operation retains the Telnyx-local Meeting session, transcript segments,
   * events, artifacts, and usage records. It is separate from
   * `DELETE /meeting_sessions/{id}`, which stops or cancels participation without
   * deleting the persisted session. A missing/foreign session returns 404; a
   * deletion request whose outcome is unknown returns 502. Customer Storage exports
   * do not support this operation (422 unsupported_capability); delete the exported
   * object through Storage instead. Stopping a session does not delete an exported
   * object.
   *
   * @example
   * ```ts
   * const response =
   *   await client.meetingSessions.deleteRecordingMedia(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  deleteRecordingMedia(
    id: string,
    options?: RequestOptions,
  ): APIPromise<MeetingSessionDeleteRecordingMediaResponse> {
    return this._client.delete(path`/meeting_sessions/${id}/recording_media`, options);
  }

  /**
   * Returns transcript segments ordered by ascending seq. Default limit is 100,
   * maximum 1000. Continue with after=meta.next_after. On an empty page,
   * meta.next_after preserves a positive supplied after cursor, or is null when no
   * positive cursor was supplied. wait_seconds holds an empty read for up to 25
   * seconds; a timeout still returns 200.
   *
   * @example
   * ```ts
   * const response =
   *   await client.meetingSessions.retrieveTranscript(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  retrieveTranscript(
    id: string,
    query: MeetingSessionRetrieveTranscriptParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MeetingSessionRetrieveTranscriptResponse> {
    return this._client.get(path`/meeting_sessions/${id}/transcript`, { query, ...options });
  }

  /**
   * Retrieve recording export status. Customer Storage exports include
   * recording_export with the bucket, region, key and pending/exported/failed
   * status, or null when no reference is available. The data array is empty for
   * these exports. Download or share the object using the Storage API once its
   * status is exported. Zoom recordings and existing Google Meet or Teams recordings
   * held by the Meeting service continue returning temporary download links in data
   * through this same endpoint and session ID. Those recordings do not require
   * Storage setup or migration. Refresh this endpoint when a link expires. Select
   * the download method from the returned fields, not the platform alone.
   *
   * @example
   * ```ts
   * const response =
   *   await client.meetingSessions.retrieveRecordings(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  retrieveRecordings(
    id: string,
    options?: RequestOptions,
  ): APIPromise<MeetingSessionRetrieveRecordingsResponse> {
    return this._client.get(path`/meeting_sessions/${id}/recordings`, options);
  }
}

/**
 * Represents a meeting session. Core serializer fields are required;
 * platform-specific fields are optional. Nullable fields use null when absent. No
 * actor, provider-bot, idempotency, routing, key, or internal fields are exposed.
 */
export interface MeetingSession {
  /**
   * Unique identifier for the meeting session.
   */
  id: string;

  /**
   * Identifier of the owning account.
   */
  account_id: string;

  /**
   * Assistant configuration if an assistant is attached, otherwise null.
   */
  assistant: CalendarConnectionsAPI.MeetingSessionAssistant | null;

  /**
   * Current state of the assistant, or null if no assistant is attached.
   */
  assistant_state: 'starting' | 'connected' | 'failed' | 'ended' | null;

  /**
   * Timestamp of the last assistant state change, or null.
   */
  assistant_state_changed_at: string | null;

  /**
   * The assistant's avatar, captured from its `avatar_settings` when the session was
   * created. For display only; later changes to the assistant do not update it.
   */
  avatar: MeetingSession.Avatar | null;

  /**
   * Current state of the avatar, or null if the session has no avatar. `starting`
   * until the avatar's video is playing, then `connected`; `degraded` when the
   * session has fallen back to voice-only (the `avatar.degraded` event carries the
   * reason); `disconnected` when the avatar has ended.
   */
  avatar_state: 'starting' | 'connected' | 'degraded' | 'disconnected' | null;

  /**
   * Timestamp of the last avatar state change, or null.
   */
  avatar_state_changed_at: string | null;

  /**
   * Display name of the bot in the meeting.
   */
  bot_name: string;

  config: MeetingSession.Config;

  /**
   * Timestamp when the session was created.
   */
  created_at: string;

  /**
   * Timestamp when the session ended, or null if ongoing.
   */
  ended_at: string | null;

  /**
   * A machine-readable lifecycle reason, or null. Values include left_on_request,
   * meeting_ended, everyone_left, no_one_joined, silence_timeout,
   * max_duration_reached, admission_timeout, admission_denied, removed_from_meeting,
   * recording_permission_denied, meeting_not_found, meeting_not_started,
   * meeting_access_denied, meeting_full, cancelled, cancelled_calendar_disconnected,
   * cancelled_calendar_event_deleted, cancelled_calendar_superseded,
   * cancelled_policy, internal_error, and other. Treat this vocabulary as
   * extensible.
   */
  failure_reason: string | null;

  /**
   * Scheduled join time, or null for immediate join.
   */
  join_at: string | null;

  /**
   * Timestamp when the session first became `active`, or null if it never became
   * active. This remains positive admission evidence after terminal transitions.
   */
  joined_at: string | null;

  /**
   * The meeting URL the bot joins.
   */
  meeting_url: string;

  /**
   * Arbitrary key-value metadata attached to the session.
   */
  metadata: { [key: string]: unknown };

  /**
   * Detected meeting platform.
   */
  platform: 'zoom' | 'google_meet' | 'teams' | 'webex' | 'unknown';

  /**
   * Always telnyx.
   */
  provider: 'telnyx';

  /**
   * Whether the session is being recorded.
   */
  recording: boolean;

  /**
   * Lifecycle status. `waiting_for_admission` means the bot reached the meeting
   * lobby and may require host approval. `active` means the bot entered the
   * meeting/media path. `ended` alone does not prove attendance; use non-null
   * `joined_at` as positive evidence that the session became active.
   * `admission_denied` is reserved for an explicit provider denial, while
   * cancellation or another termination can end a never-admitted session as `ended`.
   */
  status:
    | 'scheduled'
    | 'joining'
    | 'waiting_for_admission'
    | 'active'
    | 'leaving'
    | 'ended'
    | 'failed'
    | 'admission_denied';

  /**
   * A machine-readable lifecycle reason, or null. Values include left_on_request,
   * meeting_ended, everyone_left, no_one_joined, silence_timeout,
   * max_duration_reached, admission_timeout, admission_denied, removed_from_meeting,
   * recording_permission_denied, meeting_not_found, meeting_not_started,
   * meeting_access_denied, meeting_full, cancelled, cancelled_calendar_disconnected,
   * cancelled_calendar_event_deleted, cancelled_calendar_superseded,
   * cancelled_policy, internal_error, and other. Treat this vocabulary as
   * extensible.
   */
  status_detail: string | null;

  /**
   * Timestamp of the last update to the session.
   */
  updated_at: string;

  /**
   * Webhook endpoint for session lifecycle callbacks, or null if not configured.
   */
  webhook_url: string | null;

  /**
   * Customer Storage recording reference. Pending is not downloadable; exported
   * means upload was verified; failed is terminal. Download with ordinary Storage
   * authorization. No presigned URL is returned.
   */
  recording_export?: MeetingSessionRecordingExport | null;

  /**
   * Optional observation time on session list items. Retrieve the individual session
   * when current state is required.
   */
  remote_state_observed_at?: string;
}

export namespace MeetingSession {
  /**
   * The assistant's avatar, captured from its `avatar_settings` when the session was
   * created. For display only; later changes to the assistant do not update it.
   */
  export interface Avatar {
    /**
     * Identifier of the avatar.
     */
    avatar_id: string;

    /**
     * Identifier of the avatar's background.
     */
    background_id: string;

    /**
     * Avatar rendering model, for example `foxtrot-1`.
     */
    model: string;

    /**
     * Avatar provider identifier.
     */
    provider: 'telnyx';
  }

  export interface Config {
    /**
     * When enabled, a human participant `speech_on` event interrupts and stops the
     * current bot audio; it does not bypass admission or initiate speech. Assistant
     * sessions reject `barge_in: true`.
     */
    barge_in: boolean;

    /**
     * The message posted to chat on join, or null when unset.
     */
    chat_on_enter: string | null;

    /**
     * Detection settings. Enabling audio or video detection is currently unsupported.
     */
    deepfake_detection: Config.DeepfakeDetection;

    /**
     * Text spoken on meeting entry, or null if not set.
     */
    speak_on_enter: string | null;

    /**
     * Whether a summary artifact is generated on session end.
     */
    summarize_on_end: boolean;

    /**
     * Configured voice identifier, or null if not set.
     */
    voice: string | null;

    /**
     * Automatic departure settings for Google Meet and Teams. Omitted fields use the
     * default behavior. Set at creation; cannot be changed later. Zoom ignores this
     * policy.
     */
    leave_policy?: MeetingSessionsAPI.MeetingSessionLeavePolicy;

    /**
     * Recording intent set at creation for Google Meet and Teams. Distinct from the
     * top-level recording field, which reports current activity.
     */
    recording?: boolean;

    /**
     * Non-default recording layout. Omitted for the default speaker_view layout.
     */
    recording_view?: 'gallery_view' | 'speaker_view_no_sidebar';
  }

  export namespace Config {
    /**
     * Detection settings. Enabling audio or video detection is currently unsupported.
     */
    export interface DeepfakeDetection {
      audio: boolean;

      video: boolean;
    }
  }
}

/**
 * Automatic departure settings for Google Meet and Teams. Omitted fields use the
 * default behavior. Set at creation; cannot be changed later. Zoom ignores this
 * policy.
 */
export interface MeetingSessionLeavePolicy {
  /**
   * Seconds alone after another participant has attended and left. Does not start
   * just because the bot arrives first.
   */
  alone_seconds?: number;

  /**
   * Case-insensitive names or phrases identifying other bots to exclude when
   * deciding whether this bot is alone. Matching splits names on spaces, hyphens and
   * underscores. Null or an empty array disables filtering.
   */
  bot_name_keywords?: Array<string> | null;

  /**
   * Seconds to wait for the host to start the meeting.
   */
  host_wait_seconds?: number;

  /**
   * Seconds to wait for lobby admission.
   */
  lobby_wait_seconds?: number;

  /**
   * Maximum seconds after joining. Null means no per-join duration limit; service
   * safety limits still apply.
   */
  max_duration_seconds?: number | null;

  /**
   * Seconds after joining before silence detection starts a fresh inactivity timer.
   */
  silence_grace_seconds?: number;

  /**
   * Continuous audio inactivity before departure after the silence grace period.
   */
  silence_seconds?: number;
}

/**
 * Customer-owned Telnyx Storage destination for recording exports. Uses the
 * authenticated organization and user; do not supply credentials, region,
 * organization ID or object key.
 */
export interface MeetingSessionRecordingDestination {
  /**
   * Existing accessible bucket. Consecutive dots and IPv4-address names are
   * rejected.
   */
  bucket: string;

  /**
   * Optional object-key prefix. One trailing slash is normalized. Empty path
   * segments, . and .. segments are rejected.
   */
  prefix?: string;
}

/**
 * Customer Storage recording reference. Pending is not downloadable; exported
 * means upload was verified; failed is terminal. Download with ordinary Storage
 * authorization. No presigned URL is returned.
 */
export interface MeetingSessionRecordingExport {
  bucket: string;

  bytes: number | null;

  exported_at: string | null;

  key: string;

  region: string;

  status: 'pending' | 'exported' | 'failed';

  type: 'video';
}

export interface MeetingSessionResponse {
  /**
   * Represents a meeting session. Core serializer fields are required;
   * platform-specific fields are optional. Nullable fields use null when absent. No
   * actor, provider-bot, idempotency, routing, key, or internal fields are exposed.
   */
  data: MeetingSession;
}

export interface MeetingSessionListResponse {
  data: Array<MeetingSession>;
}

export interface MeetingSessionDeleteRecordingMediaResponse {
  data: MeetingSessionDeleteRecordingMediaResponse.Data;
}

export namespace MeetingSessionDeleteRecordingMediaResponse {
  export interface Data {
    deletion_status: 'requested' | 'already_in_progress';

    /**
     * The account-scoped Meeting Session identifier.
     */
    meeting_session_id: string;

    provider: 'telnyx';

    scope: 'provider_recording_media';
  }
}

export interface MeetingSessionRetrieveEventsResponse {
  data: Array<MeetingSessionRetrieveEventsResponse.Data>;
}

export namespace MeetingSessionRetrieveEventsResponse {
  export interface Data {
    occurred_at: string;

    payload: { [key: string]: unknown };

    seq: number;

    type: string;
  }
}

export interface MeetingSessionRetrieveRecordingsResponse {
  /**
   * Temporary download URLs for recordings held by the Meeting service, including
   * Zoom and existing Google Meet and Teams recordings. Empty for customer Storage
   * exports; use recording_export instead. Choose the download method from these
   * fields rather than the platform alone.
   */
  data: Array<MeetingSessionRetrieveRecordingsResponse.Data>;

  /**
   * Customer Storage recording reference. Pending is not downloadable; exported
   * means upload was verified; failed is terminal. Download with ordinary Storage
   * authorization. No presigned URL is returned.
   */
  recording_export?: MeetingSessionRecordingExport | null;
}

export namespace MeetingSessionRetrieveRecordingsResponse {
  export interface Data {
    expires_at: string | null;

    type: string;

    url: string;
  }
}

export interface MeetingSessionRetrieveTranscriptResponse {
  data: Array<MeetingSessionRetrieveTranscriptResponse.Data>;

  meta: MeetingSessionRetrieveTranscriptResponse.Meta;
}

export namespace MeetingSessionRetrieveTranscriptResponse {
  export interface Data {
    confidence: number | null;

    occurred_at: string;

    relative_ts: number | null;

    /**
     * Monotonic transcript append cursor. This is separate from the event-history
     * cursor and does not establish conversational turn order.
     */
    seq: number;

    /**
     * Recorded participant or bot label, or null when unavailable. Labels are
     * attribution, not verified identity. Segments from concurrent speakers can
     * finalize in a different order from the conversation.
     */
    speaker_label: string | null;

    text: string;
  }

  export interface Meta {
    /**
     * Cursor to pass as `after` on the next request, or null when the response
     * contains no segments.
     */
    next_after: number | null;
  }
}

export interface MeetingSessionListParams {
  /**
   * Filter meeting sessions by current status.
   */
  status?:
    | 'scheduled'
    | 'joining'
    | 'waiting_for_admission'
    | 'active'
    | 'leaving'
    | 'ended'
    | 'failed'
    | 'admission_denied';
}

export interface MeetingSessionCreateParams {
  /**
   * The meeting URL the bot should join.
   */
  meeting_url: string;

  /**
   * Attach a Telnyx AI Assistant owned by the authenticated account. Supply its ID
   * and optional conversation settings. Unknown fields are rejected.
   */
  assistant?: MeetingSessionCreateParams.Assistant;

  /**
   * When enabled, a human participant `speech_on` event interrupts and stops the
   * current bot audio; it does not bypass admission or initiate speech. Assistant
   * sessions reject `barge_in: true`.
   */
  barge_in?: boolean;

  /**
   * Display name for the bot in the meeting. Defaults to "Meeting Bot".
   */
  bot_name?: string;

  /**
   * Not supported for Google Meet and Teams joins (422 unsupported_capability).
   * Write-only static camera-tile image for this session, not an account or
   * participant profile photo. Supply exactly one JPEG source. When effective, the
   * image is used as the bot's static camera/video output; presentation varies by
   * meeting platform and recording configuration and is not guaranteed in
   * recordings. An attached assistant or avatar takes precedence, so this input is
   * ignored and a URL source is not fetched.
   */
  camera_image?:
    | MeetingSessionCreateParams.MeetingSessionCameraImageBase64Source
    | MeetingSessionCreateParams.MeetingSessionCameraImageURLSource;

  /**
   * A message the bot posts to the meeting's chat as soon as it becomes active —
   * typically a recording disclosure. Delivered at most once. Independent of
   * `speak_on_enter`: both may be set, and the chat message posts first because it
   * does not wait for text-to-speech or avatar startup. Rejected with 422
   * `unsupported_capability` on platforms without meeting chat. For Google Meet and
   * Teams, text must be nonblank, at most 4096 UTF-8 bytes, with no control
   * characters except tabs and line breaks. Counts toward the 1000-chat-request
   * session limit.
   */
  chat_on_enter?: string;

  /**
   * Use a unique key per intended join and reuse the same key and request on
   * retries. Reusing a key with a different join configuration or meeting URL can
   * return 409 invalid_state. Always retry with the original request.
   */
  idempotency_key?: string;

  /**
   * Future ISO-8601 join timestamp including timezone. Google Meet and Teams accept
   * dates at most three years ahead. Omit for an immediate join. Assistant sessions
   * created through this endpoint must join immediately.
   */
  join_at?: string;

  /**
   * Automatic departure settings for Google Meet and Teams. Omitted fields use the
   * default behavior. Set at creation; cannot be changed later. Zoom ignores this
   * policy.
   */
  leave_policy?: MeetingSessionLeavePolicy;

  /**
   * Arbitrary key-value metadata attached to the session. The serialized JSON
   * representation must not exceed 16384 characters at runtime.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Google Meet and Teams only. Defaults to true when recording_export is supplied
   * and false otherwise. True requires recording_export.bucket; false cannot be
   * combined with recording_export. Fixed at creation, with no pause/resume action.
   * Zoom rejects recording, recording_view, and recording_export with 422
   * unsupported_capability; omit these fields for Zoom.
   */
  recording?: boolean;

  /**
   * Customer-owned Telnyx Storage destination for recording exports. Uses the
   * authenticated organization and user; do not supply credentials, region,
   * organization ID or object key.
   */
  recording_export?: MeetingSessionRecordingDestination;

  /**
   * Recording layout for Google Meet and Teams. Defaults to speaker_view. Accepted
   * at creation only; does not enable recording by itself.
   */
  recording_view?: 'speaker_view' | 'gallery_view' | 'speaker_view_no_sidebar';

  /**
   * Text the bot speaks after joining. Available for sessions without a digital
   * avatar. With an AI Assistant, the greeting waits until the assistant is
   * connected. Rejected with 400 invalid_request when assistant.avatar is true.
   */
  speak_on_enter?: string;

  /**
   * If true, generate a summary artifact when the session ends.
   */
  summarize_on_end?: boolean;

  /**
   * Session-default voice identifier used for `speak_on_enter` and ordinary speak
   * actions. A voice supplied on an individual speak action overrides this default
   * for that utterance. With an assistant attached, its conversational voice remains
   * configured on the assistant.
   */
  voice?: string;

  /**
   * HTTPS endpoint to receive session lifecycle callbacks. Static validation
   * requires HTTPS, rejects embedded credentials and blocked hosts, and enforces
   * egress policy. Validation makes no network request to the endpoint.
   */
  webhook_url?: string;
}

export namespace MeetingSessionCreateParams {
  /**
   * Attach a Telnyx AI Assistant owned by the authenticated account. Supply its ID
   * and optional conversation settings. Unknown fields are rejected.
   */
  export interface Assistant {
    /**
     * Identifier of the assistant to attach.
     */
    id: string;

    /**
     * Use half_duplex (default) to pause listening while the assistant speaks, or
     * full_duplex to allow participants to interrupt. Full-duplex pricing depends on
     * participant audio usage; see the Meeting pricing guide.
     */
    audio_gate?: 'half_duplex' | 'full_duplex';

    /**
     * Beta. Show the avatar configured on the assistant (its `avatar_settings`; see
     * [AI Assistant avatars](/docs/inference/ai-assistants/avatars)) as the bot's
     * camera, lip-synced to the assistant's own speech. The request carries no avatar
     * ID or key: the assistant is read at creation and the request is rejected with
     * 400 `invalid_request` if it has no Telnyx avatar configured. Available for
     * Google Meet, Zoom, and Teams sessions. REST-only. Not echoed back on
     * `assistant`; the session's top-level `avatar` and `avatar_state` fields report
     * it instead. If the avatar fails, the session continues voice-only and
     * `avatar_state` becomes `degraded`.
     */
    avatar?: boolean;

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

  export interface MeetingSessionCameraImageBase64Source {
    /**
     * Canonical plain RFC 4648 Base64 for a valid decoded JPEG. Data URIs, whitespace,
     * and the URL-safe alphabet are rejected. The encoded value is limited to
     * 1,835,008 characters and the decoded JPEG to 1,363,148 bytes. The JPEG is
     * limited to 4,096 pixels per dimension, 4 megapixels, and 128 MB of decoder
     * memory. The image bytes are not returned in the session response.
     */
    base64_data: string;

    /**
     * Only JPEG images are accepted.
     */
    format: 'jpeg';
  }

  export interface MeetingSessionCameraImageURLSource {
    /**
     * Only JPEG images are accepted.
     */
    format: 'jpeg';

    /**
     * Public HTTPS JPEG URL with at most 2,048 characters and no credentials,
     * fragment, surrounding whitespace, raw control characters, or explicit
     * non-default port. Signed queries are allowed but must be treated as credentials.
     * Fetching is limited to public network destinations, a five-second timeout, no
     * redirects, a 2xx image/jpeg response with identity or no content encoding, and a
     * 1,363,148-byte limit enforced against both declared and streamed content. The
     * service resolves the URL before bot creation and does not return the URL or
     * image bytes in the session response.
     */
    url: string;
  }
}

export interface MeetingSessionUpdateParams {
  /**
   * Updated display name for the bot.
   */
  bot_name?: string;

  /**
   * ISO-8601 timestamp for the bot to join. May be updated to reschedule.
   */
  join_at?: string;
}

export interface MeetingSessionRetrieveEventsParams {
  /**
   * Return results with a cursor position after this value.
   */
  after?: number;

  /**
   * Maximum number of results to return per page.
   */
  limit?: number;
}

export interface MeetingSessionRetrieveTranscriptParams {
  /**
   * Return results with a cursor position after this value.
   */
  after?: number;

  /**
   * Maximum number of results to return per page.
   */
  limit?: number;

  /**
   * Long-poll duration in seconds. The server holds the connection open for up to
   * this many seconds, waiting for new or updated results before returning an empty
   * response. Set to 0 for an immediate response.
   */
  wait_seconds?: number;
}

MeetingSessions.Actions = Actions;
MeetingSessions.Artifacts = Artifacts;

export declare namespace MeetingSessions {
  export {
    type MeetingSession as MeetingSession,
    type MeetingSessionLeavePolicy as MeetingSessionLeavePolicy,
    type MeetingSessionRecordingDestination as MeetingSessionRecordingDestination,
    type MeetingSessionRecordingExport as MeetingSessionRecordingExport,
    type MeetingSessionResponse as MeetingSessionResponse,
    type MeetingSessionListResponse as MeetingSessionListResponse,
    type MeetingSessionDeleteRecordingMediaResponse as MeetingSessionDeleteRecordingMediaResponse,
    type MeetingSessionRetrieveEventsResponse as MeetingSessionRetrieveEventsResponse,
    type MeetingSessionRetrieveRecordingsResponse as MeetingSessionRetrieveRecordingsResponse,
    type MeetingSessionRetrieveTranscriptResponse as MeetingSessionRetrieveTranscriptResponse,
    type MeetingSessionListParams as MeetingSessionListParams,
    type MeetingSessionCreateParams as MeetingSessionCreateParams,
    type MeetingSessionUpdateParams as MeetingSessionUpdateParams,
    type MeetingSessionRetrieveEventsParams as MeetingSessionRetrieveEventsParams,
    type MeetingSessionRetrieveTranscriptParams as MeetingSessionRetrieveTranscriptParams,
  };

  export {
    Actions as Actions,
    type ActionAcceptedResponse as ActionAcceptedResponse,
    type ActionSendChatParams as ActionSendChatParams,
    type ActionSpeakParams as ActionSpeakParams,
  };

  export {
    Artifacts as Artifacts,
    type MeetingSessionArtifact as MeetingSessionArtifact,
    type MeetingSessionArtifactResponse as MeetingSessionArtifactResponse,
    type ArtifactListResponse as ArtifactListResponse,
    type ArtifactCreateParams as ArtifactCreateParams,
    type ArtifactRetrieveParams as ArtifactRetrieveParams,
  };
}
