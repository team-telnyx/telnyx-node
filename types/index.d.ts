/* eslint-disable @typescript-eslint/triple-slash-reference */

///<reference path='./lib.d.ts' />
///<reference path='./TelnyxAPI.d.ts' />
///<reference path='./Webhooks.d.ts' />
///<reference path='./Errors.d.ts' />

// Resources Imports
///<reference path='./AccessIpAddressResource.d.ts' />
///<reference path='./AccessIpRangesResource.d.ts' />
///<reference path='./AutorespConfigsResource.d.ts' />
///<reference path='./AddressesResource.d.ts' />
///<reference path='./AvailablePhoneNumbersResource.d.ts' />
///<reference path='./BalanceResource.d.ts' />
///<reference path='./BillingGroupsResource.d.ts' />
///<reference path='./BrandsResource.d.ts' />
///<reference path='./CallsResource.d.ts' />
///<reference path='./MessagingProfilesResource.d.ts' />
///<reference path='./MessagingProfileMetricsResource.d.ts' />
///<reference path='./PhoneNumberAssignmentByProfileResource.d.ts' />
///<reference path='./StorageBucketsResource.d.ts' />
//

declare module 'telnyx' {
  // Added to in other modules, referenced above.
  export namespace Telnyx {}

  export class Telnyx {
    static Telnyx: typeof Telnyx;

    static webhooks: Telnyx.Webhooks;

    constructor(apiKey: string, version?: string);

    TelnyxResource: Telnyx.TelnyxResource;

    // Resources
    accessIpAddress: Telnyx.AccessIpAddressResource;
    accessIpRanges: Telnyx.AccessIpRangesResource;
    autorespConfigs: Telnyx.AutorespConfigsResource;
    addresses: Telnyx.AddressesResource;
    availablePhoneNumbers: Telnyx.AvailablePhoneNumbersResource;
    balance: Telnyx.BalanceResource;
    brands: Telnyx.BrandsResource;
    billingGroups: Telnyx.BillingGroupsResource;
    calls: Telnyx.CallsResource;
    messagingProfiles: Telnyx.MessagingProfilesResource;
    phoneNumberAssignmentByProfileResource: Telnyx.PhoneNumberAssignmentByProfileResource;
    storageBuckets: Telnyx.StorageBucketsResource;
    //

    webhooks: Telnyx.Webhooks;
    /**
     * API Errors
     */
    errors: typeof Telnyx.errors;
  }

  export default Telnyx;
}
