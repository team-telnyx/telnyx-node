// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AssistantsAPI from './assistants';
import { APIPromise } from '../../../core/api-promise';
import {
  DefaultFlatPagination,
  type DefaultFlatPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class Deleted extends APIResource {
  /**
   * List the organization's soft-deleted assistants in the Recently Deleted list.
   *
   * Each entry includes `deleted_at` and `permanently_deleted_at`, the point after
   * which the assistant is erased automatically and can no longer be restored.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deletedAssistant of client.ai.assistants.deleted.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: DeletedListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<DeletedAssistantsDefaultFlatPagination, DeletedAssistant> {
    return this._client.getAPIList('/ai/assistants/deleted', DefaultFlatPagination<DeletedAssistant>, {
      query,
      ...options,
    });
  }

  /**
   * Retrieve a soft-deleted assistant from the Recently Deleted list by
   * `assistant_id`, including its `deleted_at` and `permanently_deleted_at`
   * timestamps. This is a read-only view; the assistant cannot be modified while it
   * remains deleted.
   *
   * @example
   * ```ts
   * const deletedAssistant =
   *   await client.ai.assistants.deleted.get('assistant_id');
   * ```
   */
  get(assistantID: string, options?: RequestOptions): APIPromise<DeletedAssistant> {
    return this._client.get(path`/ai/assistants/${assistantID}/deleted`, options);
  }
}

export type DeletedAssistantsDefaultFlatPagination = DefaultFlatPagination<DeletedAssistant>;

/**
 * A soft-deleted assistant in the Recently Deleted list: the full assistant
 * configuration plus deletion metadata.
 */
export interface DeletedAssistant extends AssistantsAPI.InferenceEmbedding {
  /**
   * Timestamp of the soft delete.
   */
  deleted_at: string;

  /**
   * Point after which the assistant is permanently deleted automatically and can no
   * longer be restored.
   */
  permanently_deleted_at: string;
}

export interface DeletedListParams extends DefaultFlatPaginationParams {}

export declare namespace Deleted {
  export {
    type DeletedAssistant as DeletedAssistant,
    type DeletedAssistantsDefaultFlatPagination as DeletedAssistantsDefaultFlatPagination,
    type DeletedListParams as DeletedListParams,
  };
}
