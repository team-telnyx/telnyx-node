import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe.skip('RegulatoryRequirements Resource', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('requirement_type');
      expect(response.data).toHaveProperty('label');
      expect(response.data).toHaveProperty('description');
      expect(response.data).toHaveProperty('field_type');
      expect(response.data).toMatchObject({
        record_type: 'regulatory_requirement',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.regulatoryRequirements.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.regulatoryRequirements
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('requirement_type');
      expect(response.data[0]).toHaveProperty('label');
      expect(response.data[0]).toHaveProperty('description');
      expect(response.data[0]).toHaveProperty('field_type');
      expect(response.data[0]).toMatchObject({
        record_type: 'regulatory_requirement',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.regulatoryRequirements.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.regulatoryRequirements.list(TEST_AUTH_KEY).then(responseFn);
    });
  });
});
