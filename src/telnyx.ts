import * as http from 'http';
import * as https from 'https';
import {EventEmitter} from 'events';
import {exec} from 'child_process';
import {AppInfo, TelnyxObject} from './Types';
import * as utils from './utils';

//#region Resources
import {AccessIpAddress} from './resources/AccessIpAddress';
import {AccessIpRanges} from './resources/AccessIpRanges';
import {Actions} from './resources/Actions';
import {ActionsSimCards} from './resources/ActionsSimCards';
import {ActivateDeactivateBulkCredentials} from './resources/ActivateDeactivateBulkCredentials';
import {Addresses} from './resources/Addresses';
import {AiAssistants} from './resources/AiAssistants';
import {AiAudioTranscriptions} from './resources/AiAudioTranscriptions';
import {AiChatCompletions} from './resources/AiChatCompletions';
import {AiEmbeddings} from './resources/AiEmbeddings';
import {AiEmbeddingsBuckets} from './resources/AiEmbeddingsBuckets';
import {AiEmbeddingsSimilaritySearch} from './resources/AiEmbeddingsSimilaritySearch';
import {AiModels} from './resources/AiModels';
import {AiSummarize} from './resources/AiSummarize';
import {AuthenticationProviders} from './resources/AuthenticationProviders';
import {AvailablePhoneNumbers} from './resources/AvailablePhoneNumbers';
import {Balance} from './resources/Balance';
import {BillingGroups} from './resources/BillingGroups';
import {Brands} from './resources/Brands';
import {BulkCredentials} from './resources/BulkCredentials';
import {BulkSoleProprietorCreation} from './resources/BulkSoleProprietorCreation';
import {BulkTelephonyCredentials} from './resources/BulkTelephonyCredentials';
import {CallControlApplications} from './resources/CallControlApplications';
import {CallEvents} from './resources/CallEvents';
import {CallRecordings} from './resources/CallRecordings';
import {Calls} from './resources/Calls';
import {Campaign} from './resources/Campaign';
import {CampaignBuilder} from './resources/CampaignBuilder';
import {CdrUsageReports} from './resources/CdrUsageReports';
import {Channelzones} from './resources/Channelzones';
import {Conferences} from './resources/Conferences';
import {Connections} from './resources/Connections';
import {CredentialConnections} from './resources/CredentialConnections';
import {PhoneNumbersCsvDownloads} from './resources/PhoneNumbersCsvDownloads';
import {CustomerServiceRecords} from './resources/CustomerServiceRecords';
import {DetailRecords} from './resources/DetailRecords';
import {DialogflowConnections} from './resources/DialogflowConnections';
import {DocumentLinks} from './resources/DocumentLinks';
import {Documents} from './resources/Documents';
import {DynamicEmergency} from './resources/DynamicEmergency';
import {DynamicEmergencyAddresses} from './resources/DynamicEmergencyAddresses';
import {DynamicEmergencyEndpoints} from './resources/DynamicEmergencyEndpoints';
import {AuditEvents} from './resources/AuditEvents';
import {ExternalConnections} from './resources/ExternalConnections';
import {FaxApplications} from './resources/FaxApplications';
import {Faxes} from './resources/Faxes';
import {FqdnConnections} from './resources/FqdnConnections';
import {Fqdns} from './resources/Fqdns';
import {GlobalIps} from './resources/GlobalIps';
import {InventoryCoverage} from './resources/InventoryCoverage';
import {IpConnections} from './resources/IpConnections';
import {Ips} from './resources/Ips';
import {ManagedAccounts} from './resources/ManagedAccounts';
import {MdrDetailReports} from './resources/MdrDetailReports';
import {MdrUsageReports} from './resources/MdrUsageReports';
import {MediaStorageApi} from './resources/MediaStorageApi';
import {Messages} from './resources/Messages';
import {MessagingHostedNumberOrders} from './resources/MessagingHostedNumberOrders';
import {MessagingHostedNumbers} from './resources/MessagingHostedNumbers';
import {MessagingProfileMetrics} from './resources/MessagingProfileMetrics';
import {MessagingProfiles} from './resources/MessagingProfiles';
import {MessagingShortCodes} from './resources/MessagingShortCodes';
import {MessagingTollfreeVerification} from './resources/MessagingTollfreeVerification';
import {MessagingUrlDomains} from './resources/MessagingUrlDomains';
import {MobileNetworkOperators} from './resources/MobileNetworkOperators';
import {MobileOperatorNetworks} from './resources/MobileOperatorNetworks';
import {Networks} from './resources/Networks';
import {NotificationEvents} from './resources/NotificationEvents';
import {NumberBackgroundJobs} from './resources/NumberBackgroundJobs';
import {NumberLookup} from './resources/NumberLookup';
import {NumberOrderDocuments} from './resources/NumberOrderDocuments';
import {NumberOrders} from './resources/NumberOrders';
import {NumberPortouts} from './resources/NumberPortouts';
import {NumberReservations} from './resources/NumberReservations';
import {NumbersFeatures} from './resources/NumbersFeatures';
import {Object as ObjectResource} from './resources/Object';
import {OtaUpdates} from './resources/OtaUpdates';
import {OutboundVoiceProfiles} from './resources/OutboundVoiceProfiles';
import {Payment} from './resources/Payment';
import {PhoneNumberAssignmentByProfile} from './resources/PhoneNumberAssignmentByProfile';
import {PhoneNumberBlockOrders} from './resources/PhoneNumberBlockOrders';
import {PhoneNumberBlocksBackgroundJobs} from './resources/PhoneNumberBlocksBackgroundJobs';
import {PhoneNumberCampaigns} from './resources/PhoneNumberCampaigns';
import {PhoneNumberOrderDocuments} from './resources/PhoneNumberOrderDocuments';
import {PhoneNumbers} from './resources/PhoneNumbers';
import {PhoneNumbersInboundChannels} from './resources/PhoneNumbersInboundChannels';
import {PhoneNumbersMessaging} from './resources/PhoneNumbersMessaging';
import {PhoneNumbersRegulatoryRequirements} from './resources/PhoneNumbersRegulatoryRequirements';
import {PhoneNumbersSlim} from './resources/PhoneNumbersSlim';
import {PhoneNumbersVoice} from './resources/PhoneNumbersVoice';
import {PortabilityChecks} from './resources/PortabilityChecks';
import {PortingEvents} from './resources/PortingEvents';
import {PortingLoaConfigurations} from './resources/PortingLoaConfigurations';
import {PortingReports} from './resources/PortingReports';
import {PortoutEvents} from './resources/PortoutEvents';
import {PortingOrders} from './resources/PortingOrders';
import {PortingPhoneNumbers} from './resources/PortingPhoneNumbers';
import {PortoutRequests} from './resources/PortoutRequests';
import {PresignedObjectUrls} from './resources/PresignedObjectUrls';
import {PrivateWirelessGateways} from './resources/PrivateWirelessGateways';
import {PublicInternetGateways} from './resources/PublicInternetGateways';
import {PushCredentials} from './resources/PushCredentials';
import {Queues} from './resources/Queues';
import {RecordingsCommands} from './resources/RecordingsCommands';
import {Regions} from './resources/Regions';
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
import {StorageBuckets} from './resources/StorageBuckets';
import {TelephonyCredentials} from './resources/TelephonyCredentials';
import {Texml} from './resources/Texml';
import {TexmlApplications} from './resources/TexmlApplications';
import {Verifications} from './resources/Verifications';
import {VerifiedNumbers} from './resources/VerifiedNumbers';
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
import {AvailablePhoneNumbersBlocks} from './resources/AvailablePhoneNumbersBlocks';

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
    Actions,
    ActionsSimCards,
    ActivateDeactivateBulkCredentials,
    Addresses,
    AiAssistants,
    AiAudioTranscriptions,
    AiChatCompletions,
    AiEmbeddings,
    AiEmbeddingsBuckets,
    AiEmbeddingsSimilaritySearch,
    AiModels,
    AiSummarize,
    AuthenticationProviders,
    AvailablePhoneNumbers,
    AvailablePhoneNumbersBlocks,
    Balance,
    BillingGroups,
    Brands,
    BulkCredentials,
    BulkSoleProprietorCreation,
    BulkTelephonyCredentials,
    CallControlApplications,
    CallEvents,
    CallRecordings,
    Calls,
    Campaign,
    CampaignBuilder,
    CdrUsageReports,
    Channelzones,
    Conferences,
    Connections,
    CredentialConnections,
    CustomerServiceRecords,
    DetailRecords,
    DialogflowConnections,
    DocumentLinks,
    Documents,
    DynamicEmergency,
    DynamicEmergencyAddresses,
    DynamicEmergencyEndpoints,
    AuditEvents,
    ExternalConnections,
    FaxApplications,
    Faxes,
    FqdnConnections,
    Fqdns,
    GlobalIps,
    InventoryCoverage,
    IpConnections,
    Ips,
    ManagedAccounts,
    MdrDetailReports,
    MdrUsageReports,
    MediaStorageApi,
    Messages,
    MessagingHostedNumberOrders,
    MessagingHostedNumbers,
    MessagingProfileMetrics,
    MessagingProfiles,
    MessagingShortCodes,
    MessagingTollfreeVerification,
    MessagingUrlDomains,
    MobileNetworkOperators,
    MobileOperatorNetworks,
    Networks,
    NotificationEvents,
    NumberBackgroundJobs,
    NumberLookup,
    NumberOrderDocuments,
    NumberOrders,
    NumberPortouts,
    NumberReservations,
    NumbersFeatures,
    ObjectApi: ObjectResource,
    OtaUpdates,
    OutboundVoiceProfiles,
    Payment,
    PhoneNumberAssignmentByProfile,
    PhoneNumberBlockOrders,
    PhoneNumberBlocksBackgroundJobs,
    PhoneNumberCampaigns,
    PhoneNumberOrderDocuments,
    PhoneNumbersRegulatoryRequirements,
    PhoneNumbersSlim,
    PhoneNumbers,
    PhoneNumbersInboundChannels,
    PhoneNumbersMessaging,
    PhoneNumbersVoice,
    PhoneNumbersCsvDownloads,
    PortingEvents,
    PortoutEvents,
    PortabilityChecks,
    PortingLoaConfigurations,
    PortingOrders,
    PortingReports,
    PortingPhoneNumbers,
    PortoutRequests,
    PresignedObjectUrls,
    PrivateWirelessGateways,
    PublicInternetGateways,
    PushCredentials,
    Queues,
    RecordingsCommands,
    Regions,
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
    StorageBuckets,
    TelephonyCredentials,
    Texml,
    TexmlApplications,
    Verifications,
    VerifiedNumbers,
    VerifyProfiles,
    VirtualCrossConnects,
    WdrDetailReports,
    WebhooksApi: WebhooksResource,
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
