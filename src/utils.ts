import * as qs from 'qs';
import {
  MethodSpec,
  MultipartRequestData,
  RequestArgs,
  RequestData,
  RequestOptions,
  ResponsePayload,
  TelnyxRawError,
  TelnyxResourceObject,
  UrlInterpolator,
} from './Types.js';
import TelnyxResource from './TelnyxResource.js';

const OPTIONS_KEYS = ['api_key'];

export function isAuthKey(key: string) {
  return (
    typeof key == 'string' && /^KEY[A-Z0-9]{32}_[a-zA-Z0-9]{22}$/.test(key)
  );
}

export function isJsonString(str: string) {
  try {
    if (!str || str.includes('filter[tag]=')) {
      return false;
    }
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function isObject(obj: unknown): boolean {
  const type = typeof obj;
  return (type === 'function' || type === 'object') && !!obj;
}

// const utils = {
export function isOptionsHash(o: unknown): boolean | unknown {
  return (
    o &&
    typeof o === 'object' &&
    OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop))
  );
}

/**
 * Remove empty values from an object
 */
export function removeEmpty(
  obj: Record<string, unknown>,
): Record<string, unknown> {
  if (typeof obj !== 'object') {
    throw new Error('Argument must be an object');
  }

  Object.keys(obj).forEach(function (key) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  });

  return obj;
}

export function callbackifyPromiseWithTimeout<T>(
  promise: Promise<T>,
  callback: ((error: unknown, result: T | null) => void) | null,
): Promise<T | void> {
  if (callback) {
    // Ensure callback is called outside of promise stack.
    return promise.then(
      (res) => {
        setTimeout(() => {
          callback(null, res);
        }, 0);
      },
      (err) => {
        setTimeout(() => {
          callback(err, null);
        }, 0);
      },
    );
  }

  return promise;
}

/**
 * Create multiple nested methods, in camelCase and snakeCase, using spec and method names
 *
 * @param [telnyxMethod] TelnyxResource Method  telnyxMethod creator
 * @param [names=[]] Array of method names
 * @param [spec] telnyxMethod spec creator by method name
 */
export function createNestedMethods(
  telnyxMethod: typeof TelnyxResource.method,
  names: Array<string>,
  spec: (methodName: string) => MethodSpec,
) {
  const methods: {[name: string]: (...args: any[]) => Promise<any>} = {};

  names.forEach(function (name) {
    // @ts-ignore
    methods[name] = methods[utils.snakeToCamelCase(name)] = telnyxMethod(
      spec(name),
    );
  });

  return methods;
}

/**
 * Return the data argument from a list of arguments
 *
 * @param {object[]} args
 * @returns {object}
 */
export function getDataFromArgs(args: RequestArgs): RequestData {
  if (!Array.isArray(args) || !args[0] || typeof args[0] !== 'object') {
    return {};
  }

  if (!isOptionsHash(args[0])) {
    return args.shift();
  }

  const argKeys = Object.keys(args[0]);

  const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));

  // In some cases options may be the provided as the first argument.
  // Here we're detecting a case where there are two distinct arguments
  // (the first being args and the second options) and with known
  // option keys in the first so that we can warn the user about it.
  if (
    optionKeysInArgs.length > 0 &&
    optionKeysInArgs.length !== argKeys.length
  ) {
    emitWarning(
      `Options found in arguments (${optionKeysInArgs.join(
        ', ',
      )}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`,
    );
  }

  return {};
}

/**
 * Return the options hash from a list of arguments
 */
export function getOptionsFromArgs(args: RequestArgs): RequestOptions {
  const opts = {
    auth: null,
    headers: {},
  };
  if (args.length > 0) {
    const arg = args[args.length - 1];
    if (isAuthKey(arg)) {
      opts.auth = args.pop();
    } else if (isOptionsHash(arg)) {
      const params = args.pop();

      const extraKeys = Object.keys(params).filter(function (key) {
        return OPTIONS_KEYS.indexOf(key) == -1;
      });

      if (extraKeys.length) {
        emitWarning(
          'Invalid options found (' + extraKeys.join(', ') + '); ignoring.',
        );
      }

      if (params.api_key) {
        opts.auth = params.api_key;
      }
    }
  }
  return opts;
}

export function emitWarning(warning: string): void {
  if (typeof process.emitWarning !== 'function') {
    return console.warn(
      `Stripe: ${warning}`,
    ); /* eslint-disable-line no-console */
  }

  return process.emitWarning(warning, 'Stripe');
}

export function toSingular(name: string): string {
  if (name.endsWith('s')) {
    return name.slice(0, -1);
  }

  return name;
}

/**
 * Allow for special capitalization cases (such as OAuth)
 */
export function pascalToCamelCase(name: string): string {
  return name[0].toLowerCase() + name.substring(1);
}

export function stringifyRequestData(data: RequestData | string): string {
  return (
    qs
      .stringify(data, {
        serializeDate: (d: Date) => Math.floor(d.getTime() / 1000).toString(),
      })
      // Don't use strict form encoding by changing the square bracket control
      // characters back to their literals. This is fine by the server, and
      // makes these parameter strings easier to read.
      .replace(/%5B/g, '[')
      .replace(/%5D/g, ']')
  );
}

// For use in multipart requests
export function flattenAndStringify(
  data: MultipartRequestData,
): Record<string, string | Uint8Array> {
  const result: Record<string, string | Uint8Array> = {};

  const step = (obj: MultipartRequestData, prevKey: string | null): void => {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = prevKey ? `${prevKey}[${key}]` : key;

      if (isObject(value)) {
        if (
          !(value instanceof Uint8Array) &&
          !Object.prototype.hasOwnProperty.call(value, 'data')
        ) {
          // Non-buffer non-file Objects are recursively flattened
          return step(value, newKey);
        } else {
          // Buffers and file objects are stored without modification
          result[newKey] = value;
        }
      } else {
        // Primitives are converted to strings
        result[newKey] = String(value);
      }
    });
  };

  step(data, null);

  return result;
}

/**
 * Outputs a new function with interpolated object property values.
 * Use like so:
 *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
 *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
 */
export const makeURLInterpolator = ((): ((s: string) => UrlInterpolator) => {
  const rc = {
    '\n': '\\n',
    '"': '\\"',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  } as Record<string, string>;
  return (str: string): UrlInterpolator => {
    const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
    return (outputs: Record<string, unknown>): string => {
      return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) =>
        // @ts-ignore
        encodeURIComponent(outputs[$1] || ''),
      );
    };
  };
})();

/**
 * Provide simple "Class" extension mechanism.
 * <!-- Public API accessible via Stripe.StripeResource.extend -->
 */
export function protoExtend(
  this: any,
  sub: any,
): {
  new (...args: any[]): TelnyxResourceObject;
} {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const Super = this;
  const Constructor = Object.prototype.hasOwnProperty.call(sub, 'constructor')
    ? sub.constructor
    : function (this: TelnyxResourceObject, ...args: any[]): void {
        Super.apply(this, args);
      };

  // This initialization logic is somewhat sensitive to be compatible with
  // divergent JS implementations like the one found in Qt. See here for more
  // context:
  //
  // https://github.com/stripe/stripe-node/pull/334
  Object.assign(Constructor, Super);
  Constructor.prototype = Object.create(Super.prototype);
  Object.assign(Constructor.prototype, sub);

  return Constructor;
}

/**
 * tryParseJSON used to only parse JSON response,
 * if it is not a JSON response sends the value inside a data object to keep the standard.
 *
 * @param [jsonString]  Response object
 */
export function tryParseJSON(jsonString: string): {[key: string]: any} {
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