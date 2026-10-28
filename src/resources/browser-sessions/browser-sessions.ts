// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import {
  ActionCreateParams,
  ActionCreateResponse,
  ActionResponse,
  ActionRetrieveParams,
  ActionRetrieveResponse,
  Actions,
  ClickAction,
  FillAction,
  NavigateAction,
  ObserveAction,
  PressAction,
  ScreenshotAction,
  ScrollAction,
  SelectAction,
  WaitForAction,
} from './actions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BrowserSessions extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);

  /**
   * Returns the current status of a browser session.
   *
   * @example
   * ```ts
   * const browserSession =
   *   await client.browserSessions.retrieve('id');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<BrowserSessionRetrieveResponse> {
    return this._client.get(path`/browser_sessions/${id}`, options);
  }

  /**
   * Returns artifact metadata and a signed download URL. The download URL requires
   * Bearer auth.
   *
   * @example
   * ```ts
   * const response =
   *   await client.browserSessions.retrieveArtifact(
   *     'artifactId',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieveArtifact(
    artifactID: string,
    params: BrowserSessionRetrieveArtifactParams,
    options?: RequestOptions,
  ): APIPromise<BrowserSessionRetrieveArtifactResponse> {
    const { id } = params;
    return this._client.get(path`/browser_sessions/${id}/artifacts/${artifactID}`, options);
  }

  /**
   * Lists sessions for the authenticated org. Optional status filter.
   *
   * @example
   * ```ts
   * const browserSessions = await client.browserSessions.list();
   * ```
   */
  list(
    query: BrowserSessionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BrowserSessionListResponse> {
    return this._client.get('/browser_sessions', { query, ...options });
  }

  /**
   * Creates an isolated browser session with network access restricted to the
   * domains you allow.
   *
   * @example
   * ```ts
   * const browserSession = await client.browserSessions.create({
   *   policy: { allowed_domains: ['example.com'] },
   * });
   * ```
   */
  create(
    body: BrowserSessionCreateParams,
    options?: RequestOptions,
  ): APIPromise<BrowserSessionCreateResponse> {
    return this._client.post('/browser_sessions', { body, ...options });
  }

  /**
   * Closes a ready session and releases its resources. An already closed, failed, or
   * expired session is returned unchanged; a provisioning session returns 409
   * session_not_ready.
   *
   * @example
   * ```ts
   * const browserSession = await client.browserSessions.delete(
   *   'id',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<BrowserSessionDeleteResponse> {
    return this._client.delete(path`/browser_sessions/${id}`, options);
  }
}

export interface Session {
  id: string;

  closed_at: string | null;

  created_at: string;

  expires_at: string | null;

  failure_reason: string | null;

  last_activity_at: string | null;

  limits: Session.Limits;

  metadata: unknown;

  policy: Session.Policy;

  ready_at: string | null;

  status: 'provisioning' | 'ready' | 'closing' | 'closed' | 'failed' | 'expired';
}

export namespace Session {
  export interface Limits {
    idle_timeout_s: number;

    lifetime_s: number;
  }

  export interface Policy {
    allowed_domains: Array<string>;
  }
}

export interface BrowserSessionCreateResponse {
  data?: Session;
}

export interface BrowserSessionRetrieveResponse {
  data?: Session;
}

export interface BrowserSessionListResponse {
  data?: Array<Session>;
}

export interface BrowserSessionDeleteResponse {
  data?: Session;
}

export interface BrowserSessionRetrieveArtifactResponse {
  data?: BrowserSessionRetrieveArtifactResponse.Data;
}

export namespace BrowserSessionRetrieveArtifactResponse {
  export interface Data {
    id: string;

    action_id: string;

    checksum: string;

    content_type: string;

    created_at: string;

    /**
     * Signed relative path (starts with /v2/artifact_downloads/). Prepend your API
     * host, e.g. https://api.telnyx.com, before calling it.
     */
    download_url: string;

    expires_at: string;

    session_id: string;

    size_bytes: number;

    type: string;
  }
}

export interface BrowserSessionRetrieveArtifactParams {
  id: string;
}

export interface BrowserSessionListParams {
  status?: 'provisioning' | 'ready' | 'closing' | 'closed' | 'failed' | 'expired';
}

export interface BrowserSessionCreateParams {
  policy: BrowserSessionCreateParams.Policy;

  /**
   * Scoped to the organization. The same key and identical normalized policy,
   * limits, and metadata replay the existing session (HTTP 201); a different request
   * returns 409 idempotency_conflict. Replays do not restart terminal sessions.
   */
  idempotency_key?: string;

  limits?: BrowserSessionCreateParams.Limits;

  /**
   * Arbitrary key-value metadata.
   */
  metadata?: unknown;
}

export namespace BrowserSessionCreateParams {
  export interface Policy {
    /**
     * Domain patterns the browser can navigate to. Exact match (example.com) or
     * wildcard (\*.example.com). IP literals not allowed.
     */
    allowed_domains: Array<string>;
  }

  export interface Limits {
    /**
     * Idle timeout in seconds. Must not exceed lifetime_s.
     */
    idle_timeout_s?: number;

    /**
     * Max session duration in seconds (60-1800).
     */
    lifetime_s?: number;
  }
}

BrowserSessions.Actions = Actions;

export declare namespace BrowserSessions {
  export {
    type Session as Session,
    type BrowserSessionCreateResponse as BrowserSessionCreateResponse,
    type BrowserSessionRetrieveResponse as BrowserSessionRetrieveResponse,
    type BrowserSessionListResponse as BrowserSessionListResponse,
    type BrowserSessionDeleteResponse as BrowserSessionDeleteResponse,
    type BrowserSessionRetrieveArtifactResponse as BrowserSessionRetrieveArtifactResponse,
    type BrowserSessionRetrieveArtifactParams as BrowserSessionRetrieveArtifactParams,
    type BrowserSessionListParams as BrowserSessionListParams,
    type BrowserSessionCreateParams as BrowserSessionCreateParams,
  };

  export {
    Actions as Actions,
    type ActionResponse as ActionResponse,
    type ClickAction as ClickAction,
    type FillAction as FillAction,
    type NavigateAction as NavigateAction,
    type ObserveAction as ObserveAction,
    type PressAction as PressAction,
    type ScreenshotAction as ScreenshotAction,
    type ScrollAction as ScrollAction,
    type SelectAction as SelectAction,
    type WaitForAction as WaitForAction,
    type ActionCreateResponse as ActionCreateResponse,
    type ActionRetrieveResponse as ActionRetrieveResponse,
    type ActionCreateParams as ActionCreateParams,
    type ActionRetrieveParams as ActionRetrieveParams,
  };
}
