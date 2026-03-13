// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CreditAccountAPI from './credit-account';
import {
  CreditAccount,
  CreditAccountCreateQuoteParams,
  CreditAccountCreateQuoteResponse,
  CreditAccountSettleParams,
  CreditAccountSettleResponse,
} from './credit-account';

export class X402 extends APIResource {
  creditAccount: CreditAccountAPI.CreditAccount = new CreditAccountAPI.CreditAccount(this._client);
}

X402.CreditAccount = CreditAccount;

export declare namespace X402 {
  export {
    CreditAccount as CreditAccount,
    type CreditAccountCreateQuoteResponse as CreditAccountCreateQuoteResponse,
    type CreditAccountSettleResponse as CreditAccountSettleResponse,
    type CreditAccountCreateQuoteParams as CreditAccountCreateQuoteParams,
    type CreditAccountSettleParams as CreditAccountSettleParams,
  };
}
