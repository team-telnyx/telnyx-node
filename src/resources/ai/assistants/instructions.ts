// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class Instructions extends APIResource {
  /**
   * Enhance an assistant's instructions using an LLM. The endpoint reads the
   * assistant's current instructions and tools, then streams back improved
   * instructions as they are generated.
   *
   * Optionally provide an `enhancement_prompt` to steer the changes (for example,
   * "make the instructions more concise" or "add error handling guidance"). When
   * omitted, the assistant's existing instructions are used as the basis for the
   * enhancement.
   *
   * The enhancement focuses on tool-calling reliability, clarity and precision,
   * completeness and error handling, tool schema alignment, and conversation flow
   * structure.
   *
   * The response is streamed as `text/plain` using chunked transfer encoding;
   * consume the body incrementally to render the enhanced instructions as they
   * arrive.
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.assistants.instructions.enhance(
   *     'assistant_id',
   *   );
   * ```
   */
  enhance(
    assistantID: string,
    body: InstructionEnhanceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<string> {
    return this._client.post(path`/ai/assistants/${assistantID}/instructions/enhance`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export type InstructionEnhanceResponse = string;

export interface InstructionEnhanceParams {
  /**
   * Optional guidance describing how the instructions should be enhanced. When
   * provided, the LLM applies these requested changes in addition to fixing any
   * identified issues.
   */
  enhancement_prompt?: string | null;

  /**
   * The instructions to enhance. When omitted, the assistant's existing instructions
   * are used.
   */
  instructions?: string | null;
}

export declare namespace Instructions {
  export {
    type InstructionEnhanceResponse as InstructionEnhanceResponse,
    type InstructionEnhanceParams as InstructionEnhanceParams,
  };
}
