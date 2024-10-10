import nock from 'nock';
import {utils as testUtils} from './utils';
import TelnyxNode from '../telnyx.node';
import {ResponsePayload} from '../Types';

// Use a real instance of telnyx as we're mocking the http.request responses.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const realTelnyx: (typeof TelnyxNode)['prototype'] = new (TelnyxNode as any)(
  testUtils.getUserTelnyxKey(),
);

const telnyx = testUtils.getSpyableTelnyx();

describe('TelnyxResource', function () {
  describe('createResourcePathWithSymbols', function () {
    test('Generates a path', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      telnyx.messagingProfiles.create({});
      const path = // @ts-expect-error TODO: import .d.ts files under src/test folder
        telnyx.messagingProfiles.createResourcePathWithSymbols('{id}');
      expect(path).toBe('/messaging_profiles/{id}');
    });
  });

  describe('_defaultHeaders', function () {
    test('sets the Authorization header with Bearer auth using the global API key', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const headers = telnyx.messagingProfiles._defaultHeaders(null, '');
      expect(headers.Authorization).toBe('Bearer fakeAuthToken');
    });
    test('sets the Authorization header with Bearer auth using the specified API key', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const headers = telnyx.messagingProfiles._defaultHeaders(
        'anotherFakeAuthToken',
        '',
      );
      expect(headers.Authorization).toBe('Bearer anotherFakeAuthToken');
    });

    test('sets the content length for empty body', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const headers = telnyx.messagingProfiles._defaultHeaders(null, '');
      expect(headers['Content-Length']).toBe(0);
    });

    test('sets the content length for UTF-8 body', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const headers = telnyx.messagingProfiles._defaultHeaders(
        null,
        '"{"messaging_profile_id":"uuid","text":"Hi There! This is Collin with Polling ","to":"+18332784547"}"',
      );
      expect(headers['Content-Length']).toBe(101);
    });

    test('sets the content length for UTF-8 body with multi-bytes chars', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      const headers = telnyx.messagingProfiles._defaultHeaders(
        null,
        '"{"messaging_profile_id":"uuid","text":"Hi There! This is Collin with Polling – ‣","to":"+18332784547"}"',
      );
      expect(headers['Content-Length']).toBe(108);
    });
  });

  describe('Parameter encoding', function () {
    beforeAll(() => {
      nock.disableNetConnect();
    });

    afterAll(function () {
      nock.cleanAll();
      nock.enableNetConnect();
    });

    describe('_request', function () {
      test('encodes the query string in GET requests', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            page: {size: 10, number: 5},
          },
        };

        const scope = nock('https://' + options.host + ':443')
          .get(options.path)
          .query(options.data)
          .reply(200, {data: [{record_type: 'messaging_profile'}]});

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.list(
          options.data,
          function (_err: unknown, _response: unknown) {
            done();
            scope.done();
          },
        );
      });

      test('encodes the body in PATCH requests', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles/123',
          data: {
            name: 'Winter Campaign',
          },
          body: {name: 'Winter Campaign'},
        };

        // PATCH https://api.telnyx.com:443/v2/messaging_profiles/123
        const scope = nock('https://' + options.host + ':443')
          .patch(options.path, options.body)
          .reply(200, {data: {record_type: 'messaging_profile'}});

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.update(
          '123',
          options.data,
          function (_err: unknown, _response: unknown) {
            done();
            scope.done();
          },
        );
      });

      test('encodes the body in POST requests', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
          body: {name: 'Winter Campaign'},
        };

        const scope = nock('https://' + options.host + ':443')
          .post(options.path, options.body)
          .reply(200, '{ data: {}}');

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(
          options.data,
          function (_err: unknown, _response: unknown) {
            done();
            scope.done();
          },
        );
      });
    });
  });

  describe('Retry Network Requests', function () {
    // @ts-expect-error TODO: import .d.ts files under src/test folder// Override the sleep timer to speed up tests
    realTelnyx.messagingProfiles._getSleepTimeInMS = function () {
      return 0;
    };

    const options = {
      host: telnyx.getConstant('DEFAULT_HOST'),
      path: '/v2/messaging_profiles',
      data: {
        name: 'Summer Campaign',
      },
    };

    afterEach(function () {
      realTelnyx.setMaxNetworkRetries(0);
      telnyx.setMaxNetworkRetries(0);
    });

    beforeAll(() => {
      nock.disableNetConnect();
    });

    afterAll(function () {
      nock.cleanAll();
      nock.enableNetConnect();
    });

    describe('_request', function () {
      test('throws an error on connection failure', function (done) {
        // Mock the connection error.
        nock('https://' + options.host)
          .post(options.path, options.data)
          .replyWithError('bad stuff');

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          const errorMessage =
            // @ts-expect-error TODO: import .d.ts files under src/test foldernst errorMessage =
            realTelnyx.messagingProfiles._generateConnectionErrorMessage(0);
          expect(err.message).toBe(errorMessage);
          expect(nock.isDone());
          done();
        });
      });

      test('should retry the request if max retries are set', function (done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .replyWithError('bad stuff')
          .post(options.path, options.data)
          .replyWithError('worse stuff');

        realTelnyx.setMaxNetworkRetries(1);

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          const errorMessage =
            // @ts-expect-error TODO: import .d.ts files under src/test foldernst errorMessage =
            realTelnyx.messagingProfiles._generateConnectionErrorMessage(1);
          expect(err.message).toBe(errorMessage);
          expect(nock.isDone());
          done();
        });
      });

      test('should stop retrying after a successful retry', function (done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .replyWithError('bad stuff')
          .post(options.path, options.data)
          .reply(200, {
            data: {
              id: '123',
              record_type: 'messaging_profile',
              name: 'Summer Campaign',
            },
          });

        realTelnyx.setMaxNetworkRetries(2);

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(
          options.data,
          function (_err: unknown, response: ResponsePayload) {
            expect(response.data.id).toBe('123');
            expect(nock.isDone());
            done();
          },
        );
      });

      test('should not retry on a 422 error', function (done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(422, {
            errors: [
              {
                title: 'Missing required parameter',
              },
            ],
          });

        realTelnyx.setMaxNetworkRetries(1);

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxInvalidParametersError');
          expect(nock.isDone());
          done();
        });
      });

      test('should not retry on a 500 error when the method is POST', function (done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(500, {
            errors: [
              {
                title: 'Unexpected error',
              },
            ],
          });

        realTelnyx.setMaxNetworkRetries(1);

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxAPIError');
          expect(nock.isDone());
          done();
        });
      });

      test('should retry on a 503 error when the method is POST', function (done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(503, {
            errors: [
              {
                message: 'Service unavailable',
              },
            ],
          })
          .post(options.path, options.data)
          .reply(200, {
            data: {
              id: '123',
              record_type: 'messaging_profile',
              name: 'Summer Campaign',
            },
          });

        realTelnyx.setMaxNetworkRetries(1);

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(
          options.data,
          function (_err: unknown, response: ResponsePayload) {
            expect(response.data.id).toBe('123');
            expect(nock.isDone());
            done();
          },
        );
      });

      test('should retry on a 500 error when the method is GET', function (done) {
        nock('https://' + options.host)
          .get(options.path + '/123')
          .reply(500, {
            errors: [
              {
                title: 'Unexpected error',
              },
            ],
          })
          .get(options.path + '/123')
          .reply(200, {
            data: {
              id: '123',
              record_type: 'messaging_profile',
              name: 'Summer Campaign',
            },
          });

        realTelnyx.setMaxNetworkRetries(1);

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.retrieve(
          '123',
          function (_err: unknown, messagingProfile: ResponsePayload) {
            expect(messagingProfile.data.id).toBe('123');
            expect(nock.isDone());
            done();
          },
        );
      });
    });

    describe('_shouldRetry', function () {
      test("should return false if we've reached maximum retries", function () {
        telnyx.setMaxNetworkRetries(1);
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        const res = telnyx.messagingProfiles._shouldRetry(
          {
            statusCode: 409,
          },
          1,
        );

        expect(res).toBe(false);
      });

      test('should return true if we have more retries available', function () {
        telnyx.setMaxNetworkRetries(1);
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        const res = telnyx.messagingProfiles._shouldRetry(
          {
            statusCode: 409,
          },
          0,
        );

        expect(res).toBe(true);
      });

      test('should return true if the error code is either 409 or 503', function () {
        telnyx.setMaxNetworkRetries(1);
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        let res = telnyx.messagingProfiles._shouldRetry(
          {
            statusCode: 409,
          },
          0,
        );

        expect(res).toBe(true);

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        res = telnyx.messagingProfiles._shouldRetry(
          {
            statusCode: 503,
          },
          0,
        );

        expect(res).toBe(true);
      });

      test('should return false if the status is 200', function () {
        telnyx.setMaxNetworkRetries(2);

        // mocking that we're on our 2nd request
        // @ts-expect-error TODO: import .d.ts files under src/test folder
        const res = telnyx.messagingProfiles._shouldRetry(
          {
            statusCode: 200,
            req: {_requestEvent: {method: 'POST'}},
          },
          1,
        );

        expect(res).toBe(false);
      });
    });

    describe('_getSleepTimeInMS', function () {
      test('should not exceed the maximum or minimum values', function () {
        let sleepSeconds;
        const max = telnyx.getMaxNetworkRetryDelay();
        const min = telnyx.getInitialNetworkRetryDelay();

        for (let i = 0; i < 10; i++) {
          // @ts-expect-error TODO: import .d.ts files under src/test folder
          sleepSeconds = telnyx.messagingProfiles._getSleepTimeInMS(i) / 1000;

          expect(sleepSeconds).toBeLessThan(max);
          expect(sleepSeconds).toBeGreaterThanOrEqual(min);
        }
      });
    });

    describe('_responseHandler', function () {
      test('should build an InvalidRequestError for status code 400', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(400, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxInvalidRequestError');
          expect(nock.isDone());
          done();
        });
      });

      test('should build an TelnyxAuthenticationError for status code 401', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(401, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxAuthenticationError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxPermissionError for status code 403', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(403, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxPermissionError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxResourceNotFoundError for status code 404', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(404, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxResourceNotFoundError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxMethodNotSupportedError for status code 405', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(405, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxMethodNotSupportedError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxTimeoutError for status code 408', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(408, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxTimeoutError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxUnsupportedMediaTypeError for status code 415', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(415, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxUnsupportedMediaTypeError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxInvalidParametersError for status code 422', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(422, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxInvalidParametersError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxRateLimitError for status code 429', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(429, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxRateLimitError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxAPIError for status code 500', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(500, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxAPIError');
          expect(nock.isDone());
          done();
        });
      });
      test('should build an TelnyxServiceUnavailableError for status code 503', function (done) {
        const options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(503, {
            errors: [
              {
                title: 'Error',
              },
            ],
          });

        // @ts-expect-error TODO: import .d.ts files under src/test folder
        realTelnyx.messagingProfiles.create(options.data, function (err) {
          expect(err.type).toBe('TelnyxServiceUnavailableError');
          expect(nock.isDone());
          done();
        });
      });
    });
  });
});
