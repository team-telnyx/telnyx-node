// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as V1API from './v1';
import { V1, V1MessagesParams, V1MessagesResponse } from './v1';

export class Anthropic extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

Anthropic.V1 = V1;

export declare namespace Anthropic {
  export {
    V1 as V1,
    type V1MessagesResponse as V1MessagesResponse,
    type V1MessagesParams as V1MessagesParams,
  };
}
