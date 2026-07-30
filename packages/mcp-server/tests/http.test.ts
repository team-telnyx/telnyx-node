import type { AddressInfo } from 'node:net';

import { streamableHTTPApp } from '../src/http';

const initializeRequest = {
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: {
    protocolVersion: '2025-06-18',
    capabilities: {},
    clientInfo: { name: 'telnyx-http-regression-test', version: '1.0.0' },
  },
};

describe('streamable HTTP transport', () => {
  it('creates a fresh stateless transport for each initialize request', async () => {
    const listener = streamableHTTPApp({}).listen(0, '127.0.0.1');
    await new Promise<void>((resolve) => listener.once('listening', resolve));

    try {
      const { port } = listener.address() as AddressInfo;
      const endpoint = `http://127.0.0.1:${port}/`;

      for (let requestNumber = 0; requestNumber < 2; requestNumber += 1) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/event-stream',
            Authorization: 'Bearer KEY_http_transport_test_only',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...initializeRequest, id: requestNumber + 1 }),
        });

        expect(response.status).toBe(200);
        expect(response.headers.get('mcp-session-id')).toBeNull();
        const body = await response.text();
        expect(body).toContain('"protocolVersion":"2025-06-18"');
        expect(body).toContain('"name":"telnyx_api"');
      }
    } finally {
      await new Promise<void>((resolve, reject) => {
        listener.close((error) => (error ? reject(error) : resolve()));
      });
    }
  });
});
