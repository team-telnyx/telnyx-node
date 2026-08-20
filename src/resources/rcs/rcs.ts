// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BrandsAPI from './brands';
import {
  BrandAddress,
  BrandContact,
  BrandCreateParams,
  BrandLegalEntityType,
  BrandListResponse,
  BrandOrganizationType,
  BrandResponse,
  BrandUpdateParams,
  Brands,
  EinBrandIdentifier,
  StockSymbolBrandIdentifier,
} from './brands';
import * as AgentsAPI from './agents/agents';
import {
  AgentCampaignConfiguration,
  AgentConfiguration,
  AgentConsentConfiguration,
  AgentCreateParams,
  AgentEmailContact,
  AgentInteraction,
  AgentLaunchParams,
  AgentListParams,
  AgentListResponse,
  AgentPhoneContact,
  AgentResponse,
  AgentRetrieveCarrierApprovalsResponse,
  AgentSubmissionStatus,
  AgentTestingConfiguration,
  AgentUpdateParams,
  AgentUseCase,
  AgentWebsiteContact,
  Agents,
  CapabilitiesResponse,
  CarrierApprovalResponse,
  RcsAgent,
  RcsAgentResponse,
} from './agents/agents';

export class Rcs extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  brands: BrandsAPI.Brands = new BrandsAPI.Brands(this._client);
}

Rcs.Agents = Agents;
Rcs.Brands = Brands;

export declare namespace Rcs {
  export {
    Agents as Agents,
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
    Brands as Brands,
    type BrandAddress as BrandAddress,
    type BrandContact as BrandContact,
    type BrandLegalEntityType as BrandLegalEntityType,
    type BrandOrganizationType as BrandOrganizationType,
    type BrandResponse as BrandResponse,
    type EinBrandIdentifier as EinBrandIdentifier,
    type StockSymbolBrandIdentifier as StockSymbolBrandIdentifier,
    type BrandListResponse as BrandListResponse,
    type BrandCreateParams as BrandCreateParams,
    type BrandUpdateParams as BrandUpdateParams,
  };
}
