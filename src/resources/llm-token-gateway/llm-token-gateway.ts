// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UsageAPI from './usage';
import { Usage, UsageRetrieveSummaryParams, UsageRetrieveSummaryResponse } from './usage';

export class LlmTokenGateway extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
}

LlmTokenGateway.Usage = Usage;

export declare namespace LlmTokenGateway {
  export {
    Usage as Usage,
    type UsageRetrieveSummaryResponse as UsageRetrieveSummaryResponse,
    type UsageRetrieveSummaryParams as UsageRetrieveSummaryParams,
  };
}
