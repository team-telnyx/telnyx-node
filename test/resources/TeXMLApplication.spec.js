'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('TeXML', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data[0]).to.have.property('active');
      expect(response.data[0]).to.have.property('anchorsite_override');
      expect(response.data[0]).to.have.property('created_at');
      expect(response.data[0]).to.have.property('ip_address');
      expect(response.data[0]).to.have.property('dtmf_type');
      expect(response.data[0]).to.have.property('first_command_timeout');
      expect(response.data[0]).to.have.property('first_command_timeout_secs');
      expect(response.data[0]).to.have.property('voice_url');
    }

    it('Sends the correct request', function () {
      return telnyx.teXmlApplication
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

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.teXmlApplication
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
            sort: 'string',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.teXmlApplication
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

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.teXmlApplication
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
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('del', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.teXmlApplication.del(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.teXmlApplication
        .del(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.teXmlApplication.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.teXmlApplication
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('update', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
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
      return telnyx.teXmlApplication
        .update(TEST_UUID, requestBody)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
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
      return telnyx.teXmlApplication
        .update(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
