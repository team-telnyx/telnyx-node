// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from '../assistants/tests/test-suites/runs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Retrieve messages for a specific conversation, including tool calls made by the
   * assistant.
   *
   * @example
   * ```ts
   * const messages =
   *   await client.ai.conversations.messages.list(
   *     'conversation_id',
   *   );
   * ```
   */
  list(conversationID: string, options?: RequestOptions): APIPromise<MessageListResponse> {
    return this._client.get(path`/ai/conversations/${conversationID}/messages`, options);
  }
}

export interface MessageListResponse {
  data: Array<MessageListResponse.Data>;

  meta: RunsAPI.Meta;
}

export namespace MessageListResponse {
  export interface Data {
    /**
     * The role of the message sender.
     */
    role: 'user' | 'assistant' | 'tool';

    /**
     * The message content. Can be null for tool calls.
     */
    text: string;

    /**
     * The datetime the message was created on the conversation. This does not
     * necesarily correspond to the time the message was sent. The best field to use to
     * determine the time the end user experienced the message is `sent_at`.
     */
    created_at?: string;

    /**
     * The datetime the message was sent to the end user.
     */
    sent_at?: string;

    /**
     * Optional tool calls made by the assistant.
     */
    tool_calls?: Array<Data.ToolCall>;
  }

  export namespace Data {
    export interface ToolCall {
      /**
       * Unique identifier for the tool call.
       */
      id: string;

      function: ToolCall.Function;

      /**
       * Type of the tool call.
       */
      type: 'function';
    }

    export namespace ToolCall {
      export interface Function {
        /**
         * JSON-formatted arguments to pass to the function.
         */
        arguments: string;

        /**
         * Name of the function to call.
         */
        name: string;
      }
    }
  }
}

export declare namespace Messages {
  export { type MessageListResponse as MessageListResponse };
}
