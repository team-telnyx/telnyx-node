// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { Actions } from './actions';

export class TtsIntegrations extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

TtsIntegrations.Actions = Actions;

export declare namespace TtsIntegrations {
  export { Actions as Actions };
}
