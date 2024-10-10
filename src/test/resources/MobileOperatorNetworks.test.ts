import {type ResponsePayloadList, utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

// 500 Error - Request terminated with error: https://stoplight.io/prism/errors#NO_COMPLEX_OBJECT_TEXT: Cannot serialise complex objects as text -- spec has nested $refs
describe.skip('MobileOperatorNetworks Resource', function () {
  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.mobileOperatorNetworks.list().then(function (
        response: ResponsePayloadList,
      ) {
        expect(response.data[0]).toMatchObject({
          record_type: 'mobile_operator_network',
        });

        ['id', 'tadig', 'name', 'mnc', 'mcc', 'country_code'].forEach(
          (property) => {
            expect(response.data[0]).toHaveProperty(property);
          },
        );
      });
    });
  });
});
