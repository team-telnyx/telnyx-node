// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { DefaultFlatPagination, type DefaultFlatPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Configure AI assistant specifications
 */
export class Tools extends APIResource {
  /**
   * Retrieve a list of the custom AI tools configured on your account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sharedToolResponse of client.ai.tools.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ToolListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SharedToolResponsesDefaultFlatPagination, SharedToolResponse> {
    return this._client.getAPIList('/ai/tools', DefaultFlatPagination<SharedToolResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Create a new custom AI tool that can be attached to AI assistants.
   *
   * @example
   * ```ts
   * const sharedToolResponse = await client.ai.tools.create({
   *   display_name: 'display_name',
   *   type: 'type',
   * });
   * ```
   */
  create(params: ToolCreateParams, options?: RequestOptions): APIPromise<SharedToolResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/ai/tools', {
      body,
      ...options,
      headers: buildHeaders([
        { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
        options?.headers,
      ]),
    });
  }

  /**
   * Permanently deletes the specified custom AI tool from your account.
   *
   * @example
   * ```ts
   * await client.ai.tools.delete('tool_id');
   * ```
   */
  delete(toolID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/ai/tools/${toolID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve the details of a specific AI tool.
   *
   * @example
   * ```ts
   * const sharedToolResponse = await client.ai.tools.retrieve(
   *   'tool_id',
   * );
   * ```
   */
  retrieve(toolID: string, options?: RequestOptions): APIPromise<SharedToolResponse> {
    return this._client.get(path`/ai/tools/${toolID}`, options);
  }

  /**
   * Update the configuration of an existing AI tool.
   *
   * @example
   * ```ts
   * const sharedToolResponse = await client.ai.tools.update(
   *   'tool_id',
   * );
   * ```
   */
  update(toolID: string, body: ToolUpdateParams, options?: RequestOptions): APIPromise<SharedToolResponse> {
    return this._client.patch(path`/ai/tools/${toolID}`, { body, ...options });
  }
}

export type SharedToolResponsesDefaultFlatPagination = DefaultFlatPagination<SharedToolResponse>;

export interface PayToolParams {
  /**
   * The name of the pay connector configured in the Telnyx API. Must reference an
   * existing pay connector for this organization.
   */
  connector_name: string;

  /**
   * Custom key/value parameters forwarded to the pay connector as `parameters` in
   * the processor request. String values may use `{{dynamic_variable}}` templating,
   * resolved per call.
   */
  connector_parameters?: { [key: string]: unknown };

  /**
   * Default currency for payments processed by this tool.
   */
  currency?: string;

  /**
   * Description of the pay tool shown to the assistant so it knows when to call the
   * tool. Not sent to the payment connector — the per-call `description` argument
   * the assistant passes is what reaches the processor.
   */
  description?: string | null;

  /**
   * Time in milliseconds to wait between consecutive DTMF digits. Omitted means the
   * platform default (5000) applies.
   */
  inter_digit_timeout_millis?: number;

  /**
   * Maximum number of attempts for each payment collection step. Omitted means the
   * platform default (3) applies.
   */
  max_attempts?: number;

  /**
   * Minimum number of digits the caller must enter when collecting a credit-card
   * billing postal code. Applies only when `postal_code` prompts the caller. Omitted
   * means the platform default (1) applies. The maximum number of digits collected
   * is the greater of 10 and this value. This does not validate the length of a
   * postal code supplied directly in `postal_code`.
   */
  min_postal_code_length?: number;

  /**
   * Default payment method for payments processed by this tool.
   */
  payment_method?: string;

  /**
   * Controls billing postal code collection for credit-card payments. Set to `false`
   * to skip the postal code prompt without supplying a postal code to the payment
   * connector (non-US cards, e.g. Irish Eircodes). Set to `true` to prompt the
   * caller. Supply a non-empty string, such as `"90210"`, to use that postal code
   * without prompting. This option does not affect ACH debit payments or payments
   * using an existing token.
   */
  postal_code?: string | boolean;

  /**
   * Custom text-to-speech prompts keyed by payment collection step. The AI assistant
   * merges its own card-number prompt into this map, matching on the same step keys.
   */
  prompts?: PayToolParams.Prompts;

  /**
   * Time in milliseconds to wait for DTMF input for each collection step. Omitted
   * means the platform default (5000) applies. Increase this for slower entry, e.g.
   * a 16-digit card number.
   */
  timeout_millis?: number;

  /**
   * Restricts accepted card numbers to the listed card types. When the caller enters
   * a card number that does not match one of the listed types, Pay treats the input
   * as invalid and re-prompts for the card number.
   */
  valid_card_types?: Array<
    'visa' | 'mastercard' | 'amex' | 'maestro' | 'discover' | 'optima' | 'jcb' | 'diners-club' | 'enroute'
  >;
}

export namespace PayToolParams {
  /**
   * Custom text-to-speech prompts keyed by payment collection step. The AI assistant
   * merges its own card-number prompt into this map, matching on the same step keys.
   */
  export interface Prompts {
    /**
     * A default prompt string or an ordered list of qualified prompts.
     */
    'bank-account-number'?: string | Array<Prompts.UnionMember1>;

    /**
     * A default prompt string or an ordered list of qualified prompts.
     */
    'bank-routing-number'?: string | Array<Prompts.UnionMember1>;

    /**
     * A default prompt string or an ordered list of qualified prompts.
     */
    'expiration-date'?: string | Array<Prompts.UnionMember1>;

    /**
     * A default prompt string or an ordered list of qualified prompts.
     */
    'payment-card-number'?: string | Array<Prompts.UnionMember1>;

    /**
     * A default prompt string or an ordered list of qualified prompts.
     */
    'postal-code'?: string | Array<Prompts.UnionMember1>;

    /**
     * A default prompt string or an ordered list of qualified prompts.
     */
    'security-code'?: string | Array<Prompts.UnionMember1>;
  }

  export namespace Prompts {
    /**
     * A text-to-speech prompt with optional matching qualifiers, mirroring the Voice
     * API PayPrompt schema.
     */
    export interface UnionMember1 {
      /**
       * Text spoken for the payment collection step.
       */
      text: string;

      /**
       * Space-separated 1-based attempt numbers (1-9 followed by digits only, e.g.
       * `"2 3"`) for which this prompt applies. A prompt qualified with an attempt
       * number above `max_attempts` (default 3) is rejected at write time — it could
       * never play.
       */
      attempt?: string;

      /**
       * Lowercase, case-sensitive detected card type for which this prompt applies.
       */
      card_type?:
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'optima'
        | 'discover'
        | 'diners-club'
        | 'jcb'
        | 'maestro'
        | 'enroute';

      /**
       * Step error for which this prompt applies.
       */
      error_type?:
        | 'timeout'
        | 'invalid-card-number'
        | 'invalid-card-type'
        | 'invalid-date'
        | 'invalid-security-code'
        | 'invalid-postal-code'
        | 'invalid-bank-routing-number'
        | 'invalid-bank-account-number'
        | 'input-matching-failed';
    }

    /**
     * A text-to-speech prompt with optional matching qualifiers, mirroring the Voice
     * API PayPrompt schema.
     */
    export interface UnionMember1 {
      /**
       * Text spoken for the payment collection step.
       */
      text: string;

      /**
       * Space-separated 1-based attempt numbers (1-9 followed by digits only, e.g.
       * `"2 3"`) for which this prompt applies. A prompt qualified with an attempt
       * number above `max_attempts` (default 3) is rejected at write time — it could
       * never play.
       */
      attempt?: string;

      /**
       * Lowercase, case-sensitive detected card type for which this prompt applies.
       */
      card_type?:
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'optima'
        | 'discover'
        | 'diners-club'
        | 'jcb'
        | 'maestro'
        | 'enroute';

      /**
       * Step error for which this prompt applies.
       */
      error_type?:
        | 'timeout'
        | 'invalid-card-number'
        | 'invalid-card-type'
        | 'invalid-date'
        | 'invalid-security-code'
        | 'invalid-postal-code'
        | 'invalid-bank-routing-number'
        | 'invalid-bank-account-number'
        | 'input-matching-failed';
    }

    /**
     * A text-to-speech prompt with optional matching qualifiers, mirroring the Voice
     * API PayPrompt schema.
     */
    export interface UnionMember1 {
      /**
       * Text spoken for the payment collection step.
       */
      text: string;

      /**
       * Space-separated 1-based attempt numbers (1-9 followed by digits only, e.g.
       * `"2 3"`) for which this prompt applies. A prompt qualified with an attempt
       * number above `max_attempts` (default 3) is rejected at write time — it could
       * never play.
       */
      attempt?: string;

      /**
       * Lowercase, case-sensitive detected card type for which this prompt applies.
       */
      card_type?:
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'optima'
        | 'discover'
        | 'diners-club'
        | 'jcb'
        | 'maestro'
        | 'enroute';

      /**
       * Step error for which this prompt applies.
       */
      error_type?:
        | 'timeout'
        | 'invalid-card-number'
        | 'invalid-card-type'
        | 'invalid-date'
        | 'invalid-security-code'
        | 'invalid-postal-code'
        | 'invalid-bank-routing-number'
        | 'invalid-bank-account-number'
        | 'input-matching-failed';
    }

    /**
     * A text-to-speech prompt with optional matching qualifiers, mirroring the Voice
     * API PayPrompt schema.
     */
    export interface UnionMember1 {
      /**
       * Text spoken for the payment collection step.
       */
      text: string;

      /**
       * Space-separated 1-based attempt numbers (1-9 followed by digits only, e.g.
       * `"2 3"`) for which this prompt applies. A prompt qualified with an attempt
       * number above `max_attempts` (default 3) is rejected at write time — it could
       * never play.
       */
      attempt?: string;

      /**
       * Lowercase, case-sensitive detected card type for which this prompt applies.
       */
      card_type?:
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'optima'
        | 'discover'
        | 'diners-club'
        | 'jcb'
        | 'maestro'
        | 'enroute';

      /**
       * Step error for which this prompt applies.
       */
      error_type?:
        | 'timeout'
        | 'invalid-card-number'
        | 'invalid-card-type'
        | 'invalid-date'
        | 'invalid-security-code'
        | 'invalid-postal-code'
        | 'invalid-bank-routing-number'
        | 'invalid-bank-account-number'
        | 'input-matching-failed';
    }

    /**
     * A text-to-speech prompt with optional matching qualifiers, mirroring the Voice
     * API PayPrompt schema.
     */
    export interface UnionMember1 {
      /**
       * Text spoken for the payment collection step.
       */
      text: string;

      /**
       * Space-separated 1-based attempt numbers (1-9 followed by digits only, e.g.
       * `"2 3"`) for which this prompt applies. A prompt qualified with an attempt
       * number above `max_attempts` (default 3) is rejected at write time — it could
       * never play.
       */
      attempt?: string;

      /**
       * Lowercase, case-sensitive detected card type for which this prompt applies.
       */
      card_type?:
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'optima'
        | 'discover'
        | 'diners-club'
        | 'jcb'
        | 'maestro'
        | 'enroute';

      /**
       * Step error for which this prompt applies.
       */
      error_type?:
        | 'timeout'
        | 'invalid-card-number'
        | 'invalid-card-type'
        | 'invalid-date'
        | 'invalid-security-code'
        | 'invalid-postal-code'
        | 'invalid-bank-routing-number'
        | 'invalid-bank-account-number'
        | 'input-matching-failed';
    }

    /**
     * A text-to-speech prompt with optional matching qualifiers, mirroring the Voice
     * API PayPrompt schema.
     */
    export interface UnionMember1 {
      /**
       * Text spoken for the payment collection step.
       */
      text: string;

      /**
       * Space-separated 1-based attempt numbers (1-9 followed by digits only, e.g.
       * `"2 3"`) for which this prompt applies. A prompt qualified with an attempt
       * number above `max_attempts` (default 3) is rejected at write time — it could
       * never play.
       */
      attempt?: string;

      /**
       * Lowercase, case-sensitive detected card type for which this prompt applies.
       */
      card_type?:
        | 'visa'
        | 'mastercard'
        | 'amex'
        | 'optima'
        | 'discover'
        | 'diners-club'
        | 'jcb'
        | 'maestro'
        | 'enroute';

      /**
       * Step error for which this prompt applies.
       */
      error_type?:
        | 'timeout'
        | 'invalid-card-number'
        | 'invalid-card-type'
        | 'invalid-date'
        | 'invalid-security-code'
        | 'invalid-postal-code'
        | 'invalid-bank-routing-number'
        | 'invalid-bank-account-number'
        | 'input-matching-failed';
    }
  }
}

export interface SharedToolResponse {
  id: string;

  tool_definition: { [key: string]: unknown };

  type: string;

  created_at?: string;

  display_name?: string;

  timeout_ms?: number;
}

/**
 * Configuration for an update_dynamic_variables tool.
 */
export interface UpdateDynamicVariablesToolParams {
  /**
   * Description of the tool passed to the assistant, guiding when to call it and
   * which variables to update.
   */
  description: string;

  /**
   * The function name surfaced to the LLM. Must match the OpenAI function-name
   * pattern `^[a-zA-Z0-9_-]+$` and be unique across the assistant's function,
   * webhook, and client_side tools.
   */
  name: string;

  /**
   * The dynamic variables the assistant is allowed to write. At least one is
   * required.
   */
  updatable_variables: Array<UpdateDynamicVariablesToolParams.UpdatableVariable>;
}

export namespace UpdateDynamicVariablesToolParams {
  export interface UpdatableVariable {
    /**
     * The dynamic-variable key to update. Must match `^[a-zA-Z0-9._-]+$` and may not
     * start with the reserved `telnyx_` prefix (reserved for system variables). The
     * `pattern` encodes both rules via a negative lookahead.
     */
    name: string;

    /**
     * Optional description of the variable, guiding the assistant on what value to
     * capture.
     */
    description?: string;

    /**
     * Optional hint for the variable's value type (e.g. `string`).
     */
    type?: string;
  }
}

export interface VisionToolParams {
  /**
   * Frames received longer ago than this many seconds are not shown to the
   * assistant, so it never describes a frozen or disconnected camera as live.
   */
  max_frame_age_secs?: number;
}

export interface ToolListParams extends DefaultFlatPaginationParams {
  /**
   * Filter results by filter name.
   */
  'filter[name]'?: string;

  /**
   * Filter results by filter type.
   */
  'filter[type]'?: string;
}

export interface ToolCreateParams {
  /**
   * Body param
   */
  display_name: string;

  /**
   * Body param
   */
  type: string;

  /**
   * Body param
   */
  client_side_tool?: { [key: string]: unknown };

  /**
   * Body param
   */
  function?: { [key: string]: unknown };

  /**
   * Body param
   */
  handoff?: { [key: string]: unknown };

  /**
   * Body param
   */
  invite?: { [key: string]: unknown };

  /**
   * Body param
   */
  pay?: PayToolParams;

  /**
   * Body param
   */
  retrieval?: { [key: string]: unknown };

  /**
   * Body param
   */
  timeout_ms?: number;

  /**
   * Body param: Configuration for an update_dynamic_variables tool.
   */
  update_dynamic_variables?: UpdateDynamicVariablesToolParams;

  /**
   * Body param
   */
  vision?: VisionToolParams;

  /**
   * Body param
   */
  webhook?: { [key: string]: unknown };

  /**
   * Header param: Optional opaque, unquoted key for safely retrying the same logical
   * request. Keys must contain 1 to 255 letters, numbers, hyphens, or underscores.
   * Generate a unique UUID v4 for each operation and reuse it only when retrying
   * that operation with the same request. Invalid headers—including duplicate,
   * empty, malformed, or overlong values—return 400 with error code 10015. A request
   * already in progress with the same key returns 409; reusing the key with a
   * different request returns 422. Only successful responses are replayed, for up to
   * 24 hours. Do not include sensitive data in the key.
   */
  'Idempotency-Key'?: string;

  [k: string]: unknown;
}

export interface ToolUpdateParams {
  client_side_tool?: { [key: string]: unknown };

  display_name?: string;

  function?: { [key: string]: unknown };

  handoff?: { [key: string]: unknown };

  invite?: { [key: string]: unknown };

  pay?: PayToolParams;

  retrieval?: { [key: string]: unknown };

  timeout_ms?: number;

  type?: string;

  /**
   * Configuration for an update_dynamic_variables tool.
   */
  update_dynamic_variables?: UpdateDynamicVariablesToolParams;

  vision?: VisionToolParams;

  webhook?: { [key: string]: unknown };

  [k: string]: unknown;
}

export declare namespace Tools {
  export {
    type PayToolParams as PayToolParams,
    type SharedToolResponse as SharedToolResponse,
    type UpdateDynamicVariablesToolParams as UpdateDynamicVariablesToolParams,
    type VisionToolParams as VisionToolParams,
    type SharedToolResponsesDefaultFlatPagination as SharedToolResponsesDefaultFlatPagination,
    type ToolListParams as ToolListParams,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
  };
}
