// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

jest.mock('telnyx', () => ({ Telnyx: class {} }), { virtual: true });

import { makeSdkProxy } from '../src/code-tool-worker';

type FakeClient = {
  messages: {
    create: jest.Mock<string, []>;
    list: jest.Mock<string, []>;
  };
  calls: {
    create: jest.Mock<string, []>;
  };
  withOptions: () => FakeClient;
};

const makeClient = () => {
  const sharedCreate = jest.fn(() => 'created');
  const client: FakeClient = {
    messages: {
      create: sharedCreate,
      list: jest.fn(() => 'listed'),
    },
    calls: {
      create: sharedCreate,
    },
    withOptions() {
      return this;
    },
  };
  const rootPath = ['client'];
  return {
    client,
    proxy: makeSdkProxy(client, {
      path: rootPath,
      rootPath,
      blockedMethodNames: new Set(['messages.create']),
    }),
  };
};

describe('makeSdkProxy method restrictions', () => {
  test('allows methods that are not blocked', () => {
    const { proxy } = makeClient();

    expect(proxy.messages.list()).toBe('listed');
  });

  test('blocks direct method invocation', () => {
    const { client, proxy } = makeClient();

    expect(() => proxy.messages.create()).toThrow('SDK method messages.create has been blocked');
    expect(client.messages.create).not.toHaveBeenCalled();
  });

  test('blocks computed property invocation', () => {
    const { proxy } = makeClient();
    const methodName = 'cre' + 'ate';

    expect(() => proxy.messages[methodName as 'create']()).toThrow(
      'SDK method messages.create has been blocked',
    );
  });

  test('blocks aliased and destructured methods', () => {
    const { proxy } = makeClient();
    const aliased = proxy.messages.create;
    const { create } = proxy.messages;

    expect(() => aliased()).toThrow('SDK method messages.create has been blocked');
    expect(() => create()).toThrow('SDK method messages.create has been blocked');
  });

  test('blocks call, apply, and bound invocation', () => {
    const { proxy } = makeClient();
    const bound = proxy.messages.create.bind(proxy.messages);

    expect(() => proxy.messages.create.call(proxy.messages)).toThrow(
      'SDK method messages.create has been blocked',
    );
    expect(() => proxy.messages.create.apply(proxy.messages)).toThrow(
      'SDK method messages.create has been blocked',
    );
    expect(() => bound()).toThrow('SDK method messages.create has been blocked');
  });

  test('blocks methods obtained through property descriptors', () => {
    const { proxy } = makeClient();
    const descriptor = Object.getOwnPropertyDescriptor(proxy.messages, 'create');
    const create = descriptor?.value as FakeClient['messages']['create'];

    expect(() => create()).toThrow('SDK method messages.create has been blocked');
  });

  test('keeps method paths separate when resources share a function object', () => {
    const { proxy } = makeClient();

    expect(proxy.calls.create()).toBe('created');
    expect(() => proxy.messages.create()).toThrow('SDK method messages.create has been blocked');
  });

  test('preserves restrictions on synchronously returned clients', () => {
    const { proxy } = makeClient();
    const configuredClient = proxy.withOptions();

    expect(() => configuredClient.messages.create()).toThrow('SDK method messages.create has been blocked');
  });

  test('prevents proxy hardening from exposing an unwrapped prototype', () => {
    const { proxy } = makeClient();

    expect(() => Object.preventExtensions(proxy.messages)).toThrow(
      'SDK client proxy cannot be made non-extensible',
    );
  });
});
