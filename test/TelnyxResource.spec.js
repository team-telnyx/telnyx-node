'use strict';

var utils = require('../testUtils');
var nock = require('nock');

var telnyx = require('../testUtils').getSpyableTelnyx();
var expect = require('chai').expect;

describe('TelnyxResource', function() {
  describe('createResourcePathWithSymbols', function() {
    it('Generates a path', function() {
      telnyx.messagingProfiles.create({});
      var path = telnyx.messagingProfiles.createResourcePathWithSymbols('{id}');
      expect(path).to.equal('/messaging_profiles/{id}');
    });
  });

  describe('_defaultHeaders', function() {
    it('sets the Authorization header with Bearer auth using the global API key', function() {
      var headers = telnyx.messagingProfiles._defaultHeaders(null, 0, null);
      expect(headers.Authorization).to.equal('Bearer fakeAuthToken');
    });
    it('sets the Authorization header with Bearer auth using the specified API key', function() {
      var headers = telnyx.messagingProfiles._defaultHeaders('anotherFakeAuthToken', 0, null);
      expect(headers.Authorization).to.equal('Bearer anotherFakeAuthToken');
    });
  });

  describe('Parameter encoding', function() {
    // Use a real instance of telnyx as we're mocking the http.request responses.
    var realTelnyx = require('../lib/telnyx')(utils.getUserTelnyxKey());

    before(() => {
      nock.disableNetConnect();
    });

    after(function() {
      nock.cleanAll();
      nock.enableNetConnect();
    })

    describe('_request', function() {
      it('encodes the query string in GET requests', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            page: {size: 10, number: 5}
          },
        };

        const scope = nock('https://' + options.host + ':443')
          .get(options.path)
          .query(options.data)
          .reply(200, {data: [{record_type: 'messaging_profile'}]});

        realTelnyx.messagingProfiles.list(options.data, function(err, response) {
          done();
          scope.done();
        });
      });

      it('encodes the body in PATCH requests', function(done) {
        var options = {
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

        realTelnyx.messagingProfiles.update('123', options.data, function(err, response) {
          done();
          scope.done();
        });
      });

      it('encodes the body in POST requests', function(done) {
        var options = {
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

        realTelnyx.messagingProfiles.create(options.data, function(err, response) {
          done();
          scope.done();
        });
      });
    });
  });

  describe('Retry Network Requests', function() {
    // Use a real instance of telnyx as we're mocking the http.request responses.
    var realTelnyx = require('../lib/telnyx')(utils.getUserTelnyxKey());

    // Override the sleep timer to speed up tests
    realTelnyx.messagingProfiles._getSleepTimeInMS = function() {
      return 0;
    };

    var options = {
      host: telnyx.getConstant('DEFAULT_HOST'),
      path: '/v2/messaging_profiles',
      data: {
        name: 'Summer Campaign',
      },
    };

    afterEach(function() {
      realTelnyx.setMaxNetworkRetries(0);
      telnyx.setMaxNetworkRetries(0);
    });

    before(() => {
      nock.disableNetConnect();
    });

    after(function() {
      nock.cleanAll();
      nock.enableNetConnect();
    })

    describe('_request', function() {
      it('throws an error on connection failure', function(done) {
        // Mock the connection error.
        nock('https://' + options.host)
          .post(options.path, options.data)
          .replyWithError('bad stuff');

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          var errorMessage = realTelnyx.messagingProfiles._generateConnectionErrorMessage(0);
          expect(err.message).to.deep.equal(errorMessage);
          expect(nock.isDone());
          done();
        });
      });

      it('should retry the request if max retries are set', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .replyWithError('bad stuff')
          .post(options.path, options.data)
          .replyWithError('worse stuff');

        realTelnyx.setMaxNetworkRetries(1);

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          var errorMessage = realTelnyx.messagingProfiles._generateConnectionErrorMessage(1);
          expect(err.message).to.equal(errorMessage);
          expect(nock.isDone());
          done();
        });
      });

      it('should stop retrying after a successful retry', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .replyWithError('bad stuff')
          .post(options.path, options.data)
          .reply(200, {data: {
            id: '123',
            record_type: 'messaging_profile',
            name: 'Summer Campaign',
          }});

        realTelnyx.setMaxNetworkRetries(2);

        realTelnyx.messagingProfiles.create(options.data, function(err, response) {
          expect(response.data.id).to.equal('123');
          expect(nock.isDone());
          done();
        });
      });

      it('should not retry on a 422 error', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(422, {
            errors: [{
              title: 'Missing required parameter'
            }]
          });

        realTelnyx.setMaxNetworkRetries(1);

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxInvalidParametersError');
          expect(nock.isDone());
          done();
        });
      });

      it('should not retry on a 500 error when the method is POST', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(500, {
            errors: [{
              title: 'Unexpected error'
            }]
          });

        realTelnyx.setMaxNetworkRetries(1);

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxAPIError');
          expect(nock.isDone());
          done();
        });
      });

      it('should retry on a 503 error when the method is POST', function(done) {
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(503, {
            errors: [{
              message: 'Service unavailable'
            }]
          })
          .post(options.path, options.data)
          .reply(200, {data: {
            id: '123',
            record_type: 'messaging_profile',
            name: 'Summer Campaign',
          }});

        realTelnyx.setMaxNetworkRetries(1);

        realTelnyx.messagingProfiles.create(options.data, function(err, response) {
          expect(response.data.id).to.equal('123');
          expect(nock.isDone());
          done();
        });
      });

      it('should retry on a 500 error when the method is GET', function(done) {
        nock('https://' + options.host)
          .get(options.path + '/123')
          .reply(500, {
            errors: [{
              title: 'Unexpected error'
            }]
          })
          .get(options.path + '/123')
          .reply(200, {
            data: {
              id: '123',
              record_type: 'messaging_profile',
              name: 'Summer Campaign',
            }
          });

        realTelnyx.setMaxNetworkRetries(1);

        realTelnyx.messagingProfiles.retrieve('123', function(err, messagingProfile) {
          expect(messagingProfile.data.id).to.equal('123');
          expect(nock.isDone());
          done();
        });
      });
    });

    describe('_shouldRetry', function() {
      it('should return false if we\'ve reached maximum retries', function() {
        telnyx.setMaxNetworkRetries(1);
        var res = telnyx.messagingProfiles._shouldRetry({
          statusCode: 409
        }, 1);

        expect(res).to.equal(false);
      });

      it('should return true if we have more retries available', function() {
        telnyx.setMaxNetworkRetries(1);
        var res = telnyx.messagingProfiles._shouldRetry({
          statusCode: 409
        }, 0);

        expect(res).to.equal(true);
      });

      it('should return true if the error code is either 409 or 503', function() {
        telnyx.setMaxNetworkRetries(1);
        var res = telnyx.messagingProfiles._shouldRetry({
          statusCode: 409
        }, 0);

        expect(res).to.equal(true);

        res = telnyx.messagingProfiles._shouldRetry({
          statusCode: 503
        }, 0);

        expect(res).to.equal(true);
      });

      it('should return false if the status is 200', function() {
        telnyx.setMaxNetworkRetries(2);

        // mocking that we're on our 2nd request
        var res = telnyx.messagingProfiles._shouldRetry({
          statusCode: 200,
          req: {_requestEvent: {method: 'POST'}}
        }, 1);

        expect(res).to.equal(false);
      });
    });

    describe('_getSleepTimeInMS', function() {
      it('should not exceed the maximum or minimum values', function() {
        var sleepSeconds;
        var max = telnyx.getMaxNetworkRetryDelay();
        var min = telnyx.getInitialNetworkRetryDelay();

        for (var i = 0; i < 10; i++) {
          sleepSeconds = telnyx.messagingProfiles._getSleepTimeInMS(i) / 1000;

          expect(sleepSeconds).to.be.at.most(max);
          expect(sleepSeconds).to.be.at.least(min);
        }
      });
    });

    describe('_responseHandler', function() {
      it('should build an InvalidRequestError for status code 400', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(400, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxInvalidRequestError');
          expect(nock.isDone());
          done();
        });
      });

      it('should build an TelnyxAuthenticationError for status code 401', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(401, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxAuthenticationError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxPermissionError for status code 403', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(403, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxPermissionError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxResourceNotFoundError for status code 404', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(404, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxResourceNotFoundError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxMethodNotSupportedError for status code 405', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(405, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxMethodNotSupportedError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxTimeoutError for status code 408', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(408, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxTimeoutError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxUnsupportedMediaTypeError for status code 415', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(415, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxUnsupportedMediaTypeError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxInvalidParametersError for status code 422', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(422, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxInvalidParametersError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxRateLimitError for status code 429', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(429, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxRateLimitError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxAPIError for status code 500', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(500, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxAPIError');
          expect(nock.isDone());
          done();
        });
      });
      it('should build an TelnyxServiceUnavailableError for status code 503', function(done) {
        var options = {
          host: telnyx.getConstant('DEFAULT_HOST'),
          path: '/v2/messaging_profiles',
          data: {
            name: 'Winter Campaign',
          },
        };
        nock('https://' + options.host)
          .post(options.path, options.data)
          .reply(503, {
            errors: [{
              title: 'Error'
            }]
          });

        realTelnyx.messagingProfiles.create(options.data, function(err) {
          expect(err.type).to.equal('TelnyxServiceUnavailableError');
          expect(nock.isDone());
          done();
        });
      });
    });
  });
});
