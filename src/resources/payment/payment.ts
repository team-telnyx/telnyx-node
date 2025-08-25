// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AutoRechargePrefsAPI from './auto-recharge-prefs';
import {
  AutoRechargePrefListResponse,
  AutoRechargePrefUpdateParams,
  AutoRechargePrefUpdateResponse,
  AutoRechargePrefs,
} from './auto-recharge-prefs';

export class Payment extends APIResource {
  autoRechargePrefs: AutoRechargePrefsAPI.AutoRechargePrefs = new AutoRechargePrefsAPI.AutoRechargePrefs(
    this._client,
  );
}

Payment.AutoRechargePrefs = AutoRechargePrefs;

export declare namespace Payment {
  export {
    AutoRechargePrefs as AutoRechargePrefs,
    type AutoRechargePrefUpdateResponse as AutoRechargePrefUpdateResponse,
    type AutoRechargePrefListResponse as AutoRechargePrefListResponse,
    type AutoRechargePrefUpdateParams as AutoRechargePrefUpdateParams,
  };
}
