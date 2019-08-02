'use strict';

var telnyx = require('../../testUtils').getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = 'KEY187557EC22404DB39975C43ACE661A58_9QdDI7XD5bvyahtaWx1YQo';

var COMMANDS = [
  'answer',
  'reject',
  'hangup',
  'bridge',
  'speak',
  'fork_start',
  'fork_stop',
  'gather_using_audio',
  'gather_using_speak',
  'playback_start',
  'playback_stop',
  'record_start',
  'record_stop',
  'send_dtmf',
  'transfer',
];


describe('Calls Resource', function() {
  describe('Call Information', function() {
    describe('retrieve', function() {
      function responseFn(response) {
        expect(response.data).to.include({call_control_id: '891510ac-f3e4-11e8-af5b-de00688a4901', record_type: 'call'});
      }

      it('Sends the correct request', function() {
        return telnyx.calls.retrieve('891510ac-f3e4-11e8-af5b-de00688a4901')
          .then(function(response) {
            expect(response.data).to.include(responseFn);
          });
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.calls.retrieve('891510ac-f3e4-11e8-af5b-de00688a4901', TEST_AUTH_KEY)
          .then(function(response) {
            expect(response.data).to.include(responseFn);
          });
      });
    });
  });

  describe('Call Events', function() {
    describe('list', function() {
      function responseFn(response) {
        expect(response.data[0]).to.have.property('call_session_id');
        expect(response.data[0]).to.have.property('call_leg_id');
        expect(response.data[0]).to.have.property('name');
        expect(response.data[0]).to.have.property('type');
        expect(response.data[0]).to.include({record_type: 'call_event'});
      }

      it('Sends the correct request', function() {
        return telnyx.callEvents.list()
          .then(responseFn);
      });
      it('Sends the correct request [with specified auth]', function() {
        return telnyx.callEvents.list(TEST_AUTH_KEY)
          .then(responseFn);
      });
    });
  });

  describe('Call Commands', function() {
    const callCreateData = {
      connection_id: 'uuid',
      to: '+18005550199',
      from: '+18005550100',
      command_id: '891510ac-f3e4-11e8-af5b-de00688a4901'
    }
    const callCommandsData = {
      bridge: {
        call_control_id: ''
      },
      speak: {
        payload: 'Hello',
        voice: 'female',
        language: 'en-US'
      },
      gather_using_audio: {
        audio_url: 'http://example.com/message.wav'
      },
      gather_using_speak: {
        payload: 'Hello',
        voice: 'male',
        language: 'en-US'
      },
      playback_start: {
        audio_url: 'http://example.com/message.wav'
      },
      record_start: {
        format: 'mp3',
        channels: 'single'
      },
      dtmf: {
        digits: '1www2WABCDw9'
      },
      send_dtmf: {
        digits: '1www2WABCDw9'
      },
      transfer: {
        to: '+13129457420'
      }
    }


    function responseFn(response) {
      expect(response.data).to.include({result: 'ok'});
    }

    describe('create', function() {
      function responseFn(response) {
        expect(response.data).to.have.property('call_session_id');
        expect(response.data).to.have.property('call_leg_id');
        expect(response.data).to.have.property('call_control_id');
        expect(response.data).to.include({record_type: 'call', is_alive: true});
      }

      it('Sends the correct request', function() {
        return telnyx.calls.create(callCreateData)
          .then(responseFn);
      });

      it('Sends the correct request [with specified auth]', function() {
        return telnyx.calls.create(callCreateData, TEST_AUTH_KEY)
          .then(responseFn);
      });
    });

    COMMANDS.forEach(function(command) {
      describe(command, function() {
        it('Sends the correct request', function() {
          return telnyx.calls.create(callCreateData)
            .then(function(response) {
              const call = response.data;
              return call[command](callCommandsData[command] || {})
                .then(responseFn);
            })
        });
        it('Sends the correct request [with specified auth]', function() {
          return telnyx.calls.create(callCreateData)
            .then(function(response) {
              const call = response.data;
              return call[command](callCommandsData[command] || {}, TEST_AUTH_KEY)
                .then(responseFn);
            })
        });
      });
    });
  });
});
