// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Send real-time speech and chat actions to an active meeting session.
 */
export class Actions extends APIResource {
  /**
   * Send chat as the bot in an active meeting. Returns 202 with data.accepted=true.
   * Google Meet and Teams confirm sending before success; 502 chat_not_sent means
   * not sent, while chat_delivery_unknown means delivery may have occurred. Inspect
   * chat and chat.sent events before retrying an uncertain send. Each request is a
   * new message and is not idempotent. Google Meet and Teams allow at most 1000 chat
   * requests per session, including an entrance message; exceeding this returns 409
   * invalid_state.
   *
   * @example
   * ```ts
   * const actionAcceptedResponse =
   *   await client.meetingSessions.actions.sendChat(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     { text: 'I will send the summary after this call.' },
   *   );
   * ```
   */
  sendChat(
    id: string,
    body: ActionSendChatParams,
    options?: RequestOptions,
  ): APIPromise<ActionAcceptedResponse> {
    return this._client.post(path`/meeting_sessions/${id}/actions/send_chat`, { body, ...options });
  }

  /**
   * Sends audio / text-to-speech into a meeting session. With a Telnyx AI Assistant
   * attached, wait for the assistant to connect before requesting speech. If audio
   * delivery fails, the response can be 502, which may arrive without an error
   * envelope, so branch on the status code before parsing a body. The assistant is
   * designed to own the conversation, so prefer letting it speak or use `send_chat`.
   * With a digital avatar (`assistant.avatar: true`), speak is refused with 409
   * `invalid_state` (message prefix `avatar_requires_assistant_speech:`): the avatar
   * renders only the assistant's own speech.
   *
   * @example
   * ```ts
   * const actionAcceptedResponse =
   *   await client.meetingSessions.actions.speak(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *     {
   *       text: 'Here are the three decisions from this call.',
   *     },
   *   );
   * ```
   */
  speak(id: string, body: ActionSpeakParams, options?: RequestOptions): APIPromise<ActionAcceptedResponse> {
    return this._client.post(path`/meeting_sessions/${id}/actions/speak`, { body, ...options });
  }

  /**
   * Stops any active text-to-speech playback in a meeting session. Sessions with a
   * digital avatar (`assistant.avatar: true`) return 409 `invalid_state` (message
   * prefix `avatar_requires_assistant_speech:`): the avatar renders only the
   * assistant's own speech.
   *
   * @example
   * ```ts
   * const actionAcceptedResponse =
   *   await client.meetingSessions.actions.stopSpeaking(
   *     'mtgsess_a1b2c3d4-e5f6-7890-abcd-ef1234567890',
   *   );
   * ```
   */
  stopSpeaking(id: string, options?: RequestOptions): APIPromise<ActionAcceptedResponse> {
    return this._client.post(path`/meeting_sessions/${id}/actions/stop_speaking`, options);
  }
}

export interface ActionAcceptedResponse {
  data: ActionAcceptedResponse.Data;
}

export namespace ActionAcceptedResponse {
  export interface Data {
    accepted: boolean;
  }
}

export interface ActionSendChatParams {
  /**
   * Message text, 1–4000 characters. On Google Meet and Teams, also at most 4096
   * UTF-8 bytes and nonblank; control characters other than tab and line breaks are
   * rejected. CRLF is normalized to LF.
   */
  text: string;
}

export interface ActionSpeakParams {
  /**
   * Text for the bot to speak.
   */
  text: string;

  /**
   * If true, interrupt any currently playing audio to speak this text immediately.
   */
  interrupt?: boolean;

  /**
   * Voice identifier to use for this utterance. When supplied, it overrides the
   * session-default voice configured at creation; otherwise the speak action uses
   * that session default.
   */
  voice?: string;
}

export declare namespace Actions {
  export {
    type ActionAcceptedResponse as ActionAcceptedResponse,
    type ActionSendChatParams as ActionSendChatParams,
    type ActionSpeakParams as ActionSpeakParams,
  };
}
