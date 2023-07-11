'use strict';

var Buffer = require('safe-buffer').Buffer;
var EventEmitter = require('events').EventEmitter;
var qs = require('qs');
var crypto = require('crypto');

var hasOwn = {}.hasOwnProperty;
var isPlainObject = require('lodash.isplainobject');

var OPTIONS_KEYS = ['api_key'];

var utils = (module.exports = {
  isJsonString: function (str) {
    try {
      if (!str || str.includes('filter[tag]=')) {
        return false;
      }
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  },

  isAuthKey: function (key) {
    return (
      typeof key == 'string' && /^KEY[A-Z0-9]{32}_[a-zA-Z0-9]{22}$/.test(key)
    );
  },

  isOptionsHash: function (o) {
    return (
      isPlainObject(o) &&
      OPTIONS_KEYS.some(function (key) {
        return hasOwn.call(o, key);
      })
    );
  },

  /**
   * Stringifies an Object, accommodating nested objects
   * (forming the conventional key 'parent[child]=value')
   */
  stringifyRequestData: function (data) {
    return (
      qs
        .stringify(data, {arrayFormat: 'brackets'})
        // Don't use strict form encoding by changing the square bracket control
        // characters back to their literals. This is fine by the server, and
        // makes these parameter strings easier to read.
        .replace(/%5B/g, '[')
        .replace(/%5D/g, ']')
    );
  },

  /**
   * Outputs a new function with interpolated object property values.
   * Use like so:
   *   var fn = makeURLInterpolator('some/url/{param1}/{param2}');
   *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
   */
  makeURLInterpolator: (function () {
    var rc = {
      '\n': '\\n',
      '"': '\\"',
      '\u2028': '\\u2028',
      '\u2029': '\\u2029',
    };
    return function makeURLInterpolator(str) {
      var cleanString = str.replace(/["\n\r\u2028\u2029]/g, function ($0) {
        return rc[$0];
      });
      return function (outputs) {
        return cleanString.replace(/\{([\s\S]+?)\}/g, function ($0, $1) {
          return encodeURIComponent(outputs[$1] || '');
        });
      };
    };
  }()),

  /**
   * Return the data argument from a list of arguments
   */
  getDataFromArgs: function (args) {
    if (args.length < 1 || !isPlainObject(args[0])) {
      return {};
    }

    if (!utils.isOptionsHash(args[0])) {
      return args.shift();
    }

    var argKeys = Object.keys(args[0]);

    var optionKeysInArgs = argKeys.filter(function (key) {
      return OPTIONS_KEYS.indexOf(key) > -1;
    });

    // In some cases options may be the provided as the first argument.
    // Here we're detecting a case where there are two distinct arguments
    // (the first being args and the second options) and with known
    // option keys in the first so that we can warn the user about it.
    if (
      optionKeysInArgs.length > 0 &&
      optionKeysInArgs.length !== argKeys.length
    ) {
      emitWarning(
        'Options found in arguments (' +
          optionKeysInArgs.join(', ') +
          '). Did you mean to pass an options ' +
          'object? See https://github.com/telnyx/telnyx-node/wiki/Passing-Options.'
      );
    }

    return {};
  },

  /**
   * Return the options hash from a list of arguments
   */
  getOptionsFromArgs: function (args) {
    var opts = {
      auth: null,
      headers: {},
    };
    if (args.length > 0) {
      var arg = args[args.length - 1];
      if (utils.isAuthKey(arg)) {
        opts.auth = args.pop();
      } else if (utils.isOptionsHash(arg)) {
        var params = args.pop();

        var extraKeys = Object.keys(params).filter(function (key) {
          return OPTIONS_KEYS.indexOf(key) == -1;
        });

        if (extraKeys.length) {
          emitWarning(
            'Invalid options found (' + extraKeys.join(', ') + '); ignoring.'
          );
        }

        if (params.api_key) {
          opts.auth = params.api_key;
        }
      }
    }
    return opts;
  },

  /**
   * Provide simple "Class" extension mechanism
   */
  protoExtend: function (sub) {
    var Super = this;
    var Constructor = hasOwn.call(sub, 'constructor')
      ? sub.constructor
      : function () {
        Super.apply(this, arguments);
      };

    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/telnyx/telnyx-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);

    return Constructor;
  },

  /**
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare: function (a, b) {
    a = Buffer.from(a);
    b = Buffer.from(b);

    // return early here if buffer lengths are not equal since timingSafeEqual
    // will throw if buffer lengths are not equal
    if (a.length !== b.length) {
      return false;
    }

    // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
    // otherwise use our own scmp-internal function.
    if (crypto.timingSafeEqual) {
      return crypto.timingSafeEqual(a, b);
    }

    var len = a.length;
    var result = 0;

    for (var i = 0; i < len; ++i) {
      result |= a[i] ^ b[i];
    }
    return result === 0;
  },

  /**
   * Remove empty values from an object
   */
  removeEmpty: function (obj) {
    if (typeof obj !== 'object') {
      throw new Error('Argument must be an object');
    }

    Object.keys(obj).forEach(function (key) {
      if (obj[key] === null || obj[key] === undefined) {
        delete obj[key];
      }
    });

    return obj;
  },

  /**
   * Determine if file data is a derivative of EventEmitter class.
   * https://nodejs.org/api/events.html#events_events
   */
  checkForStream: function (obj) {
    if (obj.file && obj.file.data) {
      return obj.file.data instanceof EventEmitter;
    }
    return false;
  },

  callbackifyPromiseWithTimeout: function (promise, callback) {
    if (callback) {
      // Ensure callback is called outside of promise stack.
      return promise.then(
        function (res) {
          setTimeout(function () {
            callback(null, res);
          }, 0);
        },
        function (err) {
          setTimeout(function () {
            callback(err, null);
          }, 0);
        }
      );
    }

    return promise;
  },

  /**
   * Allow for special capitalization cases (such as OAuth)
   */
  pascalToCamelCase: function (name) {
    return name[0].toLowerCase() + name.substring(1);
  },

  /**
   * snake_case to camelCase
   */
  snakeToCamelCase: function (name) {
    const words = name.split('_');

    return words.reduce(function (acc, nextWord) {
      return acc + nextWord.charAt(0).toUpperCase() + nextWord.slice(1);
    });
  },

  /**
   * remove final `s` from names
   */
  toSingular: function (name) {
    if (name.endsWith('s')) {
      return name.slice(0, -1);
    }
  },

  /**
   * Add TelnyxResource to API response data
   *
   * @param [response] Resource response object
   * @param [telnyx] Telnyx SDK
   * @param [resourceName] Resource name in camelCase
   * @param [methods] resource methods to include
   */
  addResourceToResponseData: function (
    response,
    telnyx,
    resourceName,
    methods
  ) {
    if (response && response.data && typeof response.data === 'object') {

      /*
       * make nested methods. e.g.: call.bridge();
       * nested methods should be used from basic methods response. See specs for an example
       */
      var resourceFulData = telnyx[resourceName];

      Object.assign(resourceFulData, response.data, methods);

      response.data = resourceFulData;
    }

    return response;
  },

  /**
   * Create multiple nested methods, in camelCase and snakeCase, using spec and method names
   *
   * @param [telnyxMethod] TelnyxResource Method  telnyxMethod creator
   * @param [names=[]] Array of method names
   * @param [spec] telnyxMethod spec creator by method name
   */
  createNestedMethods: function (telnyxMethod, names, spec) {
    var methods = {};

    names.forEach(function (name) {
      methods[name] = methods[utils.snakeToCamelCase(name)] = telnyxMethod(
        spec(name)
      );
    });

    return methods;
  },

  emitWarning: emitWarning,

  tryParseJSON: tryParseJSON,
});

function emitWarning(warning) {
  if (typeof process.emitWarning !== 'function') {
    return console.warn(
      'Telnyx: ' + warning
    ); /* eslint-disable-line no-console */
  }

  return process.emitWarning(warning, 'Telnyx');
}

/**
 * tryParseJSON used to only parse JSON response,
 * if it is not a JSON response sends the value inside a data object to keep the standard.
 *
 * @param [jsonString]  Response object
 */
function tryParseJSON(jsonString) {
  try {
    if (jsonString === '') {
      const defaultValue = {
        data: jsonString,
      };

      return defaultValue;
    }

    return JSON.parse(jsonString);
  } catch (e) {
    const defaultValue = {
      data: jsonString,
    };

    return defaultValue;
  }
}
