// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SpendAPI from './spend';
import {
  Spend,
  SpendGroupBy,
  SpendRetrieveEventsParams,
  SpendRetrieveEventsResponse,
  SpendRetrieveSummaryParams,
  SpendRetrieveSummaryResponse,
} from './spend';
import * as TokenGroupsAPI from './token-groups';
import {
  AIGatewayResourcesPageMeta,
  BudgetDuration,
  TokenGroup,
  TokenGroupCreateParams,
  TokenGroupDeleteParams,
  TokenGroupListParams,
  TokenGroupResponse,
  TokenGroupUpdateParams,
  TokenGroups,
  TokenGroupsDefaultFlatPagination,
} from './token-groups';
import * as TokenKeysAPI from './token-keys';
import {
  TokenKey,
  TokenKeyCreateParams,
  TokenKeyDeleteParams,
  TokenKeyListParams,
  TokenKeyResponse,
  TokenKeyUpdateParams,
  TokenKeys,
  TokenKeysDefaultFlatPagination,
} from './token-keys';
import * as UsageAPI from './usage';
import {
  GuardrailFinding,
  Usage,
  UsageRetrieveExportParams,
  UsageRetrieveExportResponse,
  UsageRetrieveSummaryParams,
  UsageRetrieveSummaryResponse,
} from './usage';

export class LlmTokenGateway extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  spend: SpendAPI.Spend = new SpendAPI.Spend(this._client);
  tokenGroups: TokenGroupsAPI.TokenGroups = new TokenGroupsAPI.TokenGroups(this._client);
  tokenKeys: TokenKeysAPI.TokenKeys = new TokenKeysAPI.TokenKeys(this._client);
}

LlmTokenGateway.Usage = Usage;
LlmTokenGateway.Spend = Spend;
LlmTokenGateway.TokenGroups = TokenGroups;
LlmTokenGateway.TokenKeys = TokenKeys;

export declare namespace LlmTokenGateway {
  export {
    Usage as Usage,
    type GuardrailFinding as GuardrailFinding,
    type UsageRetrieveExportResponse as UsageRetrieveExportResponse,
    type UsageRetrieveSummaryResponse as UsageRetrieveSummaryResponse,
    type UsageRetrieveSummaryParams as UsageRetrieveSummaryParams,
    type UsageRetrieveExportParams as UsageRetrieveExportParams,
  };

  export {
    Spend as Spend,
    type SpendGroupBy as SpendGroupBy,
    type SpendRetrieveEventsResponse as SpendRetrieveEventsResponse,
    type SpendRetrieveSummaryResponse as SpendRetrieveSummaryResponse,
    type SpendRetrieveEventsParams as SpendRetrieveEventsParams,
    type SpendRetrieveSummaryParams as SpendRetrieveSummaryParams,
  };

  export {
    TokenGroups as TokenGroups,
    type AIGatewayResourcesPageMeta as AIGatewayResourcesPageMeta,
    type BudgetDuration as BudgetDuration,
    type TokenGroup as TokenGroup,
    type TokenGroupResponse as TokenGroupResponse,
    type TokenGroupsDefaultFlatPagination as TokenGroupsDefaultFlatPagination,
    type TokenGroupListParams as TokenGroupListParams,
    type TokenGroupCreateParams as TokenGroupCreateParams,
    type TokenGroupDeleteParams as TokenGroupDeleteParams,
    type TokenGroupUpdateParams as TokenGroupUpdateParams,
  };

  export {
    TokenKeys as TokenKeys,
    type TokenKey as TokenKey,
    type TokenKeyResponse as TokenKeyResponse,
    type TokenKeysDefaultFlatPagination as TokenKeysDefaultFlatPagination,
    type TokenKeyListParams as TokenKeyListParams,
    type TokenKeyCreateParams as TokenKeyCreateParams,
    type TokenKeyDeleteParams as TokenKeyDeleteParams,
    type TokenKeyUpdateParams as TokenKeyUpdateParams,
  };
}
