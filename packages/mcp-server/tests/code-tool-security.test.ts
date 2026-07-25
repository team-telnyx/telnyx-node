import { buildCodeWorkerEnvironment } from '../src/code-tool';

describe('buildCodeWorkerEnvironment', () => {
  it('does not forward inherited server secrets', () => {
    const { env, readableClientEnvNames } = buildCodeWorkerEnvironment({
      serverEnv: {
        PATH: '/usr/bin',
        HOME: '/home/mcp',
        API_KEY: 'server-secret',
        UNRELATED_SECRET: 'another-secret',
      },
      clientEnv: undefined,
      allowedClientEnvNames: ['API_KEY'],
    });

    expect(env).toEqual({ PATH: '/usr/bin', HOME: '/home/mcp' });
    expect(env).not.toHaveProperty('API_KEY');
    expect(env).not.toHaveProperty('UNRELATED_SECRET');
    expect(readableClientEnvNames).toEqual([]);
  });

  it('forwards only recognized string-valued client variables', () => {
    const { env, readableClientEnvNames } = buildCodeWorkerEnvironment({
      serverEnv: { PATH: '/usr/bin', SERVER_SECRET: 'not-forwarded' },
      clientEnv: {
        API_KEY: 'client-key',
        PATH: '/attacker/bin',
        UNRELATED_SECRET: 'not-allowed',
        INVALID_VALUE: 123,
      },
      allowedClientEnvNames: ['API_KEY', 'INVALID_VALUE'],
    });

    expect(env).toEqual({ PATH: '/usr/bin', API_KEY: 'client-key' });
    expect(readableClientEnvNames).toEqual(['API_KEY']);
  });
});
