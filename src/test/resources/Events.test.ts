import {utils as testUtils} from '../utils';

const telnyx = testUtils.getSpyableTelnyx();

describe('Events Resource', function () {
  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      telnyx.events.retrieve('eventIdBaz');
      expect(telnyx.LAST_REQUEST).toStrictEqual({
        auth: null,
        method: 'GET',
        url: '/v2/events/eventIdBaz',
        headers: {},
        data: {},
      });
    });
  });

  describe('list', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      telnyx.events.list({page: {size: 25}});
      expect(telnyx.LAST_REQUEST).toStrictEqual({
        auth: null,
        method: 'GET',
        url: '/v2/events',
        headers: {},
        data: {page: {size: 25}},
      });
    });
  });
});
