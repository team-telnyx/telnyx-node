// NOTE: testUtils should be require'd before anything else in each spec file!

import TelnyxNode from '../../telnyx.node.js';
import {
  RequestCallback,
  RequestData,
  RequestHeaders,
  TelnyxResourceObject,
} from '../../Types.js';

type LastRequest = {
  method: string;
  url?: string;
  data: RequestData;
  headers: RequestHeaders;
  auth: string | null;
  host?: string;
  usage?: Array<string>;
};

export const utils = {
  getUserTelnyxKey: function () {
    const key =
      process.env.TELNYX_TEST_API_KEY ||
      'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

    return key;
  },

  getSpyableTelnyx: function () {
    // Provide a testable telnyx instance
    // That is, with mock-requests built in and hookable

    // needed for constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const telnyxInstance: typeof TelnyxNode = new (TelnyxNode as any)(
      'fakeAuthToken',
    );

    telnyxInstance.REQUESTS = [];

    for (const i in telnyxInstance) {
      makeInstanceSpyable(
        telnyxInstance,
        telnyxInstance[
          i as keyof typeof TelnyxNode
        ] as typeof TelnyxNode.TelnyxResource,
      );
    }

    function makeInstanceSpyable(
      telnyxInstance: typeof TelnyxNode,
      thisInstance: typeof TelnyxNode.TelnyxResource,
    ) {
      if (thisInstance instanceof TelnyxNode.TelnyxResource) {
        patchRequest(telnyxInstance, thisInstance);
      }
    }

    function patchRequest(
      telnyxInstance: typeof TelnyxNode,
      instance: TelnyxResourceObject,
    ) {
      instance._request = function (
        method: string,
        host: string | null | undefined,
        url: string | undefined,
        data: RequestData,
        auth: string | null | undefined,
        options = {
          headers: {},
        },
        cb: RequestCallback,
      ) {
        const req: LastRequest = (telnyxInstance.LAST_REQUEST = {
          method: method,
          auth: null,
          url: url,
          data: data,
          headers: options.headers || {},
        });

        if (auth) {
          req.auth = auth;
        }
        if (host) {
          req.host = host;
        }
        telnyxInstance.REQUESTS.push(data);
        cb.call(this, null);
      };
    }

    return telnyxInstance;
  },

  getTelnyxMock: function () {
    // Provide a telnyx-mock like instance
    // That is, with telnyx-mock requests built in

    // needed for constructor
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const telnyxInstance: typeof TelnyxNode = new (TelnyxNode as any)(
      'KEYSUPERSECRET', // testmode secret API KEY
    );

    telnyxInstance.prototype.setHost(
      'localhost',
      process.env.TELNYX_MOCK_PORT || '12111',
      'http',
    );

    return telnyxInstance;
  },

  /**
   * Get a random string for test Object creation
   */
  getRandomString: function () {
    return Math.random().toString(36).slice(2);
  },

  envSupportsForAwait: function () {
    return typeof Symbol !== 'undefined' && Symbol.asyncIterator;
  },

  envSupportsAwait: function () {
    try {
      eval('(async function() {})'); // eslint-disable-line no-eval
      return true;
    } catch (_err) {
      return false;
    }
  },
};
