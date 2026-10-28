// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Execute browser actions: navigate, observe, click, fill, select, press, scroll, wait_for, screenshot, batch.
 */
export class Actions extends APIResource {
  /**
   * Executes a browser action on the session. Returns 200 if completed within
   * wait_seconds, 202 if still in-flight.
   *
   * Action types: navigate, observe, click, fill, select, press, scroll, wait_for,
   * screenshot, batch.
   *
   * @example
   * ```ts
   * const action = await client.browserSessions.actions.create(
   *   'id',
   *   { type: 'navigate', url: 'https://example.com/' },
   * );
   * ```
   */
  create(id: string, params: ActionCreateParams, options?: RequestOptions): APIPromise<ActionCreateResponse> {
    const { wait_seconds, ...body } = params;
    return this._client.post(path`/browser_sessions/${id}/actions`, {
      query: { wait_seconds },
      body,
      ...options,
    });
  }

  /**
   * Returns the stored status and result of an action. Use this to poll actions that
   * returned 202; HTTP 200 can contain any action status. Stored observations
   * contain metadata with empty tree and refs, not the full snapshot; submit a fresh
   * observe action to obtain current refs.
   *
   * @example
   * ```ts
   * const action =
   *   await client.browserSessions.actions.retrieve(
   *     'actionId',
   *     { id: 'id' },
   *   );
   * ```
   */
  retrieve(
    actionID: string,
    params: ActionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ActionRetrieveResponse> {
    const { id } = params;
    return this._client.get(path`/browser_sessions/${id}/actions/${actionID}`, options);
  }
}

export interface ActionResponse {
  id: string;

  completed_at: string | null;

  created_at: string;

  /**
   * Null unless an execution failure is recorded. Action failures (policy_denied,
   * stale_observation, stale_ref, navigation_blocked, timeout, execution_lost,
   * result_too_large) are returned on the action resource with HTTP 200. An unknown
   * action with execution_lost has retryable=false; inspect session state and
   * reconcile possible effects before any new action. Separately, a request may
   * return HTTP 503 with a top-level execution_lost error and retryable=true; that
   * is not proof of safe re-execution.
   */
  error: ActionResponse.Error | null;

  /**
   * Normalized request metadata; defaults may be materialized and fill values are
   * redacted as {redacted: true, length: number}, including inside batch actions.
   */
  request: unknown;

  result: ActionResponse.Result | null;

  seq: number;

  session_id: string;

  started_at: string | null;

  /**
   * POST returns 202 for queued or running actions. Terminal states are succeeded,
   * failed, and unknown (the execution outcome could not be determined, with
   * error.code=execution_lost). GET returns 200 for both nonterminal and terminal
   * states.
   */
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'unknown';

  type: string;
}

export namespace ActionResponse {
  /**
   * Null unless an execution failure is recorded. Action failures (policy_denied,
   * stale_observation, stale_ref, navigation_blocked, timeout, execution_lost,
   * result_too_large) are returned on the action resource with HTTP 200. An unknown
   * action with execution_lost has retryable=false; inspect session state and
   * reconcile possible effects before any new action. Separately, a request may
   * return HTTP 503 with a top-level execution_lost error and retryable=true; that
   * is not proof of safe re-execution.
   */
  export interface Error {
    code: string;

    retryable: boolean;
  }

  export interface Result {
    artifact?: Result.Artifact;

    /**
     * Full tree and refs are delivered only in the original successful POST response
     * when completed within wait_seconds. GET polling and idempotent replays return
     * metadata with an empty tree and refs plus ref_count. Submit a fresh observe
     * action to obtain usable refs.
     */
    observation?: Result.Observation;

    /**
     * Present only for batch actions.
     */
    results?: Array<unknown>;

    title?: string;

    url?: string;
  }

  export namespace Result {
    export interface Artifact {
      artifact_id?: string;

      content_type?: string;

      size_bytes?: number;
    }

    /**
     * Full tree and refs are delivered only in the original successful POST response
     * when completed within wait_seconds. GET polling and idempotent replays return
     * metadata with an empty tree and refs plus ref_count. Submit a fresh observe
     * action to obtain usable refs.
     */
    export interface Observation {
      observation_id?: string;

      /**
       * Number of refs in the original observation, present on stored observation
       * metadata.
       */
      ref_count?: number;

      refs?: unknown;

      title?: string;

      tree?: string;

      truncated?: boolean;

      url?: string;
    }
  }
}

/**
 * Click an element identified by observation_id + ref.
 */
export interface ClickAction {
  observation_id: string;

  ref: string;

  type: 'click';

  idempotency_key?: string;

  include_observation?: boolean;

  timeout_ms?: number;

  wait?: 'no_wait' | 'dom_stable' | 'url_change';
}

/**
 * Type text into the element identified by observation_id + ref.
 */
export interface FillAction {
  observation_id: string;

  ref: string;

  type: 'fill';

  value: string;

  idempotency_key?: string;

  include_observation?: boolean;
}

/**
 * Navigate to a URL.
 */
export interface NavigateAction {
  type: 'navigate';

  url: string;

  idempotency_key?: string;

  include_observation?: boolean;

  wait_until?: 'load' | 'dom_stable' | 'none';
}

/**
 * Capture an observation (DOM snapshot) of the current page.
 */
export interface ObserveAction {
  type: 'observe';

  idempotency_key?: string;

  include_observation?: boolean;
}

/**
 * Press a keyboard key.
 */
export interface PressAction {
  key:
    | 'Enter'
    | 'Tab'
    | 'Escape'
    | 'Backspace'
    | 'ArrowUp'
    | 'ArrowDown'
    | 'ArrowLeft'
    | 'ArrowRight'
    | 'PageUp'
    | 'PageDown'
    | 'Home'
    | 'End';

