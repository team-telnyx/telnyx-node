/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

import Telnyx from 'telnyx';

const telnyx = new Telnyx({
  apiKey: process.env['TELNYX_API_KEY'] || '',
});

const params: Telnyx.MessagingProfileCreateParams = {
  name: 'Node SDK MP',
  whitelisted_destinations: ['US'],
  enabled: true,
  webhook_url: null,
  webhook_failover_url: null,
  webhook_api_version: '2',
  mms_fall_back_to_sms: false,
  mms_transcoding: false,
};

(async function messaging() {
  try {
    const { data: mp } = await telnyx.messagingProfiles.create(params);

    console.log(mp);
  } catch (e: unknown) {
    console.error(e);

    if (e instanceof Telnyx.APIError) {
      console.log('Status:', e.status);
      console.log('Error:', e.error);
    }
  }
})();
