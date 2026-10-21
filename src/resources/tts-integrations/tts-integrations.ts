// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TtsIntegrationsAPI from './tts-integrations';
import * as ActionsAPI from './actions';
import { ActionTestConnectionParams, Actions, CommunityTtsConformanceRun } from './actions';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Register and manage text-to-speech (TTS) engines you publish, and find the public engines other organizations published, so an AI Assistant, TeXML or Call Control can speak with one of their voices, using your own key for it, instead of a Telnyx-integrated vendor.
 */
export class TtsIntegrations extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * List every community TTS engine your organization has registered, at any status
   * or visibility. Use `GET /tts_integrations/discoverable` instead to also see
   * other organizations' public, active engines.
   *
   * @example
   * ```ts
   * const ttsIntegrations = await client.ttsIntegrations.list();
   * ```
   */
  list(
    query: TtsIntegrationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TtsIntegrationListResponse> {
    return this._client.get('/tts_integrations', { query, ...options });
  }

  /**
   * Register a WebSocket text-to-speech engine. Telnyx reads the engine's
   * `voices_url` while it registers the engine and refuses the registration with a
   * `422` if the list is unreachable or invalid. The engine starts at
   * `status: draft` and cannot serve other organizations' traffic until Telnyx
   * approves it (your own organization can try it with its own key meanwhile). It is
   * `visibility: private` unless you set `public`: a private engine can be used only
   * by your organization, a public one by any organization once it is `active`. See
   * the [Community TTS engines guide](/docs/voice/tts/community-engines) for the
   * full review flow.
   *
   * `websocket_url` must be `wss://` and `voices_url` must be `https://`, both on a
   * public host; a plain `ws://` URL is rejected, and so is a credential embedded in
   * either. Callers bring their own key for your engine: Telnyx stores none, so
   * there is nothing to register here for synthesis. `voices_api_key_ref` is
   * optional and used only to read your voice list.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.create({
   *     capabilities: { streamed_audio: true },
   *     name: 'acme',
   *     supported_audio_formats: ['linear16'],
   *     voices_url: 'https://tts.acme.example/voices',
   *     websocket_url: 'wss://tts.acme.example/v1',
   *   });
   * ```
   */
  create(body: TtsIntegrationCreateParams, options?: RequestOptions): APIPromise<CommunityTtsEngine> {
    return this._client.post('/tts_integrations', { body, ...options });
  }

  /**
   * List the engines you can use: your own, at any status, and other organizations'
   * engines that are `public` and `active`. Each entry carries what a caller needs
   * to choose an engine: its `name` (the first part of its voices,
   * `<name>.<voice_id>`), `voices_count`, audio formats, capabilities, and
   * `documentation_url`. It never carries the publisher's contact details, review
   * notes, or `voices_api_key_ref`. Read an engine's voices with
   * `GET /tts_integrations/{id}/voices`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ttsIntegrations.retrieveDiscoverable();
   * ```
   */
  retrieveDiscoverable(
    query: TtsIntegrationRetrieveDiscoverableParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TtsIntegrationRetrieveDiscoverableResponse> {
    return this._client.get('/tts_integrations/discoverable', { query, ...options });
  }

  /**
   * Delete one of your own community TTS engines. The engine disappears from every
   * listing and lookup and can no longer serve traffic, but its `name` stays
   * reserved for your organization: no other organization can register it, and you
   * can register it again later. An assistant or call still configured with one of
   * its voices cannot use it until an engine with that name exists again.
   *
   * @example
   * ```ts
   * await client.ttsIntegrations.delete('id');
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/tts_integrations/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve one of your own community TTS engines by ID.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<CommunityTtsEngine> {
    return this._client.get(path`/tts_integrations/${id}`, options);
  }

  /**
   * Same as `PUT`: only the fields you send change.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.update('id', {
   *     visibility: 'public',
   *   });
   * ```
   */
  update(
    id: string,
    body: TtsIntegrationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CommunityTtsEngine> {
    return this._client.patch(path`/tts_integrations/${id}`, { body, ...options });
  }

  /**
   * Change one of your own community TTS engines. Every field is optional: omit a
   * field to leave it unchanged. `name` cannot be changed. Telnyx reads the
   * `voices_url` again and refuses an update that leaves the engine with an
   * unreadable list. Changing `websocket_url`, `voices_url`,
   * `supported_audio_formats` or `capabilities`, or making a `private` engine
   * `public`, sends the engine back to `status: draft` and clears its review. See
   * the [Community TTS engines guide](/docs/voice/tts/community-engines) for the
   * full review flow.
   *
   * @example
   * ```ts
   * const communityTtsEngine =
   *   await client.ttsIntegrations.replace('id', {
   *     contact_email: 'voices@acme.example',
   *     documentation_url: 'https://tts.acme.example/docs',
   *   });
   * ```
   */
  replace(
    id: string,
    body: TtsIntegrationReplaceParams,
    options?: RequestOptions,
  ): APIPromise<CommunityTtsEngine> {
    return this._client.put(path`/tts_integrations/${id}`, { body, ...options });
  }

  /**
   * The recorded runs of `test_connection` for one of your engines, newest first.
   * Telnyx keeps the latest 50.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ttsIntegrations.retrieveConformanceRuns(
   *     'id',
   *   );
   * ```
   */
  retrieveConformanceRuns(
    id: string,
    query: TtsIntegrationRetrieveConformanceRunsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TtsIntegrationRetrieveConformanceRunsResponse> {
    return this._client.get(path`/tts_integrations/${id}/conformance_runs`, { query, ...options });
  }

  /**
   * The voices Telnyx last read from the engine's `voices_url`, in the shape the
   * engine published. A caller selects one as `<engine name>.<voice_id>`. The list
   * is replaced only when a new read succeeds, so an engine whose `voices_url` is
   * down keeps serving its last list. `[]` until the first read succeeds.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ttsIntegrations.retrieveVoices('id');
   * ```
   */
  retrieveVoices(id: string, options?: RequestOptions): APIPromise<TtsIntegrationRetrieveVoicesResponse> {
    return this._client.get(path`/tts_integrations/${id}/voices`, options);
  }
}

/**
 * An audio format an engine can produce. Offer `linear16`: it serves every
 * surface. Telnyx converts `linear16` to MP3 for the commands that play MP3.
 */
export type CommunityTtsAudioFormat = 'mp3' | 'linear16' | 'wav' | 'mulaw' | 'alaw' | 'ogg_vorbis';

/**
 * The full record of a community TTS engine you own. Select its voices by the
 * engine's `name`, as `<name>.<voice_id>`, with your own key for it
 * (`api_key_ref`).
 */
export interface CommunityTtsEngine {
  id: string;

  /**
   * What the engine supports. An unknown key is rejected.
   */
  capabilities: CommunityTtsEngineCapabilities;

  /**
   * The engine's unique name: the first part of its voices.
   */
  name: string;

  /**
   * Whether the engine can serve traffic right now, independent of `visibility` and
   * `review_status`. `draft`: not yet approved (new and awaiting its first review,
   * rejected and awaiting a fix, or approved earlier and awaiting re-review after a
   * review-sensitive change). `active`: serving traffic. `disabled`: owner-paused,
   * reversible via `enable`. `suspended`: paused by Telnyx (repeated failures of a
   * public engine, or an abuse action); the owner cannot clear this by calling
   * `enable`, and Telnyx can reinstate it.
   */
  status: CommunityTtsEngineStatus;

  supported_audio_formats: Array<CommunityTtsAudioFormat>;

  /**
   * `private`: only your organization can use the engine. `public`: any organization
   * can, once it is `active`.
   */
  visibility: CommunityTtsEngineVisibility;

  voices_url: string;

  websocket_url: string;

  connect_timeout_ms?: number;

  contact_email?: string | null;

  created_at?: string;

  data_retention_policy_url?: string | null;

  documentation_url?: string | null;

  /**
   * The reviewer's notes on a rejection.
   */
  review_notes?: string | null;

  /**
   * `null`: never submitted, or an approved engine whose review-sensitive field
   * changed and awaits re-review. `pending`: submitted. `approved`: approved.
   * `rejected`: rejected, with `review_notes`.
   */
  review_status?: 'pending' | 'approved' | 'rejected' | null;

  reviewed_at?: string | null;

  updated_at?: string | null;

  voices_api_key_ref?: string | null;

  /**
   * The number of voices in the stored list.
   */
  voices_count?: number;

  /**
   * `true` after three failed reads in a row, until a read succeeds. A degraded
   * engine keeps serving from its last list.
   */
  voices_degraded?: boolean;

  /**
   * When the stored list was last read successfully.
   */
  voices_fetched_at?: string | null;
}

/**
 * What the engine supports. An unknown key is rejected.
 */
export interface CommunityTtsEngineCapabilities {
  /**
   * Required. `true` when the engine sends audio in small frames as it synthesizes;
   * `false` when it sends one frame per sentence.
   */
  streamed_audio: boolean;

  /**
   * The engine speaks the buffered text when a frame carries `"flush": true`.
   */
  flush_support?: boolean;

  /**
   * The engine supports a restart of the current speech (barge-in).
   */
  force_interrupt_support?: boolean;

  /**
   * The engine accepts SSML in the text.
   */
  ssml_support?: boolean;

  /**
   * The settings callers can pass to the engine in `voice_settings`, one entry per
   * setting: `{"type": "number" | "integer", "min", "max"}`, `{"type": "boolean"}`,
   * `{"type": "string"}` (at most 1000 characters) or
   * `{"type": "enum", "values": [...]}`, each with an optional `default`. A caller's
   * settings are checked against it before Telnyx connects to the engine: an
   * undeclared setting, a value of the wrong type, or a value out of bounds is
   * refused. An engine that declares none receives the settings as sent.
   */
  voice_settings_schema?: { [key: string]: unknown } | null;
}

export interface CommunityTtsEngineListMeta {
  page_number: number;

  page_size: number;

  total_pages: number;

  total_results: number;
}

/**
 * Whether the engine can serve traffic right now, independent of `visibility` and
 * `review_status`. `draft`: not yet approved (new and awaiting its first review,
 * rejected and awaiting a fix, or approved earlier and awaiting re-review after a
 * review-sensitive change). `active`: serving traffic. `disabled`: owner-paused,
 * reversible via `enable`. `suspended`: paused by Telnyx (repeated failures of a
 * public engine, or an abuse action); the owner cannot clear this by calling
 * `enable`, and Telnyx can reinstate it.
 */
export type CommunityTtsEngineStatus = 'draft' | 'active' | 'disabled' | 'suspended';

/**
 * `private`: only your organization can use the engine. `public`: any organization
 * can, once it is `active`.
 */
export type CommunityTtsEngineVisibility = 'private' | 'public';

/**
 * Only the fields you send change. `name` cannot be changed. Sending `null` for
 * `websocket_url`, `voices_url`, `supported_audio_formats`, `capabilities` or
 * `connect_timeout_ms` is refused. Changing `websocket_url`, `voices_url`,
 * `supported_audio_formats` or `capabilities`, or making a `private` engine
 * `public`, sends the engine back to `status: draft` and clears its review.
 */
export interface UpdateCommunityTtsEngineRequest {
  /**
   * What the engine supports. An unknown key is rejected.
   */
  capabilities?: CommunityTtsEngineCapabilities;

  connect_timeout_ms?: number;

  contact_email?: string | null;

  data_retention_policy_url?: string | null;

  documentation_url?: string | null;

  supported_audio_formats?: Array<CommunityTtsAudioFormat>;

  /**
   * `private`: only your organization can use the engine. `public`: any organization
   * can, once it is `active`.
   */
  visibility?: CommunityTtsEngineVisibility;

  voices_api_key_ref?: string | null;

  /**
   * See the create request.
   */
  voices_url?: string;

  /**
   * See the create request.
   */
  websocket_url?: string;
}

export interface TtsIntegrationListResponse {
  data: Array<CommunityTtsEngine>;

  meta: CommunityTtsEngineListMeta;
}

export interface TtsIntegrationRetrieveConformanceRunsResponse {
  data: Array<ActionsAPI.CommunityTtsConformanceRun>;

  meta: CommunityTtsEngineListMeta;
}

export interface TtsIntegrationRetrieveDiscoverableResponse {
  data: Array<TtsIntegrationRetrieveDiscoverableResponse.Data>;

  meta: CommunityTtsEngineListMeta;
}

export namespace TtsIntegrationRetrieveDiscoverableResponse {
  /**
   * What a caller needs to choose an engine. It carries no publisher contact
   * details, review notes or credential references.
   */
  export interface Data {
    id: string;

    name: string;

    /**
     * Whether the engine can serve traffic right now, independent of `visibility` and
     * `review_status`. `draft`: not yet approved (new and awaiting its first review,
     * rejected and awaiting a fix, or approved earlier and awaiting re-review after a
     * review-sensitive change). `active`: serving traffic. `disabled`: owner-paused,
     * reversible via `enable`. `suspended`: paused by Telnyx (repeated failures of a
     * public engine, or an abuse action); the owner cannot clear this by calling
     * `enable`, and Telnyx can reinstate it.
     */
    status: TtsIntegrationsAPI.CommunityTtsEngineStatus;

    /**
     * `private`: only your organization can use the engine. `public`: any organization
     * can, once it is `active`.
     */
    visibility: TtsIntegrationsAPI.CommunityTtsEngineVisibility;

    /**
     * What the engine supports. An unknown key is rejected.
     */
    capabilities?: TtsIntegrationsAPI.CommunityTtsEngineCapabilities;

    connect_timeout_ms?: number;

    created_at?: string;

    data_retention_policy_url?: string | null;

    documentation_url?: string | null;

    supported_audio_formats?: Array<TtsIntegrationsAPI.CommunityTtsAudioFormat>;

    voices_count?: number;

    websocket_url?: string;
  }
}

export interface TtsIntegrationRetrieveVoicesResponse {
  voices: Array<TtsIntegrationRetrieveVoicesResponse.Voice>;
}

export namespace TtsIntegrationRetrieveVoicesResponse {
  export interface Voice {
    /**
     * Unique in the list; no dots. A caller selects the voice as
     * `<engine name>.<voice_id>`.
     */
    voice_id: string;

    /**
     * A display string, for example `male`, `female` or `neutral`.
     */
    gender?: string;

    /**
     * A BCP-47 tag, at most 35 characters.
     */
    language?: string;

    /**
     * A display name.
     */
    name?: string;

    /**
     * A display string.
     */
    provider?: string;
  }
}

export interface TtsIntegrationListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: TtsIntegrationListParams.Page;

  /**
   * Filter by status.
   */
  status?: CommunityTtsEngineStatus;

  /**
   * Filter by visibility.
   */
  visibility?: CommunityTtsEngineVisibility;
}

export namespace TtsIntegrationListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    number?: number;

    /**
     * Clamped to 1-100.
     */
    size?: number;
  }
}

