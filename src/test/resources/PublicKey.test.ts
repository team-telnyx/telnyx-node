import {type ResponsePayload, utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

describe.skip('PublicKey Resource', function () {
  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.publicKey.retrieve().then(function (
        response: ResponsePayload,
      ) {
        expect(response.data).toMatchObject({record_type: 'public_key'});
        expect(response.data).toHaveProperty('public');
        expect(response.data).toHaveProperty('organization_id');
      });
    });
  });
});
