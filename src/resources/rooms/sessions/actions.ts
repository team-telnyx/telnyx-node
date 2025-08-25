// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Note: this will also kick all participants currently present in the room
   *
   * @example
   * ```ts
   * const response = await client.rooms.sessions.actions.end(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  end(roomSessionID: string, options?: RequestOptions): APIPromise<ActionEndResponse> {
    return this._client.post(path`/room_sessions/${roomSessionID}/actions/end`, options);
  }

  /**
   * Kick participants from a room session.
   *
   * @example
   * ```ts
   * const response = await client.rooms.sessions.actions.kick(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  kick(
    roomSessionID: string,
    body: ActionKickParams,
    options?: RequestOptions,
  ): APIPromise<ActionKickResponse> {
    return this._client.post(path`/room_sessions/${roomSessionID}/actions/kick`, { body, ...options });
  }

  /**
   * Mute participants in room session.
   *
   * @example
   * ```ts
   * const response = await client.rooms.sessions.actions.mute(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  mute(
    roomSessionID: string,
    body: ActionMuteParams,
    options?: RequestOptions,
  ): APIPromise<ActionMuteResponse> {
    return this._client.post(path`/room_sessions/${roomSessionID}/actions/mute`, { body, ...options });
  }

  /**
   * Unmute participants in room session.
   *
   * @example
   * ```ts
   * const response = await client.rooms.sessions.actions.unmute(
   *   '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   * );
   * ```
   */
  unmute(
    roomSessionID: string,
    body: ActionUnmuteParams,
    options?: RequestOptions,
  ): APIPromise<ActionUnmuteResponse> {
    return this._client.post(path`/room_sessions/${roomSessionID}/actions/unmute`, { body, ...options });
  }
}

export interface ActionsParticipantsRequest {
  /**
   * List of participant id to exclude from the action.
   */
  exclude?: Array<string>;

  /**
   * Either a list of participant id to perform the action on, or the keyword "all"
   * to perform the action on all participant.
   */
  participants?: 'all' | Array<string>;
}

export interface ActionEndResponse {
  data?: ActionEndResponse.Data;
}

export namespace ActionEndResponse {
  export interface Data {
    result?: string;
  }
}

export interface ActionKickResponse {
  data?: ActionKickResponse.Data;
}

export namespace ActionKickResponse {
  export interface Data {
    result?: string;
  }
}

export interface ActionMuteResponse {
  data?: ActionMuteResponse.Data;
}

export namespace ActionMuteResponse {
  export interface Data {
    result?: string;
  }
}

export interface ActionUnmuteResponse {
  data?: ActionUnmuteResponse.Data;
}

export namespace ActionUnmuteResponse {
  export interface Data {
    result?: string;
  }
}

export interface ActionKickParams {
  /**
   * List of participant id to exclude from the action.
   */
  exclude?: Array<string>;

  /**
   * Either a list of participant id to perform the action on, or the keyword "all"
   * to perform the action on all participant.
   */
  participants?: 'all' | Array<string>;
}

export interface ActionMuteParams {
  /**
   * List of participant id to exclude from the action.
   */
  exclude?: Array<string>;

  /**
   * Either a list of participant id to perform the action on, or the keyword "all"
   * to perform the action on all participant.
   */
  participants?: 'all' | Array<string>;
}

export interface ActionUnmuteParams {
  /**
   * List of participant id to exclude from the action.
   */
  exclude?: Array<string>;

  /**
   * Either a list of participant id to perform the action on, or the keyword "all"
   * to perform the action on all participant.
   */
  participants?: 'all' | Array<string>;
}

export declare namespace Actions {
  export {
    type ActionsParticipantsRequest as ActionsParticipantsRequest,
    type ActionEndResponse as ActionEndResponse,
    type ActionKickResponse as ActionKickResponse,
    type ActionMuteResponse as ActionMuteResponse,
    type ActionUnmuteResponse as ActionUnmuteResponse,
    type ActionKickParams as ActionKickParams,
    type ActionMuteParams as ActionMuteParams,
    type ActionUnmuteParams as ActionUnmuteParams,
  };
}
