// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as VerificationAPI from './verification/verification';
import { Verification } from './verification/verification';

export class MessagingTollfree extends APIResource {
  verification: VerificationAPI.Verification = new VerificationAPI.Verification(this._client);
}

MessagingTollfree.Verification = Verification;

export declare namespace MessagingTollfree {
  export { Verification as Verification };
}
