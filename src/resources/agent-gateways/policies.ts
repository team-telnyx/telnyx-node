// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Named sets of guardrails an instance applies to requests.
 */
export class Policies extends APIResource {
  /**
   * Lists the instance's policies, each in its current version.
   *
   * @example
   * ```ts
   * const policies = await client.agentGateways.policies.list(
   *   '32ce035d-3165-4031-b1a7-a7c0c259590a',
   * );
   * ```
   */
  list(instanceID: string, options?: RequestOptions): APIPromise<PolicyListResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/policies`, options);
  }

  /**
   * Creates a named set of guardrails. It applies from the next request on, to the
   * requests that name it in `policies` and to those its
   * [attachments](https://developers.telnyx.com/api-reference/agent-gateway-policy-attachments/attach-a-policy)
   * match.
   *
   * @example
   * ```ts
   * const agentGatewayPolicyResponse =
   *   await client.agentGateways.policies.create(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *     {
   *       name: 'baseline',
   *       description: 'Mask personal data',
   *       guardrails: { add: ['mask-pii'] },
   *     },
   *   );
   * ```
   */
  create(
    instanceID: string,
    body: PolicyCreateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayPolicyResponse> {
    return this._client.post(path`/agent_gateways/${instanceID}/policies`, { body, ...options });
  }

  /**
   * Deletes a policy and every version of it, and returns it as it was. A policy
   * that an attachment names, or that another policy builds on, cannot be deleted.
   *
   * @example
   * ```ts
   * const agentGatewayPolicyResponse =
   *   await client.agentGateways.policies.delete('strict', {
   *     instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *   });
   * ```
   */
  delete(
    name: string,
    params: PolicyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayPolicyResponse> {
    const { instance_id } = params;
    return this._client.delete(path`/agent_gateways/${instance_id}/policies/${name}`, options);
  }

  /**
   * Returns one policy, in its current version.
   *
   * @example
   * ```ts
   * const agentGatewayPolicyResponse =
   *   await client.agentGateways.policies.retrieve('strict', {
   *     instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *   });
   * ```
   */
  retrieve(
    name: string,
    params: PolicyRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayPolicyResponse> {
    const { instance_id } = params;
    return this._client.get(path`/agent_gateways/${instance_id}/policies/${name}`, options);
  }

  /**
   * Changes a policy, which publishes a new version of it. A field left out stays as
   * it is; `guardrails` and `pipeline` are replaced whole, and `model: null` removes
   * the condition.
   *
   * @example
   * ```ts
   * const agentGatewayPolicyResponse =
   *   await client.agentGateways.policies.update('strict', {
   *     instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *     description: 'Baseline plus a word check',
   *   });
   * ```
   */
  update(
    name: string,
    params: PolicyUpdateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayPolicyResponse> {
    const { instance_id, ...body } = params;
    return this._client.patch(path`/agent_gateways/${instance_id}/policies/${name}`, { body, ...options });
  }
}

/**
 * A named set of guardrails.
 */
export interface AgentGatewayPolicy {
  /**
   * A policy this one builds on, by name. The policy starts with the base's
   * guardrails.
   */
  base: string | null;

  /**
   * When the policy's current version was created. An update creates a new version.
   */
  created_at: string | null;

  /**
   * What the policy is for.
   */
  description: string | null;

  /**
   * The guardrails a policy adds to its base's, and the ones it removes from them,
   * by name.
   */
  guardrails: AgentGatewayPolicyGuardrails;

  /**
   * A condition on the model, by name or regular expression. The policy's guardrails
   * run only on requests for a matching model. `null` matches every model.
   */
  model: string | null;

  /**
   * A name, unique on the instance. A request names the policy in its `policies`
   * field.
   */
  name: string;

  /**
   * Ordered steps that run in place of the policy's guardrails running
   * independently.
   */
  pipeline: AgentGatewayPolicyPipeline | null;

  /**
   * When the policy last changed.
   */
  updated_at: string | null;
}

/**
 * The guardrails a policy adds to its base's, and the ones it removes from them,
 * by name.
 */
export interface AgentGatewayPolicyGuardrails {
  /**
   * Guardrails the policy runs in addition to its base's.
   */
  add?: Array<string>;

  /**
   * Guardrails from its base that the policy does not run.
   */
  remove?: Array<string>;
}

/**
 * Ordered steps that run in place of the policy's guardrails running
 * independently.
 */
export interface AgentGatewayPolicyPipeline {
  /**
   * `before_request` runs the steps on the request, and `after_request` on the
   * model's response.
   */
  hook: 'before_request' | 'after_request';

  steps: Array<AgentGatewayPolicyPipeline.Step>;
}

export namespace AgentGatewayPolicyPipeline {
  /**
   * One pipeline step: a guardrail, and what happens when it passes, fails, or
   * errors.
   */
  export interface Step {
    /**
     * A guardrail on the instance, by name.
     */
    guardrail: string;

    /**
     * The response that replaces the model's when an outcome is `respond`. Required
     * with `respond`.
     */
    message?: string | null;

    /**
     * What happens when the guardrail errors. Left out, the same as `on_fail`.
     */
    on_error?: 'next' | 'allow' | 'block' | 'respond' | null;

    /**
     * What happens when the guardrail fails.
     */
    on_fail?: 'next' | 'allow' | 'block' | 'respond';

    /**
     * What happens when the guardrail passes. `next` goes on to the next step, `allow`
     * allows the request, `block` blocks it, and `respond` answers with `message`.
     */
    on_pass?: 'next' | 'allow' | 'block' | 'respond';

    /**
     * `true` hands the step's modified request, such as masked text, to the next step.
     */
    pass_data?: boolean;
  }
}

export interface AgentGatewayPolicyResponse {
  /**
   * A named set of guardrails.
   */
  data: AgentGatewayPolicy;
}

export interface PolicyListResponse {
  data: Array<AgentGatewayPolicy>;
}

export interface PolicyCreateParams {
  /**
   * A name, unique on the instance. A request names the policy in its `policies`
   * field.
   */
  name: string;

  /**
   * A policy this one builds on, by name. The policy starts with the base's
   * guardrails.
   */
  base?: string | null;

  /**
   * What the policy is for.
   */
  description?: string | null;

  /**
   * The guardrails a policy adds to its base's, and the ones it removes from them,
   * by name.
   */
  guardrails?: AgentGatewayPolicyGuardrails;

  /**
   * A condition on the model, by name or regular expression. The policy's guardrails
   * run only on requests for a matching model. `null` matches every model.
   */
  model?: string | null;

  /**
   * Ordered steps that run in place of the policy's guardrails running
   * independently.
   */
  pipeline?: AgentGatewayPolicyPipeline | null;
}

export interface PolicyDeleteParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface PolicyRetrieveParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export interface PolicyUpdateParams {
  /**
   * Path param: The Agent Gateway's `id`.
   */
  instance_id: string;

  /**
   * Body param: A policy this one builds on, by name. The policy starts with the
   * base's guardrails.
   */
  base?: string | null;

  /**
   * Body param: What the policy is for.
   */
  description?: string | null;

  /**
   * Body param: The guardrails a policy adds to its base's, and the ones it removes
   * from them, by name.
   */
  guardrails?: AgentGatewayPolicyGuardrails;

  /**
   * Body param: A condition on the model, by name or regular expression. The
   * policy's guardrails run only on requests for a matching model. `null` matches
   * every model.
   */
  model?: string | null;

  /**
   * Body param: Ordered steps that run in place of the policy's guardrails running
   * independently.
   */
  pipeline?: AgentGatewayPolicyPipeline | null;
}

export declare namespace Policies {
  export {
    type AgentGatewayPolicy as AgentGatewayPolicy,
    type AgentGatewayPolicyGuardrails as AgentGatewayPolicyGuardrails,
    type AgentGatewayPolicyPipeline as AgentGatewayPolicyPipeline,
    type AgentGatewayPolicyResponse as AgentGatewayPolicyResponse,
    type PolicyListResponse as PolicyListResponse,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyRetrieveParams as PolicyRetrieveParams,
    type PolicyUpdateParams as PolicyUpdateParams,
  };
}
