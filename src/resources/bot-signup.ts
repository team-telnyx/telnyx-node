// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Agentic (bot) signup for Telnyx accounts. An AI agent solves a reverse-CAPTCHA challenge designed to be easy for LLMs and hard for humans, registers an account, and signs in by consuming a magic link emailed to the account owner. All endpoints are public and unauthenticated; signup endpoints are additionally gated by the freemium feature flags and per-country availability.
 */
export class BotSignup extends APIResource {
  /**
   * Creates a freemium Telnyx account through the agentic signup flow. The request
   * must carry a valid answer to a previously issued bot challenge
   * (`bot_challenge_nonce` and `bot_challenge_answer`), accept the terms of service,
   * and echo the exact terms-and-conditions and privacy-policy URLs returned by the
   * challenge endpoint. When EU consent enforcement is enabled,
   * `terms_of_service_eu` and `terms_and_conditions_eu_url` are also required. On
   * success a one-time sign-in (magic) link is emailed to the address provided; if
   * the email address belongs to an existing account, a sign-in link is sent instead
   * of creating a duplicate account. `email` may only be omitted when
   * placeholder-email registration is enabled server-side. This endpoint is public
   * and unauthenticated, gated by the freemium feature flags and per-country
   * availability, and subject to per-IP and per-domain registration limits.
   *
   * @example
   * ```ts
   * const successResponse = await client.botSignup.create({
   *   bot_challenge_answer: '35',
   *   bot_challenge_nonce:
   *     'c6feda4e-6501-4db9-a21f-665e5b4ce2ba',
   *   privacy_policy_url: 'https://telnyx.com/privacy-policy',
   *   terms_and_conditions_url:
   *     'https://telnyx.com/terms-and-conditions-of-service',
   *   terms_of_service: true,
   *   email: 'agent-owner@example.com',
   * });
   * ```
   */
  create(body: BotSignupCreateParams, options?: RequestOptions): APIPromise<SuccessResponse> {
    return this._client.post('/v2/bot_signup', { body, ...options });
  }

  /**
   * Resends the one-time sign-in (magic) link for an eligible bot signup account.
   * Eligibility (account exists, was registered through bot signup, is active, and
   * has not exceeded the resend limit or rate window) is evaluated server-side; the
   * response is intentionally uniform and does not reveal whether the account exists
   * or whether a link was actually sent. This endpoint is public and
   * unauthenticated, gated by the freemium feature flags and per-country
   * availability.
   *
   * @example
   * ```ts
   * const successResponse =
   *   await client.botSignup.resendMagicLink({
   *     email: 'agent-owner@example.com',
   *   });
   * ```
   */
  resendMagicLink(
    body: BotSignupResendMagicLinkParams,
    options?: RequestOptions,
  ): APIPromise<SuccessResponse> {
    return this._client.post('/v2/bot_signup/resend_magic_link', { body, ...options });
  }
}

/**
 * Status envelope used by the signup and magic-link flows.
 */
export interface SuccessResponse {
  /**
   * Human-readable status message.
   */
  message: string;

  /**
   * Whether the request was accepted.
   */
  success: boolean;
}

export interface BotSignupCreateParams {
  /**
   * Answer to the issued bot challenge.
   */
  bot_challenge_answer: string;

  /**
   * Nonce from a previously issued bot challenge.
   */
  bot_challenge_nonce: string;

  /**
   * Must exactly match the privacy-policy URL returned by the challenge endpoint.
   */
  privacy_policy_url: string;

  /**
   * Must exactly match the terms-and-conditions URL returned by the challenge
   * endpoint.
   */
  terms_and_conditions_url: string;

  /**
   * Must be true to accept the terms of service.
   */
  terms_of_service: true;

  /**
   * Email address for the new account. The magic link is sent here. May only be
   * omitted when placeholder-email registration is enabled server-side.
   */
  email?: string;

  /**
   * EU terms-and-conditions URL. Required when EU consent enforcement is enabled.
   */
  terms_and_conditions_eu_url?: string;

  /**
   * EU terms-of-service acceptance. Required when EU consent enforcement is enabled.
   */
  terms_of_service_eu?: true;
}

export interface BotSignupResendMagicLinkParams {
  /**
   * Email address of the bot signup account to resend the magic link to.
   */
  email: string;
}

export declare namespace BotSignup {
  export {
    type SuccessResponse as SuccessResponse,
    type BotSignupCreateParams as BotSignupCreateParams,
    type BotSignupResendMagicLinkParams as BotSignupResendMagicLinkParams,
  };
}
