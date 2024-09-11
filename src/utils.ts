import * as qs from 'qs';
import {MultipartRequestData, RequestData} from './Types.js';

export function isObject(obj: unknown): boolean {
  const type = typeof obj;
  return (type === 'function' || type === 'object') && !!obj;
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
