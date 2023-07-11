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
      return telnyx.roomCompositions
        .list({
          filter: {
            date_created_at: {
              eq: '2021-04-25',
              gte: '2021-04-25',
              lte: '2021-04-25',
            },
            session_id: '92e7d459-bcc5-4386-9f5f-6dd14a82588d',
            status: 'completed',
          },
          page: {
            size: '20',
            number: '1',
          },
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions
        .list(
          {
            filter: {
              date_created_at: {
                eq: '2021-04-25',
                gte: '2021-04-25',
                lte: '2021-04-25',
              },
              session_id: '92e7d459-bcc5-4386-9f5f-6dd14a82588d',
              status: 'completed',
            },
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
      return telnyx.roomCompositions
        .create({
          format: 'mp4',
          resolution: '800x600',
          session_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777b0',
          video_layout: {
            property1: {
              height: 360,
              max_columns: 3,
              max_rows: 3,
              video_sources: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
              width: 480,
              x_pos: 100,
              y_pos: 100,
              z_pos: 1,
            },
            property2: {
              height: 360,
              max_columns: 3,
              max_rows: 3,
              video_sources: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
              width: 480,
              x_pos: 100,
              y_pos: 100,
              z_pos: 1,
            },
          },
          webhook_event_failover_url: 'https://failover.example.com',
          webhook_event_url: 'https://example.com',
          webhook_timeout_secs: 25,
        })
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions
        .create(
          {
            format: 'mp4',
            resolution: '800x600',
            session_id: '0ccc7b54-4df3-4bca-a65a-3da1ecc777b0',
            video_layout: {
              property1: {
                height: 360,
                max_columns: 3,
                max_rows: 3,
                video_sources: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
                width: 480,
                x_pos: 100,
                y_pos: 100,
                z_pos: 1,
              },
              property2: {
                height: 360,
                max_columns: 3,
                max_rows: 3,
                video_sources: ['7b61621f-62e0-4aad-ab11-9fd19e272e73'],
                width: 480,
                x_pos: 100,
                y_pos: 100,
                z_pos: 1,
              },
            },
            webhook_event_failover_url: 'https://failover.example.com',
            webhook_event_url: 'https://example.com',
            webhook_timeout_secs: 25,
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
      return telnyx.roomCompositions.del(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions
        .del(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
  describe('retrieve', function () {
    function responseFn(response) {
      expect(response).to.have.property('data');
    }

    it('Sends the correct request', function () {
      return telnyx.roomCompositions.retrieve(TEST_UUID).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function () {
      return telnyx.roomCompositions
        .retrieve(TEST_UUID, TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
