import {type ResponsePayload, utils as testUtils} from '../utils';

const telnyx = testUtils.getTelnyxMock();

describe('NumberLookup Resource', function () {
  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberLookup.retrieve('+18665552368').then(function (
        response: ResponsePayload,
      ) {
        expect(response.data).toMatchObject({record_type: 'number_lookup'});
        expect(response.data).toHaveProperty('country_code');
        expect(response.data).toHaveProperty('fraud');
        expect(response.data).toHaveProperty('phone_number');
        expect(response.data).toHaveProperty('national_format');
        expect(response.data).toHaveProperty('portability');
      });
    });
  });
});
