'use strict';

const Telnyx = require('telnyx');
const Express = require('express');

/**
 * You'll need to make sure this is externally accessible.  ngrok (https://ngrok.com/)
 * makes this really easy.
 *
 * To run this file, just provide your Secret API Key and Webhook Secret, like so:
 * TELNYX_API_KEY=KEYXXX TELNYX_PUBLIC_KEY=ZZZXXX node express.js
 */

const apiKey = process.env.TELNYX_API_KEY;
const publicKey = process.env.TELNYX_PUBLIC_KEY;

const telnyx = Telnyx(apiKey);

const router = Express.Router();

// Add the raw text body of the request to the `request` object
function addRawBody(req, res, next) {
  req.setEncoding('utf8');

  var data = '';

  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    req.rawBody = data;

    next();
  });
}

/**
 * You can either `use()` addRawBody on the Router...
 */
// router.use(addRawBody);

/**
 * ...or add it directly as middleware to the route.
 */
router.post('/webhooks', addRawBody, function(request, response) {
  var event;

  try {
    // Try adding the Event as `request.event`
    event = telnyx.webhooks.constructEvent(
      request.rawBody,
      request.header('telnyx-signature-ed25519'),
      request.header('telnyx-timestamp'),
      publicKey
    );
  } catch (e) {
    // If `constructEvent` throws an error, respond with the message and return.
    console.log('Error', e.message);

    return response.status(400).send('Webhook Error:' + e.message);
  }

  console.log('Success', event.data.id);

  // Event was 'constructed', so we can respond with a 200 OK
  response.status(200).send('Signed Webhook Received: ' + event.data.id);
});

// You could either create this app, or just return the `Router` for use in an
// existing Express app - up to you!

const app = Express();
app.use(router);
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});
