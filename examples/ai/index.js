/**
 * To run this file, just provide your Secret API Key, like so:
 * TELNYX_API_KEY=KEY... node index.js
 */

const Telnyx = require('telnyx');

const telnyx = new Telnyx({
  apiKey: process.env.TELNYX_API_KEY || '',
});

(async function aiModels() {
  try {
    const response = await telnyx.ai.openai.listModels();

    console.log(response);
  } catch (e) {
    // Ref: src/core/error.ts — APIError exposes status and error, not raw.
    if (e instanceof Telnyx.APIError) {
      console.error('API error:', e.status, e.error ?? e.message);
    } else {
      console.error(e);
    }
    process.exitCode = 1;
  }
})();
