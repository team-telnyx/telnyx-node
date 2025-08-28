// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PurchaseAPI from './purchase';
import { Purchase, PurchaseCreateParams, PurchaseCreateResponse } from './purchase';
import * as RegisterAPI from './register';
import { Register, RegisterCreateParams, RegisterCreateResponse } from './register';

export class Actions extends APIResource {
  purchase: PurchaseAPI.Purchase = new PurchaseAPI.Purchase(this._client);
  register: RegisterAPI.Register = new RegisterAPI.Register(this._client);
}

Actions.Purchase = Purchase;
Actions.Register = Register;

export declare namespace Actions {
  export {
    Purchase as Purchase,
    type PurchaseCreateResponse as PurchaseCreateResponse,
    type PurchaseCreateParams as PurchaseCreateParams,
  };

  export {
    Register as Register,
    type RegisterCreateResponse as RegisterCreateResponse,
    type RegisterCreateParams as RegisterCreateParams,
  };
}
