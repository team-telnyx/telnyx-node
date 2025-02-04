import {type ResponsePayloadList, utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

describe('Documents Links', function () {
  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.documentLinks.list().then(function (
        response: ResponsePayloadList,
      ) {
        expect(response).toHaveProperty('data');
        expect(response).toHaveProperty('meta');
      });
    });
  });
});