export interface TtsIntegrationCreateParams {
  /**
   * What the engine supports. An unknown key is rejected.
   */
  capabilities: CommunityTtsEngineCapabilities;

  /**
   * The engine's unique name, and the first part of its voices
   * (`<name>.<voice_id>`). 1-64 characters: lowercase letters, digits, hyphens and
   * underscores, starting with a letter or digit. Built-in vendor names and the
   * generic voice names `male`, `female`, `man`, `woman`, `alice` and `custom` are
   * reserved. Unique across all Telnyx accounts and cannot be changed later. A
   * deleted engine's name stays reserved for the organization that owned it.
   */
  name: string;

  /**
   * The audio formats the engine can produce, at least one, without duplicates.
   */
  supported_audio_formats: Array<CommunityTtsAudioFormat>;

  /**
   * The `https://` URL of the engine's voice listing, with the same host rules. It
   * answers `GET` with
   * `{"voices": [{"provider", "name", "voice_id", "language", "gender"}]}`: at most
   * 1000 voices, each `voice_id` unique and matching
   * `^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$`, each `language` at most 35 characters.
   * Telnyx reads it when the engine is registered or updated, every 15 minutes, and
   * on `refresh_voices`.
   */
  voices_url: string;

  /**
   * The `wss://` URL Telnyx connects to. It must be reachable on the public
   * internet: plain `ws://`, private, loopback, link-local, shared, documentation,
   * multicast and reserved addresses, and internal hostnames are rejected, as are
   * credentials embedded in the URL or in credential-looking query parameters. At
   * most 2048 characters.
   */
  websocket_url: string;

