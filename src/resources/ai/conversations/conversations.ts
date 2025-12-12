// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InsightsAPI from './insights';
import {
  InsightCreateParams,
  InsightListParams,
  InsightTemplate,
  InsightTemplateDetail,
  InsightTemplatesDefaultFlatPagination,
  InsightUpdateParams,
  Insights,
} from './insights';
import * as MessagesAPI from './messages';
import { MessageListResponse, Messages } from './messages';
import * as InsightGroupsAPI from './insight-groups/insight-groups';
import {
  InsightGroupInsightGroupsParams,
  InsightGroupRetrieveInsightGroupsParams,
  InsightGroupUpdateParams,
  InsightGroups,
  InsightTemplateGroup,
  InsightTemplateGroupDetail,
  InsightTemplateGroupsDefaultFlatPagination,
} from './insight-groups/insight-groups';
import * as RunsAPI from '../assistants/tests/test-suites/runs';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Conversations extends APIResource {
  insightGroups: InsightGroupsAPI.InsightGroups = new InsightGroupsAPI.InsightGroups(this._client);
  insights: InsightsAPI.Insights = new InsightsAPI.Insights(this._client);
  messages: MessagesAPI.Messages = new MessagesAPI.Messages(this._client);

  /**
   * Create a new AI Conversation.
   *
   * @example
   * ```ts
   * const conversation = await client.ai.conversations.create();
   * ```
   */
  create(body: ConversationCreateParams, options?: RequestOptions): APIPromise<Conversation> {
    return this._client.post('/ai/conversations', { body, ...options });
  }

  /**
   * Retrieve a specific AI conversation by its ID.
   *
   * @example
   * ```ts
   * const conversation = await client.ai.conversations.retrieve(
   *   'conversation_id',
   * );
   * ```
   */
  retrieve(conversationID: string, options?: RequestOptions): APIPromise<ConversationRetrieveResponse> {
    return this._client.get(path`/ai/conversations/${conversationID}`, options);
  }

  /**
   * Update metadata for a specific conversation.
   *
   * @example
   * ```ts
   * const conversation = await client.ai.conversations.update(
   *   'conversation_id',
   * );
   * ```
   */
  update(
    conversationID: string,
    body: ConversationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ConversationUpdateResponse> {
    return this._client.put(path`/ai/conversations/${conversationID}`, { body, ...options });
  }

  /**
   * Retrieve a list of all AI conversations configured by the user. Supports
   * [PostgREST-style query parameters](https://postgrest.org/en/stable/api.html#horizontal-filtering-rows)
   * for filtering. Examples are included for the standard metadata fields, but you
   * can filter on any field in the metadata JSON object. For example, to filter by a
   * custom field `metadata->custom_field`, use `metadata->custom_field=eq.value`.
   *
   * @example
   * ```ts
   * const conversations = await client.ai.conversations.list();
   * ```
   */
  list(
    query: ConversationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConversationListResponse> {
    return this._client.get('/ai/conversations', { query, ...options });
  }

  /**
   * Delete a specific conversation by its ID.
   *
   * @example
   * ```ts
   * await client.ai.conversations.delete('conversation_id');
   * ```
   */
  delete(conversationID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/conversations/${conversationID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Add a new message to the conversation. Used to insert a new messages to a
   * conversation manually ( without using chat endpoint )
   *
   * @example
   * ```ts
   * await client.ai.conversations.addMessage(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { role: 'role' },
   * );
   * ```
   */
  addMessage(
    conversationID: string,
    body: ConversationAddMessageParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.post(path`/ai/conversations/${conversationID}/message`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve insights for a specific conversation
   *
   * @example
   * ```ts
   * const response =
   *   await client.ai.conversations.retrieveConversationsInsights(
   *     'conversation_id',
   *   );
   * ```
   */
  retrieveConversationsInsights(
    conversationID: string,
    options?: RequestOptions,
  ): APIPromise<ConversationRetrieveConversationsInsightsResponse> {
    return this._client.get(path`/ai/conversations/${conversationID}/conversations-insights`, options);
  }
}

export interface Conversation {
  id: string;

  /**
   * The datetime the conversation was created.
   */
  created_at: string;

  /**
   * The datetime of the latest message in the conversation.
   */
  last_message_at: string;

  /**
   * Metadata associated with the conversation. Telnyx provides several pieces of
   * metadata, but customers can also add their own.
   */
  metadata: { [key: string]: string };

  name?: string;
}

export interface ConversationRetrieveResponse {
  data?: Conversation;
}

export interface ConversationUpdateResponse {
  data?: Conversation;
}

export interface ConversationListResponse {
  data: Array<Conversation>;
}

export interface ConversationRetrieveConversationsInsightsResponse {
  data: Array<ConversationRetrieveConversationsInsightsResponse.Data>;

  meta: RunsAPI.Meta;
}

export namespace ConversationRetrieveConversationsInsightsResponse {
  export interface Data {
    /**
     * Unique identifier for the conversation insight.
     */
    id: string;

    /**
     * List of insights extracted from the conversation.
     */
    conversation_insights: Array<Data.ConversationInsight>;

    /**
     * Timestamp of when the object was created.
     */
    created_at: string;

    /**
     * Current status of the insight generation for the conversation.
     */
    status: 'pending' | 'in_progress' | 'completed' | 'failed';
  }

  export namespace Data {
    export interface ConversationInsight {
      /**
       * Unique identifier for the insight configuration.
       */
      insight_id: string;

      /**
       * Insight result from the conversation. If the insight has a JSON schema, this
       * will be stringified JSON object.
       */
      result: string;
    }
  }
}

export interface ConversationCreateParams {
  /**
   * Metadata associated with the conversation.
   */
  metadata?: { [key: string]: string };

  name?: string;
}

export interface ConversationUpdateParams {
  /**
   * Metadata associated with the conversation.
   */
  metadata?: { [key: string]: string };
}

export interface ConversationListParams {
  /**
   * Filter by conversation ID (e.g. id=eq.123)
   */
  id?: string;

  /**
   * Filter by creation datetime (e.g., `created_at=gte.2025-01-01`)
   */
  created_at?: string;

  /**
   * Filter by last message datetime (e.g., `last_message_at=lte.2025-06-01`)
   */
  last_message_at?: string;

  /**
   * Limit the number of returned conversations (e.g., `limit=10`)
   */
  limit?: number;

  /**
   * Filter by assistant ID (e.g., `metadata->assistant_id=eq.assistant-123`)
   */
  'metadata->assistant_id'?: string;

  /**
   * Filter by call control ID (e.g., `metadata->call_control_id=eq.v3:123`)
   */
  'metadata->call_control_id'?: string;

  /**
   * Filter by the phone number, SIP URI, or other identifier for the agent (e.g.,
   * `metadata->telnyx_agent_target=eq.+13128675309`)
   */
  'metadata->telnyx_agent_target'?: string;

  /**
   * Filter by conversation channel (e.g.,
   * `metadata->telnyx_conversation_channel=eq.phone_call`)
   */
  'metadata->telnyx_conversation_channel'?: string;

  /**
   * Filter by the phone number, SIP URI, or other identifier for the end user (e.g.,
   * `metadata->telnyx_end_user_target=eq.+13128675309`)
   */
  'metadata->telnyx_end_user_target'?: string;

  /**
   * Filter by conversation Name (e.g. `name=like.Voice%`)
   */
  name?: string;

  /**
   * Apply OR conditions using PostgREST syntax (e.g.,
   * `or=(created_at.gte.2025-04-01,last_message_at.gte.2025-04-01)`)
   */
  or?: string;

  /**
   * Order the results by specific fields (e.g., `order=created_at.desc` or
   * `order=last_message_at.asc`)
   */
  order?: string;
}

export interface ConversationAddMessageParams {
  role: string;

  content?: string;

  metadata?: { [key: string]: string | number | boolean | Array<string | number | boolean> };

  name?: string;

  sent_at?: string;

  tool_call_id?: string;

  tool_calls?: Array<{ [key: string]: unknown }>;

  tool_choice?: string | { [key: string]: unknown };
}

Conversations.InsightGroups = InsightGroups;
Conversations.Insights = Insights;
Conversations.Messages = Messages;

export declare namespace Conversations {
  export {
    type Conversation as Conversation,
    type ConversationRetrieveResponse as ConversationRetrieveResponse,
    type ConversationUpdateResponse as ConversationUpdateResponse,
    type ConversationListResponse as ConversationListResponse,
    type ConversationRetrieveConversationsInsightsResponse as ConversationRetrieveConversationsInsightsResponse,
    type ConversationCreateParams as ConversationCreateParams,
    type ConversationUpdateParams as ConversationUpdateParams,
    type ConversationListParams as ConversationListParams,
    type ConversationAddMessageParams as ConversationAddMessageParams,
  };

  export {
    InsightGroups as InsightGroups,
    type InsightTemplateGroup as InsightTemplateGroup,
    type InsightTemplateGroupDetail as InsightTemplateGroupDetail,
    type InsightTemplateGroupsDefaultFlatPagination as InsightTemplateGroupsDefaultFlatPagination,
    type InsightGroupUpdateParams as InsightGroupUpdateParams,
    type InsightGroupInsightGroupsParams as InsightGroupInsightGroupsParams,
    type InsightGroupRetrieveInsightGroupsParams as InsightGroupRetrieveInsightGroupsParams,
  };

  export {
    Insights as Insights,
    type InsightTemplate as InsightTemplate,
    type InsightTemplateDetail as InsightTemplateDetail,
    type InsightTemplatesDefaultFlatPagination as InsightTemplatesDefaultFlatPagination,
    type InsightCreateParams as InsightCreateParams,
    type InsightUpdateParams as InsightUpdateParams,
    type InsightListParams as InsightListParams,
  };

  export { Messages as Messages, type MessageListResponse as MessageListResponse };
}
