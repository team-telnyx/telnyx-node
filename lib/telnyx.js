'use strict';

Telnyx.DEFAULT_HOST = process.env.TELNYX_API_BASE || 'api.telnyx.com';
Telnyx.DEFAULT_PORT = '443';
Telnyx.DEFAULT_BASE_PATH = '/v2/';

// Use node's default timeout:
Telnyx.DEFAULT_TIMEOUT = require('http').createServer().timeout;

Telnyx.PACKAGE_VERSION = require('../package.json').version;

Telnyx.USER_AGENT = {
  bindings_version: Telnyx.PACKAGE_VERSION,
  lang: 'node',
  lang_version: process.version,
  platform: process.platform,
  publisher: 'telnyx',
  uname: null,
};

Telnyx.USER_AGENT_SERIALIZED = null;

Telnyx.MAX_NETWORK_RETRY_DELAY_SEC = 2;
Telnyx.INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;

var APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];

var http = require('http');
var https = require('https');

var EventEmitter = require('events').EventEmitter;
var exec = require('child_process').exec;
var utils = require('./utils');

var resources = {
  AvailablePhoneNumbers: require('./resources/AvailablePhoneNumbers'),
  Events: require('./resources/Events'),
  Messages: require('./resources/Messages'),
  MessagingHostedNumbers: require('./resources/MessagingHostedNumbers'),
  MessagingHostedNumberOrders: require('./resources/MessagingHostedNumberOrders'),
  MessagingPhoneNumbers: require('./resources/MessagingPhoneNumbers'),
  MessagingProfiles: require('./resources/MessagingProfiles'),
  MessagingSenderIds: require('./resources/MessagingSenderIds'),
  MessagingShortCodes: require('./resources/MessagingShortCodes'),
  NumberOrders: require('./resources/NumberOrders'),
  NumberReservations: require('./resources/NumberReservations'),
  PhoneNumbers: require('./resources/PhoneNumbers'),
  Calls: require('./resources/Calls'),
  Conferences: require('./resources/Conferences'),
  CallEvents: require('./resources/CallEvents'),
  PublicKey: require('./resources/PublicKey'),
  SimCards: require('./resources/SimCards'),
  BillingGroups: require('./resources/BillingGroups'),
  Ips: require('./resources/Ips'),
  Fqdns: require('./resources/Fqdns'),
  Connections: require('./resources/Connections'),
  IpConnections: require('./resources/IpConnections'),
  FqdnConnections: require('./resources/FqdnConnections'),
  CredentialConnections: require('./resources/CredentialConnections'),
  RegulatoryRequirements: require('./resources/RegulatoryRequirements'),
  PhoneNumberRegulatoryRequirements: require('./resources/PhoneNumberRegulatoryRequirements'),
  NumberOrderDocuments: require('./resources/NumberOrderDocuments'),
  Actions: require('./resources/Actions'),
  OutboundVoiceProfiles: require('./resources/Outbound'),
  CallControlApplications: require('./resources/CallControlApplications'),
  PhoneNumbersInboundChannels: require('./resources/PhoneNumbersInboundChannels'),
  OtaUpdates: require('./resources/OtaUpdates'),
  MobileOperatorNetworks: require('./resources/MobileOperatorNetworks'),
  SimCardGroups: require('./resources/SimCardGroups'),
  NumberLookup: require('./resources/NumberLookup'),
  Balance: require('./resources/Balance'),
  Addresses: require('./resources/Addresses'),
  Faxes: require('./resources/Faxes'),
  FaxApplications: require('./resources/FaxApplications'),
  ShortCodes: require('./resources/ShortCodes'),
  MessagingProfileMetrics: require('./resources/MessagingProfileMetrics'),
  TelephonyCredentials: require('./resources/TelephonyCredentials'),
  VerifyProfiles: require('./resources/VerifyProfiles'),
  Verifications: require('./resources/Verifications'),
};

Telnyx.TelnyxResource = require('./TelnyxResource');
Telnyx.resources = resources;

function Telnyx(key, version) {
  if (!(this instanceof Telnyx)) {
    return new Telnyx(key, version);
  }

  Object.defineProperty(this, '_emitter', {
    value: new EventEmitter(),
    enumerable: false,
    configurable: false,
    writeable: false,
  });

  this.on = this._emitter.on.bind(this._emitter);
  this.off = this._emitter.removeListener.bind(this._emitter);

  this._api = {
    auth: null,
    host: Telnyx.DEFAULT_HOST,
    port: Telnyx.DEFAULT_PORT,
    basePath: Telnyx.DEFAULT_BASE_PATH,
    timeout: Telnyx.DEFAULT_TIMEOUT,
    http_agent: this._buildDefaultAgent('http'),
    https_agent: this._buildDefaultAgent('https'),
    dev: false,
    maxNetworkRetries: 0,
  };

  this.setApiKey(key);
  this._prepResources();

  this.errors = require('./Error');
  this.webhooks = require('./Webhooks');

  this._prevRequestMetrics = [];
}

