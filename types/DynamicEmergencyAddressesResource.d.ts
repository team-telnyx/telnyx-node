import {paths} from './TelnyxAPI.js';

declare module 'telnyx' {
  namespace Telnyx {
    type DynamicEmergencyAddressesDelId =
      paths['/dynamic_emergency_addresses/{id}']['delete']['parameters']['path']['id'];

    type DynamicEmergencyAddressesDelParams =
      paths['/dynamic_emergency_addresses/{id}']['delete']['parameters']['query'];

    type DynamicEmergencyAddressesDelResponse =
      paths['/dynamic_emergency_addresses/{id}']['delete']['responses']['200']['content']['application/json'];

    type DynamicEmergencyAddressesCreateParams =
      paths['/dynamic_emergency_addresses']['post']['requestBody']['content']['application/json'];

    type DynamicEmergencyAddressesCreateResponse =
      paths['/dynamic_emergency_addresses']['post']['responses']['201']['content']['application/json'];

    type DynamicEmergencyAddressesRetrieveId =
      paths['/dynamic_emergency_addresses/{id}']['get']['parameters']['path']['id'];

    type DynamicEmergencyAddressesRetrieveParams =
      paths['/dynamic_emergency_addresses/{id}']['get']['parameters']['query'];

    type DynamicEmergencyAddressesRetrieveResponse =
      paths['/dynamic_emergency_addresses/{id}']['get']['responses']['200']['content']['application/json'];

    type DynamicEmergencyAddressesListParams =
      paths['/dynamic_emergency_addresses']['get']['parameters']['query'];

    type DynamicEmergencyAddressesListResponse =
      paths['/dynamic_emergency_addresses']['get']['responses']['200']['content']['application/json'];

    class DynamicEmergencyAddressesResource {
      del(
        id: DynamicEmergencyAddressesDelId,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DynamicEmergencyAddressesDelResponse>>;

      create(
        params: DynamicEmergencyAddressesCreateParams,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.DynamicEmergencyAddressesCreateResponse>
      >;

      retrieve(
        id: DynamicEmergencyAddressesRetrieveId,
        options?: RequestOptions,
      ): Promise<
        Telnyx.Response<Telnyx.DynamicEmergencyAddressesRetrieveResponse>
      >;

      list(
        params?: DynamicEmergencyAddressesListParams,
        options?: RequestOptions,
      ): Promise<Telnyx.Response<Telnyx.DynamicEmergencyAddressesListResponse>>;
    }
  }
}
