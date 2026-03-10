// @ts-ignore - Express types not available in global build
import express from 'express';
import Telnyx from 'telnyx';

const router = express.Router();

router.route('/inbound').post(async function inboundMessageController(req: any, res: any) {
  res.sendStatus(200); // Play nice and respond to webhook
  const event = (req.body as Telnyx.InboundMessageWebhookEvent).data;

  if (event?.payload) {
    console.log(`Received inbound message with ID: ${event?.payload?.id}`);
    const toNumber = event.payload.to?.at(0)?.phone_number as string;
    const fromNumber = event.payload.from?.phone_number as string;
    const type = event.payload.type;
    const text = event.payload.text;

    console.log('Type: ', type);
    console.log('Text: ', text);
    console.log('From: ', fromNumber);
    console.log('To: ', toNumber);
  } else {
    console.error('Failed to receive webhook payload');
    console.error(JSON.stringify(event?.payload, null, 2));
  }
});

export default router;
