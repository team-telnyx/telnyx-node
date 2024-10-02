/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

import Telnyx from 'telnyx';

const telnyx = new Telnyx(process.env.TELNYX_API_KEY || '');

const params: Telnyx.AddressesListParams = {
  sort: 'created_at',
};

(async function addresses() {
  try {
    const response = await telnyx.addresses.list(params);

    console.log(response);
  } catch (e: unknown) {
    console.error(e);

    const rawError: Telnyx.TelnyxRawError = (e as {raw: Telnyx.TelnyxRawError})
      .raw;

    console.dir(JSON.stringify(rawError.errors));
  }
})();
