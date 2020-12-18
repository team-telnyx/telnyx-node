# Telnyx Node.js Library

[![Version](https://img.shields.io/npm/v/telnyx.svg)](https://www.npmjs.org/package/telnyx)
[![Build Status](https://github.com/team-telnyx/telnyx-node/workflows/CI/badge.svg)](https://github.com/team-telnyx/telnyx-node/actions)
[![Coverage Status](https://coveralls.io/repos/github/team-telnyx/telnyx-node/badge.svg?branch=master)](https://coveralls.io/github/team-telnyx/telnyx-node?branch=master)
[![Downloads](https://img.shields.io/npm/dm/telnyx.svg)](https://www.npmjs.com/package/telnyx)
[![Try on RunKit](https://badge.runkitcdn.com/telnyx.svg)](https://runkit.com/npm/telnyx)
[![Join Slack](https://img.shields.io/badge/join-slack-infomational)](https://joinslack.telnyx.com/)

The Telnyx Node library provides convenient access to the Telnyx API from
applications written in server-side JavaScript.

## Documentation

See the [Node API docs](https://developers.telnyx.com/docs/api/v2/overview?lang=node#getting-started).

## Installation

Install the package with:

    npm install telnyx --save

## Usage

The package needs to be configured with your account's API key which is
available in your the [Telnyx Mission Control Portal][api-keys]. Require it with the key's
value:

``` js
const telnyx = require('telnyx')('KEY123456...');

const messagingProfile = await telnyx.messagingProfiles.create({
  name: 'Summer Campaign'
});
```

Or with versions of Node.js prior to v7.9:

``` js
var telnyx = require('telnyx')('KEY123456...');

telnyx.messagingProfiles.create(
  { name: 'Summer Campaign' },
  function(err, messagingProfile) {
    err; // null if no error occurred
    messagingProfile; // the created messaging profile object
  }
);
```

Or using ES modules, this looks more like:

```js
import Telnyx from 'telnyx';
const telnyx = Telnyx('KEY...');
//…
```

### Using Promises

Every method returns a chainable promise which can be used instead of a regular
callback:

```js
// Create a new messaging profile and then send a message using that profile:
telnyx.MessagingProfiles.create({
  name: 'Summer Campaign'
}).then((messagingProfile) => {
  return telnyx.MessagingPhoneNumbers.update(
    '+18005554000',
    {
      'messaging_profile_id': messagingProfile.data.id
    }
  );
}).catch((err) => {
  // Deal with an error
});
```

### Configuring Timeout

Request timeout is configurable (the default is Node's default of 120 seconds):

``` js
telnyx.setTimeout(20000); // in ms (this is 20 seconds)
```

### Configuring a Proxy

An [https-proxy-agent][https-proxy-agent] can be configured with
`setHttpAgent`.

To use telnyx behind a proxy you can pass  to sdk:

```js
if (process.env.http_proxy) {
  const ProxyAgent = require('https-proxy-agent');
  telnyx.setHttpAgent(new ProxyAgent(process.env.http_proxy));
}
```

### Network retries

Automatic network retries can be enabled with `setMaxNetworkRetries`. This will
retry requests `n` times with exponential backoff if they fail due to an
intermittent network problem.

```js
// Retry a request once before giving up
telnyx.setMaxNetworkRetries(1);
```

### Examining Responses

Some information about the response which generated a resource is available
with the `lastResponse` property:

```js
messagingProfile.lastResponse.requestId // see: https://telnyx.com/docs/api/node#request_ids
messagingProfile.lastResponse.statusCode
```

### `request` and `response` events

The Telnyx object emits `request` and `response` events.  You can use them like this:

```js
const telnyx = require('telnyx')('KEY...');

const onRequest = (request) => {
  // Do something.
}

// Add the event handler function:
telnyx.on('request', onRequest);

// Remove the event handler function:
telnyx.off('request', onRequest);
```

#### `request` object
```js
{
  method: 'POST',
  path: '/v2/messaging_profiles'
}
```

#### `response` object
```js
{
  method: 'POST',
  path: '/v2/messaging_profiles',
  status: 200,
  request_id: 'Ghc9r26ts73DRf',
  elapsed: 445                // Elapsed time in milliseconds
}
```

### Webhook signing

Telnyx signs the webhook events it sends to your endpoint, allowing you to
validate that they were not sent by a third-party. You can read more about it
[here](https://developers.telnyx.com/docs/v2/call-control/receiving-webhooks).

Please note that you must pass the _raw_ request body, exactly as received from
Telnyx, to the `constructEvent()` function; this will not work with a parsed
(i.e., JSON) request body.

You can find an example of how to use this with [Express](https://expressjs.com/)
in the [`examples/webhook-signing`](examples/webhook-signing) folder, but here's
what it looks like:

```js
const event = telnyx.webhooks.constructEvent(
  webhookRawBody,
  webhookTelnyxSignatureHeader,
  webhookTelnyxTimestampHeader,
  publicKey
);
```

### Writing a Plugin

If you're writing a plugin that uses the library, we'd appreciate it if you identified using `telnyx.setAppInfo()`:

```js
telnyx.setAppInfo({
  name: 'MyAwesomePlugin',
  version: '1.2.34', // Optional
  url: 'https://myawesomeplugin.info', // Optional
});
```

This information is passed along when the library makes calls to the Telnyx API.

### Auto-pagination

You can auto-paginate list methods. We provide a few different APIs for this to
aid with a variety of node versions and styles.


#### Async iterators (`for-await-of`)

If you are in a Node environment that has support for [async iteration](https://github.com/tc39/proposal-async-iteration#the-async-iteration-statement-for-await-of),
such as Node 10+ or [babel](https://babeljs.io/docs/en/babel-plugin-transform-async-generator-functions),
the following will auto-paginate:

```js
for await (const messagingProfile of telnyx.messagingProfiles.list()) {
  doSomething(messagingProfile);
  if (shouldStop()) {
    break;
  }
}
```

#### `autoPagingEach`

If you are in a Node environment that has support for `await`, such as Node 7.9 and greater,
you may pass an async function to `.autoPagingEach`:

```js
await telnyx.messagingProfiles.list().autoPagingEach(async (messagingProfile) => {
  await doSomething(messagingProfile);
  if (shouldBreak()) {
    return false;
  }
})
console.log('Done iterating.');
```

Equivalently, without `await`, you may return a Promise, which can resolve to `false` to break:

```js
telnyx.messagingProfiles.list().autoPagingEach((messagingProfile) => {
  return doSomething(messagingProfile).then(() => {
    if (shouldBreak()) {
      return false;
    }
  });
}).then(() => {
  console.log('Done iterating.');
}).catch(handleError);
```

If you prefer callbacks to promises, you may also use a `next` callback and a second `onDone` callback:

```js
telnyx.messagingProfiles.list().autoPagingEach(
  function onItem(messagingProfile, next) {
    doSomething(messagingProfile, function(err, result) {
      if (shouldStop(result)) {
        next(false); // Passing `false` breaks out of the loop.
      } else {
        next();
      }
    });
  },
  function onDone(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Done iterating.');
    }
  }
)
```

If your `onItem` function does not accept a `next` callback parameter _or_ return a Promise,
the return value is used to decide whether to continue (`false` breaks, anything else continues).

#### `autoPagingToArray`

This is a convenience for cases where you expect the number of items
to be relatively small; accordingly, you must pass a `limit` option
to prevent runaway list growth from consuming too much memory.

Returns a promise of an array of all items across pages for a list request.

```js
const allMessagingProfiles = await telnyx.messagingProfiles.list()
  .autoPagingToArray({limit: 10000});
```

## Development

The test suite depends on [telnyx-mock], so make sure to fetch and run it locally from a
background terminal. The default `PORT` used is `12111`. If you want
to target a different one, pass the environment variable `TELNYX_MOCK_PORT`.
([telnyx-mock's README][telnyx-mock] also contains
instructions for installing via Homebrew and other methods):

    go get -u github.com/team-telnyx/telnyx-mock
    telnyx-mock

Run all tests:

```bash
$ npm install
$ npm test
```

Run all tests with a custom `telnyx-mock` port:

```bash
$ TELNYX_MOCK_PORT=12000 npm test
```

Run a single test suite:

```bash
$ npm run mocha -- test/Error.spec.js
```

Run a single test (case sensitive):

```bash
$ npm run mocha -- test/Error.spec.js --grep 'Populates with type'
```

If you wish, you may run tests using your Telnyx *Test* API key by setting the
environment variable `TELNYX_TEST_API_KEY` before running the tests:

```bash
$ export TELNYX_TEST_API_KEY='KEY....'
$ export TELNYX_MOCK_PORT='12...'
$ npm test
```

### Debugging

To inspect values in tests first import debug:

```js
var debug = require('debug')('foo');
//...
debug(result)
```

Then run the tests with:

```bash
$ DEBUG=foo npm test
```

To view verbose debugging for `nock` run the tests with:

```bash
$ DEBUG=nock.* npm test
```

## Acknowledgements

The contributors and maintainers of Telnyx Node would like to extend their deep gratitude to the
authors of [Stripe Node](https://github.com/stripe/stripe-node), upon which
this project is based. Thank you for developing such elegant, usable, extensible code
and for sharing it with the community.

[api-keys]: https://portal.telnyx.com/#/app/auth/v2
[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent

<!--
# vim: set tw=79:
-->
