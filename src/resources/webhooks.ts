// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { TelnyxWebhook, TelnyxWebhookVerificationError } from '../webhooks';
import * as NumberOrdersAPI from './number-orders';
import * as Shared from './shared';
import * as CallsAPI from './calls/calls';
import * as MessagesAPI from './messages/messages';

export class Webhooks extends APIResource {
  unwrap<T = UnwrapWebhookEvent>(
    body: string,
    options?: { headers?: Record<string, string>; key?: string | Uint8Array },
  ): T {
    if (options?.headers) {
      const key = options.key || this._client.publicKey;
      if (!key) {
        throw new TelnyxWebhookVerificationError('No public key provided for webhook verification');
      }

      // Use Telnyx-specific webhook verification following standardwebhooks pattern
      const webhook = new TelnyxWebhook(key);
      webhook.verify(body, options.headers);
    }

    return JSON.parse(body) as T;
  }
}

export interface CallStreamingFailed {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'streaming.failed';

  /**
   * ISO 8601 datetime of when the event occurred.
   */
  occurred_at?: string;

  payload?: CallStreamingFailed.Payload;

  /**
   * Identifies the resource.
   */
  record_type?: 'event';
}

export namespace CallStreamingFailed {
  export interface Payload {
    /**
     * Call ID used to issue commands via Call Control API.
     */
    call_control_id?: string;

    /**
     * ID that is unique to the call and can be used to correlate webhook events.
     */
    call_leg_id?: string;

    /**
     * ID that is unique to the call session and can be used to correlate webhook
     * events. Call session is a group of related call legs that logically belong to
     * the same phone call, e.g. an inbound and outbound leg of a transferred call.
     */
    call_session_id?: string;

    /**
     * State received from a command.
     */
    client_state?: string;

    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id?: string;

    /**
     * A short description explaning why the media streaming failed.
     */
    failure_reason?: string;

    /**
     * Identifies the streaming.
     */
    stream_id?: string;

    /**
     * Streaming parameters as they were originally given to the Call Control API.
     */
    stream_params?: Payload.StreamParams;

    /**
     * The type of stream connection the stream is performing.
     */
    stream_type?: 'websocket' | 'dialogflow';
  }

  export namespace Payload {
    /**
     * Streaming parameters as they were originally given to the Call Control API.
     */
    export interface StreamParams {
      /**
       * The destination WebSocket address where the stream is going to be delivered.
       */
      stream_url?: string;

      /**
       * Specifies which track should be streamed.
       */
      track?: 'inbound_track' | 'outbound_track' | 'both_tracks';
    }
  }
}

export interface CallStreamingStarted {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'streaming.started';

  /**
   * ISO 8601 datetime of when the event occurred.
   */
  occurred_at?: string;

  payload?: CallStreamingStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallStreamingStarted {
  export interface Payload {
    /**
     * Call ID used to issue commands via Call Control API.
     */
    call_control_id?: string;

    /**
     * ID that is unique to the call and can be used to correlate webhook events.
     */
    call_leg_id?: string;

    /**
     * ID that is unique to the call session and can be used to correlate webhook
     * events. Call session is a group of related call legs that logically belong to
     * the same phone call, e.g. an inbound and outbound leg of a transferred call.
     */
    call_session_id?: string;

    /**
     * State received from a command.
     */
    client_state?: string;

    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id?: string;

    /**
     * Destination WebSocket address where the stream is going to be delivered.
     */
    stream_url?: string;
  }
}

export interface CallStreamingStopped {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'streaming.stopped';

  /**
   * ISO 8601 datetime of when the event occurred.
   */
  occurred_at?: string;

  payload?: CallStreamingStopped.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallStreamingStopped {
  export interface Payload {
    /**
     * Call ID used to issue commands via Call Control API.
     */
    call_control_id?: string;

    /**
     * ID that is unique to the call and can be used to correlate webhook events.
     */
    call_leg_id?: string;

    /**
     * ID that is unique to the call session and can be used to correlate webhook
     * events. Call session is a group of related call legs that logically belong to
     * the same phone call, e.g. an inbound and outbound leg of a transferred call.
     */
    call_session_id?: string;

    /**
     * State received from a command.
     */
    client_state?: string;

    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id?: string;

    /**
     * Destination WebSocket address where the stream is going to be delivered.
     */
    stream_url?: string;
  }
}

export interface CallAIGatherEndedWebhookEvent {
  data?: CallAIGatherEndedWebhookEvent.Data;
}

export namespace CallAIGatherEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.ai_gather.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Telnyx connection ID used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The history of the messages exchanged during the AI gather
       */
      message_history?: Array<Payload.MessageHistory>;

      /**
       * The result of the AI gather, its type depends of the `parameters` provided in
       * the command
       */
      result?: { [key: string]: unknown };

      /**
       * Reflects how command ended.
       */
      status?: 'valid' | 'invalid';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      export interface MessageHistory {
        /**
         * The content of the message
         */
        content?: string;

        /**
         * The role of the message sender
         */
        role?: 'assistant' | 'user';
      }
    }
  }
}

export interface CallAIGatherMessageHistoryUpdatedWebhookEvent {
  data?: CallAIGatherMessageHistoryUpdatedWebhookEvent.Data;
}

export namespace CallAIGatherMessageHistoryUpdatedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.ai_gather.message_history_updated';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Telnyx connection ID used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The history of the messages exchanged during the AI gather
       */
      message_history?: Array<Payload.MessageHistory>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      export interface MessageHistory {
        /**
         * The content of the message
         */
        content?: string;

        /**
         * The role of the message sender
         */
        role?: 'assistant' | 'user';
      }
    }
  }
}

export interface CallAIGatherPartialResultsWebhookEvent {
  data?: CallAIGatherPartialResultsWebhookEvent.Data;
}

export namespace CallAIGatherPartialResultsWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.ai_gather.partial_results';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Telnyx connection ID used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The history of the messages exchanged during the AI gather
       */
      message_history?: Array<Payload.MessageHistory>;

      /**
       * The partial result of the AI gather, its type depends of the `parameters`
       * provided in the command
       */
      partial_results?: { [key: string]: unknown };

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      export interface MessageHistory {
        /**
         * The content of the message
         */
        content?: string;

        /**
         * The role of the message sender
         */
        role?: 'assistant' | 'user';
      }
    }
  }
}

export interface CallAnsweredWebhookEvent {
  data?: CallAnsweredWebhookEvent.Data;
}

export namespace CallAnsweredWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.answered';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Custom headers set on answer command
       */
      custom_headers?: Array<CallsAPI.CustomSipHeader>;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * User-to-User and Diversion headers from sip invite.
       */
      sip_headers?: Array<CallsAPI.SipHeader>;

      /**
       * ISO 8601 datetime of when the call started.
       */
      start_time?: string;

      /**
       * State received from a command.
       */
      state?: 'answered';

      /**
       * Array of tags associated to number.
       */
      tags?: Array<string>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallBridgedWebhookEvent {
  data?: CallBridgedWebhookEvent.Data;
}

export namespace CallBridgedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.bridged';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallConversationEndedWebhookEvent {
  data?: CallConversationEndedWebhookEvent.Data;
}

export namespace CallConversationEndedWebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the event.
     */
    id?: string;

    /**
     * Timestamp when the event was created in the system.
     */
    created_at?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.conversation.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique identifier of the assistant involved in the call.
       */
      assistant_id?: string;

      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call leg.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session (group of related call legs).
       */
      call_session_id?: string;

      /**
       * The type of calling party connection.
       */
      calling_party_type?: 'pstn' | 'sip';

      /**
       * Base64-encoded state received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID unique to the conversation or insight group generated for the call.
       */
      conversation_id?: string;

      /**
       * Duration of the conversation in seconds.
       */
      duration_sec?: number;

      /**
       * The caller's number or identifier.
       */
      from?: string;

      /**
       * The large language model used during the conversation.
       */
      llm_model?: string;

      /**
       * The speech-to-text model used in the conversation.
       */
      stt_model?: string;

      /**
       * The callee's number or SIP address.
       */
      to?: string;

      /**
       * The model ID used for text-to-speech synthesis.
       */
      tts_model_id?: string;

      /**
       * The text-to-speech provider used in the call.
       */
      tts_provider?: string;

      /**
       * Voice ID used for TTS.
       */
      tts_voice_id?: string;
    }
  }
}

export interface CallConversationInsightsGeneratedWebhookEvent {
  data?: CallConversationInsightsGeneratedWebhookEvent.Data;
}

export namespace CallConversationInsightsGeneratedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.conversation_insights.generated';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * The type of calling party connection.
       */
      calling_party_type?: 'pstn' | 'sip';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the insight group being generated for the call.
       */
      insight_group_id?: string;

      /**
       * Array of insight results being generated for the call.
       */
      results?: Array<Payload.Result>;
    }

    export namespace Payload {
      export interface Result {
        /**
         * ID that is unique to the insight result being generated for the call.
         */
        insight_id?: string;

        /**
         * The result of the insight.
         */
        result?: { [key: string]: unknown } | string;
      }
    }
  }
}

export interface CallDtmfReceivedWebhookEvent {
  data?: CallDtmfReceivedWebhookEvent.Data;
}

