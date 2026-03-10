// @ts-ignore - Express types not available in global build
import express from 'express';
import * as config from './config';
import Telnyx from 'telnyx';

import messaging from './messaging';

const app = express();

const telnyx = new Telnyx({
  apiKey: config.TELNYX_API_KEY,
});

app.use(express.json());

app.use(function webhookValidator(req: any, res: any, next: any) {
  try {
    // Simple webhook validation - in production you'd want proper signature verification
    const event = telnyx.webhooks.unwrap(JSON.stringify(req.body));
    req.telnyxEvent = event;
    next();
  } catch (e) {
    const message = (e as Error).message;
    console.log(`Invalid webhook message: ${message}`);
    res.status(400).send(`Webhook error: ${message}`);
  }
});

app.use('/messaging', messaging);

app.listen(config.TELNYX_APP_PORT);
console.log(`Server listening on port ${config.TELNYX_APP_PORT}`);
