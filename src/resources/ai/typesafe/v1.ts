// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

/**
 * Beta API for evaluating shared context with typed questions and structured answers using Flash or Pro.
 */
export class V1 extends APIResource {
  /**
   * **Beta API.** Choose telnyx/decision-flash for the lowest cost and latency, or
   * telnyx/decision-pro for decisions that require long context, including inputs
   * beyond Jev’s 32k per-decision limit. Omitted model defaults to
   * telnyx/decision-flash.
   *
   * Evaluate shared context using named choice, noul (yes/no), and score questions.
   * Returns TypeSafe System One-compatible answer shapes, the selected public model
   * alias, and token usage. See the
   * [decision model guide](https://developers.telnyx.com/docs/inference/decision-models)
   * for examples and compatibility limits.
   *
   * The supported request subset requires instructions for every question, string
   * descriptions for criteria (or null for choice descriptions), 1–64 questions, and
   * 2–64 options for choice and score questions. The model field accepts only
   * telnyx/decision-flash or telnyx/decision-pro. Unsupported model values and
   * unknown fields are rejected. The endpoint is synchronous and does not stream.
   *
   * Use the TypeSafe Python SDK with base_url set to
   * https://api.telnyx.com/v2/ai/typesafe and a Telnyx API key. The SDK appends
   * /v1/systemone; explicitly set model to a supported Telnyx alias because its own
   * default model is not supported. Compatibility covers this operation and the
   * documented request subset; it does not include TypeSafe model listing. Scores
   * describe relative preference, not calibrated correctness.
   *
   * @example
   * ```ts
   * const response = await client.ai.typesafe.v1.systemone({
   *   questions: {
   *     team: {
   *       type: 'choice',
   *       instructions:
   *         'Choose the team that should handle this incident.',
   *       criteria: {
   *         billing: 'Payments and refunds',
   *         technical_support:
   *           'Service faults and technical problems',
   *         sales: 'New purchases',
   *       },
   *     },
   *     production_incident: {
   *       type: 'noul',
   *       instructions:
   *         'Does the message describe an active production incident?',
   *     },
   *     urgency: {
   *       type: 'score',
   *       instructions: 'Rate operational urgency.',
   *       criteria: ['Low', 'Normal', 'High', 'Critical'],
   *     },
   *   },
   *   state:
   *     'Our production calls are failing. Every customer is affected.',
   *   model: 'telnyx/decision-flash',
   * });
   * ```
   */
  systemone(body: V1SystemoneParams, options?: RequestOptions): APIPromise<V1SystemoneResponse> {
    return this._client.post('/ai/typesafe/v1/systemone', { body, ...options });
  }
}

/**
 * A complete synchronous evaluation. Answers are returned directly without a data
 * wrapper.
 */
export interface V1SystemoneResponse {
  /**
   * Answers keyed by exactly the question IDs in the request. Each answer type
   * matches its question.
   */
  answers: {
    [key: string]:
      | V1SystemoneResponse.DecisionModelChoiceAnswer
      | V1SystemoneResponse.DecisionModelNoulAnswer
      | V1SystemoneResponse.DecisionModelScoreAnswer;
  };

  /**
   * Public model alias used to evaluate the request. Returns telnyx/decision-flash
   * when model was omitted. The underlying model is managed by Telnyx.
   */
  model: 'telnyx/decision-flash' | 'telnyx/decision-pro';

  /**
   * Token usage for the completed evaluation.
   */
  usage: V1SystemoneResponse.Usage;
}

export namespace V1SystemoneResponse {
  /**
   * A selected option and the distribution across all supplied option keys.
   */
  export interface DecisionModelChoiceAnswer {
    /**
     * The option key with the highest relative score. Ties favor the first option in
     * request order.
     */
    choice: string;

    /**
     * Normalized entropy confidence: 1 - H(p) / ln(N), where H(p) = -sum(p \* ln(p))
     * and N is the number of options. Zero indicates a uniform distribution; one
     * indicates concentration on one option. This is neither the winning probability
     * nor calibrated correctness.
     */
    confidence: number;

    /**
     * Relative scores normalized across the supplied options, summing approximately
     * to 1. These are not calibrated probabilities of correctness.
     */
    probabilities: { [key: string]: number };

    /**
     * Answer type.
     */
    type: 'choice';
  }

