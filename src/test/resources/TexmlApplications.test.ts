import {TelnyxObject} from '../../Types';
import {
  type ResponsePayloadList,
  type ResponsePayload,
  utils as testUtils,
} from '../utils';

const TEST_AUTH_KEY = testUtils.getUserTelnyxKey();
const TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('TeXML Apps', function () {
  let telnyxInstance: TelnyxObject;

  beforeEach(() => {
    // make specs independent
    telnyxInstance = testUtils.getTelnyxMock();
  });

  describe('list', function () {
    function responseFn(response: ResponsePayloadList) {
      expect(response).toHaveProperty('data');
      expect(response.data[0]).toHaveProperty('active');
      expect(response.data[0]).toHaveProperty('anchorsite_override');
      expect(response.data[0]).toHaveProperty('created_at');
      expect(response.data[0]).toHaveProperty('dtmf_type');
      expect(response.data[0]).toHaveProperty('first_command_timeout');
      expect(response.data[0]).toHaveProperty('first_command_timeout_secs');
      expect(response.data[0]).toHaveProperty('voice_url');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .list({
          page: {
            number: 1,
            size: 200,
          },
          filter: {
            friendly_name: {
              contains: 'string',
            },
            outbound_voice_profile_id: 'string',
          },
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .list(
          {
            page: {
              number: 1,
              size: 200,
            },
            filter: {
              friendly_name: {
                contains: 'string',
              },
              outbound_voice_profile_id: 'string',
            },
            sort: 'created_at',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .create({
          active: false,
          anchorsite_override: 'Amsterdam, Netherlands',
          dtmf_type: 'Inband',
          first_command_timeout: true,
          first_command_timeout_secs: 10,
          friendly_name: 'call-router',
          inbound: {
            channel_limit: 10,
            sip_subdomain: 'example',
            sip_subdomain_receive_settings: 'only_my_connections',
          },
          outbound: {
            channel_limit: 10,
            outbound_voice_profile_id: '1293384261075731499',
          },
          status_callback: 'https://example.com',
          status_callback_method: 'get',
          voice_fallback_url: 'https://fallback.example.com',
          voice_method: 'get',
          voice_url: 'https://example.com',
        })
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .create(
          {
            active: false,
            anchorsite_override: 'Amsterdam, Netherlands',
            dtmf_type: 'Inband',
            first_command_timeout: true,
            first_command_timeout_secs: 10,
            friendly_name: 'call-router',
            inbound: {
              channel_limit: 10,
              sip_subdomain: 'example',
              sip_subdomain_receive_settings: 'only_my_connections',
            },
            outbound: {
              channel_limit: 10,
              outbound_voice_profile_id: '1293384261075731499',
            },
            status_callback: 'https://example.com',
            status_callback_method: 'get',
            voice_fallback_url: 'https://fallback.example.com',
            voice_method: 'get',
            voice_url: 'https://example.com',
          },
          TEST_AUTH_KEY,
        )
        .then(responseFn);
    });
  });

  describe('retrieve', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .retrieve(TEST_UUID)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('del', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications.del(TEST_UUID).then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .del(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('update', function () {
    function responseFn(response: ResponsePayload) {
      expect(response).toHaveProperty('data');
    }

    test('Sends the correct request', function () {
      const requestBody = {
        active: false,
        anchorsite_override: 'Amsterdam, Netherlands',
        dtmf_type: 'Inband',
        first_command_timeout: true,
        first_command_timeout_secs: 10,
        friendly_name: 'call-router',
        inbound: {
          channel_limit: 10,
          sip_subdomain: 'example',
          sip_subdomain_receive_settings: 'only_my_connections',
        },
        outbound: {
          channel_limit: 10,
          outbound_voice_profile_id: '1293384261075731499',
        },
        status_callback: 'https://example.com',
        status_callback_method: 'get',
        voice_fallback_url: 'https://fallback.example.com',
        voice_method: 'get',
        voice_url: 'https://example.com',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .update(TEST_UUID, requestBody)
        .then(responseFn);
    });

    test('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        active: false,
        anchorsite_override: 'Amsterdam, Netherlands',
        dtmf_type: 'Inband',
        first_command_timeout: true,
        first_command_timeout_secs: 10,
        friendly_name: 'call-router',
        inbound: {
          channel_limit: 10,
          sip_subdomain: 'example',
          sip_subdomain_receive_settings: 'only_my_connections',
        },
        outbound: {
          channel_limit: 10,
          outbound_voice_profile_id: '1293384261075731499',
        },
        status_callback: 'https://example.com',
        status_callback_method: 'get',
        voice_fallback_url: 'https://fallback.example.com',
        voice_method: 'get',
        voice_url: 'https://example.com',
      };
      // @ts-expect-error TODO: import .d.ts files under src/test folder
      return telnyxInstance.texmlApplications
        .update(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
