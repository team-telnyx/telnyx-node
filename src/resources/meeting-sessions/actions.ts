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
   * Sends a chat message into a meeting session.
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
   * (or avatar) attached, the bot is a webpage-output bot: the speak audio routes
   * through the assistant's output page rather than the bot mic and plays once the
   * assistant is connected -- it is not refused. If that page cannot be reached,
   * delivery fails with the 502 below, which may arrive without an error envelope,
   * so branch on the status code before parsing a body. The assistant is designed to
   * own the conversation, so prefer letting it speak or use `send_chat`.
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
   * Stops any active text-to-speech playback in a meeting session.
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
   * Chat message text to send in the meeting.
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
