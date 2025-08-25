// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Actions extends APIResource {
  /**
   * Synchronously create an Client Token to join a Room. Client Token is necessary
   * to join a Telnyx Room. Client Token will expire after `token_ttl_secs`, a
   * Refresh Token is also provided to refresh a Client Token, the Refresh Token
   * expires after `refresh_token_ttl_secs`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.rooms.actions.generateJoinClientToken(
   *     '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   *   );
   * ```
   */
  generateJoinClientToken(
    roomID: string,
    body: ActionGenerateJoinClientTokenParams,
    options?: RequestOptions,
  ): APIPromise<ActionGenerateJoinClientTokenResponse> {
    return this._client.post(path`/rooms/${roomID}/actions/generate_join_client_token`, { body, ...options });
  }

  /**
   * Synchronously refresh an Client Token to join a Room. Client Token is necessary
   * to join a Telnyx Room. Client Token will expire after `token_ttl_secs`.
   *
   * @example
   * ```ts
   * const response =
   *   await client.rooms.actions.refreshClientToken(
   *     '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
   *     {
   *       refresh_token:
   *         'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ0ZWxueXhfdGVsZXBob255IiwiZXhwIjoxNTkwMDEwMTQzLCJpYXQiOjE1ODc1OTA5NDMsImlzcyI6InRlbG55eF90ZWxlcGhvbnkiLCJqdGkiOiJiOGM3NDgzNy1kODllLTRhNjUtOWNmMi0zNGM3YTZmYTYwYzgiLCJuYmYiOjE1ODc1OTA5NDIsInN1YiI6IjVjN2FjN2QwLWRiNjUtNGYxMS05OGUxLWVlYzBkMWQ1YzZhZSIsInRlbF90b2tlbiI6InJqX1pra1pVT1pNeFpPZk9tTHBFVUIzc2lVN3U2UmpaRmVNOXMtZ2JfeENSNTZXRktGQUppTXlGMlQ2Q0JSbWxoX1N5MGlfbGZ5VDlBSThzRWlmOE1USUlzenl6U2xfYURuRzQ4YU81MHlhSEd1UlNZYlViU1ltOVdJaVEwZz09IiwidHlwIjoiYWNjZXNzIn0.gNEwzTow5MLLPLQENytca7pUN79PmPj6FyqZWW06ZeEmesxYpwKh0xRtA0TzLh6CDYIRHrI8seofOO0YFGDhpQ',
   *     },
   *   );
   * ```
   */
  refreshClientToken(
    roomID: string,
    body: ActionRefreshClientTokenParams,
    options?: RequestOptions,
  ): APIPromise<ActionRefreshClientTokenResponse> {
    return this._client.post(path`/rooms/${roomID}/actions/refresh_client_token`, { body, ...options });
  }
}

export interface ActionGenerateJoinClientTokenResponse {
  data?: ActionGenerateJoinClientTokenResponse.Data;
}

export namespace ActionGenerateJoinClientTokenResponse {
  export interface Data {
    token?: string;

    refresh_token?: string;

    /**
     * ISO 8601 timestamp when the refresh token expires.
     */
    refresh_token_expires_at?: string;

    /**
     * ISO 8601 timestamp when the token expires.
     */
    token_expires_at?: string;
  }
}

export interface ActionRefreshClientTokenResponse {
  data?: ActionRefreshClientTokenResponse.Data;
}

export namespace ActionRefreshClientTokenResponse {
  export interface Data {
    token?: string;

    /**
     * ISO 8601 timestamp when the token expires.
     */
    token_expires_at?: string;
  }
}

export interface ActionGenerateJoinClientTokenParams {
  /**
   * The time to live in seconds of the Refresh Token, after that time the Refresh
   * Token is invalid and can't be used to refresh Client Token.
   */
  refresh_token_ttl_secs?: number;

  /**
   * The time to live in seconds of the Client Token, after that time the Client
   * Token is invalid and can't be used to join a Room.
   */
  token_ttl_secs?: number;
}

export interface ActionRefreshClientTokenParams {
  refresh_token: string;

  /**
   * The time to live in seconds of the Client Token, after that time the Client
   * Token is invalid and can't be used to join a Room.
   */
  token_ttl_secs?: number;
}

export declare namespace Actions {
  export {
    type ActionGenerateJoinClientTokenResponse as ActionGenerateJoinClientTokenResponse,
    type ActionRefreshClientTokenResponse as ActionRefreshClientTokenResponse,
    type ActionGenerateJoinClientTokenParams as ActionGenerateJoinClientTokenParams,
    type ActionRefreshClientTokenParams as ActionRefreshClientTokenParams,
  };
}
