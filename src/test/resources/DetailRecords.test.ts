import {type ResponsePayloadList, utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

describe('DetailRecords Resource', function () {
  function responseFn(response: ResponsePayloadList) {
    expect(response).toHaveProperty('data');
    for (let index = 0; index < response.data.length; index++) {
      const row = response.data[index];
      expect(row).toHaveProperty('record_type');
      expect(row).toHaveProperty('uuid');
    }
  }

  describe('search', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.detailRecords
        .search({
          // limitation on prism mock
          'filter%5brecord_type%5d': 'messaging',
        })
        .then(responseFn);
    });
  });
});
