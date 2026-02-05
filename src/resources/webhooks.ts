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

export interface CallAIGatherEnded {
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

  payload?: CallAIGatherEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallAIGatherEnded {
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

export interface CallAIGatherMessageHistoryUpdated {
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

  payload?: CallAIGatherMessageHistoryUpdated.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallAIGatherMessageHistoryUpdated {
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

export interface CallAIGatherPartialResults {
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

  payload?: CallAIGatherPartialResults.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallAIGatherPartialResults {
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

export interface CallAnswered {
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

  payload?: CallAnswered.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallAnswered {
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

export interface CallBridged {
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

  payload?: CallBridged.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallBridged {
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

export interface CallConversationEnded {
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

  payload?: CallConversationEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallConversationEnded {
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

export interface CallConversationInsightsGenerated {
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

  payload?: CallConversationInsightsGenerated.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallConversationInsightsGenerated {
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

export interface CallDtmfReceived {
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

  payload?: CallDtmfReceived.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallDtmfReceived {
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

export interface CallEnqueued {
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

  payload?: CallEnqueued.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallEnqueued {
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

export interface CallForkStarted {
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

  payload?: CallForkStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallForkStarted {
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

export interface CallForkStopped {
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

  payload?: CallForkStopped.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallForkStopped {
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

export interface CallGatherEnded {
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

  payload?: CallGatherEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallGatherEnded {
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

export interface CallHangup {
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

  payload?: CallHangup.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallHangup {
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

export interface CallInitiated {
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

  payload?: CallInitiated.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallInitiated {
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

export interface CallLeftQueue {
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

  payload?: CallLeftQueue.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallLeftQueue {
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

export interface CallMachineDetectionEnded {
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

  payload?: CallMachineDetectionEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallMachineDetectionEnded {
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

export interface CallMachineGreetingEnded {
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

  payload?: CallMachineGreetingEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallMachineGreetingEnded {
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

export interface CallMachinePremiumDetectionEnded {
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

  payload?: CallMachinePremiumDetectionEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallMachinePremiumDetectionEnded {
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

export interface CallMachinePremiumGreetingEnded {
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

  payload?: CallMachinePremiumGreetingEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallMachinePremiumGreetingEnded {
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

export interface CallPlaybackEnded {
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

  payload?: CallPlaybackEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallPlaybackEnded {
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

export interface CallPlaybackStarted {
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

  payload?: CallPlaybackStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallPlaybackStarted {
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

export interface CallRecordingError {
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

  payload?: CallRecordingError.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallRecordingError {
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

export interface CallRecordingSaved {
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

  payload?: CallRecordingSaved.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallRecordingSaved {
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

export interface CallRecordingTranscriptionSaved {
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

  payload?: CallRecordingTranscriptionSaved.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallRecordingTranscriptionSaved {
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

export interface CallReferCompleted {
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

  payload?: CallReferCompleted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallReferCompleted {
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

export interface CallReferFailed {
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

  payload?: CallReferFailed.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallReferFailed {
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

export interface CallReferStarted {
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

  payload?: CallReferStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallReferStarted {
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

export interface CallSiprecFailed {
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

  payload?: CallSiprecFailed.Payload;

  /**
   * Identifies the resource.
   */
  record_type?: 'event';
}

export namespace CallSiprecFailed {
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

export interface CallSiprecStarted {
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

  payload?: CallSiprecStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallSiprecStarted {
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

export interface CallSiprecStopped {
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

  payload?: CallSiprecStopped.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallSiprecStopped {
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

export interface CallSpeakEnded {
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

  payload?: CallSpeakEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallSpeakEnded {
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

export interface CallSpeakStarted {
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

  payload?: CallSpeakStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace CallSpeakStarted {
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

export interface CampaignStatusUpdate {
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

export interface ConferenceCreated {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.created';

  payload?: ConferenceCreated.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceCreated {
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

export interface ConferenceEnded {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.ended';

  payload?: ConferenceEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceEnded {
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

export interface ConferenceFloorChanged {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.floor.changed';

  payload?: ConferenceFloorChanged.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceFloorChanged {
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

export interface ConferenceParticipantJoined {
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

  payload?: ConferenceParticipantJoined.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceParticipantJoined {
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

export interface ConferenceParticipantLeft {
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

  payload?: ConferenceParticipantLeft.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceParticipantLeft {
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

export interface ConferenceParticipantPlaybackEnded {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.participant.playback.ended';

  payload?: ConferenceParticipantPlaybackEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceParticipantPlaybackEnded {
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

export interface ConferenceParticipantPlaybackStarted {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.participant.playback.started';

  payload?: ConferenceParticipantPlaybackStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceParticipantPlaybackStarted {
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

export interface ConferenceParticipantSpeakEnded {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.participant.speak.ended';

  payload?: ConferenceParticipantSpeakEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceParticipantSpeakEnded {
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

export interface ConferenceParticipantSpeakStarted {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.participant.speak.started';

  payload?: ConferenceParticipantSpeakStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceParticipantSpeakStarted {
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

export interface ConferencePlaybackEnded {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.playback.ended';

  payload?: ConferencePlaybackEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferencePlaybackEnded {
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

export interface ConferencePlaybackStarted {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.playback.started';

  payload?: ConferencePlaybackStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferencePlaybackStarted {
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

export interface ConferenceRecordingSaved {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.recording.saved';

  payload?: ConferenceRecordingSaved.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceRecordingSaved {
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

export interface ConferenceSpeakEnded {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.speak.ended';

  payload?: ConferenceSpeakEnded.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceSpeakEnded {
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

export interface ConferenceSpeakStarted {
  /**
   * Identifies the type of resource.
   */
  id?: string;

  /**
   * The type of event being delivered.
   */
  event_type?: 'conference.speak.started';

  payload?: ConferenceSpeakStarted.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace ConferenceSpeakStarted {
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

export interface FaxDelivered {
  data?: FaxDelivered.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxDelivered.Meta;
}

export namespace FaxDelivered {
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

export interface FaxFailed {
  data?: FaxFailed.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxFailed.Meta;
}

export namespace FaxFailed {
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

export interface FaxMediaProcessed {
  data?: FaxMediaProcessed.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxMediaProcessed.Meta;
}

export namespace FaxMediaProcessed {
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

export interface FaxQueued {
  data?: FaxQueued.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxQueued.Meta;
}

export namespace FaxQueued {
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

export interface FaxSendingStarted {
  data?: FaxSendingStarted.Data;

  /**
   * Metadata about the webhook delivery.
   */
  meta?: FaxSendingStarted.Meta;
}

export namespace FaxSendingStarted {
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

export interface InboundMessage {
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

export interface NumberOrderStatusUpdate {
  data: NumberOrderStatusUpdate.Data;

  meta: NumberOrderStatusUpdate.Meta;
}

export namespace NumberOrderStatusUpdate {
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

export interface OutboundMessage {
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

export interface ReplacedLinkClick {
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

export interface Transcription {
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

  payload?: Transcription.Payload;

  /**
   * Identifies the type of the resource.
   */
  record_type?: 'event';
}

export namespace Transcription {
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

export interface CallAIGatherEndedWebhookEvent {
  data?: CallAIGatherEnded;
}

export interface CallAIGatherMessageHistoryUpdatedWebhookEvent {
  data?: CallAIGatherMessageHistoryUpdated;
}

export interface CallAIGatherPartialResultsWebhookEvent {
  data?: CallAIGatherPartialResults;
}

export interface CallAnsweredWebhookEvent {
  data?: CallAnswered;
}

export interface CallBridgedWebhookEvent {
  data?: CallBridged;
}

export interface CallConversationEndedWebhookEvent {
  data?: CallConversationEnded;
}

export interface CallConversationInsightsGeneratedWebhookEvent {
  data?: CallConversationInsightsGenerated;
}

export interface CallDtmfReceivedWebhookEvent {
  data?: CallDtmfReceived;
}

export interface CallEnqueuedWebhookEvent {
  data?: CallEnqueued;
}

export interface CallForkStartedWebhookEvent {
  data?: CallForkStarted;
}

export interface CallForkStoppedWebhookEvent {
  data?: CallForkStopped;
}

export interface CallGatherEndedWebhookEvent {
  data?: CallGatherEnded;
}

export interface CallHangupWebhookEvent {
  data?: CallHangup;
}

export interface CallInitiatedWebhookEvent {
  data?: CallInitiated;
}

export interface CallLeftQueueWebhookEvent {
  data?: CallLeftQueue;
}

export interface CallMachineDetectionEndedWebhookEvent {
  data?: CallMachineDetectionEnded;
}

export interface CallMachineGreetingEndedWebhookEvent {
  data?: CallMachineGreetingEnded;
}

export interface CallMachinePremiumDetectionEndedWebhookEvent {
  data?: CallMachinePremiumDetectionEnded;
}

export interface CallMachinePremiumGreetingEndedWebhookEvent {
  data?: CallMachinePremiumGreetingEnded;
}

export interface CallPlaybackEndedWebhookEvent {
  data?: CallPlaybackEnded;
}

export interface CallPlaybackStartedWebhookEvent {
  data?: CallPlaybackStarted;
}

export interface CallRecordingErrorWebhookEvent {
  data?: CallRecordingError;
}

export interface CallRecordingSavedWebhookEvent {
  data?: CallRecordingSaved;
}

export interface CallRecordingTranscriptionSavedWebhookEvent {
  data?: CallRecordingTranscriptionSaved;
}

export interface CallReferCompletedWebhookEvent {
  data?: CallReferCompleted;
}

export interface CallReferFailedWebhookEvent {
  data?: CallReferFailed;
}

export interface CallReferStartedWebhookEvent {
  data?: CallReferStarted;
}

export interface CallSiprecFailedWebhookEvent {
  data?: CallSiprecFailed;
}

export interface CallSiprecStartedWebhookEvent {
  data?: CallSiprecStarted;
}

export interface CallSiprecStoppedWebhookEvent {
  data?: CallSiprecStopped;
}

export interface CallSpeakEndedWebhookEvent {
  data?: CallSpeakEnded;
}

export interface CallSpeakStartedWebhookEvent {
  data?: CallSpeakStarted;
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

export interface ConferenceCreatedWebhookEvent {
  data?: ConferenceCreated;
}

export interface ConferenceEndedWebhookEvent {
  data?: ConferenceEnded;
}

export interface ConferenceParticipantJoinedWebhookEvent {
  data?: ConferenceParticipantJoined;
}

export interface ConferenceParticipantLeftWebhookEvent {
  data?: ConferenceParticipantLeft;
}

export interface ConferenceParticipantPlaybackEndedWebhookEvent {
  data?: ConferenceParticipantPlaybackEnded;
}

export interface ConferenceParticipantPlaybackStartedWebhookEvent {
  data?: ConferenceParticipantPlaybackStarted;
}

export interface ConferenceParticipantSpeakEndedWebhookEvent {
  data?: ConferenceParticipantSpeakEnded;
}

export interface ConferenceParticipantSpeakStartedWebhookEvent {
  data?: ConferenceParticipantSpeakStarted;
}

export interface ConferencePlaybackEndedWebhookEvent {
  data?: ConferencePlaybackEnded;
}

export interface ConferencePlaybackStartedWebhookEvent {
  data?: ConferencePlaybackStarted;
}

export interface ConferenceRecordingSavedWebhookEvent {
  data?: ConferenceRecordingSaved;
}

export interface ConferenceSpeakEndedWebhookEvent {
  data?: ConferenceSpeakEnded;
}

export interface ConferenceSpeakStartedWebhookEvent {
  data?: ConferenceSpeakStarted;
}

export interface DeliveryUpdateWebhookEvent {
  data?: OutboundMessage;

  meta?: DeliveryUpdateWebhookEvent.Meta;
}

export namespace DeliveryUpdateWebhookEvent {
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

export interface InboundMessageWebhookEvent {
  data?: InboundMessage;
}

export interface ReplacedLinkClickWebhookEvent {
  data?: ReplacedLinkClick;
}

export interface TranscriptionWebhookEvent {
  data?: Transcription;
}

export interface CallAIGatherEndedWebhookEvent {
  data?: CallAIGatherEnded;
}

export interface CallAIGatherMessageHistoryUpdatedWebhookEvent {
  data?: CallAIGatherMessageHistoryUpdated;
}

export interface CallAIGatherPartialResultsWebhookEvent {
  data?: CallAIGatherPartialResults;
}

export interface CallAnsweredWebhookEvent {
  data?: CallAnswered;
}

export interface CallBridgedWebhookEvent {
  data?: CallBridged;
}

export interface CallConversationEndedWebhookEvent {
  data?: CallConversationEnded;
}

export interface CallConversationInsightsGeneratedWebhookEvent {
  data?: CallConversationInsightsGenerated;
}

export interface CallDtmfReceivedWebhookEvent {
  data?: CallDtmfReceived;
}

export interface CallEnqueuedWebhookEvent {
  data?: CallEnqueued;
}

export interface CallForkStartedWebhookEvent {
  data?: CallForkStarted;
}

export interface CallForkStoppedWebhookEvent {
  data?: CallForkStopped;
}

export interface CallGatherEndedWebhookEvent {
  data?: CallGatherEnded;
}

export interface CallHangupWebhookEvent {
  data?: CallHangup;
}

export interface CallInitiatedWebhookEvent {
  data?: CallInitiated;
}

export interface CallLeftQueueWebhookEvent {
  data?: CallLeftQueue;
}

export interface CallMachineDetectionEndedWebhookEvent {
  data?: CallMachineDetectionEnded;
}

export interface CallMachineGreetingEndedWebhookEvent {
  data?: CallMachineGreetingEnded;
}

export interface CallMachinePremiumDetectionEndedWebhookEvent {
  data?: CallMachinePremiumDetectionEnded;
}

export interface CallMachinePremiumGreetingEndedWebhookEvent {
  data?: CallMachinePremiumGreetingEnded;
}

export interface CallPlaybackEndedWebhookEvent {
  data?: CallPlaybackEnded;
}

export interface CallPlaybackStartedWebhookEvent {
  data?: CallPlaybackStarted;
}

export interface CallRecordingErrorWebhookEvent {
  data?: CallRecordingError;
}

export interface CallRecordingSavedWebhookEvent {
  data?: CallRecordingSaved;
}

export interface CallRecordingTranscriptionSavedWebhookEvent {
  data?: CallRecordingTranscriptionSaved;
}

export interface CallReferCompletedWebhookEvent {
  data?: CallReferCompleted;
}

export interface CallReferFailedWebhookEvent {
  data?: CallReferFailed;
}

export interface CallReferStartedWebhookEvent {
  data?: CallReferStarted;
}

export interface CallSiprecFailedWebhookEvent {
  data?: CallSiprecFailed;
}

export interface CallSiprecStartedWebhookEvent {
  data?: CallSiprecStarted;
}

export interface CallSiprecStoppedWebhookEvent {
  data?: CallSiprecStopped;
}

export interface CallSpeakEndedWebhookEvent {
  data?: CallSpeakEnded;
}

export interface CallSpeakStartedWebhookEvent {
  data?: CallSpeakStarted;
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

export interface ConferenceCreatedWebhookEvent {
  data?: ConferenceCreated;
}

export interface ConferenceEndedWebhookEvent {
  data?: ConferenceEnded;
}

export interface ConferenceParticipantJoinedWebhookEvent {
  data?: ConferenceParticipantJoined;
}

export interface ConferenceParticipantLeftWebhookEvent {
  data?: ConferenceParticipantLeft;
}

export interface ConferenceParticipantPlaybackEndedWebhookEvent {
  data?: ConferenceParticipantPlaybackEnded;
}

export interface ConferenceParticipantPlaybackStartedWebhookEvent {
  data?: ConferenceParticipantPlaybackStarted;
}

export interface ConferenceParticipantSpeakEndedWebhookEvent {
  data?: ConferenceParticipantSpeakEnded;
}

export interface ConferenceParticipantSpeakStartedWebhookEvent {
  data?: ConferenceParticipantSpeakStarted;
}

export interface ConferencePlaybackEndedWebhookEvent {
  data?: ConferencePlaybackEnded;
}

export interface ConferencePlaybackStartedWebhookEvent {
  data?: ConferencePlaybackStarted;
}

export interface ConferenceRecordingSavedWebhookEvent {
  data?: ConferenceRecordingSaved;
}

export interface ConferenceSpeakEndedWebhookEvent {
  data?: ConferenceSpeakEnded;
}

export interface ConferenceSpeakStartedWebhookEvent {
  data?: ConferenceSpeakStarted;
}

export interface DeliveryUpdateWebhookEvent {
  data?: OutboundMessage;

  meta?: DeliveryUpdateWebhookEvent.Meta;
}

export namespace DeliveryUpdateWebhookEvent {
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

export interface InboundMessageWebhookEvent {
  data?: InboundMessage;
}

export interface ReplacedLinkClickWebhookEvent {
  data?: ReplacedLinkClick;
}

export interface TranscriptionWebhookEvent {
  data?: Transcription;
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
  | CampaignStatusUpdate
  | ConferenceCreatedWebhookEvent
  | ConferenceEndedWebhookEvent
  | ConferenceFloorChanged
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
  | FaxDelivered
  | FaxFailed
  | FaxMediaProcessed
  | FaxQueued
  | FaxSendingStarted
  | InboundMessageWebhookEvent
  | NumberOrderStatusUpdate
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
  | CampaignStatusUpdate
  | ConferenceCreatedWebhookEvent
  | ConferenceEndedWebhookEvent
  | ConferenceFloorChanged
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
  | FaxDelivered
  | FaxFailed
  | FaxMediaProcessed
  | FaxQueued
  | FaxSendingStarted
  | InboundMessageWebhookEvent
  | NumberOrderStatusUpdate
  | ReplacedLinkClickWebhookEvent
  | TranscriptionWebhookEvent;

export declare namespace Webhooks {
  export {
    type CallAIGatherEnded as CallAIGatherEnded,
    type CallAIGatherMessageHistoryUpdated as CallAIGatherMessageHistoryUpdated,
    type CallAIGatherPartialResults as CallAIGatherPartialResults,
    type CallAnswered as CallAnswered,
    type CallBridged as CallBridged,
    type CallConversationEnded as CallConversationEnded,
    type CallConversationInsightsGenerated as CallConversationInsightsGenerated,
    type CallDtmfReceived as CallDtmfReceived,
    type CallEnqueued as CallEnqueued,
    type CallForkStarted as CallForkStarted,
    type CallForkStopped as CallForkStopped,
    type CallGatherEnded as CallGatherEnded,
    type CallHangup as CallHangup,
    type CallInitiated as CallInitiated,
    type CallLeftQueue as CallLeftQueue,
    type CallMachineDetectionEnded as CallMachineDetectionEnded,
    type CallMachineGreetingEnded as CallMachineGreetingEnded,
    type CallMachinePremiumDetectionEnded as CallMachinePremiumDetectionEnded,
    type CallMachinePremiumGreetingEnded as CallMachinePremiumGreetingEnded,
    type CallPlaybackEnded as CallPlaybackEnded,
    type CallPlaybackStarted as CallPlaybackStarted,
    type CallRecordingError as CallRecordingError,
    type CallRecordingSaved as CallRecordingSaved,
    type CallRecordingTranscriptionSaved as CallRecordingTranscriptionSaved,
    type CallReferCompleted as CallReferCompleted,
    type CallReferFailed as CallReferFailed,
    type CallReferStarted as CallReferStarted,
    type CallSiprecFailed as CallSiprecFailed,
    type CallSiprecStarted as CallSiprecStarted,
    type CallSiprecStopped as CallSiprecStopped,
    type CallSpeakEnded as CallSpeakEnded,
    type CallSpeakStarted as CallSpeakStarted,
    type CallStreamingFailed as CallStreamingFailed,
    type CallStreamingStarted as CallStreamingStarted,
    type CallStreamingStopped as CallStreamingStopped,
    type CampaignStatusUpdate as CampaignStatusUpdate,
    type ConferenceCreated as ConferenceCreated,
    type ConferenceEnded as ConferenceEnded,
    type ConferenceFloorChanged as ConferenceFloorChanged,
    type ConferenceParticipantJoined as ConferenceParticipantJoined,
    type ConferenceParticipantLeft as ConferenceParticipantLeft,
    type ConferenceParticipantPlaybackEnded as ConferenceParticipantPlaybackEnded,
    type ConferenceParticipantPlaybackStarted as ConferenceParticipantPlaybackStarted,
    type ConferenceParticipantSpeakEnded as ConferenceParticipantSpeakEnded,
    type ConferenceParticipantSpeakStarted as ConferenceParticipantSpeakStarted,
    type ConferencePlaybackEnded as ConferencePlaybackEnded,
    type ConferencePlaybackStarted as ConferencePlaybackStarted,
    type ConferenceRecordingSaved as ConferenceRecordingSaved,
    type ConferenceSpeakEnded as ConferenceSpeakEnded,
    type ConferenceSpeakStarted as ConferenceSpeakStarted,
    type FaxDelivered as FaxDelivered,
    type FaxFailed as FaxFailed,
    type FaxMediaProcessed as FaxMediaProcessed,
    type FaxQueued as FaxQueued,
    type FaxSendingStarted as FaxSendingStarted,
    type InboundMessage as InboundMessage,
    type NumberOrderStatusUpdate as NumberOrderStatusUpdate,
    type OutboundMessage as OutboundMessage,
    type ReplacedLinkClick as ReplacedLinkClick,
    type Transcription as Transcription,
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
    type ConferenceCreatedWebhookEvent as ConferenceCreatedWebhookEvent,
    type ConferenceEndedWebhookEvent as ConferenceEndedWebhookEvent,
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
    type InboundMessageWebhookEvent as InboundMessageWebhookEvent,
    type ReplacedLinkClickWebhookEvent as ReplacedLinkClickWebhookEvent,
    type TranscriptionWebhookEvent as TranscriptionWebhookEvent,
    type UnsafeUnwrapWebhookEvent as UnsafeUnwrapWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
