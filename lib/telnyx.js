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
  ActivateDeactivateBulkCredentials: require('./resources/ActivateDeactivateBulkCredentials'),
  AccessIpAddress: require('./resources/AccessIpAddress'),
  AccessIpRanges: require('./resources/AccessIpRanges'),
  Actions: require('./resources/Actions'),
  AccessTokens: require('./resources/AccessTokens'),
  ActionsSimCards: require('./resources/ActionsSimCards'),
  Addresses: require('./resources/Addresses'),
  AI: require('./resources/AI'),
  Autorechargepreferences: require('./resources/Autorechargepreferences'),
  AuthenticationProviders: require('./resources/AuthenticationProviders'),
  AvailablePhoneNumbers: require('./resources/AvailablePhoneNumbers'),
  Balance: require('./resources/Balance'),
  Billing: require('./resources/Billing'),
  BillingGroups: require('./resources/BillingGroups'),
  Brands: require('./resources/Brands'),
  BulkCreation: require('./resources/BulkCreation'),
  BulkCredentials: require('./resources/BulkCredentials'),
  BulkPhoneNumberCampaigns: require('./resources/BulkPhoneNumberCampaigns'),
  BulkPhoneNumberOperations: require('./resources/BulkPhoneNumberOperations'),
  BulkSoleProprietorCreation: require('./resources/BulkSoleProprietorCreation'),
  BulkTelephonyCredentials: require('./resources/BulkTelephonyCredentials'),
  Bucket: require('./resources/Bucket'),
  BucketUsage: require('./resources/BucketUsage'),
  BusinessIdentity: require('./resources/BusinessIdentity'),
  CallControlApplications: require('./resources/CallControlApplications'),
  CallEvents: require('./resources/CallEvents'),
  CallInformation: require('./resources/CallInformation'),
  CallRecordings: require('./resources/CallRecordings'),
  Calls: require('./resources/Calls'),
  Campaign: require('./resources/Campaign'),
  CampaignBuilder: require('./resources/CampaignBuilder'),
  CdrUsageReports: require('./resources/CdrUsageReports'),
  Channelzones: require('./resources/Channelzones'),
  ClientStateUpdate: require('./resources/ClientStateUpdate'),
  Connections: require('./resources/Connections'),
  Conferences: require('./resources/Conferences'),
  CredentialConnections: require('./resources/CredentialConnections'),
  Credentials: require('./resources/Credentials'),
  CsvDownloads: require('./resources/CsvDownloads'),
  CustomerServiceRecord: require('./resources/CustomerServiceRecord'),
  Debugging: require('./resources/Debugging'),
  DetailRecords: require('./resources/DetailRecords'),
  DialogflowIntegration: require('./resources/DialogflowIntegration'),
  DocumentLinks: require('./resources/DocumentLinks'),
  Documents: require('./resources/Documents'),
  DynamicEmergency: require('./resources/DynamicEmergency'),
  DynamicEmergencyAddresses: require('./resources/DynamicEmergencyAddresses'),
  DynamicEmergencyEndpoints: require('./resources/DynamicEmergencyEndpoints'),
  Events: require('./resources/Events'),
  ExternalConnections: require('./resources/ExternalConnections'),
  FaxApplications: require('./resources/FaxApplications'),
  Faxes: require('./resources/Faxes'),
  FqdnConnections: require('./resources/FqdnConnections'),
  Fqdns: require('./resources/Fqdns'),
  GlobalIps: require('./resources/GlobalIps'),
  IpAddresses: require('./resources/IpAddresses'),
  IpConnections: require('./resources/IpConnections'),
  IpRanges: require('./resources/IpRanges'),
  Ips: require('./resources/Ips'),
  InventoryCoverage: require('./resources/InventoryCoverage'),
  InventoryLevel: require('./resources/InventoryLevel'),
  InboundChannels: require('./resources/InboundChannels'),
  ManagedAccounts: require('./resources/ManagedAccounts'),
  MediaStorageApi: require('./resources/MediaStorageApi'),
  MessagingHostedNumber: require('./resources/MessagingHostedNumber'),
  MessagingHostedNumberOrders: require('./resources/MessagingHostedNumberOrders'),
  MessagingHostedNumbers: require('./resources/MessagingHostedNumbers'),
  MessagingPhoneNumbers: require('./resources/MessagingPhoneNumbers'),
  MessagingProfileMetrics: require('./resources/MessagingProfileMetrics'),
  MessagingProfiles: require('./resources/MessagingProfiles'),
  MessagingSenderIds: require('./resources/MessagingSenderIds'),
  MessagingShortCodes: require('./resources/MessagingShortCodes'),
  MessagingTollfreeVerification: require('./resources/MessagingTollfreeVerification'),
  MessagingUrlDomains: require('./resources/MessagingUrlDomains'),
  Messages: require('./resources/Messages'),
  MessagesAlphanumericSenderId: require('./resources/MessagesAlphanumericSenderId'),
  MdrDetailReports: require('./resources/MdrDetailReports'),
  MdrUsageReports: require('./resources/MdrUsageReports'),
  MobileNetworkOperators: require('./resources/MobileNetworkOperators'),
  MobileOperatorNetworks: require('./resources/MobileOperatorNetworks'),
  Networks: require('./resources/Networks'),
  NumberBackgroundJobs: require('./resources/NumberBackgroundJobs'),
  NumberLookup: require('./resources/NumberLookup'),
  NumberOrderDocuments: require('./resources/NumberOrderDocuments'),
  NumberOrders: require('./resources/NumberOrders'),
  NumberPortouts: require('./resources/NumberPortouts'),
  NumberReservations: require('./resources/NumberReservations'),
  NumbersFeatures: require('./resources/NumbersFeatures'),
  Object: require('./resources/Object'),
  OtaUpdates: require('./resources/OtaUpdates'),
  Outbound: require('./resources/Outbound'),
  OutboundVoiceProfiles: require('./resources/OutboundVoiceProfiles'),
  PhoneNumberAssignmentByProfile: require('./resources/PhoneNumberAssignmentByProfile'),
  PhoneNumberBlockOrders: require('./resources/PhoneNumberBlockOrders'),
  PhoneNumberBlocksBackgroundJobs: require('./resources/PhoneNumberBlocksBackgroundJobs'),
  PhoneNumberCampaigns: require('./resources/PhoneNumberCampaigns'),
  PhoneNumberOrderDocuments: require('./resources/PhoneNumberOrderDocuments'),
  PhoneNumberRegulatoryRequirements: require('./resources/PhoneNumberRegulatoryRequirements'),
  PhoneNumberSearch: require('./resources/PhoneNumberSearch'),
  PhoneNumbers: require('./resources/PhoneNumbers'),
  PhoneNumbersInboundChannels: require('./resources/PhoneNumbersInboundChannels'),
  PhoneNumbersMessaging: require('./resources/PhoneNumbersMessaging'),
  PhoneNumbersVoice: require('./resources/PhoneNumbersVoice'),
  PortabilityChecks: require('./resources/PortabilityChecks'),
  PortingOrders: require('./resources/PortingOrders'),
  PortingPhoneNumbers: require('./resources/PortingPhoneNumbers'),
  PortoutRequests: require('./resources/PortoutRequests'),
  PresignedObjectUrls: require('./resources/PresignedObjectUrls'),
  PrivateWirelessGateways: require('./resources/PrivateWirelessGateways'),
  PublicInternetGateways: require('./resources/PublicInternetGateways'),
  PublicKey: require('./resources/PublicKey'),
  PushCredentials: require('./resources/PushCredentials'),
  Queues: require('./resources/Queues'),
  Regions: require('./resources/Regions'),
  RegisterCall: require('./resources/RegisterCall'),
  RegulatoryRequirements: require('./resources/RegulatoryRequirements'),
  RequirementTypes: require('./resources/RequirementTypes'),
  Requirements: require('./resources/Requirements'),
  Reporting: require('./resources/Reporting'),
  Reports: require('./resources/Reports'),
  ReportsMdrs: require('./resources/ReportsMdrs'),
  RoomClientToken: require('./resources/RoomsClientToken'),
  RoomCompositions: require('./resources/RoomCompositions'),
  RoomParticipants: require('./resources/RoomParticipants'),
  RoomRecordings: require('./resources/RoomRecordings'),
  RoomSessions: require('./resources/RoomSessions'),
  Rooms: require('./resources/Rooms'),
  RoomsClientToken: require('./resources/RoomsClientToken'),
  RoomsClientTokens: require('./resources/RoomsClientTokens'),
  SharedCampaigns: require('./resources/SharedCampaigns'),
  ShortCodes: require('./resources/ShortCodes'),
  SimCardActions: require('./resources/SimCardActions'),
  SimCardGroupActions: require('./resources/SimCardGroupActions'),
  SimCardGroups: require('./resources/SimCardGroups'),
  SimCardOrders: require('./resources/SimCardOrders'),
  SimCards: require('./resources/SimCards'),
  SslCertificates: require('./resources/SslCertificates'),
  TelephonyCredentials: require('./resources/TelephonyCredentials'),
  TeXMLApplication: require('./resources/TeXMLApplication'),
  UpdateClientState: require('./resources/UpdateClientState'),
  VerifiedCallsDisplayProfile: require('./resources/VerifiedCallsDisplayProfile'),
  VerifiedCallsDisplayProfiles: require('./resources/VerifiedCallsDisplayProfiles'),
  VerifiedNumbers: require('./resources/VerifiedNumbers'),
  Verifications: require('./resources/Verifications'),
  VerifyProfiles: require('./resources/VerifyProfiles'),
  VirtualCrossConnects: require('./resources/VirtualCrossConnects'),
  WebhooksApi: require('./resources/Webhooks'),
  WdrDetailReports: require('./resources/WdrDetailReports'),
  WireguardInterfaces: require('./resources/WireguardInterfaces'),
  WirelessDetailRecordReports: require('./resources/WirelessDetailRecordReports'),
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
  setHost: function (host, port, protocol) {
    this._setApiField('host', host);
    if (port) {
      this.setPort(port);
    }
    if (protocol) {
      this.setProtocol(protocol);
    }
  },

  setProtocol: function (protocol) {
    this._setApiField('protocol', protocol.toLowerCase());
  },

  setPort: function (port) {
    this._setApiField('port', port);
  },

  setApiKey: function (key) {
    if (key) {
      this._setApiField('auth', 'Bearer ' + key);
    }
  },

  setTimeout: function (timeout) {
    this._setApiField(
      'timeout',
      timeout == null ? Telnyx.DEFAULT_TIMEOUT : timeout
    );
  },

  setAppInfo: function (info) {
    if (info && typeof info !== 'object') {
      throw new Error('AppInfo must be an object.');
    }

    if (info && !info.name) {
      throw new Error('AppInfo.name is required');
    }

    info = info || {};

    var appInfo = APP_INFO_PROPERTIES.reduce(function (accum, prop) {
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

  setHttpAgent: function (agent) {
    if (agent instanceof https.Agent) {
      this._setApiField('https_agent', agent);
    } else {
      this._setApiField('http_agent', agent);
    }
  },

  _setApiField: function (key, value) {
    this._api[key] = value;
  },

  getApiField: function (key) {
    return this._api[key];
  },

  setClientId: function (clientId) {
    this._clientId = clientId;
  },

  getClientId: function () {
    return this._clientId;
  },

  getConstant: function (c) {
    return Telnyx[c];
  },

  getMaxNetworkRetries: function () {
    return this.getApiField('maxNetworkRetries');
  },

  setMaxNetworkRetries: function (maxNetworkRetries) {
    if (
      (maxNetworkRetries && typeof maxNetworkRetries !== 'number') ||
      arguments.length < 1
    ) {
      throw new Error('maxNetworkRetries must be a number.');
    }

    this._setApiField('maxNetworkRetries', maxNetworkRetries);
  },

  getMaxNetworkRetryDelay: function () {
    return this.getConstant('MAX_NETWORK_RETRY_DELAY_SEC');
  },

  getInitialNetworkRetryDelay: function () {
    return this.getConstant('INITIAL_NETWORK_RETRY_DELAY_SEC');
  },

  // Gets a JSON version of a User-Agent and uses a cached version for a slight
  // speed advantage.
  getClientUserAgent: function (cb) {
    if (Telnyx.USER_AGENT_SERIALIZED) {
      return cb(Telnyx.USER_AGENT_SERIALIZED);
    }
    this.getClientUserAgentSeeded(Telnyx.USER_AGENT, function (cua) {
      Telnyx.USER_AGENT_SERIALIZED = cua;
      cb(Telnyx.USER_AGENT_SERIALIZED);
    });
  },

  // Gets a JSON version of a User-Agent by encoding a seeded object and
  // fetching a uname from the system.
  getClientUserAgentSeeded: function (seed, cb) {
    var self = this;

    exec('uname -a', function (err, uname) {
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

  getAppInfoAsString: function () {
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

  _buildDefaultAgent: function (protocol) {
    var httpLib = protocol === 'http' ? http : https;
    return new httpLib.Agent({keepAlive: true});
  },

  _prepResources: function () {
    for (var name in resources) {
      this._instantiateResource(name, this);

      this[utils.toSingular(name)] = this._createConstructor(name, this);
    }
  },

  _instantiateResource: function (name, self) {
    var camelCaseName = utils.pascalToCamelCase(name);

    self[camelCaseName] = new resources[name](self);

    return self[camelCaseName];
  },

  _createConstructor: function (resourceName, self) {
    return function (args) {
      return Object.assign(
        self._instantiateResource(resourceName, self),
        args || {}
      );
    };
  },
};

module.exports = Telnyx;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Telnyx = Telnyx;
