// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BrandAPI from './brand/brand';
import { Brand } from './brand/brand';

export class Public extends APIResource {
  brand: BrandAPI.Brand = new BrandAPI.Brand(this._client);
}

Public.Brand = Brand;

export declare namespace Public {
  export { Brand as Brand };
}
