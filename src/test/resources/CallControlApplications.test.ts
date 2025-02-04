import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();

describe('Call Control List list', function () {
  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications.retrieve('123').then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications
        .retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response.data).toHaveProperty('id');
      expect(response.data).toMatchObject({
        record_type: 'call_control_application',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications
        .create({
          application_name: 'test',
          webhook_event_url: 'https://fakeurl.org/123123',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications
        .create(
          {
            application_name: 'test',
            webhook_event_url: 'https://fakeurl.org/123123',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications
        .create(
          {
            application_name: 'test',
            webhook_event_url: 'https://fakeurl.org/123123',
          },
          {api_key: TEST_AUTH_KEY},
        )
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toMatchObject({
        record_type: 'call_control_application',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications.list().then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications
        .list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toMatchObject({
          record_type: 'call_control_application',
        });
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications
        .create({
          application_name: 'test',
          webhook_event_url: 'https://fakeurl.org/123123',
        })
        .then(function (response: ResponsePayload) {
          const callControlApplications = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return callControlApplications.del().then(responseFn);
        });
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications.retrieve('123').then(function (
        response: ResponsePayload,
      ) {
        const callControlApplications = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return callControlApplications.del(TEST_AUTH_KEY).then(responseFn);
      });
    });
  });

  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('application_name');
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications
        .create({
          application_name: 'test',
          webhook_event_url: 'https://fakeurl.org/123123',
        })
        .then(function (response: ResponsePayload) {
          const ip = response.data;
          return (
            ip
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              .update({
                application_name: 'test updated',
                webhook_event_url: 'https://fakeurl.org/123123',
              })
              .then(responseFn)
          );
        });
    });
    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.callControlApplications.retrieve('123').then(function (
        response: ResponsePayload,
      ) {
        const ip = response.data;
        return (
          ip
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            .update(
              {
                application_name: 'test updated',
                webhook_event_url: 'https://fakeurl.org/123123',
              },
              TEST_AUTH_KEY,
            )
            .then(responseFn)
        );
      });
    });
  });
});
