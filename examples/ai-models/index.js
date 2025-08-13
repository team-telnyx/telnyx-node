/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

const Telnyx = require('telnyx');

const telnyx = new Telnyx(process.env.TELNYX_API_KEY || '');

(async function aiModels() {
  try {
    const response = await telnyx.aiModels.list();

    console.log(response);
  } catch (e) {
    console.error(e);
    const rawError = e.raw;

    console.dir(JSON.stringify(rawError.errors));
  }
})();
