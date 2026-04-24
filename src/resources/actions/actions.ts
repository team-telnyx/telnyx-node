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

export interface WirelessError {
  code: string;

  title: string;

  detail?: string;

  meta?: { [key: string]: unknown };

  source?: WirelessError.Source;
}

export namespace WirelessError {
  export interface Source {
    /**
     * Indicates which query parameter caused the error.
     */
    parameter?: string;

    /**
     * JSON pointer (RFC6901) to the offending entity.
     */
    pointer?: string;
  }
}

Actions.Purchase = Purchase;
Actions.Register = Register;

export declare namespace Actions {
  export { type WirelessError as WirelessError };

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