export namespace CallDtmfReceivedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.dtmf.received';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Identifies the type of resource.
       */
      connection_id?: string;

      /**
       * The received DTMF digit or symbol.
       */
      digit?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallEnqueuedWebhookEvent {
  data?: CallEnqueuedWebhookEvent.Data;
}

export namespace CallEnqueuedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.enqueued';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Current position of the call in the queue.
       */
      current_position?: number;

      /**
       * The name of the queue
       */
      queue?: string;

      /**
       * Average time call spends in the queue in seconds.
       */
      queue_avg_wait_time_secs?: number;
    }
  }
}

export interface CallForkStartedWebhookEvent {
  data?: CallForkStartedWebhookEvent.Data;
}

export namespace CallForkStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.fork.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Type of media streamed. It can be either 'raw' or 'decrypted'.
       */
      stream_type?: 'decrypted';
    }
  }
}

export interface CallForkStoppedWebhookEvent {
  data?: CallForkStoppedWebhookEvent.Data;
}

export namespace CallForkStoppedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.fork.stopped';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Type of media streamed. It can be either 'raw' or 'decrypted'.
       */
      stream_type?: 'decrypted';
    }
  }
}

export interface CallGatherEndedWebhookEvent {
  data?: CallGatherEndedWebhookEvent.Data;
}

export namespace CallGatherEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.gather.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The received DTMF digit or symbol.
       */
      digits?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Reflects how command ended.
       */
      status?: 'valid' | 'invalid' | 'call_hangup' | 'cancelled' | 'cancelled_amd' | 'timeout';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallHangupWebhookEvent {
  data?: CallHangupWebhookEvent.Data;
}

export namespace CallHangupWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.hangup';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * Call quality statistics aggregated from the CHANNEL_HANGUP_COMPLETE event. Only
       * includes metrics that are available (filters out nil values). Returns nil if no
       * metrics are available.
       */
      call_quality_stats?: Payload.CallQualityStats | null;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Custom headers set on answer command
       */
      custom_headers?: Array<CallsAPI.CustomSipHeader>;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The reason the call was ended (`call_rejected`, `normal_clearing`,
       * `originator_cancel`, `timeout`, `time_limit`, `user_busy`, `not_found`,
       * `no_answer` or `unspecified`).
       */
      hangup_cause?:
        | 'call_rejected'
        | 'normal_clearing'
        | 'originator_cancel'
        | 'timeout'
        | 'time_limit'
        | 'user_busy'
        | 'not_found'
        | 'no_answer'
        | 'unspecified';

      /**
       * The party who ended the call (`callee`, `caller`, `unknown`).
       */
      hangup_source?: 'caller' | 'callee' | 'unknown';

      /**
       * The reason the call was ended (SIP response code). If the SIP response is
       * unavailable (in inbound calls for example) this is set to `unspecified`.
       */
      sip_hangup_cause?: string;

      /**
       * User-to-User and Diversion headers from sip invite.
       */
      sip_headers?: Array<CallsAPI.SipHeader>;

      /**
       * ISO 8601 datetime of when the call started.
       */
      start_time?: string;

      /**
       * State received from a command.
       */
      state?: 'hangup';

      /**
       * Array of tags associated to number.
       */
      tags?: Array<string>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      /**
       * Call quality statistics aggregated from the CHANNEL_HANGUP_COMPLETE event. Only
       * includes metrics that are available (filters out nil values). Returns nil if no
       * metrics are available.
       */
      export interface CallQualityStats {
        /**
         * Inbound call quality statistics.
         */
        inbound?: CallQualityStats.Inbound;

        /**
         * Outbound call quality statistics.
         */
        outbound?: CallQualityStats.Outbound;
      }

      export namespace CallQualityStats {
        /**
         * Inbound call quality statistics.
         */
        export interface Inbound {
          /**
           * Maximum jitter variance for inbound audio.
           */
          jitter_max_variance?: string;

          /**
           * Number of packets used for jitter calculation on inbound audio.
           */
          jitter_packet_count?: string;

          /**
           * Mean Opinion Score (MOS) for inbound audio quality.
           */
          mos?: string;

          /**
           * Total number of inbound audio packets.
           */
          packet_count?: string;

          /**
           * Number of skipped inbound packets (packet loss).
           */
          skip_packet_count?: string;
        }

        /**
         * Outbound call quality statistics.
         */
        export interface Outbound {
          /**
           * Total number of outbound audio packets.
           */
          packet_count?: string;

          /**
           * Number of skipped outbound packets (packet loss).
           */
          skip_packet_count?: string;
        }
      }
    }
  }
}

export interface CallInitiatedWebhookEvent {
  data?: CallInitiatedWebhookEvent.Data;
}

export namespace CallInitiatedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.initiated';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * Call screening result.
       */
      call_screening_result?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Caller id.
       */
      caller_id_name?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The list of comma-separated codecs enabled for the connection.
       */
      connection_codecs?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Custom headers from sip invite
       */
      custom_headers?: Array<CallsAPI.CustomSipHeader>;

      /**
       * Whether the call is `incoming` or `outgoing`.
       */
      direction?: 'incoming' | 'outgoing';

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The list of comma-separated codecs offered by caller.
       */
      offered_codecs?: string;

      /**
       * SHAKEN/STIR attestation level.
       */
      shaken_stir_attestation?: string;

      /**
       * Whether attestation was successfully validated or not.
       */
      shaken_stir_validated?: boolean;

      /**
       * User-to-User and Diversion headers from sip invite.
       */
      sip_headers?: Array<CallsAPI.SipHeader>;

      /**
       * ISO 8601 datetime of when the call started.
       */
      start_time?: string;

      /**
       * State received from a command.
       */
      state?: 'parked' | 'bridging';

      /**
       * Array of tags associated to number.
       */
      tags?: Array<string>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallLeftQueueWebhookEvent {
  data?: CallLeftQueueWebhookEvent.Data;
}

export namespace CallLeftQueueWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.dequeued';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The name of the queue
       */
      queue?: string;

      /**
       * Last position of the call in the queue.
       */
      queue_position?: number;

      /**
       * The reason for leaving the queue
       */
      reason?: 'bridged' | 'bridging-in-process' | 'hangup' | 'leave' | 'timeout';

      /**
       * Time call spent in the queue in seconds.
       */
      wait_time_secs?: number;
    }
  }
}

export interface CallMachineDetectionEndedWebhookEvent {
  data?: CallMachineDetectionEndedWebhookEvent.Data;
}

export namespace CallMachineDetectionEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.detection.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Answering machine detection result.
       */
      result?: 'human' | 'machine' | 'not_sure';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallMachineGreetingEndedWebhookEvent {
  data?: CallMachineGreetingEndedWebhookEvent.Data;
}

export namespace CallMachineGreetingEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.greeting.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Answering machine greeting ended result.
       */
      result?: 'beep_detected' | 'ended' | 'not_sure';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallMachinePremiumDetectionEndedWebhookEvent {
  data?: CallMachinePremiumDetectionEndedWebhookEvent.Data;
}

export namespace CallMachinePremiumDetectionEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.premium.detection.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Premium Answering Machine Detection result.
       */
      result?: 'human_residence' | 'human_business' | 'machine' | 'silence' | 'fax_detected' | 'not_sure';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallMachinePremiumGreetingEndedWebhookEvent {
  data?: CallMachinePremiumGreetingEndedWebhookEvent.Data;
}

export namespace CallMachinePremiumGreetingEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.premium.greeting.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Premium Answering Machine Greeting Ended result.
       */
      result?: 'beep_detected' | 'no_beep_detected';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallPlaybackEndedWebhookEvent {
  data?: CallPlaybackEndedWebhookEvent.Data;
}

export namespace CallPlaybackEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.playback.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * Whether the stopped audio was in overlay mode or not.
       */
      overlay?: boolean;

      /**
       * Reflects how command ended.
       */
      status?:
        | 'file_not_found'
        | 'call_hangup'
        | 'unknown'
        | 'cancelled'
        | 'cancelled_amd'
        | 'completed'
        | 'failed';

      /**
       * Provides details in case of failure.
       */
      status_detail?: string;
    }
  }
}

export interface CallPlaybackStartedWebhookEvent {
  data?: CallPlaybackStartedWebhookEvent.Data;
}

export namespace CallPlaybackStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.playback.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * Whether the audio is going to be played in overlay mode or not.
       */
      overlay?: boolean;
    }
  }
}

export interface CallRecordingErrorWebhookEvent {
  data?: CallRecordingErrorWebhookEvent.Data;
}

export namespace CallRecordingErrorWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.recording.error';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Indication that there was a problem recording the call.
       */
      reason?:
        | 'Failed to authorize with storage using custom credentials'
        | 'Invalid credentials json'
        | 'Unsupported backend'
        | 'Internal server error';
    }
  }
}

export interface CallRecordingSavedWebhookEvent {
  data?: CallRecordingSavedWebhookEvent.Data;
}

