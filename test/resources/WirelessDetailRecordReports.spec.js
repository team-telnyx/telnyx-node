'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('WirelessDetailRecordReports Resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('status');
    expect(response.data).to.have.property('start_time');
    expect(response.data).to.have.property('end_time');
    expect(response.data).to.have.property('report_url');
    expect(response.data).to.include({record_type: 'detail_records_report'});
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.wirelessDetailRecordReports.retrieve('12ade33a-21c0-473b-b055-b3c836e1c292')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.wirelessDetailRecordReports.retrieve('12ade33a-21c0-473b-b055-b3c836e1c292', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('status');
      expect(response.data[0]).to.have.property('start_time');
      expect(response.data[0]).to.have.property('end_time');
      expect(response.data[0]).to.have.property('report_url');
      expect(response.data[0]).to.include({record_type: 'detail_records_report'});
    }

    it('Sends the correct request', function() {
      return telnyx.wirelessDetailRecordReports.list()
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.wirelessDetailRecordReports.list(TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.wirelessDetailRecordReports.create({
        start_time: '2018-02-01T22:25:27.521Z',
        end_time: '2018-02-02T22:25:27.521Z'
      }).then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.wirelessDetailRecordReports.create({
        start_time: '2018-02-01T22:25:27.521Z',
        end_time: '2018-02-02T22:25:27.521Z'
      }, TEST_AUTH_KEY).then(responseFn);
    });
  });

  describe('del', function() {
    it('Sends the correct request', function() {
      return telnyx.wirelessDetailRecordReports.del('12ade33a-21c0-473b-b055-b3c836e1c292')
        .then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.wirelessDetailRecordReports.del('12ade33a-21c0-473b-b055-b3c836e1c292', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });
});
