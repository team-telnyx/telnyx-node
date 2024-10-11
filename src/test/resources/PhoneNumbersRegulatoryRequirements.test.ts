import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

type ResponsePayloadPhoneNumberRegulatoryRequirements = ResponsePayloadList & {
  data: {
    regulatory_requirements: object[];
  }[];
};

describe('PhoneNumberRegulatoryRequirements Resource', function () {
  describe('list', function () {
    function responseFn(
      response: ResponsePayloadPhoneNumberRegulatoryRequirements,
    ) {
      expect(response.data[0]).toHaveProperty('phone_number');
      expect(response.data[0]).toHaveProperty('regulatory_requirements');
      expect(response.data[0]).toMatchObject({
        record_type: 'phone_number_regulatory_requirements',
      });
      expect(response.data[0]?.regulatory_requirements[0]).toHaveProperty(
        'label',
      );
      expect(response.data[0]?.regulatory_requirements[0]).toHaveProperty(
        'field_type',
      );
      expect(response.data[0]?.regulatory_requirements[0]).toHaveProperty(
        'acceptance_criteria',
      );
      expect(response.data[0]?.regulatory_requirements[0]).toMatchObject({
        record_type: 'regulatory_requirement',
      });
    }

    test('Sends the correct request', function () {
      return (
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        telnyx.phoneNumbersRegulatoryRequirements
          // this is due to https://github.com/stoplightio/prism/issues/2443
          .list({'filter%5bphone_number%5d': '5120000000'})
          .then(responseFn)
      );
    });

    test('Sends the correct request [with specified auth]', function () {
      return (
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        telnyx.phoneNumbersRegulatoryRequirements
          // this is due to https://github.com/stoplightio/prism/issues/2443
          .list({'filter%5bphone_number%5d': '5120000000'}, TEST_AUTH_KEY)
          .then(responseFn)
      );
    });
  });
});
