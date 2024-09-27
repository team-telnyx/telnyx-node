/* eslint-disable @typescript-eslint/triple-slash-reference */

///<reference path='./lib.d.ts' />
///<reference path='./TelnyxAPI.d.ts' />
///<reference path='./Webhooks.d.ts' />
///<reference path='./Errors.d.ts' />

// Resources Imports
///<reference path='./BalanceResource.d.ts' />
///<reference path='./MessagingProfilesResource.d.ts' />
///<reference path='./MessagingProfileMetricsResource.d.ts' />
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
    balance: Telnyx.BalanceResource;
    calls: Telnyx.CallsResource;
    messagingProfiles: Telnyx.MessagingProfilesResource;
    //
    webhooks: Telnyx.Webhooks;
    /**
     * API Errors
     */
    errors: typeof Telnyx.errors;
  }

  export default Telnyx;
}
