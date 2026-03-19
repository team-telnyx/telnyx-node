// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CreditAccountAPI from './credit-account';
import {
  CreditAccount,
  CreditAccountCreatePaymentQuoteParams,
  CreditAccountCreatePaymentQuoteResponse,
  CreditAccountSettlePaymentParams,
  CreditAccountSettlePaymentResponse,
} from './credit-account';

export class X402 extends APIResource {
  creditAccount: CreditAccountAPI.CreditAccount = new CreditAccountAPI.CreditAccount(this._client);
}

X402.CreditAccount = CreditAccount;

export declare namespace X402 {
  export {
    CreditAccount as CreditAccount,
    type CreditAccountCreatePaymentQuoteResponse as CreditAccountCreatePaymentQuoteResponse,
    type CreditAccountSettlePaymentResponse as CreditAccountSettlePaymentResponse,
    type CreditAccountCreatePaymentQuoteParams as CreditAccountCreatePaymentQuoteParams,
    type CreditAccountSettlePaymentParams as CreditAccountSettlePaymentParams,
  };
}
