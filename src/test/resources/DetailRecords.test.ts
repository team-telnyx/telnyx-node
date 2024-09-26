import {type ResponsePayloadList, utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

describe('DetailRecords Resource', function () {
  function responseFn(response: ResponsePayloadList) {
    expect(response.data).toHaveProperty('data');
    for (let index = 0; index < response.data.length; index++) {
      const row = response.data[index];
      expect(row).toHaveProperty('record_type');
      expect(row).toHaveProperty('uuid');
    }
  }

  describe.skip('query', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.detailRecords
        .query({filter: {record_type: 'messaging'}})
        .then(responseFn);
    });
  });
});
