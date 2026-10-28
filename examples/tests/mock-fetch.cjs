// Preloaded only in the example subprocesses. Never permit real API traffic.
const assert = require('node:assert/strict');
const net = require('node:net');
net.Socket.prototype.connect = function () {
  throw new Error('Real network connections are forbidden in example tests');
};
let requests = 0;
globalThis.fetch = async (url, options) => {
  requests++;
  assert.equal(String(url), process.env.EXAMPLE_URL);
  const chat = process.env.EXAMPLE_ENTRY === 'chat.js';
  assert.equal(options.method, chat ? 'POST' : 'GET');
  if (chat) {
    assert.deepEqual(JSON.parse(options.body), {
      model: 'fixture/model',
      messages: [{ role: 'user', content: 'Say hello in one sentence.' }],
      max_tokens: 128,
      stream: false,
    });
  }
  assert.equal(new Headers(options.headers).get('authorization'), 'Bearer test-example-key');
  const scenario = process.env.EXAMPLE_SCENARIO;
  if (scenario === 'connection-error') throw new Error('Offline fixture');
  if (scenario === 'success') {
    const body =
      chat ?
        {
          id: 'fixture-completion',
          object: 'chat.completion',
          model: 'fixture/model',
          choices: [
            { index: 0, message: { role: 'assistant', content: 'fixture-result' }, finish_reason: 'stop' },
          ],
          usage: { prompt_tokens: 12, completion_tokens: 4, total_tokens: 16 },
        }
      : { data: [{ id: 'fixture-result' }] };
    return new Response(JSON.stringify(body), {
      headers: { 'content-type': 'application/json' },
    });
  }
  if (scenario === 'invalid-json') {
    return new Response('{invalid-json', { headers: { 'content-type': 'application/json' } });
  }
  if (scenario === 'empty-error') return new Response(null, { status: 401 });
  assert.equal(scenario, 'api-error');
  return new Response(JSON.stringify({ errors: [{ code: '10009', detail: 'Invalid API key' }] }), {
    status: 401,
    headers: { 'content-type': 'application/json' },
  });
};
process.on('exit', () => {
  const scenario = process.env.EXAMPLE_SCENARIO;
  assert.equal(
    requests,
    ['no-key', 'no-model'].includes(scenario) ? 0
    : scenario === 'connection-error' ? 3
    : 1,
  );
});