  /**
   * How long Telnyx waits for the WebSocket connection to open, from 500 to 10000.
   * Default: 3000.
   */
  connect_timeout_ms?: number;

  /**
   * A contact address stored for the Telnyx platform team. Telnyx does not email it
   * automatically. At most 254 characters.
   */
  contact_email?: string | null;

  /**
   * URL of the publisher's data retention policy, at most 2048 characters. It is
   * returned in the discoverable listing.
   */
  data_retention_policy_url?: string | null;

  /**
   * An `https://` page where callers learn how to get a key for the engine and how
   * to use it, with a host and no credentials in it, at most 2048 characters. It is
   * returned in the discoverable listing.
   */
  documentation_url?: string | null;

  /**
   * `private`: only your organization can use the engine. `public`: any organization
   * can, once it is `active`.
   */
  visibility?: CommunityTtsEngineVisibility;

  /**
   * The identifier of an Integration Secret in your organization. When set, Telnyx
   * sends its value as a bearer token when it reads `voices_url`. It is never used
   * for synthesis. Send `null` on an update to clear it. At most 255 characters.
   */
  voices_api_key_ref?: string | null;
}

export interface TtsIntegrationRetrieveDiscoverableParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: TtsIntegrationRetrieveDiscoverableParams.Page;

  /**
   * Filter by status.
   */
  status?: CommunityTtsEngineStatus;

  /**
   * Filter by visibility.
   */
  visibility?: CommunityTtsEngineVisibility;
}