export namespace CallRecordingSavedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.recording.saved';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Whether recording was recorded in `single` or `dual` channel.
       */
      channels?: 'single' | 'dual';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      public_recording_urls?: Payload.PublicRecordingURLs;

      /**
       * ISO 8601 datetime of when recording ended.
       */
      recording_ended_at?: string;

      /**
       * ISO 8601 datetime of when recording started.
       */
      recording_started_at?: string;

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      recording_urls?: Payload.RecordingURLs;
    }

    export namespace Payload {
      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      export interface PublicRecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      export interface RecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }
    }
  }
}

export interface CallRecordingTranscriptionSavedWebhookEvent {
  data?: CallRecordingTranscriptionSavedWebhookEvent.Data;
}

export namespace CallRecordingTranscriptionSavedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.recording.transcription.saved';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * The type of calling party connection.
       */
      calling_party_type?: 'pstn' | 'sip';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the recording session and can be used to correlate webhook
       * events.
       */
      recording_id?: string;

      /**
       * ID that is unique to the transcription process and can be used to correlate
       * webhook events.
       */
      recording_transcription_id?: string;

      /**
       * The transcription status.
       */
      status?: 'completed';

      /**
       * The transcribed text
       */
      transcription_text?: string;
    }
  }
}

export interface CallReferCompletedWebhookEvent {
  data?: CallReferCompletedWebhookEvent.Data;
}

export namespace CallReferCompletedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.refer.completed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * SIP NOTIFY event status for tracking the REFER attempt.
       */
      sip_notify_response?: number;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallReferFailedWebhookEvent {
  data?: CallReferFailedWebhookEvent.Data;
}

export namespace CallReferFailedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.refer.failed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * SIP NOTIFY event status for tracking the REFER attempt.
       */
      sip_notify_response?: number;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallReferStartedWebhookEvent {
  data?: CallReferStartedWebhookEvent.Data;
}

export namespace CallReferStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.refer.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * SIP NOTIFY event status for tracking the REFER attempt.
       */
      sip_notify_response?: number;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallSiprecFailedWebhookEvent {
  data?: CallSiprecFailedWebhookEvent.Data;
}

export namespace CallSiprecFailedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'siprec.failed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Q850 reason why siprec session failed.
       */
      failure_cause?: string;
    }
  }
}

export interface CallSiprecStartedWebhookEvent {
  data?: CallSiprecStartedWebhookEvent.Data;
}

export namespace CallSiprecStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'siprec.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface CallSiprecStoppedWebhookEvent {
  data?: CallSiprecStoppedWebhookEvent.Data;
}

export namespace CallSiprecStoppedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'siprec.stopped';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Q850 reason why the SIPREC session was stopped.
       */
      hangup_cause?: string;
    }
  }
}

export interface CallSpeakEndedWebhookEvent {
  data?: CallSpeakEndedWebhookEvent.Data;
}

export namespace CallSpeakEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.speak.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Reflects how the command ended.
       */
      status?: 'completed' | 'call_hangup' | 'cancelled_amd';
    }
  }
}

export interface CallSpeakStartedWebhookEvent {
  data?: CallSpeakStartedWebhookEvent.Data;
}

export namespace CallSpeakStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.speak.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface CallStreamingFailedWebhookEvent {
  data?: CallStreamingFailed;
}

export interface CallStreamingStartedWebhookEvent {
  data?: CallStreamingStarted;
}

export interface CallStreamingStoppedWebhookEvent {
  data?: CallStreamingStopped;
}

export interface CampaignStatusUpdateWebhookEvent {
  /**
   * Brand ID associated with the campaign.
   */
  brandId?: string;

  /**
   * The ID of the campaign.
   */
  campaignId?: string;

  /**
   * Unix timestamp when campaign was created.
   */
  createDate?: string;

  /**
   * Alphanumeric identifier of the CSP associated with this campaign.
   */
  cspId?: string;

  /**
   * Description of the event.
   */
  description?: string;

  /**
   * Indicates whether the campaign is registered with T-Mobile.
   */
  isTMobileRegistered?: boolean;

  /**
   * The status of the campaign.
   */
  status?: 'ACCEPTED' | 'REJECTED' | 'DORMANT' | 'success' | 'failed';

  type?:
    | 'TELNYX_EVENT'
    | 'REGISTRATION'
    | 'MNO_REVIEW'
    | 'TELNYX_REVIEW'
    | 'NUMBER_POOL_PROVISIONED'
    | 'NUMBER_POOL_DEPROVISIONED'
    | 'TCR_EVENT'
    | 'VERIFIED';
}

export interface ConferenceCreatedWebhookEvent {
  data?: ConferenceCreatedWebhookEvent.Data;
}

export namespace ConferenceCreatedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.created';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceEndedWebhookEvent {
  data?: ConferenceEndedWebhookEvent.Data;
}

export namespace ConferenceEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;

      /**
       * Reason the conference ended.
       */
      reason?: 'all_left' | 'host_left' | 'time_exceeded';
    }
  }
}

export interface ConferenceFloorChangedWebhookEvent {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.floor.changed';

  payload?: ConferenceFloorChangedWebhookEvent.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceFloorChangedWebhookEvent {
  export interface Payload {
    /**
     * Call Control ID of the new speaker.
     */
    call_control_id?: string;

    /**
     * Call Leg ID of the new speaker.
     */
    call_leg_id?: string;

    /**
     * Call Session ID of the new speaker.
     */
    call_session_id?: string;

    /**
     * State received from a command.
     */
    client_state?: string;

    /**
     * Conference ID that had a speaker change event.
     */
    conference_id?: string;

    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id?: string;

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;
  }
}

export interface ConferenceParticipantJoinedWebhookEvent {
  data?: ConferenceParticipantJoinedWebhookEvent.Data;
}

export namespace ConferenceParticipantJoinedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.joined';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface ConferenceParticipantLeftWebhookEvent {
  data?: ConferenceParticipantLeftWebhookEvent.Data;
}

export namespace ConferenceParticipantLeftWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.left';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface ConferenceParticipantPlaybackEndedWebhookEvent {
  data?: ConferenceParticipantPlaybackEndedWebhookEvent.Data;
}

export namespace ConferenceParticipantPlaybackEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.playback.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceParticipantPlaybackStartedWebhookEvent {
  data?: ConferenceParticipantPlaybackStartedWebhookEvent.Data;
}

export namespace ConferenceParticipantPlaybackStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.playback.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceParticipantSpeakEndedWebhookEvent {
  data?: ConferenceParticipantSpeakEndedWebhookEvent.Data;
}

export namespace ConferenceParticipantSpeakEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.speak.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceParticipantSpeakStartedWebhookEvent {
  data?: ConferenceParticipantSpeakStartedWebhookEvent.Data;
}

export namespace ConferenceParticipantSpeakStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.speak.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferencePlaybackEndedWebhookEvent {
  data?: ConferencePlaybackEndedWebhookEvent.Data;
}

export namespace ConferencePlaybackEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.playback.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferencePlaybackStartedWebhookEvent {
  data?: ConferencePlaybackStartedWebhookEvent.Data;
}

export namespace ConferencePlaybackStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.playback.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceRecordingSavedWebhookEvent {
  data?: ConferenceRecordingSavedWebhookEvent.Data;
}

export namespace ConferenceRecordingSavedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.recording.saved';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Whether recording was recorded in `single` or `dual` channel.
       */
      channels?: 'single' | 'dual';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference that is being recorded.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The audio file format used when storing the call recording. Can be either `mp3`
       * or `wav`.
       */
      format?: 'wav' | 'mp3';

      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      public_recording_urls?: Payload.PublicRecordingURLs;

      /**
       * ISO 8601 datetime of when recording ended.
       */
      recording_ended_at?: string;

      /**
       * ID of the conference recording.
       */
      recording_id?: string;

      /**
       * ISO 8601 datetime of when recording started.
       */
      recording_started_at?: string;

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      recording_urls?: Payload.RecordingURLs;
    }

    export namespace Payload {
      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      export interface PublicRecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      export interface RecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }
    }
  }
}

export interface ConferenceSpeakEndedWebhookEvent {
  data?: ConferenceSpeakEndedWebhookEvent.Data;
}

export namespace ConferenceSpeakEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.speak.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceSpeakStartedWebhookEvent {
  data?: ConferenceSpeakStartedWebhookEvent.Data;
}

export namespace ConferenceSpeakStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.speak.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface DeliveryUpdateWebhookEvent {
  data?: DeliveryUpdateWebhookEvent.Data;

  meta?: DeliveryUpdateWebhookEvent.Meta;
}

export namespace DeliveryUpdateWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'message.sent' | 'message.finalized';

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    occurred_at?: string;

    payload?: MessagesAPI.OutboundMessagePayload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export interface Meta {
    /**
     * Number of attempts to deliver the webhook event.
     */
    attempt?: number;

    /**
     * The webhook URL the event was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxDeliveredWebhookEvent {
  data?: FaxDeliveredWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxDeliveredWebhookEvent.Meta;
}

export namespace FaxDeliveredWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.delivered';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * The duration of the call in seconds.
       */
      call_duration_secs?: number;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * Number of transferred pages
       */
      page_count?: number;

      /**
       * The status of the fax.
       */
      status?: 'delivered';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxFailedWebhookEvent {
  data?: FaxFailedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxFailedWebhookEvent.Meta;
}

export namespace FaxFailedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.failed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Cause of the sending failure
       */
      failure_reason?: 'rejected';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'failed';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxMediaProcessedWebhookEvent {
  data?: FaxMediaProcessedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxMediaProcessedWebhookEvent.Meta;
}

export namespace FaxMediaProcessedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.media.processed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'media.processed';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxQueuedWebhookEvent {
  data?: FaxQueuedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxQueuedWebhookEvent.Meta;
}

export namespace FaxQueuedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.queued';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'queued';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxSendingStartedWebhookEvent {
  data?: FaxSendingStartedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxSendingStartedWebhookEvent.Meta;
}

