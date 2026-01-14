// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Test a webhook tool for an assistant
   *
   * @example
   * ```ts
   * const response = await client.ai.assistants.tools.test(
   *   'tool_id',
   *   { assistant_id: 'assistant_id' },
   * );
   * ```
   */
  test(toolID: string, params: ToolTestParams, options?: RequestOptions): APIPromise<ToolTestResponse> {
    const { assistant_id, ...body } = params;
    return this._client.post(path`/ai/assistants/${assistant_id}/tools/${toolID}/test`, { body, ...options });
  }
}

/**
 * Response model for webhook tool test results
 */
export interface ToolTestResponse {
  /**
   * Response model for webhook tool test results
   */
  data: ToolTestResponse.Data;
}

export namespace ToolTestResponse {
  /**
   * Response model for webhook tool test results
   */
  export interface Data {
    content_type: string;

    request: { [key: string]: unknown };

    response: string;

    status_code: number;

    success: boolean;
  }
}

export interface ToolTestParams {
  /**
   * Path param
   */
  assistant_id: string;

  /**
   * Body param: Key-value arguments to use for the webhook test
   */
  arguments?: { [key: string]: unknown };

  /**
   * Body param: Key-value dynamic variables to use for the webhook test
   */
  dynamic_variables?: { [key: string]: unknown };
}

export declare namespace Tools {
  export { type ToolTestResponse as ToolTestResponse, type ToolTestParams as ToolTestParams };
}
