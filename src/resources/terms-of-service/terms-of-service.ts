// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NumberReputationAPI from './number-reputation';
import { NumberReputation } from './number-reputation';

export class TermsOfService extends APIResource {
  numberReputation: NumberReputationAPI.NumberReputation = new NumberReputationAPI.NumberReputation(
    this._client,
  );
}

TermsOfService.NumberReputation = NumberReputation;

export declare namespace TermsOfService {
  export { NumberReputation as NumberReputation };
}
