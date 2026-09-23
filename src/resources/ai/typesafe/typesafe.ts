// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V1API from './v1';
import { V1, V1SystemoneParams, V1SystemoneResponse } from './v1';

export class Typesafe extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Typesafe.V1 = V1;

export declare namespace Typesafe {
  export {
    V1 as V1,
    type V1SystemoneResponse as V1SystemoneResponse,
    type V1SystemoneParams as V1SystemoneParams,
  };
}
