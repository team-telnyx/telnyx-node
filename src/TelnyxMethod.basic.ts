import isPlainObject from 'lodash.isplainobject';
import telnyxMethod from './TelnyxMethod.js';
import * as utils from './utils.js';
import {
  RequestOptions,
  ResponsePayload,
  TelnyxResourceObject,
} from './Types.js';

export default {
  create: telnyxMethod({
    method: 'POST',
  }),

  list: telnyxMethod({
    method: 'GET',
    methodType: 'list',
  }),

  retrieve: telnyxMethod({
    method: 'GET',
    path: '/{id}',
    urlParams: ['id'],
  }),

  update: telnyxMethod({
    method: 'PATCH',
    path: '{id}',
    urlParams: ['id'],
  }),

  // Avoid 'delete' keyword in JS
  del: telnyxMethod({
    method: 'DELETE',
    path: '{id}',
    urlParams: ['id'],
  }),

  setMetadata: function (
    this: TelnyxResourceObject,
    id: string,
    key: any,
    value: string,
    auth: RequestOptions['auth'],
    cb: (err: any, response: ResponsePayload | null) => void,
  ) {
    var self = this;
    var data = key;
    var isObject = isPlainObject(key);
    // We assume null for an empty object
    var isNull = data === null || (isObject && !Object.keys(data).length);

    // Allow optional passing of auth & cb:
    if ((isNull || isObject) && typeof value == 'string') {
      auth = value;
    } else if (typeof auth != 'string') {
      if (!cb && typeof auth == 'function') {
        cb = auth;
      }
      auth = null;
    }

    var urlData = this.createUrlData();
    var path = this.createFullPath('/' + id, urlData);

    return utils.callbackifyPromiseWithTimeout(
      new Promise<ResponsePayload>((resolve, reject) => {
        if (isNull) {
          // Reset metadata:
          sendMetadata(null, auth);
        } else if (!isObject) {
          // Set individual metadata property:
          var metadata: Record<string, any> = {};
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
  },

  getMetadata: function (
    this: TelnyxResourceObject,
    id: string,
    auth: RequestOptions['auth'],
    cb: (err: any, response: ResponsePayload | null) => void,
  ) {
    if (!cb && typeof auth == 'function') {
      cb = auth;
      auth = null;
    }

    var urlData = this.createUrlData();
    var path = this.createFullPath('/' + id, urlData);

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
  },
};
