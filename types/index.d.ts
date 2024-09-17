/* eslint-disable @typescript-eslint/triple-slash-reference */

///<reference path='./lib.d.ts' />
///<reference path='./TelnyxAPI.d.ts' />
///<reference path='./Webhooks.d.ts' />
///<reference path='./Errors.d.ts' />

// Imports: The beginning of the section generated from our OpenAPI spec
///<reference path='./BalanceResource.d.ts' />
// Imports: The end of the section generated from our OpenAPI spec

declare module 'telnyx' {
  // Added to in other modules, referenced above.
  export namespace Telnyx {}

  export class Telnyx {
    static Telnyx: typeof Telnyx;

    static webhooks: Telnyx.Webhooks;

    constructor(apiKey: string, version?: string);

    TelnyxResource: Telnyx.TelnyxResource;

    // Fields: The beginning of the section generated from our OpenAPI spec
    balance: Telnyx.BalanceResource;
    // Fields: The end of the section generated from our OpenAPI spec
    webhooks: Telnyx.Webhooks;
    /**
     * API Errors
     */
    errors: typeof Telnyx.errors;
  }

  export default Telnyx;
}
