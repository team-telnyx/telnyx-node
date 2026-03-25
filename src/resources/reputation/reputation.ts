// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NumbersAPI from './numbers';
import {
  NumberListParams,
  NumberListResponse,
  NumberListResponsesDefaultFlatPagination,
  NumberRetrieveParams,
  NumberRetrieveResponse,
  Numbers,
} from './numbers';

export class Reputation extends APIResource {
  numbers: NumbersAPI.Numbers = new NumbersAPI.Numbers(this._client);
}

Reputation.Numbers = Numbers;

export declare namespace Reputation {
  export {
    Numbers as Numbers,
    type NumberRetrieveResponse as NumberRetrieveResponse,
    type NumberListResponse as NumberListResponse,
    type NumberListResponsesDefaultFlatPagination as NumberListResponsesDefaultFlatPagination,
    type NumberRetrieveParams as NumberRetrieveParams,
    type NumberListParams as NumberListParams,
  };
}
