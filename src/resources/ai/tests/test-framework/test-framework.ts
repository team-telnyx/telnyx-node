// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as V1API from './v1/v1';
import { V1, V1RetrievePersonalitiesResponse } from './v1/v1';

export class TestFramework extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

TestFramework.V1 = V1;

export declare namespace TestFramework {
  export { V1 as V1, type V1RetrievePersonalitiesResponse as V1RetrievePersonalitiesResponse };
}
