/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

import Telnyx from 'telnyx';

const telnyx = new Telnyx(process.env.TELNYX_API_KEY || '');

const params: Telnyx.AvailablePhoneNumbersListParams = {
  'filter[features]': ['sms', 'emergency', 'mms', 'international_sms'],
  'filter[limit]': 10,
  'filter[country_code]': 'US',
};

(async function numbers() {
  try {
    const {data: numbers} = await telnyx.availablePhoneNumbers.list(params);

    console.log(numbers);
  } catch (e: unknown) {
    console.error(e);

    const rawError: Telnyx.TelnyxRawError = (e as {raw: Telnyx.TelnyxRawError})
      .raw;

    console.dir(JSON.stringify(rawError.errors));
  }
})();
