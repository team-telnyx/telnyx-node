describe('TextToSpeechWS optional ws peer', () => {
  afterEach(() => {
    jest.dontMock('ws');
    jest.resetModules();
  });

  test('imports the SDK when ws is not installed', () => {
    jest.resetModules();
    jest.doMock('ws', () => {
      throw new Error('Cannot find module ws');
    });

    expect(() => require('telnyx')).not.toThrow();
  });

  test('only requires ws when constructing the websocket client', () => {
    jest.resetModules();
    jest.doMock('ws', () => {
      throw new Error('Cannot find module ws');
    });

    const Telnyx = require('telnyx').default;
    const { TextToSpeechWS } = require('telnyx/resources/text-to-speech/ws');
    const client = new Telnyx({ apiKey: 'My API Key' });

    expect(() => new TextToSpeechWS(client)).toThrow(/requires the optional "ws" package/);
  });
});
