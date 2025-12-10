// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SMSOtpAPI from './sms-otp';
import { SMSOtp } from './sms-otp';

export class Brand extends APIResource {
  smsOtp: SMSOtpAPI.SMSOtp = new SMSOtpAPI.SMSOtp(this._client);
}

Brand.SMSOtp = SMSOtp;

export declare namespace Brand {
  export { SMSOtp as SMSOtp };
}
