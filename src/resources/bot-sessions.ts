// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Agentic (bot) signup for Telnyx accounts. An AI agent solves a reverse-CAPTCHA challenge designed to be easy for LLMs and hard for humans, registers an account, and signs in by consuming a magic link emailed to the account owner. All endpoints are public and unauthenticated; signup endpoints are additionally gated by the freemium feature flags and per-country availability.
 */
export class BotSessions extends APIResource {
  /**
   * Consumes the one-time portal redirect (magic link) token emailed during bot
   * signup and returns an API session. The token is a UUIDv7 that encodes its
   * creation time; it expires after a configurable validity window (15 minutes by
   * default) and is cleared on first use. Although the action creates a session, the
   * route uses the GET verb because it is opened from an email link. On first use
   * the account is also initialized. For bot signup (freemium) accounts the response
   * is a minimal envelope containing only the `api_v2_token`; accounts that are
   * permitted to use magic links but are not freemium accounts may instead receive
   * an extended session payload when additional steps (such as two-factor
   * authentication or identity verification) are required. This endpoint is public;
   * the magic link token in the query string is the credential.
   */
  list(query: BotSessionListParams, options?: RequestOptions): APIPromise<BotSessionListResponse> {
    return this._client.get('/v2/bot_sessions', { query, ...options });
  }
}

export interface BotSessionListResponse {
  data: BotSessionListResponse.Data;
}

export namespace BotSessionListResponse {
  export interface Data {
    /**
     * API v2 session token for the signed-in user. Use it as a bearer token on
     * authenticated endpoints.
     */
    api_v2_token: string;
  }
}

export interface BotSessionListParams {
  /**
   * Email address associated with the magic link token.
   */
  email: string;

  /**
   * Single-use portal redirect (magic link) token, a UUIDv7 sent to the account
   * owner's email.
   */
  portal_redirect_token: string;
}

export declare namespace BotSessions {
  export {
    type BotSessionListResponse as BotSessionListResponse,
    type BotSessionListParams as BotSessionListParams,
  };
}
