import { IncomingMessage } from 'node:http';
import { AddressInfo } from 'node:net';
import { isMcpServerRequestAuthorized } from '../src/auth';
import { streamableHTTPApp } from '../src/http';
import { configureLogger } from '../src/logger';

const requestWithHeaders = (headers: IncomingMessage['headers']): IncomingMessage =>
  ({ headers }) as IncomingMessage;

describe('isMcpServerRequestAuthorized', () => {
  it('rejects requests when the server key is not configured', () => {
    const req = requestWithHeaders({ 'x-mcp-server-api-key': 'presented-key' });

    expect(isMcpServerRequestAuthorized(req, undefined)).toBe(false);
  });

  it('rejects missing and invalid keys', () => {
    expect(isMcpServerRequestAuthorized(requestWithHeaders({}), 'expected-key')).toBe(false);
    expect(
      isMcpServerRequestAuthorized(
        requestWithHeaders({ 'x-mcp-server-api-key': 'invalid-key' }),
        'expected-key',
      ),
    ).toBe(false);
  });

  it('accepts only the configured server key', () => {
    const req = requestWithHeaders({ 'x-mcp-server-api-key': 'expected-key' });

    expect(isMcpServerRequestAuthorized(req, 'expected-key')).toBe(true);
  });

  it('rate limits repeated authentication attempts without limiting health checks', async () => {
    configureLogger({ level: 'fatal', pretty: false });
    const app = streamableHTTPApp({
      mcpOptions: { codeExecutionMode: 'local', serverApiKey: 'expected-key' },
    });
    const server = app.listen(0, '127.0.0.1');
    await new Promise<void>((resolve) => server.once('listening', resolve));

    try {
      const { port } = server.address() as AddressInfo;
      const rootURL = `http://127.0.0.1:${port}/`;

      for (let attempt = 0; attempt < 60; attempt += 1) {
        expect((await fetch(rootURL)).status).toBe(401);
      }
      expect((await fetch(rootURL)).status).toBe(429);
      expect((await fetch(`http://127.0.0.1:${port}/health`)).status).toBe(200);
    } finally {
      await new Promise<void>((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve())),
      );
    }
  });
});