Telnyx.errors = require('./Error');
Telnyx.webhooks = require('./Webhooks');

Telnyx.prototype = {
  setHost: function(host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function(protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort: function(port) {
    this._setApiField('port', port);
  },

  setApiKey: function(key) {
    if (key) {
      this._setApiField(
        'auth',
        'Bearer ' + key
      );
    }
  },

  setTimeout: function(timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Telnyx.DEFAULT_TIMEOUT : timeout
    );
  },

  setAppInfo: function(info) {
    if (info && typeof info !== 'object') {
      throw new Error('AppInfo must be an object.');
    }

    if (info && !info.name) {
      throw new Error('AppInfo.name is required');
    }

    info = info || {};

    var appInfo = APP_INFO_PROPERTIES.reduce(function(accum, prop) {
      if (typeof info[prop] == 'string') {
        accum = accum || {};

        accum[prop] = info[prop];
      }

      return accum;
    }, undefined);

    // Kill the cached UA string because it may no longer be valid
    Telnyx.USER_AGENT_SERIALIZED = undefined;

    this._appInfo = appInfo;
  },

  setHttpAgent: function(agent) {
    if (agent instanceof https.Agent) {
      this._setApiField('https_agent', agent);
    } else {
      this._setApiField('http_agent', agent);
    }
  },

  _setApiField: function(key, value) {
    this._api[key] = value;
  },

  getApiField: function(key) {
    return this._api[key];
  },

  setClientId: function(clientId) {
    this._clientId = clientId;
  },

  getClientId: function() {
    return this._clientId;
  },

  getConstant: function(c) {
    return Telnyx[c];
  },

  getMaxNetworkRetries: function() {
    return this.getApiField('maxNetworkRetries');
  },

  setMaxNetworkRetries: function(maxNetworkRetries) {
    if ((maxNetworkRetries && typeof maxNetworkRetries !== 'number') || arguments.length < 1) {
      throw new Error('maxNetworkRetries must be a number.');
    }

    this._setApiField('maxNetworkRetries', maxNetworkRetries);
  },

  getMaxNetworkRetryDelay: function() {
    return this.getConstant('MAX_NETWORK_RETRY_DELAY_SEC');
  },

  getInitialNetworkRetryDelay: function() {
    return this.getConstant('INITIAL_NETWORK_RETRY_DELAY_SEC');
  },

  // Gets a JSON version of a User-Agent and uses a cached version for a slight
  // speed advantage.
  getClientUserAgent: function(cb) {
    if (Telnyx.USER_AGENT_SERIALIZED) {
      return cb(Telnyx.USER_AGENT_SERIALIZED);
    }
    this.getClientUserAgentSeeded(Telnyx.USER_AGENT, function(cua) {
      Telnyx.USER_AGENT_SERIALIZED = cua;
      cb(Telnyx.USER_AGENT_SERIALIZED);
    })
  },

  // Gets a JSON version of a User-Agent by encoding a seeded object and
  // fetching a uname from the system.
  getClientUserAgentSeeded: function(seed, cb) {
    var self = this;

    exec('uname -a', function(err, uname) {
      var userAgent = {};
      for (var field in seed) {
        userAgent[field] = encodeURIComponent(seed[field]);
      }

      // URI-encode in case there are unusual characters in the system's uname.
      userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

      if (self._appInfo) {
        userAgent.application = self._appInfo;
      }

      cb(JSON.stringify(userAgent));
    });
  },

  getAppInfoAsString: function() {
    if (!this._appInfo) {
      return '';
    }

    var formatted = this._appInfo.name;

    if (this._appInfo.version) {
      formatted += '/' + this._appInfo.version;
    }

    if (this._appInfo.url) {
      formatted += ' (' + this._appInfo.url + ')';
    }

    return formatted;
  },

  _buildDefaultAgent: function(protocol) {
    var httpLib = protocol === 'http' ? http : https;
    return new httpLib.Agent({keepAlive: true});
  },

  _prepResources: function() {
    for (var name in resources) {
      this._instantiateResource(name, this);

      this[utils.toSingular(name)] = this._createConstructor(name, this);
    }
  },

  _instantiateResource: function(name, self) {
    var camelCaseName = utils.pascalToCamelCase(name);

    self[camelCaseName] = new resources[name](self);

    return self[camelCaseName];
  },

  _createConstructor: function(resourceName, self) {
    return function(args) {
      return Object.assign(self._instantiateResource(resourceName, self), args || {});
    }
  },
};

module.exports = Telnyx;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Telnyx = Telnyx;
