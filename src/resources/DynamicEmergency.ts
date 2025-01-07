import TelnyxResource from '../TelnyxResource.js';
import {DynamicEmergencyAddresses} from './DynamicEmergencyAddresses.js';
import {DynamicEmergencyEndpoints} from './DynamicEmergencyEndpoints.js';

export const DynamicEmergency = TelnyxResource.extend({
  nestedResources: {
    Addresses: DynamicEmergencyAddresses,
    Endpoints: DynamicEmergencyEndpoints,
  },
});
