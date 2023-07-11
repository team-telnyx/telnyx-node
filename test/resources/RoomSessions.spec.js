'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Access IP Ranges Resource', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomSessions
        .list({
          filter: {
            date_created_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            date_updated_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            date_ended_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            room_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
            active: 'true',
          },
          include_participants: 'true',
          page: {
            size: '20',
            number: '1',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomSessions
        .list(
          {
            filter: {
              date_created_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              date_updated_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              date_ended_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              room_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777f0',
              active: 'true',
            },
            include_participants: 'true',
            page: {
              size: '20',
              number: '1',
            },
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });

  describe('retrieveRoomSessionId', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomSessions
        .retrieveRoomSessionId(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomSessions
        .retrieveRoomSessionId(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('muteSession', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('result');
    }

    it('Sends the correct request', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      return telnyx.roomSessions
        .muteSession(TEST_UUID, requestBody)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      return telnyx.roomSessions
        .muteSession(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('unmuteSession', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('result');
    }

    it('Sends the correct request', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      return telnyx.roomSessions
        .unmuteSession(TEST_UUID, requestBody)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      return telnyx.roomSessions
        .unmuteSession(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('kickParticipant', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
      expect(response.data).to.have.property('result');
    }

    it('Sends the correct request', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      return telnyx.roomSessions
        .kickParticipant(TEST_UUID, requestBody)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      const requestBody = {
        exclude: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
        participants: 'all',
      };
      return telnyx.roomSessions
        .kickParticipant(TEST_UUID, requestBody, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieveParticipants', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomSessions
        .retrieveParticipants(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomSessions
        .retrieveParticipants(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('endSession', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomSessions.endSession(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomSessions
        .endSession(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
