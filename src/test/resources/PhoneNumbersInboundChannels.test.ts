import {type ResponsePayload, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Phone Numbers Inbound Channels', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toMatchObject({
        record_type: 'inbound_channels',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbersInboundChannels.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbersInboundChannels
        .list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toMatchObject({channels: 7});
        expect(response.data).toMatchObject({record_type: 'inbound_channels'});
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbersInboundChannels
        .update({channels: 8})
        .then(responseFn);
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.phoneNumbersInboundChannels
        .update({channels: 8}, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
