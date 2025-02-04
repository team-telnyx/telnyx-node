import {utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

type ResponsePayloadListRegulatoryRequirement = {
  data: {
    regulatory_requirements: {metrics: object}[];
  }[];
};

describe('RegulatoryRequirements Resource', function () {
  describe('list', function () {
    function responseFn(response: ResponsePayloadListRegulatoryRequirement) {
      expect(response.data[0]).toHaveProperty('phone_number_type');
      expect(response.data[0]).toHaveProperty('action');
      expect(response.data[0]).toHaveProperty('phone_number_type');
      expect(response.data[0]).toHaveProperty('regulatory_requirements');
      expect(response.data[0]?.regulatory_requirements[0]).toHaveProperty(
        'acceptance_criteria',
      );
      expect(response.data[0]?.regulatory_requirements[0]).toHaveProperty(
        'description',
      );
      expect(response.data[0]?.regulatory_requirements[0]).toHaveProperty('id');
      expect(response.data[0]?.regulatory_requirements[0]).toHaveProperty(
        'name',
      );
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
