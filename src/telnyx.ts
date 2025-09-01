import * as http from 'http';
import * as https from 'https';
import {EventEmitter} from 'events';
import {exec} from 'child_process';
import {AppInfo, TelnyxObject} from './Types.js';
import * as utils from './utils.js';

//#region Resources
import {AccessIpAddress} from './resources/AccessIpAddress.js';
import {AccessIpRanges} from './resources/AccessIpRanges.js';
import {Actions} from './resources/Actions.js';
import {ActionsSimCards} from './resources/ActionsSimCards.js';
import {ActivateDeactivateBulkCredentials} from './resources/ActivateDeactivateBulkCredentials.js';
import {Addresses} from './resources/Addresses.js';
import {AiAssistants} from './resources/AiAssistants.js';
import {AiAudioTranscriptions} from './resources/AiAudioTranscriptions.js';
import {AiChatCompletions} from './resources/AiChatCompletions.js';
import {AiEmbeddings} from './resources/AiEmbeddings.js';
import {AiEmbeddingsBuckets} from './resources/AiEmbeddingsBuckets.js';
import {AiEmbeddingsSimilaritySearch} from './resources/AiEmbeddingsSimilaritySearch.js';
import {AiModels} from './resources/AiModels.js';
import {AiSummarize} from './resources/AiSummarize.js';
import {AuthenticationProviders} from './resources/AuthenticationProviders.js';
import {AvailablePhoneNumbers} from './resources/AvailablePhoneNumbers.js';
import {Balance} from './resources/Balance.js';
import {BillingGroups} from './resources/BillingGroups.js';
import {Brands} from './resources/Brands.js';
import {BulkCredentials} from './resources/BulkCredentials.js';
import {BulkSoleProprietorCreation} from './resources/BulkSoleProprietorCreation.js';
import {BulkTelephonyCredentials} from './resources/BulkTelephonyCredentials.js';
import {CallControlApplications} from './resources/CallControlApplications.js';
import {CallEvents} from './resources/CallEvents.js';
import {CallRecordings} from './resources/CallRecordings.js';
import {Calls} from './resources/Calls.js';
import {Campaign} from './resources/Campaign.js';
import {CampaignBuilder} from './resources/CampaignBuilder.js';
import {CdrUsageReports} from './resources/CdrUsageReports.js';
import {Channelzones} from './resources/Channelzones.js';
import {Conferences} from './resources/Conferences.js';
import {Connections} from './resources/Connections.js';
import {CredentialConnections} from './resources/CredentialConnections.js';
import {PhoneNumbersCsvDownloads} from './resources/PhoneNumbersCsvDownloads.js';
import {CustomerServiceRecords} from './resources/CustomerServiceRecords.js';
import {DetailRecords} from './resources/DetailRecords.js';
import {DialogflowConnections} from './resources/DialogflowConnections.js';
import {DocumentLinks} from './resources/DocumentLinks.js';
import {Documents} from './resources/Documents.js';
import {DynamicEmergency} from './resources/DynamicEmergency.js';
import {DynamicEmergencyAddresses} from './resources/DynamicEmergencyAddresses.js';
import {DynamicEmergencyEndpoints} from './resources/DynamicEmergencyEndpoints.js';
import {AuditEvents} from './resources/AuditEvents.js';
import {ExternalConnections} from './resources/ExternalConnections.js';
import {FaxApplications} from './resources/FaxApplications.js';
import {Faxes} from './resources/Faxes.js';
import {FqdnConnections} from './resources/FqdnConnections.js';
import {Fqdns} from './resources/Fqdns.js';
import {GlobalIps} from './resources/GlobalIps.js';
import {InventoryCoverage} from './resources/InventoryCoverage.js';
import {IpConnections} from './resources/IpConnections.js';
import {Ips} from './resources/Ips.js';
import {ManagedAccounts} from './resources/ManagedAccounts.js';
import {MdrDetailReports} from './resources/MdrDetailReports.js';
import {MdrUsageReports} from './resources/MdrUsageReports.js';
import {MediaStorageApi} from './resources/MediaStorageApi.js';
import {Messages} from './resources/Messages.js';
import {MessagingHostedNumberOrders} from './resources/MessagingHostedNumberOrders.js';
import {MessagingHostedNumbers} from './resources/MessagingHostedNumbers.js';
import {MessagingProfiles} from './resources/MessagingProfiles.js';
import {MessagingShortCodes} from './resources/MessagingShortCodes.js';
import {MessagingTollfreeVerification} from './resources/MessagingTollfreeVerification.js';
import {MessagingUrlDomains} from './resources/MessagingUrlDomains.js';
import {MobileNetworkOperators} from './resources/MobileNetworkOperators.js';
import {MobileOperatorNetworks} from './resources/MobileOperatorNetworks.js';
import {Networks} from './resources/Networks.js';
import {NotificationEvents} from './resources/NotificationEvents.js';
import {NumberBackgroundJobs} from './resources/NumberBackgroundJobs.js';
import {NumberLookup} from './resources/NumberLookup.js';
import {NumberOrders} from './resources/NumberOrders.js';
import {NumberPortouts} from './resources/NumberPortouts.js';
import {NumberReservations} from './resources/NumberReservations.js';
import {NumbersFeatures} from './resources/NumbersFeatures.js';
import {Object as ObjectResource} from './resources/Object.js';
import {OtaUpdates} from './resources/OtaUpdates.js';
import {OutboundVoiceProfiles} from './resources/OutboundVoiceProfiles.js';
import {Payment} from './resources/Payment.js';
import {PhoneNumberAssignmentByProfile} from './resources/PhoneNumberAssignmentByProfile.js';
import {PhoneNumberBlockOrders} from './resources/PhoneNumberBlockOrders.js';
import {PhoneNumberBlocksBackgroundJobs} from './resources/PhoneNumberBlocksBackgroundJobs.js';
import {PhoneNumberCampaigns} from './resources/PhoneNumberCampaigns.js';
import {PhoneNumbers} from './resources/PhoneNumbers.js';
import {InboundChannels} from './resources/InboundChannels.js';
import {PhoneNumbersMessaging} from './resources/PhoneNumbersMessaging.js';
import {PhoneNumbersRegulatoryRequirements} from './resources/PhoneNumbersRegulatoryRequirements.js';
import {PhoneNumbersSlim} from './resources/PhoneNumbersSlim.js';
import {PhoneNumbersVoice} from './resources/PhoneNumbersVoice.js';
import {PortabilityChecks} from './resources/PortabilityChecks.js';
import {PortingEvents} from './resources/PortingEvents.js';
import {PortingLoaConfigurations} from './resources/PortingLoaConfigurations.js';
import {PortingReports} from './resources/PortingReports.js';
import {PortoutEvents} from './resources/PortoutEvents.js';
import {PortingOrders} from './resources/PortingOrders.js';
import {PortingPhoneNumbers} from './resources/PortingPhoneNumbers.js';
import {PortoutRequests} from './resources/PortoutRequests.js';
import {PresignedObjectUrls} from './resources/PresignedObjectUrls.js';
import {PrivateWirelessGateways} from './resources/PrivateWirelessGateways.js';
import {PublicInternetGateways} from './resources/PublicInternetGateways.js';
import {PushCredentials} from './resources/PushCredentials.js';
import {Queues} from './resources/Queues.js';
import {RecordingsCommands} from './resources/RecordingsCommands.js';
import {Regions} from './resources/Regions.js';
import {RegulatoryRequirements} from './resources/RegulatoryRequirements.js';
import {Reporting} from './resources/Reporting.js';
import {Reports} from './resources/Reports.js';
import {ReportsMdrs} from './resources/ReportsMdrs.js';
import {Requirements} from './resources/Requirements.js';
import {RequirementTypes} from './resources/RequirementTypes.js';
import {RoomCompositions} from './resources/RoomCompositions.js';
import {RoomParticipants} from './resources/RoomParticipants.js';
import {RoomRecordings} from './resources/RoomRecordings.js';
import {Rooms} from './resources/Rooms.js';
import {RoomsClientToken} from './resources/RoomsClientToken.js';
import {RoomsClientTokens} from './resources/RoomsClientTokens.js';
import {RoomSessions} from './resources/RoomSessions.js';
import {SharedCampaigns} from './resources/SharedCampaigns.js';
import {ShortCodes} from './resources/ShortCodes.js';
import {SimCardActions} from './resources/SimCardActions.js';
import {SimCardGroupActions} from './resources/SimCardGroupActions.js';
import {SimCardGroups} from './resources/SimCardGroups.js';
import {SimCardOrders} from './resources/SimCardOrders.js';
import {SimCards} from './resources/SimCards.js';
import {StorageBuckets} from './resources/StorageBuckets.js';
import {TelephonyCredentials} from './resources/TelephonyCredentials.js';
import {Texml} from './resources/Texml.js';
import {TexmlApplications} from './resources/TexmlApplications.js';
import {Verifications} from './resources/Verifications.js';
import {VerifiedNumbers} from './resources/VerifiedNumbers.js';
import {VerifyProfiles} from './resources/VerifyProfiles.js';
import {VirtualCrossConnects} from './resources/VirtualCrossConnects.js';
import {WdrDetailReports} from './resources/WdrDetailReports.js';
import {Webhooks as WebhooksResource} from './resources/Webhooks.js';
import {WireguardInterfaces} from './resources/WireguardInterfaces.js';
import {WirelessDetailRecordReports} from './resources/WirelessDetailRecordReports.js';
//

