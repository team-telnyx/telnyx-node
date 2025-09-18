/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

import Telnyx from 'telnyx';

const telnyx = new Telnyx({
  apiKey: process.env['TELNYX_API_KEY'] || '',
});

const params: Telnyx.AvailablePhoneNumberListParams = {
  filter: {
    features: ['sms', 'emergency', 'mms', 'international_sms'],
    limit: 10,
    country_code: 'US',
  },
};

(async function numbers() {
  try {
    const { data: numbers } = await telnyx.availablePhoneNumbers.list(params);

    console.log(numbers);
  } catch (e: unknown) {
    console.error(e);

    if (e instanceof Telnyx.APIError) {
      console.log('Status:', e.status);
      console.log('Error:', e.error);
    }
  }
})();
