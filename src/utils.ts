import * as qs from 'qs';
import {
  MultipartRequestData,
  RequestData,
  TelnyxResourceObject,
  UrlInterpolator,
} from './Types.js';
import TelnyxResource from './TelnyxResource.js';

export function isObject(obj: unknown): boolean {
  const type = typeof obj;
  return (type === 'function' || type === 'object') && !!obj;
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
  spec: any,
) {
  var methods = {};

  names.forEach(function (name) {
    // @ts-ignore
    methods[name] = methods[utils.snakeToCamelCase(name)] = telnyxMethod(
      spec(name),
    );
  });

  return methods;
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
