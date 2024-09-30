/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

import Telnyx from 'telnyx';

const apiKey = String(process.env.TELNYX_API_KEY || '');
const telnyx = new Telnyx(apiKey);

const params: Telnyx.MessagingProfilesCreateParams = {
  name: 'Node SDK MP',
  whitelisted_destinations: ['US'],
  enabled: true,
  webhook_url: null,
  webhook_failover_url: null,
  webhook_api_version: '2',
};

(async function callControl() {
  try {
    const {data: mp} = await telnyx.messagingProfiles.create(params);

    console.log(mp);
  } catch (e: unknown) {
    console.error(e);

    const rawError: Telnyx.TelnyxRawError = (e as {raw: Telnyx.TelnyxRawError})
      .raw;

    console.dir(JSON.stringify(rawError.errors));
  }
})();
