import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Phone Numbers Voice Resource', function () {
  function responseFn(response: ResponsePayloadList) {
    expect(response.data[0]).toMatchObject({
      record_type: 'voice_settings',
    });
    expect(response.data[0]).toHaveProperty('id');
    expect(response.data[0]).toHaveProperty('translated_number');
    expect(response.data[0]).toHaveProperty('connection_id');
  }

  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.voice.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbers.voice.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