export namespace TtsIntegrationRetrieveDiscoverableParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    number?: number;

    /**
     * Clamped to 1-100.
     */
    size?: number;
  }
}

export interface TtsIntegrationUpdateParams {
  /**
   * What the engine supports. An unknown key is rejected.
   */
  capabilities?: CommunityTtsEngineCapabilities;

  connect_timeout_ms?: number;

  contact_email?: string | null;

  data_retention_policy_url?: string | null;

  documentation_url?: string | null;

  supported_audio_formats?: Array<CommunityTtsAudioFormat>;

  /**
   * `private`: only your organization can use the engine. `public`: any organization
   * can, once it is `active`.
   */
  visibility?: CommunityTtsEngineVisibility;

  voices_api_key_ref?: string | null;

  /**
   * See the create request.
   */
  voices_url?: string;

  /**
   * See the create request.
   */
  websocket_url?: string;
}

export interface TtsIntegrationReplaceParams {
  /**
   * What the engine supports. An unknown key is rejected.
   */
  capabilities?: CommunityTtsEngineCapabilities;

  connect_timeout_ms?: number;

  contact_email?: string | null;

  data_retention_policy_url?: string | null;

  documentation_url?: string | null;

  supported_audio_formats?: Array<CommunityTtsAudioFormat>;

