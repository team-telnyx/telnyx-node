// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents';
import { Agents, RcsAgent, RcsAgentResponse } from './agents';

export class Rcs extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
}

Rcs.Agents = Agents;

export declare namespace Rcs {
  export { Agents as Agents, type RcsAgent as RcsAgent, type RcsAgentResponse as RcsAgentResponse };
}
