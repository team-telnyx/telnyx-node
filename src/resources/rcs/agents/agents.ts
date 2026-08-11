// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './agents';
import * as TestDevicesAPI from './test-devices';
import {
  TestDeviceCreateParams,
  TestDeviceDeleteParams,
  TestDeviceListResponse,
  TestDeviceResponse,
  TestDevices,
} from './test-devices';
import { APIPromise } from '../../../core/api-promise';
import { DefaultFlatPagination } from '../../../core/pagination';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

/**
 * Manage RCS agent registration, testing, verification, and launch.
 */
export class Agents extends APIResource {
  testDevices: TestDevicesAPI.TestDevices = new TestDevicesAPI.TestDevices(this._client);

  /**
   * Lists RCS agents owned by the authenticated organization, optionally filtered by
   * brand.
   *
   * @example
   * ```ts
   * const agentResponses = await client.rcs.agents.list();
   * ```
   */
  list(
    query: AgentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AgentListResponse> {
    return this._client.get('/rcs/agents', { query, ...options });
  }

  /**
   * Creates an editable RCS agent draft under a brand. The `Idempotency-Key` is
   * scoped to the authenticated organization. Reusing the key with the same request
   * returns the original agent, while reusing it with a different request returns a
   * conflict.
   *
   * @example
   * ```ts
   * const agentResponse = await client.rcs.agents.create({
   *   brand_id: '11111111-1111-4111-8111-111111111111',
   *   configuration: {
   *     basics: {
   *       email: {
   *         address: 'support@example.com',
   *         label: 'Support',
   *       },
   *     },
   *   },
   *   display_name: 'Acme Order Updates',
   *   use_case: 'TRANSACTIONAL',
   *   'Idempotency-Key': 'Idempotency-Key',
   * });
   * ```
   */
  create(params: AgentCreateParams, options?: RequestOptions): APIPromise<AgentResponse> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return this._client.post('/rcs/agents', {
      body,
      ...options,
      headers: buildHeaders([{ 'Idempotency-Key': idempotencyKey }, options?.headers]),
    });
  }

  /**
   * Retrieves an RCS agent, section statuses, test devices, carrier approvals, and
   * provider capabilities.
   *
   * @example
   * ```ts
   * const agentResponse = await client.rcs.agents.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.get(path`/rcs/agents/${id}`, options);
  }

  /**
   * Updates one or more fields on an agent while its status is `CREATED`. Submitted
   * agents cannot be changed through this endpoint.
   *
   * @example
   * ```ts
   * const agentResponse = await client.rcs.agents.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(id: string, body: AgentUpdateParams, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.patch(path`/rcs/agents/${id}`, { body, ...options });
  }

  /**
   * Lists carrier approval records for an RCS agent. The provider may expose
   * per-carrier, hub-level, or bot-level approval status.
   *
   * @example
   * ```ts
   * const carrierApprovalResponses =
   *   await client.rcs.agents.retrieveCarrierApprovals(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  retrieveCarrierApprovals(
    id: string,
    options?: RequestOptions,
  ): APIPromise<AgentRetrieveCarrierApprovalsResponse> {
    return this._client.get(path`/rcs/agents/${id}/carrier_approvals`, options);
  }

  /**
   * Adds the campaign and testing configuration, then starts asynchronous carrier
   * launch. Agent basics must already be submitted. Repeating a launch that is
   * already in progress returns the current agent without creating new work.
   *
   * @example
   * ```ts
   * const agentResponse = await client.rcs.agents.launch(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     campaign: {
   *       company_overview: 'Acme provides online retail services.',
   *       agent_overview: 'The agent sends order confirmations and delivery updates.',
   *       consent_settings: { ... },
   *       interactions: [
   *         { ... },
   *       ],
   *       message_examples: [
   *         'Your Acme order is confirmed.',
   *         'Your Acme order has shipped.',
   *         'Your Acme order was delivered.',
   *       ],
   *     },
   *     testing: { test_url: 'https://www.example.com/rcs/test-video' },
   *   },
   * );
   * ```
   */
  launch(id: string, body: AgentLaunchParams, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.post(path`/rcs/agents/${id}/launch`, { body, ...options });
  }

  /**
   * Starts asynchronous provider provisioning and submits the agent's basic
   * configuration. The brand must be `VERIFIED`. Repeating this request for an
   * in-progress agent returns its current state without creating new work.
   *
   * @example
   * ```ts
   * const agentResponse = await client.rcs.agents.submit(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  submit(id: string, options?: RequestOptions): APIPromise<AgentResponse> {
    return this._client.post(path`/rcs/agents/${id}/submit`, options);
  }
}

export type RcsAgentsDefaultFlatPagination = DefaultFlatPagination<RcsAgent>;

export interface AgentCampaignConfiguration {
  company_overview: string;

  additional_information?: string | null;

  agent_overview?: string | null;

  consent_settings?: AgentConsentConfiguration | null;

  interactions?: Array<AgentInteraction>;

  message_examples?: Array<string>;
}

export interface AgentConfiguration {
  /**
   * Basic agent identity and contact information. At least one complete phone,
   * website, or email contact is required.
   */
  basics: AgentConfiguration.UnionMember0 | AgentConfiguration.UnionMember1 | AgentConfiguration.UnionMember2;

