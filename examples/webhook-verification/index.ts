/**
 * Webhook Verification Example
 *
 * This example demonstrates proper webhook signature verification using ED25519 cryptography.
 * Webhook verification ensures that webhooks are authentic and haven't been tampered with.
 *
 * To run this file:
 * TELNYX_API_KEY=KEY... TELNYX_PUBLIC_KEY=KEY... npm start
 */

// @ts-ignore - Express types not available in global build
const express = require('express');
const config = require('./config');
const Telnyx = require('telnyx');

const app = express();

const telnyx = new Telnyx({
  apiKey: config.TELNYX_API_KEY,
  publicKey: config.TELNYX_PUBLIC_KEY, // Base64 format from Mission Control
});

// IMPORTANT: Use express.raw() to preserve the raw body for signature verification
// The signature is computed over the exact bytes received, so we can't use express.json()
app.post('/webhooks/telnyx', express.raw({ type: 'application/json' }), (req: any, res: any) => {
  console.log('📨 Webhook received');

  try {
    // Convert the raw buffer to a string for verification
    const rawBody = req.body.toString('utf8');

    // Verify the webhook signature and parse the event
    // This will throw an error if the signature is invalid
    const event: any = telnyx.webhooks.unwrap(rawBody, {
      headers: req.headers,
    });

    console.log('✅ Webhook signature verified successfully');
    console.log('📋 Event type:', event.data?.event_type);

    // Handle different webhook event types
    switch (event.data?.event_type) {
      case 'message.received':
        console.log('📬 Received message:', {
          from: event.data.payload?.from?.phone_number,
          to: event.data.payload?.to?.[0]?.phone_number,
          text: event.data.payload?.text,
          id: event.data.payload?.id,
        });
        break;

      case 'message.sent':
        console.log('📤 Message sent:', {
          to: event.data.payload?.to?.[0]?.phone_number,
          id: event.data.payload?.id,
        });
        break;

      case 'message.finalized':
        console.log('✔️ Message finalized:', {
          id: event.data.payload?.id,
        });
        break;

      default:
        console.log('📦 Other event type:', event.data?.event_type);
    }

    // Always respond with 200 OK to acknowledge receipt
    res.status(200).json({ received: true });
  } catch (error: any) {
    // Check if this is a webhook verification error
    if (error.name === 'TelnyxWebhookVerificationError') {
      // Webhook verification failed - this webhook may not be from Telnyx
      console.error('❌ Webhook verification failed:', error.message);
      res.status(401).json({ error: 'Unauthorized - Invalid signature' });
    } else {
      // Some other error occurred while processing the webhook
      console.error('⚠️ Error processing webhook:', error.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Health check endpoint
app.get('/health', (req: any, res: any) => {
  res.json({
    status: 'ok',
    hasApiKey: !!config.TELNYX_API_KEY,
    hasPublicKey: !!config.TELNYX_PUBLIC_KEY,
  });
});

// Start the server
app.listen(config.TELNYX_APP_PORT, () => {
  console.log('🚀 Webhook server started');
  console.log(`📡 Listening on http://localhost:${config.TELNYX_APP_PORT}`);
  console.log(`🔐 Webhook endpoint: http://localhost:${config.TELNYX_APP_PORT}/webhooks/telnyx`);
  console.log('');
  console.log('💡 To test webhooks:');
  console.log('   1. Expose this server to the internet (use ngrok or similar)');
  console.log('   2. Configure webhook URL in Telnyx Mission Control');
  console.log('   3. Send a test SMS to your Telnyx number');
});
