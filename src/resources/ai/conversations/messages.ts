// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage historical AI assistant conversations
 */
export class Messages extends APIResource {
  /**
   * Retrieve messages for a specific conversation, including tool calls made by the
   * assistant.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const messageListResponse of client.ai.conversations.messages.list(
   *   'conversation_id',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(conversationID: string, query: MessageListParams | null | undefined = {}, options?: RequestOptions): PagePromise<MessageListResponsesDefaultFlatPagination, MessageListResponse> {
    return this._client.getAPIList(path`/ai/conversations/${conversationID}/messages`, DefaultFlatPagination<MessageListResponse>, { query, ...options });
  }
}

export type MessageListResponsesDefaultFlatPagination = DefaultFlatPagination<MessageListResponse>

export interface MessageListResponse {
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
  tool_calls?: Array<MessageListResponse.ToolCall>;
}

export namespace MessageListResponse {
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

export interface MessageListParams extends DefaultFlatPaginationParams {
}

export declare namespace Messages {
  export {
    type MessageListResponse as MessageListResponse,
    type MessageListResponsesDefaultFlatPagination as MessageListResponsesDefaultFlatPagination,
    type MessageListParams as MessageListParams
  };
}
