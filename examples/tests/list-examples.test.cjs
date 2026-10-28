const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const { copyFileSync, mkdirSync, mkdtempSync, rmSync, symlinkSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { test } = require('node:test');

const root = path.resolve(__dirname, '../..');

function runExample(name, scenario, entry = 'index.js') {
  const dir = mkdtempSync(path.join(tmpdir(), 'telnyx-example-'));
  try {
    for (const file of [entry, 'package.json']) {
      copyFileSync(path.join(root, 'examples', name, file), path.join(dir, file));
    }
    mkdirSync(path.join(dir, 'node_modules'));
    // Exercise the candidate's real CJS/ESM package exports, not Jest's src mapper.
    symlinkSync(path.join(root, 'dist'), path.join(dir, 'node_modules/telnyx'), 'dir');
    const result = spawnSync(process.execPath, ['--require', path.join(__dirname, 'mock-fetch.cjs'), entry], {
      cwd: dir,
      encoding: 'utf8',
      timeout: 15000,
      env: {
        PATH: process.env.PATH,
        TELNYX_API_KEY: scenario === 'no-key' ? '' : 'test-example-key',
        TELNYX_MODEL: scenario === 'no-model' ? '' : 'fixture/model',
        EXAMPLE_ENTRY: entry,
        EXAMPLE_SCENARIO: scenario,
        EXAMPLE_URL: `https://api.telnyx.com/v2/${
          entry === 'chat.js' ? 'ai/openai/chat/completions'
          : name === 'ai' ? 'ai/openai/models'
          : 'connections'
        }`,
      },
    });
    assert.ifError(result.error);
    assert.equal(result.signal, null);
    assert.doesNotMatch(result.stderr, /AssertionError|Real network connections are forbidden/);
    return result;
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

for (const [scenario, message] of [
  ['success', /fixture-result/],
  ['api-error', /Invalid API key/],
  ['empty-error', /401/],
  ['connection-error', /Connection error/],
  ['invalid-json', /SyntaxError/],
  ['no-key', /TELNYX_API_KEY/],
  ['no-model', /TELNYX_MODEL/],
]) {
  test(`chat: ${scenario}`, () => {
    const result = runExample('ai', scenario, 'chat.js');
    assert.equal(result.status, scenario === 'success' ? 0 : 1);
    assert.match(scenario === 'success' ? result.stdout : result.stderr, message);
    if (scenario === 'success') {
      const response = JSON.parse(result.stdout);
      assert.equal(response.choices[0].message.content, 'fixture-result');
      assert.deepEqual(response.usage, { prompt_tokens: 12, completion_tokens: 4, total_tokens: 16 });
      assert.equal(result.stderr, '');
    }
    assert.doesNotMatch(result.stderr, /Cannot read properties|UnhandledPromiseRejection/);
  });
}

for (const name of ['ai', 'connections']) {
  test(`${name}: prints successful results`, () => {
    const result = runExample(name, 'success');
    assert.equal(result.status, 0);
    assert.match(result.stdout, /fixture-result/);
    assert.equal(result.stderr, '');
  });

  for (const [scenario, message] of [
    ['empty-error', /401/],
    ['connection-error', /Connection error/],
    ['invalid-json', /SyntaxError/],
  ]) {
    test(`${name}: handles ${scenario} and exits unsuccessfully`, () => {
      const result = runExample(name, scenario);
      assert.equal(result.status, 1);
      assert.match(result.stderr, message);
      assert.doesNotMatch(result.stderr, /Cannot read properties|UnhandledPromiseRejection/);
    });
  }

  test(`${name}: has a registry dependency consistent with its lockfile`, () => {
    const manifest = require(path.join(root, 'examples', name, 'package.json'));
    const lock = require(path.join(root, 'examples', name, 'package-lock.json'));
    assert.equal(manifest.dependencies.telnyx, '^7.28.0');
    assert.equal(lock.packages[''].dependencies.telnyx, manifest.dependencies.telnyx);
    assert.match(lock.packages['node_modules/telnyx'].resolved, /^https:\/\/registry\.npmjs\.org\/telnyx\//);
  });
  test(`${name}: reports structured API errors without a secondary exception`, () => {
    const result = runExample(name, 'api-error');
    assert.equal(result.status, 1);
    assert.match(result.stderr, /401/);
    assert.match(result.stderr, /Invalid API key/);
    assert.doesNotMatch(result.stderr, /TypeError|UnhandledPromiseRejection/);
  });
}