  campaign?: AgentCampaignConfiguration | null;

  testing?: AgentTestingConfiguration | null;
}

export namespace AgentConfiguration {
  export interface UnionMember0 {
    phone_number: AgentsAPI.AgentPhoneContact;

    brand_color?: string;

    description?: string;

    email?: AgentsAPI.AgentEmailContact | null;

    hero_url?: string;

    logo_url?: string;

    privacy_policy_url?: string;

    terms_and_conditions_url?: string;

    website?: AgentsAPI.AgentWebsiteContact | null;
  }

  export interface UnionMember1 {
    website: AgentsAPI.AgentWebsiteContact;

    brand_color?: string;

    description?: string;

    email?: AgentsAPI.AgentEmailContact | null;

    hero_url?: string;

    logo_url?: string;

    phone_number?: AgentsAPI.AgentPhoneContact | null;

    privacy_policy_url?: string;

    terms_and_conditions_url?: string;
  }

  export interface UnionMember2 {
    email: AgentsAPI.AgentEmailContact;

    brand_color?: string;

    description?: string;

    hero_url?: string;

    logo_url?: string;

    phone_number?: AgentsAPI.AgentPhoneContact | null;

    privacy_policy_url?: string;

    terms_and_conditions_url?: string;

    website?: AgentsAPI.AgentWebsiteContact | null;
  }
}

export interface AgentConsentConfiguration {
  call_to_action: string;

  double_opt_in: boolean;

  help_response: string;

  opt_in_message: string;

  opt_in_methods: Array<AgentConsentConfiguration.OptInMethod>;

  opt_out_response: string;

  /**
   * Required when an opt-in method is `WEBSITE` or `MOBILE_APP`.
   */
  call_to_action_media_url?: string | null;

  /**
   * Required when an opt-in method is `WEBSITE`.
   */
  call_to_action_url?: string | null;

  /**
   * Required when double_opt_in is true.
   */
  double_opt_in_message?: string | null;
}

export namespace AgentConsentConfiguration {
  export interface OptInMethod {
    method_type: 'SMS' | 'WEBSITE' | 'MOBILE_APP' | 'QR_CODE' | 'SALE_POINT' | 'OTHER';

    /**
     * Required when method_type is `OTHER`.
     */
    description?: string | null;
  }
}

export interface AgentEmailContact {
  address: string;

  label: string;
}

export interface AgentInteraction {
  interaction_type:
    | 'TRANSACTIONAL_UPDATES'
    | 'CUSTOMER_SUPPORT'
    | 'LOYALTY_OR_REWARD'
    | 'MARKETING_OR_PROMOTIONAL'
    | 'ACCOUNT_ALERTS'
    | 'TWO_WAY_CONVERSATION'
    | 'OTHER';

  /**
   * Required when interaction_type is `OTHER`.
   */
  description?: string | null;
}

export interface AgentPhoneContact {
  label: string;

  number: string;
}

export interface AgentResponse {
  agent_id: string;

  basics_status: AgentSubmissionStatus | null;

  billing_category: 'NON_CONVERSATIONAL' | 'CONVERSATIONAL' | null;

  brand_id: string;

  campaign_status: AgentSubmissionStatus | null;

  capabilities: CapabilitiesResponse;

  carrier_approvals: Array<CarrierApprovalResponse>;

  configuration: AgentConfiguration;

  display_name: string;

  hosting_region: string | null;

  profile_id: string | null;

  status:
    | 'CREATED'
    | 'SUBMITTED'
    | 'VERIFYING'
    | 'VERIFIED'
    | 'LAUNCHING'
    | 'LAUNCHED'
    | 'LIVE'
    | 'REJECTED'
    | 'FAILED';

  test_devices: Array<TestDevicesAPI.TestDeviceResponse>;

  testing_status: AgentSubmissionStatus | null;

  use_case: AgentUseCase;
}

export type AgentSubmissionStatus = 'SUBMITTED' | 'APPROVED' | 'REJECTED';

export interface AgentTestingConfiguration {
  /**
   * A publicly accessible test video or evidence URL.
   */
  test_url: string;

  additional_information?: string | null;

  message_id?: string | null;
}

export type AgentUseCase = 'MULTI_USE' | 'PROMOTIONAL' | 'TRANSACTIONAL' | 'OTP';

