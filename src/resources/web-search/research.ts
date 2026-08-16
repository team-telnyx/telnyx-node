// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ResearchAPI from './research';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Deep research with citations and async task polling.
 */
export class Research extends APIResource {
  /**
   * Starts a deep research task that runs multiple searches, reads sources, and
   * synthesizes an answer with citations.
   *
   * ## Synchronous mode (default)
   *
   * When `background` is `false` or omitted, the request blocks until the research
   * completes and returns the answer with citations. This can take up to 120 seconds
   * depending on `research_effort`.
   *
   * ## Asynchronous mode
   *
   * When `background` is `true`, the request returns immediately with a `task_id`
   * and `status: pending`. Poll `GET /web_search/research/{task_id}` to check when
   * the research completes and retrieve the answer.
   *
   * @example
   * ```ts
   * const research = await client.webSearch.research.create({
   *   query:
   *     'Compare the performance of RAG vs fine-tuning for domain-specific QA',
   *   max_sources: 20,
   *   research_effort: 'standard',
   * });
   * ```
   */
  create(body: ResearchCreateParams, options?: RequestOptions): APIPromise<ResearchCreateResponse> {
    return this._client.post('/web_search/research', { body, ...options });
  }

  /**
   * Polls the status of a previously started asynchronous research task. When the
   * status is `completed`, the response includes the answer and citations. When the
   * status is `failed`, the response includes an error message.
   *
   * @example
   * ```ts
   * const research = await client.webSearch.research.retrieve(
   *   'bf3026a5-dd57-44dd-b922-200041be3a4b',
   * );
   * ```
   */
  retrieve(taskID: string, options?: RequestOptions): APIPromise<ResearchRetrieveResponse> {
    return this._client.get(path`/web_search/research/${taskID}`, options);
  }
}

export interface ResearchCitation {
  /**
   * Title of the source page.
   */
  title: string;

  /**
   * Source URL.
   */
  url: string;

  /**
   * Relevant excerpt from the source (if available).
   */
  snippet?: string;
}

export interface ResearchCreateResponse {
  /**
   * Synchronous research response (when `background` is false or unset).
   */
  data?: ResearchCreateResponse.ResearchResponseSync | ResearchCreateResponse.ResearchResponseAsync;
}

export namespace ResearchCreateResponse {
  /**
   * Synchronous research response (when `background` is false or unset).
   */
  export interface ResearchResponseSync {
    /**
     * The synthesized research answer.
     */
    answer: string;

    /**
     * Sources cited in the answer.
     */
    citations?: Array<ResearchAPI.ResearchCitation>;
  }

  /**
   * Asynchronous research response (when `background` is true).
   */
  export interface ResearchResponseAsync {
    /**
     * Current status of the research task.
     */
    status: 'pending' | 'running' | 'completed' | 'failed';

    /**
     * Unique identifier for the research task. Use this to poll the status.
     */
    task_id: string;
  }
}

export interface ResearchRetrieveResponse {
  data?: ResearchRetrieveResponse.Data;
}

export namespace ResearchRetrieveResponse {
  export interface Data {
    /**
     * Current status of the research task.
     */
    status: 'pending' | 'running' | 'completed' | 'failed';

    /**
     * The research task identifier.
     */
    task_id: string;

    /**
     * The synthesized research answer (present when status is `completed`).
     */
    answer?: string;

    /**
     * Sources cited in the answer (present when status is `completed`).
     */
    citations?: Array<ResearchAPI.ResearchCitation>;

    /**
     * Always present in poll responses; `null` unless the task failed.
     */
    error?: string | null;
  }
}

export interface ResearchCreateParams {
  /**
   * The research question or topic.
   */
  query: string;

  /**
   * When `true`, the research runs asynchronously. The response returns a `task_id`
   * immediately instead of waiting for the result. Poll
   * `GET /web_search/research/{task_id}` to check status.
   */
  background?: boolean;

  /**
   * Maximum number of sources to use.
   */
  max_sources?: number;

  /**
   * Research depth level. `lite` is fastest, `deep` is most thorough.
   */
  research_effort?: 'lite' | 'standard' | 'deep';
}

export declare namespace Research {
  export {
    type ResearchCitation as ResearchCitation,
    type ResearchCreateResponse as ResearchCreateResponse,
    type ResearchRetrieveResponse as ResearchRetrieveResponse,
    type ResearchCreateParams as ResearchCreateParams,
  };
}
