# Node SDK Example - AI

Install from this directory:

```bash
npm ci --ignore-scripts
export TELNYX_API_KEY='your-api-key'
```

List available models (including the IDs you can use for chat):

```bash
npm start
```

Send one non-streaming chat completion using an explicitly selected model:

```bash
export TELNYX_MODEL='your-model-id'
npm run chat
```

**Billing:** running `npm run chat` sends a real inference request and may incur charges. It requests at most 128 completion tokens; this is not a monetary spending limit. Choose a model available to your account. Never commit your API key.

The chat example prints the full JSON response, including any usage information returned by the API. It uses `ai.openai.chat.createCompletion` with `stream: false`; it does not demonstrate streaming. Missing credentials or model configuration fail before sending a request. Both examples report API and unexpected errors and exit unsuccessfully on failure.

## Offline regression tests

From the SDK repository root, after installing development dependencies with lifecycle scripts disabled:

```bash
pnpm build
node --test examples/tests/list-examples.test.cjs
```

These tests run the real example files against the built candidate SDK in isolated processes, replace the network transport with fixtures, and block real socket connections. They do not use your API key or make billable requests.