  type: 'press';

  idempotency_key?: string;

  include_observation?: boolean;
}

/**
 * Capture a screenshot of the current page.
 */
export interface ScreenshotAction {
  type: 'screenshot';

  idempotency_key?: string;

  include_observation?: boolean;
}

/**
 * Scroll the page.
 */
export interface ScrollAction {
  type: 'scroll';

  delta_x?: number;

  delta_y?: number;

  idempotency_key?: string;

  include_observation?: boolean;
}

/**
 * Select an option on the element identified by observation_id + ref.
 */
export interface SelectAction {
  observation_id: string;

  ref: string;

  type: 'select';

  value: string;

  idempotency_key?: string;

  include_observation?: boolean;
}

/**
 * Wait for a condition before continuing.
 */
export interface WaitForAction {
  condition:
    | WaitForAction.UnionMember0
    | WaitForAction.UnionMember1
    | WaitForAction.UnionMember2
    | WaitForAction.Kind;

  type: 'wait_for';

  idempotency_key?: string;

  include_observation?: boolean;

  timeout_ms?: number;
}

export namespace WaitForAction {
  export interface UnionMember0 {
    kind: 'url_pattern';

    pattern: string;
  }

  export interface UnionMember1 {
    kind: 'ref';

    observation_id: string;

    ref: string;
  }

  export interface UnionMember2 {
    kind: 'text';

    text: string;
  }

  export interface Kind {
    kind: 'dom_stable';
  }
}

export interface ActionCreateResponse {
  data?: ActionResponse;
}

export interface ActionRetrieveResponse {
  data?: ActionResponse;
}

export type ActionCreateParams =
  | ActionCreateParams.NavigateAction
  | ActionCreateParams.ObserveAction
  | ActionCreateParams.ClickAction
  | ActionCreateParams.FillAction
  | ActionCreateParams.SelectAction
  | ActionCreateParams.PressAction
  | ActionCreateParams.ScrollAction
  | ActionCreateParams.ScreenshotAction
  | ActionCreateParams.WaitForAction
  | ActionCreateParams.BatchAction;

export declare namespace ActionCreateParams {
  export interface NavigateAction {
    /**
     * Body param
     */
    type: 'navigate';

    /**
     * Body param
     */
    url: string;

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;

    /**
     * Body param
     */
    wait_until?: 'load' | 'dom_stable' | 'none';
  }

  export interface ObserveAction {
    /**
     * Body param
     */
    type: 'observe';

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;
  }

  export interface ClickAction {
    /**
     * Body param
     */
    observation_id: string;

    /**
     * Body param
     */
    ref: string;

    /**
     * Body param
     */
    type: 'click';

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;

    /**
     * Body param
     */
    timeout_ms?: number;

    /**
     * Body param
     */
    wait?: 'no_wait' | 'dom_stable' | 'url_change';
  }

  export interface FillAction {
    /**
     * Body param
     */
    observation_id: string;

    /**
     * Body param
     */
    ref: string;

    /**
     * Body param
     */
    type: 'fill';

    /**
     * Body param
     */
    value: string;

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;
  }

  export interface SelectAction {
    /**
     * Body param
     */
    observation_id: string;

    /**
     * Body param
     */
    ref: string;

    /**
     * Body param
     */
    type: 'select';

    /**
     * Body param
     */
    value: string;

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;
  }

  export interface PressAction {
    /**
     * Body param
     */
    key:
      | 'Enter'
      | 'Tab'
      | 'Escape'
      | 'Backspace'
      | 'ArrowUp'
      | 'ArrowDown'
      | 'ArrowLeft'
      | 'ArrowRight'
      | 'PageUp'
      | 'PageDown'
      | 'Home'
      | 'End';

    /**
     * Body param
     */
    type: 'press';

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;
  }

  export interface ScrollAction {
    /**
     * Body param
     */
    type: 'scroll';

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    delta_x?: number;

    /**
     * Body param
     */
    delta_y?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;
  }

  export interface ScreenshotAction {
    /**
     * Body param
     */
    type: 'screenshot';

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;
  }

  export interface WaitForAction {
    /**
     * Body param
     */
    condition:
      | WaitForAction.UnionMember0
      | WaitForAction.UnionMember1
      | WaitForAction.UnionMember2
      | WaitForAction.Kind;

    /**
     * Body param
     */
    type: 'wait_for';

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;

    /**
     * Body param
     */
    timeout_ms?: number;
  }

  export namespace WaitForAction {
    export interface UnionMember0 {
      kind: 'url_pattern';

      pattern: string;
    }

    export interface UnionMember1 {
      kind: 'ref';

      observation_id: string;

      ref: string;
    }

    export interface UnionMember2 {
      kind: 'text';

      text: string;
    }

    export interface Kind {
      kind: 'dom_stable';
    }
  }

  export interface BatchAction {
    /**
     * Body param
     */
    actions: Array<
      | NavigateAction
      | ObserveAction
      | ClickAction
      | FillAction
      | SelectAction
      | PressAction
      | ScrollAction
      | ScreenshotAction
      | WaitForAction
    >;

    /**
     * Body param
     */
    type: 'batch';

    /**
     * Query param: Maximum seconds the submission request waits for completion, not an
     * execution timeout. If still queued or running, returns 202 without cancelling
     * execution; poll the returned action ID.
     */
    wait_seconds?: number;

    /**
     * Body param
     */
    idempotency_key?: string;

    /**
     * Body param
     */
    include_observation?: boolean;
  }
}

export interface ActionRetrieveParams {
  id: string;
}

export declare namespace Actions {
  export {
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
