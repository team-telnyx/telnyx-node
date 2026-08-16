// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
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
   * Returns a list of meeting sessions, optionally filtered by status.
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
   * Creates a new meeting session. When an idempotency_key is supplied in the
   * request body, replay lookup is scoped to the authenticated account and compares
   * only the key; the request payload is not fingerprinted or compared. If a session
   * with that key already exists for the account, the existing session is replayed
   * (200); otherwise a new session is created (201). Supports bring-your-own-key
   * (BYOK) configuration. The session may enter asynchronous states (e.g. joining,
   * waiting_for_admission) before becoming active. Optional `camera_image` input is
   * write-only and applies only when no Avatar or Assistant webpage output takes
   * precedence. An ignored URL is not fetched. An effective URL source is resolved
   * before bot creation; neither the source URL nor image bytes are persisted,
   * returned, or logged. Treat signed URLs as credentials.
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
   * persisted meeting session record remains available.
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
   * update.
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
   * **Not yet available in production** — this route is not currently routed on
   * api.telnyx.com and returns a generic 404; it is documented ahead of rollout.
   * Irreversibly requests deletion of provider-hosted aggregate recording media
   * under the provider contract. The operation retains the Telnyx-local Meeting
   * session, transcript segments, events, artifacts, and usage records. It is
   * separate from `DELETE /meeting_sessions/{id}`, which stops or cancels
   * participation without deleting the persisted session. A missing/foreign session
   * returns 404; provider deletion failures return 502.
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
   * Returns recordings for a meeting session.
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

  /**
   * Returns transcript segments ordered by ascending `seq`. Default `limit` is 100
   * and maximum is 1,000. Continue with `after=meta.next_after`. A long-poll timeout
   * returns 200 with empty `data` and `meta.next_after: null`; retain the cursor
   * supplied to that request because null is not a replacement cursor.
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
}

/**
 * Represents a meeting session. All serializer fields are present and required;
 * nullable fields use null when absent. No actor, provider-bot, idempotency,
 * routing, key, or internal fields are exposed.
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
  assistant: MeetingSession.Assistant | null;

  /**
   * Current state of the assistant, or null if no assistant is attached.
   */
  assistant_state: 'starting' | 'connected' | 'failed' | 'ended' | null;

  /**
   * Timestamp of the last assistant state change, or null.
   */
  assistant_state_changed_at: string | null;

  /**
   * Avatar configuration if an avatar is attached, otherwise null.
   */
  avatar: MeetingSession.Avatar | null;

  /**
   * Current state of the avatar connection, or null if no avatar is attached.
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
   * Human-readable failure reason if the session failed, or null.
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
   * Provider handling the meeting session.
   */
  provider: string;

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
   * Additional human-readable detail about the status, or null.
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
}

export namespace MeetingSession {
  /**
   * Assistant configuration if an assistant is attached, otherwise null.
   */
  export interface Assistant {
    /**
     * Identifier of the assistant.
     */
    id: string;

    /**
     * Audio gating strategy for the assistant call leg.
     */
    audio_gate: 'none' | 'half_duplex';
  }

  /**
   * Avatar configuration if an avatar is attached, otherwise null.
   */
  export interface Avatar {
    /**
     * Identifier of the avatar.
     */
    avatar_id: string;

    /**
     * Avatar provider identifier.
     */
    provider: 'anam';
  }

  export interface Config {
    /**
     * When enabled, a human participant `speech_on` event interrupts and stops the
     * current bot audio; it does not bypass admission or initiate speech. Assistant
     * sessions reject `barge_in: true`.
     */
    barge_in: boolean;

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
  }
}

export interface MeetingSessionResponse {
  /**
   * Represents a meeting session. All serializer fields are present and required;
   * nullable fields use null when absent. No actor, provider-bot, idempotency,
   * routing, key, or internal fields are exposed.
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

    provider: 'recall';

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
  data: Array<MeetingSessionRetrieveRecordingsResponse.Data>;
}

export namespace MeetingSessionRetrieveRecordingsResponse {
  export interface Data {
    /**
     * Expiry timestamp when supplied by the provider, or null. The current adapter
     * returns null.
     */
    expires_at: string | null;

