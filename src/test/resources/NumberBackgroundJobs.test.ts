import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('NumberBackgroundJobs resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('failed_operations');
    expect(response.data).toHaveProperty('successful_operations');
    expect(response.data).toHaveProperty('pending_operations');
    expect(response.data).toMatchObject({record_type: 'phone_numbers_job'});
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberBackgroundJobs.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberBackgroundJobs
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('failed_operations');
      expect(response.data[0]).toHaveProperty('successful_operations');
      expect(response.data[0]).toHaveProperty('pending_operations');
      expect(response.data[0]).toMatchObject({
        record_type: 'phone_numbers_job',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberBackgroundJobs.list().then(responseFn);
    });
  });

  describe('updateEmergencySettings', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberBackgroundJobs
        .updateEmergencySettings({
          emergency_address_id: '123',
          emergency_enabled: true,
          phone_numbers: ['+15555555555'],
        })
        .then(responseFn);
    });
  });

  describe('updateNumbers', function () {
    test('sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberBackgroundJobs
        .updateNumbers({
          phone_numbers: ['+15555555555'],
          billing_group_id: '123',
        })
        .then(responseFn);
    });
  });

  describe('deleteNumbers', function () {
    test('sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.numberBackgroundJobs
        .deleteNumbers({
          phone_numbers: ['+15555555555'],
          billing_group_id: '123',
        })
        .then(responseFn);
    });
  });
});
