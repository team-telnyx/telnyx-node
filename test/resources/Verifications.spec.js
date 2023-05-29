'use strict';

var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('Verifications', function () {
  function responseItemFn(verification) {
    expect(verification).to.have.property('id');
    expect(verification).to.have.property('status');
    expect(verification).to.have.property('phone_number');
    expect(verification).to.have.property('timeout_secs');
    expect(verification).to.include({record_type: 'verification'});
  }

  describe('retrieve', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.retrieve(TEST_UUID).then((response) => {
        responseItemFn(response.data);
      });
    });
  });

  describe.skip('trigger verification', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications
        .create({
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
          phone_number: '+13035551234',
          type: 'sms',
        })
        .then((response) => {
          responseItemFn(response.data);
        });
    });
  });
  describe('trigger sms verification', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.sms
        .create({
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
          phone_number: '+13035551234',
        })
        .then((response) => {
          responseItemFn(response.data);
        });
    });
  });
  describe('trigger psd2 verification', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.psd2
        .create({
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
          phone_number: '+13035551234',
          amount: '99.99',
          currency: 'USD',
          payee: 'Acme Corp',
        })
        .then((response) => {
          responseItemFn(response.data);
        });
    });
  });
  describe('trigger call verification', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.call
        .create({
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
          phone_number: '+13035551234',
        })
        .then((response) => {
          responseItemFn(response.data);
        });
    });
  });
  describe('trigger flash call verification', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.flashcall
        .create({
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
          phone_number: '+13035551234',
        })
        .then((response) => {
          responseItemFn(response.data);
        });
    });
  });
  describe('trigger whatsapp verification', function () {
    it('Sends the correct request', function () {
      return telnyx.verifications.whatsapp
        .create({
          verify_profile_id: '12ade33a-21c0-473b-b055-b3c836e1c292',
          phone_number: '+13035551234',
        })
        .then((response) => {
          responseItemFn(response.data);
        });
    });
  });
});
