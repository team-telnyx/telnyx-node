import * as http from 'http';
import * as https from 'https';
import {EventEmitter} from 'events';
import {exec} from 'child_process';
import {version} from '../package.json';
import {AppInfo, TelnyxObject} from './Types.js';
import * as utils from './utils.js';
// TODO: convert other resources to ts
import {Balance} from './resources/Balance.js';
import TelnyxResource from './TelnyxResource.js';
import * as _Error from './Error.js';
import Webhooks from './Webhooks.js';

export function createTelnyx() {
  Telnyx.DEFAULT_HOST = process.env.TELNYX_API_BASE || 'api.telnyx.com';
  Telnyx.DEFAULT_PORT = '443';
  Telnyx.DEFAULT_BASE_PATH = '/v2/';

  // Use node's default timeout:
  Telnyx.DEFAULT_TIMEOUT = http.createServer().timeout;

  Telnyx.PACKAGE_VERSION = version;

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

  const resources = {
    Balance,
  };

  Telnyx.TelnyxResource = TelnyxResource;
  Telnyx.resources = resources;

  function Telnyx(this: TelnyxObject, key: string, version?: string): void {
    if (!(this instanceof Telnyx)) {
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

      const appInfo = APP_INFO_PROPERTIES.reduce<Record<string, any>>(
        function (accum, prop) {
          if (typeof info[prop] == 'string') {
            accum = accum || {};

            accum[prop] = info[prop];
          }

          return accum;
        }, // @ts-ignore
        undefined,
      );

      // Kill the cached UA string because it may no longer be valid
      Telnyx.USER_AGENT_SERIALIZED = null;

      this._appInfo = appInfo;
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
      const self = this;

      exec('uname -a', function (err, uname) {
        const userAgent: Record<string, string> = {};
        for (const field in seed) {
          userAgent[field] = encodeURIComponent(seed[field] ?? 'null');
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

        // @ts-ignore - TODO: infer this from resources object
        this[utils.toSingular(name)] = this._createConstructor(name, this);
      }
    },

    _instantiateResource: function (name: string, self) {
      const camelCaseName = utils.pascalToCamelCase(name);

      // @ts-ignore - TODO: infer this from resources object
      self[camelCaseName] = new resources[name](self);

      // @ts-ignore - TODO: infer this from resources object
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
