// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DedicatedIPsAPI from './dedicated-ips/dedicated-ips';
import {
  DedicatedIP,
  DedicatedIPCreateParams,
  DedicatedIPDeleteParams,
  DedicatedIPListParams,
  DedicatedIPListResponse,
  DedicatedIPShowResponse,
  DedicatedIPUpdateParams,
  DedicatedIPs,
} from './dedicated-ips/dedicated-ips';
import * as IPPoolsAPI from './ip-pools/ip-pools';
import {
  IPPool,
  IPPoolCreateParams,
  IPPoolDeleteParams,
  IPPoolListResponse,
  IPPoolShowResponse,
  IPPoolUpdateParams,
  IPPools,
} from './ip-pools/ip-pools';

export class Email extends APIResource {
  dedicatedIPs: DedicatedIPsAPI.DedicatedIPs = new DedicatedIPsAPI.DedicatedIPs(this._client);
  ipPools: IPPoolsAPI.IPPools = new IPPoolsAPI.IPPools(this._client);
}

Email.DedicatedIPs = DedicatedIPs;
Email.IPPools = IPPools;

export declare namespace Email {
  export {
    DedicatedIPs as DedicatedIPs,
    type DedicatedIP as DedicatedIP,
    type DedicatedIPShowResponse as DedicatedIPShowResponse,
    type DedicatedIPListResponse as DedicatedIPListResponse,
    type DedicatedIPListParams as DedicatedIPListParams,
    type DedicatedIPCreateParams as DedicatedIPCreateParams,
    type DedicatedIPDeleteParams as DedicatedIPDeleteParams,
    type DedicatedIPUpdateParams as DedicatedIPUpdateParams,
  };

  export {
    IPPools as IPPools,
    type IPPool as IPPool,
    type IPPoolShowResponse as IPPoolShowResponse,
    type IPPoolListResponse as IPPoolListResponse,
    type IPPoolCreateParams as IPPoolCreateParams,
    type IPPoolDeleteParams as IPPoolDeleteParams,
    type IPPoolUpdateParams as IPPoolUpdateParams,
  };
}
