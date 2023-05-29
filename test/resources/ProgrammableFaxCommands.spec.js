'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();
var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('fax', function () {
  describe('list', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.programmableFaxCommands
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
            unique_name: 'my_video_room',
          },
          include_sessions: 'true',
          page: {
            size: '20',
            number: '1',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.programmableFaxCommands
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
              unique_name: 'my_video_room',
            },
            include_sessions: 'true',
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
  describe('create', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.programmableFaxCommands
        .send({
          connection_id: '234423',
          from: '+13125790015',
          media_name: 'my_media_uploaded_to_media_storage_api',
          media_url:
            'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          monochrome: false,
          quality: 'high',
          store_media: false,
          t38_enabled: true,
          to: '+13127367276',
          webhook_url: 'https://www.example.com/server-b/',
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.programmableFaxCommands
        .send(
          {
            connection_id: '234423',
            from: '+13125790015',
            media_name: 'my_media_uploaded_to_media_storage_api',
            media_url:
              'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            monochrome: false,
            quality: 'high',
            store_media: false,
            t38_enabled: true,
            to: '+13127367276',
            webhook_url: 'https://www.example.com/server-b/',
          },
          TEST_AUTH_KEY
        )
        .then(responseFn);
    });
  });
  describe('del', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(204);
    }

    it('Sends the correct request', function () {
      return telnyx.programmableFaxCommands.del(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.programmableFaxCommands
        .del(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.programmableFaxCommands
        .retrieve(TEST_UUID)
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.programmableFaxCommands
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('cancel', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(202);
    }

    it('Sends the correct request', function () {
      return telnyx.programmableFaxCommands.cancel(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.programmableFaxCommands
        .cancel(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('refresh', function () {
    function responseFn(response) {
      expect(response.lastResponse.statusCode).to.equal(200);
    }

    it('Sends the correct request', function () {
      return telnyx.programmableFaxCommands.refresh(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.programmableFaxCommands
        .refresh(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
