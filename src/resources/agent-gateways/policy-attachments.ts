// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Where an instance applies each policy.
 */
export class PolicyAttachments extends APIResource {
  /**
   * Lists where the instance applies each policy.
   *
   * @example
   * ```ts
   * const policyAttachments =
   *   await client.agentGateways.policyAttachments.list(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *   );
   * ```
   */
  list(instanceID: string, options?: RequestOptions): APIPromise<PolicyAttachmentListResponse> {
    return this._client.get(path`/agent_gateways/${instanceID}/policy_attachments`, options);
  }

  /**
   * Applies a policy to every request, or to the requests for the models named. It
   * applies from the next request on.
   *
   * @example
   * ```ts
   * const agentGatewayPolicyAttachmentResponse =
   *   await client.agentGateways.policyAttachments.create(
   *     '32ce035d-3165-4031-b1a7-a7c0c259590a',
   *     {
   *       policy: 'strict',
   *       models: ['GLM-5.3*'],
   *       priority: 10,
   *     },
   *   );
   * ```
   */
  create(
    instanceID: string,
    body: PolicyAttachmentCreateParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayPolicyAttachmentResponse> {
    return this._client.post(path`/agent_gateways/${instanceID}/policy_attachments`, { body, ...options });
  }

  /**
   * Removes an attachment and returns it as it was. The policy stays.
   *
   * @example
   * ```ts
   * const agentGatewayPolicyAttachmentResponse =
   *   await client.agentGateways.policyAttachments.delete(
   *     '3394712f-2ad5-428a-8a3d-7a08d4b2906d',
   *     { instance_id: '32ce035d-3165-4031-b1a7-a7c0c259590a' },
   *   );
   * ```
   */
  delete(
    attachmentID: string,
    params: PolicyAttachmentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<AgentGatewayPolicyAttachmentResponse> {
    const { instance_id } = params;
    return this._client.delete(
      path`/agent_gateways/${instance_id}/policy_attachments/${attachmentID}`,
      options,
    );
  }
}

/**
 * Where an instance applies a policy.
 */
export interface AgentGatewayPolicyAttachment {
  /**
   * The attachment's ID.
   */
  id: string;

  /**
   * When the attachment was created.
   */
  created_at: string | null;

  /**
   * `true` applies the policy only to the requests no other attachment matches.
   */
  default: boolean;

  /**
   * The models whose requests the policy applies to, by name. A name can use `*` as
   * a wildcard. Empty applies the policy to every request.
   */
  models: Array<string>;

  /**
   * The policy to apply, by name.
   */
  policy: string;

  /**
   * An attachment with a priority applies before the others.
   */
  priority: number | null;

  /**
   * When the attachment last changed.
   */
  updated_at: string | null;
}

export interface AgentGatewayPolicyAttachmentResponse {
  /**
   * Where an instance applies a policy.
   */
  data: AgentGatewayPolicyAttachment;
}

export interface PolicyAttachmentListResponse {
  data: Array<AgentGatewayPolicyAttachment>;
}

export interface PolicyAttachmentCreateParams {
  /**
   * The policy to apply, by name.
   */
  policy: string;

  /**
   * `true` applies the policy only to the requests no other attachment matches.
   */
  default?: boolean;

  /**
   * The models whose requests the policy applies to, by name. A name can use `*` as
   * a wildcard. Empty applies the policy to every request.
   */
  models?: Array<string>;

  /**
   * An attachment with a priority applies before the others.
   */
  priority?: number | null;
}

export interface PolicyAttachmentDeleteParams {
  /**
   * The Agent Gateway's `id`.
   */
  instance_id: string;
}

export declare namespace PolicyAttachments {
  export {
    type AgentGatewayPolicyAttachment as AgentGatewayPolicyAttachment,
    type AgentGatewayPolicyAttachmentResponse as AgentGatewayPolicyAttachmentResponse,
    type PolicyAttachmentListResponse as PolicyAttachmentListResponse,
    type PolicyAttachmentCreateParams as PolicyAttachmentCreateParams,
    type PolicyAttachmentDeleteParams as PolicyAttachmentDeleteParams,
  };
}