export namespace FaxSendingStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.sending.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'sending';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface InboundMessageWebhookEvent {
  data?: InboundMessageWebhookEvent.Data;
}

export namespace InboundMessageWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'message.received';

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    occurred_at?: string;

    payload?: Shared.InboundMessagePayload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }
}

export interface NumberOrderStatusUpdateWebhookEvent {
  data: NumberOrderStatusUpdateWebhookEvent.Data;

  meta: NumberOrderStatusUpdateWebhookEvent.Meta;
}

export namespace NumberOrderStatusUpdateWebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the event
     */
    id: string;

    /**
     * The type of event being sent
     */
    event_type: string;

    /**
     * ISO 8601 timestamp of when the event occurred
     */
    occurred_at: string;

    payload: NumberOrdersAPI.NumberOrderWithPhoneNumbers;

    /**
     * Type of record
     */
    record_type: string;
  }

  export interface Meta {
    /**
     * Webhook delivery attempt number
     */
    attempt: number;

    /**
     * URL where the webhook was delivered
     */
    delivered_to: string;
  }
}

export interface ReplacedLinkClickWebhookEvent {
  data?: ReplacedLinkClickWebhookEvent.Data;
}

export namespace ReplacedLinkClickWebhookEvent {
  export interface Data {
    /**
     * The message ID associated with the clicked link.
     */
    message_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the message request was received.
     */
    time_clicked?: string;

    /**
     * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
     * code).
     */
    to?: string;

    /**
     * The original link that was sent in the message.
     */
    url?: string;
  }
}

export interface TranscriptionWebhookEvent {
  data?: TranscriptionWebhookEvent.Data;
}

export namespace TranscriptionWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.transcription';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique identifier and token for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Use this field to add state to every subsequent webhook. It must be a valid
       * Base-64 encoded string.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      transcription_data?: Payload.TranscriptionData;
    }

    export namespace Payload {
      export interface TranscriptionData {
        /**
         * Speech recognition confidence level.
         */
        confidence?: number;

        /**
         * When false, it means that this is an interim result.
         */
        is_final?: boolean;

        /**
         * Recognized text.
         */
        transcript?: string;

        /**
         * Indicates which leg of the call has been transcribed. This is only available
         * when `transcription_engine` is set to `B`.
         */
        transcription_track?: 'inbound' | 'outbound';
      }
    }
  }
}

export interface CallAIGatherEndedWebhookEvent {
  data?: CallAIGatherEndedWebhookEvent.Data;
}

export namespace CallAIGatherEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.ai_gather.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Telnyx connection ID used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The history of the messages exchanged during the AI gather
       */
      message_history?: Array<Payload.MessageHistory>;

      /**
       * The result of the AI gather, its type depends of the `parameters` provided in
       * the command
       */
      result?: { [key: string]: unknown };

      /**
       * Reflects how command ended.
       */
      status?: 'valid' | 'invalid';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      export interface MessageHistory {
        /**
         * The content of the message
         */
        content?: string;

        /**
         * The role of the message sender
         */
        role?: 'assistant' | 'user';
      }
    }
  }
}

export interface CallAIGatherMessageHistoryUpdatedWebhookEvent {
  data?: CallAIGatherMessageHistoryUpdatedWebhookEvent.Data;
}

export namespace CallAIGatherMessageHistoryUpdatedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.ai_gather.message_history_updated';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Telnyx connection ID used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The history of the messages exchanged during the AI gather
       */
      message_history?: Array<Payload.MessageHistory>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      export interface MessageHistory {
        /**
         * The content of the message
         */
        content?: string;

        /**
         * The role of the message sender
         */
        role?: 'assistant' | 'user';
      }
    }
  }
}

export interface CallAIGatherPartialResultsWebhookEvent {
  data?: CallAIGatherPartialResultsWebhookEvent.Data;
}

export namespace CallAIGatherPartialResultsWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.ai_gather.partial_results';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Telnyx connection ID used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The history of the messages exchanged during the AI gather
       */
      message_history?: Array<Payload.MessageHistory>;

      /**
       * The partial result of the AI gather, its type depends of the `parameters`
       * provided in the command
       */
      partial_results?: { [key: string]: unknown };

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      export interface MessageHistory {
        /**
         * The content of the message
         */
        content?: string;

        /**
         * The role of the message sender
         */
        role?: 'assistant' | 'user';
      }
    }
  }
}

export interface CallAnsweredWebhookEvent {
  data?: CallAnsweredWebhookEvent.Data;
}

export namespace CallAnsweredWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.answered';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Custom headers set on answer command
       */
      custom_headers?: Array<CallsAPI.CustomSipHeader>;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * User-to-User and Diversion headers from sip invite.
       */
      sip_headers?: Array<CallsAPI.SipHeader>;

      /**
       * ISO 8601 datetime of when the call started.
       */
      start_time?: string;

      /**
       * State received from a command.
       */
      state?: 'answered';

      /**
       * Array of tags associated to number.
       */
      tags?: Array<string>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallBridgedWebhookEvent {
  data?: CallBridgedWebhookEvent.Data;
}

export namespace CallBridgedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.bridged';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallConversationEndedWebhookEvent {
  data?: CallConversationEndedWebhookEvent.Data;
}

export namespace CallConversationEndedWebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the event.
     */
    id?: string;

    /**
     * Timestamp when the event was created in the system.
     */
    created_at?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.conversation.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique identifier of the assistant involved in the call.
       */
      assistant_id?: string;

      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call leg.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session (group of related call legs).
       */
      call_session_id?: string;

      /**
       * The type of calling party connection.
       */
      calling_party_type?: 'pstn' | 'sip';

      /**
       * Base64-encoded state received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID unique to the conversation or insight group generated for the call.
       */
      conversation_id?: string;

      /**
       * Duration of the conversation in seconds.
       */
      duration_sec?: number;

      /**
       * The caller's number or identifier.
       */
      from?: string;

      /**
       * The large language model used during the conversation.
       */
      llm_model?: string;

      /**
       * The speech-to-text model used in the conversation.
       */
      stt_model?: string;

      /**
       * The callee's number or SIP address.
       */
      to?: string;

      /**
       * The model ID used for text-to-speech synthesis.
       */
      tts_model_id?: string;

      /**
       * The text-to-speech provider used in the call.
       */
      tts_provider?: string;

      /**
       * Voice ID used for TTS.
       */
      tts_voice_id?: string;
    }
  }
}

export interface CallConversationInsightsGeneratedWebhookEvent {
  data?: CallConversationInsightsGeneratedWebhookEvent.Data;
}

export namespace CallConversationInsightsGeneratedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.conversation_insights.generated';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * The type of calling party connection.
       */
      calling_party_type?: 'pstn' | 'sip';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the insight group being generated for the call.
       */
      insight_group_id?: string;

      /**
       * Array of insight results being generated for the call.
       */
      results?: Array<Payload.Result>;
    }

    export namespace Payload {
      export interface Result {
        /**
         * ID that is unique to the insight result being generated for the call.
         */
        insight_id?: string;

        /**
         * The result of the insight.
         */
        result?: { [key: string]: unknown } | string;
      }
    }
  }
}

export interface CallDtmfReceivedWebhookEvent {
  data?: CallDtmfReceivedWebhookEvent.Data;
}

export namespace CallDtmfReceivedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.dtmf.received';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Identifies the type of resource.
       */
      connection_id?: string;

      /**
       * The received DTMF digit or symbol.
       */
      digit?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallEnqueuedWebhookEvent {
  data?: CallEnqueuedWebhookEvent.Data;
}

export namespace CallEnqueuedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.enqueued';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Current position of the call in the queue.
       */
      current_position?: number;

      /**
       * The name of the queue
       */
      queue?: string;

      /**
       * Average time call spends in the queue in seconds.
       */
      queue_avg_wait_time_secs?: number;
    }
  }
}

export interface CallForkStartedWebhookEvent {
  data?: CallForkStartedWebhookEvent.Data;
}

export namespace CallForkStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.fork.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Type of media streamed. It can be either 'raw' or 'decrypted'.
       */
      stream_type?: 'decrypted';
    }
  }
}

export interface CallForkStoppedWebhookEvent {
  data?: CallForkStoppedWebhookEvent.Data;
}

export namespace CallForkStoppedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.fork.stopped';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Type of media streamed. It can be either 'raw' or 'decrypted'.
       */
      stream_type?: 'decrypted';
    }
  }
}

export interface CallGatherEndedWebhookEvent {
  data?: CallGatherEndedWebhookEvent.Data;
}

