/* eslint-disable @typescript-eslint/ban-ts-comment */

import {utils} from '../utils';

const telnyx = utils.getTelnyxMock();

describe('Balance Resource', function () {
  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-ignore TODO: import .d.ts files under src/test folder
      return telnyx.balance.retrieve().then(function (response) {
        expect(response.data).toHaveProperty('record_type', 'balance');
        expect(response.data).toHaveProperty('balance');
        expect(response.data).toHaveProperty('available_credit');
        expect(response.data).toHaveProperty('currency');
        expect(response.data).toHaveProperty('credit_limit');
      });
    });
  });
});