    type: string;

    /**
     * Current provider download URL. The API does not guarantee URL lifetime or
     * refresh behavior.
     */
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

    seq: number;

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
   * Request options for attaching a voice assistant to the session. Routing fields
   * (`call_control_connection_id`, `from`, and `loopback_sip_uri`) are used only to
   * establish the assistant call leg and are omitted from response objects.
   * `audio_gate` is returned with `id` in the assistant response object.
   */
  assistant?: MeetingSessionCreateParams.Assistant;

  /**
   * Request options for attaching a bring-your-own-key avatar to the session.
   */
  avatar?: MeetingSessionCreateParams.Avatar;

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
   * Write-only static camera-tile image for this session, not a native account or
   * participant profile photo. Supply exactly one JPEG source. When effective, the
   * image is used as the bot's static camera/video output; presentation varies by
   * meeting platform and recording configuration and is not guaranteed in
   * recordings. An effective Avatar or Assistant webpage output takes precedence, so
   * this input is ignored and a URL source is not fetched.
   */
  camera_image?:
    | MeetingSessionCreateParams.MeetingSessionCameraImageBase64Source
    | MeetingSessionCreateParams.MeetingSessionCameraImageURLSource;

  /**
   * Client-supplied idempotency key to safely retry creation requests without
   * duplicating sessions. Lookup is scoped to the authenticated account and compares
   * the key only; the request payload is not fingerprinted or compared.
   */
  idempotency_key?: string;

  /**
   * ISO-8601 timestamp in the future at which the bot should join. If omitted, the
   * bot joins immediately.
   */
  join_at?: string;

  /**
   * Arbitrary key-value metadata attached to the session. The serialized JSON
   * representation must not exceed 16384 characters at runtime.
   */
  metadata?: { [key: string]: unknown };

  /**
   * Text the bot speaks when it enters the meeting.
   */
  speak_on_enter?: string;

  /**
   * If true, generate a summary artifact when the session ends.
   */
  summarize_on_end?: boolean;

  /**
   * Session-default voice identifier used for `speak_on_enter` and ordinary speak
   * actions. A voice supplied on an individual speak action overrides this default
   * for that utterance.
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
   * Request options for attaching a voice assistant to the session. Routing fields
   * (`call_control_connection_id`, `from`, and `loopback_sip_uri`) are used only to
   * establish the assistant call leg and are omitted from response objects.
   * `audio_gate` is returned with `id` in the assistant response object.
   */
  export interface Assistant {
    /**
     * Identifier of the assistant to attach.
     */
    id: string;

    /**
     * Call control connection used to bridge the assistant into the meeting audio.
     */
    call_control_connection_id: string;

    /**
     * E.164 calling number used as the originating party for the assistant call leg.
     */
    from: string;

    /**
     * SIP URI to which the assistant media loopback is established.
     */
    loopback_sip_uri: string;

    /**
     * Audio gating strategy for the assistant call leg.
     */
    audio_gate?: 'none' | 'half_duplex';
  }

  /**
   * Request options for attaching a bring-your-own-key avatar to the session.
   */
  export interface Avatar {
    /**
     * Bring-your-own-key API key for the avatar provider. The key is never stored or
     * returned by the API.
     */
    api_key: string;

    /**
     * Identifier of the avatar to use.
     */
    avatar_id: string;

    /**
     * Avatar provider identifier. Currently only "anam" is supported.
     */
    provider: 'anam';
  }

  export interface MeetingSessionCameraImageBase64Source {
    /**
     * Canonical plain RFC 4648 Base64 for a valid decoded JPEG. Data URIs, whitespace,
     * and the URL-safe alphabet are rejected. The encoded value is limited to
     * 1,835,008 characters and the decoded JPEG to 1,363,148 bytes. The JPEG is
     * limited to 4,096 pixels per dimension, 4 megapixels, and 128 MB of decoder
     * memory. The image bytes are not persisted, returned, or logged.
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
     * service resolves the URL before bot creation and does not persist, return, or
     * log the URL or image bytes.
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