import TelnyxResource from './TelnyxResource.js';
import * as _Error from './Error.js';
import Webhooks from './Webhooks.js';
import {AvailablePhoneNumbersBlocks} from './resources/AvailablePhoneNumbersBlocks.js';

export function createTelnyx() {
  Telnyx.DEFAULT_HOST = process.env.TELNYX_API_BASE || 'api.telnyx.com';
  Telnyx.DEFAULT_PORT = '443';
  Telnyx.DEFAULT_BASE_PATH = '/v2/';

  /**
   * Default timeout for requests made by the library (in ms).
   * https://github.com/team-telnyx/telnyx-node/issues/218
   */
  Telnyx.DEFAULT_TIMEOUT = 120000;

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

  /**
   * - https://github.com/team-telnyx/telnyx-node/issues/218
   * - https://github.com/nodejs/node/blob/b8870c4a61f9c4c4490e43472e98655b00055359/lib/https.js#L357
   */
  const HTTP_AGENT_DEFAULT_OPTIONS: https.AgentOptions = https.globalAgent.options;

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
    InboundChannels,
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
    PhoneNumbersRegulatoryRequirements,
    PhoneNumbersSlim,
    PhoneNumbers,
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
      http_agent: new http.Agent(HTTP_AGENT_DEFAULT_OPTIONS),
      https_agent: new https.Agent(HTTP_AGENT_DEFAULT_OPTIONS),
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

    getHttpsAgent: function (): https.Agent {
      return this.getApiField('https_agent');
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
        return new http.Agent(HTTP_AGENT_DEFAULT_OPTIONS);
      }

      return new https.Agent(HTTP_AGENT_DEFAULT_OPTIONS);
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
