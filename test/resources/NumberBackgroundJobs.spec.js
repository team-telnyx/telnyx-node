'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_AUTH_KEY = utils.getUserTelnyxKey();

describe('NumberBackgroundJobs resource', function() {
  function responseFn(response) {
    expect(response.data).to.have.property('id');
    expect(response.data).to.have.property('failed_operations');
    expect(response.data).to.have.property('successful_operations');
    expect(response.data).to.have.property('pending_operations');
    expect(response.data).to.include({record_type: 'phone_numbers_job'});
  }

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.numberBackgroundJobs.retrieve('123').then(responseFn);
    });

    it('Sends the correct request [with specified auth]', function() {
      return telnyx.numberBackgroundJobs.retrieve('123', TEST_AUTH_KEY)
        .then(responseFn);
    });
  });

  describe('list', function() {
    function responseFn(response) {
      expect(response.data[0]).to.have.property('id');
      expect(response.data[0]).to.have.property('failed_operations');
      expect(response.data[0]).to.have.property('successful_operations');
      expect(response.data[0]).to.have.property('pending_operations');
      expect(response.data[0]).to.include({record_type: 'phone_numbers_job'});
    }

    it('Sends the correct request', function() {
      return telnyx.numberBackgroundJobs.list().then(responseFn);
    });
  });

  describe('updateEmergencySettings', function() {
    it('Sends the correct request', function() {
      return telnyx.numberBackgroundJobs.updateEmergencySettings({emergency_address_id: '123', emergency_enabled: true, phone_numbers: ['+15555555555']})
        .then(responseFn);
    });
  });

  describe('updateNumbers', function() {
    it('sends the correct request', function() {
      return telnyx.numberBackgroundJobs.updateNumbers({phone_numbers: ['+15555555555'], billing_group_id: '123'})
        .then(responseFn);
    });
  });

  describe('deleteNumbers', function() {
    it('sends the correct request', function() {
      return telnyx.numberBackgroundJobs.deleteNumbers({phone_numbers: ['+15555555555'], billing_group_id: '123'})
        .then(responseFn);
    });
  });
});
