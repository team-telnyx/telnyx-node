'use strict';

const Telnyx = require('telnyx');

/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEYXXX node index.js
 */

const apiKey = process.env.TELNYX_API_KEY;

const telnyx = Telnyx(apiKey);

try {
  telnyx.calls.create({connection_id: 'uuid', to: '+1111111111111', from: '+1111111111111'});
} catch (e) {
  console.error(e);
}
