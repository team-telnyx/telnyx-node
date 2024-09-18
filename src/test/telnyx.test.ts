'use strict';

import {utils as testUtils} from './utils';
import TelnyxNode from '../telnyx.node';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const realTelnyx: (typeof TelnyxNode)['prototype'] = new (TelnyxNode as any)(
  testUtils.getUserTelnyxKey(),
);

import nock from 'nock';
import http from 'http';
import https from 'https';

type Record = {
  id: string;
  name: string;
};
const MESSAGING_PROFILE_DETAILS: Record = {
  id: '123',
  name: 'Summer Campaign',
};

describe('Telnyx Module', function () {
  this.timeout(20000);

  describe('setApiKey', function () {
    it('uses Bearer auth', function () {
      expect(realTelnyx.getApiField('auth')).toBe(
        'Bearer ' + testUtils.getUserTelnyxKey(),
      );
    });
  });

  describe('setHttpAgent', function () {
    let origHttpAgent, origHttpsAgent;
    beforeEach(function () {
      origHttpAgent = realTelnyx.getApiField('http_agent');
      origHttpsAgent = realTelnyx.getApiField('https_agent');
      realTelnyx._setApiField('http_agent', null);
      realTelnyx._setApiField('https_agent', null);
    });
    afterEach(function () {
      realTelnyx._setApiField('http_agent', origHttpAgent);
      realTelnyx._setApiField('https_agent', origHttpsAgent);
    });
    describe('when given an https.Agent', function () {
      it('should save the agent as https_agent', function () {
        const agent = new https.Agent();
        realTelnyx.setHttpAgent(agent);
        expect(realTelnyx.getApiField('https_agent')).toBe(agent);
        expect(realTelnyx.getApiField('http_agent')).toBeNull();
      });
    });
    describe('when given an http.Agent', function () {
      it('should save the agent as http_agent', function () {
        const agent = new http.Agent();
        realTelnyx.setHttpAgent(agent);
        expect(realTelnyx.getApiField('http_agent')).toBe(agent);
        expect(realTelnyx.getApiField('https_agent')).toBeNull();
      });
    });
  });

  describe('GetClientUserAgent', function () {
    it('Should return a user-agent serialized JSON object', function () {
      return expect(
        new Promise(function (resolve, _reject) {
          realTelnyx.getClientUserAgent(function (c) {
            resolve(JSON.parse(c));
          });
        }),
      ).toHaveProperty('lang', 'node');
    });
  });

  describe('GetClientUserAgentSeeded', function () {
    it('Should return a user-agent serialized JSON object', function () {
      const userAgent = {lang: 'node'};
      return expect(
        new Promise(function (resolve, _reject) {
          realTelnyx.getClientUserAgentSeeded(userAgent, function (c) {
            resolve(JSON.parse(c));
          });
        }),
      ).toHaveProperty('lang', 'node');
    });

    it('Should URI-encode user-agent fields', function () {
      const userAgent = {lang: 'ï'};
      return expect(
        new Promise(function (resolve, _reject) {
          realTelnyx.getClientUserAgentSeeded(userAgent, function (c) {
            resolve(JSON.parse(c));
          });
        }),
      ).toHaveProperty('lang', '%C3%AF');
    });
  });

  describe('setTimeout', function () {
    it('Should define a default equal to the node default', function () {
      expect(realTelnyx.getApiField('timeout')).toBe(
        http.createServer().timeout,
      );
    });
    it('Should allow me to set a custom timeout', function () {
      realTelnyx.setTimeout(900);
      expect(realTelnyx.getApiField('timeout')).toBe(900);
    });
    it('Should allow me to set null, to reset to the default', function () {
      realTelnyx.setTimeout(null);
      expect(realTelnyx.getApiField('timeout')).toBe(
        http.createServer().timeout,
      );
    });
  });

  describe('_setAppInfo', function () {
    describe('when given nothing or an empty object', function () {
      it('should unset telnyx._appInfo', function () {
        realTelnyx._setAppInfo();
        expect(realTelnyx._appInfo).toBeUndefined();
      });
    });

    describe('when given an object with no `name`', function () {
      it('should throw an error', function () {
        expect(function () {
          realTelnyx._setAppInfo({});
        }).toThrow(/AppInfo.name is required/);

        expect(function () {
          realTelnyx._setAppInfo({
            version: '1.2.3',
          });
        }).toThrow(/AppInfo.name is required/);

        expect(function () {
          realTelnyx._setAppInfo({
            cats: '42',
          });
        }).toThrow(/AppInfo.name is required/);
      });
    });

    describe('when given at least a `name`', function () {
      it('should set name, partner ID, url, and version of telnyx._appInfo', function () {
        realTelnyx._setAppInfo({
          name: 'MyAwesomeApp',
        });
        expect(realTelnyx._appInfo).toMatchObject({
          name: 'MyAwesomeApp',
        });

        realTelnyx._setAppInfo({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });
        expect(realTelnyx._appInfo).toMatchObject({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });

        realTelnyx._setAppInfo({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });
        expect(realTelnyx._appInfo).toMatchObject({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });

        realTelnyx._setAppInfo({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
        });
        expect(realTelnyx._appInfo).toMatchObject({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
        });
      });

      it('should ignore any invalid properties', function () {
        realTelnyx._setAppInfo({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
          countOfRadishes: 512,
        });
        expect(realTelnyx._appInfo).toMatchObject({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
        });
      });
    });

    it('should be included in the ClientUserAgent and be added to the UserAgent String', function (done) {
      const appInfo = {
        name: testUtils.getRandomString(),
        version: '1.2.345',
        url: 'https://myawesomeapp.info',
      };

      realTelnyx._setAppInfo(appInfo);

      realTelnyx.getClientUserAgent(function (uaString) {
        expect(JSON.parse(uaString).application).toMatchObject(appInfo);

        expect(realTelnyx.getAppInfoAsString()).toMatchObject(
          appInfo.name + '/' + appInfo.version + ' (' + appInfo.url + ')',
        );

        done();
      });
    });
  });

  describe('Callback support', function () {
    describe('Any given endpoint', function () {
      it('Will call a callback if successful', function () {
        return expect(
          new Promise(function (resolve, _reject) {
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            realTelnyx.messagingProfiles.create(
              MESSAGING_PROFILE_DETAILS,
              function (_err, _mp) {
                resolve('Called!');
              },
            );
          }),
        ).toBe('Called!');
      });

      it('Will expose HTTP response object', function () {
        return expect(
          new Promise(function (resolve, _reject) {
            const options = {
              host: realTelnyx.getConstant('DEFAULT_HOST'),
              path: '/v2/messaging_profiles',
            };
            nock('https://' + options.host + ':443')
              .post(options.path)
              .reply(
                200,
                {data: {record_type: 'messaging_profile', id: 1}},
                {'request-id': 'foo'},
              );

            // @ts-expect-error TODO: import .d.ts files under src/test folder
            realTelnyx.messagingProfiles.create(
              MESSAGING_PROFILE_DETAILS,
              function (_err, mp) {
                const headers = mp.lastResponse.headers;
                expect(headers).toHaveProperty('request-id');

                expect(mp.lastResponse.statusCode).toBe(200);
                expect(nock.isDone());

                resolve('Called!');
              },
            );
          }),
        ).toBe('Called!');
      });

      it('Given an error the callback will receive it', function () {
        return expect(
          new Promise(function (resolve, reject) {
            // @ts-expect-error TODO: import .d.ts files under src/test folder
            realTelnyx.messagingProfiles.create(
              MESSAGING_PROFILE_DETAILS,
              function (err, _messagingProfile) {
                if (err) {
                  resolve('ErrorWasPassed');
                } else {
                  reject(new Error('NoErrorPassed'));
                }
              },
            );
          }),
        ).toBe('ErrorWasPassed');
      });
    });
  });

  describe('errors', function () {
    it('Exports errors as types', function () {
      expect(
        new TelnyxNode.errors.TelnyxInvalidRequestError({
          message: 'error',
        }).type,
      ).toBe('TelnyxInvalidRequestError');
    });
  });

  describe('setMaxNetworkRetries', function () {
    describe('when given an empty or non-number variable', function () {
      it('should error', function () {
        expect(function () {
          realTelnyx.setMaxNetworkRetries('foo' as unknown as number);
        }).toThrow(/maxNetworkRetries must be a number/);

        expect(function () {
          realTelnyx.setMaxNetworkRetries(undefined as unknown as number);
        }).toThrow(/maxNetworkRetries must be a number/);
      });
    });
  });
});
