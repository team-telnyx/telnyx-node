import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type DynamicEmergencyEndpointsDelId =
      paths['/dynamic_emergency_endpoints/{id}']['delete']['parameters']['path']['id'];

    type DynamicEmergencyEndpointsDelResponse =
      paths['/dynamic_emergency_endpoints/{id}']['delete']['responses']['200']['content']['application/json'];

    type DynamicEmergencyEndpointsCreateParams =
      paths['/dynamic_emergency_endpoints']['post']['requestBody']['content']['application/json'];

    type DynamicEmergencyEndpointsCreateResponse =
      paths['/dynamic_emergency_endpoints']['post']['responses']['201']['content']['application/json'];

    type DynamicEmergencyEndpointsRetrieveId =
      paths['/dynamic_emergency_endpoints/{id}']['get']['parameters']['path']['id'];

    type DynamicEmergencyEndpointsRetrieveParams =
      paths['/dynamic_emergency_endpoints/{id}']['get']['parameters']['query'];

    type DynamicEmergencyEndpointsRetrieveResponse =
      paths['/dynamic_emergency_endpoints/{id}']['get']['responses']['200']['content']['application/json'];

    type DynamicEmergencyEndpointsListParams =
      paths['/dynamic_emergency_endpoints']['get']['parameters']['query'];

    type DynamicEmergencyEndpointsListResponse =
      paths['/dynamic_emergency_endpoints']['get']['responses']['200']['content']['application/json'];

    class DynamicEmergencyEndpointsResource {
      del(
        id: DynamicEmergencyEndpointsDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DynamicEmergencyEndpointsDelResponse>>;

      create(
        params: DynamicEmergencyEndpointsCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.DynamicEmergencyEndpointsCreateResponse>
      >;

      retrieve(
        id: DynamicEmergencyEndpointsRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.DynamicEmergencyEndpointsRetrieveResponse>
      >;

      list(
        params?: DynamicEmergencyEndpointsListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DynamicEmergencyEndpointsListResponse>>;
    }
  }
}
