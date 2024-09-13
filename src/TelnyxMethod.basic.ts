import isPlainObject from 'lodash.isplainobject';
import telnyxMethod from './TelnyxMethod.js';
import * as utils from './utils.js';
import {
  RequestOptions,
  ResponsePayload,
  TelnyxResourceObject,
} from './Types.js';

export const create = telnyxMethod({
  method: 'POST',
});

export const list = telnyxMethod({
  method: 'GET',
  methodType: 'list',
});

export const retrieve = telnyxMethod({
  method: 'GET',
  path: '/{id}',
  urlParams: ['id'],
});

export const update = telnyxMethod({
  method: 'PATCH',
  path: '{id}',
  urlParams: ['id'],
});

// Avoid 'delete' keyword in JS
export const del = telnyxMethod({
  method: 'DELETE',
  path: '{id}',
  urlParams: ['id'],
});

export function setMetadata(
  this: TelnyxResourceObject,
  id: string,
  key: any,
  value: string,
  auth: RequestOptions['auth'],
  cb: (err: any, response: ResponsePayload | null) => void,
) {
  const self = this;
  const data = key;
  const isObject = isPlainObject(key);
  // We assume null for an empty object
  const isNull = data === null || (isObject && !Object.keys(data).length);

  // Allow optional passing of auth & cb:
  if ((isNull || isObject) && typeof value == 'string') {
    auth = value;
  } else if (typeof auth != 'string') {
    if (!cb && typeof auth == 'function') {
      cb = auth;
    }
    auth = null;
  }

  const urlData = this.createUrlData();
  const path = this.createFullPath('/' + id, urlData);

  return utils.callbackifyPromiseWithTimeout(
    new Promise<ResponsePayload>((resolve, reject) => {
      if (isNull) {
        // Reset metadata:
        sendMetadata(null, auth);
      } else if (!isObject) {
        // Set individual metadata property:
        const metadata: Record<string, any> = {};
        metadata[key as string] = value;
        sendMetadata(metadata, auth);
      } else {
        // Set entire metadata object after resetting it:
        this._request(
          'POST',
          null,
          path,
          {
            metadata: null,
          },
          auth,
          {},
          function (err: any, response: ResponsePayload) {
            if (err) {
              return reject(err);
            }
            sendMetadata(data, auth);
          },
        );
      }

      function sendMetadata(
        metadata: Record<string, any> | null,
        auth: RequestOptions['auth'],
      ) {
        self._request(
          'POST',
          null,
          path,
          {
            metadata: metadata,
          },
          auth,
          {},
          function (err, response) {
            if (err) {
              reject(err);
            } else {
              resolve(response.metadata);
            }
          },
        );
      }
    }),
    cb,
  );
}

export function getMetadata(
  this: TelnyxResourceObject,
  id: string,
  auth: RequestOptions['auth'],
  cb: (err: any, response: ResponsePayload | null) => void,
) {
  if (!cb && typeof auth == 'function') {
    cb = auth;
    auth = null;
  }

  const urlData = this.createUrlData();
  const path = this.createFullPath('/' + id, urlData);

  return utils.callbackifyPromiseWithTimeout(
    new Promise<ResponsePayload>((resolve, reject) => {
      this._request(
        'GET',
        null,
        path,
        {},
        auth,
        {},
        function (err: any, response: ResponsePayload) {
          if (err) {
            reject(err);
          } else {
            resolve(response.metadata);
          }
        },
      );
    }),
    cb,
  );
}
