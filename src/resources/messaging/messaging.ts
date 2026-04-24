// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RcsAPI from './rcs/rcs';
import {
  RcInviteTestNumberParams,
  RcInviteTestNumberResponse,
  RcListBulkCapabilitiesParams,
  RcListBulkCapabilitiesResponse,
  RcRetrieveCapabilitiesParams,
  RcRetrieveCapabilitiesResponse,
  Rcs,
  RcsCapabilities,
} from './rcs/rcs';

export class Messaging extends APIResource {
  rcs: RcsAPI.Rcs = new RcsAPI.Rcs(this._client);
}

Messaging.Rcs = Rcs;

export declare namespace Messaging {
  export {
    Rcs as Rcs,
    type RcsCapabilities as RcsCapabilities,
    type RcInviteTestNumberResponse as RcInviteTestNumberResponse,
    type RcListBulkCapabilitiesResponse as RcListBulkCapabilitiesResponse,
    type RcRetrieveCapabilitiesResponse as RcRetrieveCapabilitiesResponse,
    type RcInviteTestNumberParams as RcInviteTestNumberParams,
    type RcListBulkCapabilitiesParams as RcListBulkCapabilitiesParams,
    type RcRetrieveCapabilitiesParams as RcRetrieveCapabilitiesParams,
  };
}
