import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('OutboundVoiceProfiles', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('billing_group_id');
    expect(response.data).toMatchObject({
      record_type: 'outbound_voice_profile',
    });
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles.retrieve(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles
        .create({
          billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
          concurrent_call_limit: 10,
          name: 'name',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles
        .create(
          {
            billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
            concurrent_call_limit: 10,
            name: 'name',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles
        .create(
          {
            billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
            concurrent_call_limit: 10,
            name: 'name',
          },
          {api_key: TEST_AUTH_KEY},
        )
        .then(responseFn);
    });
  });

  describe('list', function () {
    function listResponseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('billing_group_id');
      expect(response.data[0]).toMatchObject({
        record_type: 'outbound_voice_profile',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles.list().then(listResponseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles
        .list(TEST_AUTH_KEY)
        .then(listResponseFn);
    });
  });

  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toMatchObject({
          record_type: 'outbound_voice_profile',
        });
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles
        .create({
          billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
          name: 'name',
        })
        .then(function (response: ResponsePayload) {
          const outboundVoiceProfiles = response.data;
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return outboundVoiceProfiles.del().then(responseFn);
        });
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const outboundVoiceProfiles = response.data;
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return outboundVoiceProfiles.del(TEST_AUTH_KEY).then(responseFn);
      });
    });
  });

  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      if (response.data) {
        expect(response.data).toHaveProperty('id');
        expect(response.data).toMatchObject({concurrent_call_limit: 12});
      }
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles
        .create({
          billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c58',
          concurrent_call_limit: 10,
          name: 'name',
        })
        .then(function (response: ResponsePayload) {
          const ip = response.data;
          return (
            ip
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              .update({
                billing_group_id: '6a09cdc3-8948-47f0-aa62-74ac943d6c59',
                concurrent_call_limit: 12,
              })
              .then(responseFn)
          );
        });
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.outboundVoiceProfiles.retrieve(TEST_UUID).then(function (
        response: ResponsePayload,
      ) {
        const ip = response.data;
        return (
          ip
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            .update({concurrent_call_limit: 12}, TEST_AUTH_KEY)
            .then(responseFn)
        );
      });
    });
  });
});
