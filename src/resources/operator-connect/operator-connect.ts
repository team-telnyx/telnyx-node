// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActionsAPI from './actions';
import { ActionRefreshResponse, Actions } from './actions';

export class OperatorConnect extends APIResource {
  actions: ActionsAPI.Actions = new ActionsAPI.Actions(this._client);
}

OperatorConnect.Actions = Actions;

export declare namespace OperatorConnect {
  export { Actions as Actions, type ActionRefreshResponse as ActionRefreshResponse };
}
