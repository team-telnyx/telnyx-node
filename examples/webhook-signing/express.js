'use strict';

const Telnyx = require('telnyx');
const Express = require('express');
const bodyParser = require('body-parser');
const app = Express();

/**
 * You'll need to make sure this is externally accessible. ngrok (https://ngrok.com/)
 * makes this really easy.
 *
 * To run this file, just provide your Secret API Key and Webhook Secret, like so:
 * TELNYX_API_KEY=KEYXXX TELNYX_PUBLIC_KEY=ZZZXXX node express.js
 */

const apiKey = process.env.TELNYX_API_KEY;
const publicKey = process.env.TELNYX_PUBLIC_KEY;

const telnyx = Telnyx(apiKey);

app.post('/webhooks', bodyParser.json(), function(req, res) {
  var event;

  try {
    event = telnyx.webhooks.constructEvent(
      // webhook data needs to be passed raw for verification
      JSON.stringify(req.body, null, 2),
      req.header('telnyx-signature-ed25519'),
      req.header('telnyx-timestamp'),
      publicKey
    );
  } catch (e) {
    // If `constructEvent` throws an error, respond with the message and return.
    console.log('Error', e.message);

    return res.status(400).send('Webhook Error:' + e.message);
  }

  /**
   * Inbound Call Control:
   * first we listen for an initiation event and then answer the call
   */
  if (event.data.event_type === 'call.initiated') {
    console.log('Call Initiated. Answering call with call control id: ' + event.data.payload.call_control_id);

    const call = new telnyx.Call({call_control_id: event.data.payload.call_control_id});
    call.answer(apiKey);
  }
  if (event.data.event_type === 'call.answered') {
    console.log('Call answered through webhook signing: ' + event.data.id);
    console.log(event.data.payload);
  }

  // Event was 'constructed', so we can respond with a 200 OK
  res.status(200).send(`Signed Webhook Received: ${event.data.event_type}, ${event.data.id}`);
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
