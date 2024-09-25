import * as http from 'http';
import * as https from 'https';
import {EventEmitter} from 'events';
import {exec} from 'child_process';
import {AppInfo, TelnyxObject} from './Types';
import * as utils from './utils';

//#region Resources
import {AccessIpAddress} from './resources/AccessIpAddress';
import {AccessIpRanges} from './resources/AccessIpRanges';
import {AccessTokens} from './resources/AccessTokens';
import {Actions} from './resources/Actions';
import {ActionsSimCards} from './resources/ActionsSimCards';
import {ActivateDeactivateBulkCredentials} from './resources/ActivateDeactivateBulkCredentials';
import {Addresses} from './resources/Addresses';
import {AdvancedOptinoptout} from './resources/AdvancedOptinoptout';
import {AI} from './resources/AI';
import {AuthenticationProviders} from './resources/AuthenticationProviders';
import {AvailablePhoneNumbers} from './resources/AvailablePhoneNumbers';
import {Balance} from './resources/Balance';
import {Billing} from './resources/Billing';
import {BillingGroups} from './resources/BillingGroups';
import {Brands} from './resources/Brands';
import {Bucket} from './resources/Bucket';
import {BucketUsage} from './resources/BucketUsage';
import {BulkCreation} from './resources/BulkCreation';
import {BulkCredentials} from './resources/BulkCredentials';
import {BulkPhoneNumberCampaigns} from './resources/BulkPhoneNumberCampaigns';
import {BulkPhoneNumberOperations} from './resources/BulkPhoneNumberOperations';
import {BulkSoleProprietorCreation} from './resources/BulkSoleProprietorCreation';
import {BulkTelephonyCredentials} from './resources/BulkTelephonyCredentials';
import {BusinessIdentity} from './resources/BusinessIdentity';
import {CallControlApplications} from './resources/CallControlApplications';
import {CallEvents} from './resources/CallEvents';
import {CallInformation} from './resources/CallInformation';
import {CallRecordings} from './resources/CallRecordings';
import {Calls} from './resources/Calls';
import {Campaign} from './resources/Campaign';
import {CampaignBuilder} from './resources/CampaignBuilder';
import {CdrUsageReports} from './resources/CdrUsageReports';
import {Channelzones} from './resources/Channelzones';
import {ClientStateUpdate} from './resources/ClientStateUpdate';
import {Conferences} from './resources/Conferences';
import {Connections} from './resources/Connections';
import {CredentialConnections} from './resources/CredentialConnections';
import {Credentials} from './resources/Credentials';
import {CsvDownloads} from './resources/CsvDownloads';
import {CustomerServiceRecord} from './resources/CustomerServiceRecord';
import {Debugging} from './resources/Debugging';
import {DetailRecords} from './resources/DetailRecords';
import {DialogflowIntegration} from './resources/DialogflowIntegration';
import {DocumentLinks} from './resources/DocumentLinks';
import {Documents} from './resources/Documents';
import {DynamicEmergency} from './resources/DynamicEmergency';
import {DynamicEmergencyAddresses} from './resources/DynamicEmergencyAddresses';
import {DynamicEmergencyEndpoints} from './resources/DynamicEmergencyEndpoints';
import {Events} from './resources/Events';
import {ExternalConnections} from './resources/ExternalConnections';
import {FaxApplications} from './resources/FaxApplications';
import {Faxes} from './resources/Faxes';
import {FqdnConnections} from './resources/FqdnConnections';
import {Fqdns} from './resources/Fqdns';
import {GlobalIps} from './resources/GlobalIps';
import {InboundChannels} from './resources/InboundChannels';
import {InventoryCoverage} from './resources/InventoryCoverage';
import {InventoryLevel} from './resources/InventoryLevel';
import {IpAddresses} from './resources/IpAddresses';
import {IpConnections} from './resources/IpConnections';
import {IpRanges} from './resources/IpRanges';
import {Ips} from './resources/Ips';
import {ManagedAccounts} from './resources/ManagedAccounts';
import {MdrDetailReports} from './resources/MdrDetailReports';
import {MdrUsageReports} from './resources/MdrUsageReports';
import {MediaStorageApi} from './resources/MediaStorageApi';
import {Messages} from './resources/Messages';
import {MessagesAlphanumericSenderId} from './resources/MessagesAlphanumericSenderId';
import {MessagingHostedNumber} from './resources/MessagingHostedNumber';
import {MessagingHostedNumberOrders} from './resources/MessagingHostedNumberOrders';
import {MessagingHostedNumbers} from './resources/MessagingHostedNumbers';
import {MessagingPhoneNumbers} from './resources/MessagingPhoneNumbers';
import {MessagingProfileMetrics} from './resources/MessagingProfileMetrics';
import {MessagingProfiles} from './resources/MessagingProfiles';
import {MessagingSenderIds} from './resources/MessagingSenderIds';
import {MessagingShortCodes} from './resources/MessagingShortCodes';
import {MessagingTollfreeVerification} from './resources/MessagingTollfreeVerification';
import {MessagingUrlDomains} from './resources/MessagingUrlDomains';
import {MobileNetworkOperators} from './resources/MobileNetworkOperators';
import {MobileOperatorNetworks} from './resources/MobileOperatorNetworks';
import {Networks} from './resources/Networks';
import {NumberBackgroundJobs} from './resources/NumberBackgroundJobs';
import {NumberLookup} from './resources/NumberLookup';
import {NumberOrderDocuments} from './resources/NumberOrderDocuments';
import {NumberOrders} from './resources/NumberOrders';
import {NumberPortouts} from './resources/NumberPortouts';
import {NumberReservations} from './resources/NumberReservations';
import {NumbersFeatures} from './resources/NumbersFeatures';
import {Object as ObjectResource} from './resources/Object';
import {OtaUpdates} from './resources/OtaUpdates';
import {Outbound} from './resources/Outbound';
import {OutboundVoiceProfiles} from './resources/OutboundVoiceProfiles';
import {Payment} from './resources/Payment';
import {PhoneNumberAssignmentByProfile} from './resources/PhoneNumberAssignmentByProfile';
import {PhoneNumberBlockOrders} from './resources/PhoneNumberBlockOrders';
import {PhoneNumberBlocksBackgroundJobs} from './resources/PhoneNumberBlocksBackgroundJobs';
import {PhoneNumberCampaigns} from './resources/PhoneNumberCampaigns';
import {PhoneNumberOrderDocuments} from './resources/PhoneNumberOrderDocuments';
import {PhoneNumberRegulatoryRequirements} from './resources/PhoneNumberRegulatoryRequirements';
import {PhoneNumbers} from './resources/PhoneNumbers';
import {PhoneNumberSearch} from './resources/PhoneNumberSearch';
import {PhoneNumbersInboundChannels} from './resources/PhoneNumbersInboundChannels';
import {PhoneNumbersMessaging} from './resources/PhoneNumbersMessaging';
import {PhoneNumbersVoice} from './resources/PhoneNumbersVoice';
import {PortabilityChecks} from './resources/PortabilityChecks';
import {PortingOrders} from './resources/PortingOrders';
import {PortingPhoneNumbers} from './resources/PortingPhoneNumbers';
import {PortoutRequests} from './resources/PortoutRequests';
import {PresignedObjectUrls} from './resources/PresignedObjectUrls';
import {PrivateWirelessGateways} from './resources/PrivateWirelessGateways';
import {PublicInternetGateways} from './resources/PublicInternetGateways';
import {PublicKey} from './resources/PublicKey';
import {PushCredentials} from './resources/PushCredentials';
import {Queues} from './resources/Queues';
import {RecordingsCommands} from './resources/RecordingsCommands';
import {Regions} from './resources/Regions';
import {RegisterCall} from './resources/RegisterCall';
import {RegulatoryRequirements} from './resources/RegulatoryRequirements';
import {Reporting} from './resources/Reporting';
import {Reports} from './resources/Reports';
import {ReportsMdrs} from './resources/ReportsMdrs';
import {Requirements} from './resources/Requirements';
import {RequirementTypes} from './resources/RequirementTypes';
import {RoomCompositions} from './resources/RoomCompositions';
import {RoomParticipants} from './resources/RoomParticipants';
import {RoomRecordings} from './resources/RoomRecordings';
import {Rooms} from './resources/Rooms';
import {RoomsClientToken} from './resources/RoomsClientToken';
import {RoomsClientTokens} from './resources/RoomsClientTokens';
import {RoomSessions} from './resources/RoomSessions';
import {SharedCampaigns} from './resources/SharedCampaigns';
import {ShortCodes} from './resources/ShortCodes';
import {SimCardActions} from './resources/SimCardActions';
import {SimCardGroupActions} from './resources/SimCardGroupActions';
import {SimCardGroups} from './resources/SimCardGroups';
import {SimCardOrders} from './resources/SimCardOrders';
import {SimCards} from './resources/SimCards';
import {SslCertificates} from './resources/SslCertificates';
import {TelephonyCredentials} from './resources/TelephonyCredentials';
import {TeXMLApplication} from './resources/TeXMLApplication';
import {UpdateClientState} from './resources/UpdateClientState';
import {Verifications} from './resources/Verifications';
import {VerifiedCallsDisplayProfile} from './resources/VerifiedCallsDisplayProfile';
import {VerifiedCallsDisplayProfiles} from './resources/VerifiedCallsDisplayProfiles';
import {VerifiedNumbers} from './resources/VerifiedNumbers';
import {Verify} from './resources/Verify';
import {VerifyProfiles} from './resources/VerifyProfiles';
import {VirtualCrossConnects} from './resources/VirtualCrossConnects';
import {WdrDetailReports} from './resources/WdrDetailReports';
import {Webhooks as WebhooksResource} from './resources/Webhooks';
import {WireguardInterfaces} from './resources/WireguardInterfaces';
import {WirelessDetailRecordReports} from './resources/WirelessDetailRecordReports';
//