  /**
   * A yes/no score with no separate confidence or probabilities fields.
   */
  export interface DecisionModelNoulAnswer {
    /**
     * Score of the positive outcome. Values near 1 favor yes; values near 0 favor no.
     * This is a number, not a Boolean, and is not calibrated correctness.
     */
    noul: number;

    /**
     * Answer type.
     */
    type: 'noul';
  }

  /**
   * An expected rating over the ordered criteria.
   */
  export interface DecisionModelScoreAnswer {
    /**
     * Normalized entropy confidence: 1 - H(p) / ln(N), where H(p) = -sum(p \* ln(p))
     * and N is the number of options. Zero indicates a uniform distribution; one
     * indicates concentration on one option. This is neither the winning probability
     * nor calibrated correctness.
     */
    confidence: number;

    /**
     * Criterion descriptions keyed by stringified zero-based indices, such as "0",
     * "1", and "2".
     */
    legend: { [key: string]: string };

    /**
     * Relative scores keyed by the same stringified indices as legend.
     */
    probabilities: { [key: string]: number };

    /**
     * Expected zero-based criterion index: sum(index \* probability). Ranges from 0 to
     * N-1 for N criteria; fractional values are valid.
     */
    score: number;

    /**
     * Answer type.
     */
    type: 'score';
  }

  /**
   * Token usage for the completed evaluation.
   */
  export interface Usage {
    /**
     * Input tokens processed, including shared-context preparation and question
     * evaluation. This can exceed the token count of the unique input text.
     */
    input_tokens: number;

    /**
     * Output tokens used for the evaluation, including shared-context preparation.
     */
    output_tokens: number;
  }
}

export interface V1SystemoneParams {
  /**
   * Between 1 and 64 named questions. Each key identifies the corresponding answer.
   */
  questions: {
    [key: string]:
      | V1SystemoneParams.DecisionModelChoiceQuestion
      | V1SystemoneParams.DecisionModelNoulQuestion
      | V1SystemoneParams.DecisionModelScoreQuestion;
  };

  /**
   * Shared context evaluated by every question.
   */
  state: string | { [key: string]: unknown } | Array<unknown>;

  /**
   * Public model alias. telnyx/decision-flash offers the lowest cost and latency;
   * telnyx/decision-pro supports decisions that require long context, including
   * inputs beyond Jev’s 32k per-decision limit. Applies to every question in the
   * request. Other values are rejected.
   */
  model?: 'telnyx/decision-flash' | 'telnyx/decision-pro';
}

export namespace V1SystemoneParams {
  /**
   * Select one of the supplied options.
   */
  export interface DecisionModelChoiceQuestion {
    /**
     * Between 2 and 64 option keys mapped to description strings or null. A null
     * description uses the option key as its text.
     */
    criteria: { [key: string]: string | null };

    /**
     * Required instructions describing what to decide about the shared state.
     */
    instructions: string | { [key: string]: unknown } | Array<unknown>;

    /**
     * Question type.
     */
    type: 'choice';
  }

  /**
   * Evaluate a yes/no question. Omit criteria to use Yes and No descriptions.
   */
  export interface DecisionModelNoulQuestion {
    /**
     * Required instructions describing what to decide about the shared state.
     */
    instructions: string | { [key: string]: unknown } | Array<unknown>;

    /**
     * Question type.
     */
    type: 'noul';

    /**
     * Optional descriptions for the positive and negative outcomes. Descriptions must
     * be strings.
     */
    criteria?: DecisionModelNoulQuestion.Criteria;
  }

  export namespace DecisionModelNoulQuestion {
    /**
     * Optional descriptions for the positive and negative outcomes. Descriptions must
     * be strings.
     */
    export interface Criteria {
      /**
       * Description of the negative outcome.
       */
      false?: string;

      /**
       * Description of the positive outcome.
       */
      true?: string;
    }
  }

  /**
   * Rate the state against an ordered rubric.
   */
  export interface DecisionModelScoreQuestion {
    /**
     * Between 2 and 64 description strings in ascending score order. Indices start at
     * zero.
     */
    criteria: Array<string>;

    /**
     * Required instructions describing what to decide about the shared state.
     */
    instructions: string | { [key: string]: unknown } | Array<unknown>;

    /**
     * Question type.
     */
    type: 'score';
  }
}

export declare namespace V1 {
  export { type V1SystemoneResponse as V1SystemoneResponse, type V1SystemoneParams as V1SystemoneParams };
}
