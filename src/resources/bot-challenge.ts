// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Agentic (bot) signup for Telnyx accounts. An AI agent solves a reverse-CAPTCHA challenge designed to be easy for LLMs and hard for humans, registers an account, and signs in by consuming a magic link emailed to the account owner. All endpoints are public and unauthenticated; signup endpoints are additionally gated by the freemium feature flags and per-country availability.
 */
export class BotChallenge extends APIResource {
  /**
   * Generates a reverse-CAPTCHA challenge used to gate the bot signup flow. A random
   * active problem is selected from the pool; math problems are returned obfuscated
   * (case randomization, symbol injection, spacing noise) with an unobfuscated
   * rounding instruction appended, while string and binary problems are returned
   * as-is. The response contains a single-use nonce, the problem text, and the
   * current terms-and-conditions and privacy-policy URLs, which must be echoed back
   * on the signup request. Challenges expire after a short window (10 minutes by
   * default) and can only be answered once. This endpoint is public and
   * unauthenticated.
   *
   * @example
   * ```ts
   * const botChallenge = await client.botChallenge.create({
   *   llm_model_name: 'claude-opus-4',
   *   llm_parameter_count: '175B',
   *   llm_quantization: 'int8',
   * });
   * ```
   */
  create(
    body: BotChallengeCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BotChallengeCreateResponse> {
    return this._client.post('/v2/bot_challenge', { body, ...options });
  }
}

export interface BotChallengeCreateResponse {
  data: BotChallengeCreateResponse.Data;
}

export namespace BotChallengeCreateResponse {
  export interface Data {
    /**
     * Type of challenge.
     */
    challenge_type: 'math' | 'string' | 'binary';

    /**
     * Single-use challenge identifier. Submit it as `bot_challenge_nonce` on the
     * signup request.
     */
    nonce: string;

    /**
     * Current privacy-policy URL. Echo this back on the signup request.
     */
    privacy_policy_url: string;

    /**
     * Problem text to solve. Math problems are obfuscated and end with an unobfuscated
     * rounding instruction; string and binary problems are returned as-is.
     */
    problem: string;

    /**
     * Current terms-and-conditions URL. Echo this back on the signup request.
     */
    terms_and_conditions_url: string;

    /**
     * Decimal places expected in the answer. Present only for math challenges.
     */
    precision?: number;
  }
}

export interface BotChallengeCreateParams {
  /**
   * Name of the LLM the client is using.
   */
  llm_model_name?: string;

  /**
   * Parameter count of the client LLM.
   */
  llm_parameter_count?: string;

  /**
   * Quantization of the client LLM.
   */
  llm_quantization?: string;
}

export declare namespace BotChallenge {
  export {
    type BotChallengeCreateResponse as BotChallengeCreateResponse,
    type BotChallengeCreateParams as BotChallengeCreateParams,
  };
}
