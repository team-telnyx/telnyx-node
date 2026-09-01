// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubNumberOrdersAPI from './sub-number-orders';
import {
  SubNumberOrderRetrieveParams,
  SubNumberOrderRetrieveResponse,
  SubNumberOrderUpdateParams,
  SubNumberOrderUpdateResponse,
  SubNumberOrders,
} from './sub-number-orders';

export class ExternalRequirements extends APIResource {
  subNumberOrders: SubNumberOrdersAPI.SubNumberOrders = new SubNumberOrdersAPI.SubNumberOrders(this._client);
}

ExternalRequirements.SubNumberOrders = SubNumberOrders;

export declare namespace ExternalRequirements {
  export {
    SubNumberOrders as SubNumberOrders,
    type SubNumberOrderRetrieveResponse as SubNumberOrderRetrieveResponse,
    type SubNumberOrderUpdateResponse as SubNumberOrderUpdateResponse,
    type SubNumberOrderRetrieveParams as SubNumberOrderRetrieveParams,
    type SubNumberOrderUpdateParams as SubNumberOrderUpdateParams,
  };
}
