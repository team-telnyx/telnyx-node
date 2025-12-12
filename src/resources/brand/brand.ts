// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExternalVettingAPI from './external-vetting';
import { ExternalVetting } from './external-vetting';

export class Brand extends APIResource {
  externalVetting: ExternalVettingAPI.ExternalVetting = new ExternalVettingAPI.ExternalVetting(this._client);
}

Brand.ExternalVetting = ExternalVetting;

export declare namespace Brand {
  export { ExternalVetting as ExternalVetting };
}
