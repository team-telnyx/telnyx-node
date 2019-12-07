'use strict';

// NOTE: testUtils should be require'd before anything else in each spec file!

require('mocha');
// Ensure we are using the 'as promised' libs before any tests are run:
require('chai').use(require('chai-as-promised'));

var utils = module.exports = {

  getUserTelnyxKey: function() {
    var key = process.env.TELNYX_TEST_API_KEY || 'tGN0bIwXnHdwOa85VABjPdSn8nWY7G7I';

    return key;
  },

  getSpyableTelnyx: function() {
    // Provide a testable telnyx instance
    // That is, with mock-requests built in and hookable

    var telnyx = require('../lib/telnyx');
    var telnyxInstance = telnyx('fakeAuthToken');

    telnyxInstance.REQUESTS = [];

    for (var i in telnyxInstance) {
      makeInstanceSpyable(telnyxInstance, telnyxInstance[i]);
    }

    function makeInstanceSpyable(telnyxInstance, thisInstance) {
      if (thisInstance instanceof telnyx.TelnyxResource) {
        patchRequest(telnyxInstance, thisInstance);
      }
    }

    function patchRequest(telnyxInstance, instance) {
      instance._request = function(method, host, url, data, auth, options, cb) {
        var req = telnyxInstance.LAST_REQUEST = {
          method: method,
          url: url,
          data: data,
          headers: options.headers || {},
        };
        if (auth) {
          req.auth = auth;
        }
        if (host) {
          req.host = host;
        }
        telnyxInstance.REQUESTS.push(req);
        cb.call(this, null, {});
      };
    }

    return telnyxInstance;
  },

  getTelnyxMock: function() {
    // Provide a telnyx-mock like instance
    // That is, with telnyx-mock requests built in

    var telnyx = require('../lib/telnyx');
    var telnyxInstance = telnyx('KEYSUPERSECRET'); // testmode secret API KEY

    telnyxInstance.setHost('localhost', process.env.TELNYX_MOCK_PORT || '12111', 'http');

    return telnyxInstance;
  },

  /**
   * A utility where cleanup functions can be registered to be called post-spec.
   * CleanupUtility will automatically register on the mocha afterEach hook,
   * ensuring its called after each descendent-describe block.
   */
  CleanupUtility: (function() {
    CleanupUtility.DEFAULT_TIMEOUT = 20000;

    function CleanupUtility(timeout) {
      var self = this;
      this._cleanupFns = [];
      this._telnyx = require('../lib/telnyx')(
        utils.getUserTelnyxKey(),
        'latest'
      );
      afterEach(function(done) {
        this.timeout(timeout || CleanupUtility.DEFAULT_TIMEOUT);
        return self.doCleanup(done);
      });
    }

    CleanupUtility.prototype = {

      doCleanup: function(done) {
        var cleanups = this._cleanupFns;
        var total = cleanups.length;
        var completed = 0;
        for (var fn; (fn = cleanups.shift());) {
          var promise = fn.call(this);
          if (!promise || !promise.then) {
            throw new Error('CleanupUtility expects cleanup functions to return promises!');
          }
          promise.then(function() {
            // cleanup successful
            completed += 1;
            if (completed === total) {
              done();
            }
          }, function(err) {
            // not successful
            throw err;
          });
        }
        if (total === 0) {
          done();
        }
      },
      add: function(fn) {
        this._cleanupFns.push(fn);
      },
    };

    return CleanupUtility;
  }()),

  /**
  * Get a random string for test Object creation
  */
  getRandomString: function() {
    return Math.random().toString(36).slice(2);
  },

  envSupportsForAwait: function() {
    return typeof Symbol !== 'undefined' && Symbol.asyncIterator;
  },

  envSupportsAwait: function() {
    try {
      eval('(async function() {})'); // eslint-disable-line no-eval
      return true;
    } catch (err) {
      return false;
    }
  },

};