export namespace CallGatherEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.gather.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The received DTMF digit or symbol.
       */
      digits?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Reflects how command ended.
       */
      status?: 'valid' | 'invalid' | 'call_hangup' | 'cancelled' | 'cancelled_amd' | 'timeout';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallHangupWebhookEvent {
  data?: CallHangupWebhookEvent.Data;
}

export namespace CallHangupWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.hangup';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * Call quality statistics aggregated from the CHANNEL_HANGUP_COMPLETE event. Only
       * includes metrics that are available (filters out nil values). Returns nil if no
       * metrics are available.
       */
      call_quality_stats?: Payload.CallQualityStats | null;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Custom headers set on answer command
       */
      custom_headers?: Array<CallsAPI.CustomSipHeader>;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The reason the call was ended (`call_rejected`, `normal_clearing`,
       * `originator_cancel`, `timeout`, `time_limit`, `user_busy`, `not_found`,
       * `no_answer` or `unspecified`).
       */
      hangup_cause?:
        | 'call_rejected'
        | 'normal_clearing'
        | 'originator_cancel'
        | 'timeout'
        | 'time_limit'
        | 'user_busy'
        | 'not_found'
        | 'no_answer'
        | 'unspecified';

      /**
       * The party who ended the call (`callee`, `caller`, `unknown`).
       */
      hangup_source?: 'caller' | 'callee' | 'unknown';

      /**
       * The reason the call was ended (SIP response code). If the SIP response is
       * unavailable (in inbound calls for example) this is set to `unspecified`.
       */
      sip_hangup_cause?: string;

      /**
       * User-to-User and Diversion headers from sip invite.
       */
      sip_headers?: Array<CallsAPI.SipHeader>;

      /**
       * ISO 8601 datetime of when the call started.
       */
      start_time?: string;

      /**
       * State received from a command.
       */
      state?: 'hangup';

      /**
       * Array of tags associated to number.
       */
      tags?: Array<string>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }

    export namespace Payload {
      /**
       * Call quality statistics aggregated from the CHANNEL_HANGUP_COMPLETE event. Only
       * includes metrics that are available (filters out nil values). Returns nil if no
       * metrics are available.
       */
      export interface CallQualityStats {
        /**
         * Inbound call quality statistics.
         */
        inbound?: CallQualityStats.Inbound;

        /**
         * Outbound call quality statistics.
         */
        outbound?: CallQualityStats.Outbound;
      }

      export namespace CallQualityStats {
        /**
         * Inbound call quality statistics.
         */
        export interface Inbound {
          /**
           * Maximum jitter variance for inbound audio.
           */
          jitter_max_variance?: string;

          /**
           * Number of packets used for jitter calculation on inbound audio.
           */
          jitter_packet_count?: string;

          /**
           * Mean Opinion Score (MOS) for inbound audio quality.
           */
          mos?: string;

          /**
           * Total number of inbound audio packets.
           */
          packet_count?: string;

          /**
           * Number of skipped inbound packets (packet loss).
           */
          skip_packet_count?: string;
        }

        /**
         * Outbound call quality statistics.
         */
        export interface Outbound {
          /**
           * Total number of outbound audio packets.
           */
          packet_count?: string;

          /**
           * Number of skipped outbound packets (packet loss).
           */
          skip_packet_count?: string;
        }
      }
    }
  }
}

export interface CallInitiatedWebhookEvent {
  data?: CallInitiatedWebhookEvent.Data;
}

export namespace CallInitiatedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.initiated';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * Call screening result.
       */
      call_screening_result?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Caller id.
       */
      caller_id_name?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The list of comma-separated codecs enabled for the connection.
       */
      connection_codecs?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Custom headers from sip invite
       */
      custom_headers?: Array<CallsAPI.CustomSipHeader>;

      /**
       * Whether the call is `incoming` or `outgoing`.
       */
      direction?: 'incoming' | 'outgoing';

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * The list of comma-separated codecs offered by caller.
       */
      offered_codecs?: string;

      /**
       * SHAKEN/STIR attestation level.
       */
      shaken_stir_attestation?: string;

      /**
       * Whether attestation was successfully validated or not.
       */
      shaken_stir_validated?: boolean;

      /**
       * User-to-User and Diversion headers from sip invite.
       */
      sip_headers?: Array<CallsAPI.SipHeader>;

      /**
       * ISO 8601 datetime of when the call started.
       */
      start_time?: string;

      /**
       * State received from a command.
       */
      state?: 'parked' | 'bridging';

      /**
       * Array of tags associated to number.
       */
      tags?: Array<string>;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallLeftQueueWebhookEvent {
  data?: CallLeftQueueWebhookEvent.Data;
}

export namespace CallLeftQueueWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.dequeued';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The name of the queue
       */
      queue?: string;

      /**
       * Last position of the call in the queue.
       */
      queue_position?: number;

      /**
       * The reason for leaving the queue
       */
      reason?: 'bridged' | 'bridging-in-process' | 'hangup' | 'leave' | 'timeout';

      /**
       * Time call spent in the queue in seconds.
       */
      wait_time_secs?: number;
    }
  }
}

export interface CallMachineDetectionEndedWebhookEvent {
  data?: CallMachineDetectionEndedWebhookEvent.Data;
}

export namespace CallMachineDetectionEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.detection.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Answering machine detection result.
       */
      result?: 'human' | 'machine' | 'not_sure';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallMachineGreetingEndedWebhookEvent {
  data?: CallMachineGreetingEndedWebhookEvent.Data;
}

export namespace CallMachineGreetingEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.greeting.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Answering machine greeting ended result.
       */
      result?: 'beep_detected' | 'ended' | 'not_sure';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallMachinePremiumDetectionEndedWebhookEvent {
  data?: CallMachinePremiumDetectionEndedWebhookEvent.Data;
}

export namespace CallMachinePremiumDetectionEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.premium.detection.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Premium Answering Machine Detection result.
       */
      result?: 'human_residence' | 'human_business' | 'machine' | 'silence' | 'fax_detected' | 'not_sure';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallMachinePremiumGreetingEndedWebhookEvent {
  data?: CallMachinePremiumGreetingEndedWebhookEvent.Data;
}

export namespace CallMachinePremiumGreetingEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.machine.premium.greeting.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * Premium Answering Machine Greeting Ended result.
       */
      result?: 'beep_detected' | 'no_beep_detected';

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallPlaybackEndedWebhookEvent {
  data?: CallPlaybackEndedWebhookEvent.Data;
}

export namespace CallPlaybackEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.playback.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * Whether the stopped audio was in overlay mode or not.
       */
      overlay?: boolean;

      /**
       * Reflects how command ended.
       */
      status?:
        | 'file_not_found'
        | 'call_hangup'
        | 'unknown'
        | 'cancelled'
        | 'cancelled_amd'
        | 'completed'
        | 'failed';

      /**
       * Provides details in case of failure.
       */
      status_detail?: string;
    }
  }
}

export interface CallPlaybackStartedWebhookEvent {
  data?: CallPlaybackStartedWebhookEvent.Data;
}

export namespace CallPlaybackStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.playback.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * Whether the audio is going to be played in overlay mode or not.
       */
      overlay?: boolean;
    }
  }
}

export interface CallRecordingErrorWebhookEvent {
  data?: CallRecordingErrorWebhookEvent.Data;
}

export namespace CallRecordingErrorWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.recording.error';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Indication that there was a problem recording the call.
       */
      reason?:
        | 'Failed to authorize with storage using custom credentials'
        | 'Invalid credentials json'
        | 'Unsupported backend'
        | 'Internal server error';
    }
  }
}

export interface CallRecordingSavedWebhookEvent {
  data?: CallRecordingSavedWebhookEvent.Data;
}

export namespace CallRecordingSavedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.recording.saved';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Whether recording was recorded in `single` or `dual` channel.
       */
      channels?: 'single' | 'dual';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      public_recording_urls?: Payload.PublicRecordingURLs;

      /**
       * ISO 8601 datetime of when recording ended.
       */
      recording_ended_at?: string;

      /**
       * ISO 8601 datetime of when recording started.
       */
      recording_started_at?: string;

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      recording_urls?: Payload.RecordingURLs;
    }

    export namespace Payload {
      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      export interface PublicRecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      export interface RecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }
    }
  }
}

export interface CallRecordingTranscriptionSavedWebhookEvent {
  data?: CallRecordingTranscriptionSavedWebhookEvent.Data;
}

export namespace CallRecordingTranscriptionSavedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.recording.transcription.saved';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * The type of calling party connection.
       */
      calling_party_type?: 'pstn' | 'sip';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the recording session and can be used to correlate webhook
       * events.
       */
      recording_id?: string;

      /**
       * ID that is unique to the transcription process and can be used to correlate
       * webhook events.
       */
      recording_transcription_id?: string;

      /**
       * The transcription status.
       */
      status?: 'completed';

      /**
       * The transcribed text
       */
      transcription_text?: string;
    }
  }
}

export interface CallReferCompletedWebhookEvent {
  data?: CallReferCompletedWebhookEvent.Data;
}

