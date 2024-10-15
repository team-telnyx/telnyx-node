import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('WirelessDetailRecordReports Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('status');
    expect(response.data).toHaveProperty('start_time');
    expect(response.data).toHaveProperty('end_time');
    expect(response.data).toHaveProperty('report_url');
    expect(response.data).toMatchObject({record_type: 'detail_records_report'});
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports
        .retrieve('12ade33a-21c0-473b-b055-b3c836e1c292')
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports
        .retrieve('12ade33a-21c0-473b-b055-b3c836e1c292', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('status');
      expect(response.data[0]).toHaveProperty('start_time');
      expect(response.data[0]).toHaveProperty('end_time');
      expect(response.data[0]).toHaveProperty('report_url');
      expect(response.data[0]).toMatchObject({
        record_type: 'detail_records_report',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports
        .list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports
        .create({
          start_time: '2018-02-01T22:25:27.521Z',
          end_time: '2018-02-02T22:25:27.521Z',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports
        .create(
          {
            start_time: '2018-02-01T22:25:27.521Z',
            end_time: '2018-02-02T22:25:27.521Z',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('del', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports
        .del('12ade33a-21c0-473b-b055-b3c836e1c292')
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.wirelessDetailRecordReports
        .del('12ade33a-21c0-473b-b055-b3c836e1c292', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
