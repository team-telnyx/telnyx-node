'use strict';


var utils = require('../../testUtils');
var telnyx = utils.getTelnyxMock();
var expect = require('chai').expect;

var TEST_UUID = '123e4567-e89b-12d3-a456-426614174000';

describe('VerifyProfiles Resource', function() {
  function responseItemFn(profile) {
    expect(profile).to.have.property('name');
    expect(profile).to.have.property('id');
    expect(profile).to.include({record_type: 'verification_profile'});
  }

  describe('list', function() {
    it('Sends the correct request', function() {
      return telnyx.verifyProfiles.list()
        .then((response) => {
          responseItemFn(response.data[0]);
        });
    });
  });

  describe('retrieve', function() {
    it('Sends the correct request', function() {
      return telnyx.verifyProfiles.retrieve(TEST_UUID)
        .then((response) => {
          responseItemFn(response.data);
        });
    })
  });

  describe('create', function() {
    it('Sends the correct request', function() {
      return telnyx.verifyProfiles.create({name: 'test', messaging_enabled: true})
        .then((response) => {
          responseItemFn(response.data);
        });
    })
  });

  describe('del', function() {
    it('Sends the correct request with create', function() {
      return telnyx.verifyProfiles.create({name: 'test', messaging_enabled: true})
        .then(function(response) {
          const verifyProfile = response.data;
          return verifyProfile.del()
            .then((response) => {
              responseItemFn(response.data);
            });
        })
    });

    it('Sends the correct request with retrieve', function() {
      return telnyx.verifyProfiles.retrieve(TEST_UUID)
        .then(function(response) {
          const verifyProfile = response.data;
          return verifyProfile.del()
            .then((response) => {
              responseItemFn(response.data);
            });
        })
    });
  });

  describe('update', function() {
    it('Sends the correct request with create', function() {
      return telnyx.verifyProfiles.create({name: 'test', messaging_enabled: true})
        .then(function(response) {
          const verifyProfile = response.data;
          return verifyProfile.update({name: 'test two', messaging_enabled: false})
            .then((response) => {
              responseItemFn(response.data);
            });
        })
    });
    it('Sends the correct request  with retrieve', function() {
      return telnyx.verifyProfiles.retrieve(TEST_UUID)
        .then(function(response) {
          const verifyProfile = response.data;
          return verifyProfile.update({name: 'test two', messaging_enabled: false})
            .then((response) => {
              responseItemFn(response.data);
            });
        })
    });
  });
});
