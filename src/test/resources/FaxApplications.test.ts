import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Fax Applications list', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toMatchObject({record_type: 'fax_application'});
  }

  const createFaxData = {
    application_name: 'test',
    webhook_event_url: 'https://fakeurl.com/123123',
  };

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.create(createFaxData).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications
        .create(createFaxData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications
        .create(createFaxData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toMatchObject({record_type: 'fax_application'});
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.list(TEST_AUTH_KEY).then(listResponseFn);
    });
  });

  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toMatchObject({record_type: 'fax_application'});
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.create(createFaxData).then(function (
        response: ResponsePayload,
      ) {
        const faxApplications = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return faxApplications.del().then(responseFn);
      });
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.retrieve('123').then(function (
        response: ResponsePayload,
      ) {
        const faxApplications = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return faxApplications.del(TEST_AUTH_KEY).then(responseFn);
      });
    });
  });

  describe('update', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.create(createFaxData).then(function (
        response: ResponsePayload,
      ) {
        const ip = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return ip.update(createFaxData).then(responseFn);
      });
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.faxApplications.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const ip = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return ip.update(createFaxData, TEST_AUTH_KEY).then(responseFn);
      });
    });
  });
});
