# Node SDK Example - Webhook Verification

This example demonstrates how to properly verify Telnyx webhook signatures using ED25519 cryptography.

## Why Webhook Verification Matters

Webhook verification ensures that:

- ✅ Webhooks are actually from Telnyx, not a malicious third party
- ✅ The payload hasn't been tampered with in transit
- ✅ The webhook isn't a replay attack (using timestamp validation)

## Setup

To test this run `npm install` and then run the main script in `package.json` with `tsx`:

```bash
npm install
npm start
```

> Don't forget to populate your environment variables:
>
> - `export TELNYX_API_KEY=KEY...`
> - `export TELNYX_PUBLIC_KEY=KEY...` (get this from Mission Control → Settings → Public Keys)

## Getting Your Public Key

1. Log into [Telnyx Mission Control](https://portal.telnyx.com)
2. Go to **Settings** → **Public Keys**
3. Copy your **Webhook Signing Public Key** (base64 format)
4. Export it: `export TELNYX_PUBLIC_KEY=eu2zvPjhY6odxV34Z/EsRiERvTodkev4Fq0SlK90Izg=`

## Testing Webhooks

1. **Start the server**: `npm start`

2. **Expose to the internet** using [ngrok](https://ngrok.com):

   ```bash
   ngrok http 3000
   ```

3. **Configure webhook URL** in Mission Control:

   - Go to **Messaging** → **Messaging Profiles**
   - Set webhook URL to: `https://your-ngrok-url.ngrok.io/webhooks/telnyx`
   - Enable webhook signing

4. **Send a test SMS** to your Telnyx number

## What It Does

The example:

- Uses `express.raw()` to preserve the raw request body (required for signature verification)
- Verifies the webhook signature using `telnyx.webhooks.unwrap()`
- Handles different message event types (received, sent, finalized)
- Returns appropriate HTTP status codes

## Security Features

- **ED25519 cryptography**: Modern, secure signature algorithm
- **Replay attack prevention**: Rejects webhooks older than 5 minutes
- **Tampering detection**: Any modification to the payload invalidates the signature