export namespace CallReferCompletedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.refer.completed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * SIP NOTIFY event status for tracking the REFER attempt.
       */
      sip_notify_response?: number;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallReferFailedWebhookEvent {
  data?: CallReferFailedWebhookEvent.Data;
}

export namespace CallReferFailedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.refer.failed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * SIP NOTIFY event status for tracking the REFER attempt.
       */
      sip_notify_response?: number;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallReferStartedWebhookEvent {
  data?: CallReferStartedWebhookEvent.Data;
}

export namespace CallReferStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.refer.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique ID for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Number or SIP URI placing the call.
       */
      from?: string;

      /**
       * SIP NOTIFY event status for tracking the REFER attempt.
       */
      sip_notify_response?: number;

      /**
       * Destination number or SIP URI of the call.
       */
      to?: string;
    }
  }
}

export interface CallSiprecFailedWebhookEvent {
  data?: CallSiprecFailedWebhookEvent.Data;
}

export namespace CallSiprecFailedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'siprec.failed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Q850 reason why siprec session failed.
       */
      failure_cause?: string;
    }
  }
}

export interface CallSiprecStartedWebhookEvent {
  data?: CallSiprecStartedWebhookEvent.Data;
}

export namespace CallSiprecStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'siprec.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface CallSiprecStoppedWebhookEvent {
  data?: CallSiprecStoppedWebhookEvent.Data;
}

export namespace CallSiprecStoppedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'siprec.stopped';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Q850 reason why the SIPREC session was stopped.
       */
      hangup_cause?: string;
    }
  }
}

export interface CallSpeakEndedWebhookEvent {
  data?: CallSpeakEndedWebhookEvent.Data;
}

export namespace CallSpeakEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.speak.ended';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * Reflects how the command ended.
       */
      status?: 'completed' | 'call_hangup' | 'cancelled_amd';
    }
  }
}

export interface CallSpeakStartedWebhookEvent {
  data?: CallSpeakStartedWebhookEvent.Data;
}

export namespace CallSpeakStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.speak.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface CallStreamingFailedWebhookEvent {
  data?: CallStreamingFailed;
}

export interface CallStreamingStartedWebhookEvent {
  data?: CallStreamingStarted;
}

export interface CallStreamingStoppedWebhookEvent {
  data?: CallStreamingStopped;
}

export interface CampaignStatusUpdateWebhookEvent {
  /**
   * Brand ID associated with the campaign.
   */
  brandId?: string;

  /**
   * The ID of the campaign.
   */
  campaignId?: string;

  /**
   * Unix timestamp when campaign was created.
   */
  createDate?: string;

  /**
   * Alphanumeric identifier of the CSP associated with this campaign.
   */
  cspId?: string;

  /**
   * Description of the event.
   */
  description?: string;

  /**
   * Indicates whether the campaign is registered with T-Mobile.
   */
  isTMobileRegistered?: boolean;

  /**
   * The status of the campaign.
   */
  status?: 'ACCEPTED' | 'REJECTED' | 'DORMANT' | 'success' | 'failed';

  type?:
    | 'TELNYX_EVENT'
    | 'REGISTRATION'
    | 'MNO_REVIEW'
    | 'TELNYX_REVIEW'
    | 'NUMBER_POOL_PROVISIONED'
    | 'NUMBER_POOL_DEPROVISIONED'
    | 'TCR_EVENT'
    | 'VERIFIED';
}

export interface ConferenceCreatedWebhookEvent {
  data?: ConferenceCreatedWebhookEvent.Data;
}

export namespace ConferenceCreatedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.created';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceEndedWebhookEvent {
  data?: ConferenceEndedWebhookEvent.Data;
}

export namespace ConferenceEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;

      /**
       * Reason the conference ended.
       */
      reason?: 'all_left' | 'host_left' | 'time_exceeded';
    }
  }
}

export interface ConferenceFloorChangedWebhookEvent {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.floor.changed';

  payload?: ConferenceFloorChangedWebhookEvent.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceFloorChangedWebhookEvent {
  export interface Payload {
    /**
     * Call Control ID of the new speaker.
     */
    call_control_id?: string;

    /**
     * Call Leg ID of the new speaker.
     */
    call_leg_id?: string;

    /**
     * Call Session ID of the new speaker.
     */
    call_session_id?: string;

    /**
     * State received from a command.
     */
    client_state?: string;

    /**
     * Conference ID that had a speaker change event.
     */
    conference_id?: string;

    /**
     * Call Control App ID (formerly Telnyx connection ID) used in the call.
     */
    connection_id?: string;

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;
  }
}

export interface ConferenceParticipantJoinedWebhookEvent {
  data?: ConferenceParticipantJoinedWebhookEvent.Data;
}

export namespace ConferenceParticipantJoinedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.joined';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface ConferenceParticipantLeftWebhookEvent {
  data?: ConferenceParticipantLeftWebhookEvent.Data;
}

export namespace ConferenceParticipantLeftWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.left';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * Conference ID that the participant joined.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;
    }
  }
}

export interface ConferenceParticipantPlaybackEndedWebhookEvent {
  data?: ConferenceParticipantPlaybackEndedWebhookEvent.Data;
}

export namespace ConferenceParticipantPlaybackEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.playback.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceParticipantPlaybackStartedWebhookEvent {
  data?: ConferenceParticipantPlaybackStartedWebhookEvent.Data;
}

export namespace ConferenceParticipantPlaybackStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.playback.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceParticipantSpeakEndedWebhookEvent {
  data?: ConferenceParticipantSpeakEndedWebhookEvent.Data;
}

export namespace ConferenceParticipantSpeakEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.speak.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceParticipantSpeakStartedWebhookEvent {
  data?: ConferenceParticipantSpeakStartedWebhookEvent.Data;
}

export namespace ConferenceParticipantSpeakStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.participant.speak.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferencePlaybackEndedWebhookEvent {
  data?: ConferencePlaybackEndedWebhookEvent.Data;
}

export namespace ConferencePlaybackEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.playback.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferencePlaybackStartedWebhookEvent {
  data?: ConferencePlaybackStartedWebhookEvent.Data;
}

export namespace ConferencePlaybackStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.playback.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * The name of the audio media file being played back, if media_name has been used
       * to start.
       */
      media_name?: string;

      /**
       * The audio URL being played back, if audio_url has been used to start.
       */
      media_url?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceRecordingSavedWebhookEvent {
  data?: ConferenceRecordingSavedWebhookEvent.Data;
}

export namespace ConferenceRecordingSavedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.recording.saved';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Participant's call ID used to issue commands via Call Control API.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Whether recording was recorded in `single` or `dual` channel.
       */
      channels?: 'single' | 'dual';

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * ID of the conference that is being recorded.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * The audio file format used when storing the call recording. Can be either `mp3`
       * or `wav`.
       */
      format?: 'wav' | 'mp3';

      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      public_recording_urls?: Payload.PublicRecordingURLs;

      /**
       * ISO 8601 datetime of when recording ended.
       */
      recording_ended_at?: string;

      /**
       * ID of the conference recording.
       */
      recording_id?: string;

      /**
       * ISO 8601 datetime of when recording started.
       */
      recording_started_at?: string;

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      recording_urls?: Payload.RecordingURLs;
    }

    export namespace Payload {
      /**
       * Recording URLs in requested format. The URL is valid for as long as the file
       * exists. For security purposes, this feature is activated on a per request basis.
       * Please contact customer support with your Account ID to request activation.
       */
      export interface PublicRecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }

      /**
       * Recording URLs in requested format. These URLs are valid for 10 minutes. After
       * 10 minutes, you may retrieve recordings via API using Reports -> Call Recordings
       * documentation, or via Mission Control under Reporting -> Recordings.
       */
      export interface RecordingURLs {
        /**
         * Recording URL in requested `mp3` format.
         */
        mp3?: string | null;

        /**
         * Recording URL in requested `wav` format.
         */
        wav?: string | null;
      }
    }
  }
}

export interface ConferenceSpeakEndedWebhookEvent {
  data?: ConferenceSpeakEndedWebhookEvent.Data;
}

export namespace ConferenceSpeakEndedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.speak.ended';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface ConferenceSpeakStartedWebhookEvent {
  data?: ConferenceSpeakStartedWebhookEvent.Data;
}

export namespace ConferenceSpeakStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'conference.speak.started';

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * ID of the conference the text was spoken in.
       */
      conference_id?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      /**
       * ID that is unique to the call session that started the conference.
       */
      creator_call_session_id?: string;

      /**
       * ISO 8601 datetime of when the event occurred.
       */
      occurred_at?: string;
    }
  }
}

export interface DeliveryUpdateWebhookEvent {
  data?: DeliveryUpdateWebhookEvent.Data;

  meta?: DeliveryUpdateWebhookEvent.Meta;
}

