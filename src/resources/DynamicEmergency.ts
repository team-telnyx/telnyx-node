import TelnyxResource from '../TelnyxResource';
import {DynamicEmergencyAddresses} from './DynamicEmergencyAddresses';
import {DynamicEmergencyEndpoints} from './DynamicEmergencyEndpoints';

export const DynamicEmergency = TelnyxResource.extend({
  nestedResources: {
    Addresses: DynamicEmergencyAddresses,
    Endpoints: DynamicEmergencyEndpoints,
  },
});
