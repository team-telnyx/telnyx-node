'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

var roomCreateData = {
  unique_name: 'Demo room',
  max_participants: 20
}

describe('Rooms Resource', function () {
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('unique_name');
      expect(response.data).to.have.property('max_participants');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms.retrieve('123', TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('create', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('unique_name');
      expect(response.data).to.have.property('max_participants');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.create(faxCreateData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .create(roomCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.rooms
        .create(roomCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('send', function () {
    function responseFn(response) {
      expect(response.data).to.have.property('id');
      expect(response.data).to.have.property('unique_name');
      expect(response.data).to.have.property('max_participants');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.send(roomCreateData).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms
        .send(roomCreateData, TEST_AUTH_KEY)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth in options]', function () {
      return telnyx.rooms
        .send(roomCreateData, {api_key: TEST_AUTH_KEY})
        .then(responseFn);
    });
  });

  describe('list', function () {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('unique_name');
      expect(response.data[0]).to.have.property('max_participants');
    }

    it('Sends the correct request', function () {
      return telnyx.rooms.list().then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.rooms.list(TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('Nested', function () {
    function responseFn(response) {
      if (response.data) {
        expect(response.data).to.have.property('id');
        expect(response.data).to.have.property('unique_name');
        expect(response.data).to.have.property('max_participants');
      }
    }

    describe('del', function () {
      it('Sends the correct request', function () {
        return telnyx.rooms
          .create(roomCreateData)
          .then(function (response) {
            const room = response.data;
            return room.del().then(responseFn);
          });
      });

      it('Sends the correct request [with specified auth]', function () {
        return telnyx.rooms.retrieve('123').then(function (response) {
          const room = response.data;
          return room.del(TEST_AUTH_KEY).then(responseFn);
        });
      });
    });
  });
});
