/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

import Telnyx from 'telnyx';

const telnyx = new Telnyx({
  apiKey: process.env['TELNYX_API_KEY'] || '',
});

const params: Telnyx.AddressListParams = {
  sort: 'created_at',
};

(async function addresses() {
  try {
    const response = await telnyx.addresses.list(params);

    console.log(response);
  } catch (e: unknown) {
    console.error(e);

    if (e instanceof Telnyx.APIError) {
      console.log('Status:', e.status);
      console.log('Error:', e.error);
    }
  }
})();