export interface AgentWebsiteContact {
  label: string;

  url: string;
}

export interface CapabilitiesResponse {
  brand_entity: boolean;

  brand_verification: boolean;

  campaigns: boolean;

  distinct_launch_phase: boolean;

  invite_test_devices: boolean;

  per_carrier_approval: boolean;

  submission_sections: boolean;

  templates: boolean;

  vendor_webhooks: boolean;
}

export interface CarrierApprovalResponse {
  approval_id: string;

  approved_at: string | null;

  carrier: string | null;

  rejected_reason: string | null;

  scope_type: 'carrier' | 'hub' | 'bot';

  status: 'PENDING' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';

  submitted_at: string | null;
}

export interface RcsAgent {
  /**
   * RCS Agent ID
   */
  agent_id?: string;

  /**
   * Human readable agent name
   */
  agent_name?: string;

  /**
   * Date and time when the resource was created
   */
  created_at?: string;

  /**
   * Specifies whether the agent is enabled
   */
  enabled?: boolean;

  /**
   * Messaging profile ID associated with the RCS Agent
   */
  profile_id?: string | null;

  /**
   * Date and time when the resource was updated
   */
  updated_at?: string;

  /**
   * User ID associated with the RCS Agent
   */
  user_id?: string;

  /**
   * Failover URL to receive RCS events
   */
  webhook_failover_url?: string | null;

  /**
   * URL to receive RCS events
   */
  webhook_url?: string | null;
}

export interface RcsAgentResponse {
  data?: RcsAgent;
}

export type AgentListResponse = Array<AgentResponse>;

export type AgentRetrieveCarrierApprovalsResponse = Array<CarrierApprovalResponse>;

export interface AgentListParams {
  /**
   * Only return agents belonging to this brand.
   */
  brand_id?: string;
}

export interface AgentCreateParams {
  /**
   * Body param
   */
  brand_id: string;

  /**
   * Body param
   */
  configuration: AgentConfiguration;

  /**
   * Body param
   */
  display_name: string;

  /**
   * Body param
   */
  use_case: AgentUseCase;

  /**
   * Header param: A caller-generated key containing letters, numbers, underscores,
   * or hyphens. Reuse the same key and request body when retrying the same logical
   * agent creation.
   */
  'Idempotency-Key': string;

  /**
   * Body param
   */
  hosting_region?: string | null;

  /**
   * Body param: A Messaging Profile owned by the authenticated organization. When
   * omitted, the agent inherits the brand profile.
   */
  profile_id?: string | null;
}

export interface AgentUpdateParams {
  configuration?: AgentConfiguration;

  display_name?: string;

  hosting_region?: string;

  profile_id?: string;

  use_case?: AgentUseCase;
}

export interface AgentLaunchParams {
  campaign: AgentLaunchParams.Campaign;

  testing: AgentTestingConfiguration;
}

export namespace AgentLaunchParams {
  export interface Campaign
    extends Omit<AgentsAPI.AgentCampaignConfiguration, 'agent_overview' | 'consent_settings'> {
    agent_overview: string;

    consent_settings: AgentsAPI.AgentConsentConfiguration;

    interactions: Array<AgentsAPI.AgentInteraction>;

    message_examples: Array<string>;
  }
}

Agents.TestDevices = TestDevices;

export declare namespace Agents {
  export {
    type AgentCampaignConfiguration as AgentCampaignConfiguration,
    type AgentConfiguration as AgentConfiguration,
    type AgentConsentConfiguration as AgentConsentConfiguration,
    type AgentEmailContact as AgentEmailContact,
    type AgentInteraction as AgentInteraction,
    type AgentPhoneContact as AgentPhoneContact,
    type AgentResponse as AgentResponse,
    type AgentSubmissionStatus as AgentSubmissionStatus,
    type AgentTestingConfiguration as AgentTestingConfiguration,
    type AgentUseCase as AgentUseCase,
    type AgentWebsiteContact as AgentWebsiteContact,
    type CapabilitiesResponse as CapabilitiesResponse,
    type CarrierApprovalResponse as CarrierApprovalResponse,
    type RcsAgent as RcsAgent,
    type RcsAgentResponse as RcsAgentResponse,
    type AgentListResponse as AgentListResponse,
    type AgentRetrieveCarrierApprovalsResponse as AgentRetrieveCarrierApprovalsResponse,
    type AgentListParams as AgentListParams,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentLaunchParams as AgentLaunchParams,
  };

  export {
    TestDevices as TestDevices,
    type TestDeviceResponse as TestDeviceResponse,
    type TestDeviceListResponse as TestDeviceListResponse,
    type TestDeviceCreateParams as TestDeviceCreateParams,
    type TestDeviceDeleteParams as TestDeviceDeleteParams,
  };
}
