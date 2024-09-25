import {utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();
const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

type ResponsePayloadList = {
  data: {
    record_type: string;
    messaging_profile_id: string;
    inbound: object;
    outbound: object;
    phone_numbers: number;
  }[];
};

describe('MessagingProfileMetrics Resource', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('inbound');
      expect(response.data[0]).toHaveProperty('outbound');
      expect(response.data[0]).toHaveProperty('phone_numbers');
      expect(response.data[0]).toHaveProperty('messaging_profile_id');
      expect(response.data[0]).toMatchObject({
        record_type: 'messaging_profile_metrics',
      });
    }

    it('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfileMetrics.list().then(responseFn);
    });
    it('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfileMetrics
        .list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
