// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

/**
 * How a namespace's summaries are written.
 */
export class Settings extends APIResource {
  /**
   * What is currently set for this namespace. `instructions: null` means none are
   * set and summaries use the neutral default.
   *
   * @example
   * ```ts
   * const namespaceSettingsResponse =
   *   await client.ai.memory.namespaces.settings.list(
   *     'namespace',
   *   );
   * ```
   */
  list(namespace: string, options?: RequestOptions): APIPromise<NamespaceSettingsResponse> {
    return this._client.get(path`/ai/memory/namespaces/${namespace}/settings`, options);
  }

  /**
   * Only the fields you send are changed; anything omitted is left as it is, so `{}`
   * changes nothing. Sending `instructions: null`, or an empty or whitespace-only
   * string, clears them and returns summaries to the neutral default.
   *
   * Instructions are capped at 2000 characters. A longer note is refused rather than
   * truncated, because a note cut mid-sentence is a worse steer than none. A change
   * reaches each summary the next time that summary is regenerated, not immediately.
   *
   * @example
   * ```ts
   * const namespaceSettingsResponse =
   *   await client.ai.memory.namespaces.settings.patchAll(
   *     'namespace',
   *     {
   *       summary: {
   *         instructions:
   *           "Lead with the customer's plan tier. Keep it under 100 words.",
   *       },
   *     },
   *   );
   * ```
   */
  patchAll(
    namespace: string,
    body: SettingPatchAllParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceSettingsResponse> {
    return this._client.patch(path`/ai/memory/namespaces/${namespace}/settings`, { body, ...options });
  }
}

export interface NamespaceSettingsResponse {
  /**
   * A namespace's settings, grouped by what they affect.
   */
  data: NamespaceSettingsResponse.Data;
}

export namespace NamespaceSettingsResponse {
  /**
   * A namespace's settings, grouped by what they affect.
   */
  export interface Data {
    /**
     * Settings that shape this namespace's summaries.
     */
    summary?: Data.Summary;
  }

  export namespace Data {
    /**
     * Settings that shape this namespace's summaries.
     */
    export interface Summary {
      /**
       * Free-form instructions that influence how this namespace's summaries are
       * written, shared by every profile in the namespace. How you use them is up to you
       * -- they steer the outcome, so try a phrasing and see how the summary comes out.
       * Advisory: they steer the summary but never override or deny a profile's own
       * facts, and they do not affect recall. Null or empty means none are set, and
       * summaries use the neutral default. A change reaches each summary the next time
       * it is regenerated.
       */
      instructions?: string | null;
    }
  }
}

export interface SettingPatchAllParams {
  /**
   * A partial update to a namespace's summary settings.
   *
   * Only the fields present in the request are changed; the rest are left as they
   * are. Sending `instructions: null` (or empty) clears the instructions.
   */
  summary?: SettingPatchAllParams.Summary | null;
}

export namespace SettingPatchAllParams {
  /**
   * A partial update to a namespace's summary settings.
   *
   * Only the fields present in the request are changed; the rest are left as they
   * are. Sending `instructions: null` (or empty) clears the instructions.
   */
  export interface Summary {
    /**
     * Replace the namespace's summary instructions. Null or empty clears them and
     * returns to the neutral default. Omit the field to leave the current instructions
     * unchanged.
     */
    instructions?: string | null;
  }
}

export declare namespace Settings {
  export {
    type NamespaceSettingsResponse as NamespaceSettingsResponse,
    type SettingPatchAllParams as SettingPatchAllParams,
  };
}
