// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RunsAPI from './tests/test-suites/runs';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ScheduledEvents extends APIResource {
  /**
   * Create a scheduled event for an assistant
   *
   * @example
   * ```ts
   * const scheduledEventResponse =
   *   await client.ai.assistants.scheduledEvents.create(
   *     'assistant_id',
   *     {
   *       scheduled_at_fixed_datetime:
   *         '2025-04-15T13:07:28.764Z',
   *       telnyx_agent_target: 'telnyx_agent_target',
   *       telnyx_conversation_channel: 'phone_call',
   *       telnyx_end_user_target: 'telnyx_end_user_target',
   *     },
   *   );
   * ```
   */
  create(
    assistantID: string,
    body: ScheduledEventCreateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduledEventResponse> {
    return this._client.post(path`/ai/assistants/${assistantID}/scheduled_events`, { body, ...options });
  }

  /**
   * Retrieve a scheduled event by event ID
   *
   * @example
   * ```ts
   * const scheduledEventResponse =
   *   await client.ai.assistants.scheduledEvents.retrieve(
   *     'event_id',
   *     { assistant_id: 'assistant_id' },
   *   );
   * ```
   */
  retrieve(
    eventID: string,
    params: ScheduledEventRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ScheduledEventResponse> {
    const { assistant_id } = params;
    return this._client.get(path`/ai/assistants/${assistant_id}/scheduled_events/${eventID}`, options);
  }

  /**
   * Get scheduled events for an assistant with pagination and filtering
   *
   * @example
   * ```ts
   * const scheduledEvents =
   *   await client.ai.assistants.scheduledEvents.list(
   *     'assistant_id',
   *   );
   * ```
   */
  list(
    assistantID: string,
    query: ScheduledEventListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduledEventListResponse> {
    return this._client.get(path`/ai/assistants/${assistantID}/scheduled_events`, { query, ...options });
  }

  /**
   * If the event is pending, this will cancel the event. Otherwise, this will simply
   * remove the record of the event.
   *
   * @example
   * ```ts
   * const scheduledEvent =
   *   await client.ai.assistants.scheduledEvents.delete(
   *     'event_id',
   *     { assistant_id: 'assistant_id' },
   *   );
   * ```
   */
  delete(eventID: string, params: ScheduledEventDeleteParams, options?: RequestOptions): APIPromise<unknown> {
    const { assistant_id } = params;
    return this._client.delete(path`/ai/assistants/${assistant_id}/scheduled_events/${eventID}`, options);
  }
}

export type ConversationChannelType = 'phone_call' | 'sms_chat';

export type EventStatus = 'pending' | 'in_progress' | 'completed' | 'failed';

/**
 * Union type for different scheduled event response types
 */
export type ScheduledEventResponse = ScheduledPhoneCallEventResponse | ScheduledSMSEventResponse;

export interface ScheduledPhoneCallEventResponse {
  assistant_id: string;

  scheduled_at_fixed_datetime: string;

  telnyx_agent_target: string;

  telnyx_conversation_channel: ConversationChannelType;

  telnyx_end_user_target: string;

  conversation_id?: string;

  conversation_metadata?: { [key: string]: string | number | boolean };

  created_at?: string;

  errors?: Array<string>;

  retry_attempts?: number;

  retry_count?: number;

  scheduled_event_id?: string;

  status?: EventStatus;
}

export interface ScheduledSMSEventResponse {
  assistant_id: string;

  scheduled_at_fixed_datetime: string;

  telnyx_agent_target: string;

  telnyx_conversation_channel: ConversationChannelType;

  telnyx_end_user_target: string;

  text: string;

  conversation_id?: string;

  conversation_metadata?: { [key: string]: string | number | boolean };

  created_at?: string;

  errors?: Array<string>;

  retry_count?: number;

  scheduled_event_id?: string;

  status?: EventStatus;
}

export interface ScheduledEventListResponse {
  data: Array<ScheduledPhoneCallEventResponse | ScheduledSMSEventResponse>;

  meta: RunsAPI.Meta;
}

export type ScheduledEventDeleteResponse = unknown;

export interface ScheduledEventCreateParams {
  /**
   * The datetime at which the event should be scheduled. Formatted as ISO 8601.
   */
  scheduled_at_fixed_datetime: string;

  /**
   * The phone number, SIP URI, to schedule the call or text from.
   */
  telnyx_agent_target: string;

  telnyx_conversation_channel: ConversationChannelType;

  /**
   * The phone number, SIP URI, to schedule the call or text to.
   */
  telnyx_end_user_target: string;

  /**
   * Metadata associated with the conversation. Telnyx provides several pieces of
   * metadata, but customers can also add their own.
   */
  conversation_metadata?: { [key: string]: string | number | boolean };

  /**
   * Required for sms scheduled events. The text to be sent to the end user.
   */
  text?: string;
}

export interface ScheduledEventRetrieveParams {
  assistant_id: string;
}

export interface ScheduledEventListParams {
  conversation_channel?: ConversationChannelType;

  from_date?: string;

  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  page?: ScheduledEventListParams.Page;

  to_date?: string;
}

export namespace ScheduledEventListParams {
  /**
   * Consolidated page parameter (deepObject style). Originally: page[size],
   * page[number]
   */
  export interface Page {
    number?: number;

    size?: number;
  }
}

export interface ScheduledEventDeleteParams {
  assistant_id: string;
}

export declare namespace ScheduledEvents {
  export {
    type ConversationChannelType as ConversationChannelType,
    type EventStatus as EventStatus,
    type ScheduledEventResponse as ScheduledEventResponse,
    type ScheduledPhoneCallEventResponse as ScheduledPhoneCallEventResponse,
    type ScheduledSMSEventResponse as ScheduledSMSEventResponse,
    type ScheduledEventListResponse as ScheduledEventListResponse,
    type ScheduledEventDeleteResponse as ScheduledEventDeleteResponse,
    type ScheduledEventCreateParams as ScheduledEventCreateParams,
    type ScheduledEventRetrieveParams as ScheduledEventRetrieveParams,
    type ScheduledEventListParams as ScheduledEventListParams,
    type ScheduledEventDeleteParams as ScheduledEventDeleteParams,
  };
}
