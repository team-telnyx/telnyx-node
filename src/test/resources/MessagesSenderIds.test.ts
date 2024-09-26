import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

type ResponsePayloadMessages = ResponsePayload & {
  data: {
    from: string;
    to: string[];
  };
};

describe.skip('Messages Alphanumeric Sender Ids Resource', function () {
  const createData = {
    text: 'Hello, World!',
    from: '+18665552368',
    to: [{address: '+18665552367'}],
    messaging_profile_id: '073dd98e-0c85-496b-970f-dd3b7ae21c2se',
  };

  function responseFn(response: ResponsePayloadMessages) {
    expect(response.data).toMatchObject({
      text: 'Hello, World!',
      from: '+18665552368',
    });
    expect(response.data.to[0]).toMatchObject({address: '+18665552367'});
  }

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages.alphanumericSenderId
        .create(createData)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages.alphanumericSenderId
        .create(createData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messages.alphanumericSenderId
        .create(createData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });
});
