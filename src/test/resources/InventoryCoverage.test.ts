import {type ResponsePayloadList, utils as testUtils} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('InventoryCoverage Resource', function () {
  // not included in the spec
  describe.skip('request', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('number_type');
      expect(response.data[0]).toHaveProperty('group');
      expect(response.data[0]).toHaveProperty('group_type');
      expect(response.data[0]).toHaveProperty('coverage_type');
      expect(response.data[0]).toHaveProperty('phone_number_type');
      expect(response.data[0]).toHaveProperty('number_range');
      expect(response.data[0]).toMatchObject({
        record_type: 'inventory_coverage_group',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.inventoryCoverage
        .request({
          filter: {npa: '318', nxx: '202', country_code: 'US', groupBy: 'nxx'},
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.inventoryCoverage
        .request(
          {
            filter: {
              npa: '318',
              nxx: '202',
              country_code: 'US',
              groupBy: 'nxx',
            },
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });
});
