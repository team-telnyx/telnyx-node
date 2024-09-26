/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-nocheck - needed due to dynamic method testing: mp[action]

import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';
import * as utils from '../../utils';

const telnyx = testUtils.getTelnyxMock();

const TEST_AUTH_KEY =
  'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

const METHODS = ['phone_numbers', 'short_codes', 'del'];

type ResponsePayloadMetrics = {
  data: {
    id: string;
    name: string;
    overview: Record<string, object>;
    detailed: {metrics: object}[];
  };
};

describe('MessagingProfiles Resource', function () {
  function responseFn(response: ResponsePayload) {
    expect(response.data).toHaveProperty('name');
    expect(response.data).toMatchObject({record_type: 'messaging_profile'});
  }

  function errorFn(err: unknown) {
    console.log(err);

    throw err;
  }

  describe('retrieve', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles
        .retrieve(TEST_UUID)
        .then(responseFn)
        .catch(errorFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn)
        .catch(errorFn);
    });
  });

  describe('create', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles
        .create({name: 'Summer Campaign', whitelisted_destinations: ['US']})
        .then(responseFn)
        .catch(errorFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles
        .create(
          {name: 'Summer Campaign', whitelisted_destinations: ['US']},
          TEST_AUTH_KEY,
        )
        .then(responseFn)
        .catch(errorFn);
    });

    test('Sends the correct request [with specified auth in options]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles
        .create(
          {name: 'Summer Campaign', whitelisted_destinations: ['US']},
          {api_key: TEST_AUTH_KEY},
        )
        .then(responseFn)
        .catch(errorFn);
    });
  });

  describe('update', function () {
    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles
        .update(TEST_UUID, {name: 'Foo "baz"'})
        .then(responseFn)
        .catch(errorFn);
    });
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('name');
      expect(response.data[0]).toMatchObject({
        record_type: 'messaging_profile',
      });
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles.list().then(responseFn).catch(errorFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyx.messagingProfiles
        .list(TEST_AUTH_KEY)
        .then(responseFn)
        .catch(errorFn);
    });
  });

  describe('PhoneNumbers methods', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('phone_number');
      expect(response.data[0]).toHaveProperty('messaging_profile_id');
      expect(response.data[0]).toMatchObject({
        record_type: 'messaging_settings',
      });
    }

    describe('listPhoneNumbers', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.messagingProfiles
          .listPhoneNumbers(TEST_UUID)
          .then(responseFn)
          .catch(errorFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.messagingProfiles
          .listPhoneNumbers(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn)
          .catch(errorFn);
      });
    });
  });

  describe('ShortCodes methods', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('short_code');
      expect(response.data[0]).toHaveProperty('messaging_profile_id');
      expect(response.data[0]).toMatchObject({record_type: 'short_code'});
    }

    describe('listShortCodes', function () {
      test('Sends the correct request', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.messagingProfiles
          .listShortCodes(TEST_UUID)
          .then(responseFn)
          .catch(errorFn);
      });

      test('Sends the correct request [with specified auth]', function () {
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        return telnyx.messagingProfiles
          .listShortCodes(TEST_UUID, TEST_AUTH_KEY)
          .then(responseFn)
          .catch(errorFn);
      });
    });
  });

  describe('Nested', function () {
    function responseFn(response: ResponsePayloadList) {
      if (response.data.length) {
        expect(response.data[0]).toHaveProperty('id');
        expect(response.data[0]).toHaveProperty('record_type');
        expect(response.data[0]).toHaveProperty('messaging_profile_id');
      } else {
        expect(response.data).toHaveProperty('id');
      }
    }

    METHODS.forEach(function (action) {
      describe(action, function () {
        const camelCaseAction = utils.snakeToCamelCase(action);

        test('Sends the correct request', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyx.messagingProfiles
            .create({name: 'Summer Campaign', whitelisted_destinations: ['US']})
            .then(function (response: ResponsePayload) {
              const mp = response.data;
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              return mp[action]().then(responseFn).catch(errorFn);
            });
        });
        test('Sends the correct request [with specified auth]', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyx.messagingProfiles
            .create({name: 'Summer Campaign', whitelisted_destinations: ['US']})
            .then(function (response: ResponsePayload) {
              const mp = response.data;

              // @ts-expect-error TODO: import .d.ts files under src/test folder
              return mp[action](TEST_AUTH_KEY).then(responseFn).catch(errorFn);
            });
        });

        describe(camelCaseAction, function () {
          test('Sends the correct request', function () {
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return telnyx.messagingProfiles
              .create({
                name: 'Summer Campaign',
                whitelisted_destinations: ['US'],
              })
              .then(function (response: ResponsePayload) {
                const mp = response.data;

                // @ts-expect-error TODO: import .d.ts files under src/test folder
                return mp[camelCaseAction]().then(responseFn).catch(errorFn);
              });
          });
          test('Sends the correct request [with specified auth]', function () {
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return telnyx.messagingProfiles
              .create({
                name: 'Summer Campaign',
                whitelisted_destinations: ['US'],
              })
              .then(function (response: ResponsePayload) {
                const mp = response.data;

                // @ts-expect-error TODO: import .d.ts files under src/test folder
                return mp[camelCaseAction](TEST_AUTH_KEY)
                  .then(responseFn)
                  .catch(errorFn);
              });
          });
        });
      });
    });

    describe('Metrics methods', function () {
      function metricsNestedResponseFn(response: ResponsePayloadMetrics) {
        expect(response.data).toHaveProperty('detailed');
        expect(response.data).toHaveProperty('overview');
        expect(response.data.overview).toHaveProperty('inbound');
        expect(response.data.overview).toHaveProperty('outbound');
        expect(response.data.overview).toHaveProperty('phone_numbers');
        expect(response.data.overview).toHaveProperty('messaging_profile_id');
        expect(response.data.overview).toMatchObject({
          record_type: 'messaging_profile_metrics',
        });
        expect(response.data.detailed[0]).toHaveProperty('metrics');
      }

      describe('retrieveMetrics', function () {
        test('Sends the correct request', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyx.messagingProfiles
            .retrieveMetrics(TEST_UUID)
            .then(metricsNestedResponseFn);
        });

        test('Sends the correct request [with specified auth]', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyx.messagingProfiles
            .retrieveMetrics(TEST_UUID, TEST_AUTH_KEY)
            .then(metricsNestedResponseFn);
        });
      });

      describe('nested metrics', function () {
        test('Sends the correct request', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyx.messagingProfiles
            .create({name: 'Summer Campaign', whitelisted_destinations: ['US']})
            .then(function (response: ResponsePayload) {
              const mp = response.data;
              // @ts-expect-error TODO: import .d.ts files under src/test folder
              return mp.metrics().then(metricsNestedResponseFn);
            });
        });
        test('Sends the correct request [with specified auth]', function () {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          return telnyx.messagingProfiles.retrieve(TEST_UUID).then(function (
            response: ResponsePayload,
          ) {
            const mp = response.data;
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            return mp.metrics(TEST_AUTH_KEY).then(metricsNestedResponseFn);
          });
        });
      });
    });
  });
});
