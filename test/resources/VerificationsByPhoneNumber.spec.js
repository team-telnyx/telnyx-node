'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

describe('VerificationsByPhoneNumbers Resource', function () {
  function responseFn(response) {
    expect(response.data[0]).to.have.property('id');
    expect(response.data[0]).to.have.property('status');
    expect(response.data[0]).to.have.property('phone_number');
    expect(response.data[0]).to.have.property('timeout_secs');
    expect(response.data[0]).to.have.property('verify_profile_id');
    expect(response.data[0]).to.include({record_type: 'verification'});
  }

  describe('list', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.byPhoneNumber
        .list('+13035551234')
        .then(responseFn);
    });
  });

  describe('submit', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.byPhoneNumber
        .submit('+13035551234', {
          code: '17686',
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
        })
        .then((response) => {
          expect(response.data).to.have.property('phone_number');
          expect(response.data).to.have.property('response_code');
        });
    });
  });

  describe('create', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.byPhoneNumber
        .create('+13035551234', {
          code: '17686',
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
        })
        .then((response) => {
          expect(response.data).to.have.property('phone_number');
          expect(response.data).to.have.property('response_code');
        });
    });
  });

  describe('verify', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.byPhoneNumber
        .verify('+13035551234', {
          code: '17686',
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
        })
        .then((response) => {
          expect(response.data).to.have.property('phone_number');
          expect(response.data).to.have.property('response_code');
        });
    });
  });
});