import TelnyxResource from './TelnyxResource';
import * as _Error from './Error';
import Webhooks from './Webhooks';

export function createTelnyx() {
  Telnyx.DEFAULT_HOST = process.env.TELNYX_API_BASE || 'api.telnyx.com';
  Telnyx.DEFAULT_PORT = '443';
  Telnyx.DEFAULT_BASE_PATH = '/v2/';

  // Use node's default timeout:
  Telnyx.DEFAULT_TIMEOUT = http.createServer().timeout;

  Telnyx.PACKAGE_VERSION = process.env.npm_package_version || '2.x';
  Telnyx.REQUESTS = [] as Array<unknown>;
  Telnyx.LAST_REQUEST = null as unknown;

  Telnyx.USER_AGENT = {
    bindings_version: Telnyx.PACKAGE_VERSION,
    lang: 'node',
    lang_version: process.version,
    platform: process.platform,
    publisher: 'telnyx',
    uname: null,
  };

  Telnyx.USER_AGENT_SERIALIZED = process.env.USER_AGENT_SERIALIZED || null;

  Telnyx.MAX_NETWORK_RETRY_DELAY_SEC = 2;
  Telnyx.INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;

  const APP_INFO_PROPERTIES = ['name', 'version', 'url', 'partner_id'];

  // #region Resources Definition
  const resources = {
    AccessIpAddress,
    AccessIpRanges,
    AccessTokens,
    Actions,
    ActionsSimCards,
    ActivateDeactivateBulkCredentials,
    Addresses,
    AdvancedOptinoptout,
    AI,
    AuthenticationProviders,
    AvailablePhoneNumbers,
    Balance,
    Billing,
    BillingGroups,
    Brands,
    Bucket,
    BucketUsage,
    BulkCreation,
    BulkCredentials,
    BulkPhoneNumberCampaigns,
    BulkPhoneNumberOperations,
    BulkSoleProprietorCreation,
    BulkTelephonyCredentials,
    BusinessIdentity,
    CallControlApplications,
    CallEvents,
    CallInformation,
    CallRecordings,
    Calls,
    Campaign,
    CampaignBuilder,
    CdrUsageReports,
    Channelzones,
    ClientStateUpdate,
    Conferences,
    Connections,
    CredentialConnections,
    Credentials,
    CsvDownloads,
    CustomerServiceRecord,
    Debugging,
    DetailRecords,
    DialogflowIntegration,
    DocumentLinks,
    Documents,
    DynamicEmergency,
    DynamicEmergencyAddresses,
    DynamicEmergencyEndpoints,
    Events,
    ExternalConnections,
    FaxApplications,
    Faxes,
    FqdnConnections,
    Fqdns,
    GlobalIps,
    InboundChannels,
    InventoryCoverage,
    InventoryLevel,
    IpAddresses,
    IpConnections,
    IpRanges,
    Ips,
    ManagedAccounts,
    MdrDetailReports,
    MdrUsageReports,
    MediaStorageApi,
    Messages,
    MessagesAlphanumericSenderId,
    MessagingHostedNumber,
    MessagingHostedNumberOrders,
    MessagingHostedNumbers,
    MessagingPhoneNumbers,
    MessagingProfileMetrics,
    MessagingProfiles,
    MessagingSenderIds,
    MessagingShortCodes,
    MessagingTollfreeVerification,
    MessagingUrlDomains,
    MobileNetworkOperators,
    MobileOperatorNetworks,
    Networks,
    NumberBackgroundJobs,
    NumberLookup,
    NumberOrderDocuments,
    NumberOrders,
    NumberPortouts,
    NumberReservations,
    NumbersFeatures,
    Object: ObjectResource,
    OtaUpdates,
    Outbound,
    OutboundVoiceProfiles,
    Payment,
    PhoneNumberAssignmentByProfile,
    PhoneNumberBlockOrders,
    PhoneNumberBlocksBackgroundJobs,
    PhoneNumberCampaigns,
    PhoneNumberOrderDocuments,
    PhoneNumberRegulatoryRequirements,
    PhoneNumbers,
    PhoneNumberSearch,
    PhoneNumbersInboundChannels,
    PhoneNumbersMessaging,
    PhoneNumbersVoice,
    PortabilityChecks,
    PortingOrders,
    PortingPhoneNumbers,
    PortoutRequests,
    PresignedObjectUrls,
    PrivateWirelessGateways,
    PublicInternetGateways,
    PublicKey,
    PushCredentials,
    Queues,
    RecordingsCommands,
    Regions,
    RegisterCall,
    RegulatoryRequirements,
    Reporting,
    Reports,
    ReportsMdrs,
    Requirements,
    RequirementTypes,
    RoomCompositions,
    RoomParticipants,
    RoomRecordings,
    Rooms,
    RoomsClientToken,
    RoomsClientTokens,
    RoomSessions,
    SharedCampaigns,
    ShortCodes,
    SimCardActions,
    SimCardGroupActions,
    SimCardGroups,
    SimCardOrders,
    SimCards,
    SslCertificates,
    TelephonyCredentials,
    TeXMLApplication,
    UpdateClientState,
    Verifications,
    VerifiedCallsDisplayProfile,
    VerifiedCallsDisplayProfiles,
    VerifiedNumbers,
    Verify,
    VerifyProfiles,
    VirtualCrossConnects,
    WdrDetailReports,
    Webhooks: WebhooksResource,
    WireguardInterfaces,
    WirelessDetailRecordReports,
  };
  //

  Telnyx.TelnyxResource = TelnyxResource;
  Telnyx.resources = resources;

  function Telnyx(this: TelnyxObject, key: string, version?: string): void {
    if (!(this instanceof Telnyx)) {
      // needed for this constructor to be used without `new`
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return new (Telnyx as any)(key, version);
    }

    Object.defineProperty(this, '_emitter', {
      value: new EventEmitter(),
      enumerable: false,
      configurable: false,
      writable: false,
    });

    this.on = this._emitter.on.bind(this._emitter);
    this.off = this._emitter.removeListener.bind(this._emitter);

    this._api = {
      auth: null,
      host: Telnyx.DEFAULT_HOST,
      port: Telnyx.DEFAULT_PORT,
      protocol: 'https',
      basePath: Telnyx.DEFAULT_BASE_PATH,
      timeout: Telnyx.DEFAULT_TIMEOUT,
      http_agent: new http.Agent({keepAlive: true}),
      https_agent: new https.Agent({keepAlive: true}),
      dev: false,
      maxNetworkRetries: 0,
    };

    this._setApiKey(key);
    this._prepResources();

    this.errors = _Error;
    this.webhooks = Webhooks;

    this._prevRequestMetrics = [];
  }

  Telnyx.errors = _Error;
  Telnyx.webhooks = Webhooks;

  Telnyx.prototype = {
    // Properties are set in the constructor above
    _appInfo: undefined!,
    on: null!,
    off: null!,
    once: null!,
    VERSION: null!,
    TelnyxResource: null!,
    webhooks: null!,
    errors: null!,
    _api: null!,
    _prevRequestMetrics: null!,
    _emitter: null!,
    _requestSender: null!,
    _platformFunctions: null!,
    REQUESTS: null!,
    LAST_REQUEST: null!,

    setHost: function (host: string, port: string, protocol: string) {
      this._setApiField('host', host);
      if (port) {
        this.setPort(port);
      }
      if (protocol) {
        this.setProtocol(protocol);
      }
    },

    setProtocol: function (protocol: string) {
      this._setApiField('protocol', protocol.toLowerCase());
    },

    setPort: function (port: string) {
      this._setApiField('port', port);
    },

    /**
     * @private
     */
    _setApiKey(key: string): void {
      if (key) {
        this._setApiField('auth', 'Bearer ' + key);
      }
    },

    setTimeout: function (timeout: number | null | undefined) {
      this._setApiField(
        'timeout',
        timeout == null ? Telnyx.DEFAULT_TIMEOUT : timeout,
      );
    },

    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo: function (info: AppInfo): void {
      if (info && typeof info !== 'object') {
        throw new Error('AppInfo must be an object.');
      }

      if (info && !info.name) {
        throw new Error('AppInfo.name is required');
      }

      info = info || {};

      const appInfo = APP_INFO_PROPERTIES.reduce<Record<string, unknown>>(
        function (accum, prop) {
          if (typeof info[prop] == 'string') {
            accum = accum || {};

            accum[prop] = info[prop];
          }

          return accum;
        }, // @ts-expect-error force default of appInfo to be undefined with default param
        undefined,
      );

      // Kill the cached UA string because it may no longer be valid
      Telnyx.USER_AGENT_SERIALIZED = null;

      this._appInfo = appInfo as unknown as AppInfo;
    },

    setHttpAgent: function (agent: https.Agent | http.Agent) {
      if (agent instanceof https.Agent) {
        this._setApiField('https_agent', agent);
      } else {
        this._setApiField('http_agent', agent);
      }
    },

    _setApiField: function <K extends keyof TelnyxObject['_api']>(
      key: K,
      value: TelnyxObject['_api'][K],
    ) {
      this._api[key] = value;
    },

    getApiField: function <K extends keyof TelnyxObject['_api']>(
      key: K,
    ): TelnyxObject['_api'][K] {
      return this._api[key];
    },

    setClientId: function (clientId: string): void {
      this._clientId = clientId;
    },

    getClientId: function (): string | undefined {
      return this._clientId;
    },

    getConstant: function (c: string): unknown {
      switch (c) {
        case 'DEFAULT_HOST':
          return Telnyx.DEFAULT_HOST;
        case 'DEFAULT_PORT':
          return Telnyx.DEFAULT_PORT;
        case 'DEFAULT_BASE_PATH':
          return Telnyx.DEFAULT_BASE_PATH;
        case 'DEFAULT_TIMEOUT':
          return Telnyx.DEFAULT_TIMEOUT;
        case 'MAX_NETWORK_RETRY_DELAY_SEC':
          return Telnyx.MAX_NETWORK_RETRY_DELAY_SEC;
        case 'INITIAL_NETWORK_RETRY_DELAY_SEC':
          return Telnyx.INITIAL_NETWORK_RETRY_DELAY_SEC;
      }
      return (Telnyx as unknown as Record<string, unknown>)[c];
    },

    getMaxNetworkRetries: function (): number {
      return this.getApiField('maxNetworkRetries');
    },

    setMaxNetworkRetries: function (maxNetworkRetries: number) {
      if (
        (maxNetworkRetries && typeof maxNetworkRetries !== 'number') ||
        typeof maxNetworkRetries === 'undefined' ||
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

    /**
     * @private
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent and uses a cached version for a slight
     * speed advantage.
     */
    getClientUserAgent: function (cb: (userAgent: string) => void) {
      if (Telnyx.USER_AGENT_SERIALIZED) {
        return cb(Telnyx.USER_AGENT_SERIALIZED);
      }
      this.getClientUserAgentSeeded(Telnyx.USER_AGENT, function (cua: string) {
        Telnyx.USER_AGENT_SERIALIZED = cua;
        cb(Telnyx.USER_AGENT_SERIALIZED);
      });
    },

    /**
     * @private
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent by encoding a seeded object and
     * fetching a uname from the system.
     */
    getClientUserAgentSeeded: function (
      seed: Record<string, string | boolean | null>,
      cb: (userAgent: string) => void,
    ) {
      exec('uname -a', (_err, uname) => {
        const userAgent: Record<string, string> & {
          application?: TelnyxObject['_appInfo'];
        } = {};
        for (const field in seed) {
          userAgent[field] = encodeURIComponent(seed[field] ?? 'null');
        }

        // URI-encode in case there are unusual characters in the system's uname.
        userAgent.uname = encodeURIComponent(uname) || 'UNKNOWN';

        if (this._appInfo) {
          userAgent.application = this._appInfo;
        }

        cb(JSON.stringify(userAgent));
      });
    },

    getAppInfoAsString: function () {
      if (!this._appInfo) {
        return '';
      }

      let formatted = this._appInfo.name;

      if (this._appInfo.version) {
        formatted += '/' + this._appInfo.version;
      }

      if (this._appInfo.url) {
        formatted += ' (' + this._appInfo.url + ')';
      }

      return formatted;
    },

    _buildDefaultAgent: function (protocol: string) {
      if (protocol === 'http') {
        return new http.Agent({keepAlive: true});
      }

      return new https.Agent({keepAlive: true});
    },

    _prepResources: function () {
      for (const name in resources) {
        this._instantiateResource(name, this);

        // @ts-expect-error - TODO: infer this from resources object
        this[utils.toSingular(name)] = this._createConstructor(name, this);
      }
    },

    _instantiateResource: function (name: string, self) {
      const camelCaseName = utils.pascalToCamelCase(name);

      // @ts-expect-error - TODO: infer this from resources object
      self[camelCaseName] = new resources[name](self);

      // @ts-expect-error - TODO: infer this from resources object
      return self[camelCaseName];
    },

    _createConstructor: function (resourceName, self) {
      return function (args) {
        return Object.assign(
          self._instantiateResource(resourceName, self),
          args || {},
        );
      };
    },
  } as TelnyxObject; // needed to populate `this` properly

  return Telnyx;
}
