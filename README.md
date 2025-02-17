# Telnyx Node.js Library

[![Version](https://img.shields.io/npm/v/telnyx.svg)](https://www.npmjs.org/package/telnyx)
[![Build Status](https://github.com/team-telnyx/telnyx-node/workflows/CI/badge.svg)](https://github.com/team-telnyx/telnyx-node/actions)
[![Downloads](https://img.shields.io/npm/dm/telnyx.svg)](https://www.npmjs.com/package/telnyx)
[![Try on RunKit](https://badge.runkitcdn.com/telnyx.svg)](https://runkit.com/npm/telnyx)
[![Code Style](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier")
[![Join Slack](https://img.shields.io/badge/join-slack-infomational)](https://joinslack.telnyx.com/)

The Telnyx Node library provides convenient access to the Telnyx API from
applications written in server-side JavaScript.

## Documentation

See the [Node API docs](https://developers.telnyx.com/api#get-started).

## Versions

`telnyx-node` uses a slightly modified version of [Semantic Versioning](https://semver.org) for all changes. [See this document](VERSIONS.md) for details.

## Installation

Install the package with:

    npm install telnyx --save

## Usage

The package needs to be configured with your account's API key which is
available in your the [Telnyx Mission Control Portal][api-keys]. Require it with the key's
value:

```typescript
import Telnyx from 'telnyx';

const telnyx = new Telnyx('KEY123456...');

const messagingProfile = await telnyx.messagingProfiles.create({
  name: 'Summer Campaign',
});
```

### Using Promises

Every method returns a chainable promise which can be used instead of a regular
callback:

```typescript
// Create a new messaging profile and then send a message using that profile:
telnyx.messagingProfiles
  .create({
    name: 'Summer Campaign',
  })
  .then((messagingProfile) => {
    return telnyx.messagingPhoneNumbers.update('+18005554000', {
      messaging_profile_id: messagingProfile.data.id,
    });
  })
  .catch((err) => {
    // Deal with an error
  });
```

### Configuring Timeout

Request timeout is configurable (the default is Node's default of 120 seconds):

```typescript
telnyx.setTimeout(20000); // in ms (this is 20 seconds)
```

### Configuring a Proxy

An [https-proxy-agent][https-proxy-agent] can be configured with
`setHttpAgent`.

To use telnyx behind a proxy you can pass to sdk:

```typescript
import ProxyAgent from 'https-proxy-agent';

if (process.env.http_proxy) {
  telnyx.setHttpAgent(new ProxyAgent(process.env.http_proxy));
}
```

### Network retries

Automatic network retries can be enabled with `setMaxNetworkRetries`. This will
retry requests `n` times with exponential backoff if they fail due to an
intermittent network problem.

```typescript
// Retry a request once before giving up
telnyx.setMaxNetworkRetries(1);
```

### Examining Responses

Some information about the response which generated a resource is available
with the `lastResponse` property:

```typescript
messagingProfile.lastResponse.requestId; // see: https://telnyx.com/docs/api/node#request_ids
messagingProfile.lastResponse.statusCode;
```

### `request` and `response` events

The Telnyx object emits `request` and `response` events. You can use them like this:

```typescript
import Telnyx from 'telnyx';

const telnyx = new Telnyx('KEY...');

const onRequest = (request) => {
  // Do something.
};

// Add the event handler function:
telnyx.on('request', onRequest);

// Remove the event handler function:
telnyx.off('request', onRequest);
```

#### `request` object

```typescript
{
  method: 'POST',
  path: '/v2/messaging_profiles'
}
```

#### `response` object

```typescript
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
[here](https://developers.telnyx.com/docs/voice/programmable-voice/receiving-webhooks).

Please note that you must pass the _raw_ request body, exactly as received from
Telnyx, to the `constructEvent()` function; this will not work with a parsed
(i.e., JSON) request body.

You can find an example of how to use this with [Express](https://expressjs.com/)
in the [`examples/messaging-inbound-webhook`](examples/messaging-inbound-webhook) folder, but here's
what it looks like:

```typescript
const event = telnyx.webhooks.constructEvent(
  webhookRawBody, // JSON stringified
  webhookTelnyxSignatureHeader, // Buffer from base 64 encoded signature
  webhookTelnyxTimestampHeader,
  publicKey, // Buffer from base 64 encoded public key
  timeToleranceInSeconds, // Optional, defaults to 300 seconds
);
```

#### TeXML Signature

TeXML sends webhooks as form-encoded payloads instead of JSON. To validate the signature, use the `telnyx.webhooks.signature.verifySignature` method.

You can find an example of how to use this with [Express](https://expressjs.com/) in the [`examples/webhook-signing`](examples/webhook-signing) folder.

```typescript
const timeToleranceInSeconds = 300; // Will validate signatures of webhooks up to 5 minutes after Telnyx sent the request
try {
  telnyx.webhooks.signature.verifySignature(
    webhookRawBody, // JSON stringified
    webhookTelnyxSignatureHeader, // Buffer from base 64 encoded signature
    webhookTelnyxTimestampHeader,
    publicKey, // Buffer from base 64 encoded public key
    timeToleranceInSeconds, // Optional, defaults to 300 seconds
  );
} catch (e) {
  console.log('Failed to validate the signature');
  console.log(e);
}
```

### Writing a Plugin

If you're writing a plugin that uses the library, we'd appreciate it if you identified using `telnyx.setAppInfo()`:

```typescript
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

```typescript
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

```typescript
await telnyx.messagingProfiles
  .list()
  .autoPagingEach(async (messagingProfile) => {
    await doSomething(messagingProfile);
    if (shouldBreak()) {
      return false;
    }
  });
console.log('Done iterating.');
```

Equivalently, without `await`, you may return a Promise, which can resolve to `false` to break:

```typescript
telnyx.messagingProfiles
  .list()
  .autoPagingEach((messagingProfile) => {
    return doSomething(messagingProfile).then(() => {
      if (shouldBreak()) {
        return false;
      }
    });
  })
  .then(() => {
    console.log('Done iterating.');
  })
  .catch(handleError);
```

If you prefer callbacks to promises, you may also use a `next` callback and a second `onDone` callback:

```typescript
telnyx.messagingProfiles.list().autoPagingEach(
  function onItem(messagingProfile, next) {
    doSomething(messagingProfile, function (err, result) {
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
  },
);
```

If your `onItem` function does not accept a `next` callback parameter _or_ return a Promise,
the return value is used to decide whether to continue (`false` breaks, anything else continues).

#### `autoPagingToArray`

This is a convenience for cases where you expect the number of items
to be relatively small; accordingly, you must pass a `limit` option
to prevent runaway list growth from consuming too much memory.

Returns a promise of an array of all items across pages for a list request.

```typescript
const allMessagingProfiles = await telnyx.messagingProfiles
  .list()
  .autoPagingToArray({limit: 10000});
```

## Getting help

If you need help installing or using the library, please check the [Telnyx Documentation](https://developers.telnyx.com) first, and [contact Telnyx support](https://telnyx.com/contact-us) if you don't find an answer to your question.

If you've instead found a bug in the library or would like new features added, go ahead and open issues or pull requests against this repo!

## Contributing

Bug fixes, docs, and library improvements are always welcome. Please refer to our [Contributing Guide](CONTRIBUTING.md) for detailed information on how you can contribute.

> Note: Please be aware that a good share of the files are auto-generated. You are welcome to suggest changes and submit PRs illustrating the changes. However, we'll have to make the changes in the underlying tool. You can find more info about this in the [Contributing Guide](CONTRIBUTING.md).

If you're not familiar with the GitHub pull request/contribution process, [this is a nice tutorial](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

## Development

### Setup

Run the following to create your env file

```bash
cp .env.local .env
```

> Don't forget to update your `.env` values accordingly.

Now inject envs into terminal:

```bash
. ./setup_env.sh
```

> Feel free to use Node `--env-file` parameter to [setup envs](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs) if you prefer

The test suite depends on the [Prism Mock Server](https://github.com/stoplightio/prism).

Start the prism mock service with the following command:

```bash
npx prism mock https://raw.githubusercontent.com/team-telnyx/openapi/master/openapi/spec3.json
```

---

One final step -- because the Node SDK originally expected to reach the legacy `telnyx-mock` service at port 12111 (in addition to providing a `/v2/` base path), we need to setup the [Telnyx mock proxy server](https://github.com/team-telnyx/telnyx-mock-server-proxy) to modify the request path and forward along to the prism mock server.

```bash
# In new terminal window

git clone git@github.com:team-telnyx/telnyx-prism-mock.git
cd telnyx-prism-mock/proxy

npm install
node index.js
```

### Running Tests

```bash
$ npm install
$ npm test
```

Run all tests with a custom `telnyx-mock` port:

```bash
$ TELNYX_MOCK_PORT=12111 npm test
```

Run a single test suite:

```bash
$ npm test -- test/Error.test.ts
```

Run a single test (case sensitive):

```bash
$ npm test -- test/Error.test.ts -t 'Populates with type'
```

If you wish, you may run tests using your Telnyx _Test_ API key by setting the
environment variable `TELNYX_TEST_API_KEY` before running the tests:

```bash
$ export TELNYX_TEST_API_KEY='KEY....'
$ export TELNYX_MOCK_PORT='12...'
$ npm test
```

### Debugging

To inspect values in tests first import debug:

```typescript
import Debug from 'debug';

const debug = Debug('foo');
//...
debug(result);
```

Then run the tests with:

```bash
$ DEBUG=foo npm test
```

To view verbose debugging for `nock` run the tests with:

```bash
$ DEBUG=nock.* npm test
```

### Typescript

Run:

```bash
npm run build
```

Then check output in [dist](./dist) folder

### Linter (Prettier)

Add an [editor integration](https://prettier.io/docs/en/editors.html) or:

```bash
$ npm run fix
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
