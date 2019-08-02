'use strict';

var testUtils = require('../testUtils');
var realTelnyx = require('../lib/telnyx')(testUtils.getUserTelnyxKey());

var nock = require('nock');
var http = require('http');
var https = require('https');

var expect = require('chai').expect;

var MESSAGING_PROFILE_DETAILS = {
  name: 'Summer Campaign',
};

describe('Telnyx Module', function() {
  this.timeout(20000);

  describe('setApiKey', function() {
    it('uses Bearer auth', function() {
      expect(realTelnyx.getApiField('auth')).to.equal('Bearer ' + testUtils.getUserTelnyxKey());
    });
  });

  describe('setHttpAgent', function() {
    var origHttpAgent, origHttpsAgent;
    beforeEach(function() {
      origHttpAgent = realTelnyx.getApiField('http_agent');
      origHttpsAgent = realTelnyx.getApiField('https_agent');
      realTelnyx._setApiField('http_agent', null);
      realTelnyx._setApiField('https_agent', null);
    });
    afterEach(function() {
      realTelnyx._setApiField('http_agent', origHttpAgent);
      realTelnyx._setApiField('https_agent', origHttpsAgent);
    });
    describe('when given an https.Agent', function() {
      it('should save the agent as https_agent', function() {
        var agent = new https.Agent();
        realTelnyx.setHttpAgent(agent);
        expect(realTelnyx.getApiField('https_agent')).to.equal(agent);
        expect(realTelnyx.getApiField('http_agent')).to.be.null;
      });
    });
    describe('when given an http.Agent', function() {
      it('should save the agent as http_agent', function() {
        var agent = new http.Agent();
        realTelnyx.setHttpAgent(agent);
        expect(realTelnyx.getApiField('http_agent')).to.equal(agent);
        expect(realTelnyx.getApiField('https_agent')).to.be.null;
      });
    });
  });

  describe('GetClientUserAgent', function() {
    it('Should return a user-agent serialized JSON object', function() {
      return expect(new Promise(function(resolve, reject) {
        realTelnyx.getClientUserAgent(function(c) {
          resolve(JSON.parse(c));
        });
      })).to.eventually.have.property('lang', 'node');
    });
  });

  describe('GetClientUserAgentSeeded', function() {
    it('Should return a user-agent serialized JSON object', function() {
      var userAgent = {lang: 'node'};
      return expect(new Promise(function(resolve, reject) {
        realTelnyx.getClientUserAgentSeeded(userAgent, function(c) {
          resolve(JSON.parse(c));
        });
      })).to.eventually.have.property('lang', 'node');
    });

    it('Should URI-encode user-agent fields', function() {
      var userAgent = {lang: 'ï'};
      return expect(new Promise(function(resolve, reject) {
        realTelnyx.getClientUserAgentSeeded(userAgent, function(c) {
          resolve(JSON.parse(c));
        });
      })).to.eventually.have.property('lang', '%C3%AF');
    })
  });

  describe('setTimeout', function() {
    it('Should define a default equal to the node default', function() {
      expect(realTelnyx.getApiField('timeout')).to.equal(http.createServer().timeout);
    });
    it('Should allow me to set a custom timeout', function() {
      realTelnyx.setTimeout(900);
      expect(realTelnyx.getApiField('timeout')).to.equal(900);
    });
    it('Should allow me to set null, to reset to the default', function() {
      realTelnyx.setTimeout(null);
      expect(realTelnyx.getApiField('timeout')).to.equal(http.createServer().timeout);
    });
  });

  describe('setAppInfo', function() {
    describe('when given nothing or an empty object', function() {
      it('should unset telnyx._appInfo', function() {
        realTelnyx.setAppInfo();
        expect(realTelnyx._appInfo).to.be.undefined;
      });
    });

    describe('when given an object with no `name`', function() {
      it('should throw an error', function() {
        expect(function() {
          realTelnyx.setAppInfo({});
        }).to.throw(/AppInfo.name is required/);

        expect(function() {
          realTelnyx.setAppInfo({
            version: '1.2.3',
          });
        }).to.throw(/AppInfo.name is required/);

        expect(function() {
          realTelnyx.setAppInfo({
            cats: '42',
          });
        }).to.throw(/AppInfo.name is required/);
      });
    });

    describe('when given at least a `name`', function() {
      it('should set name, partner ID, url, and version of telnyx._appInfo', function() {
        realTelnyx.setAppInfo({
          name: 'MyAwesomeApp',
        });
        expect(realTelnyx._appInfo).to.eql({
          name: 'MyAwesomeApp',
        });

        realTelnyx.setAppInfo({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });
        expect(realTelnyx._appInfo).to.eql({
          name: 'MyAwesomeApp',
          version: '1.2.345',
        });

        realTelnyx.setAppInfo({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });
        expect(realTelnyx._appInfo).to.eql({
          name: 'MyAwesomeApp',
          url: 'https://myawesomeapp.info',
        });

        realTelnyx.setAppInfo({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
        });
        expect(realTelnyx._appInfo).to.eql({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
        });

      });

      it('should ignore any invalid properties', function() {
        realTelnyx.setAppInfo({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
          countOfRadishes: 512,
        });
        expect(realTelnyx._appInfo).to.eql({
          name: 'MyAwesomeApp',
          partner_id: 'partner_1234',
          version: '1.2.345',
          url: 'https://myawesomeapp.info',
        });
      });
    });

    it('should be included in the ClientUserAgent and be added to the UserAgent String', function(done) {
      var appInfo = {
        name: testUtils.getRandomString(),
        version: '1.2.345',
        url: 'https://myawesomeapp.info',
      };

      realTelnyx.setAppInfo(appInfo);

      realTelnyx.getClientUserAgent(function(uaString) {
        expect(JSON.parse(uaString).application).to.eql(appInfo);

        expect(realTelnyx.getAppInfoAsString()).to.eql(appInfo.name + '/' + appInfo.version + ' (' + appInfo.url + ')');

        done();
      });
    });
  });

  describe('Callback support', function() {
    describe('Any given endpoint', function() {
      it('Will call a callback if successful', function() {
        return expect(new Promise(function(resolve, reject) {
          realTelnyx.messagingProfiles.create(MESSAGING_PROFILE_DETAILS, function(err, mp) {
            resolve('Called!');
          });
        })).to.eventually.equal('Called!');
      });

      it('Will expose HTTP response object', function() {
        return expect(new Promise(function(resolve, reject) {
          var options = {
            host: realTelnyx.getConstant('DEFAULT_HOST'),
            path: '/v2/messaging_profiles',
          };
          nock('https://' + options.host + ':443')
            .post(options.path)
            .reply(200, {data: {record_type: 'messaging_profile', id: 1}}, {'request-id': 'foo'})

          realTelnyx.messagingProfiles.create(MESSAGING_PROFILE_DETAILS, function(err, mp) {
            var headers = mp.lastResponse.headers;
            expect(headers).to.contain.keys('request-id');

            expect(mp.lastResponse.statusCode).to.equal(200);
            expect(nock.isDone());

            resolve('Called!');
          });
        })).to.eventually.equal('Called!');
      });

      it('Given an error the callback will receive it', function() {
        return expect(new Promise(function(resolve, reject) {
          realTelnyx.messagingProfiles.create(MESSAGING_PROFILE_DETAILS, function(err, messagingProfile) {
            if (err) {
              resolve('ErrorWasPassed');
            } else {
              reject(new Error('NoErrorPassed'));
            }
          });
        })).to.eventually.become('ErrorWasPassed');
      });
    });
  });

  describe('errors', function() {
    it('Exports errors as types', function() {
      var Telnyx = require('../lib/telnyx');
      expect(new Telnyx.errors.TelnyxInvalidRequestError({
        message: 'error'
      }).type).to.equal('TelnyxInvalidRequestError');
    });
  });

  describe('setMaxNetworkRetries', function() {
    describe('when given an empty or non-number variable', function() {
      it('should error', function() {
        expect(function() {
          realTelnyx.setMaxNetworkRetries('foo');
        }).to.throw(/maxNetworkRetries must be a number/);

        expect(function() {
          realTelnyx.setMaxNetworkRetries();
        }).to.throw(/maxNetworkRetries must be a number/);
      });
    });
  });
});