export namespace DeliveryUpdateWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'message.sent' | 'message.finalized';

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    occurred_at?: string;

    payload?: MessagesAPI.OutboundMessagePayload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export interface Meta {
    /**
     * Number of attempts to deliver the webhook event.
     */
    attempt?: number;

    /**
     * The webhook URL the event was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxDeliveredWebhookEvent {
  data?: FaxDeliveredWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxDeliveredWebhookEvent.Meta;
}

export namespace FaxDeliveredWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.delivered';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * The duration of the call in seconds.
       */
      call_duration_secs?: number;

      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * Number of transferred pages
       */
      page_count?: number;

      /**
       * The status of the fax.
       */
      status?: 'delivered';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxFailedWebhookEvent {
  data?: FaxFailedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxFailedWebhookEvent.Meta;
}

export namespace FaxFailedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.failed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Cause of the sending failure
       */
      failure_reason?: 'rejected';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'failed';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxMediaProcessedWebhookEvent {
  data?: FaxMediaProcessedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxMediaProcessedWebhookEvent.Meta;
}

export namespace FaxMediaProcessedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.media.processed';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'media.processed';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxQueuedWebhookEvent {
  data?: FaxQueuedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxQueuedWebhookEvent.Meta;
}

export namespace FaxQueuedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.queued';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'queued';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface FaxSendingStartedWebhookEvent {
  data?: FaxSendingStartedWebhookEvent.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxSendingStartedWebhookEvent.Meta;
}

export namespace FaxSendingStartedWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'fax.sending.started';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * State received from a command.
       */
      client_state?: string;

      /**
       * The ID of the connection used to send the fax.
       */
      connection_id?: string;

      /**
       * The direction of the fax.
       */
      direction?: 'inbound' | 'outbound';

      /**
       * Identifies the fax.
       */
      fax_id?: string;

      /**
       * The phone number, in E.164 format, the fax will be sent from.
       */
      from?: string;

      /**
       * The media_name used for the fax's media. Must point to a file previously
       * uploaded to api.telnyx.com/v2/media by the same user/organization. media_name
       * and media_url/contents can't be submitted together.
       */
      media_name?: string;

      /**
       * The original URL to the PDF used for the fax's media. If media_name was
       * supplied, this is omitted
       */
      original_media_url?: string;

      /**
       * The status of the fax.
       */
      status?: 'sending';

      /**
       * The phone number, in E.164 format, the fax will be sent to or SIP URI
       */
      to?: string;

      /**
       * Identifier of the user to whom the fax belongs
       */
      user_id?: string;
    }
  }

  /**
   * Metadata about the webhook delivery.
   */
  export interface Meta {
    /**
     * The delivery attempt number.
     */
    attempt?: number;

    /**
     * The URL the webhook was delivered to.
     */
    delivered_to?: string;
  }
}

export interface InboundMessageWebhookEvent {
  data?: InboundMessageWebhookEvent.Data;
}

export namespace InboundMessageWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'message.received';

    /**
     * ISO 8601 formatted date indicating when the resource was created.
     */
    occurred_at?: string;

    payload?: Shared.InboundMessagePayload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }
}

export interface NumberOrderStatusUpdateWebhookEvent {
  data: NumberOrderStatusUpdateWebhookEvent.Data;

  meta: NumberOrderStatusUpdateWebhookEvent.Meta;
}

export namespace NumberOrderStatusUpdateWebhookEvent {
  export interface Data {
    /**
     * Unique identifier for the event
     */
    id: string;

    /**
     * The type of event being sent
     */
    event_type: string;

    /**
     * ISO 8601 timestamp of when the event occurred
     */
    occurred_at: string;

    payload: NumberOrdersAPI.NumberOrderWithPhoneNumbers;

    /**
     * Type of record
     */
    record_type: string;
  }

  export interface Meta {
    /**
     * Webhook delivery attempt number
     */
    attempt: number;

    /**
     * URL where the webhook was delivered
     */
    delivered_to: string;
  }
}

export interface ReplacedLinkClickWebhookEvent {
  data?: ReplacedLinkClickWebhookEvent.Data;
}

export namespace ReplacedLinkClickWebhookEvent {
  export interface Data {
    /**
     * The message ID associated with the clicked link.
     */
    message_id?: string;

    /**
     * Identifies the type of the resource.
     */
    record_type?: string;

    /**
     * ISO 8601 formatted date indicating when the message request was received.
     */
    time_clicked?: string;

    /**
     * Sending address (+E.164 formatted phone number, alphanumeric sender ID, or short
     * code).
     */
    to?: string;

    /**
     * The original link that was sent in the message.
     */
    url?: string;
  }
}

export interface TranscriptionWebhookEvent {
  data?: TranscriptionWebhookEvent.Data;
}

export namespace TranscriptionWebhookEvent {
  export interface Data {
    /**
     * Identifies the type of resource.
     */
    id?: string;

    /**
     * The type of event being delivered.
     */
    event_type?: 'call.transcription';

    /**
     * ISO 8601 datetime of when the event occurred.
     */
    occurred_at?: string;

    payload?: Data.Payload;

    /**
     * Identifies the type of the resource.
     */
    record_type?: 'event';
  }

  export namespace Data {
    export interface Payload {
      /**
       * Unique identifier and token for controlling the call.
       */
      call_control_id?: string;

      /**
       * ID that is unique to the call and can be used to correlate webhook events.
       */
      call_leg_id?: string;

      /**
       * ID that is unique to the call session and can be used to correlate webhook
       * events. Call session is a group of related call legs that logically belong to
       * the same phone call, e.g. an inbound and outbound leg of a transferred call.
       */
      call_session_id?: string;

      /**
       * Use this field to add state to every subsequent webhook. It must be a valid
       * Base-64 encoded string.
       */
      client_state?: string;

      /**
       * Call Control App ID (formerly Telnyx connection ID) used in the call.
       */
      connection_id?: string;

      transcription_data?: Payload.TranscriptionData;
    }

    export namespace Payload {
      export interface TranscriptionData {
        /**
         * Speech recognition confidence level.
         */
        confidence?: number;

        /**
         * When false, it means that this is an interim result.
         */
        is_final?: boolean;

        /**
         * Recognized text.
         */
        transcript?: string;

        /**
         * Indicates which leg of the call has been transcribed. This is only available
         * when `transcription_engine` is set to `B`.
         */
        transcription_track?: 'inbound' | 'outbound';
      }
    }
  }
}

export type UnsafeUnwrapWebhookEvent =
  | CallAIGatherEndedWebhookEvent
  | CallAIGatherMessageHistoryUpdatedWebhookEvent
  | CallAIGatherPartialResultsWebhookEvent
  | CallAnsweredWebhookEvent
  | CallBridgedWebhookEvent
  | CallConversationEndedWebhookEvent
  | CallConversationInsightsGeneratedWebhookEvent
  | CallDtmfReceivedWebhookEvent
  | CallEnqueuedWebhookEvent
  | CallForkStartedWebhookEvent
  | CallForkStoppedWebhookEvent
  | CallGatherEndedWebhookEvent
  | CallHangupWebhookEvent
  | CallInitiatedWebhookEvent
  | CallLeftQueueWebhookEvent
  | CallMachineDetectionEndedWebhookEvent
  | CallMachineGreetingEndedWebhookEvent
  | CallMachinePremiumDetectionEndedWebhookEvent
  | CallMachinePremiumGreetingEndedWebhookEvent
  | CallPlaybackEndedWebhookEvent
  | CallPlaybackStartedWebhookEvent
  | CallRecordingErrorWebhookEvent
  | CallRecordingSavedWebhookEvent
  | CallRecordingTranscriptionSavedWebhookEvent
  | CallReferCompletedWebhookEvent
  | CallReferFailedWebhookEvent
  | CallReferStartedWebhookEvent
  | CallSiprecFailedWebhookEvent
  | CallSiprecStartedWebhookEvent
  | CallSiprecStoppedWebhookEvent
  | CallSpeakEndedWebhookEvent
  | CallSpeakStartedWebhookEvent
  | CallStreamingFailedWebhookEvent
  | CallStreamingStartedWebhookEvent
  | CallStreamingStoppedWebhookEvent
  | CampaignStatusUpdateWebhookEvent
  | ConferenceCreatedWebhookEvent
  | ConferenceEndedWebhookEvent
  | ConferenceFloorChangedWebhookEvent
  | ConferenceParticipantJoinedWebhookEvent
  | ConferenceParticipantLeftWebhookEvent
  | ConferenceParticipantPlaybackEndedWebhookEvent
  | ConferenceParticipantPlaybackStartedWebhookEvent
  | ConferenceParticipantSpeakEndedWebhookEvent
  | ConferenceParticipantSpeakStartedWebhookEvent
  | ConferencePlaybackEndedWebhookEvent
  | ConferencePlaybackStartedWebhookEvent
  | ConferenceRecordingSavedWebhookEvent
  | ConferenceSpeakEndedWebhookEvent
  | ConferenceSpeakStartedWebhookEvent
  | DeliveryUpdateWebhookEvent
  | FaxDeliveredWebhookEvent
  | FaxFailedWebhookEvent
  | FaxMediaProcessedWebhookEvent
  | FaxQueuedWebhookEvent
  | FaxSendingStartedWebhookEvent
  | InboundMessageWebhookEvent
  | NumberOrderStatusUpdateWebhookEvent
  | ReplacedLinkClickWebhookEvent
  | TranscriptionWebhookEvent;

