/**
 * TELNYX_API_KEY=KEY... TELNYX_MODEL=your-model-id node chat.js
 * Sends a billable, non-streaming inference request. See README.md.
 */
const Telnyx = require('telnyx');

(async function chat() {
  try {
    if (!process.env.TELNYX_API_KEY) throw new Error('Set TELNYX_API_KEY before running this example.');
    if (!process.env.TELNYX_MODEL) throw new Error('Set TELNYX_MODEL to a model ID from the models example.');

    const telnyx = new Telnyx({ apiKey: process.env.TELNYX_API_KEY });
    // Ref: src/resources/ai/openai/chat.ts — non-streaming public API.
    const response = await telnyx.ai.openai.chat.createCompletion({
      model: process.env.TELNYX_MODEL,
      messages: [{ role: 'user', content: 'Say hello in one sentence.' }],
      max_tokens: 128,
      stream: false,
    });
    console.log(JSON.stringify(response, null, 2));
  } catch (e) {
    if (e instanceof Telnyx.APIError) {
      console.error('API error:', e.status, e.error ?? e.message);
    } else {
      console.error(e);
    }
    process.exitCode = 1;
  }
})();
