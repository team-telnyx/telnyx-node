// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TtsIntegrationsAPI from './tts-integrations';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Register and manage text-to-speech (TTS) engines you publish, and find the public engines other organizations published, so an AI Assistant, TeXML or Call Control can speak with one of their voices, using your own key for it, instead of a Telnyx-integrated vendor.
 */
export class Actions extends APIResource {
  /**
   * Pause an `active` engine so it stops serving traffic, without deleting it.
   * Owner-initiated and owner-reversible via `enable`. Only an `active` engine can
   * be disabled. While an engine is disabled, no organization can use it, including
   * other organizations if it is `public`.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.actions.disable('id');
   * ```
   */
  disable(id: string, options?: RequestOptions): APIPromise<TtsIntegrationsAPI.CommunityTtsEngine> {
    return this._client.post(path`/tts_integrations/${id}/actions/disable`, options);
  }

  /**
   * Resume a `disabled` engine. Only a `disabled` engine can be enabled; a
   * `suspended` engine can only be reinstated by Telnyx.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.actions.enable('id');
   * ```
   */
  enable(id: string, options?: RequestOptions): APIPromise<TtsIntegrationsAPI.CommunityTtsEngine> {
    return this._client.post(path`/tts_integrations/${id}/actions/enable`, options);
  }

  /**
   * Make Telnyx read the engine's `voices_url` now instead of at the next scheduled
   * read (every 15 minutes). On success the stored list is replaced and
   * `voices_degraded` is cleared. The previous list is kept when the read fails.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.actions.refreshVoices('id');
   * ```
   */
  refreshVoices(id: string, options?: RequestOptions): APIPromise<TtsIntegrationsAPI.CommunityTtsEngine> {
    return this._client.post(path`/tts_integrations/${id}/actions/refresh_voices`, options);
  }

  /**
   * Ask Telnyx to review a `draft` engine so it can serve other organizations. Only
   * a `draft` engine with no pending or approved review can be submitted (a rejected
   * one can be submitted again). The engine moves to `review_status: pending`;
   * Telnyx approves it (`status: active`, `review_status: approved`) or rejects it
   * with `review_notes`. See the
   * [Community TTS engines guide](/docs/voice/tts/community-engines) for the full
   * review flow.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.actions.requestReview('id');
   * ```
   */
  requestReview(id: string, options?: RequestOptions): APIPromise<TtsIntegrationsAPI.CommunityTtsEngine> {
    return this._client.post(path`/tts_integrations/${id}/actions/request_review`, options);
  }

  /**
   * Check an engine end to end with your own key, without a call. Telnyx reads the
   * voice list, connects to the engine's `websocket_url` with the Integration Secret
   * named by `api_key_ref`, sends a short text, and checks the answer: the
   * handshake, the credentials, the audio, the final frame and a clean close. The
   * result is recorded (see `conformance_runs`) and returned. A test within 10
   * seconds of the previous one is refused with `429`, and a `suspended` engine
   * cannot be tested. See
   * [Try your engine before approval](/docs/voice/tts/community-engines#try-your-engine-before-approval).
   *
   * @example
   * ```ts
   * const communityTtsConformanceRun =
   *   await client.ttsIntegrations.actions.testConnection(
   *     'id',
   *     { api_key_ref: 'acme-engine-key' },
   *   );
   * ```
   */
  testConnection(
    id: string,
    body: ActionTestConnectionParams,
    options?: RequestOptions,
  ): APIPromise<CommunityTtsConformanceRun> {
    return this._client.post(path`/tts_integrations/${id}/actions/test_connection`, { body, ...options });
  }
}

/**
 * One recorded run of `test_connection`.
 */
export interface CommunityTtsConformanceRun {
  id: string;

  /**
   * Each check is `ok`, `failed` or `skipped`: `voices_url_reachable`,
   * `voices_schema_valid`, `handshake`, `auth`, `init_accepted`, `audio_received`,
   * `final_frame_received`, `clean_close`.
   */
  checks: { [key: string]: 'ok' | 'failed' | 'skipped' };

  /**
   * `test_connection`: run by the owner. `conformance`: run by Telnyx during review.
   */
  kind: 'test_connection' | 'conformance';

  /**
   * `true` when every check is `ok`.
   */
  success: boolean;

  /**
   * The first failure, in words.
   */
  error?: string | null;

  /**
   * How long the whole run took.
   */
  latency_ms?: number | null;

  started_at?: string;

  time_to_first_audio_ms?: number | null;

  voice_id?: string | null;
}

export interface ActionTestConnectionParams {
  /**
   * The identifier of the Integration Secret in your organization that Telnyx
   * connects to the engine with, as a caller would.
   */
  api_key_ref: string;

  /**
   * The voice to test. Default: the first voice in the engine's list. It must be in
   * the list.
   */
  voice_id?: string;
}

export declare namespace Actions {
  export {
    type CommunityTtsConformanceRun as CommunityTtsConformanceRun,
    type ActionTestConnectionParams as ActionTestConnectionParams,
  };
}
