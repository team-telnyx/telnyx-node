/* eslint-disable @typescript-eslint/ban-ts-comment */

import {utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

describe('Balance Resource', function () {
  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.balance.retrieve().then(function (
        response: Record<string, unknown>,
      ) {
        expect(response.data).toHaveProperty('record_type', 'balance');
        expect(response.data).toHaveProperty('balance');
        expect(response.data).toHaveProperty('available_credit');
        expect(response.data).toHaveProperty('currency');
        expect(response.data).toHaveProperty('credit_limit');
      });
    });
  });
});
