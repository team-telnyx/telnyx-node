import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type BillingGroupsRetrieveId =
      paths['/billing_groups/{id}']['get']['parameters']['path']['id'];

    type BillingGroupsRetrieveParams =
      paths['/billing_groups/{id}']['get']['parameters']['query'];

    type BillingGroupsRetrieveResponse =
      paths['/billing_groups/{id}']['get']['responses']['200']['content']['application/json'];

    type BillingGroupsListParams =
      paths['/billing_groups']['get']['parameters']['query'];

    type BillingGroupsListResponse =
      paths['/billing_groups']['get']['responses']['200']['content']['application/json'];

    type BillingGroupsCreateParams =
      paths['/billing_groups']['post']['requestBody']['content']['application/json'];

    type BillingGroupsCreateResponse =
      paths['/billing_groups']['post']['responses']['200']['content']['application/json'];

    type BillingGroupsDelId =
      paths['/billing_groups/{id}']['delete']['parameters']['path']['id'];

    type BillingGroupsDelParams =
      paths['/billing_groups/{id}']['delete']['parameters']['query'];

    type BillingGroupsDelResponse =
      paths['/billing_groups/{id}']['delete']['responses']['200']['content']['application/json'];

    type BillingGroupsUpdateId =
      paths['/billing_groups/{id}']['patch']['parameters']['path']['id'];

    type BillingGroupsUpdateParams =
      paths['/billing_groups/{id}']['patch']['requestBody']['content']['application/json'];

    type BillingGroupsUpdateResponse =
      paths['/billing_groups/{id}']['patch']['responses']['200']['content']['application/json'];

    class BillingGroupsResource {
      retrieve(
        id: BillingGroupsRetrieveId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BillingGroupsRetrieveResponse>>;

      list(
        params?: BillingGroupsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BillingGroupsListResponse>>;

      create(
        params: BillingGroupsCreateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BillingGroupsCreateResponse>>;

      del(
        id: BillingGroupsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BillingGroupsDelResponse>>;

      update(
        id: BillingGroupsUpdateId,
        params: BillingGroupsUpdateParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.BillingGroupsUpdateResponse>>;
    }
  }
}