export type UnwrapWebhookEvent =
  | CallAIGatherEndedWebhookEvent
  | CallAIGatherMessageHistoryUpdatedWebhookEvent
  | CallAIGatherPartialResultsWebhookEvent
  | CallAnsweredWebhookEvent
  | CallBridgedWebhookEvent
  | CallConversationEndedWebhookEvent
  | CallConversationInsightsGeneratedWebhookEvent
  | CallDtmfReceivedWebhookEvent
  | CallEnqueuedWebhookEvent
  | CallForkStartedWebhookEvent
  | CallForkStoppedWebhookEvent
  | CallGatherEndedWebhookEvent
  | CallHangupWebhookEvent
  | CallInitiatedWebhookEvent
  | CallLeftQueueWebhookEvent
  | CallMachineDetectionEndedWebhookEvent
  | CallMachineGreetingEndedWebhookEvent
  | CallMachinePremiumDetectionEndedWebhookEvent
  | CallMachinePremiumGreetingEndedWebhookEvent
  | CallPlaybackEndedWebhookEvent
  | CallPlaybackStartedWebhookEvent
  | CallRecordingErrorWebhookEvent
  | CallRecordingSavedWebhookEvent
  | CallRecordingTranscriptionSavedWebhookEvent
  | CallReferCompletedWebhookEvent
  | CallReferFailedWebhookEvent
  | CallReferStartedWebhookEvent
  | CallSiprecFailedWebhookEvent
  | CallSiprecStartedWebhookEvent
  | CallSiprecStoppedWebhookEvent
  | CallSpeakEndedWebhookEvent
  | CallSpeakStartedWebhookEvent
  | CallStreamingFailedWebhookEvent
  | CallStreamingStartedWebhookEvent
  | CallStreamingStoppedWebhookEvent
  | CampaignStatusUpdateWebhookEvent
  | ConferenceCreatedWebhookEvent
  | ConferenceEndedWebhookEvent
  | ConferenceFloorChangedWebhookEvent
  | ConferenceParticipantJoinedWebhookEvent
  | ConferenceParticipantLeftWebhookEvent
  | ConferenceParticipantPlaybackEndedWebhookEvent
  | ConferenceParticipantPlaybackStartedWebhookEvent
  | ConferenceParticipantSpeakEndedWebhookEvent
  | ConferenceParticipantSpeakStartedWebhookEvent
  | ConferencePlaybackEndedWebhookEvent
  | ConferencePlaybackStartedWebhookEvent
  | ConferenceRecordingSavedWebhookEvent
  | ConferenceSpeakEndedWebhookEvent
  | ConferenceSpeakStartedWebhookEvent
  | DeliveryUpdateWebhookEvent
  | FaxDeliveredWebhookEvent
  | FaxFailedWebhookEvent
  | FaxMediaProcessedWebhookEvent
  | FaxQueuedWebhookEvent
  | FaxSendingStartedWebhookEvent
  | InboundMessageWebhookEvent
  | NumberOrderStatusUpdateWebhookEvent
  | ReplacedLinkClickWebhookEvent
  | TranscriptionWebhookEvent;

export declare namespace Webhooks {
  export {
    type CallStreamingFailed as CallStreamingFailed,
    type CallStreamingStarted as CallStreamingStarted,
    type CallStreamingStopped as CallStreamingStopped,
    type CallAIGatherEndedWebhookEvent as CallAIGatherEndedWebhookEvent,
    type CallAIGatherMessageHistoryUpdatedWebhookEvent as CallAIGatherMessageHistoryUpdatedWebhookEvent,
    type CallAIGatherPartialResultsWebhookEvent as CallAIGatherPartialResultsWebhookEvent,
    type CallAnsweredWebhookEvent as CallAnsweredWebhookEvent,
    type CallBridgedWebhookEvent as CallBridgedWebhookEvent,
    type CallConversationEndedWebhookEvent as CallConversationEndedWebhookEvent,
    type CallConversationInsightsGeneratedWebhookEvent as CallConversationInsightsGeneratedWebhookEvent,
    type CallDtmfReceivedWebhookEvent as CallDtmfReceivedWebhookEvent,
    type CallEnqueuedWebhookEvent as CallEnqueuedWebhookEvent,
    type CallForkStartedWebhookEvent as CallForkStartedWebhookEvent,
    type CallForkStoppedWebhookEvent as CallForkStoppedWebhookEvent,
    type CallGatherEndedWebhookEvent as CallGatherEndedWebhookEvent,
    type CallHangupWebhookEvent as CallHangupWebhookEvent,
    type CallInitiatedWebhookEvent as CallInitiatedWebhookEvent,
    type CallLeftQueueWebhookEvent as CallLeftQueueWebhookEvent,
    type CallMachineDetectionEndedWebhookEvent as CallMachineDetectionEndedWebhookEvent,
    type CallMachineGreetingEndedWebhookEvent as CallMachineGreetingEndedWebhookEvent,
    type CallMachinePremiumDetectionEndedWebhookEvent as CallMachinePremiumDetectionEndedWebhookEvent,
    type CallMachinePremiumGreetingEndedWebhookEvent as CallMachinePremiumGreetingEndedWebhookEvent,
    type CallPlaybackEndedWebhookEvent as CallPlaybackEndedWebhookEvent,
    type CallPlaybackStartedWebhookEvent as CallPlaybackStartedWebhookEvent,
    type CallRecordingErrorWebhookEvent as CallRecordingErrorWebhookEvent,
    type CallRecordingSavedWebhookEvent as CallRecordingSavedWebhookEvent,
    type CallRecordingTranscriptionSavedWebhookEvent as CallRecordingTranscriptionSavedWebhookEvent,
    type CallReferCompletedWebhookEvent as CallReferCompletedWebhookEvent,
    type CallReferFailedWebhookEvent as CallReferFailedWebhookEvent,
    type CallReferStartedWebhookEvent as CallReferStartedWebhookEvent,
    type CallSiprecFailedWebhookEvent as CallSiprecFailedWebhookEvent,
    type CallSiprecStartedWebhookEvent as CallSiprecStartedWebhookEvent,
    type CallSiprecStoppedWebhookEvent as CallSiprecStoppedWebhookEvent,
    type CallSpeakEndedWebhookEvent as CallSpeakEndedWebhookEvent,
    type CallSpeakStartedWebhookEvent as CallSpeakStartedWebhookEvent,
    type CallStreamingFailedWebhookEvent as CallStreamingFailedWebhookEvent,
    type CallStreamingStartedWebhookEvent as CallStreamingStartedWebhookEvent,
    type CallStreamingStoppedWebhookEvent as CallStreamingStoppedWebhookEvent,
    type CampaignStatusUpdateWebhookEvent as CampaignStatusUpdateWebhookEvent,
    type ConferenceCreatedWebhookEvent as ConferenceCreatedWebhookEvent,
    type ConferenceEndedWebhookEvent as ConferenceEndedWebhookEvent,
    type ConferenceFloorChangedWebhookEvent as ConferenceFloorChangedWebhookEvent,
    type ConferenceParticipantJoinedWebhookEvent as ConferenceParticipantJoinedWebhookEvent,
    type ConferenceParticipantLeftWebhookEvent as ConferenceParticipantLeftWebhookEvent,
    type ConferenceParticipantPlaybackEndedWebhookEvent as ConferenceParticipantPlaybackEndedWebhookEvent,
    type ConferenceParticipantPlaybackStartedWebhookEvent as ConferenceParticipantPlaybackStartedWebhookEvent,
    type ConferenceParticipantSpeakEndedWebhookEvent as ConferenceParticipantSpeakEndedWebhookEvent,
    type ConferenceParticipantSpeakStartedWebhookEvent as ConferenceParticipantSpeakStartedWebhookEvent,
    type ConferencePlaybackEndedWebhookEvent as ConferencePlaybackEndedWebhookEvent,
    type ConferencePlaybackStartedWebhookEvent as ConferencePlaybackStartedWebhookEvent,
    type ConferenceRecordingSavedWebhookEvent as ConferenceRecordingSavedWebhookEvent,
    type ConferenceSpeakEndedWebhookEvent as ConferenceSpeakEndedWebhookEvent,
    type ConferenceSpeakStartedWebhookEvent as ConferenceSpeakStartedWebhookEvent,
    type DeliveryUpdateWebhookEvent as DeliveryUpdateWebhookEvent,
    type FaxDeliveredWebhookEvent as FaxDeliveredWebhookEvent,
    type FaxFailedWebhookEvent as FaxFailedWebhookEvent,
    type FaxMediaProcessedWebhookEvent as FaxMediaProcessedWebhookEvent,
    type FaxQueuedWebhookEvent as FaxQueuedWebhookEvent,
    type FaxSendingStartedWebhookEvent as FaxSendingStartedWebhookEvent,
    type InboundMessageWebhookEvent as InboundMessageWebhookEvent,
    type NumberOrderStatusUpdateWebhookEvent as NumberOrderStatusUpdateWebhookEvent,
    type ReplacedLinkClickWebhookEvent as ReplacedLinkClickWebhookEvent,
    type TranscriptionWebhookEvent as TranscriptionWebhookEvent,
    type UnsafeUnwrapWebhookEvent as UnsafeUnwrapWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
