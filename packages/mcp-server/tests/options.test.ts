import { parseCLIOptions, parseQueryOptions } from '../src/options';

// Mock process.argv
const mockArgv = (args: string[]) => {
  const originalArgv = process.argv;
  process.argv = ['node', 'test.js', ...args];
  return () => {
    process.argv = originalArgv;
  };
};

describe('parseCLIOptions', () => {
  it('default parsing should be stdio', () => {
    const cleanup = mockArgv([]);

    const result = parseCLIOptions();

    expect(result.transport).toBe('stdio');

    cleanup();
  });

  it('using http transport with a port', () => {
    const cleanup = mockArgv(['--transport=http', '--port=2222']);

    const result = parseCLIOptions();

    expect(result.transport).toBe('http');
    expect(result.host).toBe('127.0.0.1');
    expect(result.port).toBe(2222);
    expect(result.includeCodeTool).toBe(false);
    cleanup();
  });

  it('allows an explicit remote host and code-tool opt-in for HTTP', () => {
    const cleanup = mockArgv([
      '--transport=http',
      '--host=0.0.0.0',
      '--tools=code',
      '--server-api-key=test-server-key',
    ]);

    const result = parseCLIOptions();

    expect(result.host).toBe('0.0.0.0');
    expect(result.includeCodeTool).toBe(true);
    expect(result.serverApiKey).toBe('test-server-key');
    cleanup();
  });

  it('does not let HTTP query options re-enable a disabled code tool', () => {
    const cleanup = mockArgv(['--transport=http', '--server-api-key=test-server-key']);
    const defaults = parseCLIOptions();

    const result = parseQueryOptions(defaults, { tools: ['code'] });

    expect(result.includeCodeTool).toBe(false);
    expect(result.serverApiKey).toBe('test-server-key');
    expect(result.host).toBe('127.0.0.1');
    cleanup();
  });
});
