// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OsrAPI from './osr';
import { Osr } from './osr';
import * as UsecaseAPI from './usecase';
import { Usecase } from './usecase';

export class Campaign extends APIResource {
  usecase: UsecaseAPI.Usecase = new UsecaseAPI.Usecase(this._client);
  osr: OsrAPI.Osr = new OsrAPI.Osr(this._client);
}

Campaign.Usecase = Usecase;
Campaign.Osr = Osr;

export declare namespace Campaign {
  export { Usecase as Usecase };

  export { Osr as Osr };
}
