// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BrandAPI from './brand';
import { Brand } from './brand';

export class CampaignBuilder extends APIResource {
  brand: BrandAPI.Brand = new BrandAPI.Brand(this._client);
}

CampaignBuilder.Brand = Brand;

export declare namespace CampaignBuilder {
  export { Brand as Brand };
}