  /**
   * `private`: only your organization can use the engine. `public`: any organization
   * can, once it is `active`.
   */
  visibility?: CommunityTtsEngineVisibility;

  voices_api_key_ref?: string | null;

  /**
   * See the create request.
   */
  voices_url?: string;

  /**
   * See the create request.
   */
  websocket_url?: string;
}

export interface TtsIntegrationRetrieveConformanceRunsParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: TtsIntegrationRetrieveConformanceRunsParams.Page;
}

export namespace TtsIntegrationRetrieveConformanceRunsParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    number?: number;

    /**
     * Clamped to 1-100.
     */
    size?: number;
  }
}

TtsIntegrations.Actions = Actions;

export declare namespace TtsIntegrations {
  export {
    type CommunityTtsAudioFormat as CommunityTtsAudioFormat,
    type CommunityTtsEngine as CommunityTtsEngine,
    type CommunityTtsEngineCapabilities as CommunityTtsEngineCapabilities,
    type CommunityTtsEngineListMeta as CommunityTtsEngineListMeta,
    type CommunityTtsEngineStatus as CommunityTtsEngineStatus,
    type CommunityTtsEngineVisibility as CommunityTtsEngineVisibility,
    type UpdateCommunityTtsEngineRequest as UpdateCommunityTtsEngineRequest,
    type TtsIntegrationListResponse as TtsIntegrationListResponse,
    type TtsIntegrationRetrieveConformanceRunsResponse as TtsIntegrationRetrieveConformanceRunsResponse,
    type TtsIntegrationRetrieveDiscoverableResponse as TtsIntegrationRetrieveDiscoverableResponse,
    type TtsIntegrationRetrieveVoicesResponse as TtsIntegrationRetrieveVoicesResponse,
    type TtsIntegrationListParams as TtsIntegrationListParams,
    type TtsIntegrationCreateParams as TtsIntegrationCreateParams,
    type TtsIntegrationRetrieveDiscoverableParams as TtsIntegrationRetrieveDiscoverableParams,
    type TtsIntegrationUpdateParams as TtsIntegrationUpdateParams,
    type TtsIntegrationReplaceParams as TtsIntegrationReplaceParams,
    type TtsIntegrationRetrieveConformanceRunsParams as TtsIntegrationRetrieveConformanceRunsParams,
  };

  export {
    Actions as Actions,
    type CommunityTtsConformanceRun as CommunityTtsConformanceRun,
    type ActionTestConnectionParams as ActionTestConnectionParams,
  };
}
