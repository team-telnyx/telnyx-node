import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

try {
  execFileSync('deno', ['--version'], { stdio: 'ignore' });
} catch {
  throw new Error('Deno is required for the execute integration test');
}

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arbitrarySecretName = 'MCP_TEST_SERVER_SECRET';
const primaryClientEnvName = 'TELNYX_API_KEY';
const allowlistedSecretName = 'TELNYX_PUBLIC_KEY';
const hasDistinctAllowlistedSecret = allowlistedSecretName !== primaryClientEnvName;
let temporaryRoot;
let client;
let stderr = '';

try {
  let serverPath = process.env.MCP_SERVER_PATH;
  if (!serverPath) {
    temporaryRoot = mkdtempSync(path.join(tmpdir(), 'sdk-mcp-deno-execute-'));
    const packResult = JSON.parse(
      execFileSync(
        'npm',
        ['pack', path.join(packageRoot, 'dist'), '--pack-destination', temporaryRoot, '--json'],
        {
          encoding: 'utf8',
        },
      ),
    );
    assert.equal(packResult.length, 1, JSON.stringify(packResult));

    const installRoot = path.join(temporaryRoot, 'install');
    mkdirSync(installRoot);
    const tarballPath = path.join(temporaryRoot, packResult[0].filename);
    execFileSync(
      'npm',
      ['install', '--ignore-scripts', '--no-audit', '--no-fund', '--prefix', installRoot, tarballPath],
      { stdio: 'inherit' },
    );

    const installedPackageRoot = path.join(installRoot, 'node_modules', 'telnyx-mcp');
    const installedPackage = JSON.parse(
      readFileSync(path.join(installedPackageRoot, 'package.json'), 'utf8'),
    );
    serverPath = path.resolve(installedPackageRoot, installedPackage.main);
  }

  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [serverPath],
    env: {
      ...process.env,
      [primaryClientEnvName]: 'test-only-not-a-real-credential',
      ...(hasDistinctAllowlistedSecret ?
        { [allowlistedSecretName]: 'allowlisted-name-must-not-reach-the-code-worker' }
      : {}),
      [arbitrarySecretName]: 'arbitrary-name-must-not-reach-the-code-worker',
    },
    stderr: 'pipe',
  });
  transport.stderr?.on('data', (chunk) => {
    stderr += chunk.toString();
  });

  client = new Client({ name: 'deno-execute-integration', version: '1.0.0' });
  await client.connect(transport);
  const result = await client.callTool({
    name: 'execute',
    arguments: {
      code: `async function run(client) {
  let arbitraryServerSecret = "readable";
  try {
    arbitraryServerSecret = (globalThis as any).Deno.env.get("${arbitrarySecretName}") ?? "missing";
  } catch {
    arbitraryServerSecret = "denied";
  }
  const allowlistedServerSecret = ${
    hasDistinctAllowlistedSecret ?
      `(globalThis as any).Deno.env.get("${allowlistedSecretName}") ?? "missing"`
    : `"not-applicable"`
  };
  return { value: 42, arbitraryServerSecret, allowlistedServerSecret };
}`,
    },
  });

  assert.equal(result.isError, undefined, JSON.stringify(result));
  assert.deepEqual(result.content, [
    {
      type: 'text',
      text: JSON.stringify({
        value: 42,
        arbitraryServerSecret: 'denied',
        allowlistedServerSecret: hasDistinctAllowlistedSecret ? 'missing' : 'not-applicable',
      }),
    },
  ]);
  console.log('Deno execute integration test passed');
} catch (error) {
  if (stderr) console.error(stderr);
  throw error;
} finally {
  try {
    await client?.close();
  } finally {
    if (temporaryRoot) rmSync(temporaryRoot, { recursive: true, force: true });
  }
}
