import {type ResponsePayloadList, utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

describe('AvailablePhoneNumbers Resource', function () {
  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.availablePhoneNumbers.list().then(function (
        response: ResponsePayloadList,
      ) {
        expect(response.data[0]).toHaveProperty('phone_number');
        expect(response.data[0]).toHaveProperty('cost_information');
        expect(response.data[0]).toHaveProperty('region_information');
        expect(response.data[0]).toMatchObject({
          record_type: 'available_phone_number',
        });
      });
    });
  });
});
