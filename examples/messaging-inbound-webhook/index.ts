import express from 'express';
import * as config from './config';
import Telnyx from 'telnyx';

import messaging from './messaging';

const app = express();

const telnyx = new Telnyx(config.TELNYX_API_KEY);

app.use(express.json());

app.use(function webhookValidator(req, res, next) {
  try {
    telnyx.webhooks.constructEvent(
      JSON.stringify(req.body, null, 2),
      Buffer.from(req.header('telnyx-signature-ed25519')!, 'base64'),
      req.header('telnyx-timestamp')!,
      Buffer.from(config.TELNYX_PUBLIC_KEY, 'base64'),
      300,
    );
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
