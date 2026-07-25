import { IncomingMessage } from 'node:http';
import { isMcpServerRequestAuthorized } from '../src/auth';

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
});
